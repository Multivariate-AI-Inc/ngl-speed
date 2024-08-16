import React from "react";
import Button from "../elements/Button";
import gif from "../../public/assets/imgs/Google-Search-Animation.gif";
import Image from "next/image";
const BetterResults = () => {
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row mt-50">
          <div className="col-xl-6 col-lg-5">
            <div className="box-images-project">
              <div className="title-line mb-10">Why we do it better?</div>
              <h2 className="color-brand-1 mb-50">Keyword Planning</h2>
              <p className="color-grey-500 mb-15">
                Next Growth Labs specializes in developing innovative strategies
                for capturing the vast array of keywords used in search engine
                optimization (SEO). We go beyond what others do and find new
                ways to capture and target the right keywords for your business.
                This helps improve your website&apos;s visibility in search
                engine results pages (SERPs) and drive more targeted traffic to
                your site.
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="row pt-20 row-image">
              <Image
                src={gif}
                width={415}
                height="100%"
                alt="Google Search Animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetterResults;
