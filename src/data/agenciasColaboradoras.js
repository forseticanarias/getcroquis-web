/**
 * Agencias colaboradoras de getcroquis, por COMUNIDAD AUTÓNOMA (programa
 * fundador con exclusividad territorial: UNA agencia por comunidad). Este
 * archivo es la ÚNICA fuente: rellena AGENCIAS a medida que se dan de alta y
 * aparecen en su comunidad; el resto se muestra como "Disponible" (FOMO).
 *
 * Ficha de agencia (todo salvo `comunidad` y `nombre` es opcional):
 *   {
 *     comunidad: 'Castilla y León',        // debe coincidir con COMUNIDADES
 *     nombre:    'Viajes Ejemplo',
 *     ciudad:    'Ávila',
 *     direccion: 'C/ Mayor 1',
 *     web:       'https://…',               // su web o su perfil getcroquis.com/usuario
 *     logo:      'https://…/logo.png',      // si no hay, se usa la inicial
 *   }
 */
export const COMUNIDADES = [
  'Andalucía', 'Aragón', 'Asturias', 'Baleares', 'Canarias', 'Cantabria',
  'Castilla-La Mancha', 'Castilla y León', 'Cataluña', 'Comunidad Valenciana',
  'Extremadura', 'Galicia', 'La Rioja', 'Madrid', 'Murcia', 'Navarra',
  'País Vasco', 'Ceuta', 'Melilla',
];

// ⬇️ Rellena aquí. Empieza vacío; añade una ficha por cada agencia aprobada.
export const AGENCIAS = [
  // { comunidad: 'Castilla y León', nombre: 'Viajes Ejemplo', ciudad: 'Ávila', direccion: 'C/ Mayor 1', web: 'https://getcroquis.com/viajesejemplo', logo: '' },
];
