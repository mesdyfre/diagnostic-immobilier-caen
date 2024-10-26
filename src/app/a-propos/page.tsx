export const metadata = {
  title: 'À propos - Expert en diagnostics immobiliers | Diag Immo Caen',
  description: 'Découvrez Diag Immo Caen, une expertise unique combinant 10 ans d\'expérience dans le bâtiment et une approche technologique moderne des diagnostics immobiliers.',
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Diag Immo Caen</span>
              <span className="block text-[#0056b3] mt-2">Un expert pas comme les autres</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              L'alliance unique de l'expertise technique et de l'innovation digitale au service de vos diagnostics
            </p>
          </div>
        </div>
      </div>

      {/* Section Parcours */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Un parcours complet
            </h2>
            <div className="prose max-w-none text-gray-500">
              <p>
                Créée en 2023, Diag Immo Caen est le fruit d'une expertise approfondie et d'un parcours professionnel riche. Fort de près de 10 ans d'expérience dans le secteur du bâtiment, j'ai développé une compréhension pointue des enjeux techniques et réglementaires de la construction.
              </p>
              <p className="mt-4">
                Mon passé de technicien informatique apporte une dimension unique à mon approche des diagnostics immobiliers. Cette double compétence me permet d'allier la rigueur technique à une méthodologie moderne et digitalisée, garantissant des rapports précis et une gestion optimisée de chaque mission.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Engagement qualité
            </h2>
            <div className="prose max-w-none text-gray-500">
              <p>
                La confiance de mes clients repose sur des bases solides :
              </p>
              <ul className="mt-4 space-y-2">
                <li>Certification et formation continue aux dernières normes</li>
                <li>Assurance professionnelle Klarity pour une garantie maximale</li>
                <li>Outils de diagnostic dernière génération</li>
                <li>Rapports détaillés et documentation numérique</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section Valeurs */}
      <div className="bg-white mt-12">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                Utilisation des dernières technologies pour des diagnostics précis et des rapports détaillés
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                Expertise
              </h3>
              <p className="text-gray-600">
                Double compétence bâtiment et informatique pour une analyse approfondie de votre bien
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0056b3] mb-4">
                Proximité
              </h3>
              <p className="text-gray-600">
                Disponibilité et réactivité pour un service personnalisé dans tout le Calvados
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section Contact */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0056b3] rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Besoin d'un diagnostic ?
            </h2>
            <p className="text-lg mb-8">
              Je vous accompagne dans tous vos projets immobiliers à Caen et dans le Calvados
            </p>
            <div className="space-x-4">
              <a
                href="tel:0766669948"
                className="inline-block bg-white text-[#0056b3] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                07.66.66.99.48
              </a>
              <a
                href="mailto:contact@diag-immo-caen.fr"
                className="inline-block bg-white text-[#0056b3] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                contact@diag-immo-caen.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
