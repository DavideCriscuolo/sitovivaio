import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/defaultLayout";
import Home from "./pages/Home";
import Chisiamo from "./pages/ChiSiamo";
import PageNotFound from "./pages/PageNotFound";
import AnimatedRoutes from "./components/AnimatedRoutes";
function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/chisiamo" element={<Chisiamo />} />
              <Route path="/*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </AnimatedRoutes>
      </BrowserRouter>
    </>
  );
}

export default App;
