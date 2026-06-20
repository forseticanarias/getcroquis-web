import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';

// Sitemap propio (endpoint estático). Evita el bug de @astrojs/sitemap y nos da
// control total. Se regenera en cada build con las guías que haya.
export const GET: APIRoute = async () => {
  const guias = await getCollection('guias', ({ data }) => !data.draft);
  const paths = ['', 'guias', ...guias.map((g) => `guias/${g.slug}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE.url}/${p}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
