import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'

const navigationItems = [
  { name: 'Accueil', href: '/' },
  { name: 'DPE', href: '/diagnostics/dpe' },
  { name: 'Amiante', href: '/diagnostics/amiante' },
  { name: 'Électricité', href: '/diagnostics/electricite' },
  { name: 'Gaz', href: '/diagnostics/gaz' },
  { name: 'Plomb', href: '/diagnostics/plomb' },
  { name: 'Loi Carrez', href: '/diagnostics/carrez' },
  { name: 'Loi Boutin', href: '/diagnostics/boutin' },
  { name: 'Contact', href: '/contact' },
]

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

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
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link href="/" className="text-xl font-bold text-[#0056b3]">
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
                <nav className="grid gap-y-4">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="mt-6">
                <a
                  href="tel:0766669948"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#0056b3] hover:bg-blue-700"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  07.66.66.99.48
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
