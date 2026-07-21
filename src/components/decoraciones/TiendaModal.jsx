'use client';
import { X, Coins, ShoppingBag, Check } from 'lucide-react';
import DecoracionSVG from './DecoracionSVG';
import { CATALOGO_DECORACIONES } from './catalogo';

export default function TiendaModal({
  onClose,
  xpDisponible,
  yaComprado,
  comprando,
  error,
  onComprar,
}) {
  const categorias = ['Trofeos', 'Mascotas', 'Pared', 'Aire', 'Accesorios', 'Piso', 'Ambiente'];

  return (
    <div className="fixed inset-0 z-50 bg-[#150f27]/95 backdrop-blur-md flex flex-col items-center justify-center p-6">
      <div className="bg-[#1f1638] border border-violet-500/30 rounded-[2rem] p-6 w-full max-w-lg relative shadow-[0_0_40px_rgba(139,92,246,0.15)] max-h-[85vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/5 p-1.5 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center mb-6 border-b border-white/5 pb-6 pt-2">
          <div className="w-16 h-16 bg-violet-500/10 border border-violet-500/30 rounded-2xl flex items-center justify-center text-violet-400 mb-4">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-black text-white mb-1">Tienda de Todú</h3>
          <p className="text-xs text-slate-400 mb-3">Decora tu cuarto con lo que ganes en tareas</p>
          <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-sm font-black text-amber-400">{xpDisponible ?? 0}</span>
          </div>
        </div>

        {error && (
          <p className="text-xs font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl p-3 text-center mb-4">
            {error}
          </p>
        )}

        {categorias.map((categoria) => {
          const items = CATALOGO_DECORACIONES.filter((it) => it.categoria === categoria);
          if (items.length === 0) return null;
          return (
            <div key={categoria} className="mb-6 last:mb-0">
              <h4 className="text-[10px] text-violet-400 font-black uppercase tracking-widest mb-3">{categoria}</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {items.map((item) => {
                  const comprado = yaComprado(item.id);
                  const noAlcanza = (xpDisponible ?? 0) < item.precio;
                  return (
                    <div key={item.id} className="bg-black/30 border border-white/10 rounded-2xl p-3 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-2">
                        <DecoracionSVG itemId={item.id} />
                      </div>
                      <p className="text-xs font-bold text-white leading-tight mb-1">{item.nombre}</p>
                      <p className="text-[10px] text-slate-500 leading-snug mb-2 line-clamp-2">{item.descripcion}</p>
                      {comprado ? (
                        <div className="w-full flex items-center justify-center gap-1 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                          <Check className="w-3 h-3" /> Comprado
                        </div>
                      ) : (
                        <button
                          onClick={() => onComprar(item.id, item.precio)}
                          disabled={comprando === item.id || noAlcanza}
                          className="w-full py-2 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-[10px] font-bold transition-colors flex items-center justify-center gap-1"
                        >
                          {comprando === item.id ? '...' : (
                            <>
                              <Coins className="w-3 h-3" /> {item.precio}
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
