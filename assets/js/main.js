const menuButton = document.querySelector('.menu-button');
const mainMenu = document.querySelector('.main-menu');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mainMenu?.classList.toggle('is-open', !isOpen);
});

mainMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    mainMenu?.classList.remove('is-open');
  });
});

const CATALOGUE_DATA = [
  {
    id: 'bebidas',
    title: 'Bebidas',
    intro: 'Café de especialidad, opciones naturales, bebidas funcionales y propuestas para cada momento del día.',
    groups: [
      {
        title: 'Cafés y bebidas calientes',
        entries: [
          {
            id: 'cafes-calientes',
            title: 'Cafés y bebidas calientes',
            products: 'Espresso · Espresso doble · Americano · Cortado · Latte · Cappuccino · Mini-Choco',
            images: [{ src: 'assets/images/catalogo-cafes-v10.jpeg', alt: 'Carta de cafés y bebidas calientes de Café Entre Páginas', label: 'Cafés y bebidas calientes' }]
          }
        ]
      },
      {
        title: 'Zumos, Smoothies y Detox',
        entries: [
          {
            id: 'zumos-smoothies-detox',
            title: 'Zumos, Smoothies y Detox',
            products: 'Zumos: Naranja · Naranja & Mango · Manzana · Smoothies: Fresa & Plátano · Mango & Fruta de la Pasión · Detox: Forever Young · Ginger Boy',
            images: [{ src: 'assets/images/catalogo-zumos-smoothies-detox.jpeg', alt: 'Carta de zumos, smoothies y detox de Café Entre Páginas', label: 'Zumos, Smoothies y Detox' }]
          }
        ]
      },
      {
        title: 'Kombuchas y limonada',
        entries: [
          {
            id: 'kombuchas-limonada',
            title: 'Kombuchas y limonada',
            products: 'BerryVida · GingerVida · GreenVida · Limonada fresca de fruta de la pasión',
            images: [{ src: 'assets/images/catalogo-kombuchas-limonada.jpeg', alt: 'Carta de kombuchas y limonada de Café Entre Páginas', label: 'Kombuchas y limonada' }]
          }
        ]
      },
      {
        title: 'Bebidas con Alma',
        entries: [
          {
            id: 'bebidas-con-alma',
            title: 'Bebidas con Alma',
            products: 'Agua de coco natural · Agua de coco & sandía · Yoko Matcha · Mate · Living Things Watermelon & Lime · Lemon & Ginger',
            images: [{ src: 'assets/images/catalogo-bebidas-con-alma.jpeg', alt: 'Carta de bebidas especiales y bebidas con alma de Café Entre Páginas', label: 'Bebidas con Alma' }]
          }
        ]
      },
      {
        title: 'Aguas',
        entries: [
          {
            id: 'aguas',
            title: 'Aguas',
            products: 'Sin gas · Con gas · Limón & Magnesio',
            images: [{ src: 'assets/images/catalogo-aguas.jpeg', alt: 'Carta de aguas de Café Entre Páginas', label: 'Aguas' }]
          }
        ]
      }
    ]
  },
  {
    id: 'comida',
    title: 'Comida',
    intro: 'Opciones saladas, dulces y snacks para una pausa rápida, equilibrada o simplemente deliciosa.',
    groups: [
      {
        title: 'Salado',
        entries: [
          {
            id: 'salado',
            title: 'Salado',
            products: 'Ensaladas: Mexicana · Salmón Power · Wraps: The Greek · Pollo Páprika · Plato saludable: Pollo al curry con arroz',
            images: [{ src: 'assets/images/catalogo-salado-v10.jpeg', alt: 'Carta salada con ensaladas, wraps y platos saludables de Café Entre Páginas', label: 'Salado' }]
          }
        ]
      },
      {
        title: 'Dulce',
        entries: [
          {
            id: 'dulce',
            title: 'Dulce',
            products: 'Berry Bites · Golden Dates · Blueberry Muffins',
            images: [{ src: 'assets/images/catalogo-dulce.jpeg', alt: 'Carta dulce de Café Entre Páginas', label: 'Dulce' }]
          }
        ]
      },
      {
        title: 'Snacks',
        entries: [
          {
            id: 'snacks',
            title: 'Snacks',
            products: 'Fruit Rolls · Barritas Zest · Chips de Fresa · Frutos Secos Premium · Lata de Frutos Secos Picantes · Student Mix · Barrita BE-KIND · Snacks para bebés',
            images: [
              { src: 'assets/images/catalogo-snacks.jpeg', alt: 'Carta de snacks de Café Entre Páginas', label: 'Snacks' },
              { src: 'assets/images/catalogo-snacks-ninos.jpeg', alt: 'Carta de snacks naturales para niños de Café Entre Páginas', label: 'Snacks para niños' },
              { src: 'assets/images/catalogo-snacks-bebes.jpeg', alt: 'Carta de snacks para bebés de Café Entre Páginas', label: 'Snacks para bebés' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'packs',
    title: 'Packs',
    intro: 'Packs para regalar, celebrar, compartir, resolver una pausa o convertir una semana en una pequeña historia.',
    groups: [
      {
        title: 'Para Regalar',
        entries: [
          { id: 'pack-historia', title: 'Historia', products: 'Café de especialidad y detalle con intención.', images: [{ src: 'assets/images/pack-historia.jpeg', alt: 'Pack Historia de Café Entre Páginas', label: 'Pack Historia' }] },
          { id: 'pack-relatos', title: 'Relatos', products: 'Café, lectura y buenos momentos.', images: [{ src: 'assets/images/pack-relatos.jpeg', alt: 'Pack Relatos de Café Entre Páginas', label: 'Pack Relatos' }] },
          { id: 'pack-personalizado', title: 'Personalizado', products: 'Crea tu propio pack a medida.', images: [{ src: 'assets/images/pack-personalizable.jpeg', alt: 'Pack personalizable de Café Entre Páginas', label: 'Pack Personalizado' }] }
        ]
      },
      {
        title: 'Cumpleaños Infantiles',
        entries: [
          { id: 'pack-cuento', title: 'Cuento', products: 'Pack infantil para celebraciones.', images: [{ src: 'assets/images/pack-cuento.jpeg', alt: 'Pack Cuento de Café Entre Páginas', label: 'Pack Cuento' }] },
          { id: 'pack-pequenos-lectores', title: 'Pequeños Lectores', products: 'Pack infantil con revista y productos seleccionados.', images: [{ src: 'assets/images/pack-pequenos-lectores.jpeg', alt: 'Pack Pequeños Lectores de Café Entre Páginas', label: 'Pack Pequeños Lectores' }] }
        ]
      },
      {
        title: 'Entre Clases',
        entries: [
          { id: 'pack-recreo', title: 'Recreo', products: 'Zumo premium + Student Mix.', images: [{ src: 'assets/images/pack-recreo-v10.jpeg', alt: 'Pack Recreo de Café Entre Páginas', label: 'Pack Recreo' }] },
          { id: 'pack-pausa-saludable', title: 'Pausa Saludable', products: 'Zumo + barrita de fruta.', images: [{ src: 'assets/images/pack-pausa-saludable-v10.jpeg', alt: 'Pack Pausa Saludable de Café Entre Páginas', label: 'Pack Pausa Saludable' }] }
        ]
      },
      {
        title: 'Empresas',
        entries: [
          { id: 'pack-pausa-cafe-empresas', title: 'Pausa Café Empresas', products: 'Propuesta para equipos y reuniones de 5 personas.', images: [{ src: 'assets/images/pack-pausa-cafe-empresas.jpeg', alt: 'Pausa Café Empresas de Café Entre Páginas', label: 'Pausa Café Empresas' }] },
          { id: 'pack-reunion-entre-paginas', title: 'Reunión Entre Páginas', products: 'Coffee break para equipos de 10 personas.', images: [{ src: 'assets/images/pack-reunion-entre-paginas.jpeg', alt: 'Reunión Entre Páginas para empresas', label: 'Reunión Entre Páginas' }] }
        ]
      },
      {
        title: 'Suscripciones',
        entries: [
          { id: 'pack-semana', title: 'Semana Entre Páginas', products: 'Selección semanal de bebidas naturales.', images: [{ src: 'assets/images/pack-semana-entre-paginas.jpeg', alt: 'Suscripción Semana Entre Páginas', label: 'Semana Entre Páginas' }] }
        ]
      },
      {
        title: 'Diarios',
        entries: [
          { id: 'pack-pausa-dulce', title: 'Pausa Dulce Entre Páginas', products: 'Un café y un capricho para tu historia de hoy.', images: [{ src: 'assets/images/pack-pausa-dulce.jpeg', alt: 'Pausa Dulce Entre Páginas', label: 'Pausa Dulce Entre Páginas' }] },
          { id: 'pack-pausa-larga', title: 'Pausa Larga Entre Páginas', products: 'Menú completo para una pausa a tu ritmo.', images: [{ src: 'assets/images/pack-pausa-larga.jpeg', alt: 'Pausa Larga Entre Páginas', label: 'Pausa Larga Entre Páginas' }] },
          { id: 'pack-capitulo-compartir', title: 'Un Capítulo para compartir', products: 'Una propuesta para dos personas.', images: [{ src: 'assets/images/pack-capitulo-compartir.jpeg', alt: 'Un Capítulo para compartir de Café Entre Páginas', label: 'Un Capítulo para compartir' }] }
        ]
      }
    ]
  },
  {
    id: 'lecturas',
    title: 'Revistas / Libros',
    intro: 'Lecturas para pequeños curiosos, adolescentes que no quieren volver de Hawkins y adultos que siguen haciéndose preguntas.',
    groups: [
      {
        title: 'Infantiles',
        entries: [
          { id: 'natgeo-kids', title: 'National Geographic Kids', products: 'Colección infantil.', images: [{ src: 'assets/images/revista-national-geographic-kids.jpeg', alt: 'National Geographic Kids en Café Entre Páginas', label: 'National Geographic Kids' }] },
          { id: 'caracola', title: 'Caracola', products: 'Revista infantil para 3 a 6 años.', images: [{ src: 'assets/images/revista-caracola.jpeg', alt: 'Revista infantil Caracola en Café Entre Páginas', label: 'Caracola' }] },
          { id: 'leoleo', title: 'LeoLeo', products: 'Revista infantil para 7 a 10 años.', images: [{ src: 'assets/images/revista-leoleo.jpeg', alt: 'Revista infantil LeoLeo en Café Entre Páginas', label: 'LeoLeo' }] }
        ]
      },
      {
        title: 'Adolescentes',
        entries: [
          { id: 'stranger-coleccion', title: 'Stranger Things · Colección T1 – T4', products: 'Edición en inglés.', images: [{ src: 'assets/images/stranger-things-coleccion.jpeg', alt: 'Colección Stranger Things temporadas 1 a 4 en inglés', label: 'Stranger Things · Colección T1 – T4' }] },
          { id: 'stranger-aventuras', title: 'Stranger Things · Aventuras', products: 'Edición en inglés.', images: [{ src: 'assets/images/stranger-things-aventuras.jpeg', alt: 'Aventuras Stranger Things en inglés', label: 'Stranger Things · Aventuras' }] }
        ]
      },
      {
        title: 'Adultos',
        entries: [
          { id: 'coleccion-cerebro', title: 'National Geographic · Colección Cerebro', products: 'Revistas especiales para descubrir, aprender y cuidar la mente.', images: [{ src: 'assets/images/revistas-coleccion-cerebro.jpeg', alt: 'Colección Cerebro de National Geographic en Café Entre Páginas', label: 'National Geographic · Colección Cerebro' }] }
        ]
      }
    ]
  },
  {
    id: 'servicios',
    title: 'Servicios',
    intro: 'Ventajas del Club, celebraciones íntimas y opciones de regalo para seguir construyendo historias alrededor del café.',
    groups: [
      {
        title: 'Club Café Entre Páginas',
        entries: [
          {
            id: 'club-ventajas-socios',
            title: 'Ventajas para socios',
            products: 'Resumen de ventajas exclusivas para miembros del Club Café Entre Páginas.',
            images: [{ src: 'assets/images/servicio-club-principal.jpeg', alt: 'Ventajas exclusivas para socios del Club Entre Páginas', label: 'Club Café Entre Páginas · Ventajas para socios' }]
          },
          {
            id: 'club-beneficio-1',
            title: 'Beneficio 1',
            products: 'Tarjeta de sellos y 9.º café gratis.',
            images: [{ src: 'assets/images/servicio-club-1.jpeg', alt: 'Club Entre Páginas y tarjeta de sellos', label: 'Club Café Entre Páginas · Beneficio 1' }]
          },
          {
            id: 'club-beneficio-2',
            title: 'Beneficio 2',
            products: 'Regalo especial de cumpleaños para miembros del Club.',
            images: [{ src: 'assets/images/servicio-club-2.jpeg', alt: 'Regalo de cumpleaños para miembros del Club Entre Páginas', label: 'Club Café Entre Páginas · Beneficio 2' }]
          }
        ]
      },
      {
        title: 'Celebra Entre Páginas',
        entries: [
          { id: 'celebra-capitulo', title: 'Un Capítulo', products: 'Opción de celebración y reserva.', images: [{ src: 'assets/images/servicio-celebra-entre-paginas.jpeg', alt: 'Celebra Entre Páginas: Un Capítulo y Una Historia', label: 'Celebra Entre Páginas' }] },
          { id: 'celebra-historia', title: 'Una Historia', products: 'Opción de celebración y reserva.', images: [{ src: 'assets/images/servicio-celebra-entre-paginas.jpeg', alt: 'Celebra Entre Páginas: Un Capítulo y Una Historia', label: 'Celebra Entre Páginas' }] }
        ]
      },
      {
        title: 'Tarjeta Regalo Café Entre Páginas',
        entries: [
          { id: 'tarjeta-regalo', title: 'Tarjeta Regalo', products: 'Un café, una historia, un momento.', images: [{ src: 'assets/images/servicio-tarjeta-regalo.jpeg', alt: 'Tarjeta Regalo de Café Entre Páginas', label: 'Tarjeta Regalo Café Entre Páginas' }] }
        ]
      }
    ]
  },
  {
    id: 'merchandising',
    title: 'Merchandising',
    intro: 'Detalles de Café Entre Páginas pensados para acompañarte más allá del café: para casa, para regalar o para llevar contigo.',
    groups: [
      {
        title: 'Café para casa',
        entries: [
          {
            id: 'merch-bolsas-cafe',
            title: 'Bolsas de café',
            products: 'Café de especialidad Randall Coffee Roasters · Amazonia / Perú San Martín Decaf · 250 g · en grano o molido',
            images: [
              {
                src: 'assets/images/merchandising-bolsas-cafe.jpeg',
                alt: 'Bolsas de café de especialidad Café Entre Páginas',
                label: 'Bolsas de café de especialidad'
              }
            ]
          }
        ]
      },
      {
        title: 'Merchandising Café Entre Páginas',
        entries: [
          {
            id: 'merch-termo',
            title: 'Termo',
            products: 'Termo de bambú · 500 ml.',
            images: [
              {
                src: 'assets/images/merchandising-accesorios.jpeg',
                alt: 'Merchandising Café Entre Páginas: termo, bolígrafo, marcapáginas y lonchera',
                label: 'Merchandising Café Entre Páginas'
              }
            ]
          },
          {
            id: 'merch-boligrafo',
            title: 'Bolígrafo Bambú',
            products: 'Bolígrafo de bambú o madera natural con grabado láser.',
            images: [
              {
                src: 'assets/images/merchandising-accesorios.jpeg',
                alt: 'Merchandising Café Entre Páginas: termo, bolígrafo, marcapáginas y lonchera',
                label: 'Merchandising Café Entre Páginas'
              }
            ]
          },
          {
            id: 'merch-marcapaginas',
            title: 'Marcapáginas CEP',
            products: 'Marcapáginas de bambú con grabado láser.',
            images: [
              {
                src: 'assets/images/merchandising-accesorios.jpeg',
                alt: 'Merchandising Café Entre Páginas: termo, bolígrafo, marcapáginas y lonchera',
                label: 'Merchandising Café Entre Páginas'
              }
            ]
          },
          {
            id: 'merch-lonchera',
            title: 'Lonchera',
            products: 'Lonchera Café Entre Páginas · pendiente de realizar pedido.',
            images: [
              {
                src: 'assets/images/merchandising-accesorios.jpeg',
                alt: 'Merchandising Café Entre Páginas: termo, bolígrafo, marcapáginas y lonchera',
                label: 'Merchandising Café Entre Páginas'
              }
            ]
          }
        ]
      }
    ]
  }
];

const categoryTabs = document.querySelector('#category-tabs');
const categoryPanel = document.querySelector('#category-panel');
let activeCategoryId = CATALOGUE_DATA[0].id;

const modal = document.querySelector('#image-modal');
const modalTitle = document.querySelector('#image-modal-title');
const modalImage = document.querySelector('#image-modal-image');
const modalCaption = document.querySelector('#image-modal-caption');
const modalCounter = document.querySelector('#image-modal-counter');
const modalPrev = document.querySelector('[data-modal-prev]');
const modalNext = document.querySelector('[data-modal-next]');
let modalGallery = [];
let modalIndex = 0;
let lastFocusedElement = null;

function allEntriesForCategory(category) {
  return category.groups.flatMap((group) => group.entries.map((entry) => ({ ...entry, groupTitle: group.title })));
}


function renderTabs() {
  if (!categoryTabs) return;
  categoryTabs.innerHTML = CATALOGUE_DATA.map((category) => `
    <button
      class="category-tab"
      type="button"
      role="tab"
      id="tab-${category.id}"
      aria-controls="panel-${category.id}"
      aria-selected="${category.id === activeCategoryId ? 'true' : 'false'}"
      data-category="${category.id}">
      ${category.title}
    </button>
  `).join('');

  categoryTabs.querySelectorAll('[data-category]').forEach((button) => {
    button.addEventListener('click', () => activateCategory(button.dataset.category, true));
  });
}

function renderCategoryPanel(category) {
  if (!categoryPanel) return;
  const entriesCount = allEntriesForCategory(category).length;
  categoryPanel.id = `panel-${category.id}`;
  categoryPanel.setAttribute('aria-labelledby', `tab-${category.id}`);

  categoryPanel.innerHTML = `
    <div class="category-intro">
      <div>
        <h3>${category.title}</h3>
        <p>${category.intro}</p>
      </div>
      <span class="category-count">${entriesCount} ${entriesCount === 1 ? 'opción' : 'opciones'}</span>
    </div>
    <div class="catalogue-groups">
      ${category.groups.map((group) => `
        <section class="catalogue-group">
          <h4 class="catalogue-group-title">${group.title}</h4>
          <div class="catalogue-options">
            ${group.entries.map((entry) => `
              <button class="catalogue-option" type="button" data-entry="${entry.id}">
                <span>
                  <span class="catalogue-option-title">${entry.title}</span>
                  <span class="catalogue-option-products">${entry.products}</span>
                </span>
                <span class="catalogue-option-open">Ver detalle</span>
              </button>
            `).join('')}
          </div>
        </section>
      `).join('')}
    </div>
  `;

  const entries = allEntriesForCategory(category);
  categoryPanel.querySelectorAll('[data-entry]').forEach((button) => {
    button.addEventListener('click', () => {
      const entry = entries.find((item) => item.id === button.dataset.entry);
      if (entry) openImageGallery(entry.images, entry.title);
    });
  });
}


function activateCategory(categoryId, focusPanel = false) {
  const category = CATALOGUE_DATA.find((item) => item.id === categoryId);
  if (!category) return;
  activeCategoryId = categoryId;
  renderTabs();
  renderCategoryPanel(category);
  if (focusPanel) categoryPanel?.focus({ preventScroll: true });
}

function renderModalImage() {
  if (!modalImage || !modalGallery.length) return;
  const current = modalGallery[modalIndex];
  modalImage.src = current.src;
  modalImage.alt = current.alt || 'Imagen ampliada de Café Entre Páginas';
  if (modalCaption) modalCaption.textContent = current.label || current.alt || '';
  if (modalCounter) modalCounter.textContent = modalGallery.length > 1 ? `${modalIndex + 1} / ${modalGallery.length}` : '';
  const multiple = modalGallery.length > 1;
  if (modalPrev) modalPrev.hidden = !multiple;
  if (modalNext) modalNext.hidden = !multiple;
}

function openImageGallery(images, title) {
  if (!modal || !modalImage || !images?.length) return;
  lastFocusedElement = document.activeElement;
  modalGallery = images;
  modalIndex = 0;
  if (modalTitle) modalTitle.textContent = title || 'Detalle de la carta';
  renderModalImage();
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.querySelector('.image-modal-close')?.focus();
}

function closeImageModal() {
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  modalImage?.removeAttribute('src');
  modalGallery = [];
  modalIndex = 0;
  lastFocusedElement?.focus?.();
}

modal?.querySelectorAll('[data-modal-close]').forEach((element) => {
  element.addEventListener('click', closeImageModal);
});
modalPrev?.addEventListener('click', () => {
  if (!modalGallery.length) return;
  modalIndex = (modalIndex - 1 + modalGallery.length) % modalGallery.length;
  renderModalImage();
});
modalNext?.addEventListener('click', () => {
  if (!modalGallery.length) return;
  modalIndex = (modalIndex + 1) % modalGallery.length;
  renderModalImage();
});
document.addEventListener('keydown', (event) => {
  if (!modal || modal.hidden) return;
  if (event.key === 'Escape') closeImageModal();
  if (event.key === 'ArrowLeft' && modalGallery.length > 1) modalPrev?.click();
  if (event.key === 'ArrowRight' && modalGallery.length > 1) modalNext?.click();
});

/* V11: transición ligera del banner al salir de la vista.
   Si este JS no se ejecuta, el banner se comporta como un bloque normal. */
const catalogueBanner = document.querySelector('#carta-banner');
const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
let bannerTicking = false;

function updateBannerTransition() {
  bannerTicking = false;
  if (!catalogueBanner || reduceMotion) return;
  const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height || 0;
  const rect = catalogueBanner.getBoundingClientRect();
  const start = headerHeight + 24;
  const distance = Math.min(Math.max(rect.height * 0.62, 180), 340);
  const progress = Math.min(1, Math.max(0, (start - rect.top) / distance));

  catalogueBanner.style.opacity = String(1 - progress * 0.72);
  catalogueBanner.style.transform = `translate3d(0, ${-progress * 24}px, 0) scale(${1 - progress * 0.012})`;
  catalogueBanner.style.filter = `blur(${progress * 1.2}px)`;
}

function requestBannerUpdate() {
  if (bannerTicking) return;
  bannerTicking = true;
  requestAnimationFrame(updateBannerTransition);
}

window.addEventListener('scroll', requestBannerUpdate, { passive: true });
window.addEventListener('resize', requestBannerUpdate, { passive: true });

renderTabs();
activateCategory(activeCategoryId);
requestBannerUpdate();
