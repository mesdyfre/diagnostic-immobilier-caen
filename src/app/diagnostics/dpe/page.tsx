'use client';

import Link from 'next/link';


export default function DPEPage() {
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
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Accueil</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Diagnostic de Performance Énergétique</span>
          </div>
        </div>
      </div>

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

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
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

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Optimisez votre performance énergétique
                </h2>
                
                <p className="text-gray-600 mb-6">
                  En tant qu&apos;<a href="https://diag-immo-caen.com" className="text-[#0056b3] hover:underline font-medium" target="_blank" rel="noopener">expert en diagnostics immobiliers sur Caen</a>, nous constatons que de nombreux logements peuvent améliorer significativement leur performance énergétique.
                </p>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                      Isolation thermique
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#0056b3] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Isolation des combles et toiture</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#0056b3] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Isolation des murs par l&apos;intérieur ou l&apos;extérieur</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#0056b3] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Double ou triple vitrage performant</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-5">
                    <h3 className="text-lg font-semibold text-[#0056b3] mb-3">
                      Système de chauffage
                    </h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#0056b3] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Chaudière à haute performance énergétique</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#0056b3] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Régulation et programmation du chauffage</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-[#0056b3] mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Entretien régulier des installations</span>
                      </li>
                    </ul>
                  </div>
                </div>
				                <div className="bg-[#0056b3]/5 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Une approche professionnelle complète
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Pour garantir l&apos;efficacité énergétique de votre logement, nous travaillons en collaboration avec des professionnels qualifiés. <a href="https://plomberie-caen.com" className="text-[#0056b3] hover:underline font-medium" target="_blank" rel="noopener">Les experts en plomberie et chauffage à Caen</a> peuvent vous accompagner dans la rénovation de vos installations thermiques.
                  </p>
                  <div className="mt-4 grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 text-gray-600">
                      <svg className="h-5 w-5 text-[#0056b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Professionnels certifiés RGE</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-600">
                      <svg className="h-5 w-5 text-[#0056b3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span>Garantie décennale</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Questions fréquentes sur le DPE
              </h3>
              <div className="space-y-6">
                {[
                  {
                    question: "Dans quels cas le DPE est-il obligatoire à Caen ?",
                    answer: "Le DPE est obligatoire pour toute vente ou location d&apos;un bien immobilier à Caen et dans le Calvados. Il doit être réalisé par un diagnostiqueur certifié."
                  },
                  {
                    question: "Quels sont les délais pour obtenir un DPE ?",
                    answer: "L&apos;intervention sur place dure environ 1 à 2 heures. Nous nous engageons à vous fournir le rapport complet sous 24 à 48 heures."
                  },
                  {
                    question: "Quelle est la validité d&apos;un DPE ?",
                    answer: "Depuis juillet 2021, le DPE est valable 10 ans. Cette nouvelle réglementation renforce l&apos;importance d&apos;un diagnostic précis et fiable."
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      {item.question}
                    </h4>
                    <p className="text-gray-600">
                      {item.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

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
                  <p className="font-semibold text-gray-900">Freddy Meslin</p>
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