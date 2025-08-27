import Info from "./Info";
import { Link } from "react-router";
import Slider from "./Slider";
import { sliderone } from "../data/images";
export default function MainChisiamo() {
  return (
    <main>
      <section className="p-2">
        <div className="text-center my-5 color_txt_org ">
          <h2>CHI SIAMO</h2>
        </div>

        <div className="container">
          <div className="row row-cols-1 row-cols-xl-2  ">
            <div className="col">
              <div className="presentazione">
                <p>
                  Siamo un’azienda a conduzione familiare, nata dalla passione
                  mia e dei miei fratelli per la natura e la bellezza degli
                  alberi.
                </p>
                <p>
                  Ci troviamo a Santa Cecilia di Eboli, lungo la S.S. 18, e da
                  anni ci dedichiamo alla vendita di piante e fiori, ma
                  soprattutto siamo specializzati in ulivi secolari
                </p>
                <p>
                  Ogni albero che offriamo racconta una storia, fatta di radici
                  profonde e crescita lenta, ed è la nostra missione portare
                  questa bellezza senza tempo nei vostri spazi.
                </p>
                <p>
                  Grazie alla nostra esperienza e alla cura che mettiamo nel
                  nostro lavoro, garantiamo piante di altissima qualità e un
                  servizio professionale per ogni esigenza.
                </p>
                <p>
                  Se sei alla ricerca di un ulivo secolare o vuoi semplicemente
                  scoprire il nostro vivaio, passa a trovarci o contattaci.
                </p>
                <p>Saremo felici di accoglierti e consigliarti al meglio!</p>
                <div className="clickcontact">
                  <Link
                    className="cta btn fw-bold "
                    to="https://api.whatsapp.com/send?phone=3270098196&text=Ciao"
                  >
                    CONTATTACI
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <Slider images={sliderone}></Slider>
            </div>
          </div>
        </div>
      </section>
      <Info></Info>
    </main>
  );
}
