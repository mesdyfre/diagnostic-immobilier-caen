import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnostic Loi Carrez Caen - Expert en mesurage Calvados',
  description: 'Expert en diagnostic Loi Carrez à Caen et dans le Calvados. Certification de surfaces pour vente en copropriété, mesurage professionnel. Intervention rapide.',
  keywords: 'diagnostic loi carrez, mesurage carrez, surface habitable, diagnostic immobilier caen, loi carrez calvados',
  openGraph: {
    title: 'Diagnostic Loi Carrez Caen - Expert en mesurage',
    description: 'Expert certifié en diagnostic Loi Carrez à Caen. Mesurage professionnel de surface pour vente en copropriété. Intervention dans tout le Calvados.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic Loi Carrez Caen - Expert en mesurage',
    description: 'Expert certifié en diagnostic Loi Carrez à Caen et dans le Calvados. Mesurage professionnel pour vente en copropriété.',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

export default function CarrezLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}