'use client';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext(/** @type {any} */ (null));

// Implementación "de demo" — cubre solo las pantallas que ya migraron
// sus clases de color plano (bg-[#150f27]) a los tokens de globals.css
// (bg-todu-bg). El resto de la app no migrada simplemente no reacciona
// al toggle (se queda oscura), ver nota en globals.css.
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const guardado = typeof window !== 'undefined' ? localStorage.getItem('todu_theme') : null;
    if (guardado === 'light' || guardado === 'dark') {
      setTheme(guardado);
      document.documentElement.setAttribute('data-theme', guardado);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const nuevo = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nuevo);
      localStorage.setItem('todu_theme', nuevo);
      return nuevo;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme debe usarse dentro de <ThemeProvider>');
  return ctx;
}