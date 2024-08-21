import React from "react"
const RenderShuffledKeywords = ({ data }) => {
  return (
    <div className="container">
      <div
        className="d-flex align-items-start justify-content-between"
        style={{ textAlign: "left" }}
      >
        {data.map((group, index) => (
          <ul
            key={index}
            className=""
          >
            <li className="font-lg-bold">{group.heading}</li>
            {group.keywords.map((keyword, idx) => (
              <li
                key={idx}
                className=""
              >
                <label>
                  <input
                    type="checkbox"
                    value={keyword}
                    className=""
                  />
                  {keyword}
                </label>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default RenderShuffledKeywords
