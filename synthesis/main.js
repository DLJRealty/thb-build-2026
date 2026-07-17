/* ============================================================
   SYNTHESIS — "ALPENGLOW EDITORIAL" · main.js
   Transform/opacity-only motion. All pointer FX gated to
   fine pointers; prefers-reduced-motion = fully static.
   No external libraries. No-JS page is fully readable.
   ============================================================ */
(function () {
  'use strict';

  var docEl = document.documentElement;
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  var hoverable = window.matchMedia('(hover: hover)').matches;
  var desktopFX = finePointer && hoverable && !reduced;

  /* ---------- 1 · Split-text hero headline ---------- */
  var heroTitle = document.getElementById('heroTitle');
  if (heroTitle && !reduced) {
    var text = heroTitle.textContent;
    heroTitle.setAttribute('aria-label', text);
    heroTitle.textContent = '';
    var frag = document.createDocumentFragment();
    var i, ch, span, idx = 0;
    for (i = 0; i < text.length; i++) {
      ch = text.charAt(i);
      if (ch === ' ') {
        frag.appendChild(document.createTextNode(' '));
        continue;
      }
      span = document.createElement('span');
      span.className = 'ch';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = ch;
      span.style.setProperty('--i', String(idx));
      idx += 1;
      frag.appendChild(span);
    }
    heroTitle.appendChild(frag);
    heroTitle.classList.add('splitting');
    // land the reveal as the Ken Burns push begins (next frame after styles apply)
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        heroTitle.classList.add('split-in');
      });
    });
  }

  /* ---------- 2 · IntersectionObserver reveals ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduced) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- 3 · Scroll-linked alpenglow sky + nav glass (rAF) ---------- */
  var skyDay = document.getElementById('skyDay');
  var skyDusk = document.getElementById('skyDusk');
  var nav = document.getElementById('nav');
  var parallaxEls = reduced ? [] :
    Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var ticking = false;

  function clamp01(v) { return v < 0 ? 0 : (v > 1 ? 1 : v); }

  function onFrame() {
    ticking = false;
    var y = window.scrollY || window.pageYOffset;
    var vh = window.innerHeight;
    var docH = docEl.scrollHeight - vh;
    var p = docH > 0 ? clamp01(y / docH) : 0;

    // dawn (0) → daylight (~0.45) → dusk tint (→1); opacity-only crossfade
    if (!reduced) {
      if (skyDay) { skyDay.style.opacity = String(clamp01(p / 0.45)); }
      if (skyDusk) { skyDusk.style.opacity = String(clamp01((p - 0.5) / 0.4)); }
    }

    // nav glass once past the hero's top zone
    if (nav) { nav.classList.toggle('scrolled', y > vh * 0.55); }

    // gentle parallax on card imagery — transform-only, desktop only
    if (desktopFX) {
      parallaxEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) { return; }
        var mid = r.top + r.height / 2;
        var d = (mid - vh / 2) / vh; // -0.5 … 0.5-ish
        el.style.transform = 'translate3d(0,' + (d * -18).toFixed(2) + 'px,0)';
      });
    }
  }
  function requestTick() {
    if (!ticking) { ticking = true; requestAnimationFrame(onFrame); }
  }
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
  requestTick();

  /* ---------- 4 · Hero Variant A/B toggle (internal review) ---------- */
  var hero = document.getElementById('hero');
  var abPill = document.getElementById('abPill');
  var heroVideo = document.getElementById('heroVideo');
  if (hero && abPill && heroVideo) {
    abPill.addEventListener('click', function () {
      var toB = !hero.classList.contains('variant-b');
      if (toB) {
        if (!heroVideo.getAttribute('src')) {
          // video bytes load ONLY on first toggle (preload="none" + deferred src)
          heroVideo.setAttribute('src', heroVideo.getAttribute('data-src'));
          heroVideo.load();
        }
        hero.classList.add('variant-b');
        abPill.setAttribute('aria-pressed', 'true');
        var playP = heroVideo.play();
        if (playP && playP.catch) { playP.catch(function () {}); }
      } else {
        hero.classList.remove('variant-b');
        abPill.setAttribute('aria-pressed', 'false');
        heroVideo.pause();
      }
    });
  }

  /* ---------- 5 · 3D pointer tilt + glass sheen (desktop only) ---------- */
  if (desktopFX) {
    var cards = document.querySelectorAll('.card[data-tilt]');
    cards.forEach(function (card) {
      var sheen = card.querySelector('.card-sheen');
      var raf = null;
      var px = 0, py = 0;

      function apply() {
        raf = null;
        var rx = (py - 0.5) * -7;   // deg
        var ry = (px - 0.5) * 9;    // deg
        card.style.transform =
          'perspective(1100px) rotateX(' + rx.toFixed(2) + 'deg) rotateY(' +
          ry.toFixed(2) + 'deg) translateZ(0)';
        if (sheen) {
          var r = card.getBoundingClientRect();
          sheen.style.transform =
            'translate3d(' + ((px - 0.5) * r.width * 0.6).toFixed(1) + 'px,' +
            ((py - 0.5) * r.height * 0.6).toFixed(1) + 'px,0)';
        }
      }
      card.addEventListener('pointerenter', function (e) {
        if (e.pointerType !== 'mouse') { return; }
        card.classList.add('tilting');
        card.style.transition = 'box-shadow .5s';
      });
      card.addEventListener('pointermove', function (e) {
        if (e.pointerType !== 'mouse') { return; }
        var r = card.getBoundingClientRect();
        px = (e.clientX - r.left) / r.width;
        py = (e.clientY - r.top) / r.height;
        if (!raf) { raf = requestAnimationFrame(apply); }
      });
      card.addEventListener('pointerleave', function () {
        card.classList.remove('tilting');
        card.style.transition = 'transform .7s cubic-bezier(.22,.61,.36,1), box-shadow .5s';
        card.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg)';
      });
    });
  }

  /* ---------- 6 · Magnetic CTAs (desktop only) ---------- */
  if (desktopFX) {
    var magnets = document.querySelectorAll('.magnetic');
    magnets.forEach(function (btn) {
      var raf = null, tx = 0, ty = 0;
      function apply() {
        raf = null;
        btn.style.transform = 'translate3d(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px,0)';
      }
      btn.addEventListener('pointermove', function (e) {
        if (e.pointerType !== 'mouse') { return; }
        var r = btn.getBoundingClientRect();
        tx = (e.clientX - (r.left + r.width / 2)) * 0.22;
        ty = (e.clientY - (r.top + r.height / 2)) * 0.3;
        if (!raf) { raf = requestAnimationFrame(apply); }
      });
      btn.addEventListener('pointerleave', function () {
        tx = 0; ty = 0;
        btn.style.transition = 'transform .5s cubic-bezier(.22,.61,.36,1)';
        btn.style.transform = 'translate3d(0,0,0)';
        setTimeout(function () { btn.style.transition = ''; }, 500);
      });
    });
  }

  /* ---------- 7 · Lerped dot/ring cursor (desktop only) ---------- */
  if (desktopFX) {
    var dot = document.getElementById('cursorDot');
    var ring = document.getElementById('cursorRing');
    if (dot && ring) {
      docEl.classList.add('cursor-on');
      var mx = window.innerWidth / 2, my = window.innerHeight / 2;
      var rxp = mx, ryp = my;
      var seen = false;

      document.addEventListener('pointermove', function (e) {
        if (e.pointerType !== 'mouse') { return; }
        mx = e.clientX; my = e.clientY; seen = true;
      }, { passive: true });

      document.addEventListener('pointerover', function (e) {
        var t = e.target;
        var interactive = t.closest && t.closest('a, button, input');
        ring.classList.toggle('is-hover', !!interactive);
      });

      (function loop() {
        if (seen) {
          dot.style.transform = 'translate3d(' + mx + 'px,' + my + 'px,0)';
          rxp += (mx - rxp) * 0.16;
          ryp += (my - ryp) * 0.16;
          ring.style.transform = 'translate3d(' + rxp.toFixed(1) + 'px,' + ryp.toFixed(1) + 'px,0)';
        }
        requestAnimationFrame(loop);
      })();
    }
  }
}());
