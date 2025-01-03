import React, { useState, useEffect } from "react";
import BackToTop from "../elements/BackToTop";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Preloader from "../elements/Preloader";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
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
      <div
        className="text-center bg-brand-1 pt-20 pb-20 color-white"
        style={{ fontSize: "11.8px" }}
      >
        <h4 className="color-white">Important Notice!</h4>
        <p>
          It has come to our attention that certain websites are falsely
          claiming to have ties or affiliations with us, especially regarding
          remote work opportunities. We would like to clarify that
          <strong>
            <em>*we have no association*</em>{" "}
          </strong>
          with any such sites or entities.
        </p>
        <p>
          Please verify any information directly via email -
          <strong>&nbsp;contact@nextgrowthlabs.com&nbsp;</strong>
          to avoid potential scams or misinformation
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
