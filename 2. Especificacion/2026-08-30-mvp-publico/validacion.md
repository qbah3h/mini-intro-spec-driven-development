# Validación: MVP público

## Cómo verificar la implementación
- Ejecutar la aplicación con `npm run dev` y abrir la página pública.
- Confirmar que el listado muestra al menos un plato con nombre, descripción, precio e imagen.
- Agregar y quitar platos del carrito; verificar que el total se actualiza.
- Completar el formulario de pedido y confirmar que se genera un pedido.
- Verificar en SQLite que el pedido y sus ítems se guardan correctamente.
- Revisar que no haya errores de compilación ni errores de TypeScript.

## Criterios de integración
- Todos los commits de esta fase deben pasar en la rama `feature/2026-08-30-mvp-publico`.
- Merge a `master` solo cuando se cumplan los criterios de validación.
