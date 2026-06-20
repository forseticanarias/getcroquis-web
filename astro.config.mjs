import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Sitio de contenido + SEO de getcroquis. Salida estática (HTML real para Google),
// casi sin JavaScript → rapidísimo. Se despliega en Vercel como estático.
export default defineConfig({
  site: 'https://getcroquis.com',
  integrations: [tailwind()],
});
