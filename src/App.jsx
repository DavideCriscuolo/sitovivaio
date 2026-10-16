import { BrowserRouter, Route, Routes } from "react-router";
import { MotionConfig } from "framer-motion";
import DefaultLayout from "./layouts/defaultLayout";
import Home from "./pages/Home";
import Chisiamo from "./pages/ChiSiamo";
import PageNotFound from "./pages/PageNotFound";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      {import.meta.env.MODE === "production" && <Analytics />}
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/chisiamo" element={<Chisiamo />} />
              <Route path="/*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </>
  );
}

export default App;
