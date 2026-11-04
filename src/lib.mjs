import { site, media } from './config.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- Images ----------------------------------------------------------
const pexelsUrl = (id, w) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export function imgSrc(m, w = 1280) {
  if (typeof m === 'string') m = media[m];
  return m.src ? m.src : pexelsUrl(m.pexels, w);
}

/**
 * Responsive <img>. `m` is a media key or object. `sizes` is the sizes attr.
 */
export function img(m, { sizes = '100vw', cls = '', eager = false, widths = [480, 768, 1080, 1440, 1920], alt } = {}) {
  if (typeof m === 'string') m = media[m];
  const altText = alt ?? m.alt;
  const srcset = m.src ? '' : ` srcset="${widths.map((w) => `${pexelsUrl(m.pexels, w)} ${w}w`).join(', ')}" sizes="${sizes}"`;
  return `<img src="${imgSrc(m, 1280)}"${srcset} alt="${esc(altText)}"${cls ? ` class="${cls}"` : ''} ${
    eager ? 'fetchpriority="high"' : 'loading="lazy"'
  } decoding="async" width="1600" height="1067">`;
}

// ---------- Phone CTA -------------------------------------------------------
/**
 * Every lead action uses the same tel: link. `loc` feeds click tracking.
 */
export function callBtn(label = site.primaryCta, { loc = 'content', variant = 'gold', size = '', showNumber = false } = {}) {
  return `<a class="btn btn--${variant}${size ? ` btn--${size}` : ''}" href="${site.phoneHref}" data-call="${loc}">${icon('phone')}<span>${esc(
    label
  )}</span>${showNumber ? `<span class="btn__num">${site.phoneDisplay}</span>` : ''}</a>`;
}

export function phoneLink(loc = 'content', cls = 'phone-link') {
  return `<a class="${cls}" href="${site.phoneHref}" data-call="${loc}">${site.phoneDisplay}</a>`;
}

// ---------- Icons (inline SVG, no icon library) ------------------------------
const paths = {
  phone:
    '<path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" fill="currentColor"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
  check: '<path d="m5 12.5 4.2 4.2L19 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  home: '<path d="M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5M10 20v-5.5h4V20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>',
  key: '<circle cx="8" cy="15" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m11 12 8.5-8.5M16.5 6.5l2.5 2.5M14 9l2 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  land: '<path d="M2 19h20M4 19l5-8 3.5 5 2.5-3.5L20 19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/><circle cx="17" cy="6.5" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  hardhat:
    '<path d="M3 17.5h18M4.5 17.5v-2A7.5 7.5 0 0 1 12 8a7.5 7.5 0 0 1 7.5 7.5v2M9.5 8.4V5.5h5v2.9" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  close: '<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
  pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="9.5" r="2.5" fill="none" stroke="currentColor" stroke-width="1.8"/>',
  clock: '<circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>',
  plus: '<path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
};
export const icon = (name, cls = 'icon') =>
  `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]}</svg>`;

// ---------- Brand mark ------------------------------------------------------
// Simplified, legible header version of the logo: a gold excavator-bucket
// monogram inside a beveled badge + condensed wordmark.
export const mark = `<svg class="brand__mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
  <defs><linearGradient id="lg-gold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F2C063"/><stop offset=".55" stop-color="#E4A52D"/><stop offset="1" stop-color="#E98A24"/></linearGradient></defs>
  <path d="M8 2h32l6 6v32l-6 6H8l-6-6V8z" fill="#101113" stroke="url(#lg-gold)" stroke-width="2"/>
  <path d="M14 12v20h11" fill="none" stroke="url(#lg-gold)" stroke-width="4.5" stroke-linecap="square"/>
  <path d="M24 16l9-4 4 8-5 4" fill="none" stroke="#F7F7F5" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M32 24l4 0 1 5c-2 3-6 4-9 3l1-4z" fill="url(#lg-gold)"/>
</svg>`;

export const brand = (loc = 'header') => `<a class="brand" href="/" aria-label="${site.name} — Home">
  ${mark}
  <span class="brand__text"><span class="brand__name">LOPEZ</span><span class="brand__sub">DEMOLITION COMPANY</span></span>
</a>`;

// ---------- Section helpers --------------------------------------------------
export const eyebrow = (t, cls = '') => `<p class="eyebrow ${cls}">${esc(t)}</p>`;

export const faqList = (items) => `<div class="faq">
${items
  .map(
    ([q, a]) => `<details class="faq__item"><summary><span>${esc(q)}</span>${icon('plus', 'faq__icon')}</summary><div class="faq__a"><p>${a}</p></div></details>`
  )
  .join('\n')}
</div>`;

export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') },
  })),
});
