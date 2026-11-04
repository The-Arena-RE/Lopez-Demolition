// Cloudflare Worker for lopezdemo.com
//  1. Redirects www -> apex.
//  2. MAINTENANCE MODE: while env.MAINTENANCE_MODE === "true", every visitor gets a
//     branded "coming soon" page (HTTP 503, noindex) instead of the site.
//     Owners can still preview the real site by visiting  /?preview=<PREVIEW_KEY>
//     once (sets a cookie). PREVIEW_KEY is a Cloudflare secret, never stored in git.
//     /?preview=off clears the cookie.
//  3. Otherwise serves the static site from ./public.

const CANONICAL_HOST = 'lopezdemo.com';
const COOKIE = 'ld_preview';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname === `www.${CANONICAL_HOST}`) {
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }

    if (env.MAINTENANCE_MODE === 'true') {
      const key = env.PREVIEW_KEY || '';
      const param = url.searchParams.get('preview');

      if (param === 'off') {
        url.searchParams.delete('preview');
        return redirectWithCookie(url, `${COOKIE}=; Path=/; Max-Age=0; Secure; HttpOnly; SameSite=Lax`);
      }
      if (key && param !== null && safeEqual(param, key)) {
        url.searchParams.delete('preview');
        return redirectWithCookie(url, `${COOKIE}=${encodeURIComponent(key)}; Path=/; Max-Age=2592000; Secure; HttpOnly; SameSite=Lax`);
      }

      const cookie = readCookie(request.headers.get('Cookie') || '', COOKIE);
      if (!(key && cookie && safeEqual(cookie, key))) {
        return maintenancePage();
      }

      // Previewing: serve the real site, but keep it out of search engines and caches.
      const res = await env.ASSETS.fetch(request);
      const out = new Response(res.body, res);
      out.headers.set('X-Robots-Tag', 'noindex, nofollow');
      out.headers.set('Cache-Control', 'private, no-store');
      return out;
    }

    return env.ASSETS.fetch(request);
  },
};

function redirectWithCookie(url, cookie) {
  return new Response(null, {
    status: 302,
    headers: { Location: url.pathname + url.search, 'Set-Cookie': cookie, 'Cache-Control': 'no-store' },
  });
}

function readCookie(header, name) {
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return '';
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function maintenancePage() {
  return new Response(MAINTENANCE_HTML, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Retry-After': '86400',
      'X-Robots-Tag': 'noindex, nofollow',
      'Cache-Control': 'no-store',
    },
  });
}

const MARK = `<svg viewBox="0 0 48 48" aria-hidden="true" width="96" height="96"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F2C063"/><stop offset=".55" stop-color="#E4A52D"/><stop offset="1" stop-color="#E98A24"/></linearGradient></defs><path d="M8 2h32l6 6v32l-6 6H8l-6-6V8z" fill="#101113" stroke="url(#g)" stroke-width="2"/><path d="M14 12v20h11" fill="none" stroke="url(#g)" stroke-width="4.5" stroke-linecap="square"/><path d="M24 16l9-4 4 8-5 4" fill="none" stroke="#F7F7F5" stroke-width="2.5" stroke-linejoin="round"/><path d="M32 24l4 0 1 5c-2 3-6 4-9 3l1-4z" fill="url(#g)"/></svg>`;

const MAINTENANCE_HTML = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lopez Demolition Company | Coming Soon</title>
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(MARK)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@400;500&display=swap">
<style>
  *{box-sizing:border-box}
  html,body{height:100%}
  body{margin:0;min-height:100%;display:flex;align-items:center;justify-content:center;padding:32px 16px;
    font-family:Inter,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#F7F7F5;text-align:center;
    background:
      radial-gradient(80% 60% at 50% 0%,rgba(228,165,45,.14),transparent 60%),
      repeating-linear-gradient(135deg,rgba(255,255,255,.025) 0 2px,transparent 2px 16px),
      linear-gradient(160deg,#17191C,#0b0c0d)}
  body::after{content:'';position:fixed;left:0;right:0;bottom:0;height:6px;background:linear-gradient(90deg,#E4A52D,#E98A24)}
  main{max-width:640px}
  .mark{display:inline-block;margin-bottom:22px}
  .name{font-family:'Barlow Condensed','Arial Narrow',sans-serif;font-weight:800;font-size:clamp(3rem,10vw,4.6rem);letter-spacing:.1em;line-height:1;margin:0;
    background:linear-gradient(180deg,#fff,#d9dbde 55%,#9ea3a8);-webkit-background-clip:text;background-clip:text;color:transparent}
  .sub{font-family:'Barlow Condensed','Arial Narrow',sans-serif;font-weight:600;letter-spacing:.32em;color:#E4A52D;font-size:clamp(.85rem,2.6vw,1.1rem);margin:8px 0 40px}
  h1{font-family:'Barlow Condensed','Arial Narrow',sans-serif;font-weight:700;text-transform:uppercase;font-size:clamp(2rem,6vw,3rem);line-height:1;margin:0 0 14px}
  p{color:rgba(247,247,245,.75);font-size:1.05rem;line-height:1.6;margin:0 0 32px}
  .btn{display:inline-flex;align-items:center;gap:10px;background:#E4A52D;color:#101113;text-decoration:none;
    font-family:'Barlow Condensed','Arial Narrow',sans-serif;font-weight:800;font-size:1.4rem;letter-spacing:.06em;
    padding:16px 30px;border-radius:4px;box-shadow:0 12px 28px -12px rgba(228,165,45,.75);transition:transform .2s,background-color .2s}
  .btn:hover{background:#F0BB52;transform:translateY(-2px)}
  .btn svg{width:22px;height:22px}
  .small{margin-top:18px;font-size:.9rem;color:rgba(247,247,245,.5)}
  @media (prefers-reduced-motion:reduce){.btn{transition:none}}
</style>
</head>
<body>
<main>
  <div class="mark">${MARK}</div>
  <p class="name">LOPEZ</p>
  <p class="sub">DEMOLITION COMPANY</p>
  <h1>New Website Coming Soon</h1>
  <p>We're putting the finishing touches on our new site. Need junk removal, a mobile home removed, or a property cleaned out? We're open for business. Give us a call.</p>
  <a class="btn" href="tel:+12107398016"><svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"/></svg>CALL (210) 739-8016</a>
  <p class="small">&copy; Lopez Demolition Company</p>
</main>
</body>
</html>`;
