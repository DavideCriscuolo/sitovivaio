import { useRef, useState } from "react";
import Info from "./Info";
import Lightbox from "./Lightbox";
import { esemplari, esterno, DaFrutto, DaInterno } from "../data/images";
import { phones, mapsUrl } from "../data/contacts";
import { gsap, useGSAP, MOTION_OK } from "../lib/gsap";

const categorie = [
  {
    key: "ulivi",
    title: "Ulivi secolari ed esemplari",
    text: "La nostra specialità: ulivi dal tronco antico e grandi piante pronte per giardini, ville e spazi pubblici.",
    images: esemplari,
    cover: esemplari[0].src,
  },
  {
    key: "interno",
    title: "Piante da interno",
    text: "Piante grasse, cactus e piante verdi per la casa e l'ufficio.",
    images: DaInterno,
    cover: DaInterno[4].thumb,
  },
  {
    key: "esterno",
    title: "Piante da esterno",
    text: "Fioriture di stagione per giardini, terrazzi e balconi.",
    images: esterno,
    cover: esterno[6].thumb,
  },
  {
    key: "frutto",
    title: "Piante da frutto",
    text: "Agrumi e alberi da frutto per l'orto e il giardino.",
    images: DaFrutto,
    cover: DaFrutto[2].thumb,
  },
];

const ufficio = phones.find((p) => p.name === "Ufficio");

export default function MainHome() {
  const hero = useRef(null);
  const [gallery, setGallery] = useState(null);

  // Unico momento animato: la foto si assesta e il titolo sale
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .from(".hero__media img", { scale: 1.12, duration: 2.2, ease: "power2.out" })
          .from(".hero__line", { yPercent: 110, duration: 1, stagger: 0.1 }, 0.2)
          .from(".hero__after", { autoAlpha: 0, y: 16, duration: 0.7 }, 0.8);
      });
    },
    { scope: hero }
  );

  const active = categorie.find((c) => c.key === gallery?.key);

  return (
    <main>
      <section className="hero" ref={hero}>
        <div className="hero__media">
          <img
            src="/imgprincipal/serra-1600.webp"
            srcSet="/imgprincipal/serra-1600.webp 1600w, /imgprincipal/serra-3000.webp 3000w"
            sizes="100vw"
            alt="Serra del vivaio piena di ciclamini rossi"
            fetchPriority="high"
          />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__mask"><span className="hero__line">Santa Cecilia</span></span>
            <span className="hero__mask"><span className="hero__line">Garden</span></span>
          </h1>
          <div className="hero__after">
            <div className="hero__lede">
              <p>
                Benvenuti in Santa Cecilia Garden, dove ogni pianta nasce
                dall’amore per la natura e dalla cura per ogni dettaglio.
              </p>
              <p>
                Dalle piantine appena nate alla crescita, seguiamo ogni fase con
                passione, garantendo qualità e bellezza in ogni creazione.
              </p>
              <p>
                Un angolo di natura dedicato alla bellezza e alla vitalità delle
                piante.
              </p>
            </div>
            <div className="hero__actions">
              <a className="btn btn--orange" href={`tel:${ufficio.tel}`}>
                Chiama {ufficio.number}
              </a>
              <a className="btn btn--glass" href={mapsUrl} target="_blank" rel="noreferrer">
                Come arrivare
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="Prodotti" className="plants">
        <div className="plants__head">
          <h2>Le piante</h2>
          <p>Tocca una categoria per sfogliare le foto, scattate da noi in vivaio.</p>
        </div>

        <div className="mosaic">
          {categorie.map((c, i) => (
            <button
              key={c.key}
              type="button"
              className={`tile tile--${c.key}`}
              onClick={() => setGallery({ key: c.key, index: 0 })}
            >
              <img
                src={c.cover}
                alt=""
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <span className="tile__body">
                <span className="tile__title">{c.title}</span>
                <span className="tile__text">{c.text}</span>
                <span className="tile__more">Guarda {c.images.length} foto</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <Info />

      {active && (
        <Lightbox
          images={active.images}
          title={active.title}
          index={gallery.index}
          onClose={() => setGallery(null)}
        />
      )}
    </main>
  );
}
