import Link from "next/link"
import React, { useState } from "react"
import Loader from "../../elements/Loader"
const CrawlTest = () => {
  const [inputUrl, setInputUrl] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isValidURL, setIsValidURL] = useState(false)
  const handleSubmit = () => {
    console.log("handle submit")
  }
  return (
    <section
      className="section"
      style={{ backgroundColor: "#E0F1F4" }}
    >
      <div className="container text-center">
        <div className="row mt-50 mb-5">
          <p className="tools_tag">Free SEO Tool</p>
          <h1 className="color-brand-1 mb-25 mt-10">Free Website Crawl Test</h1>
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
         
          {/* ************************** */}
          <div className="mb-20 mt-30">
            <h5>
              Powered by-{" "}
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
