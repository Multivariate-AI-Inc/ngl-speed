import React, { useState, useEffect } from "react"
import { isValidUrl, formatURL } from "../../utils"
import Loader from "../../elements/Loader"
import Link from "next/link"
import { toast } from "react-toastify"

const TitleMetaDescriptionTool = () => {
  const [inputUrl, setInputUrl] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isValidURL, setIsValidURL] = useState(false)
  const [metaData, setMetaData] = useState(null)
  const [oldUrl, setOldUrl] = useState('')
  const handleSubmit = async () => {
    setError(false)
    setLoading(true)
    const mainUrl = await formatURL(inputUrl)
     if(oldUrl === mainUrl){
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
    setOldUrl(mainUrl)
    setMetaData(null)
    if (!isValidUrl(mainUrl)) {
      setIsValidURL(true)
      setLoading(false)
      return
    }
    setInputUrl(mainUrl)
    const urlData = { url: mainUrl }
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(urlData),
    }
    fetch("/api/fetch-metadata", requestOptions)
      .then(response => response.json())
      .then(data => {
        if (data.status == 200) {
          setMetaData(data)
          setLoading(false)
        } else {
          setError(true)
          setLoading(false)
        }
      })
      .catch(error => {
        console.error(error)
        setError(true)
        setLoading(false)
      })
  }

  return (
    <section
      className="section"
      style={{ backgroundColor: "#E0F1F4" }}
    >
      <div className="container text-center">
        <div className="row mt-50 mb-5">
          <p className="tools_tag">Free SEO Tool</p>
          <h1 className="color-brand-1 mb-25 mt-10">
            Title and Meta Description
          </h1>
          <p className="font-md color-grey-500 mb-25">
            This tool displays the title and meta description of a webpage. It
            is an essential tool for on-page SEO optimization as the title and
            meta description provide a brief summary of the webpage's content to
            search engines. With this tool, you can check the title and meta
            description of your webpage and ensure that they are well-crafted
            and optimized for search engines. By using this tool, you can
            improve your website's visibility in search engine results pages and
            increase organic traffic to your website.
          </p>
          <div className="aso-input-form mb-25 main-box-holder">
            <div className="search-box-suggestion">
              <div className="main-search-bar">
                <input
                  type="text"
                  autoComplete="off"
                  className="search-input"
                  placeholder="Enter URL Ex:https://nextgrowthlabs.com"
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
          <div className="mb-30 mt-30 result-section">
            {metaData && (
              <table className="mobile_support_data">
                <thead>
                  <tr
                    id="table_header_row"
                    className="result-table mobile_support_data"
                  >
                    <th>Name</th>
                    <th>Value</th>
                    <th>Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table_row">
                    <td className="font-md">Title</td>
                    <td>{metaData.title}</td>
                    <td>{metaData.titleStatus}</td>
                  </tr>
                  <tr>
                    <td className="font-md">Meta Description</td>
                    <td>{metaData.meta_description}</td>
                    <td>{metaData.descriptionStatus}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
          {/* ************************** */}
          <div className="mb-20">
            <h5>
              Powered by-{" "}
              <Link
                href="https://nextgrowthlabs.com/?utm_source=title_description_web"
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

export default TitleMetaDescriptionTool
