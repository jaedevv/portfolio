(() => {
  const storageKey = 'jae-theme';
  const html = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');

  const getPreferred = () => {
    const stored = localStorage.getItem(storageKey);
    if (stored) return stored;
    return 'dark';
  };

  const applyTheme = (theme) => {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(storageKey, theme);
    document.querySelector('meta[name="theme-color"]').content =
      theme === 'dark' ? '#080e1a' : '#f0f4f8';
  };

  const toggleTheme = () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  };

  if (btn) btn.addEventListener('click', toggleTheme);

  applyTheme(getPreferred());
})();
