'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, User, Lock, Trash2, LogOut, Check } from 'lucide-react';
import { useSidebar } from '../../../context/SidebarContext';
import { useAuth } from '../../../context/AuthContext';
import { api, setStoredUser } from '../../../lib/api';

function Card({ icon: Icon, title, children }) {
  return (
    <div className="bg-[#1f1638] border border-white/5 rounded-3xl p-5 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
          <Icon className="w-4 h-4" />
        </div>
        <h2 className="text-sm font-bold text-white">{title}</h2>
      </div>
      {children}
    </div>
  );
}

const inputClass =
  'w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 outline-none focus:border-violet-500/50 transition-colors';

export default function AjustesPage() {
  const { open: openSidebar } = useSidebar();
  const { user, logout } = useAuth();
  const router = useRouter();

  // --- Username ---
  const [username, setUsername] = useState(user?.username || '');
  const [usernameMsg, setUsernameMsg] = useState(null);
  const [usernameLoading, setUsernameLoading] = useState(false);

  const handleUsername = async (e) => {
    e.preventDefault();
    setUsernameMsg(null);
    setUsernameLoading(true);
    try {
      const data = await api.put('/perfil/username', { username });
      const updated = { ...user, username: data.user?.username || username };
      setStoredUser(updated);
      setUsernameMsg({ type: 'ok', text: 'Username actualizado.' });
    } catch (err) {
      setUsernameMsg({ type: 'error', text: err.message });
    } finally {
      setUsernameLoading(false);
    }
  };

  // --- Password ---
  const [passwordActual, setPasswordActual] = useState('');
  const [passwordNuevo, setPasswordNuevo] = useState('');
  const [passwordMsg, setPasswordMsg] = useState(null);
  const [passwordLoading, setPasswordLoading] = useState(false);

  const handlePassword = async (e) => {
    e.preventDefault();
    setPasswordMsg(null);
    setPasswordLoading(true);
    try {
      await api.put('/perfil/password', { passwordActual, passwordNuevo });
      setPasswordMsg({ type: 'ok', text: 'Contraseña actualizada.' });
      setPasswordActual('');
      setPasswordNuevo('');
    } catch (err) {
      setPasswordMsg({ type: 'error', text: err.message });
    } finally {
      setPasswordLoading(false);
    }
  };

  // --- Delete account ---
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteMsg, setDeleteMsg] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    setDeleteMsg(null);
    setDeleteLoading(true);
    try {
      await api.delete('/perfil', { body: { password: deletePassword } });
      logout();
      router.push('/login');
    } catch (err) {
      setDeleteMsg(err.message);
      setDeleteLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#150f27] text-slate-200 font-sans pb-28">
      <header className="flex items-center justify-between p-6 lg:hidden">
        <button onClick={openSidebar} className="text-slate-400 hover:text-white transition-colors">
          <Menu className="w-7 h-7" />
        </button>
        <h1 className="text-sm font-black text-white uppercase tracking-widest">Ajustes</h1>
        <div className="w-7" />
      </header>
      <h1 className="hidden lg:block text-xl font-black text-white uppercase tracking-widest px-8 pt-8">
        Ajustes
      </h1>

      <main className="max-w-md mx-auto px-6 pt-2 lg:pt-6 flex flex-col gap-5">
        {/* Perfil actual */}
        <div className="flex items-center gap-3 bg-[#1f1638] border border-white/5 rounded-3xl p-5">
          <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
            <User className="w-5 h-5 text-violet-300" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-white truncate">{user?.username || 'Invitado'}</p>
            <p className="text-xs text-slate-500 truncate">{user?.email}</p>
          </div>
        </div>

        {/* Cambiar username */}
        <Card icon={User} title="Nombre de usuario">
          <form onSubmit={handleUsername} className="space-y-3">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputClass}
              placeholder="Nuevo username"
              required
            />
            {usernameMsg && (
              <p className={`text-xs font-semibold ${usernameMsg.type === 'ok' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {usernameMsg.text}
              </p>
            )}
            <button
              type="submit"
              disabled={usernameLoading}
              className="w-full py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-colors"
            >
              {usernameLoading ? 'Guardando...' : 'Guardar'}
            </button>
          </form>
        </Card>

        {/* Cambiar contraseña */}
        <Card icon={Lock} title="Contraseña">
          <form onSubmit={handlePassword} className="space-y-3">
            <input
              type="password"
              value={passwordActual}
              onChange={(e) => setPasswordActual(e.target.value)}
              className={inputClass}
              placeholder="Contraseña actual"
              required
            />
            <input
              type="password"
              value={passwordNuevo}
              onChange={(e) => setPasswordNuevo(e.target.value)}
              className={inputClass}
              placeholder="Nueva contraseña"
              required
            />
            {passwordMsg && (
              <p className={`text-xs font-semibold ${passwordMsg.type === 'ok' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {passwordMsg.text}
              </p>
            )}
            <button
              type="submit"
              disabled={passwordLoading}
              className="w-full py-3 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-colors"
            >
              {passwordLoading ? 'Guardando...' : 'Cambiar contraseña'}
            </button>
          </form>
        </Card>

        {/* Cerrar sesión */}
        <button
          onClick={() => {
            logout();
            router.push('/login');
          }}
          className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 text-slate-300 font-bold rounded-xl text-sm transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Cerrar sesión
        </button>

        {/* Eliminar cuenta */}
        <Card icon={Trash2} title="Zona de peligro">
          {!confirmDelete ? (
            <button
              onClick={() => setConfirmDelete(true)}
              className="w-full py-3 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 font-bold rounded-xl text-sm border border-rose-500/20 transition-colors"
            >
              Eliminar mi cuenta
            </button>
          ) : (
            <form onSubmit={handleDelete} className="space-y-3">
              <p className="text-xs text-rose-300 leading-relaxed">
                Esto borra tu cuenta y tu historial de tareas de forma permanente. Confirma tu
                contraseña para continuar.
              </p>
              <input
                type="password"
                value={deletePassword}
                onChange={(e) => setDeletePassword(e.target.value)}
                className={inputClass}
                placeholder="Tu contraseña"
                required
              />
              {deleteMsg && <p className="text-xs font-semibold text-rose-400">{deleteMsg}</p>}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setConfirmDelete(false)}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 text-slate-300 font-bold rounded-xl text-sm transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={deleteLoading}
                  className="flex-1 py-3 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white font-bold rounded-xl text-sm transition-colors"
                >
                  {deleteLoading ? 'Eliminando...' : 'Sí, eliminar'}
                </button>
              </div>
            </form>
          )}
        </Card>
      </main>
    </div>
  );
}
