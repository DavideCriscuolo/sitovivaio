import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import HeaderC from "../components/HeaderC";
import FooterC from "../components/FooterC";

// Al cambio pagina torna in cima; se c'è un'ancora (es. /#Contatti) ci va direttamente
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function DefaultLayout() {
  return (
    <>
      <ScrollManager />
      <HeaderC />
      <Outlet />
      <FooterC />
    </>
  );
}
