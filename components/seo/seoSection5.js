import React from "react";
import Button from "../elements/Button";
import Image from "next/image";
import gif from "../../public/assets/imgs/Google-Search-Animation.gif";
const SEOSection5 = () => {
  return (
    <section className="section mt-50">
      <div className="container">
        <div className="row mt-50">
          <div className="col-xl-6 col-lg-5">
            <div className="box-images-project">
              <div className="title-line mb-10">Why we do it better?</div>
              <h2 className="color-brand-1 mb-50">
                Landing Page First Approach
              </h2>
              <p className="color-grey-500 mb-15">
                We group keywords together to create more effective search
                engine optimization (SEO) strategies. Unlike other agencies that
                only focus on individual keywords, we use tools like phrase
                match lookups to identify groups of related keywords that can
                drive more traffic and conversions to your website. Our expert
                team will work with you to develop a comprehensive keyword plan
                that incorporates these groups of keywords and maximizes your
                search engine visibility and performance.
              </p>
              <div className="box-button text-start mt-40"> 
                <Button text="Find Out How" href={"#"} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            <div className="row pt-20">
              <Image
                src={gif}
                width={690}
                height={420}
                alt="Google Search Animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOSection5;
