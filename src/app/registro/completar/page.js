'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, X } from 'lucide-react';
import { useAuth } from '../../../context/AuthContext';
import ToduLogo from '../../../components/ToduLogo';

export default function RegistroCompletarPage() {
  const router = useRouter();
  const { register } = useAuth();

  // Estado para el formulario y manejo de UI
  const [formData, setFormData] = useState({
    username: '',
    fechaNacimiento: '',
    aceptaTerminosYPrivacidad: false,
  });

  const [loading, setLoading] = useState(false);
  const [errorServer, setErrorServer] = useState('');
  const [success, setSuccess] = useState(false);

  // Control de estados de los modales legales emergentes
  const [modalTerminos, setModalTerminos] = useState(false);
  const [modalPrivacidad, setModalPrivacidad] = useState(false);

  // Si alguien llega aquí directo (sin pasar por /registro), no tenemos
  // el email/password guardados — lo regresamos al paso 1.
  useEffect(() => {
    const hasStashedCreds =
      typeof window !== 'undefined' && window.sessionStorage.getItem('todu_registro_email');
    if (!hasStashedCreds) {
      router.replace('/registro');
    }
  }, [router]);

  // Manejador general de cambios en inputs
  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Limpiar errores previos si el usuario sigue escribiendo
    if (errorServer) setErrorServer('');
  };

  // Envío conectado al backend real vía AuthContext (antes solo mandaba
  // "username" y apuntaba a una URL de ngrok que ya no existe).
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones previas del lado del cliente
    if (!formData.aceptaTerminosYPrivacidad) return;
    if (formData.username.trim().length < 2) {
      setErrorServer('El nombre de usuario debe tener al menos 2 caracteres.');
      return;
    }
    if (!formData.fechaNacimiento) {
      setErrorServer('Ingresa tu fecha de nacimiento.');
      return;
    }

    const email = window.sessionStorage.getItem('todu_registro_email');
    const password = window.sessionStorage.getItem('todu_registro_password');
    if (!email || !password) {
      router.replace('/registro');
      return;
    }

    setLoading(true);
    setErrorServer('');

    try {
      await register({
        username: formData.username.trim(),
        email,
        password,
        fechaNacimiento: formData.fechaNacimiento,
      });

      // Ya no necesitamos las credenciales temporales
      window.sessionStorage.removeItem('todu_registro_email');
      window.sessionStorage.removeItem('todu_registro_password');

      setSuccess(true);
      router.push('/tareas');
    } catch (err) {
      // El backend responde 403 con "Debes ser mayor de 18 años para registrarte"
      // cuando la fecha de nacimiento no cumple el filtro de edad.
      setErrorServer(err.message || 'No se pudo conectar con el servidor backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#150f27] flex items-center justify-center p-4 font-sans relative overflow-hidden">
      
      {/* Tarjeta de Interfaz Móvil */}
      <div className="w-full max-w-sm bg-[#1f1638] border border-white/5 rounded-[2.5rem] shadow-2xl p-8 flex flex-col min-h-[600px] relative">
        
        {/* Botón de regreso */}
        <button
          type="button"
          onClick={() => router.push('/registro')}
          className="absolute top-8 left-8 text-slate-300 hover:text-violet-400 transition-colors"
        >
          <ArrowLeft size={24} />
        </button>

        {/* Logo de Todú */}
        <div className="flex justify-center mt-12 mb-6">
          <ToduLogo size={64} />
        </div>

        {/* Cabecera de Textos */}
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-[26px] font-bold text-white leading-tight px-2">
            ¿Cómo deberíamos llamarte?
          </h1>
          <p className="text-slate-400 text-sm font-medium leading-relaxed px-4">
            Este es un nombre único que puedes cambiar más tarde en cualquier momento.
          </p>
        </div>

        {/* Formulario e Implementación del Click */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-6">
          
          <div className="space-y-5">
            {/* Input de Nombre de Usuario */}
            <div className="relative">
              <div className={`flex items-center bg-black/30 border border-white/10 rounded-2xl px-5 py-4 transition-all duration-200
                ${formData.username ? 'ring-2 ring-violet-500/50 bg-black/40 shadow-xs' : ''}`}>
                <span className="text-slate-500 mr-2 font-medium text-base">@</span>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="usuario"
                  disabled={loading || success}
                  className="w-full bg-transparent text-white placeholder-slate-500 text-base font-medium outline-none disabled:opacity-50"
                  required
                />
                {formData.username.trim().length >= 2 && !errorServer && (
                  <span className="text-emerald-500 flex items-center ml-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
            </div>

            {/* Fecha de Nacimiento (el backend la exige para el filtro de mayoría de edad) */}
            <div className="relative">
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 px-1">
                Fecha de nacimiento
              </label>
              <div className="flex items-center bg-black/30 border border-white/10 rounded-2xl px-5 py-4">
                <input
                  type="date"
                  name="fechaNacimiento"
                  value={formData.fechaNacimiento}
                  onChange={handleChange}
                  disabled={loading || success}
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full bg-transparent text-white text-base font-medium outline-none disabled:opacity-50"
                  required
                />
              </div>
            </div>

            {/* Mensajes de feedback del backend */}
            {errorServer && (
              <p className="text-rose-400 text-xs font-semibold text-center bg-rose-500/10 py-2 px-3 rounded-xl border border-rose-500/20">
                {errorServer}
              </p>
            )}
            {success && (
              <p className="text-emerald-400 text-sm font-bold text-center bg-emerald-500/10 py-2 px-3 rounded-xl border border-emerald-500/20">
                ¡Perfil configurado con éxito!
              </p>
            )}

            {/* Casilla Única de Validación Legal */}
            <label className="flex items-start gap-3 text-[13px] text-slate-400 leading-snug font-medium cursor-pointer px-1 select-none">
              <input 
                type="checkbox" 
                name="aceptaTerminosYPrivacidad"
                checked={formData.aceptaTerminosYPrivacidad}
                onChange={handleChange}
                disabled={loading || success}
                className="w-5 h-5 rounded border-white/20 text-violet-500 focus:ring-violet-500 cursor-pointer shrink-0 mt-0.5 disabled:opacity-50" 
              />
              <span>
                Confirmas que tienes al menos 18 años y que has leído y aceptas nuestros{' '}
                <span 
                  onClick={(e) => {
                    e.preventDefault(); 
                    e.stopPropagation(); // Evita marcar/desmarcar la casilla al hacer clic en el texto
                    setModalTerminos(true);
                  }} 
                  className="text-violet-400 font-bold hover:underline"
                >
                  Términos de Servicio
                </span>{' '}
                y{' '}
                <span 
                  onClick={(e) => {
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    setModalPrivacidad(true);
                  }} 
                  className="text-violet-400 font-bold hover:underline"
                >
                  Aviso de Privacidad
                </span>.
              </span>
            </label>
          </div>

          {/* Botón de Enviar Dinámico (Se activa al marcar el checkbox) */}
          <div className="pt-4">
            <button 
              type="submit" 
              disabled={!formData.aceptaTerminosYPrivacidad || loading || success}
              className={`w-full font-bold py-4 rounded-2xl shadow-xs transition-all duration-200 text-base
                ${formData.aceptaTerminosYPrivacidad && !loading && !success
                  ? 'bg-violet-600 hover:bg-violet-500 text-white cursor-pointer active:scale-[0.99] shadow-[0_0_20px_rgba(139,92,246,0.3)]' 
                  : 'bg-white/5 text-slate-500 cursor-not-allowed shadow-none'
                }`}
            >
              {loading ? 'Procesando...' : 'Comenzar'}
            </button>
          </div>
        </form>
      </div>

      {/* ================= MODAL DESLIZABLE: TÉRMINOS Y CONDICIONES ================= */}
      {modalTerminos && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1f1638] w-full max-w-md rounded-3xl shadow-2xl flex flex-col max-h-[75vh] overflow-hidden border border-white/10">
            <div className="px-6 pt-6 pb-4 flex justify-between items-center bg-[#1f1638] sticky top-0 border-b border-white/10">
              <h2 className="text-xl font-bold text-violet-400">Términos y Condiciones de Uso</h2>
              <button onClick={() => setModalTerminos(false)} className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors">
                <X size={22} />
              </button>
            </div>
            {/* Contenedor del scroll text */}
            <div className="px-6 py-4 overflow-y-auto flex-grow text-[14px] text-slate-400 space-y-5 pr-4 leading-relaxed text-justify">
              <div className="space-y-1">
                <p className="font-bold text-white">1. Aceptación de los Términos</p>
                <p>Al crear una cuenta y utilizar la aplicación "Todú" (en adelante, "El Servicio"), usted acepta estar sujeto a los presentes Términos y Condiciones. Si no está de acuerdo con alguna parte de los mismos, no deberá utilizar la aplicación.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">2. Restricción de Edad</p>
                <p>El Servicio está estrictamente dirigido a personas mayores de 18 años. Al crear una cuenta, aceptar estos Términos y Condiciones y utilizar la aplicación, usted declara y garantiza que tiene al menos 18 años de edad y que posee la capacidad legal para celebrar este contrato. Si determinamos que una cuenta pertenece a un menor de edad, nos reservamos el derecho de suspender o eliminar dicha cuenta y todo su historial de datos de forma inmediata y sin previo aviso.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">3. Naturaleza del Servicio</p>
                <p>Todú es una herramienta digital de gestión de tiempo y gamificación diseñada para ayudar a mitigar la procrastinación. El Servicio se proporciona con fines de productividad personal y de ninguna manera sustituye el tratamiento, diagnóstico o asesoramiento médico o psicológico profesional para trastornos de atención, ansiedad u otras condiciones de salud mental.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">4. Propiedad Intelectual</p>
                <p>Todo el contenido, diseño visual, animaciones del avatar interactivo, código fuente, logotipos y mecánicas de evolución (incluyendo la lógica de experiencia e inventario) son propiedad exclusiva de los desarrolladores de Todú. Se otorga al usuario una licencia personal, limitada, no transferible y revocable para utilizar la aplicación strictly para fines personales y no comerciales.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">5. Reglas de Uso y Conducta (Fair Use)</p>
                <p>El usuario se compromete a utilizar la aplicación de manera legítima. Queda estrictamente prohibido:</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-400">
                  <li>Realizar ingeniería inversa, descompilar o modificar el código del cliente o servidor.</li>
                  <li>Manipular las peticiones de red (API) o explotar vulnerabilidades técnicas con el fin de alterar artificialmente las estadísticas de experiencia (XP), eludir la pérdida del sistema de rachas o desbloquear accesorios del inventario sin cumplir los requisitos de la aplicación.</li>
                </ul>
                <p className="pt-2 font-medium text-rose-400">Cualquier violación a esta cláusula resultará en la suspensión o eliminación inmediata y permanente de la cuenta del usuario sin previo aviso.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">6. Limitación de Responsabilidad</p>
                <p>El Servicio se proporciona "tal cual" y "según disponibilidad". El equipo de desarrollo no garantiza que la aplicación esté libre de interrupciones o errores. No nos hacemos responsables por la pérdida temporal o permanente de datos (historial de tareas o rachas) ocasionada por fallas en la infraestructura de la nube, mantenimientos del servidor o problemas de conectividad en el dispositivo del usuario.</p>
              </div>
            </div>
            <div className="p-4 border-t border-white/10 flex justify-end bg-black/20">
              <button 
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, aceptaTerminosYPrivacidad: true }));
                  setModalTerminos(false);
                }} 
                className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 px-6 rounded-xl text-sm transition-all"
              >
                Aceptar y Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL DESLIZABLE: AVISO DE PRIVACIDAD ================= */}
      {modalPrivacidad && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#1f1638] w-full max-w-md rounded-3xl shadow-2xl flex flex-col max-h-[75vh] overflow-hidden border border-white/10">
            <div className="px-6 pt-6 pb-4 flex justify-between items-center bg-[#1f1638] sticky top-0 border-b border-white/10">
              <h2 className="text-xl font-bold text-violet-400">Aviso de Privacidad de Todú</h2>
              <button onClick={() => setModalPrivacidad(false)} className="text-slate-400 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors">
                <X size={22} />
              </button>
            </div>
            {/* Contenedor del scroll text */}
            <div className="px-6 py-4 overflow-y-auto flex-grow text-[14px] text-slate-400 space-y-5 pr-4 leading-relaxed text-justify">
              <div className="space-y-1">
                <p className="font-bold text-white">Identidad del Responsable</p>
                <p>El equipo de desarrollo de "Todú" (en adelante, "El Responsable"), con sede en Chiapas, México, en el marco de sus actividades académicas y de desarrollo de software, es responsable del uso y protección de sus datos personales, en estricto apego a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">Datos Personales que Recabamos</p>
                <p>Para llevar a cabo las finalidades descritas en el presente aviso, recabaremos los siguientes datos personales:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong className="text-slate-300">Datos de identificación y contacto:</strong> Nombre de usuario y correo electrónico.</li>
                  <li><strong className="text-slate-300">Datos de uso y comportamiento:</strong> Historial de creación, cumplimiento y vencimiento de tareas, así como el progreso de experiencia (XP) y rachas dentro de la aplicación.</li>
                  <li><strong className="text-slate-300">Datos de ubicación (Geolocalización):</strong> Coordenadas de latitud y longitud, las cuales se obtienen única y exclusivamente con su consentimiento expreso y explícito en el momento de uso.</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">Tratamiento de Datos de Menores de Edad</p>
                <p>Todú no está diseñado para, ni dirigido a, menores de 18 años. Por lo tanto, no recabamos, procesamos ni almacenamos intencionalmente datos personales ni de geolocalización de menores de edad. Si usted es padre, madre o tutor legal y tiene conocimiento de que un menor a su cargo nos ha proporcionado información personal, le solicitamos que nos contacte para proceder con la eliminación definitiva de dichos datos de nuestros servidores.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">Finalidades del Tratamiento de Datos</p>
                <p>Los datos personales que recabamos tienen como finalidad principal:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Crear y gestionar su perfil de usuario dentro del sistema.</li>
                  <li>Alimentar el algoritmo de la máquina de estados que controla las animaciones, nivel de evolución y estado emocional del avatar virtual.</li>
                  <li>Sugerir puntos de interés y zonas de descanso al finalizar la jornada, mediante el uso de interfaces de programación (APIs) de terceros.</li>
                </ul>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">Cláusula Especial sobre Geolocalización</p>
                <p>La información de geolocalización es procesada de manera efímera. Esto significa que las coordenadas se utilizan momentáneamente para realizar la consulta de lugares recomendados y no se almacenan en nuestras bases de datos, garantizando su privacidad y seguridad espacial.</p>
              </div>
              <div className="space-y-1">
                <p className="font-bold text-white">Derechos ARCO y Revocación de Consentimiento</p>
                <p>Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al tratamiento de sus datos personales. Podrá ejercer estos derechos, así como eliminar permanentemente su cuenta y el historial de tareas, directamente desde la sección "Ajustes de Perfil" dentro de la aplicación.</p>
              </div>
            </div>
            {/* ... Asegúrate de que lo de arriba continúe aquí y cierra el primer modal así: */}
            <div className="p-4 border-t border-white/10 flex justify-end bg-black/20">
              <button 
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, aceptaTerminosYPrivacidad: true }));
                  setModalTerminos(false);
                }} 
                className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-2.5 px-6 rounded-xl text-sm transition-all"
              >
                Aceptar y Continuar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}