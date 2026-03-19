import type { Metadata } from "next";
import { Figtree, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "SAIMCO — Automatización industrial en México",
    template: "%s | SAIMCO",
  },
  description:
    "SAIMCO ofrece automatización industrial en México: integración de PLC/SCADA, control de procesos, digitalización e Industria 4.0 para manufactura.",
  keywords: [
    "automatización industrial",
    "automatizacion industrial",
    "automatización",
    "integración de PLC",
    "PLC",
    "SCADA",
    "control de procesos",
    "Industria 4.0",
    "IoT industrial",
    "manufactura",
    "México",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    locale: "es_MX",
    siteName: "SAIMCO",
    title: "SAIMCO — Automatización industrial en México",
    description:
      "Soluciones de automatización industrial en México: PLC/SCADA, control de procesos, digitalización e Industria 4.0.",
    images: [
      {
        url: "/saimco-full.png",
        width: 1200,
        height: 630,
        alt: "SAIMCO — Automatización industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAIMCO — Automatización industrial en México",
    description:
      "Soluciones de automatización industrial en México: PLC/SCADA, control de procesos, digitalización e Industria 4.0.",
    images: ["/saimco-full.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${figtree.variable} ${inter.variable}`}>
      <body className="saimco-body">{children}</body>
    </html>
  );
}
