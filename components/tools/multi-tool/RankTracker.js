import React, { useEffect, useState, useRef } from "react"
import Country from "../../aso/elements/Country"
import PlateFormTabs from "../elements/PlateFormTabs"
import Link from "next/link"
import { selectedCountryAtom } from "../../../state/atoms"
import { useAtom } from "jotai"
import { useQuery } from "@tanstack/react-query"
import Loader from "../../elements/Loader"
import DefaultMessage from "../elements/DefaultMessage"
import AppRanks from "./AppRanks"
import SerpInfo from "./SerpInfo"
import { toast } from "react-toastify"
const RankTracker = () => {
  const [selectedCountry] = useAtom(selectedCountryAtom)
  const [selectedSource, setSelectedSource] = useState("play")
  const [searchKeyword, setSearchKeyword] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const prevSerpSearchRef = useRef({
    google: "",
    bing: "",
    play: "",
    apple: "",
  })
  const serpInputRef = useRef()

  // source queries
  const formattedKeyword = searchKeyword.split(" ").join("+")
  const tabQueries = [
    // Play store queries
    useQuery({
      queryKey: ["get playStore Data", searchKeyword, selectedCountry.code],
      queryFn: () =>
        fetch(
          `/api/multi-tool/play-request?keyword=${encodeURIComponent(
            searchKeyword,
          )}&country=${selectedCountry.code}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        ).then(res => res.json()),
      staleTime: Infinity,
      cacheTime: 10 * 60 * 1000,
      enabled: false,
    }),
    // Apple store queries
    useQuery({
      queryKey: ["get appleStore Data", searchKeyword, selectedCountry.code],
      queryFn: () =>
        fetch(
          `/api/multi-tool/apple-request?keyword=${encodeURIComponent(
            searchKeyword,
          )}&country=${selectedCountry.code}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        ).then(res => res.json()),
      staleTime: Infinity,
      cacheTime: 10 * 60 * 1000,
      enabled: false,
    }),
    // Google queries
    useQuery({
      queryKey: ["get gSERP Data", searchKeyword, selectedCountry.code],
      queryFn: () =>
        fetch(
          `/api/multi-tool/google-request?keyword=${encodeURIComponent(
            searchKeyword,
          )}&country=${selectedCountry.code}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        ).then(res => res.json()),
      staleTime: Infinity,
      cacheTime: 10 * 60 * 1000,
      enabled: false,
    }),
    //for Bing queries..
    useQuery({
      queryKey: [
        "get bingSERP Data",
        searchKeyword,
        selectedCountry.code,
        formattedKeyword,
      ],
      queryFn: () =>
        fetch(
          `/api/multi-tool/bing-request?keyword=${formattedKeyword}&country=${selectedCountry.code}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        ).then(res => res.json()),
      staleTime: Infinity,
      cacheTime: 10 * 60 * 1000,
      enabled: false,
    }),
  ]

  // handle serp tool submission
  const handleSubmit = async () => {
    const prevKeyword = prevSerpSearchRef.current[selectedSource]
    if (searchKeyword === prevKeyword) {
      toast.warning("Please enter a new keyword", { autoClose: 2000 })
      return
    }
    prevSerpSearchRef.current[selectedSource] = searchKeyword
    setIsProcessing(true)
    if (searchKeyword.length <= 1) {
      setIsProcessing(false)
      serpInputRef.current.focus()
      return
    }
    switch (selectedSource) {
      case "play":
        await tabQueries[0].refetch()
        break
      case "apple":
        await tabQueries[1].refetch()
        break
      case "google":
        await tabQueries[2].refetch()
        break
      case "bing":
        await tabQueries[3].refetch()
        break
    }
    setIsProcessing(false)
  }

  return (
    <>
      <section
        className="section"
        style={{ backgroundColor: "#E0F1F4" }}
      >
        <div className="container text-center">
          <div className="row mt-50">
            <div className="col-xl-8 col-lg-10 m-auto">
              {/* <p className="tools_tag mb-10">Free SEO Tool</p> */}
              <h1 className="font-4xl-bold color-brand-1 mb-25">
                Search & App Rank Tracker
              </h1>
              <p className="font-md color-grey-500 mb-25">
                Introducing the 'Search & App Rank Tracker' tool by Next Growth
                Labs! Stay on top of your online presence and app rankings
                effortlessly with our comprehensive platform.
              </p>
              <p className="font-md color-grey-500 mb-25">
                Our tool aggregates the top 10 search results from both Google
                and Bing, giving you valuable insights into your website's
                performance and visibility across two of the largest search
                engines on the internet. Whether you're a digital marketer, SEO
                enthusiast, or website owner, this tool provides you with a
                quick snapshot of your online presence.
              </p>
              {/* <p className="font-md color-grey-500 mb-25">
                But that's not all! We also fetch the top 10 results from the
                iOS App Store and Google Play Store, allowing you to monitor
                your mobile app's position in the rankings. Keep an eye on your
                app's performance, track competitors, and make data-driven
                decisions to optimize your app's discoverability.
              </p> */}
              {/* <p className="font-md color-grey-500 mb-25">
                With our Search & App Rank Tracker, you'll have the competitive
                edge you need to improve your online and mobile presence. Try it
                today and unlock the power of data-driven decision-making!
              </p> */}
              <div className="aso-input-form mb-25 main-box-holder">
                <div className="search-box-suggestion">
                  <div className="main-search-bar">
                    <input
                      type="text"
                      autoComplete="off"
                      id="search-bar-input1"
                      className="search-input"
                      placeholder="Search your keyword"
                      value={searchKeyword}
                      onChange={e => setSearchKeyword(e.target.value)}
                      ref={serpInputRef}
                    />
                  </div>
                </div>
                <div>
                  <Country />
                </div>
              </div>
              {/* ******** suggestion tabs *********** */}
              <PlateFormTabs
                setSelectedSource={setSelectedSource}
                tabIds={["play", "apple", "bing", "google"]}
              />
              {/* *********************************** */}
              {/* ReCaptcha */}
              {/* <div className="d-flex justify-content-center mt-20">
                    <ReCaptcha
                      onChange={handleChange}
                      onExpired={handleExpired}
                    />
                  </div> */}

              {/* **************************** */}
              <button
                type="submit"
                className="audit-button ptb-15 pl-15 pr-15 mt-20"
                onClick={handleSubmit}
                disabled={isProcessing}
              >
                Get Details
              </button>
            </div>
          </div>

          {/* ************************** */}

          {/* Google data */}
          {selectedSource === "google" && (
            <>
              {tabQueries[2].isFetching ? (
                <div className="mb-40 mt-40">
                  <Loader />
                </div>
              ) : tabQueries[2].data ? (
                <>
                  {/* {showSignUpButton.serp && <GoogleSignInButton />} */}
                  <SerpInfo
                    data={tabQueries[2].data}
                    id={"Google"}
                  />
                </>
              ) : (
                <DefaultMessage
                  message={
                    "Enter keywords and click search now to discover your Google rankings!"
                  }
                />
              )}
            </>
          )}
          {/* Bing data */}
          {selectedSource === "bing" && (
            <>
              {tabQueries[3].isFetching ? (
                <div className="mb-40 mt-40">
                  <Loader />
                </div>
              ) : tabQueries[3].data ? (
                <>
                  {/* {showSignUpButton.serp && <GoogleSignInButton />} */}
                  <SerpInfo
                    data={tabQueries[3].data}
                    id={"Bing"}
                  />
                </>
              ) : (
                <DefaultMessage
                  message={
                    "Enter keywords and click search now to discover your Bing rankings!"
                  }
                />
              )}
            </>
          )}
          {/* play data */}
          {selectedSource === "play" && (
            <>
              {tabQueries[0].isFetching ? (
                <div className="mb-40 mt-40">
                  <Loader />
                </div>
              ) : tabQueries[0].data ? (
                <>
                  {/* {showSignUpButton.serp && <GoogleSignInButton />} */}
                  <AppRanks
                    data={tabQueries[0].data}
                    device={"android"}
                  />
                </>
              ) : (
                <DefaultMessage
                  message={
                    "Enter keywords and click search now to discover your Play store rankings!"
                  }
                />
              )}
            </>
          )}
          {/* Apple data  */}
          {selectedSource === "apple" && (
            <>
              {tabQueries[1].isFetching ? (
                <div className="mb-40 mt-40">
                  <Loader />
                </div>
              ) : tabQueries[1].data ? (
                <>
                  {/* {showSignUpButton.serp && <GoogleSignInButton />} */}
                  <AppRanks
                    data={tabQueries[1].data}
                    device={"apple"}
                  />
                </>
              ) : (
                <DefaultMessage
                  message={
                    "Enter keywords and click search now to discover your Apple store rankings!"
                  }
                />
              )}
            </>
          )}
          {/* ************************** */}
          <div className="mb-40 mt-30">
            <h5>
              Powered by-
              <Link
                href="https://nextgrowthlabs.com/?utm_source=multi_tool_web"
                target="_blank"
                rel="noopener noreferrer"
                className="utm-link"
              >
                NextGrowth Lab
              </Link>
            </h5>
          </div>
        </div>
      </section>
    </>
  )
}

export default RankTracker
