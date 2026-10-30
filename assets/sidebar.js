/* Progressive enhancement of the left sidebar on narrow screens. */
(() => {
  const root = document.documentElement;
  const sidebar = document.getElementById('tutorial-sidebar');
  const toggle = document.getElementById('sidebar-toggle');
  const close = document.getElementById('sidebar-close');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar || !toggle || !close || !backdrop) return;

  const narrow = window.matchMedia('(max-width: 760px)');
  let opened = false;
  root.dataset.sidebarEnhanced = 'true';

  function setOpen(value, restoreFocus = true) {
    const wasOpen = opened;
    opened = narrow.matches && Boolean(value);
    root.dataset.sidebarOpen = String(opened);
    toggle.setAttribute('aria-expanded', String(opened));
    toggle.setAttribute('aria-label', opened ? 'Close contents' : 'Open contents');
    backdrop.hidden = !opened;
    sidebar.inert = narrow.matches && !opened;
    if (opened) close.focus();
    else if (wasOpen && restoreFocus) toggle.focus();
  }

  toggle.addEventListener('click', () => setOpen(!opened));
  close.addEventListener('click', () => setOpen(false));
  backdrop.addEventListener('click', () => setOpen(false));
  sidebar.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (opened && link) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (!opened) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Tab') {
      const items = Array.from(sidebar.querySelectorAll('a[href], button:not([disabled]), summary, [tabindex="0"]'))
        .filter((element) => element.getClientRects().length > 0);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  narrow.addEventListener('change', () => {
    const focusWasInSidebar = sidebar.contains(document.activeElement);
    setOpen(false, false);
    if (narrow.matches && focusWasInSidebar) toggle.focus();
  });
  setOpen(false, false);
})();
