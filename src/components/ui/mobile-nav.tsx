import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const diagnosticsItems = [
  [
    { name: 'DPE', href: '/diagnostics/dpe' },
    { name: 'Amiante', href: '/diagnostics/amiante' },
    { name: 'Électricité', href: '/diagnostics/electricite' },
    { name: 'Gaz', href: '/diagnostics/gaz' },
  ],
  [
    { name: 'Plomb', href: '/diagnostics/plomb' },
    { name: 'Loi Carrez', href: '/diagnostics/carrez' },
    { name: 'Loi Boutin', href: '/diagnostics/boutin' },
    { name: 'ERP', href: '/diagnostics/erp' },
  ],
]

const mainNavItems = [
  { name: 'Accueil', href: '/' },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDiagnosticsOpen, setIsDiagnosticsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      {/* Bouton Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0056b3]"
      >
        <span className="sr-only">Ouvrir le menu</span>
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="text-xl font-bold text-[#0056b3]" onClick={() => setIsOpen(false)}>
                    Diag Immo Caen
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0056b3]"
                  >
                    <span className="sr-only">Fermer le menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="space-y-3">
                  {/* Menu principal */}
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Menu Diagnostics avec dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => setIsDiagnosticsOpen(!isDiagnosticsOpen)}
                      className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                    >
                      Diagnostics
                      <ChevronDown className={`w-5 h-5 transform transition-transform ${isDiagnosticsOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isDiagnosticsOpen && (
                      <div className="mt-2 space-y-2 px-3 bg-gray-50 rounded-md py-2">
                        <div className="grid grid-cols-2 gap-2">
                          {diagnosticsItems.map((column, columnIndex) => (
                            <div key={columnIndex} className="space-y-2">
                              {column.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="block py-1 text-sm font-medium text-gray-700 hover:text-[#0056b3]"
                                  onClick={() => {
                                    setIsDiagnosticsOpen(false)
                                    setIsOpen(false)
                                  }}
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bouton Devis */}
                  <Link
                    href="/devis"
                    className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#0056b3] hover:bg-blue-700 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Devis gratuit
                  </Link>

                  {/* Bouton Téléphone */}
                  <a
                    href="tel:0766669948"
                    className="flex items-center justify-center px-3 py-2 border border-[#0056b3] rounded-md text-base font-medium text-[#0056b3] hover:bg-blue-50"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    07.66.66.99.48
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
