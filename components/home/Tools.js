import React from "react"
import ToolsCard from "../cards/ToolsCard"
import Button from "../elements/Button"
import { data } from "../utils"
const Tools = ({ length }) => {
  const numItems = length && !isNaN(length) ? parseInt(length) : data.length
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="color-brand-1 mb-20">Tools that are built by us</h2>
            <p className="font-lg color-gray-500 mb-30">
              We&apos;ve built a powerful suite of tools that puts us light
              years ahead in the mobile app promotion stack.
            </p>

            <Button
              text={"Learn More"}
              href="/free-app-store-optimization-tool"
            />
          </div>
        </div>
        <div className="row mt-50">
          {data.slice(0, numItems).map((item, index) => (
            <ToolsCard
              key={index}
              name={item.name}
              img={item.img}
              desc={item.desc}
              toolLink={item.toolLink}
              tag={item.tag}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
