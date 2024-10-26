import Link from 'next/link'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export function Navigation() {
  return (
    <nav className="bg-white shadow">
      {/* Bande supérieure */}
      <div className="bg-[#0056b3] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-10 items-center">
            <p className="text-sm">Intervention rapide dans tout le Calvados</p>
            <a 
              href="tel:0766669948"
              className="text-sm hover:text-gray-200 transition-colors"
            >
              07.66.66.99.48
            </a>
          </div>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#0056b3]">
                Diag Immo Caen
              </Link>
            </div>
            {/* Navigation desktop */}
            <div className="hidden sm:ml-8 sm:flex">
              <MainNav />
            </div>
          </div>

          {/* Bouton devis */}
          <div className="hidden sm:flex sm:items-center">
            <Link
              href="/devis"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0056b3] hover:bg-blue-700 transition-colors"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Menu mobile */}
          <div className="flex items-center sm:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  )
}