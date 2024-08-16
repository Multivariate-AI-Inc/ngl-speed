import React from "react";
import ToolsCard from "../cards/ToolsCard";

import { data } from "../utils";
const OurTools = () => {
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-8">
            <h2 className="color-brand-1 mb-20">Tools that are built by us</h2>
            <p className="font-lg color-gray-500">
              We&apos;ve built a powerful suite of tools that puts us light
              years ahead in
              <br className="d-none d-lg-block" />
              the mobile app promotion stack.
            </p>
          </div>
        </div>
        <div className="row mt-50">
          {data.map((item, index) => (
            <ToolsCard
              key={index}
              img={item.img}
              name={item.name}
              desc={item.desc}
              toolLink={item.toolLink}
              tag={item.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTools;
