import { useState } from "react";
import Info from "./Info";
import Lightbox from "./Lightbox";
import { sliderone } from "../data/images";
import { whatsapp } from "../data/contacts";

export default function MainChisiamo() {
  const [index, setIndex] = useState(null);

  return (
    <main>
      <section className="about">
        <div className="about__media">
          <img
            src="/imgprincipal/eriche-1200.webp"
            alt="Eriche fiorite sotto la serra del vivaio"
          />
        </div>
        <div className="about__text">
          <h1 className="about__title">Un vivaio di famiglia, specializzato in ulivi secolari</h1>
          <p className="about__lede">
            Siamo un'azienda a conduzione familiare, nata dalla passione mia e
            dei miei fratelli per la natura e la bellezza degli alberi.
          </p>
          <p>
            Ci troviamo a Santa Cecilia di Eboli, lungo la S.S. 18, e da anni ci
            dedichiamo alla vendita di piante e fiori, ma soprattutto siamo
            specializzati in ulivi secolari.
          </p>
          <p>
            Ogni albero che offriamo racconta una storia, fatta di radici
            profonde e crescita lenta, ed è la nostra missione portare questa
            bellezza senza tempo nei vostri spazi.
          </p>
          <p>
            Grazie alla nostra esperienza e alla cura che mettiamo nel nostro
            lavoro, garantiamo piante di altissima qualità e un servizio
            professionale per ogni esigenza.
          </p>
          <p>
            Se cerchi un ulivo secolare o vuoi semplicemente scoprire il
            vivaio, passa a trovarci o scrivici. Saremo felici di accoglierti e
            consigliarti al meglio.
          </p>
          <a className="btn btn--orange" href={whatsapp} target="_blank" rel="noreferrer">
            Scrivici su WhatsApp
          </a>
        </div>
      </section>

      <section className="gallery" aria-labelledby="gallery-title">
        <div className="plants__head">
          <h2 id="gallery-title">Il vivaio in foto</h2>
          <p>Tocca una foto per vederla a schermo intero.</p>
        </div>
        <ul className="gallery__grid">
          {sliderone.map((img, i) => (
            <li key={img.id}>
              <button type="button" onClick={() => setIndex(i)}>
                <img
                  src={img.thumb}
                  alt={`Il vivaio, foto ${i + 1} di ${sliderone.length}`}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <Info />

      <Lightbox
        images={sliderone}
        title="Il vivaio in foto"
        index={index}
        onClose={() => setIndex(null)}
      />
    </main>
  );
}
