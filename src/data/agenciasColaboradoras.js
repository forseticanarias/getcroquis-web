/**
 * Agencias colaboradoras de getcroquis, por provincia (programa fundador con
 * exclusividad territorial). Este archivo es la ÚNICA fuente: rellena AGENCIAS
 * a medida que se dan de alta y aparecen en su provincia; el resto se muestra
 * como "Disponible" (refuerza el FOMO territorial).
 *
 * Ficha de agencia (todos los campos salvo `provincia` y `nombre` son opcionales):
 *   {
 *     provincia: 'Ávila',                 // debe coincidir con la lista PROVINCIAS
 *     nombre:    'Viajes Ejemplo',
 *     ciudad:    'Ávila',
 *     direccion: 'C/ Mayor 1',
 *     web:       'https://…',             // su web o su perfil getcroquis.com/usuario
 *     logo:      'https://…/logo.png',    // si no hay, se usa la inicial
 *   }
 */
export const PROVINCIAS = [
  'Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz',
  'Baleares', 'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón',
  'Ciudad Real', 'Córdoba', 'A Coruña', 'Cuenca', 'Girona', 'Granada', 'Guadalajara',
  'Gipuzkoa', 'Huelva', 'Huesca', 'Jaén', 'León', 'Lleida', 'Lugo', 'Madrid', 'Málaga',
  'Murcia', 'Navarra', 'Ourense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja',
  'Salamanca', 'Santa Cruz de Tenerife', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
  'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Bizkaia', 'Zamora', 'Zaragoza',
];

// ⬇️ Rellena aquí. Empieza vacío; añade una ficha por cada agencia aprobada.
export const AGENCIAS = [
  // { provincia: 'Ávila', nombre: 'Viajes Ejemplo', ciudad: 'Ávila', direccion: 'C/ Mayor 1', web: 'https://getcroquis.com/viajesejemplo', logo: '' },
];
