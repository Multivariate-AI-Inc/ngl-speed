import React from "react";
import Button from "../elements/Button";
import Image from "next/image";
const WebVisibility = ({ category }) => {
  const data = {
    "Website's": [
      {
        name: "Improve Website's Visibility",
        desc: "Our Search Engine Optimization solutions are designed for growing a website's organic visibility.",
        data: [
          {
            link: "On page Optimization",
            desc: "Maximize visitors by ensuring your web pages are tailored to be user-friendly and search engine optimized.",
            img: "/assets/imgs/page/homepage4/offer7.png",
          },
          {
            link: "Core Web Vitals",
            desc: "Enance conversion rates by optimizing your website for better search engine visibility",
            img: "/assets/imgs/page/homepage4/offer2.png",
          },
          {
            link: "Reverse Engineer Competitions",
            desc: "Reverse engineer SEO competition for strategic refinement and sustained digital success.",
            img: "/assets/imgs/page/homepage4/offer3.png",
          },
          {
            link: "Backlinks",
            desc: "Improve your ranking and credibility through our ethical link-building approach. No shortcuts, just superior-quality links.",
            img: "/assets/imgs/page/homepage4/offer8.png",
          },
        ],
      },
    ],
    "App's": [
      {
        name: "Improve App's Organic Visibility",
        desc: "Our ASO solutions are designed for growing an app's organic visibility.",
        data: [
          {
            link: "Improve Installs",
            desc: "Rank on your target keywords, get into similar and related app section and improve chart rankings.",
            img: "/assets/imgs/template/install.svg",
          },
          {
            link: "Improve Ratings ",
            desc: "How to get more percentage of people click on your result? 1000s of users can give you precise feedback on the same.",
            img: "/assets/imgs/template/rating.svg",
          },
          {
            link: "Improve Conversions",
            desc: "Get a higher store listing conversion. Focus on MHR (Most helpful review section), on page assets, description. ",
            img: "/assets/imgs/template/conversion.svg",
          },
          {
            link: "A/B Testing",
            desc: "Improve your app’s ranking and credibility through  Precision A/B Testing for Enhanced Visibility.",
            img: "/assets/imgs/template/ab-testing.svg",
          },
        ],
      },
    ],
  };

  const renderData = data.hasOwnProperty(category);

  return (
    <>
      {renderData && (
        <section className="section mt-80">
          <div className="container">
            {data[category].map((categoryItem, categoryIndex) => (
              <div key={categoryIndex} className="row mt-50">
                <div className="col-lg-12 text-center">
                  <h2 className="color-brand-1 mb-20">{categoryItem.name}</h2>
                  <p className="font-lg color-gray-500">{categoryItem.desc}</p>
                </div>
              </div>
            ))}
            {data[category].map((item, index) => (
              <div key={index} className="row mt-50">
                {item.data &&
                  item.data.map((subItem, subIndex) => (
                    <div key={subIndex} className="col-lg-6">
                      <div className="card-offer card-we-do hover-up">
                        <div className="card-image">
                          <Image
                            src={subItem.img}
                            height={75}
                            width={69}
                            alt="aso Services"
                          />
                        </div>
                        <div className="card-info">
                          <h4 className="color-brand-1 mb-10">
                              {subItem.link}
                          </h4>
                          <p className="font-md color-grey-500 mb-5">
                            {subItem.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
            <div className="col-lg-12 box-button text-center mt-40">
              <Button
                text={"Book an appointment"}
                href={
                  "https://calender.multivariate.ai/team/nextgrowth-labs/marketing-meet"
                }
                target="blank"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default WebVisibility;
