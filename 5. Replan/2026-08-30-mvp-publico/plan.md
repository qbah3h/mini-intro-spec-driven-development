# Plan: MVP público

## Grupo 1 — Modelo de datos
1. Definir esquema de Prisma para platos con nombre, descripción, precio e imagen.
2. Configurar SQLite como base de datos local.

## Grupo 2 — Listado de platos
1. Crear ruta `/` (página pública) con listado de platos.
2. Renderizar tarjeta de plato con nombre, descripción, precio e imagen.
3. Crear componente `Footer` reutilizable e incluirlo en el layout público.
4. Agregar sección "Quiénes somos" en la página de inicio.
5. Generar imágenes de placeholder embebidas para evitar dependencias externas.
6. Cargar datos desde la base de datos vía Prisma.

## Grupo 3 — Carrito
1. Implementar carrito con contexto de estado en React.
2. Permitir agregar y quitar platos del carrito.
3. Mostrar resumen del carrito en la interfaz.

## Grupo 4 — Formulario de pedido
1. Crear formulario de pedido con datos del cliente (nombre, teléfono) y dirección de envío.
2. Validar campos obligatorios.
3. Calcular total del pedido a partir del carrito.

## Grupo 5 — Confirmación
1. Crear página de confirmación del pedido.
2. Guardar el pedido en la base de datos.
3. Mostrar número de pedido y resumen al cliente.
