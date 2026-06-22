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
    visa: 'Exención para turismo (confirma el plazo)',
    internet: 'Excelente · eSIM recomendada',
    difficultyNote: 'Muy fácil para empezar en Asia: turística, barata y con todo a mano. El idioma se salva con apps de traducción y una sonrisa.',
    english: 'Se maneja en zonas turísticas; en pueblos menos. Con señas y simpatía te apañas en todas partes.',
    budgetLevels: { mochilero: 30, normal: 55, comodo: 110, lujo: 250 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'mid' },
      { m: 'May', r: 'avoid' }, { m: 'Jun', r: 'avoid' }, { m: 'Jul', r: 'avoid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'avoid' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'Bangkok', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/0005574_-_Wat_Phra_Kaew_006.jpg/500px-0005574_-_Wat_Phra_Kaew_006.jpg',
        fact: 'Su nombre ceremonial completo es el más largo del mundo para una ciudad: tiene 168 letras.',
        sights: [
          { name: 'Gran Palacio y Wat Phra Kaew', note: 'Ve temprano y con hombros y rodillas cubiertos' },
          { name: 'Wat Arun (templo del amanecer)' },
          { name: 'Wat Pho (Buda reclinado)' },
          { name: 'Mercado de fin de semana de Chatuchak' },
          { name: 'Cenar comida callejera en Chinatown' },
        ],
      },
      {
        name: 'Chiang Mai', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Wat_Phra_That_Doi_Suthep_-_Chiang_Mai.jpg/500px-Wat_Phra_That_Doi_Suthep_-_Chiang_Mai.jpg',
        fact: 'La "rosa del norte" tiene más de 300 templos y es el corazón cultural de Tailandia.',
        sights: [
          { name: 'Templo Doi Suthep', note: 'Vistas de toda la ciudad' },
          { name: 'Santuario ético de elefantes', note: 'Elige uno sin montar a lomos del animal', url: 'https://www.klook.com/es/search/?query=elefantes%20Chiang%20Mai' },
          { name: 'Templos del casco antiguo' },
          { name: 'Mercado nocturno del domingo' },
          { name: 'Clase de cocina tailandesa' },
        ],
      },
      {
        name: 'Krabi e islas', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Railay_Beach_5.jpg/500px-Railay_Beach_5.jpg',
        fact: 'Railay solo es accecible en barca: sus acantilados la separan del resto del continente.',
        sights: [
          { name: 'Playa de Railay' },
          { name: 'Islas Phi Phi', url: 'https://www.klook.com/es/search/?query=Phi%20Phi%20Krabi' },
          { name: 'Snorkel en aguas turquesa' },
          { name: 'Kayak entre acantilados de roca caliza' },
        ],
      },
    ],
    links: [
      { label: 'Turismo oficial de Tailandia', url: 'https://www.tourismthailand.org/' },
      { label: 'Embajada de España en Tailandia', url: 'https://www.exteriores.gob.es/Embajadas/bangkok' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    visa: 'No requerido (DNI, zona Schengen)',
    internet: 'Excelente · roaming UE sin coste extra',
    difficultyNote: 'De los destinos más fáciles: zona euro, trenes rápidos y todo muy preparado para el turista. Cero complicaciones.',
    english: 'Se maneja en zonas turísticas; en pueblos menos. Cuatro palabras en italiano (grazie, buongiorno) abren muchas puertas.',
    budgetLevels: { mochilero: 60, normal: 110, comodo: 190, lujo: 350 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Roma', days: '3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/500px-Trevi_Fountain_-_Roma.jpg',
        fact: 'Tiene casi 3.000 años de historia y más de 2.000 fuentes repartidas por la ciudad.',
        sights: [
          { name: 'Coliseo y Foro Romano', note: 'Reserva online y ve a primera hora' },
          { name: 'Vaticano y Capilla Sixtina', url: 'https://www.klook.com/es/search/?query=Vaticano%20Roma' },
          { name: 'Fontana di Trevi', note: 'Tira una moneda de espaldas' },
          { name: 'Panteón de Agripa' },
          { name: 'Cenar en el Trastevere' },
        ],
      },
      {
        name: 'Florencia', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/500px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg',
        fact: 'Es la cuna del Renacimiento; aquí trabajaron Miguel Ángel, Leonardo y Botticelli.',
        sights: [
          { name: 'Duomo y subir a la cúpula', note: 'Reserva la subida con antelación' },
          { name: 'Galería Uffizi', url: 'https://www.klook.com/es/search/?query=Uffizi%20Florencia' },
          { name: 'El David de Miguel Ángel (Academia)' },
          { name: 'Ponte Vecchio' },
          { name: 'Atardecer en Piazzale Michelangelo', note: 'Las mejores vistas de la ciudad' },
        ],
      },
      {
        name: 'Venecia', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Venezia_aerial_view.jpg/500px-Venezia_aerial_view.jpg',
        fact: 'Son 118 islas unidas por 400 puentes, y no hay ni un solo coche en toda la ciudad.',
        sights: [
          { name: 'Plaza y Basílica de San Marcos' },
          { name: 'Paseo en vaporetto por el Gran Canal', note: 'Más barato que la góndola y con las mismas vistas' },
          { name: 'Puente de Rialto' },
          { name: 'Perderse por callejones sin mapa' },
          { name: 'Isla de Burano (casas de colores)' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Italia', url: 'https://www.italia.it/es' },
      { label: 'Embajada de España en Italia', url: 'https://www.exteriores.gob.es/Embajadas/roma' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    opinion:
      'Islandia no parece de este planeta. Cascadas que rugen, géiseres que escupen agua hirviendo, playas negras y, si hay suerte, auroras bailando en el cielo. Mi consejo: alquila un coche y hazte al menos la Costa Sur a tu ritmo, parando donde te apetezca (que será cada cinco minutos). Y no te obsesiones con verlo todo: aquí el viaje es el paisaje. Eso sí, ve con presupuesto holgado, porque cara, lo es; pero merece cada euro.',
    faq: [
      { q: '¿Verano o invierno?', a: 'Verano (junio-agosto) para recorrer la isla con luz casi infinita y todas las carreteras abiertas. Invierno (octubre-marzo) para cazar auroras boreales.' },
      { q: '¿Cuántos días necesito?', a: 'Con 5-6 días haces Reikiavik, el Círculo Dorado y la Costa Sur. Para la vuelta completa a la isla, 8-10.' },
      { q: '¿Hace falta visado?', a: 'No: Islandia está en Schengen, con el DNI español en vigor basta.' },
    ],
    paperwork: ['DNI o pasaporte en vigor (Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI, Schengen)',
    internet: 'Excelente · roaming UE (Islandia incluida)',
    difficultyNote: 'Fácil de recorrer en coche, pero el clima manda y cambia en minutos. Revisa el parte y conduce con prudencia.',
    english: 'Todo el mundo habla un inglés perfecto. Cero barrera idiomática.',
    budgetLevels: { mochilero: 90, normal: 160, comodo: 260, lujo: 450 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'mid' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Reikiavik', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Hallgrimskirkja_mai_2026.jpg/500px-Hallgrimskirkja_mai_2026.jpg',
        fact: 'Es la capital más al norte del mundo y se calienta entera con energía geotérmica.',
        sights: [
          { name: 'Iglesia Hallgrímskirkja y sus vistas' },
          { name: 'Sala de conciertos Harpa y puerto viejo' },
          { name: 'Excursión a avistar ballenas' },
          { name: 'Laguna Azul (de camino al aeropuerto)', url: 'https://www.klook.com/es/search/?query=Blue%20Lagoon%20Iceland' },
        ],
      },
      {
        name: 'Círculo Dorado', days: '1 día',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Erupting_geysir.jpg/500px-Erupting_geysir.jpg',
        fact: 'En el parque Þingvellir caminas literalmente entre las placas tectónicas de Europa y América.',
        sights: [
          { name: 'Parque Nacional de Þingvellir' },
          { name: 'Géiser Strokkur', note: 'Erupciona cada pocos minutos' },
          { name: 'Cascada de Gullfoss' },
        ],
      },
      {
        name: 'Costa Sur', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Reynisfjara_Beach_Looking_West_Towards_Dyrh%C3%B3laey.jpg/500px-Reynisfjara_Beach_Looking_West_Towards_Dyrh%C3%B3laey.jpg',
        fact: 'La playa negra de Reynisfjara tiene columnas de basalto y olas peligrosas: no te acerques al agua.',
        sights: [
          { name: 'Cascadas Seljalandsfoss y Skógafoss' },
          { name: 'Playa negra de Reynisfjara' },
          { name: 'Pueblo de Vík' },
        ],
      },
      {
        name: 'Glaciares', days: '1 día',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/J%C3%B6kuls%C3%A1rl%C3%B3n_lagoon_in_southeastern_Iceland.jpg/500px-J%C3%B6kuls%C3%A1rl%C3%B3n_lagoon_in_southeastern_Iceland.jpg',
        fact: 'En la laguna de Jökulsárlón flotan icebergs que se desprenden del mayor glaciar de Europa.',
        sights: [
          { name: 'Laguna glaciar de Jökulsárlón' },
          { name: 'Playa de los Diamantes' },
          { name: 'Cuevas de hielo (solo invierno)' },
          { name: 'Parque Nacional de Vatnajökull' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Islandia', url: 'https://www.visiticeland.com/' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    difficulty: 'Media', duration: '12-16 días',
    opinion:
      'México es muchísimo más que sus playas (que son una pasada). Es color por todas partes, pirámides milenarias, una comida que te cambia la vida y una gente con un corazón enorme. Mi consejo: no te quedes solo en la Riviera Maya. Date una vuelta por Ciudad de México, métete en Oaxaca a comer mole y mezcal, y báñate en un cenote, que no hay nada igual. Eso sí, ve con sentido común y disfruta: México se vive con todos los sentidos.',
    faq: [
      { q: '¿Cuántos días para México?', a: 'Es enorme. Con 12-15 días combinas Ciudad de México, alguna zona colonial (Oaxaca) y el Caribe (Yucatán/Riviera Maya). Para solo playa, una semana basta.' },
      { q: '¿Cuándo es mejor ir?', a: 'De noviembre a abril (estación seca): mejor clima y sin huracanes. Evita septiembre-octubre en el Caribe por la temporada de huracanes.' },
      { q: '¿Hace falta visado?', a: 'No para turismo: los españoles pueden estar hasta 180 días. Rellenas un formulario migratorio a la llegada.' },
    ],
    paperwork: ['Pasaporte con validez para toda la estancia', 'Sin visado para turismo (hasta 180 días)', 'Formulario migratorio (FMM) a la entrada', 'Seguro de viaje muy recomendable'],
    visa: 'No requerido hasta 180 días (turismo)',
    internet: 'Bueno en ciudades · eSIM recomendada',
    difficultyNote: 'Fácil en zonas turísticas y se habla español. En general, sentido común con la seguridad y a disfrutar.',
    english: 'No lo necesitas: se habla español. En la Riviera Maya también mucho inglés.',
    budgetLevels: { mochilero: 35, normal: 70, comodo: 140, lujo: 280 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'mid' }, { m: 'Jun', r: 'avoid' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'avoid' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'Ciudad de México', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bellas_Artes_01.jpg/500px-Bellas_Artes_01.jpg',
        fact: 'Está construida sobre un lago: por eso se hunde unos 30 cm al año.',
        sights: [
          { name: 'Zócalo y Catedral Metropolitana' },
          { name: 'Palacio de Bellas Artes' },
          { name: 'Pirámides de Teotihuacán', note: 'Excursión de medio día', url: 'https://www.klook.com/es/search/?query=Teotihuacan' },
          { name: 'Casa de Frida Kahlo en Coyoacán' },
          { name: 'Trajinera por Xochimilco' },
        ],
      },
      {
        name: 'Riviera Maya', days: '4-5 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tulum_2.jpg/500px-Tulum_2.jpg',
        fact: 'Tulum es la única ciudad maya construida junto al mar, sobre un acantilado.',
        sights: [
          { name: 'Ruinas de Tulum frente al Caribe' },
          { name: 'Playas de Playa del Carmen' },
          { name: 'Bucear en cenotes' },
          { name: 'Snorkel en arrecifes de Cozumel' },
          { name: 'Isla Mujeres' },
        ],
      },
      {
        name: 'Oaxaca', days: '3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Monte_Alban_West_Side_Platform.jpg/500px-Monte_Alban_West_Side_Platform.jpg',
        fact: 'Es la capital gastronómica de México: cuna del mole, el mezcal y siete tipos de salsa.',
        sights: [
          { name: 'Ruinas de Monte Albán' },
          { name: 'Centro histórico colonial' },
          { name: 'Hierve el Agua (cascadas petrificadas)' },
          { name: 'Cata de mezcal y mole' },
          { name: 'Día de Muertos (1-2 nov)' },
        ],
      },
      {
        name: 'Yucatán', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Cenote_2.jpg/500px-Cenote_2.jpg',
        fact: 'Bajo la selva hay miles de cenotes: pozos de agua dulce que los mayas creían sagrados.',
        sights: [
          { name: 'Chichén Itzá', note: 'Una de las 7 maravillas del mundo' },
          { name: 'Baño en cenotes sagrados' },
          { name: 'Mérida colonial' },
          { name: 'Valladolid y pueblos mágicos' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de México', url: 'https://www.visitmexico.com/' },
      { label: 'Embajada de España en México', url: 'https://www.exteriores.gob.es/Embajadas/mexico' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    opinion:
      'Francia es mucho más que París (aunque París bien merece el viaje). Mi consejo: dale un par de días a la capital y luego escápate. La Provenza con sus campos de lavanda y sus pueblos de piedra es de otro planeta, y la Costa Azul tiene ese punto de glamour que engancha. Eso sí: aprende a decir "bonjour" antes de pedir nada, marca la diferencia. Y déjate caer en cualquier panadería de barrio: ahí está la mejor Francia.',
    faq: [
      { q: '¿Cuántos días para Francia?', a: 'París pide 3-4 días. Si sumas Provenza o la Costa Azul, mejor 8-10. El TGV hace que moverse sea rapidísimo.' },
      { q: '¿Hace falta visado?', a: 'No: con el DNI español en vigor basta para entrar (zona Schengen).' },
      { q: '¿Cuándo ver la lavanda?', a: 'Los campos de Provenza florecen de finales de junio a mediados de julio. Es la mejor época para esa estampa.' },
    ],
    paperwork: ['DNI o pasaporte en vigor (zona Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI, zona Schengen)',
    internet: 'Excelente · roaming UE sin coste extra',
    difficultyNote: 'Muy fácil: zona euro, TGV rapidísimo y todo preparado para el turista. Solo el idioma te recuerda que estás fuera.',
    english: 'En París se maneja; fuera de las grandes ciudades, menos. Un "bonjour" y un "merci" antes de hablar abren todas las puertas.',
    budgetLevels: { mochilero: 65, normal: 120, comodo: 200, lujo: 380 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'mid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'París', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/500px-Louvre_Museum_Wikimedia_Commons.jpg',
        fact: 'El Louvre es el museo más visitado del mundo: verlo entero entero llevaría unos 200 días.',
        sights: [
          { name: 'Torre Eiffel', note: 'De noche brilla cada hora durante 5 minutos' },
          { name: 'Museo del Louvre', url: 'https://www.klook.com/es/search/?query=Louvre%20Paris' },
          { name: 'Notre-Dame y el Barrio Latino' },
          { name: 'Montmartre y el Sacré-Cœur' },
          { name: 'Crucero por el Sena al atardecer' },
        ],
      },
      {
        name: 'Provenza', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/1_gordes_pano_2016.jpg/500px-1_gordes_pano_2016.jpg',
        fact: 'Sus campos de lavanda inspiraron a Van Gogh, que pintó aquí más de 300 cuadros.',
        sights: [
          { name: 'Campos de lavanda de Valensole', note: 'Florecen de finales de junio a julio' },
          { name: 'Pueblos colgados: Gordes y Roussillon' },
          { name: 'Aviñón y el Palacio de los Papas' },
          { name: 'Mercados provenzales (los sábados)' },
        ],
      },
      {
        name: 'Costa Azul', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Promenade_des_Anglais_Nice_IMG_1255.jpg/500px-Promenade_des_Anglais_Nice_IMG_1255.jpg',
        fact: 'En Mónaco hay un millonario por cada tres habitantes: es el país más rico del mundo per cápita.',
        sights: [
          { name: 'Paseo de los Ingleses en Niza' },
          { name: 'Mónaco y Montecarlo' },
          { name: 'Pueblo medieval de Èze, sobre el mar' },
          { name: 'Calas y playas de la Riviera' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Francia', url: 'https://es.france.fr/es' },
      { label: 'Embajada de España en Francia', url: 'https://www.exteriores.gob.es/Embajadas/paris' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    opinion:
      'Lo de España es trampa: tenemos de todo y a tiro de piedra. Playa, montaña, ciudades con siglos de historia, la mejor comida del mundo (sí, lo he dicho) y un ambiente en la calle que no se ve en otro sitio. Mi consejo si la redescubres: no te quedes solo en lo típico. Un pueblo blanco de Andalucía, una sidrería en el norte o un atardecer en Canarias valen tanto como el monumento más famoso. Y come y cena tarde, que aquí se vive así.',
    faq: [
      { q: '¿Cuántos días para ver España?', a: 'Imposible en un viaje: es enorme y variada. Elige una zona (norte, sur, Levante, Canarias) y dedícale 7-10 días con calma.' },
      { q: '¿Cuándo es mejor ir?', a: 'Primavera (mayo-junio) y principios de otoño (septiembre): buen clima sin el calor sofocante del verano interior. Canarias, todo el año.' },
      { q: '¿Hace falta algo para entrar?', a: 'Para españoles, nada: es tu país. Para europeos, DNI o pasaporte (zona Schengen).' },
    ],
    paperwork: ['DNI o pasaporte en vigor', 'Sin visado ni controles (zona Schengen)', 'Tarjeta sanitaria para la sanidad pública', 'Sin vacunas obligatorias'],
    visa: 'No requerido (zona Schengen)',
    internet: 'Excelente · tu tarifa nacional, sin roaming',
    difficultyNote: 'Facilísimo: buena infraestructura, AVE entre ciudades y todo muy accesible. Si es tu país, ni te cuento.',
    english: 'En zonas turísticas se maneja; en general, con el español vas sobrado.',
    budgetLevels: { mochilero: 45, normal: 90, comodo: 160, lujo: 300 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'mid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Madrid', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/500px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg',
        fact: 'Tiene más bares por habitante que casi cualquier ciudad del mundo. El tapeo es deporte nacional.',
        sights: [
          { name: 'Museo del Prado', note: 'Entrada gratis las últimas 2 horas' },
          { name: 'Palacio Real' },
          { name: 'Parque del Retiro' },
          { name: 'Gran Vía y Puerta del Sol' },
          { name: 'Tapeo por La Latina (los domingos, El Rastro)' },
        ],
      },
      {
        name: 'Barcelona', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg/500px-Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_edited.jpg',
        fact: 'La Sagrada Familia lleva en obras desde 1882 y aún no está terminada.',
        sights: [
          { name: 'Sagrada Familia', note: 'Reserva online sí o sí', url: 'https://www.klook.com/es/search/?query=Sagrada%20Familia' },
          { name: 'Park Güell' },
          { name: 'Barrio Gótico y Las Ramblas' },
          { name: 'Casa Batlló y La Pedrera' },
          { name: 'Playa de la Barceloneta' },
        ],
      },
      {
        name: 'Sevilla', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sevilla_Cathedral_-_Southeast.jpg/500px-Sevilla_Cathedral_-_Southeast.jpg',
        fact: 'Su catedral es la gótica más grande del mundo y guarda la tumba de Cristóbal Colón.',
        sights: [
          { name: 'Catedral y Giralda' },
          { name: 'Real Alcázar', note: 'Escenario de Juego de Tronos' },
          { name: 'Plaza de España' },
          { name: 'Barrio de Santa Cruz' },
          { name: 'Flamenco en Triana' },
        ],
      },
      {
        name: 'Islas Canarias', days: '5-7 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Roque_Cinchado_und_Teide.jpg/500px-Roque_Cinchado_und_Teide.jpg',
        fact: 'El Teide es el pico más alto de España (3.715 m) y el tercer volcán más grande del planeta desde su base.',
        sights: [
          { name: 'Parque Nacional del Teide' },
          { name: 'Playas de arena negra y dorada' },
          { name: 'Senderismo en Anaga o La Gomera' },
          { name: 'Avistamiento de cetáceos' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de España', url: 'https://www.spain.info/es/' },
      { label: 'Información para viajeros (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    difficulty: 'Fácil', duration: '8-12 días',
    opinion:
      'Grecia es historia y postal a partes iguales. Te paseas entre columnas de hace 2.500 años en Atenas y al día siguiente estás viendo el atardecer más famoso del mundo en Santorini. Mi consejo: no te quedes solo en las islas de Instagram. Atenas merece dos días, y Creta es casi un país en sí misma. Y come en las tabernas familiares, lejos del puerto: ahí está la Grecia de verdad, con su aceite, su feta y su sobremesa eterna.',
    faq: [
      { q: '¿Cuántos días para Grecia?', a: 'Con 8-10 días combinas Atenas y un par de islas (Santorini, Naxos o Creta). Saltar de isla en isla lleva su tiempo por los ferris.' },
      { q: '¿Cuándo es mejor ir?', a: 'Mayo-junio y septiembre: mar cálido, sol y mucha menos gente que en agosto, que está a reventar y carísimo.' },
      { q: '¿Hace falta visado?', a: 'No: con el DNI español en vigor basta (zona Schengen).' },
    ],
    paperwork: ['DNI o pasaporte en vigor (zona Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI, zona Schengen)',
    internet: 'Excelente · roaming UE sin coste extra',
    difficultyNote: 'Fácil: zona euro y muy turística. Lo único que requiere organización son los ferris entre islas.',
    english: 'Se maneja bien el inglés en zonas turísticas. El alfabeto griego despista, pero hay rótulos en latino.',
    budgetLevels: { mochilero: 50, normal: 95, comodo: 170, lujo: 320 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Atenas', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg/500px-1029_Acropolis_of_Athens_in_Greece_at_night_Photo_by_Giles_Laurent.jpg',
        fact: 'Es una de las ciudades habitadas más antiguas del mundo: más de 3.400 años de historia.',
        sights: [
          { name: 'Acrópolis y Partenón', note: 'Ve a primera hora, antes del calor y las masas' },
          { name: 'Museo de la Acrópolis' },
          { name: 'Barrio de Plaka' },
          { name: 'Ágora antigua' },
          { name: 'Atardecer en la colina Licabeto' },
        ],
      },
      {
        name: 'Santorini', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Santorini_Fira3_tango7174.jpg/500px-Santorini_Fira3_tango7174.jpg',
        fact: 'La isla es lo que queda de un volcán que explotó hace 3.600 años; su caldera es de las mayores del mundo.',
        sights: [
          { name: 'Atardecer en Oia', note: 'El más fotografiado del planeta; llega con tiempo' },
          { name: 'Pueblos blancos de Fira' },
          { name: 'Playas de arena negra y roja' },
          { name: 'Cata de vino en viñedos volcánicos' },
        ],
      },
      {
        name: 'Creta', days: '4-5 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/%CE%95%CE%BB%CE%B1%CF%86%CE%BF%CE%BD%CE%AE%CF%83%CE%B9_1287.jpg/500px-%CE%95%CE%BB%CE%B1%CF%86%CE%BF%CE%BD%CE%AE%CF%83%CE%B9_1287.jpg',
        fact: 'Aquí nació la civilización minoica, la más antigua de Europa, hace más de 4.000 años.',
        sights: [
          { name: 'Palacio de Knossos' },
          { name: 'Playa rosa de Elafonissi' },
          { name: 'Garganta de Samaria (senderismo)' },
          { name: 'Casco viejo veneciano de Chania' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Grecia', url: 'https://www.visitgreece.gr/' },
      { label: 'Embajada de España en Grecia', url: 'https://www.exteriores.gob.es/Embajadas/atenas' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    opinion:
      'Perú te da uno de esos viajes que recuerdas toda la vida. Machu Picchu impresiona, claro, pero el país es mucho más: los Andes, el lago Titicaca, la Amazonía y una gastronomía que está considerada de las mejores del mundo (el ceviche y el lomo saltado, palabras mayores). Mi consejo: tómate la altura en serio, llega a Cusco y descansa un par de días antes de subir. Y no te vayas sin probar lo que se cocina en Lima: ahí entiendes por qué Perú está en boca de todos.',
    faq: [
      { q: '¿Cuántos días para Perú?', a: 'Con 12-14 días ves Lima, Cusco y Machu Picchu, el Valle Sagrado y Arequipa o Titicaca. Si sumas Amazonía, mejor 16-18.' },
      { q: '¿Cuándo ir a Machu Picchu?', a: 'Estación seca, de mayo a septiembre: cielos despejados e ideal para el Camino Inca (que cierra en febrero).' },
      { q: '¿Cómo llevo la altura?', a: 'Cusco está a 3.400 m. Aclimátate uno o dos días, bebe mate de coca, camina despacio y bebe mucha agua. Mejora rápido.' },
    ],
    paperwork: ['Pasaporte con validez para toda la estancia', 'Sin visado para turismo', 'Vacuna de la fiebre amarilla recomendada si vas a la Amazonía', 'Seguro de viaje muy recomendable'],
    visa: 'No requerido para turismo',
    internet: 'Bueno en ciudades · eSIM recomendada',
    difficultyNote: 'Media: la altura de Cusco y Titicaca pasa factura los primeros días. Aclimátate con calma; el resto es fácil y se habla español.',
    english: 'Se habla español; algo de inglés en zonas turísticas. No lo necesitas.',
    budgetLevels: { mochilero: 35, normal: 70, comodo: 140, lujo: 280 },
    climate: [
      { m: 'Ene', r: 'avoid' }, { m: 'Feb', r: 'avoid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Cusco y Machu Picchu', days: '4-5 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Vista_Calle_Suecia.jpg/500px-Vista_Calle_Suecia.jpg',
        fact: 'Cusco fue la capital del Imperio inca y su nombre significa "ombligo del mundo".',
        sights: [
          { name: 'Machu Picchu', note: 'Reserva entrada y tren con meses de antelación', url: 'https://www.klook.com/es/search/?query=Machu%20Picchu' },
          { name: 'Valle Sagrado (Pisac y Ollantaytambo)' },
          { name: 'Plaza de Armas y barrio de San Blas' },
          { name: 'Fortaleza de Sacsayhuamán' },
          { name: 'Montaña de 7 Colores (Vinicunca)' },
        ],
      },
      {
        name: 'Lima', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Bas%C3%ADlica_Catedral_Metropolitana_de_Lima_%28cropped%29.jpg/500px-Bas%C3%ADlica_Catedral_Metropolitana_de_Lima_%28cropped%29.jpg',
        fact: 'Tiene dos de los 50 mejores restaurantes del mundo: es la capital gastronómica de América.',
        sights: [
          { name: 'Centro histórico colonial' },
          { name: 'Miraflores y Barranco frente al mar' },
          { name: 'Comer el mejor ceviche de tu vida' },
          { name: 'Huaca Pucllana' },
          { name: 'Circuito Mágico del Agua' },
        ],
      },
      {
        name: 'Arequipa', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Plaza_de_Armas%2C_Arequipa_2006.jpg/500px-Plaza_de_Armas%2C_Arequipa_2006.jpg',
        fact: 'La "ciudad blanca" está construida con sillar, una piedra volcánica blanca, y la rodean tres volcanes.',
        sights: [
          { name: 'Monasterio de Santa Catalina' },
          { name: 'Plaza de Armas y catedral' },
          { name: 'Cañón del Colca (vuelo de cóndores)' },
          { name: 'Vistas al volcán Misti' },
        ],
      },
      {
        name: 'Lago Titicaca', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Indigenous_woman_of_Peru_showing_her_traditional_textiles.png/500px-Indigenous_woman_of_Peru_showing_her_traditional_textiles.png',
        fact: 'Es el lago navegable más alto del mundo (3.812 m) y sobre él flotan islas hechas de totora.',
        sights: [
          { name: 'Islas flotantes de los Uros' },
          { name: 'Isla Taquile y sus textiles' },
          { name: 'Amanecer sobre el lago' },
          { name: 'Comunidades aimaras y quechuas' },
        ],
      },
      {
        name: 'Amazonía', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Amazon17_%285641020319%29.jpg/500px-Amazon17_%285641020319%29.jpg',
        fact: 'La selva peruana alberga más especies de aves que toda Europa y Norteamérica juntas.',
        sights: [
          { name: 'Lodge en la selva (Iquitos o Puerto Maldonado)' },
          { name: 'Avistar monos, caimanes y delfines rosados' },
          { name: 'Navegación nocturna por el río' },
          { name: 'Visita a comunidades nativas' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Perú', url: 'https://www.peru.travel/es' },
      { label: 'Embajada de España en Perú', url: 'https://www.exteriores.gob.es/Embajadas/lima' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    opinion:
      'Portugal es de esos sitios que te conquistan sin hacer ruido. Lisboa con sus tranvías y su luz, Oporto y su vino, y un Algarve que no tiene nada que envidiar al Caribe. Es el vecino que lo tiene todo y encima sale barato. Mi consejo: piérdete por los callejones de la Alfama escuchando fado, cómete todos los pastéis de nata que puedas y deja un par de días para el sur. Y la gente, encantadora; un "obrigado" con una sonrisa abre puertas.',
    faq: [
      { q: '¿Cuántos días para Portugal?', a: 'Con 6-8 días ves Lisboa, Sintra, Oporto y bajas al Algarve. Para una escapada corta, Lisboa + Sintra en 3-4 días.' },
      { q: '¿Cuándo ir al Algarve?', a: 'De mayo a septiembre para playa. Junio y septiembre son el punto dulce: buen tiempo y menos lleno que agosto.' },
      { q: '¿Hace falta visado?', a: 'No: con el DNI español en vigor basta (zona Schengen).' },
    ],
    paperwork: ['DNI o pasaporte en vigor (zona Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI, zona Schengen)',
    internet: 'Excelente · roaming UE sin coste extra',
    difficultyNote: 'De los más fáciles y cercanos: zona euro, todo a mano y la gente muy amable. Cero complicaciones.',
    english: 'Se habla bastante inglés, sobre todo gente joven y en turismo. Con el español también te entienden mucho.',
    budgetLevels: { mochilero: 40, normal: 80, comodo: 150, lujo: 280 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'mid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Lisboa', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Lisbon_alfalma.jpg/500px-Lisbon_alfalma.jpg',
        fact: 'Es más antigua que Roma y una de las capitales más soleadas de Europa: casi 300 días de sol al año.',
        sights: [
          { name: 'Tranvía 28 por la Alfama' },
          { name: 'Torre de Belém y Monasterio de los Jerónimos' },
          { name: 'Castillo de San Jorge', note: 'Las mejores vistas de la ciudad' },
          { name: 'Fado en una taberna del Barrio Alto' },
          { name: 'Pastéis de Belém (los originales)' },
        ],
      },
      {
        name: 'Oporto', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG/500px-Puente_Don_Luis_I%2C_Oporto%2C_Portugal%2C_2012-05-09%2C_DD_13.JPG',
        fact: 'El vino de Oporto se cría aquí, en las bodegas de la otra orilla del Duero.',
        sights: [
          { name: 'Puente Don Luís I' },
          { name: 'Barrio de la Ribeira a orillas del Duero' },
          { name: 'Cata en las bodegas de Vila Nova de Gaia' },
          { name: 'Librería Lello', note: 'Inspiró a J.K. Rowling; reserva entrada' },
        ],
      },
      {
        name: 'Algarve', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Praia_de_Benagil_-_Portugal_%F0%9F%87%B5%F0%9F%87%B9_%2853651979938%29.jpg/500px-Praia_de_Benagil_-_Portugal_%F0%9F%87%B5%F0%9F%87%B9_%2853651979938%29.jpg',
        fact: 'La cueva de Benagil, con su agujero en el techo, solo se puede visitar por mar.',
        sights: [
          { name: 'Cueva de Benagil', note: 'En kayak o barco al amanecer' },
          { name: 'Praia da Marinha' },
          { name: 'Acantilados de Lagos (Ponta da Piedade)' },
          { name: 'Pueblos pesqueros como Tavira' },
        ],
      },
      {
        name: 'Sintra', days: '1 día',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg/500px-Sintra_Portugal_Pal%C3%A1cio_da_Pena-01.jpg',
        fact: 'Sus palacios de cuento la hicieron Patrimonio de la Humanidad; parece sacada de un cuadro.',
        sights: [
          { name: 'Palacio da Pena (el de colores)' },
          { name: 'Quinta da Regaleira y su pozo iniciático' },
          { name: 'Castelo dos Mouros' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Portugal', url: 'https://www.visitportugal.com/es' },
      { label: 'Embajada de España en Portugal', url: 'https://www.exteriores.gob.es/Embajadas/lisboa' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    opinion:
      'Marruecos es un golpe a los sentidos en el buen sentido: colores, olores a especias, el ajetreo de los zocos y un desierto que te deja sin palabras. Está a un paso de España pero parece otro mundo. Mi consejo: el regateo es un juego, tómatelo con humor y una sonrisa. Y haz lo que sea por dormir una noche en el desierto: cenar bajo un cielo lleno de estrellas en mitad del Sáhara es de esas cosas que no se olvidan. Eso sí, ve con la mente abierta.',
    faq: [
      { q: '¿Cuántos días para Marruecos?', a: 'Con 8-10 días haces Marrakech, Fez, el desierto y algún pueblo azul como Chefchauen. Para solo Marrakech y desierto, 5-6 bastan.' },
      { q: '¿Cuándo es mejor ir?', a: 'Primavera (marzo-mayo) y otoño (septiembre-noviembre): clima ideal. Evita julio y agosto, el interior y el desierto son un horno.' },
      { q: '¿Hace falta visado?', a: 'No para turismo: los españoles pueden estar hasta 90 días solo con el pasaporte.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Sin visado para turismo (hasta 90 días)', 'Seguro de viaje recomendable', 'Sin vacunas obligatorias'],
    visa: 'No requerido hasta 90 días (turismo)',
    internet: 'Bueno en ciudades · eSIM recomendada',
    difficultyNote: 'Media: el regateo y el ajetreo de los zocos abruman al principio. Con paciencia y simpatía, acabas enamorado.',
    english: 'Se habla árabe y francés; en turismo, algo de inglés y español. Saber algo de francés ayuda mucho.',
    budgetLevels: { mochilero: 30, normal: 55, comodo: 110, lujo: 230 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'avoid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Marrakech', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Djemaa_el_Fna.jpg/500px-Djemaa_el_Fna.jpg',
        fact: 'Su plaza Jemaa el-Fna es Patrimonio de la Humanidad por su tradición oral: cuentacuentos, músicos y encantadores de serpientes.',
        sights: [
          { name: 'Plaza Jemaa el-Fna al anochecer' },
          { name: 'Perderse por los zocos de la medina' },
          { name: 'Jardín Majorelle (el de Yves Saint Laurent)' },
          { name: 'Palacio Bahía' },
          { name: 'Mezquita Koutoubia' },
        ],
      },
      {
        name: 'Fez', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Chouara_Tannery_-_154_-_Marokko_Handybilder_2018_-_Fes_%2827347707917%29.jpg/500px-Chouara_Tannery_-_154_-_Marokko_Handybilder_2018_-_Fes_%2827347707917%29.jpg',
        fact: 'Su medina tiene unos 9.000 callejones y es la zona peatonal urbana más grande del mundo.',
        sights: [
          { name: 'Curtidurías Chouara', note: 'Te dan menta para el olor' },
          { name: 'Medina de Fes el-Bali (sin coches)' },
          { name: 'Universidad Al Qarawiyyin', note: 'La más antigua del mundo aún en activo' },
          { name: 'Puertas y medersas decoradas' },
        ],
      },
      {
        name: 'Desierto del Sáhara', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Merzouga_Dunes_2011.jpg/500px-Merzouga_Dunes_2011.jpg',
        fact: 'Las dunas de Erg Chebbi alcanzan los 150 metros de altura, como un edificio de 50 pisos.',
        sights: [
          { name: 'Dunas de Erg Chebbi (Merzouga)' },
          { name: 'Noche en jaima bajo las estrellas' },
          { name: 'Paseo en camello al atardecer' },
          { name: 'Amanecer sobre las dunas' },
        ],
      },
      {
        name: 'Esauira', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Morocco_-_Essaouira_Part_2_%2831679848385%29.jpg/500px-Morocco_-_Essaouira_Part_2_%2831679848385%29.jpg',
        fact: 'La llaman "la ciudad del viento": es la meca del kitesurf en Marruecos.',
        sights: [
          { name: 'Medina amurallada frente al mar' },
          { name: 'Puerto de pescadores azul' },
          { name: 'Playa para kitesurf y windsurf' },
          { name: 'Ambiente bohemio y relajado' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Marruecos', url: 'https://www.visitmorocco.com/es' },
      { label: 'Embajada de España en Marruecos', url: 'https://www.exteriores.gob.es/Embajadas/rabat' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    opinion:
      'Croacia se ha puesto de moda y con razón: tiene un Adriático de un azul que no parece real, ciudades amuralladas de piedra y unos parques naturales de cuento. Mi consejo: combina ciudad e islas. Dubrovnik impresiona (sí, la de Juego de Tronos), pero las islas como Hvar son donde de verdad desconectas. Y madruga para Plitvice: llegar antes que los autobuses de turistas marca la diferencia. Eso sí, evita agosto si puedes, que se llena y se dispara de precio.',
    faq: [
      { q: '¿Cuántos días para Croacia?', a: 'Con 7-10 días ves Dubrovnik, Split, los lagos de Plitvice y una o dos islas. La costa es larga, así que elige bien.' },
      { q: '¿Cuándo es mejor ir?', a: 'Mayo-junio y septiembre: mar cálido, sol y mucha menos gente que en agosto, que está abarrotado.' },
      { q: '¿Hace falta visado?', a: 'No: Croacia está en la zona Schengen y euro, con el DNI español basta.' },
    ],
    paperwork: ['DNI o pasaporte en vigor (zona Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI, zona Schengen)',
    internet: 'Excelente · roaming UE sin coste extra',
    difficultyNote: 'Fácil: zona euro, seguro y muy turístico. Solo organizar los ferris entre islas pide algo de planificación.',
    english: 'Se habla bastante inglés en la costa y zonas turísticas. Sin barrera.',
    budgetLevels: { mochilero: 50, normal: 95, comodo: 170, lujo: 320 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Dubrovnik', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg/500px-The_walls_of_the_fortress_and_View_of_the_old_city._panorama.jpg',
        fact: 'Fue Desembarco del Rey en Juego de Tronos; sus murallas rodean entera la ciudad vieja.',
        sights: [
          { name: 'Paseo completo por las murallas', note: 'Al amanecer, sin masas ni calor' },
          { name: 'Casco antiguo de mármol pulido' },
          { name: 'Teleférico al monte Srd' },
          { name: 'Ruta de escenarios de Juego de Tronos' },
          { name: 'Kayak alrededor de las murallas' },
        ],
      },
      {
        name: 'Split', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Croatia-01239_-_The_Peristil_%289551533404%29.jpg/500px-Croatia-01239_-_The_Peristil_%289551533404%29.jpg',
        fact: 'Su casco antiguo es un palacio romano de 1.700 años: la gente vive y abre bares dentro de él.',
        sights: [
          { name: 'Palacio de Diocleciano' },
          { name: 'Paseo marítimo de la Riva' },
          { name: 'Catedral de San Domnio' },
          { name: 'Base para saltar a las islas' },
        ],
      },
      {
        name: 'Lagos de Plitvice', days: '1 día',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/View_in_Plitvice_Lakes_National_Park.jpg/500px-View_in_Plitvice_Lakes_National_Park.jpg',
        fact: 'Son 16 lagos turquesa en cascada conectados por pasarelas de madera sobre el agua.',
        sights: [
          { name: 'Pasarelas sobre los lagos turquesa' },
          { name: 'Gran cascada de Veliki Slap' },
          { name: 'Bosque y fauna del parque' },
          { name: 'Ir a primera hora de la mañana' },
        ],
      },
      {
        name: 'Hvar', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/View_of_Hvar_02.jpg/500px-View_of_Hvar_02.jpg',
        fact: 'Es una de las islas más soleadas de Europa y huele a lavanda por todas partes.',
        sights: [
          { name: 'Casco antiguo y fortaleza Španjola' },
          { name: 'Calas y playas de aguas claras' },
          { name: 'Islas Pakleni en barca' },
          { name: 'Campos de lavanda' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Croacia', url: 'https://croatia.hr/es-es' },
      { label: 'Embajada de España en Croacia', url: 'https://www.exteriores.gob.es/Embajadas/zagreb' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
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
    opinion:
      'Vietnam es una pasada y, encima, baratísimo. Es de esos sitios donde con poco dinero vives muchísimo: comes como un rey en la calle, navegas entre islotes en Ha Long y paseas bajo mil farolillos en Hoi An. Mi consejo: ten claro que el país es muy largo, así que o eliges norte o sur, o reservas dos semanas largas. Y lánzate a la comida callejera sin miedo, que ahí está lo mejor. Lo único que cuesta pillar es cruzar la calle entre tanta moto: respira, camina firme y no pares.',
    faq: [
      { q: '¿Cuántos días para Vietnam?', a: 'El país es largo. Para verlo de norte a sur (Hanói, Ha Long, Hoi An, Saigón), calcula 14-18 días. Para solo el norte o el sur, una semana.' },
      { q: '¿Cuándo es mejor ir?', a: 'Marzo-abril y octubre-noviembre son lo más equilibrado para todo el país. El clima varía mucho entre norte y sur.' },
      { q: '¿Hace falta visado?', a: 'Depende de la estancia: hay exención corta para españoles o e-visa online. Confírmalo antes de viajar, que cambia.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Exención corta o e-visa según la estancia (confírmalo)', 'Seguro de viaje muy recomendable', 'Vacunas recomendadas según zona (consulta)'],
    visa: 'Exención corta o e-visa (confírmalo)',
    internet: 'Bueno · eSIM recomendada',
    difficultyNote: 'Media: barato y muy amable, pero el caos de las motos y las distancias norte-sur piden adaptarse. Una aventura asequible.',
    english: 'Algo de inglés en zonas turísticas; en pueblos, poco. Apps de traducción y una sonrisa hacen el resto.',
    budgetLevels: { mochilero: 25, normal: 50, comodo: 100, lujo: 220 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'mid' }, { m: 'Jun', r: 'avoid' }, { m: 'Jul', r: 'avoid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'mid' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Hanói', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Thap_Rua.jpg/500px-Thap_Rua.jpg',
        fact: 'Su casco antiguo tiene 36 calles, cada una dedicada históricamente a un gremio distinto.',
        sights: [
          { name: 'Casco antiguo y sus 36 calles gremiales' },
          { name: 'Lago Hoan Kiem y el templo de la Tortuga' },
          { name: 'Mausoleo de Ho Chi Minh' },
          { name: 'Teatro de marionetas de agua' },
          { name: 'Probar el pho y el café de huevo' },
        ],
      },
      {
        name: 'Bahía de Ha Long', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Ha_Long_Bay_in_2019.jpg/500px-Ha_Long_Bay_in_2019.jpg',
        fact: 'Son casi 2.000 islotes de roca caliza que emergen del mar; Patrimonio de la Humanidad.',
        sights: [
          { name: 'Crucero de 1-2 noches entre los islotes', url: 'https://www.klook.com/es/search/?query=Ha%20Long%20Bay' },
          { name: 'Kayak por aguas esmeralda' },
          { name: 'Cuevas y grutas escondidas' },
          { name: 'Amanecer desde la cubierta del barco' },
        ],
      },
      {
        name: 'Hoi An', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/10549-Hoi-An_%2837621348460%29.jpg/500px-10549-Hoi-An_%2837621348460%29.jpg',
        fact: 'La "ciudad de los farolillos" se ilumina cada noche con miles de lámparas de seda de colores.',
        sights: [
          { name: 'Casco antiguo iluminado por farolillos' },
          { name: 'Puente Japonés' },
          { name: 'Hacerte ropa a medida en 24 h' },
          { name: 'Soltar un farolillo en el río' },
          { name: 'Playa de An Bang' },
        ],
      },
      {
        name: 'Sapa', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Thacbac3.jpg/500px-Thacbac3.jpg',
        fact: 'Sus arrozales en terraza, esculpidos en la montaña hace siglos, parecen escaleras de gigantes.',
        sights: [
          { name: 'Arrozales en terraza' },
          { name: 'Trekking entre aldeas de etnias locales' },
          { name: 'Monte Fansipan, el techo de Indochina' },
          { name: 'Cascada de Plata (Thac Bac)' },
        ],
      },
      {
        name: 'Ho Chi Minh (Saigón)', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Ho_Chi_Minh_City_panorama_2019_%28cropped2%29.jpg/500px-Ho_Chi_Minh_City_panorama_2019_%28cropped2%29.jpg',
        fact: 'Bajo la ciudad hay 250 km de túneles de Cu Chi, usados durante la guerra de Vietnam.',
        sights: [
          { name: 'Túneles de Cu Chi' },
          { name: 'Museo de los Vestigios de la Guerra' },
          { name: 'Mercado de Ben Thanh' },
          { name: 'Correos central y Catedral de Notre-Dame' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Vietnam', url: 'https://vietnam.travel/' },
      { label: 'Embajada de España en Vietnam', url: 'https://www.exteriores.gob.es/Embajadas/hanoi' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'estados-unidos', name: 'Estados Unidos', code: 'us',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/1280px-Canyon_River_Tree_%28165872763%29.jpeg',
    imageAlt: 'Gran Cañón, Estados Unidos',
    capital: 'Washington D. C.', currency: 'Dólar (USD)', language: 'Inglés', plug: 'Tipo A/B (120 V)', tz: 'UTC-5 a -8',
    budget: 'Alto', bestMonths: 'Abril-Junio y Septiembre-Octubre',
    difficulty: 'Media', duration: '14-21 días',
    tags: ['Ciudades', 'Naturaleza', 'Road trip', 'Aventura', 'Familia'],
    summary: 'Rascacielos, parques nacionales de otro planeta, Hollywood y las luces de Las Vegas. Estados Unidos es tan enorme y variado que cada viaje es un país distinto: elige tu zona y déjate llevar.',
    opinion:
      'Estados Unidos engancha precisamente porque no es un solo país: Nueva York no tiene nada que ver con un parque de Utah ni con la playa de California. Mi consejo: no intentes "ver EEUU" en un viaje, es imposible. Elige un trozo —la costa este con sus ciudades, o un road trip por el oeste con sus parques— y vívelo a fondo. Y alquila coche para el oeste: la carretera, con esos paisajes, es media experiencia.',
    faq: [
      { q: '¿Cuántos días para Estados Unidos?', a: 'Es gigante. Para una zona (Costa Este, o un road trip por el Oeste) calcula 12-16 días. Verlo todo de una vez no tiene sentido.' },
      { q: '¿Necesito visado?', a: 'Para turismo no, pero sí una autorización ESTA online (de pago) que debes tramitar antes de viajar. Es obligatoria.' },
      { q: '¿Hace falta coche?', a: 'En las ciudades grandes no, pero para los parques nacionales del Oeste es imprescindible: las distancias son enormes.' },
    ],
    paperwork: ['Pasaporte en vigor', 'Autorización ESTA obligatoria (tramítala online antes)', 'Seguro de viaje muy recomendable (la sanidad es carísima)', 'Sin vacunas obligatorias'],
    visa: 'ESTA obligatoria (autorización online)',
    internet: 'Excelente · eSIM recomendada',
    difficultyNote: 'Fácil de moverse (todo en inglés y turístico), pero enorme: necesitas coche o vuelos internos y las distancias son largas.',
    english: 'Es el idioma del país; cero barrera si te manejas en inglés.',
    budgetLevels: { mochilero: 80, normal: 150, comodo: 260, lujo: 500 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'mid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Nueva York', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/500px-New_york_times_square-terabass.jpg',
        fact: 'En Times Square los anuncios consumen tanta electricidad que se ven desde el espacio.',
        sights: [
          { name: 'Times Square y Broadway' },
          { name: 'Central Park' },
          { name: 'Estatua de la Libertad y Ellis Island' },
          { name: 'Mirador del Empire State o el Rockefeller' },
          { name: 'Museos MET y MoMA' },
        ],
      },
      {
        name: 'Los Ángeles', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hollywood_sign_%288485145044%29.jpg/500px-Hollywood_sign_%288485145044%29.jpg',
        fact: 'El letrero de Hollywood decía "Hollywoodland" y era un anuncio inmobiliario de 1923.',
        sights: [
          { name: 'Letrero de Hollywood y Paseo de la Fama' },
          { name: 'Santa Mónica y Venice Beach' },
          { name: 'Estudios Universal', url: 'https://www.klook.com/es/search/?query=Universal%20Studios%20Hollywood' },
          { name: 'Museo Getty' },
        ],
      },
      {
        name: 'San Francisco', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg/500px-Golden_Gate_Bridge_as_seen_from_Battery_East.jpg',
        fact: 'El puente Golden Gate se pinta de naranja sin parar: cuando terminan, vuelven a empezar.',
        sights: [
          { name: 'Puente Golden Gate' },
          { name: 'Isla y prisión de Alcatraz' },
          { name: 'Tranvías históricos (cable cars)' },
          { name: 'Fisherman’s Wharf' },
          { name: 'Excursión al Parque de Yosemite' },
        ],
      },
      {
        name: 'Las Vegas y el Oeste', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Las_Vegas_Strip_09_2017_4897.jpg/500px-Las_Vegas_Strip_09_2017_4897.jpg',
        fact: 'Desde Las Vegas se llega al Gran Cañón, una garganta de 1,6 km de profundidad excavada por el río Colorado.',
        sights: [
          { name: 'El Strip y sus casinos temáticos' },
          { name: 'Excursión al Gran Cañón' },
          { name: 'Parques de Utah (Zion, Bryce)' },
          { name: 'Valle de la Muerte o Red Rock Canyon' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de EE. UU.', url: 'https://www.visittheusa.com/' },
      { label: 'Solicitud del ESTA (oficial)', url: 'https://esta.cbp.dhs.gov/' },
      { label: 'Embajada de España en Washington', url: 'https://www.exteriores.gob.es/Embajadas/washington' },
    ],
  },
  {
    slug: 'reino-unido', name: 'Reino Unido', code: 'gb',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Elizabeth_Tower%2C_June_2022.jpg/1280px-Elizabeth_Tower%2C_June_2022.jpg',
    imageAlt: 'Big Ben (Torre Elizabeth), Londres',
    capital: 'Londres', currency: 'Libra (GBP)', language: 'Inglés', plug: 'Tipo G (230 V)', tz: 'UTC+0',
    budget: 'Alto', bestMonths: 'Mayo-Septiembre',
    difficulty: 'Fácil', duration: '7-12 días',
    tags: ['Cultura', 'Historia', 'Ciudades', 'En pareja', 'Pueblos con encanto'],
    summary: 'Londres y su energía, castillos escoceses, pueblos de cuento y pubs con siglos de historia. Un país pequeño en el mapa pero enorme en historia, cultura y paisajes verdes.',
    opinion:
      'El Reino Unido es mucho más que Londres, aunque Londres por sí solo ya engancha: es una de esas ciudades donde nunca te aburres. Mi consejo: dedícale 3-4 días a la capital y luego sube a Escocia, que es otro mundo, con sus Highlands y Edimburgo de película. Y métete en los pueblos de los Cotswolds, que parecen de cuento. Eso sí, lleva chubasquero siempre: aquí el tiempo cambia cinco veces al día, pero forma parte del encanto.',
    faq: [
      { q: '¿Cuántos días para el Reino Unido?', a: 'Con 7-10 días ves Londres, Edimburgo y alguna escapada (Stonehenge, Cotswolds o las Highlands). Solo Londres pide 3-4 días.' },
      { q: '¿Vale el DNI para entrar?', a: 'No: tras el Brexit hace falta pasaporte. Además, desde 2025 se exige una autorización ETA online. Tramítala antes de viajar.' },
      { q: '¿Cuándo es mejor ir?', a: 'De mayo a septiembre, por el clima y los días largos. El invierno es frío, gris y con pocas horas de luz.' },
    ],
    paperwork: ['Pasaporte en vigor (el DNI ya no vale tras el Brexit)', 'Autorización ETA online (desde 2025)', 'Seguro de viaje recomendable', 'Sin vacunas obligatorias'],
    visa: 'No (pasaporte + ETA online)',
    internet: 'Excelente · eSIM recomendada (fuera de la UE tras el Brexit)',
    difficultyNote: 'Muy fácil: en inglés, ordenado y con buen transporte. Solo el clima y los precios de Londres te recuerdan dónde estás.',
    english: 'Es el idioma del país; cero barrera.',
    budgetLevels: { mochilero: 70, normal: 130, comodo: 220, lujo: 420 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Londres', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/500px-Tower_Bridge_at_Dawn.jpg',
        fact: 'Su metro, el "Tube", es el más antiguo del mundo: funciona desde 1863.',
        sights: [
          { name: 'Big Ben y el Parlamento de Westminster' },
          { name: 'Torre de Londres y Tower Bridge' },
          { name: 'British Museum', note: 'Entrada gratuita' },
          { name: 'Buckingham y el cambio de guardia' },
          { name: 'London Eye y paseo por el Támesis' },
        ],
      },
      {
        name: 'Edimburgo', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/City_of_Edinburgh_-_Edinburgh_Castle_-_20140421004403.jpg/500px-City_of_Edinburgh_-_Edinburgh_Castle_-_20140421004403.jpg',
        fact: 'Inspiró el mundo de Harry Potter: J.K. Rowling escribió buena parte en sus cafés.',
        sights: [
          { name: 'Castillo de Edimburgo' },
          { name: 'La Royal Mile' },
          { name: 'Subir a Arthur’s Seat (vistas)' },
          { name: 'Excursión a las Highlands y el lago Ness' },
        ],
      },
      {
        name: 'Stonehenge y los Cotswolds', days: '1 día',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/500px-Stonehenge2007_07_30.jpg',
        fact: 'Stonehenge tiene unos 5.000 años: es más antiguo que las pirámides de Egipto.',
        sights: [
          { name: 'Círculo de piedras de Stonehenge' },
          { name: 'Pueblos de cuento de los Cotswolds' },
          { name: 'Bath y sus termas romanas' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Reino Unido', url: 'https://www.visitbritain.com/es' },
      { label: 'Solicitud de la ETA (oficial)', url: 'https://www.gov.uk/eta' },
      { label: 'Embajada de España en Reino Unido', url: 'https://www.exteriores.gob.es/Embajadas/londres' },
    ],
  },
  {
    slug: 'turquia', name: 'Turquía', code: 'tr',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg/1280px-Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg',
    imageAlt: 'Globos sobre Capadocia, Turquía',
    capital: 'Ankara', currency: 'Lira turca (TRY)', language: 'Turco', plug: 'Tipo C/F (230 V)', tz: 'UTC+3',
    budget: 'Bajo-medio', bestMonths: 'Abril-Junio y Septiembre-Octubre',
    difficulty: 'Media', duration: '10-14 días',
    tags: ['Cultura', 'Historia', 'Aventura', 'Gastronómico', 'En pareja'],
    summary: 'A caballo entre Europa y Asia: Estambul y sus mezquitas, los globos de Capadocia al amanecer, las terrazas blancas de Pamukkale y ruinas grecorromanas. Exótica, barata y con una hospitalidad enorme.',
    opinion:
      'Turquía es de esos viajes que sorprenden por todo. Estambul es pura magia entre dos continentes, con el bullicio del Gran Bazar y las llamadas a la oración sonando al atardecer. Pero el momentazo es Capadocia: levantarte de madrugada y ver cientos de globos flotando sobre ese paisaje lunar no se olvida. Mi consejo: combina ciudad y naturaleza, déjate invitar a un té (te lo ofrecerán mil veces) y ve con hambre, que la comida es una pasada y baratísima.',
    faq: [
      { q: '¿Cuántos días para Turquía?', a: 'Con 10-12 días ves Estambul, Capadocia, Pamukkale y Éfeso con calma. Solo Estambul ya pide 3 días.' },
      { q: '¿Cuándo es mejor ir?', a: 'Primavera (abril-junio) y otoño (septiembre-octubre): clima ideal. Verano hace mucho calor en el interior.' },
      { q: '¿Hace falta visado?', a: 'No para turismo: los españoles pueden estar hasta 90 días solo con el pasaporte.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Sin visado para turismo (hasta 90 días)', 'Seguro de viaje recomendable', 'Sin vacunas obligatorias'],
    visa: 'No requerido hasta 90 días (turismo)',
    internet: 'Bueno · eSIM recomendada',
    difficultyNote: 'Media: turística y acogedora, pero con su propio idioma y alfabeto. Se viaja muy bien, es barata y la gente, encantadora.',
    english: 'Algo de inglés en zonas turísticas; el español, poco. Con simpatía y gestos te apañas.',
    budgetLevels: { mochilero: 30, normal: 60, comodo: 120, lujo: 240 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'mid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Estambul', days: '3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/500px-Hagia_Sophia_%28228968325%29.jpeg',
        fact: 'Es la única ciudad del mundo asentada sobre dos continentes: Europa y Asia.',
        sights: [
          { name: 'Santa Sofía' },
          { name: 'Mezquita Azul' },
          { name: 'Gran Bazar', note: 'Más de 4.000 tiendas; regatea' },
          { name: 'Palacio Topkapi' },
          { name: 'Crucero por el Bósforo' },
        ],
      },
      {
        name: 'Capadocia', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg/500px-Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg',
        fact: 'Sus casas y ciudades están excavadas en la roca volcánica blanda; las hay subterráneas de varios pisos.',
        sights: [
          { name: 'Vuelo en globo al amanecer', note: 'La experiencia estrella; reserva con tiempo', url: 'https://www.klook.com/es/search/?query=globo%20Capadocia' },
          { name: 'Ciudades subterráneas' },
          { name: 'Valles de chimeneas de hadas' },
          { name: 'Museo al aire libre de Göreme' },
        ],
      },
      {
        name: 'Pamukkale', days: '1 día',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Pamukkale%2C_Denizli_2026_68.jpg/500px-Pamukkale%2C_Denizli_2026_68.jpg',
        fact: 'Significa "castillo de algodón": sus terrazas blancas son de roca caliza formada por aguas termales.',
        sights: [
          { name: 'Terrazas blancas de travertino' },
          { name: 'Piscinas termales naturales' },
          { name: 'Ruinas de Hierápolis' },
        ],
      },
      {
        name: 'Éfeso', days: '1 día',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg/500px-Ephesus_Celsus_Library_Fa%C3%A7ade.jpg',
        fact: 'Fue una de las mayores ciudades del Imperio romano; aquí estuvo el Templo de Artemisa, una de las 7 maravillas.',
        sights: [
          { name: 'Biblioteca de Celso' },
          { name: 'Gran teatro romano' },
          { name: 'Casa de la Virgen María' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Turquía', url: 'https://www.goturkiye.com/' },
      { label: 'Embajada de España en Turquía', url: 'https://www.exteriores.gob.es/Embajadas/ankara' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'egipto', name: 'Egipto', code: 'eg',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Pyramids_of_the_Giza_Necropolis.jpg/1280px-Pyramids_of_the_Giza_Necropolis.jpg',
    imageAlt: 'Pirámides de Guiza, Egipto',
    capital: 'El Cairo', currency: 'Libra egipcia (EGP)', language: 'Árabe', plug: 'Tipo C/F (220 V)', tz: 'UTC+2',
    budget: 'Bajo', bestMonths: 'Octubre-Abril',
    difficulty: 'Media', duration: '8-12 días',
    tags: ['Historia', 'Cultura', 'Aventura', 'Desierto', 'Crucero'],
    summary: 'Las pirámides de Guiza, los templos del Nilo y 5.000 años de historia bajo los pies. Egipto es un viaje en el tiempo: faraones, jeroglíficos y un crucero por el río más famoso del mundo.',
    opinion:
      'Egipto te deja con la boca abierta una y otra vez. Estás delante de las pirámides, lo único que queda de las 7 maravillas del mundo antiguo, y aún no te lo crees. Mi consejo: combina El Cairo con un crucero por el Nilo entre Luxor y Asuán; ver los templos desde el río, sin prisas, es la mejor forma de vivirlo. Eso sí, ármate de paciencia con los vendedores y el regateo, tómatelo con humor. Lo que vas a ver compensa cualquier agobio.',
    faq: [
      { q: '¿Cuántos días para Egipto?', a: 'Con 8-10 días ves El Cairo y haces un crucero por el Nilo (Luxor-Asuán) con Abu Simbel. Si sumas el Mar Rojo para bucear, 12-14.' },
      { q: '¿Cuándo es mejor ir?', a: 'De octubre a abril: el calor es soportable. Evita el verano, en el sur se superan fácil los 40 ºC.' },
      { q: '¿Necesito visado?', a: 'Sí: visado a la llegada o e-visa online (de pago). Es sencillo de tramitar.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Visado a la llegada o e-visa online (de pago)', 'Seguro de viaje muy recomendable', 'Vacunas recomendadas según zona (consulta)'],
    visa: 'Visado a la llegada o e-visa (de pago)',
    internet: 'Aceptable · eSIM recomendada',
    difficultyNote: 'Media: el calor y la insistencia de los vendedores cansan, pero los templos compensan con creces. Un tour o guía facilita mucho el viaje.',
    english: 'Algo de inglés en turismo. El regateo es constante; paciencia, sonrisa y humor.',
    budgetLevels: { mochilero: 25, normal: 50, comodo: 100, lujo: 220 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'mid' }, { m: 'Jun', r: 'avoid' }, { m: 'Jul', r: 'avoid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'mid' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'El Cairo y Guiza', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A_1.jpg/500px-%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A_1.jpg',
        fact: 'La Gran Pirámide fue la estructura más alta del mundo durante casi 4.000 años.',
        sights: [
          { name: 'Pirámides de Guiza y la Esfinge' },
          { name: 'Gran Museo Egipcio' },
          { name: 'Bazar Khan el-Khalili' },
          { name: 'El Cairo islámico y la ciudadela' },
        ],
      },
      {
        name: 'Luxor', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Temple_de_Louxor_68.jpg/500px-Temple_de_Louxor_68.jpg',
        fact: 'Se la conoce como "el mayor museo al aire libre del mundo": concentra un tercio de las antigüedades del planeta.',
        sights: [
          { name: 'Valle de los Reyes (tumba de Tutankamón)' },
          { name: 'Templos de Karnak y Luxor' },
          { name: 'Globo al amanecer sobre el Nilo' },
          { name: 'Templo de Hatshepsut' },
        ],
      },
      {
        name: 'Asuán y Abu Simbel', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ramsis%2C_Aswan_Governorate%2C_Egypt_-_panoramio.jpg/500px-Ramsis%2C_Aswan_Governorate%2C_Egypt_-_panoramio.jpg',
        fact: 'Los templos de Abu Simbel fueron trasladados pieza a pieza para salvarlos de las aguas de una presa.',
        sights: [
          { name: 'Templos de Abu Simbel' },
          { name: 'Navegar en faluca por el Nilo' },
          { name: 'Templo de File' },
          { name: 'Mercado nubio' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Egipto', url: 'https://egypt.travel/' },
      { label: 'Embajada de España en Egipto', url: 'https://www.exteriores.gob.es/Embajadas/elcairo' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'noruega', name: 'Noruega', code: 'no',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lyse_Fjord_et_Preikestolen.jpg/1280px-Lyse_Fjord_et_Preikestolen.jpg',
    imageAlt: 'Preikestolen sobre el Lysefjord, Noruega',
    capital: 'Oslo', currency: 'Corona noruega (NOK)', language: 'Noruego', plug: 'Tipo C/F (230 V)', tz: 'UTC+1',
    budget: 'Alto', bestMonths: 'Junio-Agosto (sol) u Octubre-Marzo (auroras)',
    difficulty: 'Fácil', duration: '8-12 días',
    tags: ['Naturaleza', 'Aventura', 'Auroras', 'Road trip', 'En pareja'],
    summary: 'Fiordos imposibles, auroras boreales, montañas que caen al mar y pueblos de postal. Noruega es naturaleza salvaje en estado puro, de las experiencias más espectaculares que puedes vivir en Europa.',
    opinion:
      'Noruega es de esos viajes que te recolocan. Los fiordos no se entienden hasta que estás delante: paredes de roca de cientos de metros cayendo al agua, cascadas por todos lados y un silencio que impone. Mi consejo: alquila coche y tómatelo con calma, que aquí lo bonito es parar cada dos curvas. Y decide qué buscas: verano para recorrerla con luz infinita, o invierno para perseguir auroras en Tromsø. Eso sí, llévate la cartera bien llena, porque cara, lo es un rato; pero lo vale.',
    faq: [
      { q: '¿Verano o invierno?', a: 'Verano (junio-agosto) para los fiordos, senderismo y sol de medianoche. Invierno (octubre-marzo) para cazar auroras boreales en el norte.' },
      { q: '¿Cuántos días necesito?', a: 'Con 7-8 días ves Oslo, Bergen y los fiordos. Si subes al norte (Lofoten, Tromsø) por las auroras, mejor 10-12.' },
      { q: '¿Hace falta visado?', a: 'No: Noruega está en Schengen, con el DNI español en vigor basta.' },
    ],
    paperwork: ['DNI o pasaporte en vigor (Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI, Schengen)',
    internet: 'Excelente · roaming UE (Noruega incluida)',
    difficultyNote: 'Fácil y segurísimo, todo funciona como un reloj. Lo único: es CARÍSIMO y el clima manda en los fiordos.',
    english: 'Todo el mundo habla un inglés perfecto. Cero barrera idiomática.',
    budgetLevels: { mochilero: 90, normal: 160, comodo: 270, lujo: 480 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'mid' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Oslo', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Nationaltheatret_evening.jpg/500px-Nationaltheatret_evening.jpg',
        fact: 'Su Ópera está diseñada para que puedas subir caminando hasta el tejado, como un iceberg de mármol.',
        sights: [
          { name: 'Ópera de Oslo (sube al tejado)' },
          { name: 'Parque de esculturas Vigeland' },
          { name: 'Museos: Munch y los barcos vikingos' },
          { name: 'Barrio moderno de Aker Brygge' },
        ],
      },
      {
        name: 'Bergen', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Bryggen%2C_Bergen%2C_Noruega%2C_2019-09-08%2C_DD_115-117_PAN.jpg/500px-Bryggen%2C_Bergen%2C_Noruega%2C_2019-09-08%2C_DD_115-117_PAN.jpg',
        fact: 'Es la puerta a los fiordos y una de las ciudades más lluviosas de Europa: lleva chubasquero.',
        sights: [
          { name: 'Muelle Bryggen (casas de madera de colores)' },
          { name: 'Mercado de pescado' },
          { name: 'Funicular Fløibanen a la montaña' },
          { name: 'Base para cruceros por los fiordos' },
        ],
      },
      {
        name: 'Los Fiordos', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Geirangerfjord_.jpg/500px-Geirangerfjord_.jpg',
        fact: 'El Geirangerfjord y el Nærøyfjord son Patrimonio de la Humanidad por su belleza brutal.',
        sights: [
          { name: 'Geirangerfjord y sus cascadas' },
          { name: 'Crucero por el Nærøyfjord' },
          { name: 'Subir a Preikestolen (Pulpit Rock)' },
          { name: 'Trolltunga (para senderistas)' },
        ],
      },
      {
        name: 'Lofoten y el Norte', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Moskenes_Reinebringen_lub_2025-07-21_img09_Aussicht.jpg/500px-Moskenes_Reinebringen_lub_2025-07-21_img09_Aussicht.jpg',
        fact: 'En verano el sol no se pone durante semanas; en invierno bailan las auroras boreales.',
        sights: [
          { name: 'Islas Lofoten (picos y playas árticas)' },
          { name: 'Auroras boreales en Tromsø (invierno)' },
          { name: 'Sol de medianoche (verano)' },
          { name: 'Pueblos pesqueros de cabañas rojas' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Noruega', url: 'https://www.visitnorway.es/' },
      { label: 'Embajada de España en Noruega', url: 'https://www.exteriores.gob.es/Embajadas/oslo' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'indonesia', name: 'Indonesia', code: 'id',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/TanahLot_2014.JPG/1280px-TanahLot_2014.JPG',
    imageAlt: 'Templo de Tanah Lot, Bali',
    capital: 'Yakarta', currency: 'Rupia (IDR)', language: 'Indonesio', plug: 'Tipo C/F (230 V)', tz: 'UTC+7 a +9',
    budget: 'Bajo', bestMonths: 'Abril-Octubre (estación seca)',
    difficulty: 'Media', duration: '12-18 días',
    tags: ['Playa', 'Naturaleza', 'Barato', 'Aventura', 'Mochilero'],
    summary: 'Bali y sus templos, arrozales infinitos, volcanes, dragones de Komodo y playas de ensueño. Indonesia son más de 17.000 islas y un paraíso para mochileros donde el dinero cunde muchísimo.',
    opinion:
      'Indonesia es un viajazo y, encima, baratísimo. Bali engancha por algo: arrozales verdes, templos preciosos y un ambiente súper relajado. Pero mi consejo es que no te quedes solo ahí: el país es enorme y las joyas están en lo de al lado, como el amanecer en Borobudur o los dragones de Komodo. Eso sí, organiza bien los vuelos internos porque las distancias entre islas son largas. Y lánzate a la comida local, que está increíble y vale cuatro duros.',
    faq: [
      { q: '¿Cuántos días para Indonesia?', a: 'Bali en 5-6 días va bien. Para sumar Java (Borobudur) y Komodo, mejor 14-18: las islas están lejos entre sí.' },
      { q: '¿Cuándo es mejor ir?', a: 'Estación seca, de abril a octubre. Evita noviembre-marzo (lluvias y humedad altas).' },
      { q: '¿Necesito visado?', a: 'Sí: visado a la llegada o e-visa online (de pago), sencillo de tramitar.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Visado a la llegada o e-visa (de pago)', 'Seguro de viaje muy recomendable', 'Vacunas recomendadas según zona (consulta)'],
    visa: 'Visado a la llegada o e-visa (de pago)',
    internet: 'Aceptable · eSIM recomendada',
    difficultyNote: 'Media: barata y acogedora, pero son miles de islas con vuelos internos que hay que planificar. Bali es facilísimo; lo remoto, más aventura.',
    english: 'Algo de inglés en zonas turísticas (en Bali, bastante); en pueblos, poco.',
    budgetLevels: { mochilero: 25, normal: 50, comodo: 100, lujo: 220 },
    climate: [
      { m: 'Ene', r: 'avoid' }, { m: 'Feb', r: 'avoid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'avoid' }, { m: 'Dic', r: 'avoid' },
    ],
    cityGuides: [
      {
        name: 'Bali', days: '5-6 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ubud_%2849818456887%29.jpg/500px-Ubud_%2849818456887%29.jpg',
        fact: 'La llaman "la isla de los dioses": tiene más de 20.000 templos repartidos por todas partes.',
        sights: [
          { name: 'Templo de Tanah Lot al atardecer' },
          { name: 'Arrozales de Tegalalang (Ubud)' },
          { name: 'Ubud: templos, yoga y naturaleza' },
          { name: 'Playas y acantilados de Uluwatu' },
          { name: 'Excursión a Nusa Penida' },
        ],
      },
      {
        name: 'Java y Borobudur', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Pradaksina.jpg/500px-Pradaksina.jpg',
        fact: 'Borobudur es el mayor templo budista del mundo: una montaña de piedra con más de 500 budas.',
        sights: [
          { name: 'Amanecer en Borobudur' },
          { name: 'Templo hindú de Prambanan' },
          { name: 'Volcanes Bromo e Ijen' },
          { name: 'Ciudad de Yogyakarta' },
        ],
      },
      {
        name: 'Komodo y las islas', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Komodo_dragon_at_Komodo_National_Park.jpg/500px-Komodo_dragon_at_Komodo_National_Park.jpg',
        fact: 'Los dragones de Komodo son los lagartos más grandes del mundo: miden hasta 3 metros.',
        sights: [
          { name: 'Ver los dragones de Komodo' },
          { name: 'Buceo y snorkel en arrecifes' },
          { name: 'Playa Rosa (Pink Beach)' },
          { name: 'Navegación entre islas en barco' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Indonesia', url: 'https://www.indonesia.travel/' },
      { label: 'Embajada de España en Indonesia', url: 'https://www.exteriores.gob.es/Embajadas/yakarta' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'irlanda', name: 'Irlanda', code: 'ie',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Cliffs-Of-Moher-OBriens-From-South.JPG/1280px-Cliffs-Of-Moher-OBriens-From-South.JPG',
    imageAlt: 'Acantilados de Moher, Irlanda',
    capital: 'Dublín', currency: 'Euro (EUR)', language: 'Inglés e irlandés', plug: 'Tipo G (230 V)', tz: 'UTC+0',
    budget: 'Medio-alto', bestMonths: 'Mayo-Septiembre',
    difficulty: 'Fácil', duration: '6-9 días',
    tags: ['Naturaleza', 'Cultura', 'Road trip', 'En pareja', 'Pueblos con encanto'],
    summary: 'La isla esmeralda: acantilados que cortan la respiración, praderas verdísimas, pubs con música en vivo y una hospitalidad legendaria. Un road trip costero de los más bonitos de Europa.',
    opinion:
      'Irlanda enamora con poco: verde por todas partes, acantilados espectaculares y una gente con la que acabas de cañas como si fuerais de toda la vida. Mi consejo: alquila coche y hazte la costa oeste (Wild Atlantic Way) sin prisa, parando en pueblos, castillos y acantilados. Y métete en un pub de noche a escuchar música en directo con una pinta, que ahí está el alma del país. Eso sí, lleva chubasquero: lloverá, pero forma parte de la magia.',
    faq: [
      { q: '¿Cuántos días para Irlanda?', a: 'Con 6-8 días ves Dublín y haces la costa oeste (Acantilados de Moher, Galway, Anillo de Kerry). El coche es casi imprescindible fuera de Dublín.' },
      { q: '¿Cuándo es mejor ir?', a: 'De mayo a septiembre: más luz y mejor clima. El invierno es frío, lluvioso y con pocas horas de luz.' },
      { q: '¿Hace falta visado?', a: 'No: con el DNI español en vigor basta (Irlanda es UE, aunque no Schengen).' },
    ],
    paperwork: ['DNI o pasaporte en vigor (UE, no Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI; UE, no Schengen)',
    internet: 'Excelente · roaming UE sin coste extra',
    difficultyNote: 'Muy fácil: en inglés, segura y con gente encantadora. Solo el clima cambiante y conducir por la izquierda te despistan al principio.',
    english: 'Es el idioma del país; cero barrera.',
    budgetLevels: { mochilero: 65, normal: 120, comodo: 200, lujo: 380 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'mid' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Dublín', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Dublin_-_aerial_-_2025-07-07_01.jpg/500px-Dublin_-_aerial_-_2025-07-07_01.jpg',
        fact: 'Aquí escribieron Joyce, Wilde y Beckett: es Ciudad de la Literatura de la UNESCO.',
        sights: [
          { name: 'Fábrica Guinness (Storehouse)' },
          { name: 'Trinity College y el Libro de Kells' },
          { name: 'Barrio de Temple Bar' },
          { name: 'Castillo de Dublín' },
          { name: 'Pub con música tradicional en vivo' },
        ],
      },
      {
        name: 'Galway y los Acantilados', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Galway_cathedral.jpg/500px-Galway_cathedral.jpg',
        fact: 'Los Acantilados de Moher se elevan 214 metros sobre el Atlántico: salieron en Harry Potter.',
        sights: [
          { name: 'Acantilados de Moher' },
          { name: 'Galway, ciudad bohemia y musical' },
          { name: 'Región salvaje de Connemara' },
          { name: 'Paisaje lunar del Burren' },
        ],
      },
      {
        name: 'Anillo de Kerry', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Atlantic_Ocean%2C_Ring_of_Kerry_%28506559%29_%2827964189752%29.jpg/500px-Atlantic_Ocean%2C_Ring_of_Kerry_%28506559%29_%2827964189752%29.jpg',
        fact: 'Es una de las rutas costeras más bonitas del mundo, dentro de la Wild Atlantic Way.',
        sights: [
          { name: 'Ruta panorámica del Anillo de Kerry' },
          { name: 'Península de Dingle' },
          { name: 'Parque Nacional de Killarney' },
          { name: 'Pueblos de colores junto al mar' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Irlanda', url: 'https://www.ireland.com/es-es/' },
      { label: 'Embajada de España en Irlanda', url: 'https://www.exteriores.gob.es/Embajadas/dublin' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'colombia', name: 'Colombia', code: 'co',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Valle_del_cocora_-_general_view.jpg/1280px-Valle_del_cocora_-_general_view.jpg',
    imageAlt: 'Valle del Cocora, Colombia',
    capital: 'Bogotá', currency: 'Peso colombiano (COP)', language: 'Español', plug: 'Tipo A/B (110 V)', tz: 'UTC-5',
    budget: 'Bajo', bestMonths: 'Diciembre-Marzo y Julio-Agosto',
    difficulty: 'Media', duration: '12-16 días',
    tags: ['Naturaleza', 'Cultura', 'Aventura', 'Barato', 'Gastronómico'],
    summary: 'Cafetales verdísimos, el Caribe de Cartagena, la eterna primavera de Medellín y una energía contagiosa. Colombia es color, salsa, café y la gente más acogedora que vas a conocer.',
    opinion:
      'Colombia te roba el corazón, en serio. La gente es pura alegría y hospitalidad: te acogen como si fueras de la familia. Mi consejo: combina ciudad, café y Caribe. Medellín sorprende por su transformación, el Eje Cafetero con sus palmeras gigantes es mágico, y Cartagena es puro color colonial junto al mar. Infórmate de las zonas seguras y ve con la mente abierta: la Colombia de hoy es un viajazo que muy pocos esperan.',
    faq: [
      { q: '¿Cuántos días para Colombia?', a: 'Con 12-14 días combinas Bogotá, Medellín, el Eje Cafetero y Cartagena. Para algo más corto, elige Caribe o cafetero.' },
      { q: '¿Cuándo es mejor ir?', a: 'Las temporadas secas: diciembre-marzo y julio-agosto. Al estar en el ecuador, el clima depende más de la altitud que del mes.' },
      { q: '¿Necesito visado?', a: 'No para turismo: los españoles pueden estar hasta 90 días solo con el pasaporte.' },
    ],
    paperwork: ['Pasaporte en vigor', 'Sin visado para turismo (hasta 90 días)', 'Seguro de viaje muy recomendable', 'Vacuna de fiebre amarilla recomendada para ciertas zonas'],
    visa: 'No requerido hasta 90 días (turismo)',
    internet: 'Bueno en ciudades · eSIM recomendada',
    difficultyNote: 'Media: cálida, barata y se habla español, pero conviene informarse de las zonas seguras. La gente es de lo más acogedor del mundo.',
    english: 'Se habla español; poco inglés. No lo necesitas para nada.',
    budgetLevels: { mochilero: 30, normal: 60, comodo: 120, lujo: 240 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'mid' },
      { m: 'May', r: 'mid' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'mid' }, { m: 'Oct', r: 'avoid' }, { m: 'Nov', r: 'avoid' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'Bogotá', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bogota%2C_Colombia_%2836668708290%29.jpg/500px-Bogota%2C_Colombia_%2836668708290%29.jpg',
        fact: 'Está a 2.640 m de altitud: es una de las capitales más altas del mundo.',
        sights: [
          { name: 'Barrio histórico de La Candelaria' },
          { name: 'Subir al cerro de Monserrate' },
          { name: 'Museo del Oro' },
          { name: 'Museo Botero' },
        ],
      },
      {
        name: 'Medellín y el Eje Cafetero', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/El_Poblado_Medell%C3%ADn.jpg/500px-El_Poblado_Medell%C3%ADn.jpg',
        fact: 'Medellín pasó de ser la ciudad más peligrosa del mundo a un referente de innovación urbana.',
        sights: [
          { name: 'Comuna 13 y sus grafitis' },
          { name: 'Valle del Cocora y sus palmeras gigantes' },
          { name: 'Fincas cafeteras (cata de café)' },
          { name: 'Pueblo colorido de Guatapé y la Piedra del Peñol' },
        ],
      },
      {
        name: 'Cartagena y el Caribe', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Museo_Naval_del_Caribe.JPG/500px-Museo_Naval_del_Caribe.JPG',
        fact: 'Su ciudad amurallada colonial es Patrimonio de la Humanidad: pura postal del Caribe.',
        sights: [
          { name: 'Ciudad amurallada al atardecer' },
          { name: 'Barrio bohemio de Getsemaní' },
          { name: 'Islas del Rosario (playa)' },
          { name: 'Castillo de San Felipe' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Colombia', url: 'https://colombia.travel/es' },
      { label: 'Embajada de España en Colombia', url: 'https://www.exteriores.gob.es/Embajadas/bogota' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'emiratos-arabes', name: 'Emiratos Árabes Unidos', code: 'ae',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg/1280px-Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg',
    imageAlt: 'Burj Khalifa y el skyline de Dubái',
    capital: 'Abu Dabi', currency: 'Dírham (AED)', language: 'Árabe', plug: 'Tipo G (230 V)', tz: 'UTC+4',
    budget: 'Alto', bestMonths: 'Noviembre-Marzo',
    difficulty: 'Fácil', duration: '4-7 días',
    tags: ['Lujo', 'Ciudades', 'Desierto', 'Compras', 'En pareja'],
    summary: 'Rascacielos imposibles, lujo desmedido, islas artificiales y un desierto dorado a las afueras. Dubái y Abu Dabi son el futuro hecho ciudad, perfecto para una escapada deslumbrante o escala de camino a Asia.',
    opinion:
      'Emiratos impresiona por todo lo alto, nunca mejor dicho. Dubái es ciencia ficción: el edificio más alto del mundo, islas con forma de palmera y centros comerciales con pistas de esquí. Mi consejo: dedícale 2-3 días a Dubái, una excursión al desierto al atardecer (de lo mejor del viaje) y un día a Abu Dabi para ver su Gran Mezquita, que quita el sentido. Es caro, sí, pero hay planes para todos los bolsillos. Ideal también como escala de camino a Asia.',
    faq: [
      { q: '¿Cuántos días para Emiratos?', a: 'Con 4-5 días ves Dubái, un safari por el desierto y una escapada a Abu Dabi. Perfecto también como escala de 2-3 días.' },
      { q: '¿Cuándo es mejor ir?', a: 'De noviembre a marzo. Evita el verano (mayo-septiembre): se superan los 45 ºC con facilidad.' },
      { q: '¿Necesito visado?', a: 'No para turismo: los españoles tienen exención de visado para estancias cortas.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Exención de visado para turismo', 'Respeta el código de vestimenta en lugares religiosos', 'Sin vacunas obligatorias'],
    visa: 'Exención para turismo (hasta 90 días)',
    internet: 'Excelente · eSIM recomendada',
    difficultyNote: 'Muy fácil y seguro, todo es nuevo y reluciente. Solo evita el calor extremo del verano y respeta las normas locales.',
    english: 'Se habla muchísimo inglés (la mayoría son expatriados). Cero barrera.',
    budgetLevels: { mochilero: 60, normal: 120, comodo: 250, lujo: 600 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'mid' },
      { m: 'May', r: 'avoid' }, { m: 'Jun', r: 'avoid' }, { m: 'Jul', r: 'avoid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'avoid' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'Dubái', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/500px-Dubai_Marina_Skyline.jpg',
        fact: 'El Burj Khalifa mide 828 m: es más del doble que la Torre Eiffel.',
        sights: [
          { name: 'Mirador del Burj Khalifa', url: 'https://www.klook.com/es/search/?query=Burj%20Khalifa' },
          { name: 'Dubai Mall y su acuario' },
          { name: 'Isla Palm Jumeirah' },
          { name: 'Zoco del oro y de las especias' },
          { name: 'Marina de Dubái de noche' },
        ],
      },
      {
        name: 'Abu Dabi y el desierto', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Rub_al_Khali_002.JPG/500px-Rub_al_Khali_002.JPG',
        fact: 'La Gran Mezquita Sheikh Zayed tiene la alfombra tejida a mano más grande del mundo.',
        sights: [
          { name: 'Gran Mezquita Sheikh Zayed' },
          { name: 'Safari y cena en el desierto al atardecer' },
          { name: 'Louvre Abu Dabi' },
          { name: 'Ferrari World' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Dubái', url: 'https://www.visitdubai.com/es' },
      { label: 'Embajada de España en Emiratos', url: 'https://www.exteriores.gob.es/Embajadas/abudabi' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'argentina', name: 'Argentina', code: 'ar',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Perito_Moreno_Glacier_2023.jpg/1280px-Perito_Moreno_Glacier_2023.jpg',
    imageAlt: 'Glaciar Perito Moreno, Argentina',
    capital: 'Buenos Aires', currency: 'Peso argentino (ARS)', language: 'Español', plug: 'Tipo C/I (220 V)', tz: 'UTC-3',
    budget: 'Medio', bestMonths: 'Octubre-Abril',
    difficulty: 'Media', duration: '14-21 días',
    tags: ['Naturaleza', 'Aventura', 'Cultura', 'Road trip', 'Gastronómico'],
    summary: 'Glaciares enormes, las cataratas del Iguazú, la pasión del tango en Buenos Aires y la Patagonia más salvaje. Argentina es un país inmenso de paisajes brutales, carne y vino, y una calidez que engancha.',
    opinion:
      'Argentina es de esos países que te dejan marca. Buenos Aires tiene un rollo europeo con alma latina que atrapa, y la Patagonia es de otro planeta: glaciares que crujen, montañas imposibles y un silencio enorme. Mi consejo: asume que es gigante y no quieras abarcarlo todo; elige norte (Iguazú, Salta) o sur (Patagonia) y vuela, que las distancias son de locos. Y déjate llevar por la comida: un asado y un Malbec con un argentino es de las mejores cosas que te pueden pasar.',
    faq: [
      { q: '¿Cuántos días para Argentina?', a: 'Es enorme. Con 14-16 días combinas Buenos Aires, Iguazú y la Patagonia (con vuelos internos). Para una sola zona, una semana.' },
      { q: '¿Cuándo es mejor ir?', a: 'De octubre a abril (su primavera-verano), sobre todo para la Patagonia. Buenos Aires se disfruta casi todo el año.' },
      { q: '¿Necesito visado?', a: 'No para turismo: los españoles pueden estar hasta 90 días solo con el pasaporte.' },
    ],
    paperwork: ['Pasaporte en vigor', 'Sin visado para turismo (hasta 90 días)', 'Seguro de viaje muy recomendable', 'Sin vacunas obligatorias'],
    visa: 'No requerido hasta 90 días (turismo)',
    internet: 'Bueno en ciudades · eSIM recomendada',
    difficultyNote: 'Media: enorme (necesitas vuelos internos sí o sí) y con una economía cambiante, pero se habla español y la gente es cercanísima.',
    english: 'Se habla español; poco inglés. No lo necesitas.',
    budgetLevels: { mochilero: 35, normal: 70, comodo: 140, lujo: 280 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'mid' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'mid' },
      { m: 'Sep', r: 'mid' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'Buenos Aires', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Avenida_9_de_Julio%2C_Buenos_Aires_%2840089810910%29.jpg/500px-Avenida_9_de_Julio%2C_Buenos_Aires_%2840089810910%29.jpg',
        fact: 'Su avenida 9 de Julio es la más ancha del mundo: tiene hasta 16 carriles.',
        sights: [
          { name: 'Barrio de La Boca y Caminito' },
          { name: 'Cementerio de la Recoleta' },
          { name: 'Espectáculo de tango' },
          { name: 'Palermo y sus bares' },
          { name: 'Plaza de Mayo y la Casa Rosada' },
        ],
      },
      {
        name: 'Patagonia', days: '4-6 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/El_Chalt%C3%A9n.jpg/500px-El_Chalt%C3%A9n.jpg',
        fact: 'El glaciar Perito Moreno es de los pocos del mundo que sigue avanzando, no retrocediendo.',
        sights: [
          { name: 'Glaciar Perito Moreno (El Calafate)' },
          { name: 'Senderismo en El Chaltén (Fitz Roy)' },
          { name: 'Ushuaia, el fin del mundo' },
          { name: 'Avistamiento de ballenas (Península Valdés)' },
        ],
      },
      {
        name: 'Cataratas del Iguazú', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Iguazu_Cataratas2.jpg/500px-Iguazu_Cataratas2.jpg',
        fact: 'Son 275 saltos de agua; la Garganta del Diablo es tan brutal que se oye a kilómetros.',
        sights: [
          { name: 'La Garganta del Diablo' },
          { name: 'Pasarelas entre las cataratas' },
          { name: 'Lado brasileño (vistas panorámicas)' },
          { name: 'Selva subtropical y su fauna' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Argentina', url: 'https://www.argentina.gob.ar/turismo' },
      { label: 'Embajada de España en Argentina', url: 'https://www.exteriores.gob.es/Embajadas/buenosaires' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'costa-rica', name: 'Costa Rica', code: 'cr',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Arenal_volcano_%2870785p%29_%28cropped%29.jpg/1280px-Arenal_volcano_%2870785p%29_%28cropped%29.jpg',
    imageAlt: 'Volcán Arenal, Costa Rica',
    capital: 'San José', currency: 'Colón (CRC)', language: 'Español', plug: 'Tipo A/B (120 V)', tz: 'UTC-6',
    budget: 'Medio', bestMonths: 'Diciembre-Abril (estación seca)',
    difficulty: 'Fácil', duration: '10-14 días',
    tags: ['Naturaleza', 'Aventura', 'Playa', 'Familia', 'Ecoturismo'],
    summary: 'Volcanes, bosques nubosos llenos de vida, playas en dos océanos y la filosofía "pura vida". Costa Rica es el paraíso del ecoturismo: tirolinas, perezosos, tortugas y aventura, todo muy bien organizado.',
    opinion:
      'Costa Rica es felicidad en forma de país. Aquí la naturaleza es la protagonista: te despiertas con monos, ves perezosos colgando de los árboles y te bañas bajo cascadas. Mi consejo: alterna volcán, bosque nuboso y playa, que en pocos días pasas de tirarte en tirolina sobre la selva a hacer surf en el Pacífico. Y abraza el "pura vida": no es solo un saludo, es una forma de tomarse la vida con calma que se te pega. Ideal también para ir en familia.',
    faq: [
      { q: '¿Cuántos días para Costa Rica?', a: 'Con 10-12 días combinas el volcán Arenal, un bosque nuboso (Monteverde) y playa (Manuel Antonio o Guanacaste).' },
      { q: '¿Cuándo es mejor ir?', a: 'Estación seca, de diciembre a abril. Evita septiembre-octubre (lo más lluvioso en el Pacífico).' },
      { q: '¿Necesito visado?', a: 'No para turismo: los españoles pueden estar hasta 90 días solo con el pasaporte.' },
    ],
    paperwork: ['Pasaporte en vigor', 'Sin visado para turismo (hasta 90 días)', 'Seguro de viaje muy recomendable', 'Sin vacunas obligatorias'],
    visa: 'No requerido hasta 90 días (turismo)',
    internet: 'Bueno · eSIM recomendada',
    difficultyNote: 'Fácil y de los más seguros de la zona, ideal para naturaleza y aventura. Se habla español y todo está muy preparado para el turismo.',
    english: 'Se habla español; bastante inglés en zonas turísticas.',
    budgetLevels: { mochilero: 40, normal: 75, comodo: 140, lujo: 280 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'mid' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'mid' },
      { m: 'Sep', r: 'avoid' }, { m: 'Oct', r: 'avoid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'San José y el Volcán Arenal', days: '3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Costa_Rica-Teatro_Nacional.JPG/500px-Costa_Rica-Teatro_Nacional.JPG',
        fact: 'El Arenal fue uno de los volcanes más activos del mundo; hoy preside un parque lleno de aguas termales.',
        sights: [
          { name: 'Volcán Arenal y La Fortuna' },
          { name: 'Aguas termales naturales' },
          { name: 'Catarata de La Fortuna' },
          { name: 'Teatro Nacional en San José' },
        ],
      },
      {
        name: 'Manuel Antonio', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Manuel_antonio_06_april_2005.jpeg/500px-Manuel_antonio_06_april_2005.jpeg',
        fact: 'Su parque nacional es de los más pequeños del país pero de los que más fauna concentra.',
        sights: [
          { name: 'Parque Nacional Manuel Antonio' },
          { name: 'Playas con monos y perezosos' },
          { name: 'Surf en el Pacífico' },
          { name: 'Senderos por la selva' },
        ],
      },
      {
        name: 'Monteverde', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Monteverde_bosque.jpg/500px-Monteverde_bosque.jpg',
        fact: 'Su bosque nuboso está siempre entre la niebla y alberga unas 500 especies de orquídeas.',
        sights: [
          { name: 'Reserva del bosque nuboso' },
          { name: 'Puentes colgantes entre las copas' },
          { name: 'Tirolinas (canopy) sobre la selva' },
          { name: 'Avistar quetzales y colibríes' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Costa Rica', url: 'https://www.visitcostarica.com/es' },
      { label: 'Embajada de España en Costa Rica', url: 'https://www.exteriores.gob.es/Embajadas/sanjosedecostarica' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'sudafrica', name: 'Sudáfrica', code: 'za',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Table_Mountain_DanieVDM.jpg/1280px-Table_Mountain_DanieVDM.jpg',
    imageAlt: 'Table Mountain, Ciudad del Cabo',
    capital: 'Pretoria / Ciudad del Cabo', currency: 'Rand (ZAR)', language: 'Inglés (y 10 idiomas más)', plug: 'Tipo M/N (230 V)', tz: 'UTC+2',
    budget: 'Medio', bestMonths: 'Mayo-Septiembre (safari)',
    difficulty: 'Media', duration: '12-16 días',
    tags: ['Safari', 'Naturaleza', 'Aventura', 'Playa', 'Gastronómico'],
    summary: 'Safaris con los "Big Five", la espectacular Ciudad del Cabo, viñedos, pingüinos y la Ruta Jardín. Sudáfrica lo tiene todo en un solo país, con una relación calidad-precio difícil de igualar.',
    opinion:
      'Sudáfrica es un viajazo que sorprende a todo el mundo. Ver leones y elefantes en libertad al amanecer es de esas cosas que no se olvidan, y Ciudad del Cabo es una de las ciudades más bonitas del planeta: montaña, mar y viñedos en el mismo sitio. Mi consejo: combina safari (Kruger) con la zona del Cabo y la Ruta Jardín, alquila coche y disfruta de un país enorme y variadísimo. Eso sí, infórmate de las zonas seguras y muévete con cabeza, como en cualquier gran ciudad.',
    faq: [
      { q: '¿Cuántos días para Sudáfrica?', a: 'Con 12-14 días combinas safari en Kruger, Ciudad del Cabo y la Ruta Jardín. Es grande: el coche o los vuelos internos ayudan mucho.' },
      { q: '¿Cuándo es mejor ir?', a: 'Para safari, el invierno seco (mayo-septiembre): los animales se concentran en las charcas. Ciudad del Cabo luce más en su verano (nov-marzo).' },
      { q: '¿Necesito visado?', a: 'No para turismo: los españoles pueden estar hasta 90 días solo con el pasaporte.' },
    ],
    paperwork: ['Pasaporte con al menos 2 páginas en blanco', 'Sin visado para turismo (hasta 90 días)', 'Seguro de viaje muy recomendable', 'Profilaxis de malaria en zonas de safari (consulta)'],
    visa: 'No requerido hasta 90 días (turismo)',
    internet: 'Bueno · eSIM recomendada',
    difficultyNote: 'Media: relación calidad-precio increíble y en inglés, pero hay que informarse bien de la seguridad por zonas y se conduce por la izquierda.',
    english: 'El inglés es idioma oficial; cero barrera.',
    budgetLevels: { mochilero: 35, normal: 70, comodo: 140, lujo: 320 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'Ciudad del Cabo', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Camps_bay_%2853460319478%29_%28cropped%29.jpg/500px-Camps_bay_%2853460319478%29_%28cropped%29.jpg',
        fact: 'La Table Mountain es una de las 7 Maravillas Naturales del mundo y suele llevar un "mantel" de nubes.',
        sights: [
          { name: 'Subir a la Table Mountain' },
          { name: 'Cabo de Buena Esperanza' },
          { name: 'Pingüinos en Boulders Beach' },
          { name: 'Viñedos de Stellenbosch' },
        ],
      },
      {
        name: 'Safari en Kruger', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Kruger_Zebra.JPG/500px-Kruger_Zebra.JPG',
        fact: 'Aquí viven los "Big Five": león, leopardo, elefante, búfalo y rinoceronte.',
        sights: [
          { name: 'Ver los Big Five en libertad' },
          { name: 'Safari al amanecer' },
          { name: 'Lodges en plena sabana' },
          { name: 'Reservas privadas (Sabi Sand)' },
        ],
      },
      {
        name: 'Ruta Jardín', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Knysna_waterfront.jpg/500px-Knysna_waterfront.jpg',
        fact: 'Es una de las carreteras costeras más bonitas del mundo, entre Ciudad del Cabo y Port Elizabeth.',
        sights: [
          { name: 'Conducir la Garden Route' },
          { name: 'Laguna de Knysna' },
          { name: 'Avistar ballenas en Hermanus' },
          { name: 'Parque de Tsitsikamma' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Sudáfrica', url: 'https://www.southafrica.net/' },
      { label: 'Embajada de España en Sudáfrica', url: 'https://www.exteriores.gob.es/Embajadas/pretoria' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'filipinas', name: 'Filipinas', code: 'ph',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/El_Nido_Bay_December_2018.jpg/1280px-El_Nido_Bay_December_2018.jpg',
    imageAlt: 'Bahía de El Nido, Palawan, Filipinas',
    capital: 'Manila', currency: 'Peso filipino (PHP)', language: 'Filipino e inglés', plug: 'Tipo A/B/C (220 V)', tz: 'UTC+8',
    budget: 'Bajo', bestMonths: 'Diciembre-Mayo (estación seca)',
    difficulty: 'Media', duration: '14-18 días',
    tags: ['Playa', 'Islas', 'Buceo', 'Barato', 'Mochilero'],
    summary: 'Más de 7.000 islas de aguas turquesa, lagunas escondidas, arrecifes para bucear y playas de postal. Filipinas es un paraíso tropical baratísimo y con la gente más sonriente de Asia.',
    opinion:
      'Filipinas es el paraíso playero que todos imaginamos, pero de verdad. El Nido y Coron, en Palawan, parecen un salvapantallas: lagunas turquesa entre paredes de roca que no te crees. Mi consejo: no intentes verlo todo, son miles de islas; elige una o dos zonas y muévete despacio. Y aprovecha que casi todos hablan inglés y son amabilísimos, lo que hace el viaje facilísimo. Lo único pesado son los traslados entre islas, así que ten paciencia con ferries y vuelos.',
    faq: [
      { q: '¿Cuántos días para Filipinas?', a: 'Con 14-16 días combinas Palawan (El Nido, Coron) con Cebú/Bohol o Boracay. Los traslados entre islas comen tiempo.' },
      { q: '¿Cuándo es mejor ir?', a: 'Estación seca, de diciembre a mayo. Evita la temporada de tifones (julio-octubre).' },
      { q: '¿Necesito visado?', a: 'No para turismo: los españoles pueden entrar sin visado para estancias de hasta 30 días.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Sin visado para turismo (hasta 30 días)', 'Billete de salida del país', 'Seguro de viaje muy recomendable'],
    visa: 'No requerido hasta 30 días (turismo)',
    internet: 'Irregular en las islas · eSIM recomendada',
    difficultyNote: 'Media: baratísima y con inglés muy extendido, pero son 7.000 islas y moverse entre ellas (ferries y vuelos) pide paciencia y planificación.',
    english: 'El inglés es cooficial y se habla muchísimo. Cero barrera.',
    budgetLevels: { mochilero: 25, normal: 50, comodo: 100, lujo: 220 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'avoid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'avoid' }, { m: 'Oct', r: 'avoid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'Palawan (El Nido y Coron)', days: '5-6 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Coron_skyline_Tapyas_%28Coron%2C_Palwan%3B_03-16-2024%29.jpg/500px-Coron_skyline_Tapyas_%28Coron%2C_Palwan%3B_03-16-2024%29.jpg',
        fact: 'El Nido ha sido elegida varias veces la isla más bonita del mundo.',
        sights: [
          { name: 'Island hopping en barca por El Nido' },
          { name: 'Lagunas de Coron' },
          { name: 'Buceo en pecios de la II Guerra Mundial' },
          { name: 'Playas y calas escondidas' },
        ],
      },
      {
        name: 'Bohol y Cebú', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chocolate_Hills_Bohol.JPG/500px-Chocolate_Hills_Bohol.JPG',
        fact: 'Las Chocolate Hills son más de 1.200 colinas que en seco se vuelven marrones, como bombones.',
        sights: [
          { name: 'Chocolate Hills de Bohol' },
          { name: 'Ver los tarseros (primate diminuto)' },
          { name: 'Nadar con tiburones ballena (Oslob)' },
          { name: 'Cascadas de Kawasan' },
        ],
      },
      {
        name: 'Boracay', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Boracay_White_Beach.png/500px-Boracay_White_Beach.png',
        fact: 'Su White Beach, de arena blanquísima, aparece siempre entre las mejores playas del mundo.',
        sights: [
          { name: 'White Beach al atardecer' },
          { name: 'Deportes acuáticos y kitesurf' },
          { name: 'Paseo en velero (paraw)' },
          { name: 'Vida nocturna en la playa' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Filipinas', url: 'https://philippines.travel/' },
      { label: 'Embajada de España en Filipinas', url: 'https://www.exteriores.gob.es/Embajadas/manila' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'brasil', name: 'Brasil', code: 'br',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg/1280px-Christ_the_Redeemer_-_Cristo_Redentor.jpg',
    imageAlt: 'Cristo Redentor sobre Río de Janeiro',
    capital: 'Brasilia', currency: 'Real (BRL)', language: 'Portugués', plug: 'Tipo N/C (127/220 V)', tz: 'UTC-3',
    budget: 'Medio', bestMonths: 'Septiembre-Marzo (Carnaval en febrero)',
    difficulty: 'Media', duration: '14-21 días',
    tags: ['Playa', 'Naturaleza', 'Fiesta', 'Cultura', 'Aventura'],
    summary: 'Río y sus playas míticas, el Carnaval más famoso del mundo, la selva amazónica y el alma afrobrasileña de Bahía. Brasil es pura energía, naturaleza descomunal y la alegría hecha país.',
    opinion:
      'Brasil es puro contagio de alegría. Río te recibe con esa postal imposible del Cristo sobre la ciudad, las playas de Copacabana e Ipanema y un ritmo que no para. Pero Brasil es gigante: tienes la fuerza afrobrasileña de Salvador, la selva amazónica y playas paradisíacas en el nordeste. Mi consejo: elige zonas (no quieras abarcarlo todo) y déjate llevar por la música y la gente. Infórmate de la seguridad en las grandes ciudades y muévete con cabeza, pero ve con la mente abierta: engancha.',
    faq: [
      { q: '¿Cuántos días para Brasil?', a: 'Es enorme. Con 14-16 días combinas Río, una escapada de playa (nordeste) y quizá Amazonas o Iguazú, con vuelos internos.' },
      { q: '¿Cuándo es mejor ir?', a: 'De septiembre a marzo (su primavera-verano), con el Carnaval en febrero como gran reclamo. El nordeste luce casi todo el año.' },
      { q: '¿Necesito visado?', a: 'No para turismo: los españoles pueden estar hasta 90 días solo con el pasaporte.' },
    ],
    paperwork: ['Pasaporte en vigor', 'Sin visado para turismo (hasta 90 días)', 'Seguro de viaje muy recomendable', 'Vacuna de fiebre amarilla recomendada para Amazonas'],
    visa: 'No requerido hasta 90 días (turismo)',
    internet: 'Bueno en ciudades · eSIM recomendada',
    difficultyNote: 'Media: enorme, vibrante y acogedor, pero se habla portugués y conviene informarse de la seguridad en las grandes ciudades.',
    english: 'Se habla portugués; poco inglés. Con español te entiendes a medias.',
    budgetLevels: { mochilero: 35, normal: 70, comodo: 140, lujo: 300 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'mid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'Río de Janeiro', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/500px-Cidade_Maravilhosa.jpg',
        fact: 'La llaman "Cidade Maravilhosa" y su Cristo Redentor es una de las 7 Maravillas del mundo moderno.',
        sights: [
          { name: 'Cristo Redentor del Corcovado' },
          { name: 'Pan de Azúcar en teleférico' },
          { name: 'Playas de Copacabana e Ipanema' },
          { name: 'Barrio bohemio de Santa Teresa' },
        ],
      },
      {
        name: 'Salvador de Bahía', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Salvador_BA_%28cropped%29_2.jpg/500px-Salvador_BA_%28cropped%29_2.jpg',
        fact: 'Es el corazón afrobrasileño del país: cuna de la capoeira y del candomblé.',
        sights: [
          { name: 'Centro histórico del Pelourinho' },
          { name: 'Capoeira y música en directo' },
          { name: 'Iglesias barrocas doradas' },
          { name: 'Playas de Bahía' },
        ],
      },
      {
        name: 'Amazonas', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Amazon17_%285641020319%29.jpg/500px-Amazon17_%285641020319%29.jpg',
        fact: 'La selva amazónica es la mayor del mundo y produce buena parte del oxígeno del planeta.',
        sights: [
          { name: 'Navegar el río Amazonas' },
          { name: 'Encuentro de las aguas (Manaos)' },
          { name: 'Fauna y flora únicas' },
          { name: 'Lodges en plena selva' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Brasil', url: 'https://www.visitbrasil.com/es/' },
      { label: 'Embajada de España en Brasil', url: 'https://www.exteriores.gob.es/Embajadas/brasilia' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'india', name: 'India', code: 'in',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1280px-Taj_Mahal_%28Edited%29.jpeg',
    imageAlt: 'Taj Mahal, Agra, India',
    capital: 'Nueva Delhi', currency: 'Rupia india (INR)', language: 'Hindi e inglés', plug: 'Tipo C/D/M (230 V)', tz: 'UTC+5:30',
    budget: 'Bajo', bestMonths: 'Octubre-Marzo',
    difficulty: 'Alta', duration: '15-21 días',
    tags: ['Cultura', 'Espiritual', 'Aventura', 'Barato', 'Gastronómico'],
    summary: 'El Taj Mahal, palacios de marajás, el Ganges sagrado, especias, colores y una espiritualidad que lo impregna todo. India es un viaje que abruma los sentidos y no deja indiferente a nadie.',
    opinion:
      'India no se visita, se siente. Es intensa hasta decir basta: colores, olores, ruido, multitudes y una belleza brutal conviviendo con el caos. El Taj Mahal al amanecer pone los pelos de punta, y Varanasi, a orillas del Ganges, es de los lugares más espirituales y sobrecogedores que verás. Mi consejo: ve con la mente muy abierta, sin prisa y aceptando que nada sale según el plan. No es un viaje cómodo, pero sí de los que te cambian. Mejor si no es tu primer gran viaje.',
    faq: [
      { q: '¿Cuántos días para India?', a: 'Con 15 días haces el Triángulo de Oro (Delhi, Agra, Jaipur) y sumas Varanasi o Kerala. El país es inmenso: elige una región.' },
      { q: '¿Cuándo es mejor ir?', a: 'De octubre a marzo, cuando el calor afloja. Evita mayo-junio (calor extremo) y el monzón (julio-septiembre).' },
      { q: '¿Necesito visado?', a: 'Sí: hay que tramitar el e-Visa online antes de viajar (es de pago y sencillo).' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'e-Visa obligatorio (online, de pago)', 'Seguro de viaje imprescindible', 'Vacunas recomendadas: consulta a tu centro de vacunación'],
    visa: 'e-Visa obligatorio (online, de pago)',
    internet: 'Bueno en ciudades · eSIM recomendada',
    difficultyNote: 'Alta: un país que abruma los sentidos (caos, multitudes, contrastes brutales). Increíble, pero exige paciencia, estómago y mente muy abierta.',
    english: 'El inglés es cooficial y muy útil para moverte y entenderte.',
    budgetLevels: { mochilero: 20, normal: 45, comodo: 95, lujo: 230 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'mid' },
      { m: 'May', r: 'avoid' }, { m: 'Jun', r: 'avoid' }, { m: 'Jul', r: 'avoid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'mid' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'Triángulo de Oro', days: '6-7 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/500px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg',
        fact: 'El Taj Mahal se construyó como mausoleo de amor y cambia de color según la luz del día.',
        sights: [
          { name: 'Taj Mahal al amanecer (Agra)' },
          { name: 'Fuerte Amber y Hawa Mahal (Jaipur)' },
          { name: 'Mercados y templos de Delhi' },
          { name: 'Ciudad fantasma de Fatehpur Sikri' },
        ],
      },
      {
        name: 'Varanasi y el Ganges', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg/500px-Varanasi%2C_India%2C_Ghats%2C_Cremation_ceremony_in_progress.jpg',
        fact: 'Es una de las ciudades habitadas más antiguas del mundo y la más sagrada del hinduismo.',
        sights: [
          { name: 'Ceremonia del Ganga Aarti' },
          { name: 'Amanecer en barca por el Ganges' },
          { name: 'Los ghats junto al río' },
          { name: 'Ambiente espiritual único' },
        ],
      },
      {
        name: 'Kerala', days: '4-5 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Boathouse_%287063399547%29.jpg/500px-Boathouse_%287063399547%29.jpg',
        fact: 'Sus "backwaters" son una red de canales y lagunas que se recorren en casa-barca.',
        sights: [
          { name: 'Casa-barca por los backwaters' },
          { name: 'Plantaciones de té en Munnar' },
          { name: 'Playas de Varkala' },
          { name: 'Tratamientos de ayurveda' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de India', url: 'https://www.incredibleindia.gov.in/' },
      { label: 'Embajada de España en India', url: 'https://www.exteriores.gob.es/Embajadas/nuevadelhi' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'alemania', name: 'Alemania', code: 'de',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/1280px-Schloss_Neuschwanstein_2013.jpg',
    imageAlt: 'Castillo de Neuschwanstein, Baviera',
    capital: 'Berlín', currency: 'Euro (EUR)', language: 'Alemán', plug: 'Tipo C/F (230 V)', tz: 'UTC+1',
    budget: 'Medio-alto', bestMonths: 'Mayo-Septiembre (y Navidad por los mercadillos)',
    difficulty: 'Fácil', duration: '7-12 días',
    tags: ['Ciudades', 'Cultura', 'Historia', 'Naturaleza', 'Cerveza'],
    summary: 'Castillos de cuento, la historia viva de Berlín, las cervecerías de Múnich, la Selva Negra y mercadillos navideños mágicos. Alemania combina ciudades potentes con naturaleza y una organización impecable.',
    opinion:
      'Alemania sorprende por lo variada que es. Berlín es puro presente y pasado a la vez: arte alternativo, historia del Muro y una energía única. Múnich es la cara más tradicional, con sus cervecerías y los Alpes al lado, y el castillo de Neuschwanstein parece sacado de Disney (de hecho, lo inspiró). Mi consejo: combina una ciudad grande con naturaleza (Baviera o la Selva Negra) y, si puedes, ve en Navidad por los mercadillos, que son mágicos. Todo funciona como un reloj, así que viajar es facilísimo.',
    faq: [
      { q: '¿Cuántos días para Alemania?', a: 'Con 7-8 días ves Berlín y Múnich con Baviera. Para sumar Selva Negra o el Rin, mejor 10-12.' },
      { q: '¿Cuándo es mejor ir?', a: 'De mayo a septiembre por el buen tiempo, o en diciembre por los mercadillos de Navidad (eso sí, con frío).' },
      { q: '¿Hace falta visado?', a: 'No: Alemania está en Schengen, con el DNI español en vigor basta.' },
    ],
    paperwork: ['DNI o pasaporte en vigor (Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI, Schengen)',
    internet: 'Excelente · roaming UE sin coste extra',
    difficultyNote: 'Muy fácil: ordenada, segura y con un transporte público impecable. Solo el idioma, pero con inglés te apañas de sobra.',
    english: 'Mucho inglés en las ciudades, sobre todo entre los jóvenes.',
    budgetLevels: { mochilero: 60, normal: 110, comodo: 190, lujo: 360 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Berlín', days: '3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/500px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg',
        fact: 'Tiene más puentes que Venecia y una escena alternativa de las más vibrantes de Europa.',
        sights: [
          { name: 'Puerta de Brandeburgo' },
          { name: 'Restos del Muro (East Side Gallery)' },
          { name: 'Isla de los Museos' },
          { name: 'Cúpula del Reichstag' },
        ],
      },
      {
        name: 'Múnich y Baviera', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/500px-Stadtbild_M%C3%BCnchen.jpg',
        fact: 'Su Oktoberfest es la mayor fiesta de la cerveza del mundo: más de 6 millones de visitantes.',
        sights: [
          { name: 'Castillo de Neuschwanstein' },
          { name: 'Plaza Marienplatz' },
          { name: 'Cervecerías tradicionales' },
          { name: 'Excursión a los Alpes bávaros' },
        ],
      },
      {
        name: 'Selva Negra', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Blick_vom_Hohfelsen.jpg/500px-Blick_vom_Hohfelsen.jpg',
        fact: 'Inspiró los cuentos de los hermanos Grimm y es la cuna de la tarta Selva Negra.',
        sights: [
          { name: 'Pueblos de cuento (Triberg)' },
          { name: 'Rutas de senderismo entre bosques' },
          { name: 'Probar la tarta Selva Negra' },
          { name: 'Ruta Romántica' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Alemania', url: 'https://www.germany.travel/es/' },
      { label: 'Embajada de España en Alemania', url: 'https://www.exteriores.gob.es/Embajadas/berlin' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'paises-bajos', name: 'Países Bajos', code: 'nl',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/KinderdijkMolens02.jpg/1280px-KinderdijkMolens02.jpg',
    imageAlt: 'Molinos de Kinderdijk, Países Bajos',
    capital: 'Ámsterdam', currency: 'Euro (EUR)', language: 'Neerlandés', plug: 'Tipo C/F (230 V)', tz: 'UTC+1',
    budget: 'Medio-alto', bestMonths: 'Abril-Septiembre (tulipanes en abril)',
    difficulty: 'Fácil', duration: '4-6 días',
    tags: ['Ciudades', 'Cultura', 'En bici', 'Arte', 'En pareja'],
    summary: 'Canales de cuento, molinos, campos de tulipanes, arte de los grandes maestros y una vida en bici envidiable. Los Países Bajos son compactos, cómodos y de los destinos más fáciles y bonitos de Europa.',
    opinion:
      'Países Bajos es comodidad y encanto a partes iguales. Ámsterdam enamora con sus canales, sus casas estrechas inclinadas y su ambiente liberal y relajado; se recorre andando o en bici en nada. Mi consejo: no te quedes solo en la capital, que el país es pequeño y en un tren cortito llegas a Róterdam (moderna), a los molinos de Kinderdijk o a pueblos de postal como Giethoorn. Y si vas en abril, los campos de tulipanes y el jardín de Keukenhof son un espectáculo. Todo facilísimo y con un inglés perfecto.',
    faq: [
      { q: '¿Cuántos días para los Países Bajos?', a: 'Con 4-5 días ves Ámsterdam con calma y haces escapadas a Róterdam, los molinos o los tulipanes. El país es pequeño y todo está cerca.' },
      { q: '¿Cuándo es mejor ir?', a: 'De abril a septiembre. Abril es el mes de los tulipanes (Keukenhof); el verano es muy agradable.' },
      { q: '¿Hace falta visado?', a: 'No: están en Schengen, con el DNI español en vigor basta.' },
    ],
    paperwork: ['DNI o pasaporte en vigor (Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI, Schengen)',
    internet: 'Excelente · roaming UE sin coste extra',
    difficultyNote: 'De lo más fácil de Europa: todo cerca, en bici o en tren y con un inglés perfecto. Compacto y comodísimo.',
    english: 'Hablan un inglés casi perfecto. Cero barrera.',
    budgetLevels: { mochilero: 70, normal: 120, comodo: 200, lujo: 380 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Ámsterdam', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Imagen_de_los_canales_conc%C3%A9ntricos_en_%C3%81msterdam.png/500px-Imagen_de_los_canales_conc%C3%A9ntricos_en_%C3%81msterdam.png',
        fact: 'Tiene más bicicletas que habitantes y unos 100 km de canales con 1.500 puentes.',
        sights: [
          { name: 'Paseo en barco por los canales' },
          { name: 'Casa de Ana Frank' },
          { name: 'Rijksmuseum y Museo Van Gogh' },
          { name: 'Barrio del Jordaan' },
        ],
      },
      {
        name: 'Campos de tulipanes', days: '1 día',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/26Y_1599_2.jpg/500px-26Y_1599_2.jpg',
        fact: 'El jardín de Keukenhof planta más de 7 millones de bulbos cada año (abre solo en primavera).',
        sights: [
          { name: 'Jardines de Keukenhof (abril-mayo)' },
          { name: 'Campos de tulipanes en bici' },
          { name: 'Molinos tradicionales' },
          { name: 'Mercado de flores de Ámsterdam' },
        ],
      },
      {
        name: 'Róterdam y los pueblos', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/A_view_of_Rotterdam%2C_taken_from_the_roof_of_the_Maassilo%2C_Rotterdam%2C_The_Netherlands.jpg/500px-A_view_of_Rotterdam%2C_taken_from_the_roof_of_the_Maassilo%2C_Rotterdam%2C_The_Netherlands.jpg',
        fact: 'Róterdam se reconstruyó tras la guerra y hoy es una capital de la arquitectura moderna.',
        sights: [
          { name: 'Arquitectura futurista de Róterdam' },
          { name: 'Molinos de Kinderdijk' },
          { name: 'Pueblo de canales de Giethoorn' },
          { name: 'La Haya y Delft' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Países Bajos', url: 'https://www.holland.com/global/tourism.htm' },
      { label: 'Embajada de España en Países Bajos', url: 'https://www.exteriores.gob.es/Embajadas/lahaya' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'suiza', name: 'Suiza', code: 'ch',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Matterhorn_from_Domh%C3%BCtte_-_2.jpg/1280px-Matterhorn_from_Domh%C3%BCtte_-_2.jpg',
    imageAlt: 'El Cervino (Matterhorn), Suiza',
    capital: 'Berna', currency: 'Franco suizo (CHF)', language: 'Alemán, francés e italiano', plug: 'Tipo J (230 V)', tz: 'UTC+1',
    budget: 'Alto', bestMonths: 'Junio-Septiembre (verano) y Diciembre-Marzo (esquí)',
    difficulty: 'Fácil', duration: '5-8 días',
    tags: ['Naturaleza', 'Montaña', 'En pareja', 'Lujo', 'Aventura'],
    summary: 'Los Alpes más espectaculares, lagos turquesa, trenes panorámicos de leyenda y pueblos de chocolate. Suiza es naturaleza de postal con una organización perfecta… y precios a la altura de sus montañas.',
    opinion:
      'Suiza parece un cuento, en serio. Asomarte al Cervino, subir en tren a un glaciar o pasear junto a un lago de color imposible es de esas cosas que no olvidas. Todo funciona con una precisión asombrosa: los trenes salen al segundo y los paisajes se suceden uno más bonito que otro. Mi consejo: hazte algún tren panorámico (el Glacier Express es brutal) y combina ciudad con montaña. El único pero es el precio, porque es carísima; pero como naturaleza, pocas cosas le ganan en el mundo.',
    faq: [
      { q: '¿Cuántos días para Suiza?', a: 'Con 5-6 días combinas un par de ciudades (Zúrich, Lucerna) con los Alpes (Interlaken, Zermatt). Los trenes lo hacen todo fácil.' },
      { q: '¿Cuándo es mejor ir?', a: 'Verano (junio-septiembre) para senderismo y lagos; invierno (diciembre-marzo) para esquí y paisajes nevados.' },
      { q: '¿Hace falta visado?', a: 'No: Suiza está en Schengen (aunque no en la UE), con el DNI español en vigor basta.' },
    ],
    paperwork: ['DNI o pasaporte en vigor (Schengen)', 'Sin visado para turismo', 'Tarjeta Sanitaria Europea recomendada', 'Sin vacunas obligatorias'],
    visa: 'No requerido (DNI, Schengen)',
    internet: 'Excelente · eSIM recomendada (Suiza no entra en el roaming UE)',
    difficultyNote: 'Facilísima: trenes perfectos, segurísima y con paisajes de cuento. El único "pero" es el precio: es de los países más caros del mundo.',
    english: 'Mucho inglés, además de alemán, francés o italiano según la región.',
    budgetLevels: { mochilero: 90, normal: 160, comodo: 280, lujo: 500 },
    climate: [
      { m: 'Ene', r: 'mid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'mid' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'good' }, { m: 'Jul', r: 'good' }, { m: 'Ago', r: 'good' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'mid' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Zúrich', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Altstadt_Z%C3%BCrich_2015.jpg/500px-Altstadt_Z%C3%BCrich_2015.jpg',
        fact: 'Suele encabezar las listas de las ciudades con mejor calidad de vida del mundo.',
        sights: [
          { name: 'Casco antiguo junto al río Limmat' },
          { name: 'Lago de Zúrich' },
          { name: 'Avenida Bahnhofstrasse' },
          { name: 'Excursiones a la montaña' },
        ],
      },
      {
        name: 'Lucerna', days: '1-2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2009_08_24_06262_Lucerne.jpg/500px-2009_08_24_06262_Lucerne.jpg',
        fact: 'Su puente de la Capilla, de madera, es uno de los más antiguos de Europa.',
        sights: [
          { name: 'Puente de la Capilla (Kapellbrücke)' },
          { name: 'Lago de los Cuatro Cantones' },
          { name: 'Subir al monte Pilatus o Rigi' },
          { name: 'Monumento del León' },
        ],
      },
      {
        name: 'Interlaken y los Alpes', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Goldswil-Viadukt_Panorama_mit_Interlaken_im_Hintergrund_2.jpg/500px-Goldswil-Viadukt_Panorama_mit_Interlaken_im_Hintergrund_2.jpg',
        fact: 'Desde aquí se sube al Jungfraujoch, la estación de tren más alta de Europa.',
        sights: [
          { name: 'Jungfraujoch, la "cima de Europa"' },
          { name: 'Zermatt y el Cervino' },
          { name: 'Parapente sobre Interlaken' },
          { name: 'Tren panorámico Glacier Express' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Suiza', url: 'https://www.myswitzerland.com/es/' },
      { label: 'Embajada de España en Suiza', url: 'https://www.exteriores.gob.es/Embajadas/berna' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'cuba', name: 'Cuba', code: 'cu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/El_Capitolio_Havana_Cuba.jpg/1280px-El_Capitolio_Havana_Cuba.jpg',
    imageAlt: 'El Capitolio, La Habana, Cuba',
    capital: 'La Habana', currency: 'Peso cubano (CUP)', language: 'Español', plug: 'Tipo A/B/C (110/220 V)', tz: 'UTC-5',
    budget: 'Medio', bestMonths: 'Noviembre-Abril (estación seca)',
    difficulty: 'Media', duration: '10-14 días',
    tags: ['Playa', 'Cultura', 'Historia', 'Música', 'Vintage'],
    summary: 'Coches clásicos, música en cada esquina, mojitos, playas caribeñas y una Habana detenida en el tiempo. Cuba es pura autenticidad y ritmo, un viaje al pasado que enamora con su gente.',
    opinion:
      'Cuba es una cápsula del tiempo que hay que ver con la mente abierta. La Habana es pura magia decadente: coches de los 50, música por todas partes y un Malecón donde se vive la vida. Mi consejo: aléjate de los resorts y duerme en casas particulares para conocer a los cubanos de verdad, que son alegría pura pese a las dificultades. Combina La Habana, los valles de tabaco de Viñales y la colonial Trinidad. Eso sí, ve mentalizado: hay escasez de productos e internet va muy justo, pero forma parte de la experiencia.',
    faq: [
      { q: '¿Cuántos días para Cuba?', a: 'Con 10-12 días combinas La Habana, Viñales, Trinidad y algo de playa (Varadero o Cayo). Las distancias son largas.' },
      { q: '¿Cuándo es mejor ir?', a: 'Estación seca, de noviembre a abril. Evita la temporada de huracanes (agosto-octubre).' },
      { q: '¿Necesito visado?', a: 'Sí: hace falta la "tarjeta de turista" (visado turístico), que se compra antes de viajar.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Tarjeta de turista obligatoria (de pago)', 'Seguro de viaje obligatorio', 'Lleva algo de efectivo: las tarjetas extranjeras fallan a menudo'],
    visa: 'Tarjeta de turista obligatoria (de pago)',
    internet: 'Muy limitado (wifi por tarjetas Nauta)',
    difficultyNote: 'Media: un país que parece detenido en el tiempo, con un encanto único pero también escasez de productos e internet muy limitado. Se habla español y la gente es pura música.',
    english: 'Se habla español; poco inglés. No lo necesitas.',
    budgetLevels: { mochilero: 35, normal: 65, comodo: 120, lujo: 240 },
    climate: [
      { m: 'Ene', r: 'good' }, { m: 'Feb', r: 'good' }, { m: 'Mar', r: 'good' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'mid' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'avoid' }, { m: 'Oct', r: 'avoid' }, { m: 'Nov', r: 'good' }, { m: 'Dic', r: 'good' },
    ],
    cityGuides: [
      {
        name: 'La Habana', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Havana_Cathedral_crop.jpg/500px-Havana_Cathedral_crop.jpg',
        fact: 'Por sus calles circulan miles de coches americanos de los años 50, aún en uso.',
        sights: [
          { name: 'Paseo en coche clásico descapotable' },
          { name: 'La Habana Vieja (Patrimonio)' },
          { name: 'El Malecón al atardecer' },
          { name: 'Mojitos y son cubano en directo' },
        ],
      },
      {
        name: 'Viñales', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Vi%C3%B1ales_Valley.jpg/500px-Vi%C3%B1ales_Valley.jpg',
        fact: 'Aquí se cultiva el mejor tabaco del mundo, entre formaciones rocosas llamadas "mogotes".',
        sights: [
          { name: 'Valle de Viñales y sus mogotes' },
          { name: 'Plantaciones y secaderos de tabaco' },
          { name: 'Paseos a caballo' },
          { name: 'Cuevas y miradores' },
        ],
      },
      {
        name: 'Trinidad', days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Trinidad_in_Kuba.jpg/500px-Trinidad_in_Kuba.jpg',
        fact: 'Su casco colonial empedrado es Patrimonio de la Humanidad, congelado en el siglo XIX.',
        sights: [
          { name: 'Casco colonial empedrado' },
          { name: 'Plaza Mayor y sus iglesias' },
          { name: 'Música en la Casa de la Trova' },
          { name: 'Playa de Ancón' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Cuba', url: 'https://www.cuba.travel/' },
      { label: 'Embajada de España en Cuba', url: 'https://www.exteriores.gob.es/Embajadas/lahabana' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'china', name: 'China', code: 'cn',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/1280px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg',
    imageAlt: 'La Gran Muralla China en Jinshanling',
    capital: 'Pekín', currency: 'Yuan (CNY)', language: 'Chino mandarín', plug: 'Tipo A/I/C (220 V)', tz: 'UTC+8',
    budget: 'Medio', bestMonths: 'Abril-Mayo y Septiembre-Octubre',
    difficulty: 'Alta', duration: '14-18 días',
    tags: ['Cultura', 'Historia', 'Ciudades', 'Aventura', 'Gastronómico'],
    summary: 'La Gran Muralla, los Guerreros de Terracota, megaciudades futuristas y 5.000 años de historia. China es un viaje monumental que mezcla templos milenarios con rascacielos imposibles, a una escala que abruma.',
    opinion:
      'China impone por su escala: todo es enorme, antiguo y a la vez ultramoderno. Caminar por la Gran Muralla o plantarte ante los Guerreros de Terracota es un viaje en el tiempo, y luego aterrizas en Shanghái y parece el futuro. Mi consejo: ve mentalizado de que hay barrera idiomática de verdad y que muchas apps de aquí no funcionan (necesitas VPN para Google, WhatsApp, etc.). Lleva todo descargado y algo de paciencia. No es el viaje más cómodo, pero la recompensa cultural es brutal.',
    faq: [
      { q: '¿Cuántos días para China?', a: 'Con 14 días ves Pekín, Xi\'an y Shanghái con calma, usando trenes de alta velocidad. El país es inmenso: elige una ruta.' },
      { q: '¿Cuándo es mejor ir?', a: 'Primavera (abril-mayo) y otoño (septiembre-octubre), con temperaturas suaves. Evita el invierno gélido del norte y el verano húmedo.' },
      { q: '¿Necesito visado?', a: 'España tiene exención de visado para estancias cortas, pero la normativa cambia: confirma la vigencia antes de viajar.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Exención de visado para estancias cortas (confirma vigencia)', 'VPN instalada ANTES de llegar (Google, WhatsApp están bloqueados)', 'Apps locales (mapas, pagos) descargadas'],
    visa: 'Exención de visado para estancias cortas (consulta vigencia)',
    internet: 'Restringido (Gran Cortafuegos) · eSIM/VPN recomendados',
    difficultyNote: 'Alta: fascinante e inmensa, pero con barrera idiomática real, internet censurado (necesitas VPN) y apps locales para casi todo. Vale mucho la pena, pero exige preparación.',
    english: 'Muy poco inglés; lleva apps de traducción descargadas de antemano.',
    budgetLevels: { mochilero: 35, normal: 70, comodo: 140, lujo: 300 },
    climate: [
      { m: 'Ene', r: 'avoid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'mid' }, { m: 'Ago', r: 'mid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'avoid' },
    ],
    cityGuides: [
      {
        name: 'Pekín', days: '3-4 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/The_Forbidden_City_-_View_from_Coal_Hill.jpg/500px-The_Forbidden_City_-_View_from_Coal_Hill.jpg',
        fact: 'La Gran Muralla mide más de 21.000 km: es la mayor construcción humana de la historia.',
        sights: [
          { name: 'Gran Muralla China' },
          { name: 'Ciudad Prohibida' },
          { name: 'Plaza de Tiananmen' },
          { name: 'Templo del Cielo y los hutongs' },
        ],
      },
      {
        name: "Xi'an", days: '2 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/51714-Terracota-Army.jpg/500px-51714-Terracota-Army.jpg',
        fact: 'Los Guerreros de Terracota son más de 8.000 soldados, todos con rostros distintos.',
        sights: [
          { name: 'Ejército de Guerreros de Terracota' },
          { name: 'Muralla antigua de la ciudad' },
          { name: 'Barrio musulmán y su comida' },
          { name: 'Gran Pagoda de la Oca Silvestre' },
        ],
      },
      {
        name: 'Shanghái', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg/500px-Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg',
        fact: 'Su torre es el segundo edificio más alto del mundo, con 632 metros.',
        sights: [
          { name: 'El Bund y el skyline de Pudong' },
          { name: 'Torre de Shanghái' },
          { name: 'Jardín clásico de Yuyuan' },
          { name: 'Vida nocturna y rascacielos' },
        ],
      },
    ],
    links: [
      { label: 'Embajada de España en China', url: 'https://www.exteriores.gob.es/Embajadas/pekin' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
  {
    slug: 'corea-del-sur', name: 'Corea del Sur', code: 'kr',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/%EA%B4%91%ED%99%94%EB%AC%B8_%EC%9B%94%EB%8C%80.jpg/1280px-%EA%B4%91%ED%99%94%EB%AC%B8_%EC%9B%94%EB%8C%80.jpg',
    imageAlt: 'Palacio Gyeongbokgung, Seúl',
    capital: 'Seúl', currency: 'Won (KRW)', language: 'Coreano', plug: 'Tipo C/F (220 V)', tz: 'UTC+9',
    budget: 'Medio-alto', bestMonths: 'Abril-Mayo (cerezos) y Septiembre-Octubre (otoño)',
    difficulty: 'Media', duration: '8-12 días',
    tags: ['Cultura', 'Ciudades', 'Gastronómico', 'Tecnología', 'K-pop'],
    summary: 'Palacios milenarios junto a rascacielos, K-pop, una gastronomía adictiva y una tecnología de otro mundo. Corea del Sur mezcla tradición y futuro como ningún otro país, y todo funciona a la perfección.',
    opinion:
      'Corea del Sur es el viaje de moda y se entiende perfectamente por qué. Seúl es pura energía: palacios con gente vestida de hanbok al lado de barrios hipertecnológicos, cafés monísimos y una comida callejera para chuparse los dedos. Mi consejo: aprovecha que es segurísima y comodísima (el metro y el internet son de otro planeta) para moverte sin miedo, y no te quedes solo en Seúl: Busan y la isla de Jeju merecen mucho. Si te va el K-pop, la gastronomía o la tecnología, te va a encantar.',
    faq: [
      { q: '¿Cuántos días para Corea?', a: 'Con 8-10 días ves Seúl a fondo y sumas Busan y/o la isla de Jeju. Los trenes de alta velocidad (KTX) lo hacen muy fácil.' },
      { q: '¿Cuándo es mejor ir?', a: 'Primavera (abril-mayo) por los cerezos en flor y otoño (septiembre-octubre) por los colores. Evita el monzón de julio-agosto.' },
      { q: '¿Necesito visado?', a: 'No para turismo, pero suele pedirse la autorización K-ETA online. Confirma la vigencia (a veces está exenta) antes de viajar.' },
    ],
    paperwork: ['Pasaporte con al menos 6 meses de validez', 'Autorización K-ETA online (confirma vigencia)', 'Sin visado para turismo (hasta 90 días)', 'Sin vacunas obligatorias'],
    visa: 'No requerido hasta 90 días (K-ETA según vigencia)',
    internet: 'Excelente (de los mejores del mundo) · eSIM recomendada',
    difficultyNote: 'Media: ultramoderna, segura y comodísima, con un transporte e internet brutales. Lo único, algo de barrera idiomática fuera de Seúl.',
    english: 'Algo de inglés en Seúl; menos fuera. Los carteles suelen llevar romanización.',
    budgetLevels: { mochilero: 45, normal: 85, comodo: 160, lujo: 320 },
    climate: [
      { m: 'Ene', r: 'avoid' }, { m: 'Feb', r: 'mid' }, { m: 'Mar', r: 'mid' }, { m: 'Abr', r: 'good' },
      { m: 'May', r: 'good' }, { m: 'Jun', r: 'mid' }, { m: 'Jul', r: 'avoid' }, { m: 'Ago', r: 'avoid' },
      { m: 'Sep', r: 'good' }, { m: 'Oct', r: 'good' }, { m: 'Nov', r: 'mid' }, { m: 'Dic', r: 'mid' },
    ],
    cityGuides: [
      {
        name: 'Seúl', days: '4-5 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Bukchon_Hanok_Village_01.jpg/500px-Bukchon_Hanok_Village_01.jpg',
        fact: 'Aquí conviven palacios de 600 años con uno de los skylines más tecnológicos del mundo.',
        sights: [
          { name: 'Palacio Gyeongbokgung' },
          { name: 'Aldea hanok de Bukchon' },
          { name: 'Myeongdong y Gangnam' },
          { name: 'Mercado de Gwangjang (comida)' },
        ],
      },
      {
        name: 'Busan', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Gamcheon_Houses%2C_2024.jpg/500px-Gamcheon_Houses%2C_2024.jpg',
        fact: 'Su aldea de Gamcheon es un laberinto de casas de colores en la ladera, "el Santorini coreano".',
        sights: [
          { name: 'Aldea cultural de Gamcheon' },
          { name: 'Templo Haedong Yonggungsa (junto al mar)' },
          { name: 'Playa de Haeundae' },
          { name: 'Mercado de pescado de Jagalchi' },
        ],
      },
      {
        name: 'Isla de Jeju', days: '2-3 días',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Hallasan_Above.jpg/500px-Hallasan_Above.jpg',
        fact: 'Es una isla volcánica Patrimonio de la Humanidad, el destino de luna de miel de los coreanos.',
        sights: [
          { name: 'Volcán Hallasan' },
          { name: 'Cráteres y cascadas' },
          { name: 'Costas y playas de lava' },
          { name: 'Senderos Olle junto al mar' },
        ],
      },
    ],
    links: [
      { label: 'Web oficial de turismo de Corea', url: 'https://spanish.visitkorea.or.kr/' },
      { label: 'Embajada de España en Corea', url: 'https://www.exteriores.gob.es/Embajadas/seul' },
      { label: 'Recomendaciones de viaje (Exteriores)', url: 'https://www.exteriores.gob.es/es/ServiciosAlCiudadano/Paginas/Recomendaciones-de-viaje.aspx' },
    ],
  },
];

export const countryBySlug = (slug: string) => COUNTRIES.find((c) => c.slug === slug);
