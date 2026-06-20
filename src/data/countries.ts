// Modelo de datos por país: la base del "atlas viajero". Cada país con ficha
// genera una página /destinos/[slug]. Empezamos con los más buscados y ampliamos
// (idealmente con datos revisados, no relleno). El buscador de la home navega aquí.

export interface Season {
  name: string;
  months: string;
  pros: string[];
  cons: string[];
}

export interface Country {
  slug: string;
  name: string;
  code: string; // ISO-3166 alpha-2 (para la bandera flagcdn)
  emoji?: string;
  capital?: string;
  currency?: string;
  language?: string;
  plug?: string;
  tz?: string;
  budget?: string; // nivel orientativo
  bestMonths?: string;
  summary?: string;
  seasons?: Season[];
  regions?: string[];
  tips?: string[];
}

export const COUNTRIES: Country[] = [
  {
    slug: 'japon',
    name: 'Japón',
    code: 'jp',
    emoji: '🇯🇵',
    capital: 'Tokio',
    currency: 'Yen (JPY)',
    language: 'Japonés',
    plug: 'Tipo A/B (100 V)',
    tz: 'UTC+9',
    budget: 'Medio-alto',
    bestMonths: 'Marzo-Mayo y Octubre-Noviembre',
    summary:
      'Japón combina tradición y futuro como ningún otro país. La mejor época coincide con los cerezos en primavera y los arces rojos en otoño: clima suave y paisajes espectaculares.',
    seasons: [
      { name: 'Primavera', months: 'Mar–May', pros: ['Cerezos en flor (sakura)', 'Clima agradable'], cons: ['Mucha gente en sakura', 'Precios altos'] },
      { name: 'Verano', months: 'Jun–Ago', pros: ['Festivales (matsuri)', 'Montaña y norte'], cons: ['Calor y humedad', 'Lluvias y tifones'] },
      { name: 'Otoño', months: 'Sep–Nov', pros: ['Arces rojos (koyo)', 'Clima ideal', 'Menos masificado'], cons: ['Algún tifón en septiembre'] },
      { name: 'Invierno', months: 'Dic–Feb', pros: ['Nieve y onsen', 'Esquí en Hokkaido', 'Más barato'], cons: ['Frío en el norte'] },
    ],
    regions: ['Tokio', 'Kioto', 'Osaka', 'Hokkaido', 'Okinawa'],
    tips: ['Saca la Japan Rail Pass si harás varias ciudades', 'Lleva eSIM: el wifi público escasea', 'El efectivo aún manda en sitios pequeños'],
  },
  {
    slug: 'tailandia',
    name: 'Tailandia',
    code: 'th',
    emoji: '🇹🇭',
    capital: 'Bangkok',
    currency: 'Baht (THB)',
    language: 'Tailandés',
    plug: 'Tipo A/B/C (220 V)',
    tz: 'UTC+7',
    budget: 'Bajo',
    bestMonths: 'Noviembre-Marzo',
    summary:
      'Playas de postal, templos dorados y comida increíble a precios bajos. La estación seca (noviembre a marzo) es la mejor: sol, calor llevadero y mar en calma.',
    seasons: [
      { name: 'Estación seca', months: 'Nov–Feb', pros: ['El mejor clima', 'Mar tranquilo', 'Ideal para islas'], cons: ['Temporada alta', 'Más caro y lleno'] },
      { name: 'Calor', months: 'Mar–May', pros: ['Menos gente', 'Año Nuevo (Songkran) en abril'], cons: ['Calor extremo'] },
      { name: 'Monzón', months: 'Jun–Oct', pros: ['Verde y barato', 'Pocos turistas'], cons: ['Lluvias intensas', 'Algunas islas cierran'] },
    ],
    regions: ['Bangkok', 'Chiang Mai', 'Phuket', 'Krabi', 'Koh Samui'],
    tips: ['Costa oeste (Andamán) y este tienen monzones distintos', 'Regatea con respeto en los mercados', 'Seguro de viaje imprescindible para scooters'],
  },
  {
    slug: 'italia',
    name: 'Italia',
    code: 'it',
    emoji: '🇮🇹',
    capital: 'Roma',
    currency: 'Euro (EUR)',
    language: 'Italiano',
    plug: 'Tipo C/F/L (230 V)',
    tz: 'UTC+1',
    budget: 'Medio',
    bestMonths: 'Abril-Junio y Septiembre-Octubre',
    summary:
      'Arte, historia y la mejor gastronomía a cada esquina. Primavera y principios de otoño son ideales: buen tiempo, menos calor y menos turistas que en pleno verano.',
    seasons: [
      { name: 'Primavera', months: 'Abr–Jun', pros: ['Clima perfecto', 'Campos en flor', 'Menos colas'], cons: ['Semana Santa muy concurrida'] },
      { name: 'Verano', months: 'Jul–Ago', pros: ['Costa y playas', 'Días largos'], cons: ['Calor sofocante', 'Lleno y caro', 'Ciudades vacías en agosto'] },
      { name: 'Otoño', months: 'Sep–Oct', pros: ['Vendimia', 'Clima suave', 'Precios mejores'], cons: ['Días más cortos'] },
      { name: 'Invierno', months: 'Nov–Mar', pros: ['Ciudades sin masas', 'Alpes para esquiar'], cons: ['Frío y lluvia en el norte'] },
    ],
    regions: ['Roma', 'Florencia', 'Venecia', 'Costa Amalfitana', 'Toscana'],
    tips: ['Reserva museos online (Uffizi, Vaticano)', 'Evita agosto si no buscas playa', 'El tren es la mejor forma de moverse'],
  },
  {
    slug: 'islandia',
    name: 'Islandia',
    code: 'is',
    emoji: '🇮🇸',
    capital: 'Reikiavik',
    currency: 'Corona islandesa (ISK)',
    language: 'Islandés',
    plug: 'Tipo C/F (230 V)',
    tz: 'UTC+0',
    budget: 'Alto',
    bestMonths: 'Junio-Agosto (sol) o Octubre-Marzo (auroras)',
    summary:
      'Cascadas, volcanes y auroras boreales. La época depende de qué busques: verano para recorrer la isla con luz casi infinita, o invierno para cazar auroras.',
    seasons: [
      { name: 'Verano', months: 'Jun–Ago', pros: ['Sol de medianoche', 'Todas las carreteras abiertas', 'Frailecillos'], cons: ['Temporada alta', 'Sin auroras'] },
      { name: 'Entretiempo', months: 'Sep–Oct / Abr–May', pros: ['Menos gente', 'Auroras posibles en otoño', 'Mejores precios'], cons: ['Clima cambiante'] },
      { name: 'Invierno', months: 'Nov–Mar', pros: ['Auroras boreales', 'Cuevas de hielo', 'Paisaje nevado'], cons: ['Pocas horas de luz', 'Carreteras del interior cerradas'] },
    ],
    regions: ['Reikiavik', 'Círculo Dorado', 'Costa Sur', 'Fiordos del Oeste', 'Norte (Akureyri)'],
    tips: ['Alquila coche; el transporte público es escaso', 'Ropa impermeable y por capas todo el año', 'Es caro: cocina algo para ahorrar'],
  },
  {
    slug: 'mexico',
    name: 'México',
    code: 'mx',
    emoji: '🇲🇽',
    capital: 'Ciudad de México',
    currency: 'Peso mexicano (MXN)',
    language: 'Español',
    plug: 'Tipo A/B (127 V)',
    tz: 'UTC-6 (centro)',
    budget: 'Bajo-medio',
    bestMonths: 'Noviembre-Abril',
    summary:
      'Playas del Caribe, ruinas mayas, ciudades coloniales y una cultura vibrante. La estación seca (noviembre a abril) ofrece el mejor clima y evita la temporada de huracanes.',
    seasons: [
      { name: 'Estación seca', months: 'Nov–Abr', pros: ['El mejor clima', 'Sin huracanes', 'Día de Muertos (nov)'], cons: ['Temporada alta', 'Caro en Semana Santa'] },
      { name: 'Estación húmeda', months: 'May–Oct', pros: ['Verde y barato', 'Menos turistas'], cons: ['Lluvias por la tarde', 'Riesgo de huracán en el Caribe'] },
    ],
    regions: ['Ciudad de México', 'Riviera Maya', 'Oaxaca', 'Yucatán', 'Baja California'],
    tips: ['Bebe agua embotellada', 'El Caribe tiene huracanes de junio a noviembre', 'Combina playa con ciudades coloniales'],
  },
];

export const countryBySlug = (slug: string) => COUNTRIES.find((c) => c.slug === slug);
