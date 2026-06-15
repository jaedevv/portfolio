(() => {
  // ===== Loader =====
  const loader = document.querySelector('[data-loader]');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 800);
    });

    if (document.readyState === 'complete') {
      setTimeout(() => {
        loader.classList.add('hidden');
      }, 800);
    }
  }

  // ===== Dynamic Year =====
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) {
    yearEl.textContent = `\u00A9 ${new Date().getFullYear()} Jae Serene E. Almodiel. All rights reserved.`;
  }

  // ===== Magnetic Buttons =====
  const magneticEls = document.querySelectorAll('[data-magnetic]');
  if (magneticEls.length > 0 && !('ontouchstart' in window)) {
    magneticEls.forEach((el) => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translate(0, 0)';
      });
    });
  }

  // ===== Smooth Anchor Scroll (custom easing) =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const top = target.offsetTop - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();
