'use client';
import { useState } from 'react';
import { X, Repeat } from 'lucide-react';
import { DIFICULTADES } from '../constants';

export default function TareaFormModal({ onClose, onSave, tareaInicial, crearTarea, editarTarea }) {
  const esEdicion = !!tareaInicial;

  const parsearHoraParaInput = () => {
    if (!tareaInicial?.descripcion) return '09:00';
    const match = tareaInicial.descripcion.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
    if (match) {
      let h = parseInt(match[1], 10);
      const m = match[2];
      const ampm = match[3]?.toUpperCase();
      if (ampm === 'PM' && h < 12) h += 12;
      if (ampm === 'AM' && h === 12) h = 0;
      return `${h.toString().padStart(2, '0')}:${m}`;
    }
    return '09:00';
  };

  const [titulo, setTitulo] = useState(tareaInicial?.titulo || '');
  const [esFija, setEsFija] = useState(tareaInicial?.tipo === 'fija');
  const [horaNativa, setHoraNativa] = useState(parsearHoraParaInput());

  const dificultadInicial = tareaInicial
    ? DIFICULTADES.find((d) => d.xpValor === tareaInicial.xpValor)?.key || 'facil'
    : 'facil';
  const [dificultad, setDificultad] = useState(dificultadInicial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatearHoraParaBackend = (hora24) => {
    const [hStr, mStr] = hora24.split(':');
    let h = parseInt(hStr, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    return `${h.toString().padStart(2, '0')}:${mStr} ${ampm}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    if (!esFija && !horaNativa) return;
    setLoading(true);
    setError(null);
    try {
      const xpValor = DIFICULTADES.find((d) => d.key === dificultad).xpValor;

      const payload = {
        titulo: titulo.trim(),
        xpValor,
        tipo: esFija ? 'fija' : 'normal',
      };

      // Las tareas fijas no llevan horario — el backend lo ignora de
      // todas formas, pero evitamos mandar un dato que no aplica y así
      // el vigilante de recordatorios (que busca hora en `descripcion`)
      // no intenta calcularle un vencimiento que no existe.
      if (!esFija) {
        payload.descripcion = formatearHoraParaBackend(horaNativa);
      }

      if (esEdicion) {
        const tarea = await editarTarea(tareaInicial.id, payload);
        onSave(tarea);
      } else {
        const tarea = await crearTarea(payload);
        onSave(tarea);
      }
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#150f27]/95 backdrop-blur-md flex flex-col items-center justify-center p-6">
      <div className="bg-[#1f1638] border border-violet-500/30 rounded-[2rem] p-6 w-full max-w-sm relative shadow-[0_0_40px_rgba(139,92,246,0.15)] animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-white bg-white/5 p-1.5 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-xl font-black text-white mb-6">{esEdicion ? 'Editar tarea' : 'Nueva tarea'}</h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <p className="text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl p-3">{error}</p>
          )}

          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título de la tarea"
            className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500/50 transition-colors"
            required
            autoFocus
          />

          {/* Switch de tarea diaria/fija */}
          <button
            type="button"
            onClick={() => setEsFija((prev) => !prev)}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border transition-colors ${
              esFija
                ? 'bg-cyan-500/10 border-cyan-500/40'
                : 'bg-black/20 border-white/10'
            }`}
          >
            <span className={`flex items-center gap-2 text-sm font-bold ${esFija ? 'text-cyan-300' : 'text-slate-400'}`}>
              <Repeat className="w-4 h-4" />
              Tarea diaria (se repite cada día)
            </span>
            <span
              className={`w-10 h-6 rounded-full relative transition-colors flex-shrink-0 ${esFija ? 'bg-cyan-500' : 'bg-white/10'}`}
            >
              <span
              className="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200"
              style={{ transform: esFija ? 'translateX(20px)' : 'translateX(4px)' }}
            />
            </span>
          </button>

          {/* El horario solo aplica a tareas normales — las fijas no vencen */}
          {!esFija && (
            <div>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Horario</p>
              <input
                type="time"
                value={horaNativa}
                onChange={(e) => setHoraNativa(e.target.value)}
                required={!esFija}
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-lg text-center text-white outline-none focus:border-violet-500/50 transition-colors color-scheme-dark"
                style={{ colorScheme: 'dark' }}
              />
            </div>
          )}

          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Dificultad</p>
            <div className="grid grid-cols-4 gap-2">
              {DIFICULTADES.map((d) => (
                <button
                  key={d.key}
                  type="button"
                  onClick={() => setDificultad(d.key)}
                  className={`py-3 rounded-xl text-[11px] font-bold border transition-colors ${
                    dificultad === d.key
                      ? 'bg-violet-600 border-violet-400 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                      : 'bg-black/20 border-white/10 text-slate-400 hover:border-white/20'
                  }`}
                >
                  {d.label}<br />
                  <span className="opacity-70">{d.xpValor} XP</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 mt-2 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-black rounded-2xl transition-all text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(139,92,246,0.3)] active:scale-95"
          >
            {loading ? (esEdicion ? 'Guardando...' : 'Creando...') : (esEdicion ? 'Guardar cambios' : 'Crear tarea')}
          </button>
        </form>
      </div>
    </div>
  );
}
