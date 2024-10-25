'use client'

import { FC, useState } from 'react'
import Link from 'next/link'

interface ServiceProps {
  title: string
  description: string
  icon: string
  link: string
}

const HomePage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services: ServiceProps[] = [
    {
      title: "DPE",
      description: "Diagnostic de Performance Énergétique obligatoire pour la vente et la location",
      icon: "🏠",
      link: "/dpe"
    },
    {
      title: "Amiante",
      description: "Repérage des matériaux contenant de l&apos;amiante",
      icon: "🔍",
      link: "/amiante"
    },
    {
      title: "Électricité",
      description: "Vérification de l&apos;installation électrique",
      icon: "⚡",
      link: "/electricite"
    },
    {
      title: "Plomb",
      description: "Détection de la présence de plomb dans les peintures",
      icon: "🎨",
      link: "/plomb"
    },
    {
      title: "Termites",
      description: "Détection de la présence de termites et autres insectes xylophages",
      icon: "🪲",
      link: "/termites"
    },
    {
      title: "ERP",
      description: "État des Risques et Pollutions (naturels, miniers, technologiques)",
      icon: "⚠️",
      link: "/erp"
    },
    {
      title: "Loi Carrez",
      description: "Mesurage certifié de la surface habitable selon la loi Carrez",
      icon: "📏",
      link: "/carrez"
    },
    {
      title: "Loi Boutin",
      description: "Mesurage de la surface habitable pour la location",
      icon: "📐",
      link: "/boutin"
    }
  ]

  const renderHeader = () => (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">DIAG IMMO CAEN</Link>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">À propos</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <a 
              href="tel:0766669948" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              07.66.66.99.48
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        <div 
          className={`
            md:hidden 
            ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} 
            overflow-hidden transition-all duration-300
          `}
        >
          <div className="flex flex-col space-y-4 pt-4">
            <a 
              href="#services" 
              className="text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="tel:0766669948" 
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              07.66.66.99.48
            </a>
          </div>
        </div>
      </nav>
    </header>
  )

  const renderHero = () => (
    <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Expert en Diagnostic Immobilier à Caen
        </h1>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-2">
          Diagnostics immobiliers professionnels réalisés par un expert certifié dans le Calvados
        </p>
        <a 
          href="#contact"
          className="bg-white text-blue-600 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block w-full md:w-auto"
        >
          Demander un devis gratuit
        </a>
      </div>
    </section>
  )

  const renderServices = () => (
    <section id="services" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8 md:mb-12">
          Nos Services de Diagnostic Immobilier
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.link}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-4 md:p-6 block group"
            >
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-1 md:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-3 md:mt-4 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end">
                <span>En savoir plus</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )

  const renderAbout = () => (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
            Expert Certifié en Diagnostic Immobilier
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Avec une expertise approfondie dans le domaine du diagnostic immobilier,
            je vous accompagne dans toutes vos démarches immobilières à Caen et dans le Calvados.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-2">Expertise</h3>
              <p className="text-gray-600 text-sm">Diagnostiqueur certifié</p>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-2">Rapidité</h3>
              <p className="text-gray-600 text-sm">Intervention sous 48h</p>
            </div>
            <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
              <h3 className="font-bold text-blue-600 mb-2">Qualité</h3>
              <p className="text-gray-600 text-sm">Rapports détaillés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const renderContact = () => (
    <section id="contact" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-6 md:mb-8">
            Contactez-nous
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <div className="text-center">
              <p className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Freddy Meslin</p>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Expert en diagnostics immobiliers à Caen et dans le Calvados
              </p>
              <div className="space-y-4">
                <a 
                  href="tel:0766669948"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                >
                  07.66.66.99.48
                </a>
                <a 
                  href="mailto:contact@diag-immo-caen.fr"
                  className="text-blue-600 hover:text-blue-700 block text-sm md:text-base"
                >
                  contact@diag-immo-caen.fr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const renderFooter = () => (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Diag Immo Caen - Tous droits réservés</p>
        <div className="text-blue-200 text-xs md:text-sm">
          <p>Expert en diagnostics immobiliers à Caen</p>
          <p>Intervention dans tout le Calvados</p>
        </div>
      </div>
    </footer>
  )

  const renderContent = () => {
    return (
      <div className="min-h-screen bg-white">
        {renderHeader()}
        {renderHero()}
        {renderServices()}
        {renderAbout()}
        {renderContact()}
        {renderFooter()}
      </div>
    )
  }

  return renderContent()
}

export default HomePage