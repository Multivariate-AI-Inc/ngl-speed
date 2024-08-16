import React from "react";
import Image from "next/image";
import ContactForm from "../elements/ContactForm";
const Contact = () => {
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h2 className="color-brand-1 mb-15">Drop a Message</h2>
            <p className="font-sm color-grey-500">
              Interested in driving growth? Have a general question? We’re just
              an email away.
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
                  <h5 className="color-brand-1 mb-10">
                    Get in touch with Our Experts
                  </h5>
                  <p className="font-md color-grey-500 mb-5">
                    Email us at : contact@nextgrowthlabs.com
                  </p>
                </div>
              </div>
              <div className="card-offer card-we-do card-contact hover-up">
                <div className="card-image">
                  <Image
                    width={64}
                    height={73}
                    src="/assets/imgs/page/contact/img2.png"
                    alt="iori"
                  />
                </div>
                <div className="card-info">
                  <h5 className="color-brand-1 mb-10">Reach Us </h5>
                  <p className="font-md color-grey-500 mb-5">
                      {" "}
                      #27, Santosh Tower, Second Floor, JP Nagar, 4th Phase,{" "}
                      <br />
                      4th Main 100ft Ring Road, Bangalore - 560078
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

export default Contact;
