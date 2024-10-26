export const metadata = {
  title: 'Contact - Expert en diagnostics immobiliers Caen | Diag Immo Caen',
  description: 'Contactez votre expert en diagnostics immobiliers à Caen. Intervention rapide dans tout le Calvados, devis gratuit sous 24h.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Contactez-nous</span>
              <span className="block text-[#0056b3] mt-2">À votre service</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Expert certifié en diagnostics immobiliers à Caen et dans tout le Calvados
            </p>
          </div>
        </div>
      </div>

      {/* Section Principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Coordonnées
              </h2>
              <div className="space-y-6">
                {/* Téléphone */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Téléphone
                  </h3>
                  <a
                    href="tel:0766669948"
                    className="text-xl text-gray-900 hover:text-[#0056b3] transition-colors"
                  >
                    07.66.66.99.48
                  </a>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:contact@diag-immo-caen.fr"
                    className="text-gray-900 hover:text-[#0056b3] transition-colors"
                  >
                    contact@diag-immo-caen.fr
                  </a>
                </div>

                {/* Horaires */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Horaires d'intervention
                  </h3>
                  <p className="text-gray-600">
                    Du lundi au vendredi : 8h00 - 19h00<br />
                    Samedi : Sur rendez-vous
                  </p>
                </div>

                {/* Zone */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0056b3] mb-2">
                    Zone d'intervention
                  </h3>
                  <p className="text-gray-600">
                    Caen et agglomération<br />
                    Tout le département du Calvados
                  </p>
                </div>
              </div>
            </div>

            {/* Devis en ligne */}
            <div className="bg-[#0056b3] p-8 rounded-lg shadow-lg text-white">
              <h2 className="text-2xl font-bold mb-4">
                Besoin d'un devis ?
              </h2>
              <p className="text-gray-100 mb-6">
                Recevez un devis gratuit et détaillé pour vos diagnostics immobiliers en quelques clics.
              </p>
              <a
                href="/devis"
                className="block w-full bg-white text-[#0056b3] text-center py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Demander un devis en ligne
              </a>
            </div>
          </div>

          {/* Carte et informations complémentaires */}
          <div className="space-y-8">
            {/* Services */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nos diagnostics
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0056b3]">•</span>
                    <span>DPE</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0056b3]">•</span>
                    <span>Amiante</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0056b3]">•</span>
                    <span>Électricité</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0056b3]">•</span>
                    <span>Gaz</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0056b3]">•</span>
                    <span>Plomb</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0056b3]">•</span>
                    <span>Termites</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0056b3]">•</span>
                    <span>Loi Carrez</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0056b3]">•</span>
                    <span>Loi Boutin</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#0056b3]">•</span>
                    <span>ERP</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Engagements */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Nos engagements
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-[#0056b3] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Devis gratuit sous 24h</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-[#0056b3] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Intervention rapide dans tout le Calvados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-[#0056b3] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Expert certifié et assuré</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="h-6 w-6 text-[#0056b3] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Rapports clairs et détaillés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
