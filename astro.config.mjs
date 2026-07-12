import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Sitio de contenido + SEO de getcroquis. Salida estática (HTML real para Google),
// casi sin JavaScript → rapidísimo. Se despliega en Vercel como estático.
export default defineConfig({
  site: 'https://getcroquis.com',
  // Prefetch: precarga los enlaces al pasar el ratón / tocar (justo antes del
  // clic) → la navegación entre páginas del sitio se siente instantánea, sin
  // malgastar datos precargándolo TODO de golpe.
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  integrations: [tailwind()],
});
