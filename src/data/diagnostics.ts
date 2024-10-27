import { 
  Home, 
  Search, 
  Zap, 
  Paintbrush, 
  Ruler, 
  Square, 
  AlertTriangle, 
  Bug,
  Flame
} from 'lucide-react'

export const diagnosticsItems = [
  {
    href: '/diagnostics/dpe',
    title: 'DPE',
    description: 'Diagnostic de Performance Énergétique obligatoire pour la vente et la location',
    icon: Home,
  },
  {
    href: '/diagnostics/amiante',
    title: 'Amiante',
    description: 'Repérage des matériaux contenant de l\'amiante',
    icon: Search,
  },
  {
    href: '/diagnostics/electricite',
    title: 'Électricité',
    description: 'Vérification de l\'installation électrique',
    icon: Zap,
  },
  {
    href: '/diagnostics/gaz',
    title: 'Gaz',
    description: 'Contrôle de sécurité des installations de gaz',
    icon: Flame,
  },
  {
    href: '/diagnostics/plomb',
    title: 'Plomb',
    description: 'Détection de la présence de plomb dans les peintures',
    icon: Paintbrush,
  },
  {
    href: '/diagnostics/termites',
    title: 'Termites',
    description: 'Détection de la présence de termites et autres insectes xylophages',
    icon: Bug,
  },
  {
    href: '/diagnostics/carrez',
    title: 'Loi Carrez',
    description: 'Mesurage certifié de la surface habitable pour la vente',
    icon: Ruler,
  },
  {
    href: '/diagnostics/boutin',
    title: 'Loi Boutin',
    description: 'Mesurage de la surface habitable pour la location',
    icon: Square,
  },
  {
    href: '/diagnostics/erp',
    title: 'ERP',
    description: 'État des Risques et Pollutions (naturels, miniers, technologiques)',
    icon: AlertTriangle,
  },
]