'use client'

import React from 'react'
import { Receipt, FileCheck, Calendar } from 'lucide-react'

export default function ProServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* En-tête Pro */}
      <div className="bg-[#0056b3] text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block mb-4 px-4 py-1 bg-blue-600 rounded-full text-sm font-semibold">
              Espace Professionnels
            </span>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">Solutions Pro Diagnostics</span>
              <span className="block text-blue-200 mt-2">Simplifiez votre gestion immobilière</span>
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Une solution complète et adaptée pour les professionnels de l&apos;immobilier
            </p>
          </div>
        </div>
      </div>

      {/* Avantages communs en haut */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Receipt className="h-8 w-8 text-[#0056b3]" />
              <h3 className="text-xl font-bold text-gray-900 ml-3">Facturation Simplifiée</h3>
            </div>
            <p className="text-gray-600 mb-4">Facturation mensuelle groupée pour une gestion optimisée</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0056b3] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Regroupement mensuel des factures
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0056b3] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Tarifs préférentiels
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <FileCheck className="h-8 w-8 text-[#0056b3]" />
              <h3 className="text-xl font-bold text-gray-900 ml-3">Accès Documents</h3>
            </div>
            <p className="text-gray-600 mb-4">Tous vos diagnostics et documents accessibles 24/7</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0056b3] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Espace dédié sécurisé
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0056b3] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Historique complet
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Calendar className="h-8 w-8 text-[#0056b3]" />
              <h3 className="text-xl font-bold text-gray-900 ml-3">Prise de RDV Facilitée</h3>
            </div>
            <p className="text-gray-600 mb-4">Réservation simple et rapide avec tarifs remisés</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0056b3] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Disponibilités en temps réel
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-[#0056b3] mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Remises dédiées pro
              </li>
            </ul>
          </div>
        </div>

        {/* Section Formulaire */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Réservez votre diagnostic</h2>
            <p className="mt-2 text-gray-600 text-center">Profitez de nos services professionnels adaptés à vos besoins</p>
          </div>
          <iframe 
            src="https://app.gestion-diagnostic.fr/rdv/2223/0c4eee" 
            className="w-full h-[800px] border-0"
            title="Formulaire de réservation diagnostic"
          />
        </div>
      </div>

      {/* Section Contact Pro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-[#0056b3] to-blue-700 rounded-xl shadow-xl text-white p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Un accompagnement sur mesure</h2>
          <p className="text-xl mb-8">Notre équipe dédiée aux professionnels est à votre écoute</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="tel:0766669948"
              className="px-6 py-4 bg-white text-[#0056b3] text-xl font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              07.66.66.99.48
            </a>
            <a
              href="mailto:contact@diag-immo-caen.fr"
              className="px-6 py-4 bg-white text-[#0056b3] text-xl font-bold rounded-lg hover:bg-blue-50 transition-colors"
            >
              contact@diag-immo-caen.fr
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}