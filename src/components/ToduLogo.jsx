// Mascota/isotipo de Todú: un robot redondo y amigable, inspirado en el
// mismo lenguaje visual que ya usas en ToduAvatar (Rive) y en el Todúcito
// del helper — pero como SVG estático y liviano, ideal para login/registro,
// splash screens, o cualquier lugar donde no necesitas la animación de Rive.
//
// `withWordmark` agrega el texto "Todú" debajo, con el mismo estilo tipográfico
// que ya usas en el resto de la app (font-black, tracking-wide).
export default function ToduLogo({ size = 96, withWordmark = false, className = '' }) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Resplandor de fondo, mismo violeta que el resto de la app */}
        <circle cx="100" cy="105" r="72" fill="url(#todu-glow)" />

        {/* Orejas / soportes laterales */}
        <rect x="38" y="88" width="16" height="34" rx="8" fill="#ede9fe" />
        <rect x="146" y="88" width="16" height="34" rx="8" fill="#ede9fe" />

        {/* Cabeza */}
        <rect x="50" y="52" width="100" height="98" rx="42" fill="#ffffff" />
        <rect x="50" y="52" width="100" height="98" rx="42" stroke="#8b5cf6" strokeOpacity="0.15" strokeWidth="3" />

        {/* Ojos amarillos */}
        <circle cx="80" cy="98" r="9" fill="#fbbf24" />
        <circle cx="120" cy="98" r="9" fill="#fbbf24" />

        <defs>
          <radialGradient id="todu-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 105) rotate(90) scale(72)">
            <stop stopColor="#8b5cf6" stopOpacity="0.35" />
            <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      {withWordmark && (
        <h1 className="text-3xl font-black text-white tracking-wide">
          Tod<span className="text-violet-400">ú</span>
        </h1>
      )}
    </div>
  );
}
