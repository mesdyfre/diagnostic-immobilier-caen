import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnostic Loi Boutin Caen - Mesurage location',
  description: 'Expert en diagnostic Loi Boutin à Caen et dans le Calvados. Mesurage professionnel de surface habitable pour location. Intervention rapide.',
  keywords: 'loi boutin, surface habitable, mesurage location, diagnostic immobilier caen, surface habitable calvados',
  openGraph: {
    title: 'Diagnostic Loi Boutin Caen - Surface habitable location',
    description: 'Expert certifié en diagnostic Loi Boutin à Caen. Mesurage professionnel pour location. Intervention dans tout le Calvados.',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic Loi Boutin Caen - Mesurage location',
    description: 'Expert en diagnostics Loi Boutin à Caen. Mesurage surface habitable pour location.',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
}

interface BoutinLayoutProps {
  children: React.ReactNode
}

export default function BoutinLayout({
  children,
}: BoutinLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Barre d'information spécifique Loi Boutin */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <p className="text-sm text-blue-700">
              <span className="font-medium">Important :</span> Obligatoire pour toute location en résidence principale
            </p>
            <a
              href="tel:0766669948"
              className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0056b3] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Devis gratuit
            </a>
          </div>
        </div>
      </div>

      {/* Points clés flottants */}
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow px-5 py-4 border-l-4 border-[#0056b3]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-[#0056b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Certifié</h3>
                <p className="text-sm text-gray-500">Expert agréé</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow px-5 py-4 border-l-4 border-[#0056b3]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-[#0056b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Rapide</h3>
                <p className="text-sm text-gray-500">Sous 24/48h</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow px-5 py-4 border-l-4 border-[#0056b3]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-[#0056b3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-gray-900">Tarif clair</h3>
                <p className="text-sm text-gray-500">Sans surprise</p>
              </div>
            </div>
          </div>
        </div>

        {children}
      </div>

      {/* Bannière de contact flottante sur mobile */}
      <div className="fixed bottom-0 inset-x-0 pb-2 sm:hidden">
        <div className="max-w-7xl mx-auto px-2">
          <div className="p-2 rounded-lg bg-[#0056b3] shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-blue-800">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <p className="ml-3 font-medium text-white truncate">
                  <span className="hidden md:inline">Besoin d'un diagnostic ?</span>
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="tel:0766669948"
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[#0056b3] bg-white hover:bg-gray-50"
                >
                  Appeler
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
