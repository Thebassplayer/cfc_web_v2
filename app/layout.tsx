import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "CFC",
  description: "CFC - Cursos de Formación Continua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="grid h-screen w-screen grid-rows-[90px_auto]">
        <NavBar className="row-span-1 row-start-1" />
        <main className="row-span-11 row-start-2 h-full w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
