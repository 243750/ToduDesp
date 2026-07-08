const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL && typeof window !== 'undefined') {
  // Esto solo debería verse en desarrollo si falta el .env.local
  console.warn(
    '[api] NEXT_PUBLIC_API_URL no está definida. Revisa tu archivo .env.local'
  );
}

/**
 * Error tipado que trae el mensaje real del backend (campo `mensaje`,
 * a veces `message`) y el status HTTP, para poder mostrar algo útil en UI.
 */
export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

function getToken() {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem('todu_token');
}

export function setToken(token) {
  if (typeof window === 'undefined') return;
  if (token) {
    window.localStorage.setItem('todu_token', token);
  } else {
    window.localStorage.removeItem('todu_token');
  }
}

export function getStoredUser() {
  if (typeof window === 'undefined') return null;
  const raw = window.localStorage.getItem('todu_user');
  return raw ? JSON.parse(raw) : null;
}

export function setStoredUser(user) {
  if (typeof window === 'undefined') return;
  if (user) {
    window.localStorage.setItem('todu_user', JSON.stringify(user));
  } else {
    window.localStorage.removeItem('todu_user');
  }
}

/**
 * Llama al api-gateway. `path` empieza con "/", ej: "/auth/login".
 * Agrega automáticamente el header Authorization si hay token guardado.
 * `body` puede ser un objeto (se manda como JSON) o un FormData (evidencia foto).
 */
export async function apiFetch(path, { method = 'GET', body, headers = {}, auth = true } = {}) {
  const finalHeaders = { ...headers };

  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
  if (!isFormData && body !== undefined) {
    finalHeaders['Content-Type'] = 'application/json';
  }

  if (auth) {
    const token = getToken();
    if (token) finalHeaders['Authorization'] = `Bearer ${token}`;
  }

  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method,
      headers: finalHeaders,
      body: body === undefined ? undefined : isFormData ? body : JSON.stringify(body),
    });
  } catch (networkErr) {
    // El fetch ni siquiera llegó al servidor (caído, CORS, sin internet, etc.)
    throw new ApiError(
      'No se pudo conectar con el servidor de Todú. Revisa tu conexión o intenta más tarde.',
      0,
      null
    );
  }

  let data = null;
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    data = await response.json().catch(() => null);
  }

  if (!response.ok) {
    const message = data?.mensaje || data?.message || `Error ${response.status}`;
    throw new ApiError(message, response.status, data);
  }

  return data;
}

// Atajos por verbo, para que el código que los usa se lea más claro.
export const api = {
  get: (path, opts) => apiFetch(path, { ...opts, method: 'GET' }),
  post: (path, body, opts) => apiFetch(path, { ...opts, method: 'POST', body }),
  put: (path, body, opts) => apiFetch(path, { ...opts, method: 'PUT', body }),
  delete: (path, opts) => apiFetch(path, { ...opts, method: 'DELETE' }),
};
