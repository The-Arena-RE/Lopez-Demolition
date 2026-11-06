import { site } from '../config.mjs';
import { img, callBtn, icon, eyebrow, esc } from '../lib.mjs';
import { pageHero, gallerySection, breadcrumbSchema, callBand, checklist } from '../partials.mjs';
import { finalCta } from './home.mjs';
import { servicesNav } from '../layout.mjs';

const serviceLinks = () => `<div class="related__grid">${servicesNav
  .map((s) => `<a class="related__card reveal" href="${s.href}"><span>${s.label}</span>${icon('arrow')}</a>`)
  .join('')}</div>`;

// ------------------------------------------------------------------ ABOUT
const about = () => ({
  path: '/about/',
  title: 'About Lopez Demolition Company | Junk Removal & Property Cleanup',
  description:
    'Lopez Demolition Company helps property owners get rid of junk, old mobile homes, and debris with real labor, Bobcat equipment, and a clear plan. Call (210) 739-8016.',
  schema: [breadcrumbSchema([['About', '/about/']])],
  body: `
${pageHero({
  eyebrowText: 'About Lopez Demolition Company',
  title: 'We Do the Work That <span>Gets Your Property Back.</span>',
  lead: 'Junk removal, mobile home removal, full property cleanouts, and Bobcat site work — for properties that need more than a basic trash pickup.',
  m: 'heavyEquipment',
  loc: 'about-hero',
  cta: 'SPEAK WITH LOPEZ DEMOLITION COMPANY',
  crumbs: [['About', '/about/']],
})}

<section class="section section--white">
  <div class="container split">
    <div class="split__text reveal">
      ${eyebrow('Our Work')}
      <h2 class="h2">Straightforward work for difficult properties.</h2>
      <p class="lead">At Lopez Demolition Company, our work is straightforward: helping property owners get rid of what they no longer want or need.</p>
      <p>That might mean removing an old mobile home, cleaning out an entire house, hauling off large amounts of debris, or using equipment to clear and prepare a property.</p>
      <p>We understand that some properties need more than a basic trash pickup. They need real labor, proper equipment, and a clear plan.</p>
      <p>When you've got a major cleanup project, give us a call and tell us what you're dealing with.</p>
    </div>
    <figure class="split__media media media--frame reveal">${img('truckLoading', { sizes: '(min-width: 960px) 46vw, 100vw' })}</figure>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    <div class="section__head reveal">${eyebrow('How We Approach a Job', 'eyebrow--gold')}<h2 class="h2 h2--light">What you can expect when you call.</h2></div>
    <div class="values">
      <article class="value reveal"><span class="value__n">01</span><h3>A real conversation</h3><p>You talk to us directly about the property, what needs to go, and what you want the end result to be.</p></article>
      <article class="value reveal" style="--d:80ms"><span class="value__n">02</span><h3>Clear scope before work starts</h3><p>We talk through access, equipment, and what's involved, and agree on scope, price, and schedule before we begin.</p></article>
      <article class="value reveal" style="--d:160ms"><span class="value__n">03</span><h3>Labor and equipment that fit the job</h3><p>Big cleanups need more than a pickup truck. We bring the crew and Bobcat equipment the work calls for.</p></article>
    </div>
  </div>
</section>

<section class="section section--light">
  <div class="container">
    <div class="section__head reveal">${eyebrow('Services')}<h2 class="h2">What we handle</h2></div>
    ${serviceLinks()}
  </div>
</section>

${finalCta('about-final')}
`,
});

// --------------------------------------------------------------- OUR WORK
const ourWork = () => ({
  path: '/our-work/',
  title: 'Our Work | Junk Removal & Cleanup Projects | Lopez Demolition Company',
  description:
    'See the kinds of cleanup jobs Lopez Demolition Company takes on: large junk removal, house cleanouts, mobile home removal, Bobcat land work, and cleared lots.',
  schema: [breadcrumbSchema([['Our Work', '/our-work/']])],
  body: `
${pageHero({
  eyebrowText: 'Our Work',
  title: 'Big Messes. <span>Cleared Properties.</span>',
  lead: 'Large trash and debris removal, entire house cleanouts, mobile home removal, Bobcat land work, and cleared lots.',
  m: 'landfill',
  loc: 'our-work-hero',
  crumbs: [['Our Work', '/our-work/']],
})}
${gallerySection({ loc: 'our-work-gallery', full: true })}
${callBand({ title: 'Have a property that looks like this?', text: 'Call and tell us what needs to go. We\'ll talk through the job and your next steps.', loc: 'our-work-band', label: 'READY TO CLEAR YOUR PROPERTY? CALL NOW' })}
${finalCta('our-work-final')}
`,
});

