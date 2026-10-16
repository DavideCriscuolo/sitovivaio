import { piva } from "../data/contacts";

export default function FooterC() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <img
          src="/Logo/Logo_bianco.png"
          alt="Vivai Piante Santa Cecilia Garden di Caputo Valter"
          width="200"
          loading="lazy"
        />
        <p>
          Vivai Piante Santa Cecilia Garden di Caputo Valter
          <br />
          P. IVA {piva}
        </p>
      </div>
    </footer>
  );
}
