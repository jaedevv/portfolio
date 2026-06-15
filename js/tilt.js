(() => {
  const tiltElements = document.querySelectorAll('[data-tilt]');

  if (tiltElements.length === 0) return;

  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) return;

  const settings = {
    max: 8,
    perspective: 1000,
    scale: 1.02,
    speed: 400,
    easing: 'cubic-bezier(.03,.98,.52,.99)'
  };

  tiltElements.forEach((el) => {
    el.style.transition = `transform ${settings.speed}ms ${settings.easing}`;
    el.style.transformStyle = 'preserve-3d';

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.15s ease-out';
    });

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -settings.max;
      const rotateY = ((x - centerX) / centerX) * settings.max;

      el.style.transition = 'none';
      el.style.transform = `
        perspective(${settings.perspective}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})
      `;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transition = `transform ${settings.speed}ms ${settings.easing}`;
      el.style.transform = `
        perspective(${settings.perspective}px)
        rotateX(0deg)
        rotateY(0deg)
        scale3d(1, 1, 1)
      `;
    });
  });
})();
