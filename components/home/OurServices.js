import React from "react";
import ServicesCard from "../cards/ServicesCard";
const SERVICES_DATA = [
  {
    image: "/assets/imgs/page/homepage4/offer1.png",
    heading: "ASO",
    desc: " Seamless importing and round-tripping of Microsoft Project plans, Excel files & CSV files.",
    route: "/aso",
  },
  {
    image: "/assets/imgs/page/homepage4/offer2.png",
    heading: "SEO",
    desc: "What makes us different from others? We give holistic solutions with strategy, design & technology.",
    route: "/seo",
  },
  {
    image: "/assets/imgs/page/homepage4/offer3.png",
    heading: "Ads",
    desc: "No lag time, no lost effort when priorities change, no email black hole. As team collaboration improves",
    route: "/contact",
  },
  {
    image: "/assets/imgs/page/homepage4/offer4.png",
    heading: "Engagement & Retention",
    desc: "Share updates instantly within our project management software, and get the entire team collaborating",
    route: "/contact",
  },
];

const OurServices = () => {
  return (
    <>
      <section className="section mt-80 content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="color-brand-1 mb-20">Our services</h2>
              <p className="font-lg color-gray-500">
                What makes us different from others? We give holistic solutions
                <br className="d-none d-lg-block" />
                with strategy, design &amp; technology.
              </p>
            </div>
          </div>
          <div className="row mt-50">
            {SERVICES_DATA.map((data, index) => (
              <ServicesCard
                key={index}
                image={data.image}
                heading={data.heading}
                desc={data.desc}
                route={data.route}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
