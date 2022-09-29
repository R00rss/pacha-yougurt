import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import bgImage from "../../assets/images/layout/bg1.jpg";

const Layout = ({ children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-no-repeat bg-cover bg-gradient-to-tr from-slate-50 via-slate-100 to-slate-200 min-h-screen flex flex-col justify-between"
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
