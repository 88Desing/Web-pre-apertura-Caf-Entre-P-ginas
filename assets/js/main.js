const button = document.querySelector('.menu-button');
const menu = document.querySelector('.main-menu');

button?.addEventListener('click', () => {
  const isOpen = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!isOpen));
  menu?.classList.toggle('is-open', !isOpen);
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    button?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('is-open');
  });
});

// The visual "under the banner" effect is primarily CSS sticky positioning.
// JS only adds a light state to cards while they are entering the banner zone.
const banner = document.querySelector('.catalogue-banner');
const cards = document.querySelectorAll('.catalogue-list .product-card');

if (banner && cards.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('is-passing', !entry.isIntersecting);
    });
  }, {
    root: null,
    rootMargin: '-12% 0px -62% 0px',
    threshold: 0
  });
  cards.forEach((card) => observer.observe(card));
}