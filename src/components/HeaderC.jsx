import { NavLink } from "react-router";
import { HashLink } from "react-router-hash-link";

export default function HeaderC() {
  return (
    <>
      <header className="py-3">
        <nav class="navbar navbar-expand-sm navbar-light">
          <div class="container">
            <NavLink className="navbar-brand" to={"/"}>
              <img
                className="w-100"
                src="/Logo/LogoSantaCeciliaGarden.png"
                alt="Logo"
              />
            </NavLink>
            <button
              class="navbar-toggler d-lg-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavId"
              aria-controls="collapsibleNavId"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse  justify-content-center"
              id="collapsibleNavId"
            >
              <ul class="navbar-nav mt-2 mt-lg-0">
                <li class="nav-item">
                  <NavLink className="nav-link fw-semibold" to={"/chisiamo"}>
                    Chi siamo
                  </NavLink>
                </li>
                <li class="nav-item">
                  <HashLink
                    className="nav-link fw-semibold"
                    smooth
                    to={"/#Prodotti"}
                    scroll={(el) => {
                      const yOffset = -150; // altezza navbar
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }}
                  >
                    I Nostri Prodotti
                  </HashLink>
                </li>
                <li class="nav-item">
                  <HashLink
                    className="nav-link fw-semibold"
                    smooth
                    to={"/#Contatti"}
                    scroll={(el) => {
                      const yOffset = -150; // altezza navbar
                      const y =
                        el.getBoundingClientRect().top +
                        window.pageYOffset +
                        yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }}
                  >
                    Contatti
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
