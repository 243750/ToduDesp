'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { api } from '../../../lib/api';
import { useAuth } from '../../../context/AuthContext';

// Vocabulario único de emociones en toda la app: 'idle' | 'happy' |
// 'sad' | 'scared' | 'surprised' — esto es lo que ToduAvatar.jsx espera.
function mapEmotionToRive(backendEmotion) {
  if (!backendEmotion) return 'idle';
  const emotion = backendEmotion.toLowerCase();
  if (['happy', 'sad', 'scared', 'surprised'].includes(emotion)) return emotion;
  return 'idle';
}

// Diccionario de frases autónomas según la pantalla
const DICCIONARIO_AUTONOMO = {
  'tareas': [
    "¡Lograremos todo hoy!",
    "¡Vamos por esa racha!",
    "¿Qué misión tenemos hoy?",
    "¡A darle con todo! ",
    "Una tarea a la vez, tú puedes.",
    "¿Ya viste cuánto llevas? ¡Sigue así!"
  ],
  'mi-todu': [
    "¿Sabías que beber agua mejora tu enfoque un 30%? ",
    "Dormir 8 horas es tu mejor hack de productividad. ",
    "La técnica Pomodoro te salva del cansancio mental. ",
    "Tu cerebro consume el 20% de tu energía. ¡Come sano! ",
    "El 20% de tu esfuerzo da el 80% de tus resultados. ",
    "¡Me encanta mi nuevo look!"
  ]
};

export default function useRobotState(contexto = null) {
  const { user } = useAuth();
  const [emocionActual, setEmocionActual] = useState('idle');
  const [mensaje, setMensaje] = useState('');
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef(null);
  const mensajeTimeoutRef = useRef(null);

  const hablar = useCallback((texto, duracion = 4000) => {
    setMensaje(texto);
    if (mensajeTimeoutRef.current) clearTimeout(mensajeTimeoutRef.current);
    if (texto) {
      mensajeTimeoutRef.current = setTimeout(() => {
        setMensaje('');
      }, duracion);
    }
  }, []);

  const refrescar = useCallback(() => {
    if (!user?.id) return;
    api.get(`/robot/estado/${user.id}`)
      .then((data) => setEmocionActual(mapEmotionToRive(data.emocion)))
      .catch(() => {});
  }, [user]);

  const forzarEmocion = useCallback((emocionRive, texto = '') => {
    setEmocionActual(emocionRive);
    if (texto) hablar(texto);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setEmocionActual('idle');
    }, 4000);
  }, [hablar]);

  // El "Cerebro Autónomo". Solo se activa si le pasamos un contexto.
  useEffect(() => {
    if (!contexto || !DICCIONARIO_AUTONOMO[contexto]) return;

    // 1. Saludo inicial al entrar a la pantalla
    const saludoTimer = setTimeout(() => {
      const frases = DICCIONARIO_AUTONOMO[contexto];
      hablar(frases[Math.floor(Math.random() * frases.length)], 4000);
    }, 1000);

    // 2. Loop de vida (cada 8-12 segundos hace algo aleatorio)
    let timerAmbiente;
    const loopAutonomo = () => {
      const espera = 8000 + Math.random() * 4000; // Random entre 8s y 12s
      
      timerAmbiente = setTimeout(() => {
        const probabilidad = Math.random();
        const frases = DICCIONARIO_AUTONOMO[contexto];
        const emociones = ['happy', 'surprised', 'idle'];
        const emocionAleatoria = emociones[Math.floor(Math.random() * emociones.length)];

        if (probabilidad < 0.4) {
          // 40% de probabilidad de hablar y hacer gesto
          const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
          forzarEmocion(emocionAleatoria, fraseAleatoria);
        } else if (probabilidad < 0.7) {
          // 30% de probabilidad de SOLO hacer un gesto sin hablar
          forzarEmocion(emocionAleatoria);
        }
        
        loopAutonomo(); // Volver a programar
      }, espera);
    };

    loopAutonomo();

    return () => {
      clearTimeout(saludoTimer);
      clearTimeout(timerAmbiente);
    };
  }, [contexto, hablar, forzarEmocion]);

  const dispararEvento = useCallback(async (evento, textoOpcional = '') => {
    if (!user?.id) return;
    setLoading(true);
    if (textoOpcional) hablar(textoOpcional);

    try {
      const data = await api.post('/robot/evento', { userId: user.id, event: evento });
      const mappedEmotion = mapEmotionToRive(data.emotion);
      setEmocionActual(mappedEmotion);

      if (mappedEmotion !== 'idle') {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(async () => {
          try {
            const estadoActual = await api.get(`/robot/estado/${user.id}`);
            setEmocionActual(mapEmotionToRive(estadoActual.emocion));
          } catch {
            setEmocionActual('idle');
          }
        }, 4000);
      }
    } catch {
      if (evento === 'TASK_COMPLETED') setEmocionActual('happy');
      else if (evento === 'TASK_EXPIRED') setEmocionActual('sad');
    } finally {
      setLoading(false);
    }
  }, [user, hablar]);

  const tareaCompletada = useCallback((texto) => dispararEvento('TASK_COMPLETED', texto || '¡Excelente trabajo! ✨'), [dispararEvento]);
  const tareaRechazada  = useCallback((texto) => dispararEvento('TASK_EXPIRED', texto || '¡Oh no! Perdimos esa. 😢'), [dispararEvento]);
  const subioDeNivel    = useCallback(() => dispararEvento('LEVEL_UP', '¡Guau! ¡Subimos de nivel! 🚀'), [dispararEvento]);
  const sinActividad    = useCallback(() => dispararEvento('NO_ACTIVITY', 'Te echo de menos...'), [dispararEvento]);
  const diaDeRacha      = useCallback(() => dispararEvento('STREAK_DAY', '¡La racha sigue viva! 🔥'), [dispararEvento]);

  return {
    emocionActual,
    mensaje,
    loading,
    hablar,
    forzarEmocion,
    refrescar,
    tareaCompletada,
    tareaRechazada,
    subioDeNivel,
    sinActividad,
    diaDeRacha,
  };
}