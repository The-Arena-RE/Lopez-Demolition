import { site, projects, projectPhotos } from './config.mjs';
import { img, callBtn, icon, eyebrow, esc } from './lib.mjs';

// Work types shown when no real project photos exist yet. These are clearly
// captioned as representative — never as completed company jobs.
const workTypes = [
  ['trashBags', 'Large Trash & Debris Removal'],
  ['emptyRoom', 'Entire House Cleanouts'],
  ['abandonedBuilding', 'Old Structure Removal'],
  ['excavatorDirt', 'Equipment & Land Work'],
  ['dirtSite', 'Cleared Lots'],
  ['truckLoading', 'Hauling & Debris Cleanup'],
];

const beforeAfter = (p, i) => `<figure class="ba reveal" style="--d:${(i % 2) * 90}ms">
  <div class="ba__frame" data-ba>
    <img src="${esc(p.after)}" alt="After: ${esc(p.alt)}" loading="lazy" decoding="async" class="ba__img">
    <div class="ba__before" data-ba-before><img src="${esc(p.before)}" alt="Before: ${esc(p.alt)}" loading="lazy" decoding="async" class="ba__img"></div>
    <span class="ba__label ba__label--before">Before</span><span class="ba__label ba__label--after">After</span>
    <input class="ba__range" type="range" min="0" max="100" value="50" aria-label="Drag to compare before and after: ${esc(p.title)}" data-ba-range>
    <span class="ba__handle" aria-hidden="true" data-ba-handle></span>
  </div>
  <figcaption>${esc(p.title)}</figcaption>
</figure>`;

export function gallerySection({ loc = 'gallery', full = false } = {}) {
  const hasReal = projects.length || projectPhotos.length;
  if (hasReal) {
    return `<section class="section section--dark gallery" aria-labelledby="gallery-title">
  <div class="container">
    <div class="section__head reveal">
      ${eyebrow('Our Work', 'eyebrow--gold')}
      <h2 id="gallery-title" class="h2 h2--light">The Work Speaks for Itself.</h2>
      <p class="section__intro section__intro--light">Real properties. Real cleanup. Real results.</p>
    </div>
    ${projects.length ? `<div class="ba-grid">${(full ? projects : projects.slice(0, 4)).map(beforeAfter).join('')}</div>` : ''}
    ${projectPhotos.length ? `<div class="masonry">${(full ? projectPhotos : projectPhotos.slice(0, 6))
      .map((p) => `<figure class="masonry__item reveal"><img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy" decoding="async"><figcaption>${esc(p.title)}</figcaption></figure>`)
      .join('')}</div>` : ''}
    <div class="center reveal">${callBtn('READY TO CLEAN UP YOUR PROPERTY? CALL NOW.', { loc })}</div>
  </div>
</section>`;
  }
  return `<section class="section section--dark gallery" aria-labelledby="gallery-title">
  <div class="container">
    <div class="section__head section__head--split reveal">
      <div>
        ${eyebrow('The Work', 'eyebrow--gold')}
        <h2 id="gallery-title" class="h2 h2--light">The Kind of Jobs We Take On.</h2>
      </div>
      <p class="section__intro section__intro--light">Big piles, full houses, old structures, and land that needs equipment. If your property looks like one of these, you're in the right place.</p>
    </div>
    <div class="worktypes">
      ${workTypes
        .map(
          ([m, t], i) => `<figure class="worktype reveal${i === 0 ? ' worktype--wide' : ''}" style="--d:${(i % 3) * 70}ms">
        <div class="media">${img(m, { sizes: i === 0 ? '(min-width: 960px) 66vw, 100vw' : '(min-width: 960px) 33vw, (min-width: 600px) 50vw, 100vw', widths: [480, 768, 1080, 1440] })}</div>
        <figcaption><span class="worktype__n">0${i + 1}</span>${t}</figcaption>
      </figure>`
        )
        .join('\n      ')}
    </div>
    <p class="gallery__note">Photos shown are representative stock images of these job types. Before-and-after photos from Lopez Demolition Company projects will be added here as jobs are completed.</p>
    <div class="center reveal">${callBtn('READY TO CLEAN UP YOUR PROPERTY? CALL NOW.', { loc })}</div>
  </div>
</section>`;
}

/** Inner-page hero. */
export function pageHero({ eyebrowText, title, lead, m, loc = 'page-hero', cta = site.primaryCta, crumbs = [] }) {
  return `<section class="phero" aria-labelledby="phero-title">
  <div class="phero__media media">${img(m, { eager: true, alt: '' })}<div class="phero__shade"></div></div>
  <div class="container phero__inner">
    ${
      crumbs.length
        ? `<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li>${crumbs
            .map((c, i) => (i === crumbs.length - 1 ? `<li aria-current="page">${esc(c[0])}</li>` : `<li><a href="${c[1]}">${esc(c[0])}</a></li>`))
            .join('')}</ol></nav>`
        : ''
    }
    ${eyebrow(eyebrowText, 'eyebrow--gold')}
    <h1 id="phero-title" class="phero__title">${title}</h1>
    ${lead ? `<p class="phero__lead">${lead}</p>` : ''}
    <div class="phero__cta">
      ${callBtn(cta, { loc, size: 'lg' })}
      <a class="hero__phone" href="${site.phoneHref}" data-call="${loc}-number"><span class="hero__phone-label">Call or tap</span>${site.phoneDisplay}</a>
    </div>
  </div>
</section>`;
}

export const breadcrumbSchema = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [['Home', '/'], ...crumbs].map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: `${site.url}${path}`,
  })),
});

export const callBand = ({ title, text, label = site.primaryCta, loc = 'service-page-band' }) => `<section class="band">
  <div class="container band__inner reveal">
    <div>
      <h2 class="band__title">${title}</h2>
      ${text ? `<p>${text}</p>` : ''}
    </div>
    <div class="band__actions">
      ${callBtn(label, { loc, variant: 'dark', size: 'lg' })}
      <a class="band__num" href="${site.phoneHref}" data-call="${loc}-number">${site.phoneDisplay}</a>
    </div>
  </div>
</section>`;

export const checklist = (items) => `<ul class="checklist">${items.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul>`;
