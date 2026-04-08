/**
 * theme.js — Dark / Light Mode Toggle
 * Reads preference from localStorage or system, persists choice.
 */

const html = document.documentElement;

/**
 * Initialize theme from localStorage or system preference.
 */
function initTheme() {
  if (
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}

/**
 * Bind click event to the theme toggle button.
 */
function bindThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      html.classList.contains('dark') ? 'dark' : 'light'
    );
  });
}

export { initTheme, bindThemeToggle };
