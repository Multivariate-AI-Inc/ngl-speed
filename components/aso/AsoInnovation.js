import React from "react";
import Link from "next/link";
import Image from "next/image";
const AsoInnovation = () => {
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-8">
            <h2 className="color-brand-1 mb-20">
              Let&apos;s Talk Data & Processes
            </h2>
            <p className="font-lg color-gray-500">
              Our ASO Innovation Stack - that captures everything from the
              <br className="d-none d-lg-block" />
              app stores.
            </p>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-upd bg-4">
              <div className="card-image">
                <Image
                  src="/assets/imgs/template/listing.svg"
                  height={64}
                  width={64}
                  alt="listing"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">Listing Intelligence</h4>
                <p className="font-md color-grey-500 mb-5">
                  Identify the keywords that your competitors are using. Keep a
                  close eye on the changes they make.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up bg-5">
              <div className="card-image">
                <Image
                  src="/assets/imgs/template/anamolies.svg"
                  height={64}
                  width={64}
                  alt="iori"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">Anomalies</h4>
                <p className="font-md color-grey-500 mb-5">
                  About 5% of the total 1-star reviews tend to be sementic
                  mismatches. And there&apos;s a way to fix it.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up bg-5">
              <div className="card-image">
                <Image
                  src="/assets/imgs/template/rating-mhr.svg"
                  height={64}
                  width={64}
                  alt="Ratings"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">Ratings & MHR</h4>
                <p className="font-md color-grey-500 mb-5">
                  Get historical ranking context - based on the rating and MHR
                  (Most Helpful Review Section) Score - developed by us.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up bg-7">
              <div className="card-image">
                <Image
                  src="/assets/imgs/template/engagement.svg"
                  height={64}
                  width={64}
                  alt="iori"
                />
              </div>
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">
                  Engagement and Open Count
                </h4>
                <p className="font-md color-grey-500 mb-5">
                  Our app intelligence, that tells you the engagement time of
                  your peers, and help you improve on it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsoInnovation;
