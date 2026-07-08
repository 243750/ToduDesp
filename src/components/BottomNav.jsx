'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ClipboardList, Bot, Compass } from 'lucide-react';

const TABS = [
  { href: '/tareas', label: 'Tareas', Icon: ClipboardList },
  { href: '/mi-todu', label: 'Mi Todú', Icon: Bot },
  { href: '/descubrir', label: 'Descubrir', Icon: Compass },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full bg-[#150f27]/90 backdrop-blur-xl border-t border-white/10 z-50 flex justify-around items-center h-20 px-6 pb-2">
      {TABS.map(({ href, label, Icon }) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center gap-1 transition-colors group ${
              isActive ? 'text-violet-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <Icon
              className={`w-7 h-7 mb-0.5 transition-transform group-active:scale-90 ${
                isActive ? 'drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]' : ''
              }`}
              strokeWidth={isActive ? 2.5 : 2}
            />
            <span className="text-[10px] font-bold tracking-wider uppercase">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
