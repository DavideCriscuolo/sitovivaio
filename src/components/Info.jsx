import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  phones,
  whatsapp,
  email,
  address,
  mapsUrl,
  mapsEmbed,
  instagram,
  facebook,
} from "../data/contacts";

export default function Info() {
  return (
    <section id="Contatti" className="visit">
      <div className="visit__text">
        <h2 className="visit__title">Vieni a trovarci</h2>
        <address className="visit__address">
          {address.street}
          <br />
          {address.city}
        </address>
        <div className="visit__actions">
          <a className="btn btn--orange" href={mapsUrl} target="_blank" rel="noreferrer">
            Apri in Google Maps
          </a>
          <a className="btn btn--line" href={whatsapp} target="_blank" rel="noreferrer">
            Scrivici su WhatsApp
          </a>
        </div>

        <dl className="visit__phones">
          {phones.map((p) => (
            <div key={p.tel}>
              <dt>{p.name}</dt>
              <dd>
                <a href={`tel:${p.tel}`}>{p.number}</a>
              </dd>
            </div>
          ))}
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </div>
        </dl>

        <ul className="visit__social" aria-label="Social">
          <li>
            <a href={instagram} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </li>
          <li>
            <a href={facebook} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>
          </li>
          <li>
            <a href={whatsapp} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <div className="visit__map">
        <iframe
          title="Mappa del vivaio Santa Cecilia Garden"
          src={mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
