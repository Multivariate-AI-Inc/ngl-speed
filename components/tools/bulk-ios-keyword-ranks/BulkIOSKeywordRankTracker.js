import Link from "next/link"
import React, { useState, useRef, useEffect } from "react"
import Country from "../../aso/elements/Country"
import {
  selectedCountryAtom,
  showSearchApps,
  searchKeyword,
  userSelectedApp,
  showAppSelected,
} from "../../../state/atoms"
import { useAtom } from "jotai"
import { useQuery } from "@tanstack/react-query"
import Loader from "../../elements/Loader"
import DefaultMessage from "../elements/DefaultMessage"
import { toast } from "react-toastify"
import SearchResults from "../../aso/elements/SearchResult"
import ApplicationInfo from "./ApplicationInfo"
import KeywordsTable from "./KeywordsTable"
const BulkIOSKeywordRankTracker = () => {
  const [selectedCountry] = useAtom(selectedCountryAtom)
  const [appSelected, setAppSelected] = useAtom(showAppSelected)
  const [userSelectedAppObject, setUserSelectedAppObject] =
    useAtom(userSelectedApp)
  const [searchAppVisible, setSearchAppVisible] = useAtom(showSearchApps)
  const [searchAppKeyword, setSearchAppKeyword] = useAtom(searchKeyword)
  const [inputFocused, setInputFocused] = useState("")
  const [inputKeywords, setInputKeywords] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)
  const prevKeywordsRef = useRef("")
  const textAriaRef = useRef("")

  // useEffect(() => {
  //   prevKeywordsRef.current = inputKeywords
  // }, [inputKeywords])

  const clearInput = () => {
    setSearchAppKeyword("")
  }

  const handleKeywordsChange = event => {
    let keywords = event.target.value.split(",")
    keywords = keywords
      .filter(element => element.trim() !== "")
      .map(element => element.trim()) // Trim spaces
      .filter((element, index, arr) => arr.indexOf(element) === index)

    setInputKeywords(keywords)
  }

  // query for getting keywords ranks
  const { data, isFetching, isError, isFetched, refetch } = useQuery({
    queryKey: [
      "get bulk apple keywords rank",
      inputKeywords,
      selectedCountry,
      userSelectedAppObject.applicationId,
    ],
    queryFn: () =>
      fetch(`/api/bulk-apple-keywords-rank`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keywords: inputKeywords,
          country: selectedCountry.code,
          applicationId: userSelectedAppObject.applicationId,
        }),
      }).then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        return res.json()
      }),
    staleTime: Infinity,
    cacheTime: 10 * 60 * 1000,
    enabled: false,
    retry: 0,
  })

  const handleSubmit = async () => {
    try {
      let prevKeywords = prevKeywordsRef.current
      if (inputKeywords.length === prevKeywords.length) {
        toast.warning("Please enter new keywords", { autoClose: 2000 })
        return
      }
      prevKeywordsRef.current = inputKeywords
      setIsProcessing(true)
      if (inputKeywords.length <= 0) {
        setIsProcessing(false)
        textAriaRef.current.focus()
        return
      }

      await refetch()
    } catch (error) {
      console.error("Error fetching suggestions:", error)
      toast.error("An error occurred while fetching suggestions", {
        autoClose: 2000,
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <section className="position-relative top-3">
      <div className="container text-center">
        <div className="main-head">
          <h1 className="font-3xl-bold color-brand-1 mb-5 mt-5">
            Bulk iOS Keyword Rank Tracker
          </h1>
        </div>
        <div
          className=""
          id="editor"
        >
          <div className="pr-20 pl-20 ptb-15">
            <p className="font-md color-grey-500 mb-25">
              Welcome to Next Growth Labs, your ultimate solution for efficient
              and comprehensive iOS keyword tracking. Our cutting-edge tool, the
              Bulk iOS Keywords Tracker, empowers app developers and marketers
              to supercharge their app store optimization strategies.
            </p>
            <p className="font-md color-grey-500 mb-25">
              In the dynamic and competitive landscape of the App Store,
              selecting the right keywords is paramount to achieving visibility
              and driving downloads for your iOS app. Our Bulk iOS Keywords
              Tracker simplifies this process by allowing you to effortlessly
              monitor and analyze keyword performance on a large scale.
            </p>
            <p className="font-md color-grey-500 mb-25">
              Gone are the days of manually sifting through data and struggling
              with limited insights. With our tool, you can now easily upload
              and track a multitude of keywords, gaining valuable insights into
              their ranking trends, search volumes, and competition levels.
              Whether you're launching a new app or seeking to enhance the
              visibility of an existing one, our tracker provides you with
              actionable data to refine your ASO strategy and stay ahead in the
              market.
            </p>
            <p className="font-md color-grey-500 mb-25">
              Join countless successful app developers who have already
              harnessed the power of our Bulk iOS Keywords Tracker to optimize
              their app's discoverability and drive sustainable growth. Elevate
              your ASO game with Next Growth Labs today.
            </p>
          </div>

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
                  placeholder="Search and select your app"
                  value={
                    appSelected
                      ? userSelectedAppObject.applicationId
                      : searchAppKeyword
                  }
                  onFocus={() => {
                    setInputFocused(prev => {
                      return {
                        ...prev,
                        ["bulk-ios-search-box"]: true,
                      }
                    })
                  }}
                  onChange={e => {
                    if (appSelected) {
                      setAppSelected(false)
                      setUserSelectedAppObject(null)
                    }
                    if (e.target.value.trim().length === 0) {
                      setSearchAppVisible({})
                    }
                    setSearchAppKeyword(e.target.value)
                    setSearchAppVisible(prev => {
                      return {
                        ...prev,
                        ["bulk-ios-search-box"]: true,
                      }
                    })
                  }}
                />
                {inputFocused["bulk-ios-search-box"] && (
                  <button
                    id="close-search-form1"
                    className="close-search-form"
                    onClick={() => {
                      setSearchAppVisible({})
                      setInputFocused({})
                      clearInput()
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      version="1.1"
                    >
                      <g id="surface1">
                        <path
                          style={{
                            fill: "#5a5a5c",
                            fillRule: "nonzero",
                            fillOpacity: 1,
                            stroke: "none",
                          }}
                          d="M 0.332031 0.332031 C 0.546875 0.121094 0.839844 -0.00390625 1.144531 -0.00390625 C 1.445312 -0.00390625 1.738281 0.121094 1.953125 0.332031 L 8 6.382812 L 14.046875 0.332031 C 14.496094 -0.113281 15.21875 -0.113281 15.667969 0.332031 C 16.113281 0.78125 16.113281 1.503906 15.667969 1.953125 L 9.617188 8 L 15.667969 14.046875 C 16.113281 14.496094 16.113281 15.21875 15.667969 15.667969 C 15.21875 16.113281 14.496094 16.113281 14.046875 15.667969 L 8 9.617188 L 1.953125 15.667969 C 1.503906 16.113281 0.78125 16.113281 0.332031 15.667969 C -0.113281 15.21875 -0.113281 14.496094 0.332031 14.046875 L 6.382812 8 L 0.332031 1.953125 C 0.121094 1.738281 -0.00390625 1.445312 -0.00390625 1.144531 C -0.00390625 0.839844 0.121094 0.546875 0.332031 0.332031 Z M 0.332031 0.332031 "
                        ></path>
                      </g>
                    </svg>
                  </button>
                )}
              </div>

              <div className="app-output-box">
                {searchAppVisible["bulk-ios-search-box"] && (
                  <SearchResults storeType={"app"} />
                )}
              </div>
            </div>

            <div>
              <Country />
            </div>
          </div>
          {appSelected && <ApplicationInfo appData={userSelectedAppObject} />}
          <div className="ios-rank-textarea">
            <textarea
              name="keywords"
              id="keywords-textbox"
              cols="30"
              rows="6"
              placeholder="Enter keywords here"
              onChange={handleKeywordsChange}
              ref={textAriaRef}
            ></textarea>

            <div className="text-center">
              <small>Separate each keywords with comma(,).</small>
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="submit"
                className="audit-button ptb-15 pl-15 pr-15 mt-20"
                onClick={handleSubmit}
                disabled={isProcessing}
              >
                Get Ranks
              </button>
            </div>
          </div>
          {isFetching ? (
            <div className="mb-50 mt-10">
              <Loader />
            </div>
          ) : isFetched && data ? (
            <KeywordsTable data={data} />
          ) : isError ? (
            <DefaultMessage
              message={
                "We are currently experiencing high traffic. Please try again later!"
              }
            />
          ) : null}
        </div>
        {/* ************************** */}
        <div className="canvas-footer-website ptb-10">
          <h5>
            <Link
              href="https://nextgrowthlabs.com/?utm_source=bulk_ios_tracker_web#form"
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

export default BulkIOSKeywordRankTracker
