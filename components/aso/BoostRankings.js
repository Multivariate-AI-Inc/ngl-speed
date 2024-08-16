import React from "react";
import Image from "next/image";
import ContactForm from "../elements/ContactForm";
const AsoContact = () => {
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="color-brand-1 mb-15">
              Need help to skyrocket your add-on rankings?
            </h2>
            <p className="font-sm color-grey-500">
              Elevate your app&apos;s success with our ASO expertise – we
              specialize in optimizing keywords, enhancing visibility, boost
              app-installs, and maximize conversions for unparalleled app
              growth.
              <br />
              Get in touch with us, and a specialist will be with you in a few
              hours.
            </p>
            <div className="mt-50">
              <div className="card-offer card-we-do card-contact hover-up">
                <div className="card-image">
                  <Image
                    width={64}
                    height={73}
                    src="/assets/imgs/page/contact/img3.png"
                    alt="iori"
                  />
                </div>
                <div className="card-info">
                  <h6 className="color-brand-1 mb-10">
                    Get in touch with Our Experts
                  </h6>
                  <p className="font-md color-grey-500 mb-5">
                    Email us at : contact@nextgrowthlabs.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default AsoContact;
