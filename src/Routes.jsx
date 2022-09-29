import { BrowserRouter, Routes, Route } from "react-router-dom";
import { history } from "./helpers/history";
import Home from "./pages/Home";

import AboutUs from "./pages/AboutUs";
import Contacts from "./pages/Contacts";
const RoutesComponent = () => {
  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
