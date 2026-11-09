import { site, videos } from '../config.mjs';
import { img, imgSrc, callBtn, phoneLink, icon, eyebrow, faqList, faqSchema, esc } from '../lib.mjs';
import { gallerySection } from '../partials.mjs';

export const homeFaq = [
  ['Do you handle large amounts of junk and trash?', 'Yes. Lopez Demolition Company handles large-scale junk removal and property cleanup projects. Call us to discuss what needs to be removed and how much material is involved.'],
  ['Can you clean out an entire house?', 'Yes. We handle complete house and property cleanouts, including properties with substantial amounts of unwanted items and debris.'],
  ['Do you remove old mobile homes?', 'Yes. Contact us with the location, condition, and accessibility of the mobile home so we can discuss removal options and the project requirements.'],
  ['Can you clear a lot or prepare a mobile home site?', 'We offer Bobcat equipment work and site preparation services. Call to discuss the property and the specific work needed.'],
  ['How much does junk removal or property cleanup cost?', `Pricing depends on the amount and type of material, labor, equipment, property accessibility, transportation, and the scope of the job. Call <a href="${site.phoneHref}" data-call="faq">${site.phoneDisplay}</a> to discuss a quote.`],
  ['Do I have to fill out anything online?', 'No. Just give us a call and tell us what you need removed.'],
  ['How quickly can you start?', 'Scheduling depends on the type and size of the job and current availability. Call to discuss your project and timing.'],
];

const services = [
  {
    title: 'Heavy-Duty Junk & Trash Removal',
    href: '/junk-removal/',
    m: 'trashMattress',
    text: "Large piles of junk, bulky waste, discarded materials, and overwhelming amounts of trash. Whether it's a backyard, an entire property, or a major cleanup project, call us to discuss getting it removed.",
  },
  {
    title: 'Mobile Home Removal',
    href: '/mobile-home-removal/',
    m: 'mobileHomes',
    text: "Have an unwanted, damaged, or deteriorating mobile home taking up valuable space? We handle mobile home removal projects and related site cleanup. Call to discuss the home's condition, accessibility, and removal requirements.",
  },
  {
    title: 'Full House & Property Cleanouts',
    href: '/property-cleanouts/',
    m: 'boxesRoom',
    text: 'Entire houses, rental properties, inherited homes, vacant properties, and buildings filled with unwanted items. From room-to-room cleanouts to large-scale property cleanup, we handle the dirty work.',
  },
  {
    title: 'Land Clearing & Lot Cleanup',
    href: '/land-clearing/',
    m: 'excavatorSoil',
    text: 'Overgrown lots, unwanted debris, trash-covered properties, and land that needs attention. We help property owners clear out unwanted materials and reclaim usable space.',
  },
  {
    title: 'Bobcat Work & Mobile Home Pad Preparation',
    href: '/mobile-home-pad-preparation/',
    m: 'heroPoster',
    text: 'Need a site cleared or prepared for a mobile home? Ask about Bobcat equipment work, ground preparation, and base-level site work.',
  },
  {
    title: 'Demolition & Debris Cleanup',
    href: null,
    m: 'teardown',
    text: 'For structures, unwanted improvements, and demolition-related cleanup, contact Lopez Demolition Company to discuss the work involved.',
  },
];

const audiences = [
  ['home', 'Homeowners', 'Clearing clutter, dealing with large amounts of trash, preparing for renovations, and reclaiming neglected areas.'],
  ['key', 'Real Estate Investors', 'Cleaning out distressed properties, unwanted belongings, and debris before renovation or resale.'],
  ['land', 'Landowners', 'Removing unwanted mobile homes, clearing junk from vacant land, and preparing property for its next use.'],
  ['hardhat', 'Property Managers & Contractors', 'Handling large cleanouts, discarded materials, demolition debris, and cleanup projects that require additional labor or equipment.'],
];

const steps = [
  ['01', 'Give Us a Call', 'Tell us where the property is located, what needs to be removed, and approximately how large the job is.'],
  ['02', 'Discuss the Work', "We'll talk through the details, access, equipment needs, and what is involved in getting the property cleaned up."],
  ['03', 'Get It Cleared', 'Once the scope, price, and schedule are agreed upon, we get to work handling the removal and cleanup.'],
];

