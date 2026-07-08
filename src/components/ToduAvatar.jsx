'use client';
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useEffect } from 'react';

export default function ToduAvatar({ emotion = 'idle', size = 110, zoom = 1.3 }) {
  const { rive, RiveComponent } = useRive({
    src: '/todufinal.riv',
    stateMachines: 'State Machine 1', // Confirmado: coincide con el .riv
    autoplay: true,
    // Fit.Contain nunca recorta el artboard: siempre se ve completo y centrado.
    // El "acercamiento" para que se vea más grande lo controlamos nosotros
    // con la prop `zoom`, no dejando que Rive decida el recorte (Cover).
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // 1. Inputs de las Emociones
  const smilingInput = useStateMachineInput(rive, 'State Machine 1', 'Smiling');
  const happyInput = useStateMachineInput(rive, 'State Machine 1', 'Happy');
  const sadInput = useStateMachineInput(rive, 'State Machine 1', 'Sad');
  const scaredInput = useStateMachineInput(rive, 'State Machine 1', 'Scared');
  const surprisedInput = useStateMachineInput(rive, 'State Machine 1', 'Surprised');

  // 2. Inputs de los Accesorios (Desbloqueables)
  const easterInput = useStateMachineInput(rive, 'State Machine 1', 'Easter');
  const halloweenInput = useStateMachineInput(rive, 'State Machine 1', 'Halloween');
  const christmasInput = useStateMachineInput(rive, 'State Machine 1', 'Christmas');

  // Apagar accesorios por defecto al cargar
  useEffect(() => {
    if (easterInput) easterInput.value = false;
    if (halloweenInput) halloweenInput.value = false;
    if (christmasInput) christmasInput.value = false;
  }, [easterInput, halloweenInput, christmasInput]);

  // Manejar el cambio de emociones
  useEffect(() => {
    if (!rive) return;

    // Reseteamos todas a falso primero
    if (smilingInput) smilingInput.value = false;
    if (happyInput) happyInput.value = false;
    if (sadInput) sadInput.value = false;
    if (scaredInput) scaredInput.value = false;
    if (surprisedInput) surprisedInput.value = false;

    // Activamos la que pasamos por prop
    switch (emotion) {
      case 'smiling': if (smilingInput) smilingInput.value = true; break;
      case 'happy': if (happyInput) happyInput.value = true; break;
      case 'sad': if (sadInput) sadInput.value = true; break;
      case 'scared': if (scaredInput) scaredInput.value = true; break;
      case 'surprised': if (surprisedInput) surprisedInput.value = true; break;
      case 'idle':
      default:
        // Todas en falso lo dejan en estado neutral
        break;
    }
  }, [emotion, rive, smilingInput, happyInput, sadInput, scaredInput, surprisedInput]);

return (
    // 1. El marco exacto: tamaño fijo que definís desde fuera (size)
    <div
      style={{ width: size, height: size }}
      className="relative flex justify-center items-center overflow-hidden"
    >
      {/*
        2. inset-0 (en vez de dejar que el navegador calcule una "posición
        estática" solo con flex) fuerza a que este contenedor ocupe el marco
        completo de forma determinista — esto corrige el ligero desliz hacia
        la izquierda que se veía antes. El `zoom` interno sigue agrandando
        las dimensiones reales (no CSS transform) para no perder nitidez.
      */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }} className="flex justify-center items-center">
          <RiveComponent className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}