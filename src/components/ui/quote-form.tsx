"use client"

export function QuoteForm() {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4 bg-[#0056b3] text-white">
        <h2 className="text-2xl font-bold">Devis gratuit immédiat</h2>
        <p className="mt-1">Obtenez votre devis en quelques clics</p>
      </div>
      <div className="h-[800px] w-full">
        <iframe 
          src="https://app.gestion-diagnostic.fr/rdv/2223/0c4eee" 
          width="100%" 
          height="100%"
          className="border-0"
          title="Formulaire de devis"
          loading="lazy"
        />
      </div>
    </div>
  )
}
