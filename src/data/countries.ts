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
