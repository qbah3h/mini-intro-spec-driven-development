# Estrategia de testing

El proyecto usa **Vitest** para validar la lógica crítica del código.

## Principios

- Probar primero la lógica pura: cálculos del carrito, helpers y funciones de negocio.
- Mantener los tests cerca del código (`*.test.ts` junto al archivo que prueban).
- Ejecutar `npm test` antes de entregar cambios para evitar regresiones.

## Tipos de tests

- **Unitarios**: validan funciones y helpers aislados, sin base de datos ni componentes.
- **Integración** (futuro): validan endpoints de la API con una base de datos de prueba.
- **E2E** (futuro): validan flujos completos del usuario en el navegador.

## Comandos

- `npm test`: ejecuta todos los tests en modo watch.
- `npx vitest run`: ejecuta los tests una sola vez (útil para CI).
