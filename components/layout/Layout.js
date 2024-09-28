import React, { useState, useEffect } from "react";
import BackToTop from "../elements/BackToTop";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Preloader from "../elements/Preloader";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const [openClass, setOpenClass] = useState("");

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = (url) => {
      url !== router.asPath && setLoading(true);
    };
    const end = (url) => {
      url === router.asPath && setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  });
  const handleOpen = () => {
    document.body.classList.add("mobile-menu-active");
    setOpenClass("sidebar-visible");
  };

  const handleRemove = () => {
    if (openClass === "sidebar-visible") {
      setOpenClass("");
      document.body.classList.remove("mobile-menu-active");
    }
  };
  return (
    <>
      <div className="text-center bg-brand-1 pt-20 pb-20 color-white">
        <h6 className="color-white">Important Notice</h6>
        <p>
          It has come to our attention that certain websites are falsely
          claiming to have ties or affiliations with us, especially regarding
          remote work opportunities.
        </p>
        <p>
          We would like to clarify that **we have no association** with any such
          sites or entities. Please verify any information directly with us
          through our official website to avoid potential scams or
          misinformation.
        </p>
      </div>
      <Header
        handleOpen={handleOpen}
        handleRemove={handleRemove}
        openClass={openClass}
        addClass="header-home7"
      />
      <Sidebar openClass={openClass} />
      {loading ? <Preloader /> : <main className="main">{children}</main>}
      <Footer />
      <BackToTop />
      <ToastContainer style={{ zIndex: "99999999999999999" }} />
    </>
  );
};

export default Layout;
