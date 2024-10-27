import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

// Liste des diagnostics
const diagnosticsItems = [
  { name: 'DPE', href: '/diagnostics/dpe' },
  { name: 'Amiante', href: '/diagnostics/amiante' },
  { name: 'Électricité', href: '/diagnostics/electricite' },
  { name: 'Gaz', href: '/diagnostics/gaz' },
  { name: 'Plomb', href: '/diagnostics/plomb' },
  { name: 'Termites', href: '/diagnostics/termites' },
  { name: 'Carrez', href: '/diagnostics/carrez' },
  { name: 'Boutin', href: '/diagnostics/boutin' },
  { name: 'ERP', href: '/diagnostics/erp' },
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
        <div className="absolute top-0 inset-x-0 bg-white z-50">
          <div className="pt-2">
            {/* Header avec bouton fermer */}
            <div className="flex items-center justify-between px-4 py-2">
              <Link 
                href="/" 
                className="text-xl font-bold text-[#0056b3]"
                onClick={() => setIsOpen(false)}
              >
                Diag Immo Caen
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu items */}
            <nav className="mt-4">
              {/* Section Diagnostics avec dropdown */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => setIsDiagnosticsOpen(!isDiagnosticsOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-900"
                >
                  <span className="text-base font-medium">Diagnostics</span>
                  <ChevronDown 
                    className={`w-5 h-5 transform transition-transform ${
                      isDiagnosticsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isDiagnosticsOpen && (
                  <div className="bg-gray-50 py-2">
                    {diagnosticsItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-8 py-2 text-base text-gray-600 hover:text-[#0056b3] hover:bg-gray-100"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* À propos */}
              <Link
                href="/a-propos"
                className="block px-4 py-3 text-base font-medium text-gray-900 border-b border-gray-200 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                À propos
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                className="block px-4 py-3 text-base font-medium text-gray-900 border-b border-gray-200 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
