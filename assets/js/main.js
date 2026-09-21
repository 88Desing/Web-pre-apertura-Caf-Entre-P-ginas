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

// v8: elimina tarjetas opcionales cuando la imagen todavía no se ha subido.
document.querySelectorAll('[data-optional-image]').forEach((card) => {
  const image = card.querySelector('img');
  if (!image) return;
  image.addEventListener('error', () => card.remove(), { once: true });
  if (image.complete && image.naturalWidth === 0) card.remove();
});

// v8: modal de imagen ampliada en la misma pestaña.
const modal = document.querySelector('#image-modal');
const modalImage = document.querySelector('#image-modal-image');
const modalCaption = document.querySelector('#image-modal-caption');
let lastFocusedElement = null;

function closeImageModal() {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  modalImage?.removeAttribute('src');
  lastFocusedElement?.focus?.();
}

function openImageModal(link) {
  if (!modal || !modalImage) return;
  const image = link.querySelector('img');
  if (!image) return;
  lastFocusedElement = document.activeElement;
  modalImage.src = image.currentSrc || image.src;
  modalImage.alt = image.alt || 'Imagen ampliada de la carta';
  if (modalCaption) modalCaption.textContent = `${image.alt || 'Imagen ampliada'} · Pulsa fuera o en la X para cerrar.`;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.image-modal-close')?.focus();
}

document.querySelectorAll('.catalogue-image-link').forEach((link) => {
  link.removeAttribute('target');
  link.removeAttribute('rel');
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openImageModal(link);
  });
});

modal?.querySelectorAll('[data-modal-close]').forEach((element) => {
  element.addEventListener('click', closeImageModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal && !modal.hidden) closeImageModal();
});

// Efecto sutil para las tarjetas que atraviesan la zona del banner fijo.
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

// v9: navegación con botones inspirados en las hojas de un libro.
document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('[data-carousel-track]');
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  if (!track || !previous || !next) return;

  const getStep = () => {
    const card = track.querySelector('.product-card');
    if (!card) return Math.max(track.clientWidth * 0.8, 280);
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
    return card.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 2;
    previous.disabled = track.scrollLeft <= 2;
    next.disabled = track.scrollLeft >= maxScroll;
  };

  previous.addEventListener('click', () => {
    track.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });
  next.addEventListener('click', () => {
    track.scrollBy({ left: getStep(), behavior: 'smooth' });
  });
  track.addEventListener('scroll', updateButtons, { passive: true });
  window.addEventListener('resize', updateButtons);
  updateButtons();
});
