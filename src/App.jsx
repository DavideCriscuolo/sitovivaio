import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./layouts/defaultLayout";
import Home from "./pages/Home";
import Chisiamo from "./pages/ChiSiamo";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/chisiamo" element={<Chisiamo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
