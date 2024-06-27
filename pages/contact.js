import Image from "next/image";
import Link from "next/link";
import Contact from "../components/home/Contact";

import Layout from "../components/layout/Layout";
import PageHead from "../components/elements/PageHead";
const ContactUs = () => {
  return (
    <>
      <PageHead title={"Contact Us for better coordination and more info."} />
      <Layout>
        <section className="section banner-contact">
          <div className="container">
            <div className="banner-1">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <span className="title-line line-48">Get in Touch</span>
                  <h1 className="color-brand-1 mb-20 mt-10">
                    We’d love to hear
                    <br className="d-none d-lg-block" />
                    from you.
                  </h1>
                  <div className="row">
                    <div className="col-lg-9">
                      <p className="font-md color-grey-500">
                        Whether you are starting off or have billions of users,
                        our team is willing and able to help you.
                        <br /> Please reach out to us to request a demo or if
                        you have any more questions.
                        <br />
                        If you’re interested in working at NextGrowth Labs,
                        check out our
                        <Link className="ml-3" href="/career">
                          {" "}
                          careers page.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                  <div className="box-banner-contact">
                    <Image
                      layout="responsive"
                      width={100}
                      height={100}
                      src="/assets/imgs/page/contact/banner.png"
                      alt="contact banner"
                      priority={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </Layout>
    </>
  );
};

export default ContactUs;
