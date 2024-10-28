import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { NextResponse } from 'next/server';

export async function GET() {
  // Liste des URLs de votre site avec les URLs complètes
  const urls = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/a-propos', changefreq: 'monthly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.8 },
    { url: '/devis', changefreq: 'weekly', priority: 0.9 },
    // Pages de diagnostics
    { url: '/diagnostics/amiante', changefreq: 'monthly', priority: 0.8 },
    { url: '/diagnostics/boutin', changefreq: 'monthly', priority: 0.8 },
    { url: '/diagnostics/carrez', changefreq: 'monthly', priority: 0.8 },
    { url: '/diagnostics/dpe', changefreq: 'monthly', priority: 0.8 },
    { url: '/diagnostics/electricite', changefreq: 'monthly', priority: 0.8 },
    { url: '/diagnostics/erp', changefreq: 'monthly', priority: 0.8 },
    { url: '/diagnostics/gaz', changefreq: 'monthly', priority: 0.8 },
    { url: '/diagnostics/plomb', changefreq: 'monthly', priority: 0.8 }
  ];

  try {
    // Création du stream de sitemap avec votre vrai domaine
    const stream = new SitemapStream({
      hostname: 'https://www.diag-immo-caen.com'
    });

    // Génération du XML
    const xmlString = await streamToPromise(
      Readable.from(urls).pipe(stream)
    ).then(data => data.toString());

    // Retourne la réponse avec les bons headers
    return new NextResponse(xmlString, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate'
      }
    });

  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: "Error generating sitemap" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}