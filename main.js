const whatsappNumber = '51933854277';

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
let menuTrigger = null;

function closeMenu({ restoreFocus = false } = {}) {
  menuToggle?.setAttribute('aria-expanded', 'false');
  menu?.classList.remove('is-open');
  document.body.classList.remove('menu-open');
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
  menu?.classList.add('is-open');
  document.body.classList.add('menu-open');
  firstMenuLink?.focus();
});
document.querySelectorAll('[data-menu] a').forEach((link) => link.addEventListener('click', () => {
  closeMenu();
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu({ restoreFocus: true });
  }
});

const filters = document.querySelectorAll('[data-filter]');
const pizzas = document.querySelectorAll('.pizza-card');
filters.forEach((filter) => filter.addEventListener('click', () => {
  const category = filter.dataset.filter;
  filters.forEach((button) => {
    const active = button === filter;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  pizzas.forEach((pizza) => {
    pizza.hidden = category !== 'all' && !pizza.dataset.category.includes(category);
  });
}));

const builder = document.querySelector('[data-builder]');
const summary = document.querySelector('[data-summary]');
const total = document.querySelector('[data-total]');
const builderLink = document.querySelector('[data-builder-link]');
const basePrice = 30;

function formatCurrency(value) {
  return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 }).format(value).replace('PEN', 'S/');
}

function updateBuilder() {
  if (!builder || !summary || !total || !builderLink) return;
  const selectedBase = builder.querySelector('input[name="masa"]:checked');
  const selectedSauce = builder.querySelector('input[name="salsa"]:checked');
  const extras = [...builder.querySelectorAll('input[type="checkbox"]:checked')];
  const selections = [selectedBase, selectedSauce, ...extras].filter(Boolean);
  const price = selections.reduce((sum, input) => sum + Number(input.dataset.price || 0), basePrice);
  const extrasText = extras.length ? extras.map((input) => input.dataset.label).join(', ') : 'Sin extras';
  summary.innerHTML = `<div><dt>Base</dt><dd>${selectedBase.dataset.label}</dd></div><div><dt>Salsa</dt><dd>${selectedSauce.dataset.label}</dd></div><div><dt>Extras</dt><dd>${extrasText}</dd></div>`;
  total.textContent = formatCurrency(price);
  const message = `Hola Cheese Muelo, quiero mi Pizza Personalizada Muelo:%0A- ${selectedBase.dataset.label}%0A- ${selectedSauce.dataset.label}%0A- Extras: ${extrasText}%0A- Total estimado: ${formatCurrency(price)}`;
  builderLink.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  builderLink.target = '_blank';
  builderLink.rel = 'noopener noreferrer';
}
builder?.addEventListener('change', updateBuilder);
updateBuilder();

document.querySelector('[data-year]').textContent = new Date().getFullYear();
