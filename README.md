# Prueba Lectiva

Base SvelteKit con arquitectura `feature-first/domain-first` para integrar la API de Rick and Morty.

## Run

```bash
npm install
npm run dev
```

## Check

```bash
npm run check
npm run build
```

## Deploy en GitHub Pages

El proyecto queda listo para publicar con GitHub Actions usando el workflow
`.github/workflows/deploy.yml`.

```bash
npm install
npm run build
```

Si el repositorio se publica como GitHub Pages de proyecto, el workflow usa
`/${nombre-del-repo}` como `base path`. Si despues lo mueves a un dominio
personalizado o a un sitio tipo `usuario.github.io`, ajusta la variable `BASE_PATH`
del workflow a `''`.

## Estructura

- `src/lib/core`: cliente HTTP, configuracion y adaptadores.
- `src/lib/entities`: tipos y mapeos de dominio.
- `src/lib/features`: features por caso de uso.
- `src/routes`: composicion de rutas y carga de datos.
