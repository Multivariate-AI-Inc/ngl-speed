import Link from "next/link"
import React, { useEffect, useState } from "react"
import Country from "../../aso/elements/Country"
import ReCaptcha from "../elements/ReCaptcha"
import { selectedCountryAtom } from "../../../state/atoms"
import { useAtom } from "jotai"
import Loader from "../../elements/Loader"
import DefaultMessage from "../elements/DefaultMessage"
import { toast } from "react-toastify"
import { formatURL, isValidUrl } from "../../utils"
import WebsiteKeywordsRanks from "./WebsiteKeywordsRanks"
const BulkWebsiteKeywordRank = () => {
  const [selectedCountry] = useAtom(selectedCountryAtom)
  const [inputKeywords, setInputKeywords] = useState([])
  const [websiteURL, setWebsiteURL] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const [tableData, setTableData] = useState([])
  const [isError, setError] = useState(false)

  const handleKeywordsChange = event => {
    let keywords = event.target.value.split(",")
    keywords = keywords
      .filter(element => element.trim() !== "")
      .map(element => element.trim())
      .filter((element, index, arr) => arr.indexOf(element) === index)
    setInputKeywords(keywords)
  }

  const resetTableData = () => {
    setTableData([]) // Reset the table data
  }
  // google recatcha
  async function handleCaptchaSubmission(token) {
    try {
      if (token) {
        const response = await fetch("/api/verify-recaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        })

        const result = await response.json()
        if (result.success) {
          setIsVerified(true)
        } else {
          setIsVerified(false)
        }
      }
    } catch (error) {
      console.error("Captcha verification failed:", error)
      setIsVerified(false)
    }
  }

  const handleChange = token => {
    handleCaptchaSubmission(token)
  }
  function handleExpired() {
    console.log("Captcha expired function fired")
    setIsVerified(false)
  }

  async function getWebsiteRanks() {
    setError(false)
    try {
      if (inputKeywords == "") {
        toast.warning("Please enter keywords first !", { autoClose: 1000 })
        return
      }
      if (websiteURL == "") {
        toast.warning("Please enter website url first !", { autoClose: 1000 })
        return
      }

      const formattedSiteUrl = await formatURL(websiteURL)
      const isValid = isValidUrl(formattedSiteUrl)
      if (!isValid) {
        toast.error("Please enter valid url", { autoClose: 2000 })
        return
      }

      // Check if the reCAPTCHA token is available
      if (!isVerified) {
        toast.warning("Please complete the reCAPTCHA", { autoClose: 2000 })
        return
      }
      // Create an async function to use await inside the loop
      setIsProcessing(true)
      let resultsKeywordArray
      async function fetchSuggestions() {
        const response = await getKeywordResults({
          country: selectedCountry.code,
          keywords: inputKeywords,
        })
        resultsKeywordArray = response
      }

      // Call the async function to fetch the suggestions
      await fetchSuggestions().then(() => {
        let rankData = getRanksFromResponse(websiteURL, resultsKeywordArray)
        // console.log('Rank data', rankData);
        if (rankData.length === 0) {
          throw Error
        }
        setTableData(rankData)
      })
      setIsProcessing(false)
    } catch (error) {
      console.log("Error getting data", error)
      setIsProcessing(false)
      setError(true)
      throw error
    }
  }

  async function getKeywordResults(data) {
    const apiURL = "/api/website-keywords-rank"
    let keywords
    await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (!response.ok) {
          // console.log(response)
          throw new Error("Network response was not ok")
        }
        return response
      })
      .then(async data => {
        // Parse the JSON response into an array
        let k = await data.json()
        keywords = k // Assign the array to the keywords variable
      })
      .catch(error => {
        console.error("Error:", error.message)
        return error
      })
    return keywords
  }

  function getRanksFromResponse(siteUrl, data) {
    const targetUrl = siteUrl.toLowerCase()
    // const WebsiteToFind = getVideoIdFromURL(websiteURL);
    const rankArray = [] // Initialize an array to store ranks

    // Loop through the categories
    for (const category in data) {
      if (data.hasOwnProperty(category)) {
        let rank = "N/A",
          link = ""
        // Loop through the items in the category
        for (let i = 0; i < data[category].length; i++) {
          if (data[category][i].links.includes(targetUrl)) {
            rank = i + 1
            link = data[category][i].links
            break
          }
        }
        rankArray.push({ key: category, value: rank, link: link }) // Add items to the array
      }
    }
    return rankArray
  }
  return (
    <section className="position-relative top-3">
      <div className="container text-center">
        <div className="main-head">
          <h1 className="font-3xl-bold color-brand-1 mb-5 mt-5">
            Free Bulk Keyword Rank Checker
          </h1>
        </div>
        <div
          className=""
          id="editor"
        >
          <div className="pr-20 pl-20 ptb-15">
            <p className="font-md color-grey-500 mb-25">
              A Free Bulk Keyword Rank Checker is a valuable resource for
              website owners, marketers, SEO professionals, and businesses
              aiming to monitor and improve their online presence. This tool
              provides insights and metrics related to a website's search engine
              ranking, domain authority, and visibility across various search
              engines, typically focusing on Google but in the future, we
              include others like Bing or Yahoo.
            </p>
            <p className="font-md color-grey-500 mb-25">
              SEO should be accessible, you can use this free tool to check the
              position of any website against a list of keywords.
            </p>
            <p className="font-md color-grey-500 mb-25">
              Want to track your rankings automatically every day.{" "}
              <Link
                href="https://nextgrowthlabs.com/?utm_source=website_rank_track_web"
                target="_blank"
                rel="noopener noreferrer"
                className="utm-link"
              >
                Contact Us
              </Link>
            </p>
          </div>

          <label
            htmlFor="website-url"
            className="d-flex ml-10 color-grey-200"
          >
            Enter Comma-Separated Keywords:
          </label>
          <div
            id="bulk-ios-search-box"
            className="aso-input-form mb-25 main-box-holder"
          >
            <div className="ios-search-box">
              <div className="main-search-bar">
                <input
                  type="text"
                  autoComplete="off"
                  id="search-box-ios"
                  className="search-input"
                  placeholder="aso company, top seo agency"
                  onChange={handleKeywordsChange}
                />
              </div>
            </div>
            <div>
              <Country />
            </div>
          </div>

          <div className="ios-rank-textarea">
            <label
              htmlFor="website-url"
              className="d-flex mb-10 ml-5 color-grey-200"
            >
              Enter the Website URL:
            </label>
            <div className="d-flex align-items-start flex-wrap gap-50">
              <input
                type="text"
                id="website-url"
                autoComplete="off"
                style={{ width: "400px", height: "75px" }}
                className="ptb-10 pr-10 pl-10"
                placeholder="https://nextgrowthlabs.com"
                value={websiteURL}
                onChange={e => setWebsiteURL(e.target.value)}
              />
              <ReCaptcha
                onChange={handleChange}
                onExpired={handleExpired}
              />
            </div>
            {tableData.length === 0 && (
              <div className="d-flex justify-content-center mt-40">
                <button
                  type="submit"
                  className="audit-button ptb-15 pl-15 pr-15 mt-20"
                  onClick={getWebsiteRanks}
                  disabled={isProcessing}
                >
                  Get Ranks
                </button>
              </div>
            )}
          </div>
          {/* ************************** */}
          {isProcessing && (
            <div className="mt-40 mb-40">
              {" "}
              <Loader />{" "}
            </div>
          )}
          {isError && (
            <DefaultMessage
              message={"Something went wrong, Please try again later"}
            />
          )}
          {tableData.length !== 0 && (
            <WebsiteKeywordsRanks
              tableData={tableData}
              onReset={resetTableData}
            />
          )}
        </div>
        {/* ************************** */}
        <div className="canvas-footer-website ptb-10">
          <h5>
            Powered by{" "}
            <Link
              href="https://nextgrowthlabs.com/?utm_source=website_rank_track_web#form"
              target="_blank"
              rel="noopener noreferrer"
              className="utm-link"
            >
              NextGrowth Labs
            </Link>{" "}
          </h5>
        </div>
      </div>
    </section>
  )
}

export default BulkWebsiteKeywordRank
