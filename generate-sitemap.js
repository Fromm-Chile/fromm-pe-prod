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
  { url: '/productos/enzunchadora-batería-p331', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-p403', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-p404', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p318', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p328', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p329', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p328s', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-batería-p329s', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-mesa-pm207', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-mesa-pm309', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-neumatica-p358', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-neumatica-p359', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-neumatica-p380', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-acero-a337', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-acero-a333', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-acero-a335', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/enzunchadora-manual-acero-a338', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-manual-acero-a402', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-manual-acero-a412', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a480', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a482', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a483', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a380', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a383', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/herramienta-neumatica-acero-a385', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/maquina-envoltura-giratoria-fs360', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/maquina-envoltura-giratoria-fs395', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-semiautomatico', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-metal-bobinas', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-aluminio', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-otros-metales', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-madera', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/airpad-ap100', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/airpad-ap150', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/paperpad', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/zuncho-acero', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/zuncho-poliester', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-construccion', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/automatizacion-industrial-papel-carton', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-100', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-150', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-200', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-600', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-610', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-611', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/cabezal-mh-550', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-tunel-fv300', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-tunel-fv350', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/sellos-metalicos', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/escuadras', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/equilabradores-balancines', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/corta-zuncho-alta-resistencia', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/zuncho-polipropileno', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/sellador-manul-zuncho-plastico', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/tensor-manul-zuncho-plastico', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/balancin-equilibrador-carga', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/carro-devanador-zunchos', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/corta-zuncho-pet-acero', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/corta-zuncho-pet-acero-heavy-duty', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/frl-unidad-tratamiento-aire', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-fr300', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-fr2000', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-fs380a', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-fs500a', changefreq: 'monthly', priority: 0.7 },
  { url: '/productos/envolvedora-automatica-omc-h', changefreq: 'monthly', priority: 0.7 },
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