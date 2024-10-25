import { FC } from 'react'

interface RisqueProps {
  title: string
  description: string
  icon: string
}

interface ZoneProps {
  nom: string
}

const PlombPage: FC = () => {
  const risques: RisqueProps[] = [
    {
      title: "Santé",
      description: "Le plomb peut causer le saturnisme, particulièrement dangereux pour les enfants et femmes enceintes",
      icon: "⚕️"
    },
    {
      title: "Environnement",
      description: "Contamination possible des sols et des poussières domestiques",
      icon: "🌍"
    },
    {
      title: "Habitat",
      description: "Dégradation des peintures et revêtements contenant du plomb",
      icon: "🏠"
    }
  ]

  const zones: ZoneProps[] = [
    { nom: "Peintures murales anciennes" },
    { nom: "Portes et fenêtres" },
    { nom: "Radiateurs peints" },
    { nom: "Volets et garde-corps" },
    { nom: "Revêtements muraux" },
    { nom: "Plinthes et boiseries" },
    { nom: "Canalisations anciennes" },
    { nom: "Balcons et terrasses" }
  ]

  const renderHeader = () => (
    <div className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Diagnostic Plomb (CREP) à Caen
        </h1>
        <p className="text-xl opacity-90">
          Constat de Risque d'Exposition au Plomb par un expert certifié
        </p>
      </div>
    </div>
  )

  const renderBreadcrumb = () => (
    <div className="bg-white shadow">
      <div className="container mx-auto px-4 py-3">
        <div className="text-sm text-gray-600">
          <a href="/" className="hover:text-blue-600">Diagnostic Immobilier Caen</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Diagnostic Plomb (CREP)</span>
        </div>
      </div>
    </div>
  )

  const renderMainContent = () => (
    <div className="md:col-span-2 space-y-8">
      {/* Introduction */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Le Diagnostic Plomb - CREP
        </h2>
        <p className="text-gray-700 mb-4">
          Le Constat de Risque d'Exposition au Plomb (CREP) est obligatoire pour les logements 
          construits avant 1949. À Caen et dans le Calvados, notre expertise vous garantit un 
          diagnostic plomb conforme à la réglementation.
        </p>
        <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
          <p className="text-sm text-yellow-800 font-medium">
            Obligatoire pour la vente et la location des logements construits avant 1949 
            dans le Calvados.
          </p>
        </div>
      </section>

      {/* Risques */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Risques liés au plomb
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {risques.map((risque) => (
            <div key={risque.title} className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl mb-2">{risque.icon}</div>
              <h3 className="font-bold text-blue-900 mb-2">{risque.title}</h3>
              <p className="text-sm text-gray-700">{risque.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zones */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Zones à contrôler
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {zones.map((zone, index) => (
            <div key={index} className="flex items-center space-x-2 bg-gray-50 p-3 rounded">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-gray-700">{zone.nom}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )

  const renderSidebar = () => (
    <div className="md:col-span-1">
      <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Expert en diagnostic plomb à Caen
        </h3>
        <div className="space-y-4">
          <p className="text-gray-600">
            Intervention rapide dans tout le Calvados pour votre CREP
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

          {/* Services */}
          <div className="mt-6 bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Nos services</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✓ Intervention sous 48h</li>
              <li>✓ Devis gratuit</li>
              <li>✓ Rapport détaillé</li>
              <li>✓ Conseils personnalisés</li>
            </ul>
          </div>

          {/* Certification */}
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-800">
              Diagnostiqueur certifié pour le CREP dans le Calvados
            </p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        {renderBreadcrumb()}
        {renderHeader()}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {renderMainContent()}
            {renderSidebar()}
          </div>
        </div>
      </div>
    )
  }

  return renderContent()
}

export default PlombPage