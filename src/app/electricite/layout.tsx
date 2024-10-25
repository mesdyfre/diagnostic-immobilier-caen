import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnostic Électrique Caen | Expert en diagnostic immobilier',
  description: 'Expert en diagnostic électrique à Caen et dans le Calvados. Intervention rapide, devis gratuit. Vérification aux normes de votre installation électrique par un professionnel certifié.',
  keywords: 'diagnostic électrique Caen, diagnostic immobilier Caen, expert électricité Caen, norme électrique Calvados, installation électrique diagnostic, vérification électrique Normandie',
  openGraph: {
    title: 'Diagnostic Électrique Caen | Expert en diagnostic immobilier',
    description: 'Expert certifié en diagnostic électrique à Caen. Intervention rapide dans tout le Calvados. Diagnostics immobiliers aux normes pour vente et location.',
    locale: 'fr_FR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://diag-immo-caen.fr/electricite'
  },
}

export default function ElectriciteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
