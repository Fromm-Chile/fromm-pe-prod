import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream';
import { promisify } from 'util';

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/soluciones', changefreq: 'weekly', priority: 0.8 },
  { url: '/envolvedora', changefreq: 'weekly', priority: 0.8 },
  { url: '/film-embalaje', changefreq: 'weekly', priority: 0.8 },
  { url: '/productos', changefreq: 'weekly', priority: 0.8 },
  { url: '/productos/:slug', changefreq: 'weekly', priority: 0.8 },
  { url: '/cotizacion', changefreq: 'monthly', priority: 0.7 },
  { url: '/confirmacion', changefreq: 'monthly', priority: 0.7 },
  { url: '/servicio-tecnico', changefreq: 'monthly', priority: 0.7 },
  { url: '/zunchos-herramientas', changefreq: 'monthly', priority: 0.7 },
  { url: '/recursos', changefreq: 'monthly', priority: 0.7 },
  { url: '/Airpads', changefreq: 'monthly', priority: 0.7 },
  { url: '/mercados', changefreq: 'monthly', priority: 0.7 },
  { url: '/mineria', changefreq: 'monthly', priority: 0.7 },
  { url: '/forestal', changefreq: 'monthly', priority: 0.7 },
  { url: '/siderurgica', changefreq: 'monthly', priority: 0.7 },
  { url: '/agricola', changefreq: 'monthly', priority: 0.7 },
  { url: '/nosotros', changefreq: 'monthly', priority: 0.7 },
  { url: '/politica-calidad', changefreq: 'monthly', priority: 0.7 },
  { url: '/codigo-etica', changefreq: 'monthly', priority: 0.7 },
  { url: '/Contacto', changefreq: 'monthly', priority: 0.7 },
  { url: '/noticias', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://fromm-pack.cl' });
const writeStream = createWriteStream(resolve('public', 'sitemap.xml'));

const pipelineAsync = promisify(pipeline);

async function generateSitemap() {
  try {
    await pipelineAsync(
      sitemap,
      writeStream
    );
    console.log('Sitemap created successfully!');
  } catch (error) {
    console.error('Error creating sitemap:', error);
  }
}

links.forEach(link => sitemap.write(link));
sitemap.end();

generateSitemap();