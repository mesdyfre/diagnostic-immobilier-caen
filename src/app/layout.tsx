import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/ui/header'

const inter = Inter({ subsets: ['latin'] })

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), // Changer en production
  title: {
    template: '%s | Diag Immo Caen',
    default: 'Diagnostics Immobiliers Caen - Diag Immo Caen',
  },
  description: 'Expert en diagnostics immobiliers à Caen et dans le Calvados. DPE, Amiante, Plomb, Electricité, Loi Carrez. Intervention rapide et devis gratuit.',
  keywords: ['diagnostic immobilier', 'DPE', 'amiante', 'plomb', 'électricité', 'loi carrez', 'Caen', 'Calvados'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Diag Immo Caen',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {/* En-tête avec navigation */}
          <Header />

          {/* Bannière d&apos;information */}
          <div className="bg-[#0056b3] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
              <div className="flex justify-between items-center">
                <p className="text-sm">
                  Intervention rapide dans tout le Calvados
                </p>
                <a 
                  href="/devis"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-[#0056b3] bg-white hover:bg-gray-50"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <main>
            {children}
          </main>

          {/* Pied de page */}
          <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Contact */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Contact
                  </h3>
                  <div className="mt-4 space-y-4">
                    <p className="text-base text-gray-500">
                      Freddy Meslin<br />
                      Expert en diagnostics immobiliers
                    </p>
                    <p className="text-base text-gray-500">
                      <a href="tel:0766669948" className="hover:text-[#0056b3]">
                        07.66.66.99.48
                      </a>
                    </p>
                    <p className="text-base text-gray-500">
                      <a href="mailto:contact@diag-immo-caen.fr" className="hover:text-[#0056b3]">
                        contact@diag-immo-caen.fr
                      </a>
                    </p>
                  </div>
                </div>

                {/* Zone d&apos;intervention */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Zone d&apos;intervention
                  </h3>
                  <div className="mt-4 space-y-4">
                    <p className="text-base text-gray-500">
                      Caen et agglomération<br />
                      Tout le Calvados
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Nos diagnostics
                  </h3>
                  <nav className="mt-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="/diagnostics/dpe" className="text-base text-gray-500 hover:text-[#0056b3]">
                          Diagnostic DPE
                        </a>
                      </li>
                      <li>
                        <a href="/diagnostics/amiante" className="text-base text-gray-500 hover:text-[#0056b3]">
                          Diagnostic Amiante
                        </a>
                      </li>
                      <li>
                        <a href="/diagnostics/electricite" className="text-base text-gray-500 hover:text-[#0056b3]">
                          Diagnostic Électricité
                        </a>
                      </li>
                      <li>
                        <a href="/diagnostics/plomb" className="text-base text-gray-500 hover:text-[#0056b3]">
                          Diagnostic Plomb
                        </a>
                      </li>
                      <li>
                        <a href="/diagnostics/carrez" className="text-base text-gray-500 hover:text-[#0056b3]">
                          Loi Carrez
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                {/* Informations légales */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Informations légales
                  </h3>
                  <nav className="mt-4">
                    <ul className="space-y-4">
                      <li>
                        <a href="/mentions-legales" className="text-base text-gray-500 hover:text-[#0056b3]">
                          Mentions légales
                        </a>
                      </li>
                      <li>
                        <a href="/politique-confidentialite" className="text-base text-gray-500 hover:text-[#0056b3]">
                          Politique de confidentialité
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              {/* Copyright */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-base text-gray-400 text-center">
                  © {new Date().getFullYear()} Diag Immo Caen. Tous droits réservés.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}