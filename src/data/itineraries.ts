/**
 * Itinerarios semilla de la cuenta oficial getcroquis (perfil público).
 * Se muestran como escaparate en la home y en las fichas de país (/destinos/[slug]).
 *
 * Portada = degradado corporativo Tirma (rosa→beige) para TODAS las plantillas.
 * No usamos fotos de fondo por defecto; si en el futuro se quiere una foto en
 * alguna, basta con rellenar su `image` (opcional). Sincronizar a mano al crear
 * nuevos itinerarios en la cuenta getcroquis.
 */

// Degradado corporativo Tirma (rosa → beige): portada por defecto de las plantillas.
export const ITIN_GRADIENT = 'linear-gradient(135deg, #E6157F 0%, #C30F68 45%, #F1E2B3 100%)';

export type Itinerary = {
  code: string;
  slug: string;
  name: string;
  days: number;
  style: string;
  image?: string; // opcional: solo si alguna plantilla lleva foto a propósito
};

export const ITINERARIES: Itinerary[] = [
  { code: 'jp', slug: 'japon-clasico-10-dias',   name: 'Japón clásico',    days: 10, style: 'En pareja'  },
  { code: 'jp', slug: 'japon-friki-8-dias',      name: 'Japón friki',      days: 8,  style: 'Solo'       },
  { code: 'it', slug: 'italia-esencial-7-dias',  name: 'Italia esencial',  days: 7,  style: 'En familia' },
  { code: 'it', slug: 'italia-romantica-6-dias', name: 'Italia romántica', days: 6,  style: 'En pareja'  },
  { code: 'us', slug: 'nueva-york-5-dias',       name: 'Nueva York',       days: 5,  style: 'En grupo'   },
  { code: 'us', slug: 'costa-oeste-usa-10-dias', name: 'Costa Oeste USA',  days: 10, style: 'En grupo'   },
  { code: 'fr', slug: 'paris-5-dias',            name: 'París',            days: 5,  style: 'En pareja'  },
  { code: 'es', slug: 'andalucia-7-dias',        name: 'Andalucía',        days: 7,  style: 'En familia' },
  { code: 'th', slug: 'tailandia-9-dias',        name: 'Tailandia',        days: 9,  style: 'En grupo'   },
  { code: 'gr', slug: 'grecia-7-dias',           name: 'Grecia',           days: 7,  style: 'En pareja'  },
  { code: 'pt', slug: 'portugal-6-dias',         name: 'Portugal',         days: 6,  style: 'En pareja'  },
  { code: 'ma', slug: 'marruecos-7-dias',        name: 'Marruecos',        days: 7,  style: 'En grupo'   },
];

export const itinerariesFor = (code: string): Itinerary[] =>
  ITINERARIES.filter((i) => i.code === String(code || '').toLowerCase());
