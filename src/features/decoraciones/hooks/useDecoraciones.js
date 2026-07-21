'use client';
import { useState, useCallback } from 'react';
import { CATALOGO_DECORACIONES } from '../../../components/decoraciones/catalogo';

export default function useDecoraciones() {
  const [compradas, setCompradas] = useState([]);
  const [colocadas, setColocadas] = useState({});
  const [comprando, setComprando] = useState(null);
  const [error, setError] = useState(null);

  const yaComprado = useCallback((itemId) => compradas.includes(itemId), [compradas]);

  const comprar = useCallback(async (itemId, precio, xpDisponible, gastarCoins) => {
    setError(null);
    if (xpDisponible < precio) {
      setError('No tienes Coins suficientes para este objeto.');
      return false;
    }
    setComprando(itemId);
    try {
      if (gastarCoins) await gastarCoins(precio);
      setCompradas((prev) => [...prev, itemId]);
      return true;
    } catch (err) {
      setError(err.message || 'No se pudo completar la compra.');
      return false;
    } finally {
      setComprando(null);
    }
  }, []);

  const colocarEnSlot = useCallback((slotIndex, itemId) => {
    setColocadas((prev) => ({ ...prev, [slotIndex]: itemId }));
  }, []);

  const quitarDeSlot = useCallback((slotIndex) => {
    setColocadas((prev) => {
      const nuevo = { ...prev };
      delete nuevo[slotIndex];
      return nuevo;
    });
  }, []);

  const noColocadas = CATALOGO_DECORACIONES.filter(
    (item) => yaComprado(item.id) && !Object.values(colocadas).includes(item.id)
  );

  return {
    compradas,
    colocadas,
    comprando,
    error,
    yaComprado,
    comprar,
    colocarEnSlot,
    quitarDeSlot,
    noColocadas,
  };
}
