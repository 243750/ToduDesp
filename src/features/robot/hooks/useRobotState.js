'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { api } from '../../../lib/api';
import { useAuth } from '../../../context/AuthContext';

function mapEmotionToRive(backendEmotion) {
  if (!backendEmotion) return 'idle';
  const emotion = backendEmotion.toLowerCase();
  if (['happy', 'sad', 'scared', 'surprised'].includes(emotion)) return emotion;
  return 'idle';
}

const DICCIONARIO_AUTONOMO = {
  'tareas': [
    "¡Lograremos todo hoy! ",
    "¡Vamos por esa racha! ",
    "¿Qué misión tenemos hoy?",
    "¡A darle con todo! ",
    "Una tarea a la vez, tú puedes.",
  ],
  'mi-todu': [
    "¿Sabías que beber agua mejora tu enfoque un 30%? ",
    "Dormir 8 horas es tu mejor hack de productividad. ",
    "La técnica Pomodoro te salva del cansancio mental. ",
    "¡Sube de nivel completando tareas! ",
    "¡Me encanta mi nuevo look! "
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
      mensajeTimeoutRef.current = setTimeout(() => setMensaje(''), duracion);
    }
  }, []);

  const forzarEmocion = useCallback((emocionRive, texto = '') => {
    setEmocionActual(emocionRive);
    if (texto) hablar(texto);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setEmocionActual('idle'), 4000);
  }, [hablar]);

  const refrescar = useCallback(() => {
    if (!user?.id) return;
    api.get(`/robot/estado/${user.id}`)
      .then((data) => setEmocionActual(mapEmotionToRive(data.emocion)))
      .catch(() => {});
  }, [user]);

  useEffect(() => {
    if (!contexto || !DICCIONARIO_AUTONOMO[contexto]) return;

    const saludoTimer = setTimeout(() => {
      const frases = DICCIONARIO_AUTONOMO[contexto];
      hablar(frases[Math.floor(Math.random() * frases.length)], 4000);
    }, 1000);

    let timerAmbiente;
    const loopAutonomo = () => {
      const espera = 10000 + Math.random() * 8000; 
      
      timerAmbiente = setTimeout(() => {
        const probabilidad = Math.random();
        const frases = DICCIONARIO_AUTONOMO[contexto];
        // Aquí introducimos variedad
        const emociones = ['happy', 'surprised', 'idle', 'idle']; 
        const emocionAleatoria = emociones[Math.floor(Math.random() * emociones.length)];

        if (probabilidad < 0.4) {
          forzarEmocion(emocionAleatoria, frases[Math.floor(Math.random() * frases.length)]);
        } else if (probabilidad < 0.7) {
          forzarEmocion(emocionAleatoria);
        }
        loopAutonomo();
      }, espera);
    };

    loopAutonomo();

    return () => {
      clearTimeout(saludoTimer);
      clearTimeout(timerAmbiente);
    };
  }, [contexto, hablar, forzarEmocion]);

  const dispararEvento = useCallback(async (evento, textoOpcional = '', emocionInmediata = null) => {
    if (!user?.id) return;
    setLoading(true);
    
    // REACCIÓN INMEDIATA: Cambia de cara sin esperar a la base de datos
    if (emocionInmediata) setEmocionActual(emocionInmediata);
    if (textoOpcional) hablar(textoOpcional);

    try {
      const data = await api.post('/robot/evento', { userId: user.id, event: evento });
      const mappedEmotion = mapEmotionToRive(data.emotion);
      setEmocionActual(mappedEmotion);

      if (mappedEmotion !== 'idle') {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(async () => {
          setEmocionActual('idle');
        }, 4000);
      }
    } catch {
      // Fallback si falla el backend
      if (emocionInmediata) {
         if (timeoutRef.current) clearTimeout(timeoutRef.current);
         timeoutRef.current = setTimeout(() => setEmocionActual('idle'), 4000);
      }
    } finally {
      setLoading(false);
    }
  }, [user, hablar]);

  // Aquí le pasamos qué emoción queremos INMEDIATAMENTE al dar click
  const tareaCompletada = useCallback((texto) => dispararEvento('TASK_COMPLETED', texto || '¡Excelente trabajo! ', 'happy'), [dispararEvento]);
  const tareaRechazada  = useCallback((texto) => dispararEvento('TASK_EXPIRED', texto || '¡Oh no! Perdimos esa. ', 'sad'), [dispararEvento]);
  const subioDeNivel    = useCallback(() => dispararEvento('LEVEL_UP', '¡Guau! ¡Subimos de nivel! ', 'surprised'), [dispararEvento]);
  const sinActividad    = useCallback(() => dispararEvento('NO_ACTIVITY', 'Te echo de menos...', 'sad'), [dispararEvento]);
  const diaDeRacha      = useCallback(() => dispararEvento('STREAK_DAY', '¡La racha sigue viva! ', 'happy'), [dispararEvento]);

  return {
    emocionActual, mensaje, loading, hablar, forzarEmocion, refrescar,
    tareaCompletada, tareaRechazada, subioDeNivel, sinActividad, diaDeRacha,
  };
}