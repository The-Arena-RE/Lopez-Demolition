/* Lopez Demolition Company — progressive enhancement (no dependencies) */
(function () {
  'use strict';
  var doc = document.documentElement;
  doc.classList.add('js');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var conn = navigator.connection || {};
  var saveData = conn.saveData || /(^|-)2g$/.test(conn.effectiveType || '');

  /* ---------- Broken image fallback: keep the styled .media background ---------- */
  document.addEventListener(
    'error',
    function (e) {
      var t = e.target;
      if (t && t.tagName === 'IMG') t.classList.add('is-broken');
    },
    true
  );

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNav(toggle.getAttribute('aria-expanded') !== 'true');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setNav(false);
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (m) {
      if (m.matches) setNav(false);
    });
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector('[data-header]');
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        header && header.classList.toggle('is-scrolled', window.scrollY > 8);
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add('is-in');
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- Background videos ----------
     Only on tablet/desktop, never for reduced-motion or data-saver users.
     Loaded lazily when the section approaches the viewport; paused off-screen. */
  var videos = document.querySelectorAll('video[data-src]');
  var allowVideo = !reduceMotion && !saveData && window.matchMedia('(min-width: 768px)').matches;
  if (allowVideo && videos.length && 'IntersectionObserver' in window) {
    var vio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          var v = en.target;
          if (en.isIntersecting) {
            if (!v.src) {
              v.src = v.getAttribute('data-src');
              v.addEventListener('playing', function () { v.classList.add('is-playing'); }, { once: true });
              v.addEventListener('error', function () { v.remove(); }, { once: true });
            }
            var p = v.play();
            if (p && p.catch) p.catch(function () {});
          } else if (v.src) {
            v.pause();
          }
        });
      },
      { rootMargin: '200px 0px' }
    );
    videos.forEach(function (v) { vio.observe(v); });
  }

  /* ---------- Before / after sliders ---------- */
  document.querySelectorAll('[data-ba]').forEach(function (frame) {
    var range = frame.querySelector('[data-ba-range]');
    if (!range) return;
    function update() { frame.style.setProperty('--pos', range.value + '%'); }
    range.addEventListener('input', update);
    update();
  });

  /* ---------- Phone click tracking ----------
     Each tel: link carries data-call="<location>" (header, hero, service-card,
     service-page, sticky-mobile, footer, ...). Sent to GA4 (gtag) and/or GTM
     (dataLayer) when present. A click is a call *attempt*, not a completed call. */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href^="tel:"]');
    if (!a) return;
    var payload = {
      event: 'phone_click',
      call_location: a.getAttribute('data-call') || 'unknown',
      page_path: location.pathname,
      link_text: (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80),
    };
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(payload);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'phone_click', {
          call_location: payload.call_location,
          page_path: payload.page_path,
        });
      }
    } catch (err) { /* never block the call */ }
  });
})();
