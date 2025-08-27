import { Outlet } from "react-router-dom";
import HeaderC from "../components/HeaderC";
import FooterC from "../components/FooterC";
export default function DefaultLayout() {
  return (
    <>
      <HeaderC></HeaderC>
      <Outlet />
      <FooterC></FooterC>
    </>
  );
}
