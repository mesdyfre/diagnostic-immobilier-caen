import Link from 'next/link';

export default function DPEPage() {
  // Tableau des étiquettes énergétiques
  const energyLabels = [
    { label: 'A', value: '≤ 50', color: 'bg-green-500' },
    { label: 'B', value: '51 à 90', color: 'bg-emerald-500' },
    { label: 'C', value: '91 à 150', color: 'bg-lime-500' },
    { label: 'D', value: '151 à 230', color: 'bg-yellow-500' },
    { label: 'E', value: '231 à 330', color: 'bg-orange-500' },
    { label: 'F', value: '331 à 450', color: 'bg-red-500' },
    { label: 'G', value: '> 450', color: 'bg-red-700' }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navigation fil d&apos;Ariane */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-3">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Diagnostic de Performance Énergétique</span>
          </div>
        </div>
      </div>

      {/* En-tête de page */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Diagnostic de Performance Énergétique (DPE)
          </h1>
          <p className="text-xl opacity-90">
            Évaluez la performance énergétique de votre bien immobilier
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Section principale */}
          <div className="md:col-span-2 space-y-8">
            {/* Qu&apos;est-ce que le DPE */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Qu&apos;est-ce que le DPE ?
              </h2>
              <p className="text-gray-700 mb-4">
                Le Diagnostic de Performance Énergétique (DPE) est un document qui informe sur la performance énergétique d&apos;un logement ou d&apos;un bâtiment, en évaluant sa consommation d&apos;énergie et son impact en termes d&apos;émissions de gaz à effet de serre.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                <p className="text-sm text-blue-900">
                  Obligatoire lors de la vente ou la location d&apos;un bien immobilier, le DPE est valable 10 ans.
                </p>
              </div>
            </section>

            {/* Étiquettes énergétiques */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Les étiquettes énergétiques
              </h2>
              <div className="space-y-2">
                {energyLabels.map((item) => (
                  <div 
                    key={item.label}
                    className={`${item.color} text-white p-3 rounded-lg flex justify-between items-center`}
                  >
                    <span className="font-bold text-lg">Classe {item.label}</span>
                    <span>{item.value} kWh/m²/an</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Pourquoi réaliser un DPE */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Pourquoi réaliser un DPE ?
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Obligation légale pour la vente ou location</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Évaluer les coûts énergétiques</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Identifier les améliorations possibles</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Barre latérale */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Demander un diagnostic
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Expert certifié en diagnostic immobilier à Caen et dans le Calvados
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Fredy Meslin</p>
                  <a 
                    href="tel:0766669948"
                    className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold mt-4 hover:bg-blue-700 transition-colors"
                  >
                    07.66.66.99.48
                  </a>
                  <a 
                    href="mailto:contact@diag-immo-caen.fr"
                    className="block text-blue-600 text-center mt-2 hover:underline"
                  >
                    contact@diag-immo-caen.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}