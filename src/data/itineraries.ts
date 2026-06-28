/**
 * Itinerarios semilla de la cuenta oficial getcroquis (perfil público).
 * Se muestran como escaparate en las fichas de país (/destinos/[slug]) para
 * conectar el contenido SEO con itinerarios reales listos para copiar.
 *
 * Sincronizar a mano cuando se creen nuevos itinerarios en la cuenta getcroquis.
 * (code = ISO en minúsculas, igual que en COUNTRIES; slug = el del trip).
 */
export const ITIN_GRADIENTS: Record<string, string> = {
  brand: 'linear-gradient(135deg, #E6157F 0%, #C30F68 52%, #1a1020 100%)',
  sun:   'linear-gradient(135deg, #E6157F 0%, #b3204f 42%, #5b2e1e 100%)',
  deep:  'linear-gradient(135deg, #E6157F 0%, #7d1450 48%, #16203a 100%)',
  ocean: 'linear-gradient(135deg, #1e3a5f 0%, #2a6f97 50%, #61a5c2 100%)',
};

export type Itinerary = {
  code: string;
  slug: string;
  name: string;
  days: number;
  style: string;
  grad: keyof typeof ITIN_GRADIENTS;
};

export const ITINERARIES: Itinerary[] = [
  { code: 'jp', slug: 'japon-clasico-10-dias',   name: 'Japón clásico',   days: 10, style: 'En pareja',  grad: 'brand' },
  { code: 'jp', slug: 'japon-friki-8-dias',      name: 'Japón friki',     days: 8,  style: 'Solo',       grad: 'deep'  },
  { code: 'it', slug: 'italia-esencial-7-dias',  name: 'Italia esencial', days: 7,  style: 'En familia', grad: 'sun'   },
  { code: 'it', slug: 'italia-romantica-6-dias', name: 'Italia romántica',days: 6,  style: 'En pareja',  grad: 'sun'   },
  { code: 'us', slug: 'nueva-york-5-dias',       name: 'Nueva York',      days: 5,  style: 'En grupo',   grad: 'deep'  },
  { code: 'us', slug: 'costa-oeste-usa-10-dias', name: 'Costa Oeste USA', days: 10, style: 'En grupo',   grad: 'brand' },
  { code: 'fr', slug: 'paris-5-dias',            name: 'París',           days: 5,  style: 'En pareja',  grad: 'deep'  },
  { code: 'es', slug: 'andalucia-7-dias',        name: 'Andalucía',       days: 7,  style: 'En familia', grad: 'sun'   },
  { code: 'th', slug: 'tailandia-9-dias',        name: 'Tailandia',       days: 9,  style: 'En grupo',   grad: 'brand' },
  { code: 'gr', slug: 'grecia-7-dias',           name: 'Grecia',          days: 7,  style: 'En pareja',  grad: 'ocean' },
  { code: 'pt', slug: 'portugal-6-dias',         name: 'Portugal',        days: 6,  style: 'En pareja',  grad: 'deep'  },
  { code: 'ma', slug: 'marruecos-7-dias',        name: 'Marruecos',       days: 7,  style: 'En grupo',   grad: 'sun'   },
];

export const itinerariesFor = (code: string): Itinerary[] =>
  ITINERARIES.filter((i) => i.code === String(code || '').toLowerCase());
