export default function ElectricitePage() {
  const points = [
    {
      title: "Installation électrique",
      items: [
        "Présence d'une protection différentielle",
        "État des disjoncteurs et fusibles",
        "Présence d'un dispositif de mise à la terre",
        "Calibrage des conducteurs"
      ]
    },
    {
      title: "Sécurité",
      items: [
        "Protection contre les contacts directs",
        "Protection contre les surintensités",
        "État des matériels électriques",
        "Absence de risques d'électrocution"
      ]
    }
  ];

  const anomaliesFrequentes = [
    "Absence de liaison équipotentielle",
    "Protection différentielle défectueuse",
    "Prises de terre non conformes",
    "Conducteurs non protégés",
    "Matériels électriques vétustes",
    "Absence de protection différentielle"
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-3">
          <div className="text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">Diagnostic Immobilier Caen</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Diagnostic Électrique</span>
          </div>
        </div>
      </div>

      {/* En-tête */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Diagnostic Électrique à Caen
          </h1>
          <p className="text-xl opacity-90">
            Expert certifié en diagnostic électrique dans le Calvados
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Section principale */}
          <div className="md:col-span-2 space-y-8">
            {/* Introduction */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Le Diagnostic Électrique (État de l'Installation Intérieure d'Électricité)
              </h2>
              <p className="text-gray-700 mb-4">
                Le diagnostic électrique est une inspection approfondie de l'installation électrique 
                de votre bien immobilier à Caen. Cette vérification est obligatoire pour toute vente 
                d'un logement dont l'installation électrique a plus de 15 ans.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                <p className="text-sm text-yellow-800">
                  À Caen et dans le Calvados, nous intervenons rapidement pour réaliser votre diagnostic 
                  électrique aux normes en vigueur.
                </p>
              </div>
            </section>

            {/* Points de contrôle */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Points de contrôle principaux
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {points.map((point, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-3">{point.title}</h3>
                    <ul className="space-y-2">
                      {point.items.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Anomalies fréquentes */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Anomalies fréquemment rencontrées
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {anomaliesFrequentes.map((anomalie, index) => (
                  <div key={index} className="flex items-center space-x-2 bg-red-50 p-3 rounded">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{anomalie}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Validité et obligations */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Validité et obligations légales
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Le diagnostic électrique est valable 3 ans pour une vente immobilière et 6 ans 
                  pour une location. À Caen, notre expertise vous garantit un diagnostic conforme 
                  aux exigences légales.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                  <p className="text-sm text-blue-800">
                    Le diagnostic est obligatoire pour toute vente d'un logement dont l'installation 
                    électrique a plus de 15 ans.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Barre latérale */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Expert en diagnostic électrique à Caen
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Intervention rapide dans tout le Calvados pour votre diagnostic électrique
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">Fredy Meslin</p>
                  <div className="mt-4 space-y-3">
                    <a 
                      href="tel:0766669948"
                      className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      07.66.66.99.48
                    </a>
                    <a 
                      href="mailto:contact@diag-immo-caen.fr"
                      className="block text-blue-600 text-center hover:underline"
                    >
                      contact@diag-immo-caen.fr
                    </a>
                  </div>
                </div>

                {/* Zones d'intervention */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Zones d'intervention</h4>
                  <p className="text-sm text-gray-600">
                    Caen et agglomération, Calvados : Bayeux, Falaise, Lisieux, Deauville, 
                    Cabourg, Ouistreham...
                  </p>
                </div>

                {/* Certification */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800">
                    Diagnostiqueur certifié pour les installations électriques
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
