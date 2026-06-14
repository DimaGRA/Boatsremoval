const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const ROUTER_FILE = './client/src/App.tsx'; // change if your routes are elsewhere
const HOSTNAME = 'https://www.boatsremoval.com';

async function generateSitemap() {
  const routerContent = fs.readFileSync(
    path.resolve(ROUTER_FILE),
    'utf8'
  );

  const routeRegex = /path="([^"]+)"/g;
  const routes = [];

  let match;
  while ((match = routeRegex.exec(routerContent)) !== null) {
    routes.push(match[1]);
  }

  const smStream = new SitemapStream({
    hostname: HOSTNAME
  });

  routes.forEach(route => {
    smStream.write({
      url: route
    });
  });

  smStream.end();

  const sitemap = await streamToPromise(smStream);

  fs.writeFileSync(
    './client/public/sitemap.xml',
    sitemap.toString()
  );

  console.log(`Generated sitemap with ${routes.length} URLs`);
}

generateSitemap().catch(console.error);
