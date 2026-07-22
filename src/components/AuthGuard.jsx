'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

// Ninguna pantalla bajo (tabs) verificaba si había sesión antes de pedir
// datos — funcionaba "por accidente" en el navegador normal porque
// siempre se entraba desde /login primero. La PWA instalada tiene
// `start_url: '/tareas'` fijo en el manifest, así que si se abre sin
// sesión (recién instalada, token vencido, etc.), este guard es lo que
// evita el estado roto de "usuario invitado sin JWT" — redirige a la
// landing (/) limpio en vez de dejar que la página intente cargar datos
// que no puede pedir sin token.
export default function AuthGuard({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/');
    }
  }, [loading, user, router]);

  // Mientras se confirma si hay sesión (o si no hay usuario y ya se
  // mandó a redirigir), no se renderiza nada — evita el parpadeo de
  // contenido protegido antes del redirect.
  if (loading || !user) {
    return (
      <div className="min-h-screen bg-[#150f27] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin" />
      </div>
    );
  }

  return children;
}