# Café Entre Páginas · Web de preapertura

Versión v4 preparada para GitHub Pages.

## Estructura

- `index.html`: estructura, textos, navegación y catálogo.
- `assets/css/styles.css`: diseño principal.
- `assets/css/overrides.css`: identidad visual del header.
- `assets/js/main.js`: menú móvil y pequeño efecto de entrada de las tarjetas.
- `assets/images/`: imágenes públicas de la web.

## Cambios de esta versión

- La cabecera de la sección Carta utiliza `assets/images/carta-banner.jpeg` como banner visual sticky. Las categorías se desplazan por debajo del banner.
- Las hojas del banner permanecen visibles y el banner tiene sombra para reforzar el efecto de superposición.
- Las categorías ocupan todo el ancho disponible del main y ya no se agrupan de dos en dos.
- El título y la descripción breve aparecen antes de cada imagen.
- Las imágenes muestran su proporción completa, sin recortes por `object-fit: cover`.
- Cada imagen abre la carta completa en una nueva pestaña al hacer clic.
- Se elimina la categoría duplicada `packs-cumpleaños`.
- `Pack Pausa Saludable` y `Pack Recreo` aparecen consecutivamente.
- Se añade `Zumos y otras bebidas saludables` con la nueva imagen proporcionada.
- `Nuestra historia` usa `cafe_libro1.jpeg` como fondo, con el texto sobre una capa clara para conservar la legibilidad.
- La frase `Dos placeres cotidianos. Un lugar para encontrarlos.` queda centrada bajo el título.
- El logo del header aumenta de tamaño y el header mantiene fondo verde caqui con tipografía beige.

## Publicación

En GitHub Pages se debe publicar desde la rama `main` y la carpeta raíz `/ (root)`, donde se encuentra este `index.html`.