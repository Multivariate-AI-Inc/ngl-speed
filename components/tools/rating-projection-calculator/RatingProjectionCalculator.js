import React, { useEffect, useState, useRef } from "react"
import Country from "../../aso/elements/Country"
import Link from "next/link"
import LanguageSelection from "../elements/LanguageSelection"
import RatingCalculator from "./RatingCalculator"
import SearchResults from "../../aso/elements/SearchResult"
import Loader from "../../elements/Loader"
import { useAtom } from "jotai"
import {
  showSearchApps,
  userSelectedApp,
  showAppSelected,
  selectedCountryAtom,
} from "../../../state/atoms"
import { toast } from "react-toastify"
import CalculateRating from "./CalculateRating"
const RatingProjectionCalculator = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en")
  const [activeTab, setActiveTab] = useState("selectApp")
  const [searchKeyword, setSearchKeyword] = useState("")
  const [isAppVisible, setIsAppVisible] = useAtom(showSearchApps)
  const [userSelectedAppObject, setUserSelectedAppObject] =
    useAtom(userSelectedApp)
  const [appSelected, setAppSelected] = useAtom(showAppSelected)
  const [selectedCountry] = useAtom(selectedCountryAtom)
  const [intervalId, setIntervalId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [appId, setAppId] = useState("")
  const [iframeContent, setIframeContent] = useState(null)
  const [reviewData, setReviewData] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)
  const prevAppIdRef = useRef("")

  useEffect(() => {
    if (appSelected) {
      setAppId(userSelectedAppObject.applicationId)
      console.log("appID", userSelectedAppObject.applicationId)
    }
  }, [userSelectedAppObject])

  const handleLanguageSelect = languageCode => {
    setSelectedLanguage(languageCode)
  }


  const handleSubmit = async () => {
    if (appSelected) {
      if (appId.trim() == "") {
        toast.warning("Please enter the App ID", { autoClose: 2000 })
        return true
      }
    } else {
      toast.warning("Please enter the App ID", { autoClose: 2000 })
      return
    }

    let prevAppId = prevAppIdRef.current
    setIsProcessing(true)
    if (appId.length === prevAppId.length) {
      toast.warning("Please enter new App ID", { autoClose: 2000 })
      setIsProcessing(false)
      return
    }
    prevAppIdRef.current = appId
    try {
      // const id = setInterval(() => {
        //   getDataFromIframe()
        // }, 5000)
        // setIntervalId(id)
        // resetUIElements(); // reset app data
        setIsLoading(true)
        setReviewData({})
      const payload = {
        appId: appId,
        lang: selectedLanguage,
        country: selectedCountry.code,
      }
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }

      fetch("/api/fetch-playstore-data", requestOptions)
        .then(response => response.json())
        .then(data => {
          try {
            let newStr = data.replace(/\\/g, "")
            // setIframeContent(newStr)
            getDataFromIframe(newStr)
            setIsLoading(false)
            setIsProcessing(false)
          } catch (e) {
            console.error(e)
            setIsLoading(false)
            setIsProcessing(false)
          }
        })
    } catch (error) {
      setIsLoading(false)
      setIsProcessing(false)
    }
  }

  function getDataFromIframe(iframData) {
    const parser = new DOMParser()
    const iframeData = parser.parseFromString(iframData, "text/html")
    console.log("working...")
    let review = { Rating: true }
    if (iframeData) {
      // clearInterval(intervalId)
      // const iframeData = iframeDoc
      console.log("Iframe Data", iframeData)
      try {
        let div = iframeData.querySelectorAll(".JzwBgb")
        for (let i = 0; i < div.length; i++) {
          review[div[i]["childNodes"][0]["innerHTML"]] =
            div[i]["childNodes"][1]["childNodes"][0]["attributes"]["title"][
              "nodeValue"
            ]
        }
      } catch {
        review.Rating = false
      }
      try {
        let title = iframeData.querySelector("title").textContent
        review.title = title
        let description = iframeData
          .querySelector('meta[name="description"]')
          .getAttribute("content")
        review.description = description
      } catch {
        review.title = "Sorry... Unable to fetch the title."
        review.description = "Sorry... Unable to fetch the Meta Description."
      }
      try {
        let logoImage = iframeData
          .querySelector(".Mqg6jb.Mhrnjf img:first-child")
          .getAttribute("src")
        review.logoImage = logoImage
      } catch {}
      setReviewData(review)
      console.log("Review", review)
    }
  }

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [intervalId])

  return (
    <section className="position-relative top-3">
      <div className="container text-center">
        <div className="main-head">
          <h1 className="font-3xl-bold color-brand-1 mb-5 mt-5">
            Rating Projection Calculator
          </h1>
        </div>
        <div
          className=""
          id="editor"
        >
          <div className="pr-20 pl-20 ptb-15">
            <p className="font-md color-grey-500 mb-25">
              The Nextgrothlabs rating projection calculator is a useful tool
              for app developers looking to improve their app's performance in
              the Google Play Store. The calculator allows users to input their
              current rating, desired target rating, and a time frame for
              achieving the target rating. Based on this information, the tool
              calculates how many ratings per day are needed to reach the target
              rating.
            </p>
            <p className="font-md color-grey-500 mb-25">
              For app developers, a high rating in the Google Play Store can
              significantly impact the success of their app. The higher the
              rating, the more likely an app will be downloaded, and the more
              visible it will be in the store. Using the rating projection
              calculator by Nextgrowthlabs, developers can determine how many
              ratings they need to gain each day to reach their desired rating,
              and adjust their strategies accordingly.
            </p>
            <p className="font-md color-grey-500 mb-25">
              In conclusion, the rating projection calculator is a valuable tool
              for app developers looking to increase their app's rating in the
              Google Play Store. By using this tool, developers can set
              realistic goals and create a plan to achieve their target rating.
            </p>
          </div>
          {/* ************** tab section ***************** */}
          <div className="tabs_menu-service w-tab-menu">
            <a
              className={`tabs1_link-service first_tab w-inline-block w-tab-link ${
                activeTab === "selectApp" ? "w--current" : ""
              }`}
              onClick={() => setActiveTab("selectApp")}
            >
              <div>App Rating Calculator</div>
            </a>
            <a
              className={`tabs1_link-service _3rd w-inline-block w-tab-link ${
                activeTab === "getDailyFeedback" ? "w--current" : ""
              }`}
              onClick={() => setActiveTab("getDailyFeedback")}
            >
              <div>Get Daily Feedback</div>
            </a>
          </div>
          {/* ************ extracting app id with app rating data ************** */}
          {activeTab === "selectApp" && (
            <div
              className={`aso-input-form mb-40 mt-40 main-box-holder ${
                activeTab === "selectApp" ? "" : "hidden"
              }`}
            >
              <div className="search-box-suggestion">
                <div className="main-search-bar">
                  <input
                    type="text"
                    autoComplete="off"
                    spellCheck="false"
                    id="search-box-ios"
                    className="search-input"
                    placeholder="Write App name / App id"
                    value={
                      appSelected
                        ? userSelectedAppObject.applicationId
                        : searchKeyword
                    }
                    onChange={e => {
                      if (appSelected) {
                        setAppSelected(false)
                        setUserSelectedAppObject(null)
                      }
                      if (e.target.value.trim().length === 0) {
                        setIsAppVisible({})
                      }
                      setSearchKeyword(e.target.value)
                      setIsAppVisible(prev => {
                        return {
                          ...prev,
                          ["play-store-search"]: true,
                        }
                      })
                    }}
                  />
                </div>

                <div className="app-output-box">
                  {isAppVisible["play-store-search"] && (
                    <SearchResults
                      storeType={"play"}
                      searchQuery={searchKeyword}
                    />
                  )}
                </div>
              </div>
              <div>
                <Country />
              </div>
              <div>
                <LanguageSelection onSelectLanguage={handleLanguageSelect} />
              </div>
              <button
                type="submit"
                className="audit-button pl-15 pr-15 ptb-15"
                onClick={handleSubmit}
                disabled={isProcessing}
              >
                Submit
              </button>
            </div>
          )}
          {/* ************** */}
          {activeTab === "getDailyFeedback" && <RatingCalculator />}
          {isLoading && (
            <div className="mtb-40">
              <Loader />
            </div>
          )}
          {activeTab === "selectApp" && Object.keys(reviewData).length > 3 ? (
            <CalculateRating ratingsData={reviewData} />
          ) : null}
        </div>
        {/* ************************** */}
        <div className="canvas-footer-website ptb-10">
          <h5>
            <Link
              href="https://nextgrowthlabs.com/?utm_source=rating_projection_calculator_web#form"
              target="_blank"
              rel="noopener noreferrer"
              className="utm-link"
            >
              Contact Us
            </Link>{" "}
            to Rank at Top on App Store
          </h5>
        </div>
      </div>
    </section>
  )
}

export default RatingProjectionCalculator
