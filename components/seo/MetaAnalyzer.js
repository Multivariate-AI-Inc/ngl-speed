import React from "react";
import Image from "next/image";
import testSEO from "../../public/assets/imgs/testing.webp";
const MetaAnalyzer = () => {
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row mt-50">
          <div className="col-xl-6 col-lg-7">
            <div className="row pt-20 row-image">
              <Image
                src={testSEO}
                width={415}
                height="100%"
                alt="Run A/B test"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="box-images-project pt-40">
              <h2 className="color-brand-1 mb-50">
                Run A/B tests on meta description
              </h2>
              <p className="color-grey-500 mb-15">
                We use a bag-of-words approach to run experiments on meta
                descriptions for search engine optimization (SEO). By analyzing
                the words and phrases used in meta descriptions, we can identify
                opportunities to improve their effectiveness and drive more
                traffic to your website. Our expert team will work with you to
                develop and test different meta description strategies, using
                data and analytics to determine the best approach for your
                business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetaAnalyzer;
