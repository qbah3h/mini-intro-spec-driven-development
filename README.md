# Desarrollo Basado en Especificaciones (Spec-Driven Development)

Este repositorio contiene el código de acompañamiento para el mini curso de YouTube **"Spec-Driven Development"**. Cada carpeta numerada muestra el estado completo del proyecto **A La Orden** tal como debería verse al inicio de esa lección.

## Sobre el proyecto: A La Orden

A La Orden es una aplicación de pedidos a domicilio donde las personas descubren platos, los restaurantes los preparan y se envían a domicilio. A lo largo del curso construimos el producto usando un flujo de trabajo dirigido por especificaciones.

## Otros recursos

- [Prompts del curso](./prompts.md) — todos los prompts usados en cada lección, en un solo lugar.

## Cómo usar este repositorio

La forma más sencilla de seguir el curso es empezar en la carpeta **0. Base** y avanzar lección por lección, reconstruyendo el proyecto a medida que avanzas.

Cada carpeta numerada contiene una instantánea del proyecto **A La Orden** tal como debe lucir al inicio de esa lección. No necesitas copiarlas cada vez: están ahí para que puedas saltar a cualquier lección sin haber completado las anteriores. Si quieres comenzar desde una lección específica, copia esa carpeta a tu propio directorio de trabajo:

En macOS o Linux:

```bash
cp -r "1. Constitucion/" mi-ala-orden
cd mi-ala-orden
npm install
```

En Windows (PowerShell):

```powershell
Copy-Item -Recurse "1. Constitucion" mi-ala-orden
Set-Location mi-ala-orden
npm install
```

## Resumen de lecciones

| Carpeta | Lección | Estado inicial |
|---|---|---|
| [0. Base](./0.%20Base) | Introducción y base del proyecto | Requerimientos iniciales del producto |
| [1. Constitucion](./1.%20Constitucion) | Crear la Constitución | Especificaciones de misión, stack tecnológico y roadmap |
| [2. Especificacion](./2.%20Especificacion) | Especificación de la primera funcionalidad | Carpeta de especificación con plan, requerimientos y validación |
| [3. Implementacion](./3.%20Implementacion) | Implementación de la funcionalidad | Proyecto Next.js con el catálogo de platos comenzado |
| [4. Validacion](./4.%20Validacion) | Validación del trabajo | Código funcional listo para revisar y ajustar |
| [5. Replan](./5.%20Replan) | Replanificación | Tests, diseño responsive, changelog y skills del agente |
| [6. Final](./6.%20Final) | Estado final del curso | Proyecto con fase 1 completa y base lista para la siguiente fase |

## Otros directorios y archivos

- `prompts.md` — todos los prompts del curso en un solo archivo.
- `specs/` — documentos de la Constitución: `mision.md`, `tech-stack.md` y `roadmap.md`.
- `YYYY-MM-DD-nombre-funcionalidad/` — especificación de una funcionalidad con `plan.md`, `requerimientos.md` y `validacion.md`.
- `CHANGELOG.md` — registro de cambios del proyecto (a partir de la lección de Replan).
- `.devin/skills/` — skills reutilizables para el agente de código.

## Prerrequisitos

- Node.js (v18 o superior)
- Git
- Un agente de código (el curso puede mostrar Claude Code, Devin, Cursor u otro; el flujo es agnóstico)
- Un editor o IDE (VS Code, WebStorm, Cursor, Zed, Neovim, etc.)

## Configuración del curso

1. Clona este repositorio localmente:

```bash
git clone <URL_DEL_REPOSITORIO>
cd mini-intro-spec-driven-development
```

2. Si vas a seguir el curso desde el inicio, copia la carpeta `1. Constitucion/` a tu propio directorio de trabajo e instala las dependencias:

```bash
cp -r "1. Constitucion/" mi-ala-orden
cd mi-ala-orden
npm install
```

En Windows (PowerShell):

```powershell
Copy-Item -Recurse "1. Constitucion" mi-ala-orden
Set-Location mi-ala-orden
npm install
```

3. Si prefieres empezar desde otra lección, copia la carpeta correspondiente y ejecuta `npm install`.

Una vez tengas el repo clonado, tu editor favorito y un agente de código instalado, estás listo para seguir el curso.
