import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DPE Caen - Diagnostic de Performance Énergétique | Diag Immo Caen',
  description: 'Expert en DPE à Caen. Réalisez votre Diagnostic de Performance Énergétique avec un professionnel certifié. Intervention rapide dans le Calvados.',
  keywords: 'DPE, diagnostic performance énergétique, Caen, étiquette énergétique, bilan énergétique, économies énergie, Calvados',
}

export default function DPELayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
