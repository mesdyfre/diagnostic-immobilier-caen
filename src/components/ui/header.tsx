"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/' },
  { 
    name: 'Diagnostics',
    href: '/diagnostics',
    children: [
      { name: 'DPE', href: '/diagnostics/dpe', description: 'Diagnostic de Performance Énergétique' },
      { name: 'Amiante', href: '/diagnostics/amiante', description: 'Repérage des matériaux amiantés' },
      { name: 'Électricité', href: '/diagnostics/electricite', description: 'Sécurité électrique' },
      { name: 'Gaz', href: '/diagnostics/gaz', description: 'Sécurité installation gaz' },
      { name: 'Plomb', href: '/diagnostics/plomb', description: 'Diagnostic plomb - CREP' },
      { name: 'Termites', href: '/diagnostics/termites', description: 'Détection des termites' },
      { name: 'Carrez', href: '/diagnostics/carrez', description: 'Mesurage Loi Carrez' },
      { name: 'Boutin', href: '/diagnostics/boutin', description: 'Surface habitable location' },
      { name: 'ERP', href: '/diagnostics/erp', description: 'État des Risques et Pollutions' },
    ],
  },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  return (
    <header className="relative bg-white">
      {/* Bande supérieure */}
      <div className="bg-[#0056b3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center text-sm">
            <p>Expert en diagnostics immobiliers - Caen et Calvados</p>
            <a href="tel:0766669948" className="hidden sm:flex items-center hover:text-gray-100">
              <Phone className="h-4 w-4 mr-2" />
              07.66.66.99.48
            </a>
          </div>
        </div>
      </div>

      {/* Barre de navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo et nom */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Diag Immo Caen"
                className="h-14 w-auto hidden md:block"
              />
              <img 
                src="/images/logo.png" 
                alt="Diag Immo Caen"
                className="h-10 w-auto md:hidden"
              />
              <div className="ml-3 hidden md:flex flex-col">
                <span className="text-xl font-bold text-[#0056b3]">Diag Immo Caen</span>
                <span className="text-sm text-gray-500">Diagnostics immobiliers</span>
              </div>
            </Link>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              if (item.children) {
                return (
                  <div key={item.name} className="relative group">
                    <button className="flex items-center text-gray-500 group-hover:text-[#0056b3] px-3 py-2 text-sm font-medium">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="p-4 grid gap-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`${
                              isActive(child.href)
                                ? 'bg-blue-50 text-[#0056b3]'
                                : 'text-gray-900 hover:bg-gray-50'
                            } p-3 rounded-lg transition-colors`}
                          >
                            <div className="font-medium">{child.name}</div>
                            <div className="text-sm text-gray-500">{child.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? 'text-[#0056b3] border-b-2 border-[#0056b3]'
                      : 'text-gray-500 hover:text-[#0056b3]'
                  } px-3 py-2 text-sm font-medium`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Bouton devis desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/devis"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0056b3] hover:bg-blue-700 shadow-sm"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/20" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <img 
                src="/images/logo.png" 
                alt="Diag Immo Caen"
                className="h-8 w-auto"
              />
              <button
                type="button"
                className="rounded-md p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="divide-y divide-gray-200">
              {navigation.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.name} className="py-6">
                      <div className="text-base font-medium text-gray-900 mb-4">
                        {item.name}
                      </div>
                      <div className="grid gap-y-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`${
                              isActive(child.href)
                                ? 'text-[#0056b3] bg-blue-50'
                                : 'text-gray-500'
                            } block px-3 py-2 text-base rounded-md`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive(item.href)
                        ? 'text-[#0056b3] bg-blue-50'
                        : 'text-gray-900'
                    } block py-6 text-base font-medium`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>
            {/* Boutons d'action mobile */}
            <div className="mt-6 space-y-4">
              <Link
                href="/devis"
                className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0056b3] hover:bg-blue-700 shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Devis gratuit
              </Link>
              <a
                href="tel:0766669948"
                className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-5 w-5 mr-2" />
                07.66.66.99.48
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}