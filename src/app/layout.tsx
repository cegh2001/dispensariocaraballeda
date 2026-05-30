import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dispensario Nuestra Senora de la Candelaria",
  description:
    "Centro de salud comunitario en Caraballeda con informacion de especialidades, precios, contacto y horarios de atencion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
