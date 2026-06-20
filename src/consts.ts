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
};

// Esenciales del viaje (crean necesidad + monetizan). Sustituye las URLs por tus
// enlaces de afiliado reales (Holafly/eSIM, seguro, tarjeta multidivisa).
export const ESSENTIALS = [
  { icon: '📶', title: 'eSIM con datos al llegar', desc: 'Internet desde que aterrizas, sin pagar roaming ni buscar tiendas.', cta: 'Ver eSIM', url: 'https://www.holafly.com/' },
  { icon: '🛡️', title: 'Seguro de viaje', desc: 'Salud, cancelación y equipaje cubiertos. No viajes sin él.', cta: 'Ver seguro', url: 'https://www.heymondo.es/' },
  { icon: '💳', title: 'Tarjeta sin comisión de divisa', desc: 'Paga en el extranjero casi al cambio real (~0,5% en vez del 3-5% del banco).', cta: 'Ver tarjeta', url: 'https://wise.com/' },
];
