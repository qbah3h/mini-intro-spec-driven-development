export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t px-4 py-4 text-center text-sm text-foreground/70">
      <p>© {year} A la Orden. Todos los derechos reservados.</p>
    </footer>
  );
}
