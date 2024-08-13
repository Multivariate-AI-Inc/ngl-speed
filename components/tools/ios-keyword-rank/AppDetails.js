import Link from "next/link"
import React from "react"

const AppDetails = ({ data }) => {
  const row_data = data?.results || []
  const renderDeviceIcons = supportedDevices => {
    const uniqueDevices = [
      ...new Set(supportedDevices.map(device => device.slice(0, 4))),
    ]
    const icons = []

    if (uniqueDevices.includes("iPho")) {
      icons.push(
        <span
          key="iphone"
          className="unique-devices-iphone"
          title="iPhone"
        >
          <svg
            width="7px"
            height="11px"
            viewBox="0 0 7 11"
            version="1.1"
          >
            <g id="surface1">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "rgb(0%,0%,0%)",
                  fillOpacity: 1,
                }}
                d="M 4.8125 0.6875 C 5.054688 0.6875 5.25 0.996094 5.25 1.375 L 5.25 9.625 C 5.25 10.003906 5.054688 10.3125 4.8125 10.3125 L 2.1875 10.3125 C 1.945312 10.3125 1.75 10.003906 1.75 9.625 L 1.75 1.375 C 1.75 0.996094 1.945312 0.6875 2.1875 0.6875 Z M 2.1875 0 C 1.703125 0 1.3125 0.617188 1.3125 1.375 L 1.3125 9.625 C 1.3125 10.382812 1.703125 11 2.1875 11 L 4.8125 11 C 5.296875 11 5.6875 10.382812 5.6875 9.625 L 5.6875 1.375 C 5.6875 0.617188 5.296875 0 4.8125 0 Z M 2.1875 0 "
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "rgb(0%,0%,0%)",
                  fillOpacity: 1,
                }}
                d="M 3.5 9.625 C 3.742188 9.625 3.9375 9.316406 3.9375 8.9375 C 3.9375 8.558594 3.742188 8.25 3.5 8.25 C 3.257812 8.25 3.0625 8.558594 3.0625 8.9375 C 3.0625 9.316406 3.257812 9.625 3.5 9.625 Z M 3.5 9.625 "
              />
            </g>
          </svg>
        </span>,
      )
    }

    if (uniqueDevices.includes("iPad")) {
      icons.push(
        <span
          key="ipad"
          className="unique-devices-ipad"
          title="iPad"
        >
          <svg
            width="11px"
            height="16px"
            viewBox="0 0 11 16"
            version="1.1"
          >
            <g id="surface1">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "rgb(0%,0%,0%)",
                  fillOpacity: 1,
                }}
                d="M 7.5625 1 C 7.941406 1 8.25 1.449219 8.25 2 L 8.25 14 C 8.25 14.550781 7.941406 15 7.5625 15 L 3.4375 15 C 3.058594 15 2.75 14.550781 2.75 14 L 2.75 2 C 2.75 1.449219 3.058594 1 3.4375 1 Z M 3.4375 0 C 2.679688 0 2.0625 0.894531 2.0625 2 L 2.0625 14 C 2.0625 15.105469 2.679688 16 3.4375 16 L 7.5625 16 C 8.320312 16 8.9375 15.105469 8.9375 14 L 8.9375 2 C 8.9375 0.894531 8.320312 0 7.5625 0 Z M 3.4375 0 "
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "rgb(0%,0%,0%)",
                  fillOpacity: 1,
                }}
                d="M 5.5 14 C 5.878906 14 6.1875 13.550781 6.1875 13 C 6.1875 12.449219 5.878906 12 5.5 12 C 5.121094 12 4.8125 12.449219 4.8125 13 C 4.8125 13.550781 5.121094 14 5.5 14 Z M 5.5 14 "
              />
            </g>
          </svg>
        </span>,
      )
    }

    if (uniqueDevices.includes("Watc")) {
      icons.push(
        <span
          key="watch"
          className="unique-devices-watch"
          title="Apple Watch"
        >
          <svg
            width="11px"
            height="16px"
            viewBox="0 0 11 16"
            version="1.1"
          >
            <g id="surface1">
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "rgb(0%,0%,0%)",
                  fillOpacity: 1,
                }}
                d="M 4.5 2.5 C 4.5 2.363281 4.386719 2.25 4.25 2.25 C 4.113281 2.25 4 2.363281 4 2.5 L 4 4 L 3 4 C 2.863281 4 2.75 4.113281 2.75 4.25 C 2.75 4.386719 2.863281 4.5 3 4.5 L 4.25 4.5 C 4.386719 4.5 4.5 4.386719 4.5 4.25 Z M 4.5 2.5 "
              />
              <path
                style={{
                  stroke: "none",
                  fillRule: "nonzero",
                  fill: "rgb(0%,0%,0%)",
                  fillOpacity: 1,
                }}
                d="M 2 0.832031 L 2 1.023438 C 1.417969 1.144531 1 1.65625 1 2.25 L 1 5.75 C 1 6.34375 1.417969 6.855469 2 6.976562 L 2 7.167969 C 2 7.625 2.371094 8 2.832031 8 L 5.167969 8 C 5.625 8 6 7.628906 6 7.167969 L 6 6.976562 C 6.582031 6.855469 7 6.34375 7 5.75 L 7 4 L 7.25 4 C 7.386719 4 7.5 3.886719 7.5 3.75 L 7.5 2.75 C 7.5 2.613281 7.386719 2.5 7.25 2.5 L 7 2.5 L 7 2.25 C 7 1.65625 6.582031 1.144531 6 1.023438 L 6 0.832031 C 6 0.375 5.628906 0 5.167969 0 L 2.832031 0 C 2.375 0 2 0.371094 2 0.832031 Z M 2.25 1.5 L 5.75 1.5 C 6.164062 1.5 6.5 1.835938 6.5 2.25 L 6.5 5.75 C 6.5 6.164062 6.164062 6.5 5.75 6.5 L 2.25 6.5 C 1.835938 6.5 1.5 6.164062 1.5 5.75 L 1.5 2.25 C 1.5 1.835938 1.835938 1.5 2.25 1.5 Z M 2.25 1.5 "
              />
            </g>
          </svg>
        </span>,
      )
    }
    return icons
  }

  return (
    <div className="container">
      {row_data.map(
        (item, index) =>
          item.trackName !== undefined && (
            <div
              key={index}
              className="multi-tool-suggestions-items d-flex justify-content-between align-items-center pt-10 pb-10"
            >
              <Link
                href={item.trackViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex"
              >
                <div className="app-details">
                  {/* <div> */}
                  <img
                    src={item.artworkUrl100}
                    alt="App logo image"
                    className="app-logo"
                  />
                  <div className="app-info">
                    <h5 className="app-name">{item.trackName}</h5>
                    <p className="app-category">
                      {item.primaryGenreName}
                      {renderDeviceIcons(item.supportedDevices)}
                    </p>
                    <p className="app-Reviews-Count">
                      Rating Count: {item.userRatingCountForCurrentVersion}
                    </p>
                    <p className="app-rating">
                      {item.averageUserRatingForCurrentVersion.toFixed(2)}
                    </p>
                    <div className="ratings">
                      <div
                        className="Stars"
                        style={{
                          "--rating":
                            item.averageUserRatingForCurrentVersion.toFixed(1),
                        }}
                        aria-label={`Rating of this product is ${item.averageUserRatingForCurrentVersion.toFixed(
                          1,
                        )} out of 5.`}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="d-flex flex-column justify-content-center mt-10 mb-10">
                <Link
                  href={item.trackViewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-store-link"
                >
                  <span>{item.formattedPrice}</span>
                  <br />
                  <span>App Store</span>
                  <span className="ranks">#{index + 1}</span>
                </Link>
                <Link
                  className="audit-button ptb-10 pr-10 pl-10"
                  style={{ borderRadius: "4px", backgroundColor:"#1c7df8" }}
                  target="_blank"
                  href="https://nextgrowthlabs.com/contact?utm_source=ios_app_select_web#form"
                >
                  Get Recommendation
                </Link>
                {/* <>
                  <a
                    href="https://nextgrowthlabs.com/?utm_source=ios_keyword_search_web#form"
                    style={{
                      bottom: "75px",
                      position: "relative",
                      left: "-140%",
                    }}
                    id="copy-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                  </a>
                </> */}
              </div>
            </div>
          ),
      )}
    </div>
  )
}

export default AppDetails
