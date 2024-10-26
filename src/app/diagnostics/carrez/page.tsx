// app/diagnostics/carrez/page.tsx
import Image from 'next/image';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata = {
  title: 'Diagnostic Loi Carrez Caen - Expert certifié | Diag Immo Caen',
  description: 'Expert en diagnostic Loi Carrez à Caen et dans le Calvados. Mesurage professionnel pour vente d\'appartement, certification de surface habitable. Devis gratuit.',
  openGraph: {
    title: 'Diagnostic Loi Carrez Caen - Mesure Carrez certifiée',
    description: 'Expert en diagnostic Loi Carrez à Caen. Certification de surface pour vente en copropriété. Intervention rapide dans le Calvados.',
    images: [
      {
        url: '/images/diagnostic-loi-carrez.jpg',
        width: 1200,
        height: 630,
        alt: 'Diagnostic Loi Carrez Caen',
      },
    ],
  },
}

export default function CarrezPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-[#0056b3]">Diagnostic Loi Carrez</span>
              <span className="block text-2xl mt-3 text-gray-500">Caen et Calvados</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Certification professionnelle de la surface habitable de votre bien en copropriété
            </p>
          </div>
        </div>
      </div>

      {/* Contenu Principal */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section principale */}
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Le diagnostic Loi Carrez, une obligation légale
              </h2>
              <div className="prose max-w-none text-gray-500">
                <p>
                  La Loi Carrez (loi n° 96-1107 du 18 décembre 1996) impose un mesurage précis 
                  de la surface habitable pour toute vente d'un lot en copropriété. Ce diagnostic 
                  est obligatoire pour tous les lots de copropriété d'une surface supérieure à 8m².
                </p>
              </div>
            </section>

            {/* Points Clés */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Points essentiels du diagnostic
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                    Obligation légale
                  </h3>
                  <p className="text-gray-600">
                    Obligatoire pour toute vente en copropriété supérieure à 8m²
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                    Validité
                  </h3>
                  <p className="text-gray-600">
                    Pas de durée limitée sauf modification du bien
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                    Protection acheteur
                  </h3>
                  <p className="text-gray-600">
                    Garantie sur la surface réelle du bien
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                    Délai d'intervention
                  </h3>
                  <p className="text-gray-600">
                    Rapport fourni sous 24/48h
                  </p>
                </div>
              </div>
            </section>

            {/* Méthodologie */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Méthode de mesurage
              </h2>
              <div className="prose max-w-none text-gray-500">
                <p>
                  Le mesurage Loi Carrez prend en compte la surface au sol des locaux clos 
                  et couverts après déduction des éléments suivants :
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Murs, cloisons, marches et cages d'escaliers</li>
                  <li>Embrasures des portes et fenêtres</li>
                  <li>Surfaces dont la hauteur est inférieure à 1,80m</li>
                  <li>Gaines techniques et cheminées</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Barre latérale */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Contactez votre expert
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Freddy Meslin</p>
                    <p className="text-gray-600">Expert certifié en diagnostics immobiliers</p>
                  </div>
                  <div>
                    <a 
                      href="tel:0766669948"
                      className="block w-full bg-[#0056b3] text-white text-center py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      07.66.66.99.48
                    </a>
                  </div>
                  <div>
                    <a 
                      href="mailto:contact@diag-immo-caen.fr"
                      className="text-[#0056b3] hover:underline"
                    >
                      contact@diag-immo-caen.fr
                    </a>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Zone d'intervention
                    </h3>
                    <p className="text-gray-600">
                      Caen et tout le Calvados
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg mt-6">
                    <h3 className="font-medium text-gray-900 mb-2">
                      Nos engagements
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>✓ Devis gratuit</li>
                      <li>✓ Intervention rapide</li>
                      <li>✓ Rapport sous 24/48h</li>
                      <li>✓ Prix transparents</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
