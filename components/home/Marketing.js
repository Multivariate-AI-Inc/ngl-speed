import Button from "../elements/Button";
import Link from "next/link";
const Marketing = () => {
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="box-images-project">
              <div className="title-line mb-10">Why choose us?</div>
              <h2 className="color-brand-1 mb-25">
                We are Data-driven &amp; Expert Assisted
              </h2>
              <p className="color-grey-500 mb-15">
                Necessary to deliver white glove, fully managed campaigns that
                surpass industry benchmarks.Take your career to next level.
                Apply to our team and see what we can do together. You’re good
                enough.
              </p>
              <p className="color-grey-500">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature Id
                pro doctus mediocrem erroribus, diam nostro sed cu. Ea pri
                graeco tritani partiendo. Omittantur No tale choro fastidii his,
                pri cu epicuri perpetua. Enim dictas omittantur et duo, vocent
                lucilius quaestio mea ex. Ex illum officiis id.
              </p>
              <div className="box-button text-start mt-40">
                <Button text={"Contact Us"} href={"/contact"} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="row pt-40">
              <div className="col-lg-6 col-md-6">
                <div className="cardNumber hasBorder mt-50">
                  <div className="card-head">465k</div>
                  <div className="card-description">Social followers</div>
                </div>
                <div className="cardNumber bg-brand-2">
                  <div className="card-head">756+</div>
                  <div className="card-description">Project Done</div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="cardNumber bg-2">
                  <div className="card-head">5000+</div>
                  <div className="card-description">Happy Clients</div>
                </div>
                <div className="cardNumber bg-4">
                  <div className="card-head">100%</div>
                  <div className="card-description">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
