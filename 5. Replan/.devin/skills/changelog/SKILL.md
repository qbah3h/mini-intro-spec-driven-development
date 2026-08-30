---
name: changelog
description: Actualiza changelog.md con los commits recientes agrupados por fecha
argument-hint: "[rama-base]"
triggers:
  - user
allowed-tools:
  - read
  - write
  - edit
  - exec
---

Antes de hacer merge, actualiza el archivo `changelog.md` en la raíz del proyecto con los commits del rango indicado.

Pasos:

1. Determina la rama base. Usa el argumento que te pasen, o `main` por defecto. Si no existe rama base, lista todo el historial.
2. Ejecuta `git log <rama-base>..HEAD --pretty=format:"%ad|%s" --date=short` para obtener los commits del rango. Si no hay rama base, ejecuta `git log --pretty=format:"%ad|%s" --date=short`.
3. Si `changelog.md` no existe, créalo. Si existe, léelo para evitar duplicados y detectar la última fecha registrada.
4. Agrupa los commits por fecha (`YYYY-MM-DD`).
5. Agrega un heading `## YYYY-MM-DD` por cada fecha que no esté en el changelog, con una viñeta `-` por cada mensaje de commit bajo ese heading.
6. Preserva el orden del más reciente al más antiguo dentro de cada sección y en el archivo.
7. No modifiques los mensajes de commit originales.
8. Si hiciste cambios, confirma con:

   ```powershell
   git add -A; git commit -m "Actualiza changelog [AI]"
   ```
