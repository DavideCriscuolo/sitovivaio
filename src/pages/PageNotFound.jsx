import { Link } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function PageNotFound() {
  return (
    <main className="notfound">
      <h1>Questa pagina non esiste</h1>
      <p>
        L'indirizzo potrebbe essere sbagliato o la pagina è stata spostata.
        Torna alla home per vedere le nostre piante, oppure contattaci.
      </p>
      <div className="hero__actions">
        <Link className="btn btn--dark" to="/">
          Torna alla home
        </Link>
        <HashLink className="btn btn--line" to="/#Contatti">
          Contattaci
        </HashLink>
      </div>
    </main>
  );
}
