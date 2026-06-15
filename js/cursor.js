(() => {
  const cursor = document.querySelector('[data-cursor]');
  const follower = document.querySelector('[data-cursor-follower]');

  if (!cursor || !follower) return;

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouch) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    return;
  }

  if (window.innerWidth <= 768) {
    cursor.style.display = 'none';
    follower.style.display = 'none';
    return;
  }

  cursor.style.display = 'block';
  follower.style.display = 'block';

  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  const updateCursor = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  };

  const updateFollower = () => {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
    requestAnimationFrame(updateFollower);
  };

  document.addEventListener('mousemove', updateCursor);
  requestAnimationFrame(updateFollower);

  const hoverElements = document.querySelectorAll('a, button, [data-tilt], .skill-card, .project-card');
  hoverElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
      cursor.style.background = 'var(--color-primary)';
      follower.style.width = '56px';
      follower.style.height = '56px';
      follower.style.borderColor = 'var(--color-primary)';
      follower.style.opacity = '0.6';
    });

    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursor.style.background = 'var(--color-primary-light)';
      follower.style.width = '40px';
      follower.style.height = '40px';
      follower.style.borderColor = 'var(--color-primary-light)';
      follower.style.opacity = '0.4';
    });
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    follower.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    follower.style.opacity = '0.4';
  });
})();
