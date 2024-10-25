export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="text-3xl font-bold text-blue-600">
            DIAG IMMO CAEN
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-600">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-8 flex-wrap">
            {['Accueil', 'Services', 'Tarifs', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-white hover:text-blue-100 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="bg-gradient-to-b from-blue-500 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert en Diagnostic Immobilier à Caen
          </h1>
          <p className="text-xl mb-8">
            Des diagnostics immobiliers professionnels et certifiés
          </p>
          <a href="#contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Demander un devis
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
  { 
    title: 'DPE', 
    description: 'Diagnostic de Performance Énergétique',
    link: '/dpe'
  },
  { 
    title: 'Amiante', 
    description: 'Repérage des matériaux contenant de l\'amiante',
    link: '/amiante'
  },
  // ... autres services
].map((service, index) => (
  <a 
    href={service.link} 
    key={index} 
    className="bg-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow block"
  >
    <h3 className="text-xl font-bold text-blue-600 mb-3">{service.title}</h3>
    <p className="text-gray-600">{service.description}</p>
  </a>
))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Contactez-nous
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <p className="text-xl font-semibold text-blue-900 mb-4">Freddy Meslin</p>
              <p className="text-gray-600 mb-6">Expert en diagnostics immobiliers à Caen et dans le Calvados</p>
              <div className="space-y-2">
                <a 
                  href="mailto:contact@diag-immo-caen.fr" 
                  className="block text-blue-600 hover:text-blue-700"
                >
                  contact@diag-immo-caen.fr
                </a>
                <a 
                  href="tel:0766669948" 
                  className="block text-blue-600 hover:text-blue-700"
                >
                  07.66.66.99.48
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Diag Immo Caen - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
}
