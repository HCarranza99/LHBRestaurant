# La H'ola Restaurantes Redesign

Rediseño conceptual premium para el restaurante salvadoreño La H'ola Restaurantes, construido como landing de una sola página con React + Vite.

Incluye una dirección visual editorial con hero cinematográfico, firma gastronómica, ritual de marca, navegación móvil tipo carta y barra de acciones rápidas para teléfono.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
```

El resultado queda en `dist/`, listo para desplegar en Cloudflare Pages, Vercel o Netlify.

## Estructura

- `src/components`: secciones del sitio.
- `src/data`: sucursales, platos, menú y promociones editables.
- `src/styles`: variables visuales y estilos globales.
- `src/assets/images`: carpeta preparada para reemplazar las imágenes remotas por fotografías propias.

## Imágenes

El concepto usa imágenes remotas libres como placeholders editoriales. Para producción, se recomienda colocar fotografías reales optimizadas en `src/assets/images` y actualizar las URLs en los archivos de `src/data` y componentes.
