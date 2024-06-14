import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="footer mt-80">
        <div className="footer-1">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 width-20">
                <div className="mb-10">
                  <Image
                    width={40}
                    height={40}
                    src="/assets/imgs/template/logo.svg"
                    alt="iori"
                  />
                </div>
                <p className="font-md mb-20 color-grey-400">
                  Bangalore: 1216, 14th Main,
                  <br className="d-none d-lg-block" />
                  HSR Layout
                </p>
                <div className="font-md mb-20 color-grey-400">
                  <strong className="font-md-bold">Email:</strong>{" "}
                  contact@nextgrowthlabs.com
                </div>
                <h6 className="color-brand-1">Follow Us</h6>
                <div className="mt-15">
                  <Link
                    className="icon-socials icon-facebook"
                    href="https://www.facebook.com/thenextlabs/"
                  ></Link>
                  <Link
                    className="icon-socials icon-linkedin"
                    href="https://www.linkedin.com/company/13337675/"
                  ></Link>
                </div>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1">Consulting</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="/aso">App Store Optimization</Link>
                  </li>
                  <li>
                    <Link href="/">Mobile App Promotion</Link>
                  </li>
                  <li>
                    <Link href="https://nextgrowthlabs.com/how-we-lower-google-uac-ad-costs/">
                      Ad Cost Reduction
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/search-engine-optimization/">
                      Search Engine Optimization
                    </Link>
                  </li>
                  <li>
                    {/* add link to nextlabs site */}
                    <Link href="#">Free App Analysis</Link>
                  </li>
                  <li>
                    <Link href="/">Improve Pagespeed</Link>
                  </li>
                  <li>
                    <Link href="#contact">Mobile & Web Analytics</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1">Free Tools</h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/app-rank-tracker/">
                      App Rank Checker
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/introducing-the-bing-search-ranking-tool/">
                      Bing Rank Checker
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/google-serp-rank-tracker/">
                      Keyword Auto Suggest
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/keyword-autosuggest-a-multi-platform-keyword-tool/">
                      Google SERP Checker
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/seo-and-aso-keyword-content-writing-assistant/">
                      SEO Content Assistant
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/ios-keyword-ranks/">
                      iOS Keyword Search
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/seo-aso-chrome-add-on-free-tool-with-use-cases/">
                      SEO and ASO Chrome Add On
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/page-speed-assessment/">
                      Bulk Page Speed Assessment
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/bulk-ios-keywords-tracker/">
                      iOS Keyword Tracker
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 width-16 mb-30">
                <h5 className="mb-10 color-brand-1"></h5>
                <ul className="menu-footer">
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/rating-projection-calculator/">
                      Android Rating Projection Tool
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/html-editor/">
                      Html Editor
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/bulk-website-rank-checker/">
                      Website Rank Checker
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/emi-calculator/">
                      Emi Calculator
                    </Link>
                  </li>
                  <li>
                    <Link href="https://tools.nextgrowthlabs.com/word-to-html/">
                      Word To Html
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="https://tools.nextgrowthlabs.com/font-changer/">
                      Font Changer
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="https://tools.nextgrowthlabs.com/multi-tool/">
                      Multi Tool
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link href="https://tools.nextgrowthlabs.com/keyword-suggestion/">
                      Keyword Suggestion
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 width-23">
                <div>
                  <p className="font-sm color-grey-400">
                    Our mission is to leverage technology and data science to
                    maximize your app&apos;s organic users.
                  </p>
                  <div className="mt-20">
                    <Link
                      className="mr-10"
                      href="https://www.google.com/partners/agency?id=4821617337"
                    >
                      <Image
                        src="/assets/imgs/template/download_1.svg"
                        alt="Description of the image"
                        width={220}
                        height={82}
                      />
                    </Link>
                  </div>
                  <ul className="menu-footer">
                    <li>
                      <Link
                        className="font-sm color-grey-400 "
                        href={"/contact"}
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://tools.nextgrowthlabs.com/free-app-store-optimization-tool/"
                        className="font-sm color-grey-400 "
                      >
                        Request Access to Free Tools Suite
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://tools.nextgrowthlabs.com/google-play-data-studio-connector-by-nextgrowth-labs/"
                        className="font-sm color-grey-400"
                      >
                        Data Studio Connector For PlayStore
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-2">
          <div className="container">
            <div className="footer-bottom">
              <div className="row">
                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                  <ul className="menu-bottom">
                    <li>
                      <Link className="font-sm color-grey-300" href="/privacy">
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="term-conditions.html"
                      >
                        Cookies
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="font-sm color-grey-300"
                        href="/term-conditions"
                      >
                        Terms of service
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-12 text-center text-lg-end">
                  <span className="color-grey-300 font-md">
                    ©NextGrowthLabs 2024. All right reserved.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
