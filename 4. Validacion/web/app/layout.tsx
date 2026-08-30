import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./components/cart-provider";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  title: "A la Orden",
  description: "Pedí tu comida de forma simple y confiable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-full bg-background text-foreground antialiased">
        <CartProvider>{children}</CartProvider>
        <Footer />
      </body>
    </html>
  );
}