// ----------------------------------------------------------- SERVICE AREAS
const serviceAreas = () => {
  const confirmed = site.citiesServed.length || site.primaryCity;
  return {
    path: '/service-areas/',
    title: 'Service Areas | Lopez Demolition Company',
    description: confirmed
      ? `Lopez Demolition Company provides junk removal, mobile home removal, and property cleanouts${site.primaryCity ? ` in and around ${site.primaryCity}` : ''}. Call (210) 739-8016.`
      : 'Find out whether Lopez Demolition Company works in your area. Call (210) 739-8016 with your property location to discuss junk removal, cleanouts, and mobile home removal.',
    schema: [breadcrumbSchema([['Service Areas', '/service-areas/']])],
    body: `
${pageHero({
  eyebrowText: 'Service Areas',
  title: 'Proudly Serving Property Owners <span>Throughout Our Service Area.</span>',
  lead: confirmed ? `${site.primaryCity ? `Based in ${esc(site.primaryCity)}. ` : ''}${site.travelArea ? esc(site.travelArea) : ''}` : 'The quickest way to know whether we can take on your job is to call with the property\'s location.',
  m: 'dirtSite',
  loc: 'service-areas-hero',
  cta: 'NOT SURE IF WE SERVE YOUR AREA? CALL.',
  crumbs: [['Service Areas', '/service-areas/']],
})}
<section class="section section--white">
  <div class="container">
    ${
      confirmed
        ? `<div class="section__head reveal">${eyebrow('Where We Work')}<h2 class="h2">Cities and towns we serve</h2></div>
    <ul class="area__list area__list--lg reveal">${site.citiesServed.map((c) => `<li>${icon('check')}${esc(c)}</li>`).join('')}</ul>
    ${site.countiesServed.length ? `<p class="area__counties reveal">Counties served: ${esc(site.countiesServed.join(', '))}</p>` : ''}`
        : `<div class="split">
      <div class="split__text reveal">
        ${eyebrow('Where We Work')}
        <h2 class="h2">Call with the property location.</h2>
        <p class="lead">Location matters on heavy cleanup jobs — it affects travel, equipment, and hauling. So we confirm it on every call.</p>
        <p>Tell us the city or address of the property along with what needs to be removed, and we'll let you know whether it's within our working area and what the next steps look like.</p>
        ${callBtn('NOT SURE IF WE SERVE YOUR AREA? GIVE US A CALL.', { loc: 'service-areas', variant: 'dark' })}
      </div>
      <div class="area__card area__card--stack reveal">
        <div class="area__pin">${icon('pin')}</div>
        <h3>When you call, mention:</h3>
        ${checklist(['The property\'s city or address', 'What needs to be removed', 'Approximately how large the job is', 'How trucks and equipment can access it'])}
      </div>
    </div>`
    }
  </div>
</section>
<section class="section section--light">
  <div class="container">
    <div class="section__head reveal">${eyebrow('Services')}<h2 class="h2">Services available</h2></div>
    ${serviceLinks()}
  </div>
</section>
${finalCta('service-areas-final')}
`,
  };
};

