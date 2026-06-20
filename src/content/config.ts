import { defineCollection, z } from 'astro:content';

// Colección de guías: cada artículo es un .md en src/content/guias/.
// Para publicar uno nuevo: crea el archivo, rellena el frontmatter y listo.
const guias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    emoji: z.string().default('🧭'),
    order: z.number().default(100),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guias };
