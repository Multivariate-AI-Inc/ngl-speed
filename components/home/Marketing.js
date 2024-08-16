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
                At our core, we are a data-driven and expert-assisted service.
                Each day, we crawl over 1M Android and 3M iOS apps, with top
                30K+ websites all indexed. We process 300M results weekly from
                SERP, and 60M results from both PlayStore and AppStore. Our vast
                resources include 150k+ usage data of both mobile apps and
                websites, ensuring high-quality, accurate results for all of our
                clients.
              </p>
              <p className="color-grey-500">
                We are led by a data-driven approach, bolstered by the expertise
                of our seasoned professionals. Our reach extends to over 30,000
                top websites as part of our SEO index to ensure a comprehensive
                digital overview. We process 300 million SERP results and
                analyze thousands of usage data weekly. We can help you take
                business decisions that will lead to higher performance of your
                platform that will deliver superior results.
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
                  <div className="card-head">20B+</div>
                  <div className="card-description">
                    Rows of Data Analyzed/Day
                  </div>
                </div>
                <div className="cardNumber bg-brand-2">
                  <div className="card-head">3M+</div>
                  <div className="card-description">Apps in Our Index</div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="cardNumber bg-2">
                  <div className="card-head">300M+</div>
                  <div className="card-description">
                    Results Processed/Week in SERP
                  </div>
                </div>
                <div className="cardNumber bg-4">
                  <div className="card-head">30K+</div>
                  <div className="card-description">
                    Top Websites in Our Index
                  </div>
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
