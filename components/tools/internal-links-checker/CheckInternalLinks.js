import React, { useState } from "react"
import Loader from "../../elements/Loader"
import { formatURL, isValidUrl } from "../../utils"
import Link from "next/link"

const CheckInternalLinks = () => {
  const [inputUrl, setInputUrl] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isValidURL, setIsValidURL] = useState(false)
  const [linkCount, setLinkCount] = useState({
    total: 0,
    internal: 0,
    external: 0,
  })
  const [linkDetails, setLinkDetails] = useState([])

  const handleSubmit = async () => {
    setLinkCount({
      total: 0,
      internal: 0,
      external: 0,
    })
    setLinkDetails([])
    setError(false)
    setLoading(true)
    const mainUrl = await formatURL(inputUrl)
    if (!isValidUrl(mainUrl)) {
      setIsValidURL(true)
      setLoading(false)
      return
    }
    setInputUrl(mainUrl)
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: mainUrl }),
      }
      const response = await fetch("/api/get-page", requestOptions)
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const html = await response.json()
      parseHtml(html.body, mainUrl)
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }
  const parseHtml = (htmlString, url) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const allLinks = doc.getElementsByTagName("a");
    const linkData = [];
    let internalLinks = 0;
    let externalLinks = 0;

    const maxCharacterLimit = 30;
    const hostname = new URL(url).hostname;

    for (let i = 0; i < allLinks.length; i++) {
      const link = allLinks[i];
      let href = link.getAttribute("href");
      if (!href || href.startsWith("http://support.google.com/websearch/") || href.startsWith("http://webcache.googleusercontent.com/search")) {
        continue;
      }

      if (href.startsWith("/")) {
        href = `https://${hostname}${href}`;
      } else if (href.startsWith("#")) {
        href = `https://${hostname}${href}`;
      }

      const anchorText = link.textContent ? link.textContent.trim() : "";
      const modifiedAnchorText = link.querySelector("img")
        ? "Image"
        : anchorText.length > maxCharacterLimit
          ? anchorText.substring(0, maxCharacterLimit)
          : anchorText;
      const isInternalLink = href.includes(hostname);
      const type = isInternalLink ? "Internal" : "External";
      const follow = link.getAttribute("rel") === "nofollow" ? "✘" : "✔";

      if (type === "Internal") {
        internalLinks++;
      } else {
        externalLinks++;
      }

      linkData.push({ href, anchorText: modifiedAnchorText, type, follow });
    }
    setLinkCount({
      total: allLinks.length,
      internal: internalLinks,
      external: externalLinks,
    });
    setLinkDetails(linkData);
    setLoading(false);
  };




  return (
    <section
      className="section"
      style={{ backgroundColor: "#E0F1F4" }}
    >
      <div className="container text-center">
        <div className="row mt-50 mb-5">
          <p className="tools_tag">Free SEO Tool</p>
          <h1 className="font-4xl-bold color-brand-1 mb-25 mt-10">
            Free Internal Link Checker Tool
          </h1>
          <p className="font-md color-grey-500 mb-25">
            Streamline your website maintenance with our free Internal Link
            Checker Tool. Easily identify and fix broken links, ensuring
            seamless navigation and boosting your site's SEO. Enhance user
            experience and elevate search engine rankings effortlessly.
          </p>
          <div className="aso-input-form mb-25 main-box-holder">
            <div className="search-box-suggestion">
              <div className="main-search-bar">
                <input
                  type="text"
                  autoComplete="off"
                  className="search-input"
                  placeholder="Enter your website"
                  value={inputUrl}
                  onChange={e => setInputUrl(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="audit-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>

          {/* ************************** */}

          {isValidURL && (
            <div className="error-message w-form-fail mb-20">
              <div>Oops! Please enter correct URL</div>
            </div>
          )}
          {error && (
            <div className="error-message w-form-fail mb-20">
              <div>Oops! Something Went Wrong. Please try again !!</div>
            </div>
          )}
          {loading && (
            <div className="mb-40 mt-20">
              {" "}
              <Loader />{" "}
            </div>
          )}

          {/* ************************** */}
          {linkCount.total > 0 && (
            <div id="link_count" className="result-section">
              <span className="color-brand-1"> {linkCount.total} </span> <br />
              Total Links <br />
              <span className="color-brand-1"> {linkCount.internal} </span> <br />
              Internal Links
              <br />
              <span className="color-brand-1"> {linkCount.external} </span> <br />
              External Links <br />
            </div>
          )}
          {linkDetails.length !== 0 && (
            <div className="scroll_content">
              <table border="1" className="result-table mobile_support_data">
                <thead>
                  <tr style={{ position: "sticky", top: "-1px" }}>
                    <th>Link</th>
                    <th>Anchor Text</th>
                    <th>Type</th>
                    <th>Follow</th>
                  </tr>
                </thead>
                <tbody>
                  {linkDetails.map((link, index) => (
                    <tr key={index}>
                      <td>{link.href}</td>
                      <td>{link.anchorText}</td>
                      <td style={{ textAlign: "center" }}>{link.type}</td>
                      <td
                        className="success"
                        style={{ textAlign: "center" }}
                      >
                        {link.follow}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* ************************** */}
          <div className="mb-40 mt-30">
            <h5>
              Powered by-{" "}
              <Link
                href="https://nextgrowthlabs.com/contact/?utm_source=internal-link-checker"
                target="_blank"
                rel="noopener noreferrer"
                className="utm-link"
              >
                NextGrowth Lab
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckInternalLinks
