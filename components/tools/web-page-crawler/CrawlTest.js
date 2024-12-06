import Link from "next/link"
import React, { useState } from "react"
import Loader from "../../elements/Loader"
import { extractMainDomain, formatURL, isValidUrl } from "../../utils"
import { toast } from "react-toastify"

// Check robot.txt is available or not
function isRobotsTxt(content) {
  // Convert the content to lowercase for case-insensitive matching
  var lowerContent = content.toLowerCase()

  // Check if the content contains common robots.txt directives
  var containsUserAgent = lowerContent.includes("user-agent:")
  var containsDisallow = lowerContent.includes("disallow:")
  var containsAllow = lowerContent.includes("allow:")
  var containsSitemap = lowerContent.includes("sitemap:")

  // A robots.txt file usually contains at least one User-agent directive
  // and either Disallow, Allow, or Sitemap directives
  return (
    containsUserAgent && (containsDisallow || containsAllow || containsSitemap)
  )
}

function analyseRobotsTxt(robotsTxtData, url) {
  const lines = robotsTxtData.split("\n")
  let isCrawlable = true
  let isIndexable = true

  const parsedUrl = new URL(url)
  url = parsedUrl.pathname

  // Loop through each line of the robots.txt data
  for (const line of lines) {
    const parts = line.trim().split(": ")
    const directive = parts[0].trim().toLowerCase()
    const value = parts[1] ? parts[1].trim() : ""

    // Check for Disallow directives
    if (directive === "disallow") {
      // Check if the URL matches the disallowed path
      if (url.includes(value)) {
        isCrawlable = false
        isIndexable = false // If disallowed, it's not indexable
        break // No need to continue checking other directives
      }
    }
  }

  return { url: url, crawlable: isCrawlable, indexable: isIndexable }
}

const CrawlTest = () => {
  const [inputUrl, setInputUrl] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isValidURL, setIsValidURL] = useState(false)
  const [robotTxt, setRobotTxt] = useState(false)
  const [data, setData] = useState("")
  const [oldUrl, setOldUrl] = useState('')
  const [result, setResult] = useState({
    url: "",
    crawlable: true,
    indexable: true,
  })

  const handleSubmit = async () => {
    setError(false)
    setLoading(true)
    let url = await formatURL(inputUrl)
    if (oldUrl === url) {
      toast.error(`Please enter new URL`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setError(false)
      setLoading(false)
      return
    }
    let mainUrl = extractMainDomain(url)
    if (!isValidUrl(mainUrl)) {
      setIsValidURL(true)
      setLoading(false)
      return
    }

    setInputUrl(url)
    setOldUrl(url)
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: mainUrl, robotTxt: true }),
      }
      const response = await fetch("/api/get-page", requestOptions)
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      const htmlContent = data.body
      const robotTxt = await isRobotsTxt(htmlContent)
      if (robotTxt) {
        setData(htmlContent)
        const robotTxtData = analyseRobotsTxt(htmlContent, url)
        setRobotTxt(false)
        setResult({
          url: robotTxtData.url,
          crawlable: robotTxtData.crawlable,
          indexable: robotTxtData.indexable,
        })
        setLoading(false)
      } else {
        setRobotTxt(true)
        setLoading(false)
      }
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <section
      className="section"
      style={{ backgroundColor: "#E0F1F4" }}
    >
      <div className="container text-center">
        <div className="row mt-50 mb-5">
          <p className="tools_tag">Free SEO Tool</p>
          <h1 className="font-4xl-bold color-brand-1 mb-25 mt-10">Free Website Crawl Test</h1>
          <p className="font-md color-grey-500 mb-25">
            Experience the ultimate online crawler tool (spider) designed to
            meticulously test your entire website. This comprehensive tool
            evaluates every aspect to determine its indexability for major
            search engines like Google and Bing.
          </p>
          <div className="aso-input-form mb-25 main-box-holder">
            <div className="search-box-suggestion">
              <div className="main-search-bar">
                <input
                  type="text"
                  autoComplete="off"
                  className="search-input"
                  placeholder="Website URL"
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

          {result.url !== "" && (
            <div>
              <div className="table-container">
                <h2>Crawlability</h2>
                <table className="showTableCrawl">
                  <thead>
                    <tr>
                      <th style={{ minWidth: "100px" }}>URL</th>
                      <th style={{ minWidth: "200px" }}>Info</th>
                      <th className="text-center">Crawlable</th>
                      <th className="text-center">Indexable</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{result.url ? result.url : "/"}</td>
                      <td>
                        <ul>
                          <li>
                            <strong>Google crawl rule</strong>:{" "}
                            {result.indexable ? "Allow" : "Disallow"} (
                            {result.crawlable ? "Crawlable" : "Not Crawlable"})
                          </li>
                          <li>
                            <strong>Bing crawl rule</strong>:{" "}
                            {result.indexable ? "Allow" : "Disallow"} (
                            {result.crawlable ? "Crawlable" : "Not Crawlable"})
                          </li>
                          <li style={{ paddingTop: "8px" }}>
                            <strong>Google index rule</strong>:{" "}
                            {result.indexable ? "Index" : "Noindex"}
                          </li>
                          <li>
                            <strong>Bing index rule</strong>:{" "}
                            {result.indexable ? "Index" : "Noindex"}
                          </li>
                        </ul>
                      </td>
                      <td className="center">
                        {result.crawlable ? "✅ Google" : "✖️ Google"}
                        <br />
                        {result.crawlable ? "✅ Bing" : "✖️ Bing"}
                      </td>
                      <td className="center">
                        {result.indexable ? "✅ Google" : "✖️ Google"}
                        <br />
                        {result.indexable ? "✅ Bing" : "✖️ Bing"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-container">
                <h2>Robots.txt</h2>
                <pre>{data}</pre>
              </div>
            </div>
          )}
          {robotTxt && (
            <div className="table-container">
              <h3># 404 Robots.txt not exist!!</h3>
            </div>
          )}
          {/* ************************** */}
          <div className="mb-40 mt-30">
            <h5>
              Powered by-
              <Link
                href="https://nextgrowthlabs.com/contact/?utm_source=web-page-crawler"
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

export default CrawlTest
