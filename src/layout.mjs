import { site } from './config.mjs';
import { esc, icon, brand, callBtn, phoneLink, mark } from './lib.mjs';

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services', match: ['/junk-removal/', '/mobile-home-removal/', '/property-cleanouts/', '/land-clearing/', '/mobile-home-pad-preparation/'] },
  { href: '/our-work/', label: 'Our Work' },
  { href: '/about/', label: 'About' },
  { href: '/service-areas/', label: 'Service Areas' },
];

export const servicesNav = [
  { href: '/junk-removal/', label: 'Junk & Trash Removal' },
  { href: '/mobile-home-removal/', label: 'Mobile Home Removal' },
  { href: '/property-cleanouts/', label: 'House & Property Cleanouts' },
  { href: '/land-clearing/', label: 'Land Clearing & Lot Cleanup' },
  { href: '/mobile-home-pad-preparation/', label: 'Bobcat Work & Pad Prep' },
];

export function businessSchema() {
  const s = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.url}/#business`,
    name: site.name,
    url: `${site.url}/`,
    telephone: site.phoneE164,
    logo: `${site.url}/assets/img/logo.svg`,
    image: `${site.url}/assets/img/og-image.png`,
    description:
      'Junk removal, mobile home removal, full house and property cleanouts, land clearing, lot cleanup, and Bobcat site work.',
    knowsAbout: ['Junk removal', 'Mobile home removal', 'Property cleanouts', 'Land clearing', 'Debris removal', 'Bobcat services', 'Mobile home pad preparation'],
  };
  const areas = [...site.citiesServed, ...site.countiesServed];
  if (areas.length) s.areaServed = areas.map((name) => ({ '@type': 'Place', name }));
  if (site.googleBusinessProfile) s.sameAs = [site.googleBusinessProfile];
  return s;
}

const isActive = (item, path) => (item.href === path || (item.match || []).includes(path) ? ' aria-current="page"' : '');

export function layout({ path, title, description, body, schema = [], bodyClass = '', noindex = false }) {
  const canonical = `${site.url}${path}`;
  const schemas = [businessSchema(), ...schema];
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
${noindex || !site.searchVisible ? `<meta name="robots" content="noindex, ${site.searchVisible ? 'follow' : 'nofollow'}">` : '<meta name="robots" content="index, follow, max-image-preview:large">'}
<meta name="theme-color" content="#101113">
<meta name="format-detection" content="telephone=yes">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(site.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${site.url}/assets/img/og-image.png">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://images.pexels.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="/assets/css/styles.css">
<script defer src="/assets/js/main.js"></script>
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Skip to content</a>
<header class="header" data-header>
  <div class="header__inner container">
    ${brand()}
    <nav class="nav" aria-label="Main" id="site-nav" data-nav>
      <ul class="nav__list">
        ${nav.map((n) => `<li><a href="${n.href}"${isActive(n, path)}>${n.label}</a></li>`).join('\n        ')}
      </ul>
      <div class="nav__mobile-extra">
        <p class="nav__label">Services</p>
        <ul class="nav__services">
          ${servicesNav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('\n          ')}
        </ul>
        ${callBtn(`CALL NOW | ${site.phoneDisplay}`, { loc: 'mobile-menu', size: 'block' })}
      </div>
    </nav>
    <div class="header__actions">
      <a class="btn btn--gold header__call" href="${site.phoneHref}" data-call="header">${icon('phone')}<span class="header__call-label">CALL NOW</span><span class="header__call-sep" aria-hidden="true">|</span><span class="header__call-num">${site.phoneDisplay}</span></a>
      <button class="nav-toggle" type="button" aria-controls="site-nav" aria-expanded="false" data-nav-toggle>
        <span class="nav-toggle__open">${icon('menu')}</span><span class="nav-toggle__close">${icon('close')}</span><span class="sr-only">Menu</span>
      </button>
    </div>
  </div>
</header>

<main id="main">
${body}
</main>

<footer class="footer">
  <div class="container footer__top">
    <div class="footer__brand">
      <div class="footer__logo">${mark}<div><p class="footer__name">LOPEZ DEMOLITION COMPANY</p><p class="footer__services">Junk Removal <span>|</span> Mobile Home Removal <span>|</span> Property Cleanouts <span>|</span> Land Clearing</p></div></div>
      <a class="footer__call" href="${site.phoneHref}" data-call="footer">${icon('phone')}<span>CALL ${site.phoneDisplay}</span></a>
    </div>
    <nav class="footer__col" aria-label="Footer">
      <p class="footer__heading">Company</p>
      <ul>${nav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}<li><a href="/contact/">Contact</a></li></ul>
    </nav>
    <nav class="footer__col" aria-label="Services">
      <p class="footer__heading">Services</p>
      <ul>${servicesNav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join('')}</ul>
    </nav>
    <div class="footer__col">
      <p class="footer__heading">Get In Touch</p>
      <ul class="footer__info">
        <li>${icon('phone')}${phoneLink('footer-info')}</li>
        <li>${icon('pin')}<span>${
          site.citiesServed.length ? esc(site.citiesServed.join(', ')) : site.primaryCity ? esc(site.primaryCity) : `<a href="/service-areas/">Call to confirm service in your area</a>`
        }</span></li>
        ${site.hours.length ? `<li>${icon('clock')}<span>${site.hours.map(([d, h]) => `${esc(d)}: ${esc(h)}`).join('<br>')}</span></li>` : ''}
      </ul>
    </div>
  </div>
  <div class="container footer__bottom">
    <p>&copy; ${new Date().getFullYear()} ${site.name}. All rights reserved.</p>
    <p><a href="/privacy/">Privacy Policy</a></p>
  </div>
</footer>

<a class="callbar" href="${site.phoneHref}" data-call="sticky-mobile" aria-label="Call ${site.name} now at ${site.phoneDisplay}">
  <span class="callbar__icon">${icon('phone')}</span><span class="callbar__text">CALL NOW <span aria-hidden="true">|</span> ${site.phoneDisplay}</span>
</a>
</body>
</html>
`;
}
