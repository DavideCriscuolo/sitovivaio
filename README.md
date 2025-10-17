# Santa Cecilia Garden - Sito Vetrina

Sito vetrina per il vivaio "Santa Cecilia Garden" che mostra informazioni aziendali, contatti, prodotti e galleria immagini tramite slider.

## Sommario

- Descrizione breve del progetto
- Tecnologie e dipendenze principali
- Struttura del progetto e file rilevanti
- Come eseguire il progetto in locale

## Descrizione

Questo progetto è una piccola applicazione React (Vite) che presenta:

- Pagina principale con copertina, descrizione e sezioni prodotti ([`Home`](src/pages/Home.jsx)).
- Pagina "Chi siamo" con presentazione e slider di immagini ([`ChiSiamo`](src/pages/ChiSiamo.jsx), [`MainChiSiamo`](src/components/MainChiSiamo.jsx)).
- Sezione contatti con mappa e link social ([`Info`](src/components/Info.jsx)).
- Componente layout condiviso con header e footer ([`defaultLayout`](src/layouts/defaultLayout.jsx), [`HeaderC`](src/components/HeaderC.jsx), [`FooterC`](src/components/FooterC.jsx)).
- Slider immagini basato su Swiper ([`Slider`](src/components/Slider.jsx)) che usa i dati in [`images.js`](src/data/images.js).
- Animazioni di transizione tra le pagine tramite [`AnimatedRoutes`](src/components/AnimatedRoutes.jsx).
- Stili con Sass nei file: [src/index.scss](src/index.scss), [src/scss/Slider.scss](src/scss/Slider.scss), [src/scss/PageNotFound.scss](src/scss/PageNotFound.scss).

## Tecnologie e dipendenze principali

- Ambiente di sviluppo e bundler: Vite ([`vite.config.js`](vite.config.js))
- Libreria UI: React ([`App`](src/App.jsx), [`main`](src/main.jsx))
- Routing: react-router / react-router-dom (v7) e react-router-hash-link
- Slider: Swiper ([`Slider`](src/components/Slider.jsx))
- Styling: Sass (.scss)
- UI base: Bootstrap
- Icone: Font Awesome React
- Animazioni: Framer Motion ([`AnimatedRoutes`](src/components/AnimatedRoutes.jsx))

Dipendenze sono definite in [package.json](package.json).
