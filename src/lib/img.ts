/**
 * Imágenes al tamaño JUSTO (rápidas y sin gastar batería).
 *
 * Las fotos de Wikimedia son thumbnails cuyo ancho va en la URL
 * (…/1280px-Foo.jpg). El servicio de Wikimedia genera CUALQUIER ancho al
 * vuelo y lo cachea en su CDN, así que pedimos el tamaño en que se ve la
 * imagen —no 1280px para una tarjeta de 300px—. Menos datos = carga casi
 * instantánea y menos CPU al decodificar (batería).
 */

/** Cambia el ancho del thumbnail de Wikimedia (deja intactas otras URLs). */
export function wikiThumb(url?: string, width = 640): string | undefined {
  if (!url) return url;
  return url.replace(/\/\d+px-/, `/${width}px-`);
}

/** srcset responsive: el navegador elige el ancho según pantalla y densidad. */
export function wikiSrcset(url?: string, widths: number[] = [400, 640, 960]): string | undefined {
  if (!url || !/\/\d+px-/.test(url)) return undefined;
  return widths.map((w) => `${wikiThumb(url, w)} ${w}w`).join(', ');
}
