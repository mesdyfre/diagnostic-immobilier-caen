"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { name: 'Accueil', href: '/' },
  { 
    name: 'Diagnostics', 
    href: '/diagnostics',
    children: [
      { 
        name: 'DPE', 
        href: '/diagnostics/dpe',
        description: 'Diagnostic de Performance Énergétique'
      },
      { 
        name: 'Amiante', 
        href: '/diagnostics/amiante',
        description: 'Repérage des matériaux amiantés'
      },
      { 
        name: 'Électricité', 
        href: '/diagnostics/electricite',
        description: 'Sécurité électrique'
      },
      { 
        name: 'Plomb', 
        href: '/diagnostics/plomb',
        description: 'Diagnostic plomb - CREP'
      },
      { 
        name: 'Carrez', 
        href: '/diagnostics/carrez',
        description: 'Mesurage Loi Carrez'
      },
      { 
        name: 'Boutin', 
        href: '/diagnostics/boutin',
        description: 'Surface habitable location'
      },
      {
        name: 'Gaz',
        href: '/diagnostics/gaz',
        description: 'Sécurité installation gaz'
      },
      {
        name: 'ERP',
        href: '/diagnostics/erp',
        description: 'État des Risques et Pollutions'
      },
    ],
  },
  { name: 'À propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex items-center space-x-8">
      {navigationItems.map((item) => {
        if (item.children) {
          return (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className={`${
                  pathname === item.href || pathname.startsWith('/diagnostics/')
                    ? 'text-[#0056b3]'
                    : 'text-gray-600'
                } hover:text-[#0056b3] px-3 py-2 text-sm font-medium inline-flex items-center`}
              >
                {item.name}
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid bg-white p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className={`${
                          pathname === child.href
                            ? 'bg-gray-50 text-[#0056b3]'
                            : 'text-gray-900'
                        } p-3 hover:bg-gray-50 rounded-md group flex flex-col`}
                      >
                        <span className="font-medium">{child.name}</span>
                        <span className="text-sm text-gray-500">{child.description}</span>
                      </Link>
                    ))}
                  </div>
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
              pathname === item.href
                ? 'text-[#0056b3]'
                : 'text-gray-600'
            } hover:text-[#0056b3] px-3 py-2 text-sm font-medium`}
          >
            {item.name}
          </Link>
        )
      })}
    </div>
  )
}