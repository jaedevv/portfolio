(() => {
  const nav = document.querySelector('[data-nav]');
  const hamburger = document.querySelector('[data-hamburger]');
  const menu = document.querySelector('[data-nav-menu]');
  const links = document.querySelectorAll('.nav__link');
  const backToTop = document.querySelector('[data-back-to-top]');
  const scrollIndicator = document.querySelector('[data-scroll-indicator]');

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }

    if (backToTop) {
      backToTop.classList.toggle('visible', currentScroll > 600);
    }

    if (scrollIndicator) {
      scrollIndicator.style.opacity = currentScroll > 100 ? '0' : '1';
    }

    updateActiveLink();
  };

  const updateActiveLink = () => {
    const sections = document.querySelectorAll('.section[id]');
    let current = '';

    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      link.classList.toggle('nav__link--active', link.getAttribute('href') === `#${current}`);
    });
  };

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    links.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
