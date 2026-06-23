// Configuración central del sitio.
export const SITE = {
  name: 'getcroquis',
  url: 'https://getcroquis.com',
  // Una sola URL (estilo Instagram): la app vive en el MISMO dominio, bajo sus
  // rutas (/dashboard, /explora, /login…). appUrl es la base del dominio.
  appUrl: 'https://getcroquis.com',
  title: 'getcroquis · Planifica tu viaje con IA, guías y consejos',
  description:
    'Crea tu itinerario con IA: presupuesto, guías de preparación y consejos para viajar mejor y más barato. Descubre viajes reales, cópialos y compártelos. Tu referente de viajes.',
  // Redes sociales de la marca (cambia el handle aquí en un solo sitio).
  instagram: 'https://instagram.com/getcroquis',
};

// "Ranking de necesidades" del viaje: informativo y discreto (no botones de
// anuncio). Cada uno con su nivel de necesidad y un enlace sutil. Sustituye las
// URLs por tus enlaces de afiliado reales (Holafly, Klook, seguro, tarjeta).
export const ESSENTIALS = [
  { icon: '📶', title: 'eSIM con datos', need: 'Imprescindible', desc: 'Internet desde que aterrizas, sin roaming.', linkText: 'Consigue un descuento en Holafly', url: 'https://esim.holafly.com/' },
  { icon: '🛡️', title: 'Seguro de viaje', need: 'Muy recomendable', desc: 'Cubre salud, cancelación y equipaje.', linkText: 'Comparar seguros', url: 'https://www.heymondo.es/' },
  { icon: '🎟️', title: 'Actividades y entradas', need: 'Reserva con antelación', desc: 'Tours y experiencias populares se agotan.', linkText: 'Ver en Klook', url: 'https://www.klook.com/' },
  { icon: '💳', title: 'Tarjeta multidivisa', need: 'Ahorra dinero', desc: 'Paga fuera casi al cambio real (~0,5%).', linkText: 'Comparar tarjetas', url: 'https://wise.com/' },
];
