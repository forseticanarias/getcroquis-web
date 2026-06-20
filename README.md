# getcroquis-web

Sitio de **contenido y SEO** de getcroquis (landing + blog de guías), hecho en
**Astro**. Estático, rapidísimo y orientado a posicionar en Google. La **app**
(red social + IA) vive aparte, en React — aquí NO hay app, solo contenido.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera /dist (HTML estático)
npm run preview  # sirve /dist para revisar el build
```

## Publicar una guía nueva (lo más común)

1. Crea un archivo en `src/content/guias/mi-guia.md`.
2. Rellena el frontmatter y escribe en Markdown:

   ```markdown
   ---
   title: "Título de la guía"
   description: Resumen para Google y para las tarjetas.
   emoji: 🧭
   order: 4
   updated: 2026-06-20
   ---

   Contenido en Markdown…
   ```
3. Sube el cambio a `dev`, revísalo en la preview de Vercel y, si está bien,
   fusiónalo a `main`. Aparecerá sola en la home, el listado y el sitemap.

> Si un título o descripción lleva dos puntos (`:`), ponlo entre comillas.

## Flujo producción / preproducción

- **`main`** → producción (getcroquis.com).
- **`dev`** (u otras ramas) → Vercel crea una **preview** automática para probar
  ANTES de tocar producción.

```
git checkout -b dev      # trabajar aquí
git push                 # Vercel da una URL de preview
# cuando esté probado:
git checkout main && git merge dev && git push   # va a producción
```

## Despliegue en Vercel (primera vez)

1. Sube este repo a GitHub.
2. En Vercel: **Add New → Project** → importa el repo. Framework: **Astro**
   (se detecta solo). Build: `npm run build`, output: `dist`.
3. Dominio: añade **getcroquis.com** a este proyecto. La app React se sirve bajo
   **/app** (rewrite) o en **app.getcroquis.com** (subdominio) — ver notas.
