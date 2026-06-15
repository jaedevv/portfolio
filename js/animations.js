(() => {
  // ===== IntersectionObserver Reveals =====
  const revealElements = document.querySelectorAll('[data-reveal]');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // ===== Staggered Reveal for Grid Children =====
  const staggerContainers = document.querySelectorAll('[data-stagger]');
  staggerContainers.forEach((container) => {
    const children = container.children;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Array.from(children).forEach((child, i) => {
              child.style.setProperty('--stagger-index', i);
              child.classList.add('revealed');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(container);
  });

  // ===== Timeline Line Draw =====
  const timelineLine = document.querySelector('[data-timeline-line]');
  if (timelineLine) {
    const timelineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timelineLine.classList.add('timeline__line--drawn');
          timelineObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    timelineObserver.observe(timelineLine.parentElement);
  }

  // ===== Counter Animation =====
  const counters = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-counter'), 10);
          const duration = 2000;
          const start = performance.now();
          const isVisible = el.closest('.hero__stat') !== null;

          const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = current;

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              el.textContent = target;
            }
          };

          if (target > 0) {
            el.textContent = '0';
            requestAnimationFrame(update);
          }

          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => counterObserver.observe(c));

  // ===== Typewriter Effect =====
  const typewriterEl = document.querySelector('[data-typewriter]');
  if (typewriterEl) {
    const textEl = typewriterEl.querySelector('.hero__role-text');
    const words = ['Web Designer', 'Developer', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    const type = () => {
      if (isPaused) {
        setTimeout(type, 2000);
        isPaused = false;
        return;
      }

      const currentWord = words[wordIndex];

      if (!isDeleting) {
        charIndex++;
        textEl.textContent = currentWord.substring(0, charIndex);

        if (charIndex === currentWord.length) {
          isPaused = true;
          isDeleting = true;
          setTimeout(type, 2500);
          return;
        }
      } else {
        charIndex--;
        textEl.textContent = currentWord.substring(0, charIndex);

        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500);
          return;
        }
      }

      const delay = isDeleting ? 40 : 80;
      setTimeout(type, delay);
    };

    setTimeout(type, 1500);
  }

  // ===== Particles =====
  const particleContainer = document.querySelector('[data-particles]');
  if (particleContainer) {
    const count = 30;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.width = `${Math.random() * 3 + 2}px`;
      particle.style.height = particle.style.width;
      particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      particleContainer.appendChild(particle);
    }
  }

  // ===== Project Filter =====
  const filterBtns = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
          card.style.opacity = '0';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '1';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 400);
        }
      });
    });
  });
})();
