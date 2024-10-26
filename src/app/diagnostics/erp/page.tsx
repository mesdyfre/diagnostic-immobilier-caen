import Image from 'next/image';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata = {
  title: 'Diagnostic ERP Caen - État des Risques et Pollutions | Diag Immo Caen',
  description: 'Expert en diagnostic ERP à Caen et dans le Calvados. État des Risques et Pollutions obligatoire pour vente et location. Devis gratuit et intervention rapide.',
  openGraph: {
    title: 'Diagnostic ERP Caen - État des Risques et Pollutions',
    description: 'Expert en diagnostic ERP à Caen. Évaluation complète des risques naturels, miniers, technologiques et pollution des sols. Intervention rapide dans le Calvados.',
    images: [
      {
        url: '/images/diagnostic-erp.jpg',
        width: 1200,
        height: 630,
        alt: 'Diagnostic ERP Caen',
      },
    ],
  }
}

export default function ErpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-white shadow">
        <div className="absolute inset-0">
          <Image
            src="/images/erp-hero.jpg"
            alt="Carte des risques naturels et technologiques"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0056b3]/80 to-transparent mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">État des Risques et Pollutions</span>
              <span className="block text-2xl mt-3 text-gray-100">Caen et Calvados</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Information complète sur les risques naturels, miniers, technologiques et pollution des sols
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Le diagnostic ERP, une obligation légale
              </h2>
              <div className="prose max-w-none text-gray-500">
                <p>
                  L&apos;État des Risques et Pollutions (ERP) est un document obligatoire qui doit être annexé 
                  à tout contrat de vente ou de location. Il informe les futurs acquéreurs ou locataires 
                  des risques auxquels le bien est exposé : naturels (inondation, séisme...), miniers, 
                  technologiques et pollution des sols.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Points essentiels du diagnostic
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                    Validité
                  </h3>
                  <p className="text-gray-600">
                    6 mois à compter de sa date d&apos;émission
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                    Obligation
                  </h3>
                  <p className="text-gray-600">
                    Vente et location (bail de plus de 6 mois)
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                    Couverture
                  </h3>
                  <p className="text-gray-600">
                    Tous types de biens immobiliers
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                    Délai
                  </h3>
                  <p className="text-gray-600">
                    Rapport sous 24/48h
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Risques évalués
              </h2>
              <div className="prose max-w-none text-gray-500">
                <p>
                  Le diagnostic ERP prend en compte l&apos;ensemble des risques suivants :
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Risques naturels : inondation, mouvement de terrain, séisme, avalanche, feux de forêt</li>
                  <li>Risques miniers : affaissement, effondrement, pollution des sols</li>
                  <li>Risques technologiques : industriels, nucléaires, transport de matières dangereuses</li>
                  <li>Pollution des sols : sites BASIAS, BASOL, SIS</li>
                  <li>Zone de sismicité</li>
                  <li>Zone à potentiel radon</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Cadre réglementaire
              </h2>
              <div className="prose max-w-none text-gray-500">
                <p>
                  L&apos;ERP est encadré par :
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Articles L.125-5 et R.125-23 à 27 du Code de l&apos;environnement</li>
                  <li>Arrêté du 13 juillet 2018 modifiant l&apos;arrêté du 13 octobre 2005</li>
                  <li>Arrêté du 18 décembre 2017 modifiant l&apos;arrêté du 19 mars 2013</li>
                </ul>
              </div>
            </section>
          </div>

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
                      Zone d&apos;intervention
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
      </div>
    </div>
  )
}
