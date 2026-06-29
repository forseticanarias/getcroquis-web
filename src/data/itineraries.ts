/**
 * Itinerarios semilla de la cuenta oficial getcroquis (perfil público).
 * Se muestran como escaparate en la home y en las fichas de país (/destinos/[slug]).
 *
 * Cada itinerario tiene su PROPIA foto temática (`image`). El degradado Tirma
 * (rosa→beige) es solo el fallback si algún día falta foto.
 * Sincronizar a mano cuando se creen nuevos itinerarios en la cuenta getcroquis.
 */

// Degradado corporativo Tirma (rosa → beige): mismo fallback para todos sin foto.
export const ITIN_GRADIENT = 'linear-gradient(135deg, #E6157F 0%, #C30F68 45%, #F1E2B3 100%)';

export type Itinerary = {
  code: string;
  slug: string;
  name: string;
  days: number;
  style: string;
  image: string;
};

export const ITINERARIES: Itinerary[] = [
  { code: 'jp', slug: 'japon-clasico-10-dias',   name: 'Japón clásico',    days: 10, style: 'En pareja',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg/960px-Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg' },
  { code: 'jp', slug: 'japon-friki-8-dias',      name: 'Japón friki',      days: 8,  style: 'Solo',       image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Shibuya_Crossing%2C_Aerial.jpg/960px-Shibuya_Crossing%2C_Aerial.jpg' },
  { code: 'it', slug: 'italia-esencial-7-dias',  name: 'Italia esencial',  days: 7,  style: 'En familia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/1280px-Colosseo_2020.jpg' },
  { code: 'it', slug: 'italia-romantica-6-dias', name: 'Italia romántica', days: 6,  style: 'En pareja',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Venezia_aerial_view.jpg/960px-Venezia_aerial_view.jpg' },
  { code: 'us', slug: 'nueva-york-5-dias',       name: 'Nueva York',       days: 5,  style: 'En grupo',   image: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&w=1280&q=70' },
  { code: 'us', slug: 'costa-oeste-usa-10-dias', name: 'Costa Oeste USA',  days: 10, style: 'En grupo',   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/1280px-Canyon_River_Tree_%28165872763%29.jpeg' },
  { code: 'fr', slug: 'paris-5-dias',            name: 'París',            days: 5,  style: 'En pareja',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg' },
  { code: 'es', slug: 'andalucia-7-dias',        name: 'Andalucía',        days: 7,  style: 'En familia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/1280px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg' },
  { code: 'th', slug: 'tailandia-9-dias',        name: 'Tailandia',        days: 9,  style: 'En grupo',   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Railay_Beach_5.jpg/960px-Railay_Beach_5.jpg' },
  { code: 'gr', slug: 'grecia-7-dias',           name: 'Grecia',           days: 7,  style: 'En pareja',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/2011_Dimos_Thiras.png/1280px-2011_Dimos_Thiras.png' },
  { code: 'pt', slug: 'portugal-6-dias',         name: 'Portugal',         days: 6,  style: 'En pareja',  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Lisboa_-_Portugal_%2852597836992%29.jpg/1280px-Lisboa_-_Portugal_%2852597836992%29.jpg' },
  { code: 'ma', slug: 'marruecos-7-dias',        name: 'Marruecos',        days: 7,  style: 'En grupo',   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Chefchaouen_%2852189357475%29.jpg/1280px-Chefchaouen_%2852189357475%29.jpg' },
];

export const itinerariesFor = (code: string): Itinerary[] =>
  ITINERARIES.filter((i) => i.code === String(code || '').toLowerCase());
