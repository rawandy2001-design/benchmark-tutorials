/* Remember an explicit choice; otherwise follow the system appearance. */
(() => {
  'use strict';
  const key = 'benchmark-tutorials:color-mode';
  const modes = ['system', 'light', 'dark'];
  const labels = { system: 'System', light: 'Light', dark: 'Dark' };
  const icons = {
    system: '<rect x="3" y="4" width="18" height="13" rx="2"></rect><path d="M8 21h8M12 17v4"></path>',
    light: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"></path>',
    dark: '<path d="M20.9 13a9 9 0 0 1-9.9-9.9A9 9 0 1 0 20.9 13Z"></path>'
  };
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const normalize = value => modes.includes(value) ? value : 'system';
  let mode = 'system';
  try { mode = normalize(window.localStorage.getItem(key)); } catch { /* Storage is optional. */ }
  let picker;
  let toggle;
  let menu;
  let choices = [];

  function apply() {
    const resolved = mode === 'system' ? (preference.matches ? 'dark' : 'light') : mode;
    root.dataset.theme = resolved;
    root.dataset.themeMode = mode;
    if (!toggle) return;
    toggle.querySelector('.theme-label').textContent = labels[mode];
    toggle.querySelector('.theme-icon').innerHTML = icons[mode];
    toggle.setAttribute('aria-label', `Color mode: ${labels[mode]}. Choose color mode`);
    toggle.title = `Color mode: ${labels[mode]}`;
    for (const choice of choices) {
      choice.setAttribute('aria-checked', String(choice.dataset.themeValue === mode));
    }
  }

  // This script runs in the head so a saved choice is applied before the page is painted.
  apply();
  preference.addEventListener('change', () => { if (mode === 'system') apply(); });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      mode = normalize(event.newValue);
      apply();
    }
  });

  function initialize() {
    picker = document.querySelector('.theme-picker');
    toggle = document.getElementById('theme-toggle');
    menu = document.getElementById('theme-menu');
    if (!picker || !toggle || !menu) return;
    choices = Array.from(menu.querySelectorAll('[data-theme-value]'));
    picker.hidden = false;
    apply();

    function close(restoreFocus = false) {
      menu.hidden = true;
      toggle.setAttribute('aria-expanded', 'false');
      if (restoreFocus) toggle.focus();
    }
    function open() {
      menu.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
      (choices.find(choice => choice.dataset.themeValue === mode) || choices[0]).focus();
    }
    toggle.addEventListener('click', () => { if (menu.hidden) open(); else close(); });
    toggle.addEventListener('keydown', event => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        open();
      }
    });
    for (const choice of choices) {
      choice.addEventListener('click', () => {
        mode = normalize(choice.dataset.themeValue);
        try { window.localStorage.setItem(key, mode); } catch { /* Keep the choice for this page. */ }
        apply();
        close(true);
      });
    }
    menu.addEventListener('keydown', event => {
      const index = choices.indexOf(document.activeElement);
      let next;
      if (event.key === 'ArrowDown') next = (index + 1) % choices.length;
      if (event.key === 'ArrowUp') next = (index - 1 + choices.length) % choices.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = choices.length - 1;
      if (next !== undefined) {
        event.preventDefault();
        choices[next].focus();
      }
    });
    document.addEventListener('click', event => { if (!picker.contains(event.target)) close(); });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !menu.hidden) {
        event.preventDefault();
        close(true);
      }
    });
    picker.addEventListener('focusout', event => {
      if (!picker.contains(event.relatedTarget)) close();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
