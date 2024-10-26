export const metadata = {
  title: 'Devis gratuit - Diagnostics immobiliers Caen | Diag Immo Caen',
  description: 'Demandez votre devis gratuit pour vos diagnostics immobiliers à Caen. Réponse rapide, tarifs transparents, intervention dans tout le Calvados.',
}

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Demandez votre devis</span>
              <span className="block text-[#0056b3] mt-2">Simple et gratuit</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Remplissez le formulaire ci-dessous pour recevoir votre devis personnalisé pour vos diagnostics immobiliers
            </p>
          </div>
        </div>
      </div>

      {/* Section Formulaire et Contact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe 
              src="https://app.gestion-diagnostic.fr/rdv/2223/0c4eee" 
              className="w-full h-[800px] border-0"
              title="Formulaire de devis"
            />
          </div>

          {/* Encart d'informations */}
          <div className="space-y-6">
            {/* Contact direct */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Contact direct
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Vous préférez nous contacter directement ?
                </p>
                <a
                  href="tel:0766669948"
                  className="block w-full px-4 py-3 bg-[#0056b3] text-white text-center rounded-md hover:bg-blue-700 transition-colors"
                >
                  07.66.66.99.48
                </a>
                <a
                  href="mailto:contact@diag-immo-caen.fr"
                  className="block w-full px-4 py-3 border border-[#0056b3] text-[#0056b3] text-center rounded-md hover:bg-blue-50 transition-colors"
                >
                  contact@diag-immo-caen.fr
                </a>
              </div>
            </div>

            {/* Informations */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Nos engagements
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-[#0056b3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Devis gratuit et sans engagement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-[#0056b3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Réponse sous 24h maximum</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-[#0056b3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tarifs transparents</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="h-5 w-5 text-[#0056b3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Intervention rapide</span>
                </li>
              </ul>
            </div>

            {/* Zone d'intervention */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Zone d'intervention
              </h2>
              <p className="text-gray-600">
                Nous intervenons à Caen et dans tout le Calvados pour vos diagnostics immobiliers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
