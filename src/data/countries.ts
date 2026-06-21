// Modelo de datos por país: la base del "atlas viajero". Cada país con ficha
// genera una página /destinos/[slug]. Imágenes icónicas verificadas (Wikimedia).

export interface Season {
  name: string;
  months: string;
  pros: string[];
  cons: string[];
}

export interface MonthClimate {
  m: string; // 'Ene', 'Feb'…
  r: 'good' | 'mid' | 'avoid';
}

export interface BudgetLevels {
  mochilero: number;
  normal: number;
  comodo: number;
  lujo: number;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Sight {
  name: string;
  city?: string;
  note?: string;
}

export interface CityFact {
  name: string;
  fact: string;
}

export interface CitySight {
  name: string;
  note?: string;
  url?: string; // enlace a la actividad/sitio (Klook, oficial…)
}

export interface CityGuide {
  name: string;
  days?: string; // tiempo recomendado
  fact?: string; // dato curioso
  image?: string; // foto de la ciudad (banner del desplegable)
  sights?: CitySight[]; // ranking de qué ver/hacer
}

export interface Link {
  label: string;
  url: string;
}

export interface Country {
  slug: string;
  name: string;
  code: string; // ISO alpha-2 (bandera flagcdn)
  image?: string; // foto icónica (hero)
  imageAlt?: string;
  capital?: string;
  currency?: string;
  language?: string;
  plug?: string;
  tz?: string;
  budget?: string;
  bestMonths?: string;
  visa?: string;
  internet?: string;
  duration?: string;
  difficulty?: string; // 'Fácil' | 'Media' | 'Alta'
  difficultyNote?: string;
  tags?: string[]; // para quién es: cultural, primerizos, solo travel, friki…
  english?: string; // utilidad del inglés
  paperwork?: string[]; // pasaporte, visado, carnet internacional, vacunas…
  topSights?: Sight[]; // (legado) top 10 qué ver
  cities?: CityFact[]; // (legado) datos curiosos de las ciudades top
  cityGuides?: CityGuide[]; // ciudades en desplegable: tiempo + ranking + enlaces
  links?: Link[]; // enlaces de interés / documentación
  summary?: string;
  // Texto humano y único por país: la clave anti "thin content" para SEO.
  opinion?: string;
  budgetLevels?: BudgetLevels; // €/día por estilo de viaje
  climate?: MonthClimate[]; // 12 meses (🟢🟡🔴)
  seasons?: Season[];
  regions?: string[];
  tips?: string[];
  faq?: Faq[];
}

export const COUNTRIES: Country[] = [
  {
    slug: 'japon', name: 'Japón', code: 'jp',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg/1280px-View_of_Mount_Fuji_from_%C5%8Cwakudani_20211202.jpg',
    imageAlt: 'Monte Fuji, Japón',
    capital: 'Tokio', currency: 'Yen (JPY)', language: 'Japonés', plug: 'Tipo A/B (100 V)', tz: 'UTC+9',
    budget: 'Medio-alto', bestMonths: 'Marzo-Mayo y Octubre-Noviembre',
    summary: 'Tradición y futuro como en ningún otro país. La mejor época coincide con los cerezos en primavera y los arces rojos en otoño: clima suave y paisajes espectaculares.',
    seasons: [
      { name: 'Primavera', months: 'Mar–May', pros: ['Cerezos en flor (sakura)', 'Clima agradable'], cons: ['Mucha gente', 'Precios altos'] },
      { name: 'Verano', months: 'Jun–Ago', pros: ['Festivales (matsuri)', 'Montaña y norte'], cons: ['Calor y humedad', 'Tifones'] },
      { name: 'Otoño', months: 'Sep–Nov', pros: ['Arces rojos (koyo)', 'Clima ideal', 'Menos gente'], cons: ['Algún tifón'] },
      { name: 'Invierno', months: 'Dic–Feb', pros: ['Nieve y onsen', 'Esquí en Hokkaido', 'Más barato'], cons: ['Frío en el norte'] },
    ],
    regions: ['Tokio', 'Kioto', 'Osaka', 'Hokkaido', 'Okinawa'],
    tips: ['Saca la Japan Rail Pass si harás varias ciudades', 'Lleva eSIM: el wifi público escasea', 'El efectivo aún manda en sitios pequeños'],
    visa: 'No requerido hasta 90 días',
    internet: 'Excelente · eSIM recomendada',
    duration: '10-14 días',
    budgetLevels: { mochilero: 60, normal: 110, comodo: 200, lujo: 380 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'avoid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'mid' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'mid' },
    ],
    opinion:
      'Te lo digo de corazón: Japón engancha. La primera vez flipas con el contraste — cruzas Shibuya entre un mar de gente y media hora después estás tú solo en un templo de Kioto oyendo caer el agua. Mi consejo de amigo: si puedes, vete en otoño en lugar de en plena sakura. Los arces rojos son igual de espectaculares, hay la mitad de turistas y pagas bastante menos. Y no te quedes solo en Tokio y Kioto: una noche en un ryokan con onsen en mitad del campo es de esas cosas que no se te olvidan en la vida. Vamos, que vuelves siendo otra persona.',
    faq: [
      { q: '¿Cuántos días necesito para Japón?', a: 'Con 10-14 días ves Tokio, Kioto, Osaka y alguna escapada (Hakone, Nara o Hiroshima). Con menos de una semana, céntrate en Tokio + Kioto.' },
      { q: '¿Es caro viajar a Japón?', a: 'Es medio-alto, pero más asequible de lo que parece: comer está muy bien de precio y el transporte, aunque caro, es eficiente. Calcula unos 100-120 € al día por persona en un viaje normal.' },
      { q: '¿Hace falta visado?', a: 'Para estancias turísticas de hasta 90 días, los españoles no necesitan visado.' },
      { q: '¿Cuál es la mejor época?', a: 'Primavera (marzo-mayo) por los cerezos y otoño (octubre-noviembre) por los arces. Evita julio y agosto: calor, humedad y tifones.' },
    ],
    difficulty: 'Media',
    difficultyNote: 'Muy seguro y limpio, pero el idioma y los kanjis despistan al principio. Con apps de traducción y la red de trenes, te mueves sin problema.',
    tags: ['Cultural', 'Gastronómico', 'Bueno para primerizos', 'Seguro para viajar solo', 'Para frikis (anime y tecnología)', 'En pareja'],
    english: 'Limitado fuera de zonas turísticas. Señalética en inglés en transporte; útil llevar Google Translate con cámara.',
    paperwork: [
      'Pasaporte con al menos 6 meses de validez',
      'Sin visado para turismo hasta 90 días (españoles)',
      'Registro en Visit Japan Web: genera el QR para aduanas e inmigración',
      'Carnet de conducir internacional si vas a conducir',
      'Sin vacunas obligatorias',
    ],
    topSights: [
      { name: 'Santuario Fushimi Inari (miles de toriis)', city: 'Kioto', note: 'Ve al amanecer para esquivar las masas' },
      { name: 'Templo Senso-ji y barrio de Asakusa', city: 'Tokio' },
      { name: 'Cruce de Shibuya', city: 'Tokio', note: 'Míralo desde el Starbucks de enfrente' },
      { name: 'Monte Fuji y los Cinco Lagos', city: 'Fujikawaguchiko' },
      { name: 'Parque de Nara (ciervos libres)', city: 'Nara' },
      { name: 'Templo dorado Kinkaku-ji', city: 'Kioto' },
      { name: 'Barrio histórico de Gion (geishas)', city: 'Kioto', note: 'Atardecer entre callejones de madera' },
      { name: 'Castillo de Himeji', city: 'Himeji', note: 'El castillo feudal mejor conservado' },
      { name: 'Memorial de la Paz', city: 'Hiroshima' },
      { name: 'Bosque de bambú de Arashiyama', city: 'Kioto' },
    ],
    cities: [
      { name: 'Tokio', fact: 'Su red de metro mueve más de 8 millones de personas al día y casi nunca llega tarde: un retraso de 1 minuto se anuncia con disculpas.' },
      { name: 'Kioto', fact: 'Fue capital de Japón más de 1.000 años y se libró de los bombardeos de 1945, por eso conserva 1.600 templos budistas.' },
      { name: 'Osaka', fact: 'Es la capital gastronómica: aquí nacieron el takoyaki y el okonomiyaki. Su lema informal es "kuidaore" (arruinarse comiendo).' },
    ],
    cityGuides: [
      {
        name: 'Tokio', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Shibuya_Crossing%2C_Aerial.jpg/500px-Shibuya_Crossing%2C_Aerial.jpg',
        fact: 'El metro mueve 8 millones de personas al día y casi nunca llega tarde.',
        sights: [
          { name: 'Templo Senso-ji y barrio de Asakusa' },
          { name: 'Cruce de Shibuya', note: 'Míralo desde el Starbucks de enfrente' },
          { name: 'teamLab Planets (museo digital)', url: 'https://www.klook.com/es/search/?query=teamLab%20Tokyo' },
          { name: 'Shinjuku de noche y Golden Gai' },
          { name: 'Akihabara (anime y electrónica)' },
        ],
      },
      {
        name: 'Kioto', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg/500px-Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg',
        fact: 'Conserva 1.600 templos budistas; fue capital más de mil años.',
        sights: [
          { name: 'Santuario Fushimi Inari', note: 'Ve al amanecer para esquivar las masas' },
          { name: 'Templo dorado Kinkaku-ji' },
          { name: 'Barrio de Gion al atardecer', note: 'Posibilidad de ver geishas' },
          { name: 'Bosque de bambú de Arashiyama' },
          { name: 'Templo Kiyomizu-dera' },
        ],
      },
      {
        name: 'Osaka', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Osaka_Castle_03bs3200.jpg/500px-Osaka_Castle_03bs3200.jpg',
        fact: 'Capital gastronómica: cuna del takoyaki y el okonomiyaki ("kuidaore").',
        sights: [
          { name: 'Dotonbori y el cartel de Glico', note: 'El mejor sitio para comer de calle' },
          { name: 'Castillo de Osaka' },
          { name: 'Universal Studios Japan', url: 'https://www.klook.com/es/search/?query=Universal%20Studios%20Japan' },
        ],
      },
      {
        name: 'Nara y Hakone', days: 'Excursiones de 1 día',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/T%C5%8Ddai-ji_Kon-d%C5%8D.jpg/500px-T%C5%8Ddai-ji_Kon-d%C5%8D.jpg',
        fact: 'Nara para los ciervos libres; Hakone para ver el Fuji y un onsen.',
        sights: [
          { name: 'Parque de Nara (ciervos) y Templo Todai-ji' },
          { name: 'Lago Ashi y vistas al Monte Fuji desde Hakone' },
        ],
      },
    ],
    links: [
      { label: 'Visit Japan Web (QR de aduanas e inmigración)', url: 'https://www.vjw.digital.go.jp/' },
      { label: 'Embajada de España en Japón', url: 'https://www.exteriores.gob.es/Embajadas/tokio' },
      { label: 'Japan Rail Pass (info oficial)', url: 'https://japanrailpass.net/es/' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'tailandia', name: 'Tailandia', code: 'th',
    tags: ['Playa', 'Barato', 'Mochilero', 'Aventura', 'Solo travel', 'Gastronómico'],
    difficulty: 'Fácil-media', duration: '12-15 días',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg/1280px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg',
    imageAlt: 'Templo Wat Arun, Bangkok',
    capital: 'Bangkok', currency: 'Baht (THB)', language: 'Tailandés', plug: 'Tipo A/B/C (220 V)', tz: 'UTC+7',
    budget: 'Bajo', bestMonths: 'Noviembre-Marzo',
    summary: 'Playas de postal, templos dorados y comida increíble a precios bajos. La estación seca (noviembre a marzo) es la mejor: sol, calor llevadero y mar en calma.',
    seasons: [
      { name: 'Estación seca', months: 'Nov–Feb', pros: ['El mejor clima', 'Mar tranquilo', 'Ideal islas'], cons: ['Temporada alta', 'Más caro'] },
      { name: 'Calor', months: 'Mar–May', pros: ['Menos gente', 'Songkran (abril)'], cons: ['Calor extremo'] },
      { name: 'Monzón', months: 'Jun–Oct', pros: ['Verde y barato', 'Pocos turistas'], cons: ['Lluvias intensas', 'Islas cerradas'] },
    ],
    regions: ['Bangkok', 'Chiang Mai', 'Phuket', 'Krabi', 'Koh Samui'],
    tips: ['Las dos costas tienen monzones distintos', 'Regatea con respeto', 'Seguro imprescindible para scooters'],
    opinion:
      'Tailandia engancha y es perfecta para lanzarte a Asia por primera vez. Es barata, la gente es un encanto y la comida… la comida es de otro nivel. Mi consejo: combina un par de días del caos maravilloso de Bangkok con el norte tranquilo de Chiang Mai y unas islas para rematar. Y come en los puestos callejeros sin miedo: ahí está lo mejor y por cuatro euros. Vas a querer volver antes de irte.',
    faq: [
      { q: '¿Cuántos días para Tailandia?', a: 'Con 12-15 días combinas Bangkok, el norte (Chiang Mai) y unas islas. Para solo islas o solo norte, una semana basta.' },
      { q: '¿Hace falta visado?', a: 'Los españoles entran sin visado para estancias turísticas cortas; confirma el plazo vigente antes de viajar.' },
      { q: '¿Es seguro viajar solo?', a: 'Es uno de los destinos favoritos de mochileros y viajeros solos. Sentido común y seguro de viaje, sobre todo si conduces scooter.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Exención de visado para turismo (confirma el plazo)', 'Seguro de viaje muy recomendable', 'Sin vacunas obligatorias (consulta las recomendadas)'],
  },
  {
    slug: 'italia', name: 'Italia', code: 'it',
    tags: ['Cultura', 'Gastronómico', 'Arte', 'En pareja', 'Bueno para primerizos'],
    difficulty: 'Fácil', duration: '7-10 días',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg',
    imageAlt: 'Coliseo de Roma',
    capital: 'Roma', currency: 'Euro (EUR)', language: 'Italiano', plug: 'Tipo C/F/L (230 V)', tz: 'UTC+1',
    budget: 'Medio', bestMonths: 'Abril-Junio y Septiembre-Octubre',
    summary: 'Arte, historia y la mejor gastronomía a cada esquina. Primavera y principios de otoño son ideales: buen tiempo, menos calor y menos turistas que en pleno verano.',
    seasons: [
      { name: 'Primavera', months: 'Abr–Jun', pros: ['Clima perfecto', 'Menos colas'], cons: ['Semana Santa llena'] },
      { name: 'Verano', months: 'Jul–Ago', pros: ['Costa y playas', 'Días largos'], cons: ['Calor', 'Lleno y caro'] },
      { name: 'Otoño', months: 'Sep–Oct', pros: ['Vendimia', 'Clima suave', 'Mejores precios'], cons: ['Días más cortos'] },
      { name: 'Invierno', months: 'Nov–Mar', pros: ['Ciudades sin masas', 'Alpes para esquiar'], cons: ['Frío y lluvia'] },
    ],
    regions: ['Roma', 'Florencia', 'Venecia', 'Costa Amalfitana', 'Toscana'],
    tips: ['Reserva museos online (Uffizi, Vaticano)', 'Evita agosto si no buscas playa', 'El tren es la mejor forma de moverse'],
    opinion:
      'Italia no decepciona jamás. Te tomas un café en una piazza, te pierdes por callejones en Roma y de repente tienes el Coliseo delante sin esperarlo. Mi consejo de amigo: no intentes verlo todo en un viaje, es imposible y acabas reventado. Elige dos o tres ciudades, come pasta y pizza sin remordimientos, y deja huecos para sentarte a ver pasar la vida. Eso es lo más italiano que vas a hacer.',
    faq: [
      { q: '¿Cuántos días necesito para Italia?', a: 'Con 7-10 días ves Roma, Florencia y Venecia tranquilo. Si quieres sumar la Costa Amalfitana o la Toscana, mejor 12-14.' },
      { q: '¿Hace falta visado?', a: 'No: con el DNI español en vigor es suficiente para entrar (es zona Schengen).' },
      { q: '¿Cuál es la mejor época?', a: 'Primavera (abril-junio) y principios de otoño (septiembre-octubre): buen clima y menos turistas que en pleno verano.' },
    ],
    paperwork: ['DNI o pasaporte en vigor (zona Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
  },
  {
    slug: 'islandia', name: 'Islandia', code: 'is',
    tags: ['Naturaleza', 'Aventura', 'Auroras', 'Road trip', 'Caro'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gullfoss_from_the_Air_%28cropped%29.jpg/1280px-Gullfoss_from_the_Air_%28cropped%29.jpg',
    imageAlt: 'Cascada de Gullfoss, Islandia',
    capital: 'Reikiavik', currency: 'Corona islandesa (ISK)', language: 'Islandés', plug: 'Tipo C/F (230 V)', tz: 'UTC+0',
    budget: 'Alto', bestMonths: 'Junio-Agosto (sol) o Octubre-Marzo (auroras)',
    summary: 'Cascadas, volcanes y auroras boreales. La época depende de qué busques: verano para recorrer la isla con luz casi infinita, o invierno para cazar auroras.',
    seasons: [
      { name: 'Verano', months: 'Jun–Ago', pros: ['Sol de medianoche', 'Carreteras abiertas', 'Frailecillos'], cons: ['Temporada alta', 'Sin auroras'] },
      { name: 'Entretiempo', months: 'Sep–Oct / Abr–May', pros: ['Menos gente', 'Auroras en otoño', 'Mejor precio'], cons: ['Clima cambiante'] },
      { name: 'Invierno', months: 'Nov–Mar', pros: ['Auroras boreales', 'Cuevas de hielo'], cons: ['Poca luz', 'Interior cerrado'] },
    ],
    regions: ['Reikiavik', 'Círculo Dorado', 'Costa Sur', 'Fiordos del Oeste', 'Norte (Akureyri)'],
    tips: ['Alquila coche; el transporte público es escaso', 'Ropa impermeable por capas', 'Es caro: cocina algo para ahorrar'],
  },
  {
    slug: 'mexico', name: 'México', code: 'mx',
    tags: ['Playa', 'Cultura', 'Gastronómico', 'Barato', 'Aventura'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/1280px-Chichen_Itza_3.jpg',
    imageAlt: 'Chichén Itzá, México',
    capital: 'Ciudad de México', currency: 'Peso mexicano (MXN)', language: 'Español', plug: 'Tipo A/B (127 V)', tz: 'UTC-6',
    budget: 'Bajo-medio', bestMonths: 'Noviembre-Abril',
    summary: 'Playas del Caribe, ruinas mayas, ciudades coloniales y una cultura vibrante. La estación seca (noviembre a abril) ofrece el mejor clima y evita los huracanes.',
    seasons: [
      { name: 'Estación seca', months: 'Nov–Abr', pros: ['El mejor clima', 'Sin huracanes', 'Día de Muertos (nov)'], cons: ['Temporada alta'] },
      { name: 'Estación húmeda', months: 'May–Oct', pros: ['Verde y barato', 'Menos turistas'], cons: ['Lluvias', 'Riesgo de huracán'] },
    ],
    regions: ['Ciudad de México', 'Riviera Maya', 'Oaxaca', 'Yucatán', 'Baja California'],
    tips: ['Bebe agua embotellada', 'Huracanes de junio a noviembre en el Caribe', 'Combina playa y ciudades coloniales'],
  },
  {
    slug: 'francia', name: 'Francia', code: 'fr',
    tags: ['Cultura', 'Gastronómico', 'En pareja', 'Arte', 'Romántico'],
    difficulty: 'Fácil', duration: '7-10 días',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/1280px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
    imageAlt: 'Torre Eiffel, París',
    capital: 'París', currency: 'Euro (EUR)', language: 'Francés', plug: 'Tipo C/E (230 V)', tz: 'UTC+1',
    budget: 'Medio-alto', bestMonths: 'Abril-Junio y Septiembre-Octubre',
    summary: 'París, castillos del Loira, lavanda en Provenza y Costa Azul. Primavera y otoño dan el mejor equilibrio: buen clima, menos turistas y precios más razonables.',
    seasons: [
      { name: 'Primavera', months: 'Abr–Jun', pros: ['Clima ideal', 'Jardines en flor', 'Menos colas'], cons: ['Puentes concurridos'] },
      { name: 'Verano', months: 'Jul–Ago', pros: ['Lavanda en Provenza', 'Costa Azul', 'Festivales'], cons: ['Lleno y caro', 'Calor en el sur'] },
      { name: 'Otoño', months: 'Sep–Oct', pros: ['Vendimia', 'Clima suave', 'Mejores precios'], cons: ['Días más cortos'] },
      { name: 'Invierno', months: 'Nov–Mar', pros: ['Alpes para esquiar', 'París con menos gente'], cons: ['Frío y lluvia'] },
    ],
    regions: ['París', 'Provenza', 'Costa Azul', 'Valle del Loira', 'Alsacia'],
    tips: ['Reserva el Louvre y Versalles online', 'El TGV conecta el país en horas', 'Lavanda en flor: finales de junio a julio'],
  },
  {
    slug: 'espana', name: 'España', code: 'es',
    tags: ['Playa', 'Gastronómico', 'Fiesta', 'Cultura', 'Bueno para primerizos'],
    difficulty: 'Muy fácil', duration: '7-12 días',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/1280px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg',
    imageAlt: 'La Alhambra, Granada',
    capital: 'Madrid', currency: 'Euro (EUR)', language: 'Español', plug: 'Tipo C/F (230 V)', tz: 'UTC+1',
    budget: 'Medio', bestMonths: 'Mayo-Junio y Septiembre-Octubre',
    summary: 'Playas, ciudades con historia, gastronomía y fiesta. La primavera y el principio del otoño ofrecen buen tiempo sin el calor sofocante ni la masificación del verano.',
    seasons: [
      { name: 'Primavera', months: 'Abr–Jun', pros: ['Clima perfecto', 'Ferias (Sevilla)', 'Menos gente'], cons: ['Semana Santa llena'] },
      { name: 'Verano', months: 'Jul–Ago', pros: ['Playas', 'Vida nocturna', 'Fiestas'], cons: ['Calor extremo interior', 'Costa abarrotada'] },
      { name: 'Otoño', months: 'Sep–Oct', pros: ['Mar aún cálido', 'Buen clima', 'Precios mejores'], cons: ['Días más cortos'] },
      { name: 'Invierno', months: 'Nov–Mar', pros: ['Sur templado', 'Esquí en Sierra Nevada/Pirineos'], cons: ['Frío en el interior'] },
    ],
    regions: ['Madrid', 'Barcelona', 'Andalucía', 'Islas Canarias', 'País Vasco'],
    tips: ['Se come y cena tarde', 'Canarias es buen destino todo el año', 'El AVE conecta las grandes ciudades'],
  },
  {
    slug: 'grecia', name: 'Grecia', code: 'gr',
    tags: ['Playa', 'Islas', 'Cultura', 'En pareja', 'Romántico'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/2011_Dimos_Thiras.png/1280px-2011_Dimos_Thiras.png',
    imageAlt: 'Santorini, Grecia',
    capital: 'Atenas', currency: 'Euro (EUR)', language: 'Griego', plug: 'Tipo C/F (230 V)', tz: 'UTC+2',
    budget: 'Medio', bestMonths: 'Mayo-Junio y Septiembre',
    summary: 'Islas de aguas turquesa, ruinas antiguas y pueblos blancos. La temporada media (mayo-junio y septiembre) da mar cálido, sol y menos masificación que en pleno agosto.',
    seasons: [
      { name: 'Primavera', months: 'Abr–Jun', pros: ['Clima ideal', 'Islas tranquilas', 'Campos en flor'], cons: ['Mar aún fresco en abril'] },
      { name: 'Verano', months: 'Jul–Ago', pros: ['Mar cálido', 'Ambiente en las islas'], cons: ['Calor y meltemi', 'Lleno y caro'] },
      { name: 'Otoño', months: 'Sep–Oct', pros: ['Mar cálido', 'Menos gente', 'Mejores precios'], cons: ['Algunos servicios cierran en oct'] },
      { name: 'Invierno', months: 'Nov–Mar', pros: ['Atenas sin colas', 'Muy barato'], cons: ['Islas vacías', 'Ferris reducidos'] },
    ],
    regions: ['Atenas', 'Santorini', 'Mykonos', 'Creta', 'Meteora'],
    tips: ['Reserva los ferris entre islas con antelación', 'Santorini en agosto es carísimo', 'Lleva calzado para las ruinas'],
  },
  {
    slug: 'peru', name: 'Perú', code: 'pe',
    tags: ['Aventura', 'Naturaleza', 'Cultura', 'Trekking', 'Mochilero'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Machu_Picchu%2C_2023_%28012%29.jpg/1280px-Machu_Picchu%2C_2023_%28012%29.jpg',
    imageAlt: 'Machu Picchu, Perú',
    capital: 'Lima', currency: 'Sol (PEN)', language: 'Español', plug: 'Tipo A/C (220 V)', tz: 'UTC-5',
    budget: 'Bajo-medio', bestMonths: 'Mayo-Septiembre',
    summary: 'Machu Picchu, los Andes, el Amazonas y una gastronomía de las mejores del mundo. La estación seca (mayo a septiembre) es la ideal para la sierra y el Camino Inca.',
    seasons: [
      { name: 'Estación seca', months: 'May–Sep', pros: ['Mejor para Machu Picchu', 'Cielos despejados', 'Ideal trekking'], cons: ['Temporada alta', 'Noches frías en altura'] },
      { name: 'Transición', months: 'Abr y Oct', pros: ['Menos gente', 'Paisaje verde', 'Buenos precios'], cons: ['Alguna lluvia'] },
      { name: 'Estación húmeda', months: 'Nov–Mar', pros: ['Costa soleada', 'Verde y barato'], cons: ['Lluvias en la sierra', 'Camino Inca cierra en febrero'] },
    ],
    regions: ['Cusco', 'Machu Picchu', 'Lima', 'Arequipa', 'Lago Titicaca'],
    tips: ['Aclimátate a la altura en Cusco', 'Reserva Machu Picchu y el Camino Inca con meses', 'No bebas agua del grifo'],
  },
  {
    slug: 'portugal', name: 'Portugal', code: 'pt',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Lisboa_-_Portugal_%2852597836992%29.jpg/1280px-Lisboa_-_Portugal_%2852597836992%29.jpg',
    imageAlt: 'Lisboa, Portugal',
    capital: 'Lisboa', currency: 'Euro (EUR)', language: 'Portugués', plug: 'Tipo C/F (230 V)', tz: 'UTC+0',
    budget: 'Medio', bestMonths: 'Mayo-Junio y Septiembre-Octubre',
    difficulty: 'Muy fácil', duration: '6-9 días',
    tags: ['Playa', 'Gastronómico', 'En pareja', 'Bueno para primerizos', 'Barato'],
    summary: 'Lisboa y Oporto, playas del Algarve, vino y pastéis de nata. Cercano, asequible y con encanto: ideal para una primera escapada europea sin agobios ni grandes gastos.',
    seasons: [
      { name: 'Primavera', months: 'Abr–Jun', pros: ['Clima perfecto', 'Menos gente', 'Flores'], cons: ['Mar aún fresco'] },
      { name: 'Verano', months: 'Jul–Ago', pros: ['Playas del Algarve', 'Ambiente'], cons: ['Lleno y más caro'] },
      { name: 'Otoño', months: 'Sep–Oct', pros: ['Mar templado', 'Vendimia', 'Buen precio'], cons: ['Días más cortos'] },
    ],
    regions: ['Lisboa', 'Oporto', 'Algarve', 'Sintra', 'Madeira'],
    tips: ['El Algarve es lo top para playa', 'Prueba el bacalao y los pastéis de nata', 'Tren y bus conectan bien el país'],
  },
  {
    slug: 'marruecos', name: 'Marruecos', code: 'ma',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chefchaouen_%2852189357475%29.jpg/1280px-Chefchaouen_%2852189357475%29.jpg',
    imageAlt: 'Chefchaouen, Marruecos',
    capital: 'Rabat', currency: 'Dírham (MAD)', language: 'Árabe y francés', plug: 'Tipo C/E (220 V)', tz: 'UTC+1',
    budget: 'Bajo', bestMonths: 'Marzo-Mayo y Septiembre-Noviembre',
    difficulty: 'Media', duration: '8-12 días',
    tags: ['Cultura', 'Aventura', 'Barato', 'Gastronómico', 'Desierto'],
    summary: 'Zocos de Marrakech, el azul de Chefchauen y noches en el desierto del Sáhara. Exótico y muy cerca de España, con una mezcla de cultura, color y aventura difícil de igualar.',
    seasons: [
      { name: 'Primavera', months: 'Mar–May', pros: ['Clima ideal', 'Desierto agradable', 'Paisaje verde'], cons: ['Semana Santa concurrida'] },
      { name: 'Verano', months: 'Jun–Ago', pros: ['Costa atlántica fresca'], cons: ['Calor extremo en el interior y el desierto'] },
      { name: 'Otoño', months: 'Sep–Nov', pros: ['Temperaturas perfectas', 'Menos gente'], cons: ['Noches frías en el desierto'] },
    ],
    regions: ['Marrakech', 'Fez', 'Chefchauen', 'Desierto de Merzouga', 'Esauira'],
    tips: ['Regatea siempre en los zocos', 'Vive una noche en una jaima en el desierto', 'Lleva efectivo, en zocos no aceptan tarjeta'],
  },
  {
    slug: 'croacia', name: 'Croacia', code: 'hr',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg/1280px-The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg',
    imageAlt: 'Murallas de Dubrovnik, Croacia',
    capital: 'Zagreb', currency: 'Euro (EUR)', language: 'Croata', plug: 'Tipo C/F (230 V)', tz: 'UTC+1',
    budget: 'Medio', bestMonths: 'Mayo-Junio y Septiembre',
    difficulty: 'Fácil', duration: '7-10 días',
    tags: ['Playa', 'Naturaleza', 'Islas', 'En pareja', 'Cultura'],
    summary: 'Aguas turquesa del Adriático, islas de ensueño, la muralla de Dubrovnik y los lagos de Plitvice. La media estación da mar cálido, sol y mucha menos masificación que en agosto.',
    seasons: [
      { name: 'Primavera', months: 'May–Jun', pros: ['Clima ideal', 'Islas tranquilas', 'Plitvice frondoso'], cons: ['Mar aún fresco en mayo'] },
      { name: 'Verano', months: 'Jul–Ago', pros: ['Mar cálido', 'Ambiente en las islas'], cons: ['Lleno y caro', 'Dubrovnik abarrotada'] },
      { name: 'Otoño', months: 'Sep–Oct', pros: ['Mar cálido', 'Menos gente', 'Mejores precios'], cons: ['Servicios reducidos en oct'] },
    ],
    regions: ['Dubrovnik', 'Split', 'Hvar', 'Lagos de Plitvice', 'Istria'],
    tips: ['Reserva los ferris entre islas con antelación', 'Plitvice mejor a primera hora', 'Split es buena base para las islas'],
  },
  {
    slug: 'vietnam', name: 'Vietnam', code: 'vn',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ha_Long_Bay_in_2019.jpg/1280px-Ha_Long_Bay_in_2019.jpg',
    imageAlt: 'Bahía de Ha Long, Vietnam',
    capital: 'Hanói', currency: 'Dong (VND)', language: 'Vietnamita', plug: 'Tipo A/C (220 V)', tz: 'UTC+7',
    budget: 'Bajo', bestMonths: 'Marzo-Abril y Octubre-Noviembre',
    difficulty: 'Media', duration: '14-18 días',
    tags: ['Barato', 'Aventura', 'Mochilero', 'Gastronómico', 'Naturaleza'],
    summary: 'La bahía de Ha Long, los arrozales del norte, la comida callejera y precios de risa. Un país largo y variado, paraíso mochilero donde el dinero cunde muchísimo.',
    seasons: [
      { name: 'Primavera', months: 'Mar–Abr', pros: ['Buen clima en casi todo el país', 'Menos lluvia'], cons: ['Norte aún fresco'] },
      { name: 'Verano', months: 'May–Sep', pros: ['Barato', 'Verde'], cons: ['Calor, humedad y tifones', 'Lluvias'] },
      { name: 'Otoño', months: 'Oct–Nov', pros: ['Clima ideal en el norte', 'Arrozales dorados'], cons: ['Centro con riesgo de lluvias'] },
    ],
    regions: ['Hanói', 'Bahía de Ha Long', 'Hoi An', 'Sapa', 'Ho Chi Minh'],
    tips: ['El país es largo: el clima varía mucho entre norte y sur', 'Come en puestos callejeros, es seguro y delicioso', 'Cuidado al cruzar: el tráfico de motos es caótico'],
  },
];

export const countryBySlug = (slug: string) => COUNTRIES.find((c) => c.slug === slug);
