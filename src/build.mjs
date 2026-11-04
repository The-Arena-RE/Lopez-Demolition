// Static site generator: node src/build.mjs  ->  ./public
import { mkdir, writeFile, rm, cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from './config.mjs';
import { layout } from './layout.mjs';
import { homePage } from './pages/home.mjs';
import { servicePages } from './pages/services.mjs';
import { otherPages } from './pages/other.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = join(root, 'public');

const pages = [homePage(), ...servicePages(), ...otherPages()];

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(join(root, 'assets'), join(out, 'assets'), { recursive: true });

for (const p of pages) {
  const file = p.path.endsWith('.html') ? join(out, p.path) : join(out, p.path, 'index.html');
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, layout(p));
}

// Sitemap + robots
const today = new Date().toISOString().slice(0, 10);
const indexable = pages.filter((p) => !p.noindex);
await writeFile(
  join(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable
  .map(
    (p) =>
      `  <url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod><priority>${p.path === '/' ? '1.0' : p.path === '/privacy/' ? '0.2' : '0.8'}</priority></url>`
  )
  .join('\n')}
</urlset>
`
);
// Cloudflare static-asset headers
await writeFile(
  join(out, '_headers'),
  `/assets/*
  Cache-Control: public, max-age=604800

/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()
`
);

await writeFile(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`Built ${pages.length} pages -> public/`);
