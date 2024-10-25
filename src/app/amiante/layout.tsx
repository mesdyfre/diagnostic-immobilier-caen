import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnostic Amiante Caen | Expert certifié - Diag Immo Caen',
  description: 'Expert en diagnostic amiante à Caen. Intervention rapide pour le repérage amiante dans le Calvados. Devis gratuit pour votre diagnostic immobilier.',
  keywords: 'diagnostic amiante, repérage amiante, Caen, Calvados, expert amiante, diagnostic immobilier, recherche amiante, DTA',
}

export default function AmianteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
