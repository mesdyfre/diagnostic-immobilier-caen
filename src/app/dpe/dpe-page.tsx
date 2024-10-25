export default function DPEPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec fil d'Ariane */}
      <div className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-sm mb-2">
            <a href="/" className="hover:underline">Accueil</a> &gt; DPE
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Diagnostic de Performance Énergétique (DPE)
          </h1>
        </div>
      </div>

      {/* Contenu principal */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Qu'est-ce que le DPE ?
            </h2>
            <p className="text-gray-700 mb-4">
              Le Diagnostic de Performance Énergétique (DPE) est un document obligatoire qui informe sur la performance énergétique d'un logement ou d'un bâtiment, en évaluant sa consommation d'énergie et son impact en termes d'émissions de gaz à effet de serre.
            </p>
          </section>

          {/* Quand est-il obligatoire */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Quand le DPE est-il obligatoire ?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Lors de la vente d'un bien immobilier</li>
              <li>Pour la location d'un logement</li>
              <li>Pour la construction d'un nouveau bâtiment</li>
              <li>Pour les bâtiments publics</li>
            </ul>
          </section>

          {/* Étiquettes énergétiques */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Les étiquettes énergétiques
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  Consommation énergétique
                </h3>
                <ul className="space-y-2">
                  <li className="bg-green-100 p-2 rounded">A : ≤ 50 kWh/m²/an</li>
                  <li className="bg-lime-100 p-2 rounded">B : 51 à 90 kWh/m²/an</li>
                  <li className="bg-yellow-100 p-2 rounded">C : 91 à 150 kWh/m²/an</li>
                  <li className="bg-orange-100 p-2 rounded">D : 151 à 230 kWh/m²/an</li>
                  <li className="bg-red-100 p-2 rounded">E : 231 à 330 kWh/m²/an</li>
                  <li className="bg-red-200 p-2 rounded">F : 331 à 450 kWh/m²/an</li>
                  <li className="bg-red-300 p-2 rounded">G : > 450 kWh/m²/an</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">
                  Émissions de GES
                </h3>
                <ul className="space-y-2">
                  <li className="bg-green-100 p-2 rounded">A : ≤ 5 kg/m²/an</li>
                  <li className="bg-lime-100 p-2 rounded">B : 6 à 10 kg/m²/an</li>
                  <li className="bg-yellow-100 p-2 rounded">C : 11 à 20 kg/m²/an</li>
                  <li className="bg-orange-100 p-2 rounded">D : 21 à 35 kg/m²/an</li>
                  <li className="bg-red-100 p-2 rounded">E : 36 à 55 kg/m²/an</li>
                  <li className="bg-red-200 p-2 rounded">F : 56 à 80 kg/m²/an</li>
                  <li className="bg-red-300 p-2 rounded">G : > 80 kg/m²/an</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              Besoin d'un DPE à Caen ?
            </h2>
            <p className="text-gray-700 mb-6">
              Contactez-moi pour obtenir votre diagnostic de performance énergétique rapidement.
            </p>
            <div className="space-y-4">
              <a 
                href="tel:0766669948"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Appeler maintenant : 07.66.66.99.48
              </a>
              <div>
                <a 
                  href="mailto:contact@diag-immo-caen.fr"
                  className="text-blue-600 hover:text-blue-700"
                >
                  contact@diag-immo-caen.fr
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