// ---------------------------------------------------------------- CONTACT
const contact = () => ({
  path: '/contact/',
  title: 'Contact Lopez Demolition Company | Call (210) 739-8016',
  description: 'Call Lopez Demolition Company at (210) 739-8016 to discuss junk removal, mobile home removal, property cleanouts, land clearing, or Bobcat work.',
  schema: [breadcrumbSchema([['Contact', '/contact/']])],
  body: `
<section class="contact">
  <div class="contact__media media">${img('excavatorSoil', { eager: true, alt: '' })}<div class="phero__shade"></div></div>
  <div class="container contact__inner">
    <nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a></li><li aria-current="page">Contact</li></ol></nav>
    ${eyebrow('Contact', 'eyebrow--gold')}
    <h1 class="phero__title">The Fastest Way to Get Started <span>Is a Phone Call.</span></h1>
    <p class="phero__lead">No forms, no waiting for an email. Call and tell us about the property and what needs to go.</p>
    <div class="contact__card">
      <p class="contact__label">Call Lopez Demolition Company</p>
      <a class="contact__num" href="${site.phoneHref}" data-call="contact-number">${site.phoneDisplay}</a>
      ${callBtn(site.primaryCta, { loc: 'contact', size: 'block' })}
      <ul class="contact__details">
        <li>${icon('pin')}<span>${site.primaryCity ? esc(site.primaryCity) : 'Service area confirmed by phone'}</span></li>
        ${site.hours.length ? `<li>${icon('clock')}<span>${site.hours.map(([d, h]) => `${esc(d)}: ${esc(h)}`).join('<br>')}</span></li>` : ''}
      </ul>
    </div>
  </div>
</section>
<section class="section section--white">
  <div class="container">
    <div class="section__head reveal">${eyebrow('Make the call quick')}<h2 class="h2">Helpful details to have ready</h2></div>
    <div class="situations">
      <article class="situation reveal"><span class="situation__n">01</span><h3>Location</h3><p>The city or address of the property.</p></article>
      <article class="situation reveal" style="--d:70ms"><span class="situation__n">02</span><h3>What needs to go</h3><p>Junk, trash, debris, a mobile home, or a full cleanout.</p></article>
      <article class="situation reveal" style="--d:140ms"><span class="situation__n">03</span><h3>Size of the job</h3><p>A pile, a room, a whole house, or an entire lot.</p></article>
      <article class="situation reveal" style="--d:210ms"><span class="situation__n">04</span><h3>Access</h3><p>How trucks and equipment can reach the work area.</p></article>
    </div>
  </div>
</section>
`,
});

// ---------------------------------------------------------------- PRIVACY
const privacy = () => ({
  path: '/privacy/',
  title: 'Privacy Policy | Lopez Demolition Company',
  description: 'Privacy policy for the Lopez Demolition Company website.',
  body: `
<section class="section section--white legal">
  <div class="container container--narrow">
    ${eyebrow('Legal')}
    <h1 class="h2">Privacy Policy</h1>
    <p class="muted">Last updated: November 4, 2026</p>
    <h2>Overview</h2>
    <p>This website is provided by ${site.name} to describe our services and make it easy to contact us by phone. We do not use contact forms, email sign-ups, chat tools, or user accounts on this website.</p>
    <h2>Information we collect</h2>
    <p>We do not ask you to submit personal information through this website. When you call us, your phone number and anything you share during the call are used only to discuss and provide our services.</p>
    <p>Like most websites, our hosting provider and any analytics tools we use may automatically collect standard technical information, such as browser type, device type, pages visited, approximate location derived from IP address, and whether a phone link was tapped. This information is used in aggregate to understand how the website is used and to improve it.</p>
    <h2>Cookies</h2>
    <p>If analytics tools are enabled, they may use cookies or similar technologies. You can control cookies through your browser settings.</p>
    <h2>Third-party content</h2>
    <p>This website loads fonts, images, and video from third-party content delivery networks. Those providers may receive standard technical information, such as your IP address, when content is delivered to your browser.</p>
    <h2>Sharing</h2>
    <p>We do not sell personal information.</p>
    <h2>Contact</h2>
    <p>Questions about this policy? Call us at <a href="${site.phoneHref}" data-call="privacy">${site.phoneDisplay}</a>.</p>
  </div>
</section>
`,
});

// -------------------------------------------------------------------- 404
const notFound = () => ({
  path: '/404.html',
  title: 'Page Not Found | Lopez Demolition Company',
  description: 'The page you were looking for could not be found.',
  noindex: true,
  body: `
<section class="section section--dark notfound">
  <div class="container center">
    ${eyebrow('404', 'eyebrow--gold')}
    <h1 class="h2 h2--light">This page has already been cleared out.</h1>
    <p class="section__intro section__intro--light">The page you're looking for isn't here. Head back home, or just give us a call.</p>
    <div class="btn-row btn-row--center">
      ${callBtn(site.primaryCta, { loc: '404', size: 'lg' })}
      <a class="btn btn--ghost btn--lg" href="/">Back to Home</a>
    </div>
  </div>
</section>
`,
});

export const otherPages = () => [about(), ourWork(), serviceAreas(), contact(), privacy(), notFound()];
