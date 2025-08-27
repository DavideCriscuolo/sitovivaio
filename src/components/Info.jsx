import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
export default function Info() {
  return (
    <>
      <section id="Contatti" className="py-5">
        <div className="contatti text-center">
          <h2 className="color_txt_org">Vieni a Trovarci</h2>
          <div className="addres">
            <span>STRADA STATALE 18, SANTA CECILIA, EBOLI (SA), 84025</span>
          </div>
          <div>
            <ul className="list-unstyled">
              <li className="my-2">
                {" "}
                <strong>Valter</strong> +39 3383427364
              </li>
              <li className="my-2">
                {" "}
                <strong>Ivan</strong> +39 3335006961
              </li>
              <li className="my-2">
                {" "}
                <strong>Ufficio</strong> +39 3270098196
              </li>
            </ul>
          </div>

          <div className="info_email my-2">
            <span className="color_txt_org">vivaicaputovalter@live.it</span>
          </div>
        </div>
        <div class="social_footer p-0 text-center ">
          <h6 class=" fw-semibold ">Social</h6>
          <div>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <Link
                  to={
                    "https://www.instagram.com/vivai_caputo/?igsh=ZTY2bG9iazB3YmIx#"
                  }
                >
                  <FontAwesomeIcon
                    className=" instagram_bg"
                    icon={faInstagram}
                    size="2xl"
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to={"https://www.facebook.com/CaputoGarden"}>
                  <FontAwesomeIcon
                    className="facebook_bg"
                    icon={faFacebook}
                    size="2xl"
                  />
                </Link>
              </li>
              <li className="list-inline-item">
                {" "}
                <Link
                  to={
                    "https://api.whatsapp.com/send?phone=3270098196&text=Ciao"
                  }
                >
                  <FontAwesomeIcon
                    className="whatsapp_bg"
                    icon={faWhatsapp}
                    size="2xl"
                  />
                </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          <iframe
            className="w-100"
            id="mappa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.9179752652217!2d15.001308077220168!3d40.52130404926612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133be372bf984e7d%3A0xb9c75de86163a136!2sVivai%20Piante%20S.%20Cecilia%20Garden%20di%20Caputo%20Valter!5e0!3m2!1sit!2sit!4v1746000707278!5m2!1sit!2sit"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
