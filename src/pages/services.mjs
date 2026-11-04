import { site } from '../config.mjs';
import { img, callBtn, icon, eyebrow, faqList, faqSchema, esc } from '../lib.mjs';
import { pageHero, breadcrumbSchema, callBand, checklist } from '../partials.mjs';
import { finalCta } from './home.mjs';
import { servicesNav } from '../layout.mjs';

const services = [
  // ------------------------------------------------------------------ JUNK
  {
    path: '/junk-removal/',
    name: 'Junk & Trash Removal',
    serviceType: 'Junk removal',
    title: 'Large Junk & Bulk Trash Removal | Lopez Demolition Company',
    description:
      'Heavy-duty junk removal for big piles, bulky waste, and trash-covered properties. Lopez Demolition Company brings the labor and hauling. Call (210) 739-8016 for a quote.',
    hero: {
      eyebrowText: 'Heavy-Duty Junk & Trash Removal',
      title: 'Large Junk Removal for <span>Jobs Too Big to Haul Yourself.</span>',
      lead: 'Bulk trash, mountains of discarded material, and yards you can barely walk through. We bring the crew, the equipment, and the hauling so the pile actually disappears.',
      m: 'trashMattress',
      cta: 'CALL ABOUT JUNK REMOVAL',
    },
    intro: {
      h: 'When a few trips to the dump won\'t cut it.',
      p: [
        "Most junk removal services are built around a single truckload. That works for a couch or a garage corner. It doesn't work when an entire backyard is buried, when years of trash have piled up behind a building, or when a property has been used as a dumping ground.",
        'Lopez Demolition Company focuses on the larger end of the job. We handle bulky waste, heavy debris, and high-volume cleanups that need real labor and real equipment to move.',
        "Tell us what's there and roughly how much of it. We'll talk through access, the type of material, and what it will take to haul it out.",
      ],
      m: 'trashBags',
    },
    whoFor: [
      ['Homeowners', 'Backyards, side yards, sheds, and garages that have filled up over the years.'],
      ['Landlords & property managers', 'Units and lots left full of trash and abandoned belongings after a tenant leaves.'],
      ['Investors', 'Distressed properties that need to be emptied before anyone can assess or repair them.'],
      ['Landowners', 'Vacant land where dumped trash, old materials, and debris have built up.'],
    ],
    involved: {
      h: 'What we haul',
      items: [
        'Large piles of household junk and bagged trash',
        'Bulky items: furniture, mattresses, appliances, and old fixtures',
        'Scrap, broken materials, and discarded building debris',
        'Yard junk, old fencing, and accumulated outdoor clutter',
        'Mixed debris spread across an entire property',
      ],
      note: 'Hazardous materials such as chemicals, asbestos, and contaminated waste need special handling. Tell us on the phone if you suspect any are on site so we can discuss what applies.',
    },
    situations: [
      ['The backyard that got away from you', 'Years of “we\'ll deal with it later” has turned into a pile that needs a crew, not a weekend.'],
      ['A property used as a dumping ground', 'Vacant lots and empty buildings often collect other people\'s trash. We help clear it out.'],
      ['After a tenant moves out', 'Abandoned furniture, bags of trash, and debris left behind — inside and out.'],
      ['Before a sale or renovation', 'You can\'t show, sell, or rebuild a property that\'s buried. Clearing it is step one.'],
    ],
    ready: ['The property\'s location', 'What kind of material needs to go', 'Roughly how much — a pile, a yard, a whole property', 'How a truck or equipment can get to it'],
    faq: [
      ['How much junk is too much?', 'Large volumes are exactly what we focus on. Call and describe the job — a pile, a yard, or a full property — and we\'ll talk through what\'s involved.'],
      ['Do you take heavy or bulky items?', 'Yes. Bulky items like furniture, mattresses, appliances, and heavy debris are a normal part of our work.'],
      ['How is junk removal priced?', 'Pricing depends on the amount and type of material, labor, equipment, access, hauling distance, and overall scope. Call to discuss a quote.'],
      ['Can you remove trash from a vacant lot?', 'Yes. Clearing dumped trash and debris from vacant land is a common job. See also our <a href="/land-clearing/">land clearing and lot cleanup</a> service.'],
    ],
    related: ['/property-cleanouts/', '/land-clearing/', '/mobile-home-removal/'],
  },

  // ---------------------------------------------------------- MOBILE HOMES
  {
    path: '/mobile-home-removal/',
    name: 'Mobile Home Removal',
    serviceType: 'Mobile home removal',
    title: 'Mobile Home Removal & Site Cleanup | Lopez Demolition Company',
    description:
      'Remove an unwanted, damaged, or deteriorating mobile home and the debris that comes with it. Call Lopez Demolition Company at (210) 739-8016 to discuss your property.',
    hero: {
      eyebrowText: 'Mobile Home Removal',
      title: 'Get That Old Mobile Home <span>Off Your Property.</span>',
      lead: 'Unwanted, damaged, or deteriorating mobile homes take up land you could be using. We handle mobile home removal projects and the cleanup that comes with them.',
      m: 'abandonedBuilding',
      cta: 'CALL ABOUT MOBILE HOME REMOVAL',
    },
    intro: {
      h: 'An old mobile home is more than an eyesore.',
      p: [
        'A mobile home that\'s no longer livable can block plans for the land it sits on. It may be falling apart, filled with left-behind belongings, or simply in the way of what comes next.',
        'Lopez Demolition Company takes on mobile home removal jobs along with the debris and site cleanup involved. The goal is the same every time: get the unwanted home gone and leave you with usable ground.',
        'Every mobile home is different. Before we can lay out next steps, we need to understand its condition, where it sits on the property, how equipment can reach it, and what else needs to go with it.',
      ],
      m: 'teardown',
    },
    whoFor: [
      ['Landowners', 'Land with an old home on it that\'s holding up a sale, a rebuild, or a new mobile home.'],
      ['Heirs & families', 'Inherited property where an old mobile home is no longer wanted or usable.'],
      ['Investors', 'Lots that are more valuable once the deteriorating structure is gone.'],
      ['Park & property managers', 'Abandoned or condemned units that need to be removed and the space cleaned up.'],
    ],
    involved: {
      h: 'What we\'ll ask about',
      items: [
        'The home\'s overall condition — intact, damaged, or deteriorating',
        'Size and approximate age, if known',
        'Location on the property and how equipment can reach it',
        'Contents still inside and any debris around it',
        'Additional structures nearby: skirting, decks, steps, sheds',
      ],
      note: 'This service is removal and cleanup of unwanted mobile homes — not transport or relocation of intact homes. If permits, utilities, or hazardous materials are involved, bring them up on the call so we can discuss what applies to your situation.',
    },
    situations: [
      ['A home that\'s past saving', 'Water damage, roof failure, or years of neglect have left it unlivable.'],
      ['Clearing land for a new home', 'The old unit needs to go before the new one can be set. We can also talk about <a href="/mobile-home-pad-preparation/">pad preparation</a>.'],
      ['Selling the property', 'Buyers see more potential in clean land than in a deteriorating structure.'],
      ['Inherited property', 'Dealing with an old mobile home full of belongings on a family property.'],
    ],
    ready: ['The property\'s location', 'The home\'s condition and approximate size', 'How a truck or equipment can access it', 'Whether contents or extra structures need to go too'],
    faq: [
      ['Do you remove old mobile homes?', 'Yes. Contact us with the location, condition, and accessibility of the mobile home so we can discuss removal options and the project requirements.'],
      ['Do you move intact mobile homes to a new location?', 'Our service is removing unwanted mobile homes and cleaning up the site, not transporting homes for reuse.'],
      ['Can you clean up the site after removal?', 'Yes. Mobile home removal projects include the related debris and site cleanup. Call to talk through the scope.'],
      ['How much does mobile home removal cost?', 'It depends on the home\'s size and condition, access, contents, debris, hauling, and what else is involved. Call to discuss a quote.'],
    ],
    related: ['/mobile-home-pad-preparation/', '/land-clearing/', '/junk-removal/'],
  },

  // ------------------------------------------------------------- CLEANOUTS
  {
    path: '/property-cleanouts/',
    name: 'House & Property Cleanouts',
    serviceType: 'Property cleanout',
    title: 'Full House & Property Cleanout Services | Lopez Demolition Company',
    description:
      'Complete house, rental, estate, and vacant property cleanouts — every room, plus the yard. Lopez Demolition Company handles the dirty work. Call (210) 739-8016.',
    hero: {
      eyebrowText: 'Full House & Property Cleanouts',
      title: 'Whole-House Cleanouts. <span>Every Room, Down to Empty.</span>',
      lead: 'Inherited homes, rentals, vacant buildings, and properties packed with unwanted belongings. We handle the hauling and the dirty work so you can move forward.',
      m: 'boxesRoom',
      cta: 'CALL ABOUT A CLEANOUT',
    },
    intro: {
      h: 'A full house is a big job. We do the heavy part.',
      p: [
        'Cleaning out an entire property is overwhelming. Rooms full of furniture, closets and garages stacked to the ceiling, and a yard with its own pile — often on a deadline, and sometimes during a hard time for the family.',
        'Lopez Demolition Company handles complete house and property cleanouts, from room-to-room interior work to large-scale cleanup of the whole lot. We bring the labor to carry it out and the capacity to haul it away.',
        'Before we start, we\'ll talk through what\'s staying, what\'s going, and how the property can be accessed.',
      ],
      m: 'emptyRoom',
    },
    whoFor: [
      ['Families & executors', 'Estate and inherited-home cleanouts when the house needs to be emptied.'],
      ['Landlords', 'Rentals left full of belongings, furniture, and trash after move-out or eviction.'],
      ['Real estate investors', 'Distressed and foreclosed properties that need to be emptied before rehab or resale.'],
      ['Homeowners', 'Preparing for a move, renovation, or sale — or finally taking back the garage.'],
    ],
    involved: {
      h: 'What a cleanout can include',
      items: [
        'Furniture, mattresses, and appliances from every room',
        'Closets, attics, garages, sheds, and outbuildings',
        'Bagged trash, clutter, and accumulated belongings',
        'Exterior junk, yard debris, and discarded materials',
        'Hauling everything off the property',
      ],
      note: 'Let us know about anything that should stay, be set aside, or be handled separately before work begins.',
    },
    situations: [
      ['Inherited homes', 'A family property that needs to be emptied before it can be sold or lived in.'],
      ['Tenant move-outs', 'A rental left full — inside and out — that has to be turned around.'],
      ['Distressed properties', 'Investor purchases that come with someone else\'s belongings and debris.'],
      ['Heavy accumulation', 'Homes where years of belongings have taken over every room.'],
    ],
    ready: ['The property\'s location', 'Size of the home and which areas are involved', 'Roughly how full it is', 'Anything that needs to stay or be set aside'],
    faq: [
      ['Can you clean out an entire house?', 'Yes. We handle complete house and property cleanouts, including properties with substantial amounts of unwanted items and debris.'],
      ['Do you clean out rental and investment properties?', 'Yes. Rental turnovers, distressed properties, and investor purchases are common cleanout jobs.'],
      ['Do you handle the yard and outbuildings too?', 'Yes. Cleanouts can include garages, sheds, and exterior junk. See also <a href="/junk-removal/">heavy-duty junk removal</a>.'],
      ['How is a cleanout priced?', 'Pricing depends on the size of the property, the volume and type of items, labor, access, and hauling. Call to discuss a quote.'],
    ],
    related: ['/junk-removal/', '/land-clearing/', '/mobile-home-removal/'],
  },

  // -------------------------------------------------------- LAND CLEARING
  {
    path: '/land-clearing/',
    name: 'Land Clearing & Lot Cleanup',
    serviceType: 'Land clearing and lot cleanup',
    title: 'Land Clearing & Lot Cleanup | Lopez Demolition Company',
    description:
      'Clear overgrown, trash-covered, and debris-filled lots. Lopez Demolition Company helps property owners reclaim usable land with labor and Bobcat equipment. Call (210) 739-8016.',
    hero: {
      eyebrowText: 'Land Clearing & Lot Cleanup',
      title: 'Reclaim Your Land. <span>Clear the Lot.</span>',
      lead: 'Overgrown lots, dumped trash, scattered debris, and land that\'s been ignored for years. We help property owners clear out unwanted material and get usable ground back.',
      m: 'excavatorSoil',
      cta: 'READY TO CLEAR YOUR PROPERTY? CALL NOW',
    },
    intro: {
      h: 'Land you can actually use again.',
      p: [
        'A neglected lot gets worse over time. Brush grows over the junk, debris gets buried, and people start treating it as a place to dump. Before you can build, sell, fence, or set a home, it has to be cleared.',
        'Lopez Demolition Company combines hands-on labor with Bobcat equipment to clear trash, debris, and unwanted materials from lots and acreage, then haul it away.',
        'Every property is different, so we start with a conversation about the size of the area, what\'s on it, and what you want to do with it next.',
      ],
      m: 'dirtSite',
    },
    whoFor: [
      ['Landowners', 'Vacant land and acreage that\'s become overgrown or trash-covered.'],
      ['Buyers & sellers', 'Lots that need to look like usable land before a sale or after a purchase.'],
      ['Future home sites', 'Ground that needs clearing before a home or mobile home can go in.'],
      ['Property managers', 'Vacant parcels with recurring dumping and debris problems.'],
    ],
    involved: {
      h: 'What lot cleanup can include',
      items: [
        'Removing dumped trash, junk, and scattered debris',
        'Clearing old materials, broken structures, and scrap',
        'Bobcat work to move and load material',
        'Hauling cleared material off the property',
        'Leaving the lot ready for its next use',
      ],
      note: 'Have a specific goal — like setting a mobile home? Mention it on the call. We also offer <a href="/mobile-home-pad-preparation/">Bobcat site work and pad preparation</a>.',
    },
    situations: [
      ['The lot nobody\'s touched in years', 'Overgrowth and junk have made the land hard to even walk, let alone use.'],
      ['Illegal dumping', 'Other people\'s trash keeps appearing on your vacant property.'],
      ['Getting ready to build or set a home', 'The site has to be cleared before anything new can go in.'],
      ['Listing land for sale', 'Clean, open ground shows far better than a lot covered in debris.'],
    ],
    ready: ['The property\'s location', 'Approximate size of the area', 'What\'s on it: trash, debris, old structures, brush', 'What you plan to do with the land next'],
    faq: [
      ['Can you clear a lot or prepare a mobile home site?', 'We offer Bobcat equipment work and site preparation services. Call to discuss the property and the specific work needed.'],
      ['Do you remove trash and debris from vacant land?', 'Yes. Removing dumped trash, junk, and debris from lots is a core part of this service.'],
      ['What equipment do you use?', 'We use Bobcat equipment along with hands-on labor. Call to talk through what your property needs.'],
      ['How is lot clearing priced?', 'It depends on the size of the area, what needs to be removed, access, equipment time, and hauling. Call to discuss a quote.'],
    ],
    related: ['/mobile-home-pad-preparation/', '/junk-removal/', '/mobile-home-removal/'],
  },

  // ------------------------------------------------------------- PAD PREP
  {
    path: '/mobile-home-pad-preparation/',
    name: 'Bobcat Work & Mobile Home Pad Preparation',
    serviceType: 'Bobcat services and mobile home pad preparation',
    title: 'Bobcat Services & Mobile Home Pad Preparation | Lopez Demolition Company',
    description:
      'Bobcat equipment work, ground preparation, and base-level site work for mobile home sites. Call Lopez Demolition Company at (210) 739-8016 to discuss your property.',
    hero: {
      eyebrowText: 'Bobcat Work & Mobile Home Pad Preparation',
      title: 'Bobcat Work & Site Prep <span>for Your Mobile Home.</span>',
      lead: 'Need a spot cleared and prepared for a mobile home? We bring Bobcat equipment for ground preparation and base-level site work.',
      m: 'heroPoster',
      cta: 'CALL ABOUT BOBCAT WORK',
    },
    intro: {
      h: 'Getting the ground ready.',
      p: [
        'Before a mobile home can be set, the site has to be clear and the ground prepared. That often starts with removing what\'s already there — debris, junk, brush, or an old home — and then working the ground with equipment.',
        'Lopez Demolition Company provides Bobcat equipment work, ground preparation, and base-level site work. Because we also handle removal and cleanup, the same crew can often take a property from cluttered to ready.',
        'Your home dealer, installer, or local requirements may specify how the site needs to be prepared. Share those details on the call so we can discuss what part of the work we can handle.',
      ],
      m: 'excavatorDirt',
    },
    whoFor: [
      ['New mobile home buyers', 'Owners getting land ready for a home that\'s on the way.'],
      ['Replacing an old home', 'Properties where an old unit comes out and a new one goes in.'],
      ['Landowners', 'Raw or neglected land that needs equipment work before it can be used.'],
      ['Contractors', 'Projects that need extra Bobcat time and labor on site.'],
    ],
    involved: {
      h: 'What we can help with',
      items: [
        'Clearing debris and unwanted material from the site',
        'Bobcat ground preparation and base-level site work',
        'Moving and loading material on the property',
        'Hauling away what\'s been cleared',
        'Pairing with mobile home removal when an old unit is still there',
      ],
      note: 'We do not advertise concrete foundations, utility installation, or engineered pads. Call to confirm exactly what your site requires and which parts we can take on.',
    },
    situations: [
      ['A new home is on order', 'The site needs to be cleared and the ground prepared before delivery.'],
      ['Swapping out an old unit', 'Remove the old mobile home, clean up, and prepare the ground in one project.'],
      ['Raw land', 'An empty parcel that needs equipment work before it can be used.'],
      ['General Bobcat work', 'Moving material, clearing areas, and site cleanup that needs a machine.'],
    ],
    ready: ['The property\'s location', 'What\'s on the site now', 'The size of the home or area to prepare', 'Any site requirements from your dealer or installer'],
    faq: [
      ['Do you prepare mobile home pads?', 'We offer Bobcat equipment work, ground preparation, and base-level site work. Call to discuss the specific work your site needs.'],
      ['Do you pour concrete foundations or run utilities?', 'No. We focus on clearing, Bobcat work, and base-level ground preparation.'],
      ['Can you remove the old home and prepare the site?', 'Yes, we handle both <a href="/mobile-home-removal/">mobile home removal</a> and site preparation. Call to talk through the full project.'],
      ['How is Bobcat work priced?', 'It depends on the scope of work, the site conditions, access, equipment time, and any hauling. Call to discuss a quote.'],
    ],
    related: ['/mobile-home-removal/', '/land-clearing/', '/junk-removal/'],
  },
];

