/**
 * Imágenes de Wikimedia.
 *
 * ⚠️ IMPORTANTE (2026-07): Wikimedia ha empezado a RECHAZAR (HTTP 400) la
 * generación de miniaturas de anchos arbitrarios (medida anti-scraping / carga).
 * Solo sirve de forma fiable las miniaturas que YA tenía cacheadas —normalmente
 * el ancho que aparece en la propia URL guardada—. Pedir un ancho nuevo
 * (p.ej. 640px de una que era 1280px) devolvía 400 → foto rota en la landing.
 *
 * Por eso NO reescribimos el ancho: devolvemos la URL original tal cual (que sí
 * carga). Perdemos el redimensionado al vuelo, pero la foto se ve —fiabilidad
 * por encima de micro-optimización—. Si más adelante queremos aligerar imágenes
 * pesadas, se hace eligiendo a mano un ancho menor en `data/countries.ts` y
 * COMPROBANDO que Wikimedia lo sirve (200), no generándolo al vuelo.
 */

/** Devuelve la URL de Wikimedia tal cual (sin reescribir el ancho: Wikimedia rechaza anchos nuevos). */
export function wikiThumb(url?: string, _width = 640): string | undefined {
  return url;
}

/** Sin srcset: pedir varios anchos rompía (Wikimedia devuelve 400 en anchos no cacheados). */
export function wikiSrcset(_url?: string, _widths: number[] = [400, 640, 960]): string | undefined {
  return undefined;
}
