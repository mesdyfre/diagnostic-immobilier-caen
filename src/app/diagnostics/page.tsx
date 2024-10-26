import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, Search, Zap, Paintbrush, Ruler, Square, AlertTriangle, Bug, Flame } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diagnostics Immobiliers Caen - Expert certifié',
  description: 'Tous les diagnostics immobiliers à Caen : DPE, Amiante, Électricité, Gaz, Plomb, Termites, ERP, Loi Carrez, Loi Boutin. Expert certifié intervenant dans tout le Calvados.',
}

const diagnostics = [
  {
    href: '/diagnostics/dpe',
    title: 'DPE',
    description: 'Diagnostic de Performance Énergétique obligatoire pour la vente et la location',
    icon: Home,
  },
  {
    href: '/diagnostics/amiante',
    title: 'Amiante',
    description: 'Repérage des matériaux contenant de l\'amiante',
    icon: Search,
  },
  {
    href: '/diagnostics/electricite',
    title: 'Électricité',
    description: 'Vérification de l\'installation électrique',
    icon: Zap,
  },
  {
    href: '/diagnostics/gaz',
    title: 'Gaz',
    description: 'Contrôle de sécurité des installations de gaz',
    icon: Flame,
  },
  {
    href: '/diagnostics/plomb',
    title: 'Plomb',
    description: 'Détection de la présence de plomb dans les peintures',
    icon: Paintbrush,
  },
  {
    href: '/diagnostics/termites',
    title: 'Termites',
    description: 'Détection de la présence de termites et autres insectes xylophages',
    icon: Bug,
  },
  {
    href: '/diagnostics/carrez',
    title: 'Loi Carrez',
    description: 'Mesurage certifié de la surface habitable selon la loi Carrez',
    icon: Ruler,
  },
  {
    href: '/diagnostics/boutin',
    title: 'Loi Boutin',
    description: 'Mesurage de la surface habitable pour la location',
    icon: Square,
  },
  {
    href: '/diagnostics/erp',
    title: 'ERP',
    description: 'État des Risques et Pollutions (naturels, miniers, technologiques)',
    icon: AlertTriangle,
  },
]

export default function DiagnosticsPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* En-tête */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          <span className="block">Nos Diagnostics Immobiliers</span>
          <span className="block text-[#0056b3] mt-2">à Caen et dans le Calvados</span>
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Expert certifié pour tous vos diagnostics immobiliers obligatoires
        </p>
      </div>

      {/* Grille des diagnostics */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {diagnostics.map((diagnostic) => {
          const Icon = diagnostic.icon
          return (
            <Link
              key={diagnostic.href}
              href={diagnostic.href}
              className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Icon className="h-8 w-8 text-[#0056b3]" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-[#0056b3]">
                    {diagnostic.title}
                  </h2>
                  <p className="mt-2 text-gray-500">
                    {diagnostic.description}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Section CTA */}
      <div className="mt-16 text-center">
        <div className="inline-flex rounded-md shadow">
          <a
            href="tel:0766669948"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[#0056b3] hover:bg-blue-700 rounded-md"
          >
            Devis gratuit au 07.66.66.99.48
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Expert certifié - Intervention rapide - Calvados
        </p>
      </div>
    </div>
  )
}