const areaBlock = () => {
  const has = site.citiesServed.length || site.primaryCity;
  if (!has) {
    return `<div class="area__card reveal">
      <div class="area__pin">${icon('pin')}</div>
      <div>
        <h3>Tell us where the property is.</h3>
        <p>Every job starts with a quick conversation about the location, access, and the size of the cleanup. Give us a call with the property's city or address and we'll let you know whether it's within our working area.</p>
      </div>
    </div>`;
  }
  return `<div class="area__grid reveal">
    ${site.primaryCity ? `<div class="area__primary"><p class="eyebrow">Based in</p><p class="area__city">${esc(site.primaryCity)}</p>${site.travelArea ? `<p>${esc(site.travelArea)}</p>` : ''}</div>` : ''}
    ${site.citiesServed.length ? `<ul class="area__list">${site.citiesServed.map((c) => `<li>${icon('check')}${esc(c)}</li>`).join('')}</ul>` : ''}
    ${site.countiesServed.length ? `<p class="area__counties">Counties: ${esc(site.countiesServed.join(', '))}</p>` : ''}
  </div>`;
};

export const homePage = () => ({
  path: '/',
  title: 'Junk Removal & Mobile Home Removal | Lopez Demolition Company',
  description:
    'Need junk, debris, or an unwanted mobile home removed? Lopez Demolition Company handles large property cleanouts, lot clearing, and site preparation. Call (210) 739-8016.',
  schema: [faqSchema(homeFaq)],
  bodyClass: 'page-home',
  body: `
<!-- 1. HERO -->
<section class="hero" aria-labelledby="hero-title">
  <div class="hero__media media">
    ${img('heroPoster', { eager: true, cls: 'hero__img', alt: '' })}
    <video class="bg-video" muted loop playsinline preload="none" poster="${imgSrc('heroPoster', 1920)}" data-src="${videos.hero}" aria-hidden="true"></video>
    <div class="hero__shade"></div>
  </div>
  <div class="container hero__inner">
    <div class="hero__content">
      ${eyebrow('LOPEZ DEMOLITION COMPANY', 'eyebrow--gold')}
      <h1 id="hero-title" class="hero__title">Junk Removal. Mobile Home Removal. <span>Complete Property Cleanouts.</span></h1>
      <p class="hero__impact">BIG MESS. BIG CLEANUP. ONE CALL.</p>
      <p class="hero__lead">From houses packed with unwanted junk to abandoned mobile homes, massive trash piles, and properties that need a complete cleanup, Lopez Demolition Company handles the heavy work. We remove the mess so you can get your property back.</p>
      <div class="hero__cta">
        ${callBtn(site.primaryCta, { loc: 'hero', size: 'lg' })}
        <a class="hero__phone" href="${site.phoneHref}" data-call="hero-number"><span class="hero__phone-label">Call or tap</span>${site.phoneDisplay}</a>
      </div>
      <p class="hero__note">Tell us what needs to go. We'll discuss the job and your next steps.</p>
    </div>
  </div>
  <div class="hero__caps">
    <div class="container">
      <ul>
        <li>LARGE CLEANOUTS</li>
        <li>MOBILE HOME REMOVAL</li>
        <li>BOBCAT EQUIPMENT</li>
      </ul>
    </div>
  </div>
</section>

<!-- 2. PROBLEM RECOGNITION -->
<section class="section section--light problem" aria-labelledby="problem-title">
  <div class="container split">
    <div class="split__text reveal">
      ${eyebrow('The Problem')}
      <h2 id="problem-title" class="h2">Too Much <span class="h2-emph">Junk</span>? Too Big of a Job? <span class="accent">We've Got You.</span></h2>
      <p class="lead">Some cleanups are bigger than a pickup truck and a few trips to the dump.</p>
      <p>Maybe you're dealing with a property full of trash. Maybe an old mobile home needs to go. Maybe you've inherited a house packed with unwanted belongings, or you're trying to get a lot cleared and ready for its next use.</p>
      <p>Whatever the situation, you shouldn't have to figure out the heavy lifting, hauling, and equipment work yourself.</p>
      <p class="strong">That's what Lopez Demolition Company is here for.</p>
      ${callBtn('CALL LOPEZ DEMOLITION COMPANY', { loc: 'problem', variant: 'dark' })}
    </div>
    <figure class="split__media media media--frame reveal">
      ${img('trashMattress', { sizes: '(min-width: 960px) 46vw, 100vw' })}
    </figure>
  </div>
</section>

<!-- 3. SERVICES -->
<section class="section section--white services" id="services" aria-labelledby="services-title">
  <div class="container">
    <div class="section__head reveal">
      ${eyebrow('What We Do')}
      <h2 id="services-title" class="h2">Heavy cleanup services, <span class="accent">handled start to finish.</span></h2>
      <p class="section__intro">Six ways we help property owners get rid of what they don't want — from bulky junk to unwanted mobile homes and the ground underneath them.</p>
    </div>
    <div class="cards">
      ${services
        .map(
          (s, i) => `<article class="card reveal" style="--d:${(i % 3) * 80}ms">
        <div class="card__media media">${img(s.m, { sizes: '(min-width: 1100px) 33vw, (min-width: 700px) 50vw, 100vw', widths: [480, 768, 1080] })}<span class="card__num">0${i + 1}</span></div>
        <div class="card__body">
          <h3 class="card__title">${s.href ? `<a href="${s.href}">${s.title}</a>` : s.title}</h3>
          <p>${s.text}</p>
          <div class="card__actions">
            <a class="card__call" href="${site.phoneHref}" data-call="service-card">${icon('phone')}CALL FOR A QUOTE</a>
            ${s.href ? `<a class="card__more" href="${s.href}" aria-label="Learn more about ${s.title}">Details ${icon('arrow')}</a>` : ''}
          </div>
        </div>
      </article>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<!-- 4. HEAVY CLEANUP FEATURE -->
<section class="feature" aria-labelledby="feature-title">
  <div class="feature__media media">
    ${img('landfill', { alt: '' })}
    <video class="bg-video" muted loop playsinline preload="none" poster="${imgSrc('landfill', 1920)}" data-src="${videos.feature}" aria-hidden="true"></video>
    <div class="feature__shade"></div>
  </div>
  <div class="container feature__inner">
    <div class="feature__content reveal">
      <span class="rule"></span>
      <h2 id="feature-title" class="feature__title">Not Every Cleanup Fits in a Dumpster.</h2>
      <p class="feature__sub">And not every job can be handled with a pickup truck.</p>
      <div class="feature__body">
        <p>Some properties have years of accumulated trash. Others have entire buildings full of debris, broken materials, abandoned belongings, and unwanted structures.</p>
        <p>Lopez Demolition Company takes on substantial cleanup projects that need serious labor, hauling, and equipment.</p>
        <p>Whether you're cleaning out a property to sell, preparing land for a new use, or simply getting rid of a massive amount of junk, one call is the place to start.</p>
      </div>
      <div class="feature__cta">
        ${callBtn('HAVE A BIG JOB? CALL US.', { loc: 'feature', size: 'lg' })}
        ${phoneLink('feature-number', 'feature__phone')}
      </div>
    </div>
  </div>
</section>

<!-- 5. MOBILE HOME SPOTLIGHT -->
<section class="section section--light spotlight" aria-labelledby="mh-title">
  <div class="container">
    <div class="spotlight__wrap">
      <figure class="spotlight__media media reveal">
        ${img('mobileHomes', { sizes: '(min-width: 960px) 60vw, 100vw' })}
      </figure>
      <div class="spotlight__panel reveal">
        ${eyebrow('Mobile Home Removal', 'eyebrow--gold')}
        <h2 id="mh-title" class="h2 h2--light">That Old Mobile Home Isn't Going to Remove Itself.</h2>
        <p>An unwanted mobile home can take up valuable land, become an eyesore, and make future property plans difficult.</p>
        <p>Lopez Demolition Company handles mobile home removal projects and the cleanup that comes with them.</p>
        <p>Whether the home is deteriorating, no longer being used, or simply needs to be removed from the property, call us to discuss the situation.</p>
        <p class="muted">We'll need to understand the condition, location, accessibility, and scope of the project before determining the next steps.</p>
        <div class="spotlight__actions">
          ${callBtn('CALL ABOUT MOBILE HOME REMOVAL', { loc: 'mobile-home-spotlight' })}
          <a class="link-arrow link-arrow--light" href="/mobile-home-removal/">More about mobile home removal ${icon('arrow')}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 6. GALLERY -->
${gallerySection({ loc: 'gallery' })}

<!-- 7. WHO WE HELP -->
<section class="section section--light who" aria-labelledby="who-title">
  <div class="container">
    <div class="section__head reveal">
      ${eyebrow('Who We Help')}
      <h2 id="who-title" class="h2">Property Owners. Investors. Contractors. <span class="accent">We Handle the Cleanup.</span></h2>
    </div>
    <div class="who__grid">
      ${audiences
        .map(
          ([ic, t, d], i) => `<article class="who__card reveal" style="--d:${i * 70}ms">
        <span class="who__icon">${icon(ic)}</span>
        <h3>${t}</h3>
        <p>${d}</p>
      </article>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<!-- 8. HOW IT WORKS -->
<section class="section section--dark steps" aria-labelledby="steps-title">
  <div class="container">
    <div class="section__head section__head--center reveal">
      ${eyebrow('How It Works', 'eyebrow--gold')}
      <h2 id="steps-title" class="h2 h2--light">One Call. A Clear Plan. A Cleaner Property.</h2>
    </div>
    <ol class="steps__list">
      ${steps
        .map(
          ([n, t, d], i) => `<li class="step reveal" style="--d:${i * 90}ms">
        <span class="step__num">${n}</span>
        <h3>${t}</h3>
        <p>${d}</p>
      </li>`
        )
        .join('\n      ')}
    </ol>
    <div class="center reveal">${callBtn('CALL TO GET STARTED', { loc: 'how-it-works', size: 'lg' })}</div>
  </div>
</section>

<!-- 9. ABOUT -->
<section class="section section--white about" aria-labelledby="about-title">
  <div class="container split split--reverse">
    <figure class="split__media media media--frame reveal">
      ${img('heavyEquipment', { sizes: '(min-width: 960px) 46vw, 100vw' })}
    </figure>
    <div class="split__text reveal">
      ${eyebrow('About Lopez Demolition Company')}
      <h2 id="about-title" class="h2">We Do the Work That Gets Your Property Back.</h2>
      <p class="lead">At Lopez Demolition Company, our work is straightforward: helping property owners get rid of what they no longer want or need.</p>
      <p>That might mean removing an old mobile home, cleaning out an entire house, hauling off large amounts of debris, or using equipment to clear and prepare a property.</p>
      <p>We understand that some properties need more than a basic trash pickup. They need real labor, proper equipment, and a clear plan.</p>
      <p>When you've got a major cleanup project, give us a call and tell us what you're dealing with.</p>
      <div class="btn-row">
        ${callBtn('SPEAK WITH LOPEZ DEMOLITION COMPANY', { loc: 'about', variant: 'dark' })}
        <a class="link-arrow" href="/about/">About us ${icon('arrow')}</a>
      </div>
    </div>
  </div>
</section>

<!-- 10. SERVICE AREA -->
<section class="section section--light area" aria-labelledby="area-title">
  <div class="container">
    <div class="section__head reveal">
      ${eyebrow('Service Area')}
      <h2 id="area-title" class="h2">Proudly Serving Property Owners Throughout Our Service Area</h2>
    </div>
    ${areaBlock()}
    <div class="area__cta reveal">${callBtn('NOT SURE IF WE SERVE YOUR AREA? GIVE US A CALL.', { loc: 'service-area', variant: 'dark' })}</div>
  </div>
</section>

<!-- 11. FAQ -->
<section class="section section--white faq-section" aria-labelledby="faq-title">
  <div class="container faq-wrap">
    <div class="faq-wrap__head reveal">
      ${eyebrow('FAQ')}
      <h2 id="faq-title" class="h2">Questions Before You Call?</h2>
      <p>Straight answers about how we work. For anything specific to your property, the fastest answer is a phone call.</p>
      ${callBtn(site.primaryCta, { loc: 'faq', variant: 'dark' })}
    </div>
    <div class="reveal">${faqList(homeFaq)}</div>
  </div>
</section>

<!-- 12. FINAL CTA -->
${finalCta()}
`,
});

export const finalCta = (loc = 'final-cta') => `<section class="final" aria-labelledby="final-title-${loc}">
  <div class="final__media media">${img('teardown', { alt: '' })}<div class="final__shade"></div></div>
  <div class="container final__inner reveal">
    ${eyebrow('LOPEZ DEMOLITION COMPANY', 'eyebrow--gold')}
    <h2 id="final-title-${loc}" class="final__title">The Mess Doesn't Have to Stay.</h2>
    <p class="final__sub">Junk. Trash. Mobile homes. Entire property cleanouts.</p>
    <p class="final__line">Whatever you're dealing with, start with one call.</p>
    ${callBtn(site.primaryCta, { loc, size: 'xl' })}
    <a class="final__phone" href="${site.phoneHref}" data-call="${loc}-number">${site.phoneDisplay}</a>
  </div>
</section>`;
