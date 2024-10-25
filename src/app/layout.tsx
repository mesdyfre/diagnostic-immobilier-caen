import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Diagnostic Immobilier Caen - Expert certifié",
  description: "Expert en diagnostics immobiliers sur Caen et sa région. DPE, amiante, plomb, électricité, gaz, termites. Intervention rapide et devis gratuit.",
  generator: "Next.js",
  applicationName: "Diagnostic Immobilier Caen",
  referrer: "origin-when-cross-origin",
  keywords: ["diagnostic immobilier", "DPE", "amiante", "Caen", "Calvados", "expert immobilier"],
  authors: [{ name: "Meslin Freddy" }],
  creator: "Votre Nom",
  publisher: "Diagnostic Immobilier Caen",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Diagnostic Immobilier Caen - Expert certifié",
    description: "Expert en diagnostics immobiliers sur Caen et sa région. Interventions rapides et devis gratuit.",
    url: "https://diag-immo-caen.com",
    siteName: "Diagnostic Immobilier Caen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Diagnostic Immobilier Caen",
      },
    ],
    locale: "fr_FR",
    type: "website",
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
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}