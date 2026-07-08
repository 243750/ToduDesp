'use client';

// A diferencia de layout.js, template.js SÍ se vuelve a montar en cada
// cambio de ruta dentro de este grupo. Aprovechamos eso para disparar
// la animación de entrada (definida en globals.css) cada vez que cambias
// de pestaña, mientras que <BottomNav /> (en layout.js) se queda quieta.
export default function TabsTemplate({ children }) {
  return <div className="todu-page-enter">{children}</div>;
}
