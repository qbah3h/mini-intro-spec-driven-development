# Diseño responsive

La interfaz de A la Orden debe verse y usarse bien en dispositivos móviles, tablets y escritorio.

## Principios

- **Mobile-first**: estilos base para pantallas pequeñas, con breakpoints `sm`, `md` y `lg` de Tailwind para pantallas mayores.
- **Viewport correcto**: meta viewport configurado para un escalado apropiado en móviles.
- **Contenedores con padding horizontal**: evitar que el contenido toque los bordes de la pantalla.
- **Evitar desbordamientos**: usar `min-w-0`, `break-words` y layouts flexibles para textos y elementos largos.
- **Tipografía fluida**: títulos y textos principales cambian de tamaño según el breakpoint.

## Breakpoints (Tailwind v4)

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## Comportamientos clave

- **Menú**: una columna en móvil, dos en tablet (`sm`), tres en escritorio (`lg`).
- **Carrito y formulario**: se apilan bajo el menú en móvil y aparecen a un costado en escritorio (`lg`).
- **Formularios**: inputs de ancho completo con texto que no desborde.
- **Confirmación de pedido**: contenedor centrado con padding y textos que se ajustan al ancho.
