(() => {
  const storageKey = 'jae-theme';
  const html = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');

  const getPreferred = () => {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const applyTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
    document.querySelector('meta[name="theme-color"]').content =
      theme === 'dark' ? '#0a0a1a' : '#f8fafc';
  };

  const toggleTheme = () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  if (btn) btn.addEventListener('click', toggleTheme);

  applyTheme(getPreferred());
})();
