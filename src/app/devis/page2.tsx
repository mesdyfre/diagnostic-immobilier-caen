import type { Metadata } from 'next'
import { Clock, CheckCircle, Phone } from 'lucide-react'
import { QuoteForm } from '@/components/ui/quote-form'

export const metadata: Metadata = {
  title: 'Devis gratuit diagnostic immobilier Caen - Prix immédiat',
  description: 'Demandez votre devis gratuit pour vos diagnostics immobiliers à Caen et dans le Calvados. Réponse immédiate, prix transparents.',
}

export default function DevisPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            <span className="block">Devis gratuit</span>
            <span className="block text-[#0056b3]">Diagnostic immobilier</span>
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Obtenez un devis instantané pour vos diagnostics immobiliers à Caen et dans le Calvados
          </p>
        </div>

        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de devis */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact direct */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Besoin d'un conseil ?
              </h2>
              <div className="space-y-4">
                <a
                  href="tel:0766669948"
                  className="flex items-center justify-center w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0056b3] hover:bg-blue-700"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  07.66.66.99.48
                </a>
                <a
                  href="mailto:contact@diag-immo-caen.fr"
                  className="flex items-center justify-center w-full px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-[#0056b3] bg-white hover:bg-gray-50"
                >
                  contact@diag-immo-caen.fr
                </a>
              </div>
            </div>

            {/* Avantages */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Nos avantages
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#0056b3] mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Devis gratuit et sans engagement</span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-[#0056b3] mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Intervention possible sous 24/48h</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#0056b3] mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Prix transparents et sans surprise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-[#0056b3] mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Diagnostiqueur certifié</span>
                </li>
              </ul>
            </div>

            {/* Zone d'intervention */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Zone d'intervention
              </h2>
              <p className="text-gray-600 mb-4">
                Nous intervenons dans tout le Calvados :
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Caen et son agglomération</li>
                <li>• Littoral (Deauville, Cabourg...)</li>
                <li>• Pays d'Auge</li>
                <li>• Bessin</li>
                <li>• Bocage Virois</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
