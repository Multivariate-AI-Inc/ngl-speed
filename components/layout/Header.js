import Link from "next/link";
import Button from "../elements/Button";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = ({ handleOpen, handleRemove, openClass, addClass }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={`${
          scroll ? "header sticky-bar stick" : "header sticky-bar"
        } ${addClass}`}
      >
        <div className="container">
          <div className="main-header">
            <div className="header-left ">
              <div className="header-logo-mobile">
                <Link className="d-flex" href="/">
                  <Image
                    alt="Ecom"
                    src="/assets/imgs/template/logo.svg"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              <div className="header-nav d-flex align-items-center">
                <div className="header-logo d-flex header-logo-lg-xxl">
                  <Link className="d-flex" href="/">
                    <Image
                      alt="Ecom"
                      src="/assets/imgs/template/logo.svg"
                      width={40}
                      height={40}
                      className="mlNav-110"
                    />
                  </Link>
                </div>
                <nav className="nav-main-menu d-none d-xl-block">
                  <ul className="main-menu">
                    <li>
                      <Link className="active" href="/">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link href="/search-engine-optimization">SEO</Link>
                    </li>
                    <li>
                      <Link href="/free-app-store-optimization-tool">
                        Tools
                      </Link>
                    </li>
                    <li>
                      <Link href="/get-free-aso-analysis">
                        Get Free ASO Analysis
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/career">Career</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/terms-of-service">Terms</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy</Link>
                    </li>
                  </ul>
                </nav>
                <div
                  className={`burger-icon burger-icon-white ${
                    openClass && "burger-close"
                  }`}
                  onClick={() => {
                    handleOpen();
                    handleRemove();
                  }}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div>
              </div>
            </div>
            {/* <div className="header-right">
              <div className="d-none d-sm-inline-block">
                <Button text={"Get Started"} href={"/register"} />
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
