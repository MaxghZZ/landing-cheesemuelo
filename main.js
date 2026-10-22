const imageShells = document.querySelectorAll('[data-image-shell]');
document.querySelectorAll('[data-image]').forEach((image) => {
  image.addEventListener('error', () => {
    const shell = image.closest('[data-image-shell]');
    if (shell) shell.classList.add('image-missing');
    image.hidden = true;
  });
  image.addEventListener('load', () => image.closest('[data-image-shell]')?.classList.remove('image-missing'));
});
imageShells.forEach((shell) => {
  if (!shell.querySelector('img')) shell.classList.add('image-missing');
});

const menuToggle = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');
const firstMenuLink = menu?.querySelector('a');
const backgroundRegions = [
  document.querySelector('.site-header .brand'),
  document.querySelector('main'),
  document.querySelector('footer'),
].filter(Boolean);
let menuTrigger = null;

function setBackgroundInert(isInert) {
  backgroundRegions.forEach((region) => {
    region.inert = isInert;
  });
}

function closeMenu({ restoreFocus = false } = {}) {
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Abrir navegación');
  menu?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
  setBackgroundInert(false);
  if (restoreFocus) menuTrigger?.focus();
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  if (isOpen) {
    closeMenu({ restoreFocus: true });
    return;
  }
  menuTrigger = menuToggle;
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Cerrar navegación');
  menu?.classList.add('is-open');
  document.body.classList.add('menu-open');
  setBackgroundInert(true);
  firstMenuLink?.focus();
});
document.querySelectorAll('[data-menu] a').forEach((link) => link.addEventListener('click', () => {
  closeMenu();
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu({ restoreFocus: true });
  }

  if (event.key === 'Tab' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    const focusable = [menuToggle, ...menu.querySelectorAll('a')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 800 && menuToggle?.getAttribute('aria-expanded') === 'true') closeMenu();
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
