import React, { useState } from "react"
import Image from "next/image"

const AppBasicInfo = ({ userAppData }) => {
  const rating = parseFloat(userAppData.userRating).toFixed(1)
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="application-information-div">
      {/* Basic Info */}
      <div className="row app-basic-info-div">
        <a
          href={userAppData.packageURL}
          target="_blank"
          className="app-link"
          rel="noopener noreferrer"
        >
          <div className="app-details">
            <Image
              src={userAppData.appIcon}
              alt="App logo image"
              className="app-logo"
              width={50}
              height={50}
            />
            <div className="app-info">
              <h5 className="app-name">{userAppData.appName}</h5>
              <p className="app-category">{userAppData.genresName}</p>
              <div className="app-rating">
                <div
                  className="Stars"
                  style={{ "--rating": rating }}
                  aria-label={`Rating of this product is ${rating} out of 5.`}
                ></div>
                <p className="app-rating">{userAppData.userRating}</p>
              </div>
              <p className="app-price">Price: {userAppData.appPrice}</p>
            </div>
          </div>
        </a>
      </div>

      {/* Description */}
      <div
        className={`app-description-div ${isExpanded ? "Expanded" : ""}`}
        id={`${userAppData.type}-description-div`}
      >
        <h5 className="heading-description">App Description</h5>
        <p className="app-description">
          {isExpanded
            ? userAppData.appDescription
            : userAppData.appDescription.slice(0, 200)}
        </p>
        {!isExpanded && userAppData.appDescription.length > 200 && (
          <p
            className="readMoreBtn"
            onClick={toggleReadMore}
          >
            Read More
          </p>
        )}
        {isExpanded && (
          <p
            className="readMoreBtn"
            onClick={toggleReadMore}
          >
            Read Less
          </p>
        )}
      </div>

      {/* Release Info */}
      <div className="app-release-info">
        <h5 className="release-heading">Released Info.</h5>
        <table className="release-info-table">
          <tbody>
            <tr>
              <td>
                <strong>First Release :</strong>
              </td>
              <td style={{ width: "52%" }}>{userAppData.appReleaseDate}</td>
            </tr>
            <tr>
              <td>
                <strong>File Size :</strong>
              </td>
              {/* <td style={{ width: "52%" }}>{userAppData.appFileSize}MB</td> */}
              <td style={{ width: "52%" }}>
                {userAppData.appFileSize && !isNaN(userAppData.appFileSize)
                  ? `${userAppData.appFileSize}MB`
                  : "N/A"}
              </td>
            </tr>
            <tr>
              <td>
                <strong>Last Update :</strong>
              </td>
              <td style={{ width: "52%" }}>{userAppData.lastUpdateDate}</td>
            </tr>
            <tr className="hidden">
              <td>
                <strong>Last Update Notes:</strong>
              </td>
              <td style={{ width: "52%" }}>{userAppData.lastUpdateNotes}</td>
            </tr>
            <tr>
              <td>
                <strong>Copyright :</strong>
              </td>
              <td style={{ width: "52%" }}>{userAppData.appCopyright}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AppBasicInfo
