import Image from "next/image"
import Link from "next/link"
const ApplicationInfo = ({ appData }) => {
  return (
    <div className="container">
      <div
        className="d-flex flex-column align-items-start"
        app-package-url={appData.appPackageURL}
        app-package-id={appData.applicationId}
        app-logo-url={appData.icon_urls}
      >
        <div className="app-details">
          <Image
            src={appData.icon_urls}
            alt={`${appData.packageName} logo`}
            width={100}
            height={100}
            className="app-logo"
          />
        </div>
        <div className="app-info align-items-start">
          <h5 className="app-name">{appData.packageName}</h5>
          <p className="app-category mb-5">By {appData.developer}</p>
          <span>
            <Link
              href={appData.appPackageURL}
              target="_blank"
              rel="noopener noreferrer"
              className="app-link color-info"
            >
              {appData.appPackageURL}
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ApplicationInfo
