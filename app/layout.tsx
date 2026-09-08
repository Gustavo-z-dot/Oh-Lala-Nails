import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import ClientScripts from "@/components/ClientScripts";
import StructuredData from "./structured-data";
import { Analytics } from "@vercel/analytics/next";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const BASE_URL = "https://ohlalanails.com";
const SITE_NAME = "Oh Lalá! Nails";
const TITLE_DEFAULT = "Oh Lalá! Nails | Uñas profesionales en La Paz, Canelones";
const DESCRIPTION_DEFAULT =
  "Oh Lalá! Nails, ubicado en La Paz, Canelones. Servicios de esmaltado, kapping, soft gel, esculpidas y retiro con atención personalizada. ¡Reservá tu cita!";
const OG_IMAGE = "/Portadas/Portada1.webp";

export const metadata: Metadata = {
  title: {
    default: TITLE_DEFAULT,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION_DEFAULT,
  keywords: [
    "uñas en La Paz",
    "manicura Canelones",
    "esmaltado",
    "kapping gel",
    "soft gel",
    "uñas esculpidas",
    "diseño de uñas",
    "Oh Lala Nails",
    "salón de uñas La Paz Uruguay",
  ],
  authors: [{ name: SITE_NAME }],
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_UY",
    siteName: SITE_NAME,
    url: BASE_URL,
    title: TITLE_DEFAULT,
    description: DESCRIPTION_DEFAULT,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Oh Lalá! Nails — Uñas profesionales en La Paz, Canelones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_DEFAULT,
    description: DESCRIPTION_DEFAULT,
    images: [OG_IMAGE],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Analytics />
        <StructuredData />
        {children}
        <ClientScripts />
      </body>
    </html>
  );
}
