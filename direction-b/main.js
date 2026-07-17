/* Tiny Home Boutiques — Direction B shared JS (vanilla, no deps) */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function scrollToEl(el) {
    if (!el) return;
    el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  }

  /* ---------- Date min = today, checkout > checkin ---------- */
  function isoToday(offsetDays) {
    var d = new Date();
    d.setDate(d.getDate() + (offsetDays || 0));
    return d.toISOString().slice(0, 10);
  }

  document.querySelectorAll("form.avail-form").forEach(function (form) {
    var ci = form.querySelector('input[name="checkin"]');
    var co = form.querySelector('input[name="checkout"]');
    var err = form.querySelector(".form-error");
    if (ci) ci.min = isoToday(0);
    if (co) co.min = isoToday(1);

    if (ci && co) {
      ci.addEventListener("change", function () {
        if (ci.value) {
          var next = new Date(ci.value);
          next.setDate(next.getDate() + 1);
          co.min = next.toISOString().slice(0, 10);
          if (co.value && co.value <= ci.value) co.value = "";
        }
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (err) err.classList.remove("show");

      if (ci && co && ci.value && co.value && co.value <= ci.value) {
        if (err) {
          err.textContent = "Check-out must be after check-in.";
          err.classList.add("show");
        }
        return;
      }

      // Build a friendly summary for the #book placeholder
      var guestsSel = form.querySelector('select[name="guests"]');
      var parts = [];
      if (ci && ci.value && co && co.value) {
        parts.push(prettyDate(ci.value) + " → " + prettyDate(co.value));
      }
      if (guestsSel && guestsSel.value) {
        parts.push(guestsSel.options[guestsSel.selectedIndex].text);
      }
      var summary = document.getElementById("book-summary");
      if (summary && parts.length) {
        summary.textContent = "Your request: " + parts.join(" · ");
        summary.classList.add("show");
      }
      scrollToEl(document.getElementById("book"));
    });
  });

  function prettyDate(iso) {
    var p = iso.split("-");
    var d = new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  /* ---------- Property grid filters (homepage) ---------- */
  var grid = document.getElementById("prop-grid");
  if (grid) {
    var cards = Array.prototype.slice.call(grid.querySelectorAll(".prop-card"));
    var guestChips = document.querySelectorAll(".chip[data-guests]");
    var featChips = document.querySelectorAll(".chip[data-feature]");
    var countEl = document.getElementById("filter-count");
    var emptyEl = document.getElementById("grid-empty");
    var state = { guests: 0, features: [] };

    function applyFilters() {
      var visible = 0;
      cards.forEach(function (card) {
        var ok = true;
        if (state.guests > 0 && Number(card.dataset.guests || 0) < state.guests) ok = false;
        if (ok && state.features.length) {
          var feats = (card.dataset.features || "").split("|");
          state.features.forEach(function (f) {
            if (feats.indexOf(f) === -1) ok = false;
          });
        }
        card.classList.toggle("hidden", !ok);
        if (ok) visible++;
      });
      if (countEl) {
        countEl.textContent = visible + " of " + cards.length + " homes";
      }
      if (emptyEl) emptyEl.classList.toggle("show", visible === 0);
    }

    guestChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var val = Number(chip.dataset.guests);
        var active = chip.getAttribute("aria-pressed") === "true";
        guestChips.forEach(function (c) { c.setAttribute("aria-pressed", "false"); });
        if (!active) {
          chip.setAttribute("aria-pressed", "true");
          state.guests = val;
        } else {
          state.guests = 0;
        }
        applyFilters();
      });
    });

    featChips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var f = chip.dataset.feature;
        var active = chip.getAttribute("aria-pressed") === "true";
        chip.setAttribute("aria-pressed", active ? "false" : "true");
        if (active) {
          state.features = state.features.filter(function (x) { return x !== f; });
        } else {
          state.features.push(f);
        }
        applyFilters();
      });
    });

    applyFilters();
  }

  /* ---------- Mobile bottom CTA: hide while a booking form is on screen ---------- */
  var mobileCta = document.getElementById("mobile-cta");
  var watchTargets = document.querySelectorAll("[data-cta-watch]");
  if (mobileCta && watchTargets.length && "IntersectionObserver" in window) {
    var onScreen = new Set();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) onScreen.add(en.target); else onScreen.delete(en.target);
      });
      mobileCta.setAttribute("data-hidden", onScreen.size > 0 ? "true" : "false");
    }, { threshold: 0.2 });
    watchTargets.forEach(function (t) { io.observe(t); });
  }
  document.querySelectorAll("[data-scroll-to]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var target = document.querySelector(btn.getAttribute("data-scroll-to"));
      if (target) {
        e.preventDefault();
        scrollToEl(target);
        var firstInput = target.querySelector("input, select, button");
        if (firstInput) firstInput.focus({ preventScroll: true });
      }
    });
  });

  /* ---------- Lightbox (property page) ---------- */
  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    var lbCaption = lightbox.querySelector(".lb-caption");
    var lbClose = lightbox.querySelector(".lb-close");
    var lbPrev = lightbox.querySelector(".lb-prev");
    var lbNext = lightbox.querySelector(".lb-next");
    var galButtons = Array.prototype.slice.call(document.querySelectorAll(".gal-btn"));
    var idx = 0;
    var lastFocus = null;

    function openLb(i) {
      idx = i;
      var src = galButtons[idx].getAttribute("data-full");
      var alt = galButtons[idx].querySelector("img").alt;
      lbImg.src = src;
      lbImg.alt = alt;
      if (lbCaption) lbCaption.textContent = alt + "  (" + (idx + 1) + " of " + galButtons.length + ")";
      lastFocus = document.activeElement;
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
      lbClose.focus();
    }
    function closeLb() {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    function step(delta) {
      openLb((idx + delta + galButtons.length) % galButtons.length);
    }

    galButtons.forEach(function (btn, i) {
      btn.addEventListener("click", function () { openLb(i); });
    });
    lbClose.addEventListener("click", closeLb);
    lbPrev.addEventListener("click", function () { step(-1); });
    lbNext.addEventListener("click", function () { step(1); });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLb();
    });
    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLb();
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "Tab") {
        // simple focus trap across the 3 controls
        var focusables = [lbClose, lbPrev, lbNext];
        var i = focusables.indexOf(document.activeElement);
        if (e.shiftKey && (i === 0 || i === -1)) { e.preventDefault(); focusables[focusables.length - 1].focus(); }
        else if (!e.shiftKey && i === focusables.length - 1) { e.preventDefault(); focusables[0].focus(); }
      }
    });
  }
})();
