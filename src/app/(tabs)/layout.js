import BottomNav from '../../components/BottomNav';
import Sidebar from '../../components/Sidebar';
import AuthGuard from '../../components/AuthGuard';
import { SidebarProvider } from '../../context/SidebarContext';

// Este layout envuelve Tareas, Mi Todú, Descubrir y Ajustes.
// - <AuthGuard> redirige a "/" si no hay sesión — necesario porque la
//   PWA instalada abre directo en /tareas (start_url del manifest), sin
//   pasar por /login primero.
// - <Sidebar /> es el "menú hamburguesa": drawer en móvil, riel fijo en escritorio.
// - <BottomNav /> solo se muestra en móvil (lg:hidden) porque en escritorio
//   la navegación ya vive en el Sidebar permanente.
// Ambos viven en layout.js (no en cada page.js) para que NUNCA se desmonten
// al cambiar de pestaña.
export default function TabsLayout({ children }) {
  return (
    <AuthGuard>
      <SidebarProvider>
        <Sidebar />
        {/* lg:pl-64 deja espacio para el riel fijo del Sidebar en escritorio */}
        <div className="lg:pl-64">{children}</div>
        <div className="lg:hidden">
          <BottomNav />
        </div>
      </SidebarProvider>
    </AuthGuard>
  );
}