const navLabel = (p) => servicesNav.find((s) => s.href === p)?.label || p;

const renderService = (s) => {
  const crumbs = [['Services', '/#services'], [s.name, s.path]];
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    url: `${site.url}${s.path}`,
    provider: { '@id': `${site.url}/#business` },
    ...(site.citiesServed.length ? { areaServed: site.citiesServed.map((name) => ({ '@type': 'Place', name })) } : {}),
  };

  return {
    path: s.path,
    title: s.title,
    description: s.description,
    schema: [serviceSchema, faqSchema(s.faq), breadcrumbSchema([['Services', '/#services'], [s.name, s.path]])],
    bodyClass: 'page-service',
    body: `
${pageHero({ ...s.hero, loc: 'service-page-hero', crumbs })}

<section class="section section--white">
  <div class="container split">
    <div class="split__text reveal">
      ${eyebrow('Overview')}
      <h2 class="h2">${s.intro.h}</h2>
      ${s.intro.p.map((p, i) => `<p${i === 0 ? ' class="lead"' : ''}>${p}</p>`).join('\n      ')}
      ${callBtn(s.hero.cta, { loc: 'service-page', variant: 'dark' })}
    </div>
    <figure class="split__media media media--frame reveal">${img(s.intro.m, { sizes: '(min-width: 960px) 46vw, 100vw' })}</figure>
  </div>
</section>

<section class="section section--light">
  <div class="container">
    <div class="section__head reveal">
      ${eyebrow('Who It\'s For')}
      <h2 class="h2">Who calls us for ${esc(s.name.toLowerCase())}</h2>
    </div>
    <div class="who__grid">
      ${s.whoFor.map(([t, d], i) => `<article class="who__card who__card--plain reveal" style="--d:${i * 70}ms"><h3>${t}</h3><p>${d}</p></article>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container scope">
    <div class="scope__main reveal">
      ${eyebrow('The Work', 'eyebrow--gold')}
      <h2 class="h2 h2--light">${s.involved.h}</h2>
      ${checklist(s.involved.items)}
      <p class="scope__note">${s.involved.note}</p>
    </div>
    <aside class="ready reveal" aria-labelledby="ready-title">
      <p class="ready__kicker">Before you call</p>
      <h3 id="ready-title">Have these details handy</h3>
      <ol>${s.ready.map((r) => `<li>${r}</li>`).join('')}</ol>
      ${callBtn(site.primaryCta, { loc: 'service-page-ready', size: 'block' })}
      <a class="ready__num" href="${site.phoneHref}" data-call="service-page-ready-number">${site.phoneDisplay}</a>
    </aside>
  </div>
</section>

<section class="section section--white">
  <div class="container">
    <div class="section__head reveal">
      ${eyebrow('Common Situations')}
      <h2 class="h2">Sound familiar?</h2>
    </div>
    <div class="situations">
      ${s.situations.map(([t, d], i) => `<article class="situation reveal" style="--d:${i * 70}ms"><span class="situation__n">0${i + 1}</span><h3>${t}</h3><p>${d}</p></article>`).join('\n      ')}
    </div>
  </div>
</section>

${callBand({ title: 'Tell us what you\'re dealing with.', text: 'One call is all it takes to talk through the job and get a quote.', label: s.hero.cta, loc: 'service-page-band' })}

<section class="section section--light">
  <div class="container faq-wrap">
    <div class="faq-wrap__head reveal">
      ${eyebrow('FAQ')}
      <h2 class="h2">${esc(s.name)} questions</h2>
      <p>Anything specific to your property? Call and ask.</p>
    </div>
    <div class="reveal">${faqList(s.faq)}</div>
  </div>
</section>

<section class="section section--white related">
  <div class="container">
    <div class="section__head reveal">${eyebrow('Related Services')}<h2 class="h2">Often part of the same job</h2></div>
    <div class="related__grid">
      ${s.related.map((p) => `<a class="related__card reveal" href="${p}"><span>${navLabel(p)}</span>${icon('arrow')}</a>`).join('\n      ')}
    </div>
  </div>
</section>

${finalCta('service-page-final')}
`,
  };
};

export const servicePages = () => services.map(renderService);
