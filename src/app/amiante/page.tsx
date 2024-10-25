export default function AmiantePage() {
  // Liste des situations où le diagnostic est obligatoire
  const obligations = [
    {
      title: "Vente",
      description: "Obligatoire pour toute vente d'un bien immobilier dont le permis de construire a été délivré avant le 1er juillet 1997"
    },
    {
      title: "Location",
      description: "Le propriétaire doit tenir le diagnostic à disposition des locataires"
    },
    {
      title: "Travaux",
      description: "Obligatoire avant tous travaux dans les parties susceptibles de contenir de l'amiante"
    },
    {
      title: "Démolition",
      description: "Un diagnostic approfondi est nécessaire avant toute démolition"
    }
  ];

  // Liste des matériaux concernés
  const materiaux = [
    "Flocages et calorifugeages",
    "Faux plafonds",
    "Dalles de sol",
    "Plaques en fibrociment",
    "Conduits et canalisations",
    "Joints et mastics",
    "Enduits et peintures",
    "Toitures et bardages"
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-3">
          <div className="text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">Accueil</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Diagnostic Amiante</span>
          </div>
        </div>
      </div>

      {/* En-tête */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Diagnostic Amiante
          </h1>
          <p className="text-xl opacity-90">
            Repérage et évaluation de l'état des matériaux contenant de l'amiante
          </p>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Section principale */}
          <div className="md:col-span-2 space-y-8">
            {/* Qu'est-ce que le diagnostic amiante */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Qu'est-ce que le diagnostic amiante ?
              </h2>
              <p className="text-gray-700 mb-4">
                Le diagnostic amiante est une inspection détaillée qui permet de repérer la présence d'amiante dans un bâtiment. 
                Ce diagnostic est crucial pour la sécurité des occupants car l'amiante peut présenter des risques graves pour la santé 
                lorsque les fibres sont libérées dans l'air.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
                <p className="text-sm text-yellow-800">
                  Important : Le diagnostic est obligatoire pour tous les bâtiments dont le permis de construire a été délivré avant le 1er juillet 1997.
                </p>
              </div>
            </section>

            {/* Quand est-il obligatoire */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Quand est-il obligatoire ?
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {obligations.map((item, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Matériaux concernés */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Matériaux susceptibles de contenir de l'amiante
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {materiaux.map((materiau, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700">{materiau}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Validité et sanctions */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Validité et sanctions
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Le diagnostic amiante n'a pas de durée de validité définie, sauf en cas de repérage de matériaux dégradés 
                  nécessitant une surveillance périodique.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-4">
                  <p className="text-sm text-red-800">
                    L'absence de diagnostic amiante lors d'une vente peut entraîner l'annulation de la vente ou une réduction 
                    du prix de vente.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Barre latérale */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Demander un diagnostic amiante
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Expert certifié pour le repérage amiante à Caen et dans le Calvados
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

                {/* Call to action urgent */}
                <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800 font-medium">
                    Besoin urgent d'un diagnostic amiante ?
                    Intervention possible sous 48h dans le Calvados.
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
