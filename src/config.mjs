// ---------------------------------------------------------------------------
// Lopez Demolition Company — site configuration
// Edit the values in this file, then run `npm run build`.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Lopez Demolition Company',
  // Confirm the registered domain + extension before launch. Used for canonical
  // URLs, the sitemap, and structured data.
  url: 'https://lopezdemo.com',
  // SEARCH ENGINE SWITCH
  // false = site is live but hidden from Google/Bing (noindex on every page).
  // true  = site is public and indexable. Flip to true at launch, then push.
  searchVisible: true,

  phoneDisplay: '(210) 739-8016',
  phoneHref: 'tel:+12107398016',
  phoneE164: '+1-210-739-8016',

  // Main CTA wording. Switch to 'CALL NOW FOR A FREE QUOTE' ONLY after the owner
  // confirms estimates are free.
  primaryCta: 'CALL NOW FOR A QUOTE',

  // --- Fill in once verified. Leave empty to keep it off the site. ---------
  // Primary city of operations, e.g. 'San Antonio, TX'. Do NOT guess from the
  // area code.
  primaryCity: '',
  // Cities / towns normally served, e.g. ['San Antonio', 'New Braunfels'].
  citiesServed: [],
  // Counties served, e.g. ['Bexar County'].
  countiesServed: [],
  // Practical travel radius, e.g. 'Up to about 60 miles from San Antonio'.
  travelArea: '',
  // Business hours, e.g. [['Mon–Fri', '7:00 AM – 6:00 PM'], ['Sat', '8:00 AM – 2:00 PM']]
  hours: [],
  // Google Business Profile URL, if one exists.
  googleBusinessProfile: '',
};

// ---------------------------------------------------------------------------
// Media
// The site currently uses licensed stock media (Pexels photos, Mixkit video),
// hotlinked from their CDNs. Stock media is ONLY used as representative
// imagery and is never labeled as Lopez Demolition Company project work.
// Replace these with real company photography as soon as it is available —
// drop files into /assets/img/ and set `src` to e.g. '/assets/img/hero.webp'.
// ---------------------------------------------------------------------------

const pexels = (id) => ({ pexels: id });

export const media = {
  heroPoster: { ...pexels(12835184), alt: 'Skid steer loader parked on a job site under a clear sky' },
  heavyEquipment: { ...pexels(12181590), alt: 'Orange heavy equipment ready for site work' },
  mobileHomes: { ...pexels(13197459), alt: 'Aerial view of a row of single-wide mobile homes' },
  abandonedBuilding: { ...pexels(11461002), alt: 'Excavator working beside an abandoned, deteriorating structure' },
  teardown: { ...pexels(11555191), alt: 'Heavy machinery tearing down old structures' },
  trashMattress: { ...pexels(29348622), alt: 'Large outdoor pile of trash with a discarded mattress and bulky debris' },
  trashBags: { ...pexels(5789369), alt: 'Large pile of black trash bags stacked against a wall' },
  dumpsite: { ...pexels(128421), alt: 'Large heap of scrap metal and discarded waste' },
  dirtSite: { ...pexels(27986719), alt: 'Graded dirt lot with a large pile of soil' },
  excavatorDirt: { ...pexels(27434713), alt: 'Excavator working on top of a large dirt pile' },
  excavatorSoil: { ...pexels(6245621), alt: 'Yellow excavator working on bare brown soil' },
  landfill: { ...pexels(3230538), alt: 'Excavator moving debris on a large pile of waste' },
  truckLoading: { ...pexels(34334647), alt: 'Excavator loading a dump truck at a dusty work site' },
  emptyRoom: { ...pexels(4246119), alt: 'Empty room with packed boxes ready to be hauled out' },
  boxesRoom: { ...pexels(7203788), alt: 'Cardboard boxes and belongings scattered across a room floor' },
};

// Background videos (desktop/tablet only, muted, skipped for reduced-motion and
// data-saver users). Mixkit free-license clips.
export const videos = {
  hero: 'https://assets.mixkit.co/videos/13941/13941-720.mp4', // Excavator removing debris
  feature: 'https://assets.mixkit.co/videos/49188/49188-720.mp4', // Heavy machine moving dirt
};

// ---------------------------------------------------------------------------
// Real project gallery. Add genuine before/after photos here ONLY.
// Example:
// {
//   title: 'Full Residential Property Cleanout',
//   before: '/assets/img/projects/cleanout-1-before.webp',
//   after: '/assets/img/projects/cleanout-1-after.webp',
//   alt: 'Backyard covered in junk before cleanup, and the same yard cleared',
// }
// ---------------------------------------------------------------------------
export const projects = [];

// Single real project photos for the masonry gallery (equipment, crews, sites).
// Example: { src: '/assets/img/projects/bobcat-lot.webp', title: 'Bobcat Lot Cleanup', alt: '…' }
export const projectPhotos = [];
