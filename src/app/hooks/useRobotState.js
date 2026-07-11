'use client';
import { useState, useEffect, useCallback } from 'react';
import { api } from '../../lib/api';
import { useAuth } from '../../context/AuthContext';

export default function useRobotState() {
  const { user } = useAuth();
  const [emocionActual, setEmocionActual] = useState('idle');
  const [mensaje, setMensaje] = useState('¡Hola! Estoy listo para ayudarte.');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.id) return;

    api.get(`/robot/${user.id}/state`)
      .then((data) => {
        setEmocionActual(data.emotion ?? 'idle');
        setMensaje(data.message ?? '¡Hola! Estoy listo para ayudarte.');
      })
      .catch(() => {
        setEmocionActual('idle');
      });
  }, [user]);

  const dispararEvento = useCallback(async (evento) => {
    if (!user?.id) return;
    setLoading(true);
    try {
      const data = await api.post(`/robot/${user.id}/event`, { event: evento });
      setEmocionActual(data.emotion ?? 'idle');
      setMensaje(data.message ?? '');

      if (['happy', 'surprised', 'scared'].includes(data.emotion)) {
        setTimeout(async () => {
          try {
            const estadoActual = await api.get(`/robot/${user.id}/state`);
            setEmocionActual(estadoActual.emotion ?? 'idle');
            setMensaje(estadoActual.message ?? '');
          } catch {
            setEmocionActual('idle');
          }
        }, 4000);
      }
    } catch {
      // Si falla el backend el robot no se rompe
    } finally {
      setLoading(false);
    }
  }, [user]);

  const tareaCompletada = useCallback(() => dispararEvento('TASK_COMPLETED'), [dispararEvento]);
  const tareaRechazada  = useCallback(() => dispararEvento('TASK_REJECTED'),  [dispararEvento]);
  const tareaUrgente    = useCallback(() => dispararEvento('TASK_URGENT'),    [dispararEvento]);
  const subioDeNivel    = useCallback(() => dispararEvento('LEVEL_UP'),       [dispararEvento]);
  const sinActividad    = useCallback(() => dispararEvento('NO_ACTIVITY'),    [dispararEvento]);

  return {
    emocionActual,
    mensaje,
    loading,
    tareaCompletada,
    tareaRechazada,
    tareaUrgente,
    subioDeNivel,
    sinActividad,
  };
}