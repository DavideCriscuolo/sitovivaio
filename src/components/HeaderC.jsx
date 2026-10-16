import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { HashLink } from "react-router-hash-link";
import { whatsapp } from "../data/contacts";

export default function HeaderC() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Sulla home l'header è trasparente sopra la foto finché non si scorre
  const overHero = location.pathname === "/" && !scrolled && !open;

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${overHero ? " site-header--over" : ""}`}>
      <div className="site-header__inner">
        <NavLink className="site-header__brand" to="/">
          <img
            className="site-header__logo site-header__logo--color"
            src="/Logo/LogoSvgcolor.svg"
            alt="Santa Cecilia Garden, home"
            width="200"
            height="50"
          />
          <img
            className="site-header__logo site-header__logo--white"
            src="/Logo/Logo_bianco.png"
            alt=""
            width="200"
            height="50"
          />
        </NavLink>

        <button
          className="site-header__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">
            {open ? "Chiudi il menu" : "Apri il menu"}
          </span>
          <span className="site-header__bars" aria-hidden="true" />
        </button>

        <nav
          id="site-nav"
          className={`site-nav${open ? " is-open" : ""}`}
          aria-label="Principale"
        >
          <NavLink className="site-nav__link" to="/chisiamo">
            Chi siamo
          </NavLink>
          <HashLink className="site-nav__link" smooth to="/#Prodotti">
            Le piante
          </HashLink>
          <HashLink className="site-nav__link" smooth to="/#Contatti">
            Contatti
          </HashLink>
          <a
            className="btn btn--orange site-nav__cta"
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            Scrivici su WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
