import React, { useState } from "react"
import { suggestionTabData } from "../../utils"
import Image from "next/image"

const PlateFormTabs = ({ setSelectedSource }) => {
  const [activePlateFormTab, setActivePlateFormTab] = useState("play")
  const handleSource = id => {
    setActivePlateFormTab(id)
    setSelectedSource(id)
  }

  return (
    <>
      <div className="d-flex justify-center align-items-center gap-10 flex-wrap">
        {suggestionTabData.map(
          ({
            id,
            target,
            text,
            imageSrc,
            imageAlt,
            imageWidth,
            imageHeight,
          }) => (
            <div
              key={id}
              className={`d-flex flex-column justify-center align-items-center gap-5 suggestion-tab
                ${activePlateFormTab === id ? "active-tab" : ""}`}
              data-target={target}
              onClick={() => handleSource(id)}
            >
              <Image
                width={imageWidth}
                height={imageHeight}
                src={imageSrc}
                alt={imageAlt}
                className="icon_brand"
              />
              <span className="font-xs">{text}</span>
            </div>
          ),
        )}
      </div>
    </>
  )
}

export default PlateFormTabs
