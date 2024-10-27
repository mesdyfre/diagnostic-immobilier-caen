import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Clock, 
  CheckCircle, 
  Phone,
  Home
} from 'lucide-react'
import { QuoteForm } from '@/components/ui/quote-form'
import { diagnosticsItems } from '@/data/diagnostics'

export const metadata: Metadata = {
  title: 'Diag Immo Caen - Expert en diagnostics immobiliers',
  description: 'Expert en diagnostics immobiliers à Caen et dans le Calvados. DPE, Amiante, Électricité, Plomb, Gaz, Loi Carrez, Loi Boutin, ERP. Devis gratuit sous 24h.',
}

const features = [
  {
    name: 'Réactivité',
    description: 'Intervention sous 24/48h',
    icon: Clock,
  },
  {
    name: 'Expertise',
    description: 'Diagnostiqueur certifié',
    icon: CheckCircle,
  },
  {
    name: 'Proximité',
    description: 'Caen et tout le Calvados',
    icon: Home,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Expert en diagnostics</span>
                  <span className="block text-[#0056b3]">immobiliers à Caen</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Tous les diagnostics obligatoires pour votre vente ou location.
                  Intervention rapide dans tout le Calvados.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                  <div className="rounded-md shadow">
                    <a
                      href="tel:0766669948"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0056b3] hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      07.66.66.99.48
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/diagnostics"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#0056b3] bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                    >
                      Nos diagnostics
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Section Caractéristiques */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#0056b3] font-semibold tracking-wide uppercase">
              Nos engagements
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Un service professionnel de qualité
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#0056b3] text-white">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Section Diagnostics */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Nos diagnostics immobiliers
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Tous les diagnostics obligatoires pour votre bien immobilier
            </p>
          </div>

          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {diagnosticsItems.map((diagnostic) => {
              const Icon = diagnostic.icon
              return (
                <Link
                  key={diagnostic.title}
                  href={diagnostic.href}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Icon className="h-8 w-8 text-[#0056b3]" />
                        <p className="ml-3 text-xl font-semibold text-gray-900">
                          {diagnostic.title}
                        </p>
                      </div>
                      <p className="mt-3 text-base text-gray-500">
                        {diagnostic.description}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Section Devis et Contact */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Besoin d&apos;un diagnostic ?</span>
              <span className="block text-[#0056b3]">Demandez votre devis gratuit</span>
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Recevez votre devis immédiatement ou contactez-nous directement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire de devis */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            {/* Contact direct */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Contact direct
                </h3>
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

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Zone d&apos;intervention
                </h3>
                <p className="text-gray-600">
                  Nous intervenons à Caen et dans tout le Calvados pour vos diagnostics immobiliers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Nos engagements
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0056b3] mr-2" />
                    Devis gratuit
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-5 w-5 text-[#0056b3] mr-2" />
                    Intervention sous 24/48h
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0056b3] mr-2" />
                    Rapport rapide
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-[#0056b3] mr-2" />
                    Prix transparents
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
