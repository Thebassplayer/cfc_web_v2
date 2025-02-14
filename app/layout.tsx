import type { Metadata } from "next";
import "./globals.css";
import DesktopNavBar from "@/components/DesktopNavBar/DesktopNavBar";
import MobileNavBar from "@/components/MobileNavBar/MobileNavBar";
import { Suspense } from "react";
import ContactModal from "@/components/ContactModal/ContactModal";

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
      <body className="grid h-screen w-screen grid-rows-[70px_auto] lg:grid-rows-[90px_auto]">
        <MobileNavBar className="row-span-1 row-start-1" />
        <DesktopNavBar className="row-span-1 row-start-1" />

        {children}
        <Suspense fallback={<>Cargando...</>}>
          <ContactModal />
        </Suspense>
      </body>
    </html>
  );
}
