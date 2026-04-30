/* custom.js — load AFTER webflow.js. Never edit webflow.js. */

/* ─── Newsletter Form (index.html) ──────────────────────────────────────────
   TODO: replace YOUR_FORMSPREE_ID with actual Formspree endpoint
   or swap for a Make webhook handler similar to pendino/js/custom.js
──────────────────────────────────────────────────────────────────────── */
(function () {
  var newsletterForm = document.getElementById('wf-form-Newsletter-Form');
  if (!newsletterForm) return;

  newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var formDone = newsletterForm.closest('.w-form').querySelector('.w-form-done');
    var formFail = newsletterForm.closest('.w-form').querySelector('.w-form-fail');
    var data = new FormData(newsletterForm);

    fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then(function (r) {
        if (r.ok) {
          newsletterForm.style.display = 'none';
          if (formDone) formDone.style.display = 'block';
        } else {
          if (formFail) formFail.style.display = 'block';
        }
      })
      .catch(function () {
        if (formFail) formFail.style.display = 'block';
      });
  });
})();

/* ─── Careers Form (carrieres.html) ─────────────────────────────────────────
   TODO: replace YOUR_FORMSPREE_ID with actual Formspree endpoint
──────────────────────────────────────────────────────────────────────── */
(function () {
  var careersForm = document.getElementById('wf-form-Formulaire-de-carri-re');
  if (!careersForm) return;

  careersForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var formDone = careersForm.closest('.w-form').querySelector('.w-form-done');
    var formFail = careersForm.closest('.w-form').querySelector('.w-form-fail');
    var data = new FormData(careersForm);

    fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
      .then(function (r) {
        if (r.ok) {
          careersForm.style.display = 'none';
          if (formDone) formDone.style.display = 'block';
        } else {
          if (formFail) formFail.style.display = 'block';
        }
      })
      .catch(function () {
        if (formFail) formFail.style.display = 'block';
      });
  });
})();
