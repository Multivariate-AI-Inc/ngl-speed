import React from "react"
import { selectedCountryAtom } from "../../../state/atoms"
import { DownloadCSVTable, getRandomNumber } from "../../utils"
import { useAtom } from "jotai"
const AppRanks = ({ data, device }) => {
  const [countryCode] = useAtom(selectedCountryAtom)
  const handleDownloadClick = e => {
    e.preventDefault()
    DownloadCSVTable(e.target)
  }
  return (
    <section className="container">
      {device === "android" ? (
        data && Array.isArray(data) && data.length !== 0 ? (
          <div
            id="Play-Store-Ranks"
            style={{ display: "block" }}
          >
            <ol
              id="search-output-box-play"
              className="d-flex flex-column multi-tool-suggestions"
            >
              {data.slice(0, 10).map((item, index) => (
                <li
                  key={index}
                  className="multi-tool-suggestions-items"
                  data-package-id={item.package_id}
                  data-url={`https://play.google.com/store/apps/details?id=${item.package_id}&gl=${countryCode.code}`}
                >
                  <a
                    href={`https://play.google.com/store/apps/details?id=${item.package_id}&gl=${countryCode.code}`}
                    className="d-flex justify-content-center align-items-center gap-10"
                    target="_blank"
                  >
                    <span>{index + 1}.</span>
                    <div className="suggestion-item-logo">
                      <img
                        src={item.app_icon}
                        alt="app_icon"
                        className="app-icon-li-item"
                      />
                    </div>
                    <div className="d-flex flex-column align-items-start">
                      <strong>{item.title}</strong>
                      <span>By {item.developer_name}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ol>
            <button
              type="submit"
              id="copy-button"
              onClick={handleDownloadClick}
              btn-hint="play"
              text="search"
            >
              Download as CSV
            </button>
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
        )
      ) : data && Array.isArray(data.results) && data.length !== 0 ? (
        <div
          id="Apple-Store-Ranks"
          className="divided-sections rank-div"
          style={{ display: "block" }}
        >
          <ol
            id="search-output-box-apple"
            className="d-flex flex-column multi-tool-suggestions"
          >
            {data.results.map((item, index) => (
              <li
                key={index}
                className="multi-tool-suggestions-items"
                data-url={item.trackViewUrl}
                data-package-id={item.artistId}
                data-logo-url={item.artworkUrl60}
              >
                <a
                  href={item.trackViewUrl}
                  className="d-flex justify-content-center align-items-center gap-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>{index + 1}.</span>
                  <div className="suggestion-item-logo">
                    <img
                      src={item.artworkUrl60}
                      alt="app_icon"
                      className="app-icon-li-item"
                    />
                  </div>
                  <div className="d-flex flex-column align-items-start">
                    <strong>{item.trackName}</strong>
                    <span>By {item.artistName}</span>
                  </div>
                </a>
              </li>
            ))}
          </ol>
          <button
            type="submit"
            id="copy-button"
            onClick={handleDownloadClick}
            text="search"
            btn-hint="apple"
          >
            Download as CSV
          </button>
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
    </section>
  )
}

export default AppRanks
