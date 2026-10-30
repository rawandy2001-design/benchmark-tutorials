/* Two-state color switch. Start in dark mode unless a light choice was saved. */
(() => {
  'use strict';
  const key = 'benchmark-tutorials:color-mode';
  const root = document.documentElement;
  const normalize = value => value === 'light' ? 'light' : 'dark';
  let mode = 'dark';
  try { mode = normalize(window.localStorage.getItem(key)); } catch { /* Storage is optional. */ }
  let toggle;

  function apply() {
    root.dataset.theme = mode;
    root.dataset.themeMode = mode;
    if (!toggle) return;
    toggle.setAttribute('aria-checked', String(mode === 'light'));
    toggle.title = mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
  }

  function choose(value) {
    mode = normalize(value);
    try { window.localStorage.setItem(key, mode); } catch { /* Keep the choice for this page. */ }
    apply();
  }

  // Apply before the body is painted, including when the saved mode is light.
  apply();
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      mode = normalize(event.newValue);
      apply();
    }
  });

  function initialize() {
    const control = document.querySelector('.theme-switcher');
    toggle = document.getElementById('theme-toggle');
    if (!control || !toggle) return;
    toggle.addEventListener('click', () => choose(mode === 'dark' ? 'light' : 'dark'));
    toggle.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'Home') {
        event.preventDefault();
        choose('dark');
      } else if (event.key === 'ArrowRight' || event.key === 'End') {
        event.preventDefault();
        choose('light');
      }
    });
    control.hidden = false;
    apply();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
