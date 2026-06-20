import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// Sitio de contenido + SEO de getcroquis. Salida estática (HTML real para Google),
// casi sin JavaScript → rapidísimo. Adaptador de Vercel para servir bien TODAS
// las rutas (incluidas las anidadas /guias/...).
export default defineConfig({
  site: 'https://getcroquis.com',
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind()],
});
