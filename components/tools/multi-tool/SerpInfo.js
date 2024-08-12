import { DownloadCSVTable, getRandomNumber } from "../../utils"
import React from "react"
const SerpInfo = ({ id, data }) => {
  let serpId = id.toLowerCase()
  const handleDownloadClick = e => {
    e.preventDefault()
    console.log("Tartget serp", e.target)
    DownloadCSVTable(e.target)
  }
  return (
    <>
      {data && (Array.isArray(data) ? data.length !== 0 : !!data.data) ? (
        <div className="w-embed">
          <div
            id={`${id}-SERP`}
            className="divided-sections rank-div"
            style={{ display: "block" }}
          >
            <ol
              id={`search-output-box-${serpId}`}
              className="d-flex flex-column multi-tool-suggestions"
            >
              {data.map((item, index) => (
                <li
                  key={index}
                  className="multi-tool-suggestions-items"
                  data-url={item.links}
                >
                    <span className="pr-10">{index + 1}.</span>
                  <div className="d-flex flex-column align-items-start">
                    <h5 className="font-lg-bold ptb-5">
                      <a
                        href={item.links}
                        target="_blank"
                        className="color-brand-1"
                      >
                        {item.title}
                      </a>
                    </h5>

                    <a
                      href={item.links}
                      target="_blank"
                      className="mt-10 color-info"
                      id="multi-tool-search-link"
                    >
                      {item.displayedLink ? item.displayedLink : item.links}
                    </a>
                    <div style={{ paddingTop: "5px", color: "#555", textAlign:"left" }}>
                      {item.snippet}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <button
              type="submit"
              id="copy-button"
              onClick={handleDownloadClick}
              text="search"
              btn-hint={serpId}
            >
              Download as CSV
            </button>
          </div>
        </div>
      ) : (
        <div className="main-section-btn errorMsg">
          <p>
            <strong>
              Server is too busy, Please try after sometime{" "}
              <span>Live User: {getRandomNumber()}</span>
            </strong>
          </p>
        </div>
      )}
    </>
  )
}

export default SerpInfo
