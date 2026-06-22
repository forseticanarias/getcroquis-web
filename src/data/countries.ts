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
];

export const countryBySlug = (slug: string) => COUNTRIES.find((c) => c.slug === slug);
