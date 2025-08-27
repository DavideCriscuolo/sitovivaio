import Info from "./Info";
import Slider from "./Slider";
import { esemplari } from "../data/images";
import { esterno } from "../data/images";
import { DaFrutto } from "../data/images";
import { DaInterno } from "../data/images";
export default function MainHome() {
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="home_cover"></div>
          <section className="name_site_desc text-center my-5">
            <div className="name_site">
              <h2>SANTA CECILIA GARDEN</h2>
            </div>
            <div className="introduction">
              <p>
                Benvenuti in Santa Cecilia Garden, dove ogni pianta nasce
                dall’amore per la natura e dalla cura per ogni dettaglio.{" "}
              </p>
              <p>
                Dalle piantine appena nate alla crescita, seguiamo ogni fase con
                passione, garantendo qualità e bellezza in ogni creazione.{" "}
              </p>
              <p>
                {" "}
                Un angolo di natura dedicato alla bellezza e alla vitalità delle
                piante.
              </p>
            </div>
          </section>
          <div className="imgparalax"></div>

          <section id="Prodotti">
            <div className="container-fluid">
              <div className=" text-center py-3">
                <h2 className="color_txt_org">I Nostri Prodotti</h2>
                <span className="fs-6">Una vasta selezione di piante</span>
              </div>
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-4 g-2">
                <div className="col ">
                  <div class="card border-0">
                    <Slider images={esemplari}></Slider>
                    <div class="card-body">
                      <h4 class="card-title text-center">ESEMPLARI</h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card border-0">
                    <Slider images={DaInterno}></Slider>
                    <div class="card-body">
                      <h4 class="card-title text-center">PIANTE DA INTERNO</h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card border-0">
                    <Slider images={esterno}></Slider>
                    <div className="card-body">
                      <h4 className="card-title text-center">
                        PIANTE DA ESTERNO
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div class="card border-0">
                    <Slider images={DaFrutto}></Slider>
                    <div className="card-body">
                      <h4 className="card-title text-center">
                        PIANTE DA FRUTTO
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Info></Info>
        </div>
      </main>
    </>
  );
}
