import Link from "next/link";
import Image from "next/image";
const Sidebar = ({ openClass }) => {
  return (
    <>
      <div
        className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="mobile-logo">
              <Link className="d-flex" href="/">
                <Image
                  alt="logo"
                  src="/assets/imgs/template/logo.svg"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <div className="perfect-scroll">
              <div className="mobile-menu-wrap mobile-header-border">
                <div>
                  <div className="tab-pane">
                    <nav className="mt-15">
                      <ul className="mobile-menu font-heading">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
