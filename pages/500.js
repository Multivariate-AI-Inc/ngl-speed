import Link from "next/link";
import PageHead from "../components/elements/PageHead";
import Image from "next/image";
import Trustby from "../components/home/Trustby";
import Layout from "../components/layout/Layout";

const CustomError500 = () => {
  return (
    <>
      <PageHead title={"Error 500 - Page not found"} />
      <Layout>
        <section className="section box-404">
          <div className="container">
            <div className="row">
              <div className="col-lg-2" />
              <div className="col-lg-10">
                <div className="row align-items-center">
                  <div className="col-md-5 col-sm-12 mb-30 text-center text-md-start">
                    <Image
                      layout="responsive"
                      width={100}
                      height={100}
                      src="/assets/imgs/page/404/404.png"
                      alt="iori"
                    />
                  </div>
                  <div className="col-md-7 col-sm-12 text-center text-md-start">
                    <h1 className="color-brand-1 font-84 mb-10">500</h1>
                    <h3 className="color-brand-1 mb-25">
                      Internal Server Error
                    </h3>
                    <p className="font-md color-grey-500">
                      Please retry or Visit after sometime.
                    </p>
                    <div className="mt-50">
                      <Link
                        className="btn btn-default color-grey-900 pl-0"
                        href="/"
                      >
                        <svg
                          className="w-6 h-6 icon-16 mr-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                        Back to Homepage
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-bottom bd-grey-80 mt-110 mb-0" />
          </div>
        </section>
        <section className="section mt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card-small card-small-2">
                  <div className="card-image">
                    <div className="box-image">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/assets/imgs/page/contact/headphone.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">Help &amp; support</h6>
                    <p className="font-xs color-grey-500">
                      Email{" "}
                      <Link
                        className="color-success"
                        href="mailto:contact@nextgrowthlabs.com"
                      >
                        contact@nextgrowthlabs.com
                      </Link>
                      <br />
                      For help with a current product or service or refer to
                      FAQs and developer tools
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card-small card-small-2">
                  <div className="card-image">
                    <div className="box-image">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/assets/imgs/page/contact/phone.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">Call Us</h6>
                    <p className="font-xs color-grey-500">
                      Call us to speak to a member of our team.
                      <br />
                      (+01) 234 567 89
                      <br />
                      (+01) 456 789 21
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card-small card-small-2">
                  <div className="card-image">
                    <div className="box-image">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/assets/imgs/page/contact/chart.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">
                      Bussiness Department
                    </h6>
                    <p className="font-xs color-grey-500">
                      Contact the sales department about cooperation projects
                      <br />
                      (+01) 789 456 23
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="card-small card-small-2">
                  <div className="card-image">
                    <div className="box-image">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/assets/imgs/page/contact/earth.png"
                        alt="iori"
                      />
                    </div>
                  </div>
                  <div className="card-info">
                    <h6 className="color-brand-1 mb-10">Global branch</h6>
                    <p className="font-xs color-grey-500">
                      Contact us to open our branches globally.
                      <br />
                      (+01) 234 567 89
                      <br />
                      (+01) 456 789 23
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="d-inline-block mb-30" />
        <Trustby />

        <section className="section mt-50">
          <div className="container">
            <div className="box-newsletter box-newsletter-2">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-7 m-auto text-center">
                  <span className="font-lg color-brand-1">Newsletter</span>
                  <h2 className="color-brand-1 mb-15 mt-5">
                    Subcribe our newsletter
                  </h2>
                  <p className="font-md color-grey-500">
                    Do not miss the information from us about the trending in
                    the market. By clicking the button, you are agreeing with
                    our Term &amp; Conditions
                  </p>
                  <div className="form-newsletter mt-30">
                    <form action="#">
                      <input type="text" placeholder="Enter you mail .." />
                      <button
                        className="btn btn-submit-newsletter"
                        type="submit"
                      >
                        <svg
                          className="w-6 h-6 icon-16"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default CustomError500;
