"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const diagnosticTitles: { [key: string]: string } = {
  'dpe': 'DPE',
  'amiante': 'Amiante',
  'electricite': 'Électricité',
  'gaz': 'Gaz',
  'plomb': 'Plomb',
  'termites': 'Termites',
  'carrez': 'Loi Carrez',
  'boutin': 'Loi Boutin',
  'erp': 'ERP'
}

export function Breadcrumb() {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(Boolean)

  if (paths.length === 0) return null

  return (
    <nav className="bg-white border-b" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center h-12 space-x-2 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-[#0056b3]">
              Accueil
            </Link>
          </li>
          {paths.map((path, index) => {
            const href = `/${paths.slice(0, index + 1).join('/')}`
            const isLast = index === paths.length - 1
            const title = path === 'diagnostics' 
              ? 'Diagnostics' 
              : diagnosticTitles[path] || path

            return (
              <li key={path} className="flex items-center">
                <span className="text-gray-400 mx-2">/</span>
                {isLast ? (
                  <span className="text-[#0056b3] font-medium">{title}</span>
                ) : (
                  <Link href={href} className="text-gray-500 hover:text-[#0056b3]">
                    {title}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </nav>
  )
}