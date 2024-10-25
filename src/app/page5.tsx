export default function Home() {
  // Définition des services avec leurs liens
  const services = [
    {
      title: "DPE",
      description: "Diagnostic de Performance Énergétique obligatoire pour la vente et la location",
      icon: "🏠",
      link: "/dpe" // Lien vers la page DPE
    },
    {
      title: "Amiante",
      description: "Repérage des matériaux contenant de l'amiante",
      icon: "🔍",
      link: "/amiante"
    },
    {
      title: "Électricité",
      description: "Vérification de l'installation électrique",
      icon: "⚡",
      link: "/electricite"
    },
    {
      title: "Plomb",
      description: "Détection de la présence de plomb dans les peintures",
      icon: "🎨",
      link: "/plomb"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">DIAG IMMO CAEN</a>
            <div className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600">À propos</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              <a 
                href="tel:0766669948" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                07.66.66.99.48
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert en Diagnostic Immobilier à Caen
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Diagnostics immobiliers professionnels réalisés par un expert certifié dans le Calvados
          </p>
          <a 
            href="#contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Demander un devis gratuit
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <a 
                key={service.title} 
                href={service.link}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 block"
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Expert Certifié en Diagnostic Immobilier
            </h2>
            <p className="text-gray-600 mb-6">
              Avec une expertise approfondie dans le domaine du diagnostic immobilier,
              je vous accompagne dans toutes vos démarches immobilières à Caen et dans le Calvados.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">Expertise</h3>
                <p className="text-gray-600">Diagnostiqueur certifié</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">Rapidité</h3>
                <p className="text-gray-600">Intervention sous 48h</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-blue-600 mb-2">Qualité</h3>
                <p className="text-gray-600">Rapports détaillés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Contactez-nous
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <p className="text-xl font-semibold text-gray-900 mb-4">Freddy Meslin</p>
                <p className="text-gray-600 mb-6">
                  Expert en diagnostics immobiliers à Caen et dans le Calvados
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:0766669948"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                  >
                    07.66.66.99.48
                  </a>
                  <a 
                    href="mailto:contact@diag-immo-caen.fr"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    contact@diag-immo-caen.fr
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Diag Immo Caen - Tous droits réservés</p>
          <div className="text-blue-200 text-sm">
            <p>Expert en diagnostics immobiliers à Caen</p>
            <p>Intervention dans tout le Calvados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}