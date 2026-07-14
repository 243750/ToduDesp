'use client';
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useEffect } from 'react';

// El input REAL confirmado en vivo (no son 5 booleanos separados, es
// UNO numérico): 0 = normal, 1 = feliz, 2 = triste, 3 = asustado,
// 4 = sorprendido.
const EMOCION_A_NUMERO = {
  idle: 0,
  happy: 1,
  sad: 2,
  scared: 3,
  surprised: 4,
};

export default function ToduAvatar({ emotion = 'idle', mensaje = '', size = 110, zoom = 1.3 }) {
  const { rive, RiveComponent } = useRive({
    src: '/toduoptimo.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const expressionsInput = useStateMachineInput(rive, 'State Machine 1', 'Expressions');
  const isTrackingInput = useStateMachineInput(rive, 'State Machine 1', 'IsTracking');
  const seasonalInput = useStateMachineInput(rive, 'State Machine 1', 'Seasonal');

  // Prende el seguimiento de ojos con el mouse una sola vez.
  useEffect(() => {
    if (isTrackingInput) isTrackingInput.value = true;
    if (seasonalInput) seasonalInput.value = 0; // sin accesorio de temporada por defecto
  }, [isTrackingInput, seasonalInput]);

  // La "perilla" numérica de las emociones.
  useEffect(() => {
    if (!rive || !expressionsInput) return;
    expressionsInput.value = EMOCION_A_NUMERO[emotion] ?? 0;
  }, [emotion, rive, expressionsInput]);

  return (
    <div className="relative inline-flex flex-col items-center justify-center">
      {/* Globo de diálogo */}
      {mensaje && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-300 pointer-events-none">
          <div className="bg-white text-violet-900 text-xs font-black px-4 py-2.5 rounded-2xl rounded-bl-sm shadow-[0_10px_25px_rgba(139,92,246,0.3)] whitespace-nowrap border-2 border-violet-100 relative">
            {mensaje}
            <div className="absolute -bottom-[8px] left-2 w-0 h-0 border-t-[8px] border-t-white border-r-[8px] border-r-transparent border-l-[8px] border-l-transparent drop-shadow-sm"></div>
          </div>
        </div>
      )}

      {/* Avatar Rive */}
      <div
        style={{ width: size, height: size }}
        className="relative flex justify-center items-center overflow-hidden"
      >
        <div className="absolute inset-0 flex justify-center items-center">
          <div style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }} className="flex justify-center items-center">
            <RiveComponent className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}