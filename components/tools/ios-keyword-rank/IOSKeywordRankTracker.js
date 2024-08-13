import React, { useState, useRef } from "react"
import Country from "../../aso/elements/Country"
import Link from "next/link"
import { selectedCountryAtom } from "../../../state/atoms"
import { useAtom } from "jotai"
import { useQuery } from "@tanstack/react-query"
import Loader from "../../elements/Loader"
import DefaultMessage from "../elements/DefaultMessage"
import { toast } from "react-toastify"
import AppDetails from "./AppDetails"
const IOSKeywordRankTracker = () => {
  const [selectedCountry] = useAtom(selectedCountryAtom)
  const [searchKeyword, setSearchKeyword] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const prevSerpSearchRef = useRef("")
  const serpInputRef = useRef()
  const { data, isFetching, isError, isFetched, refetch } = useQuery({
    queryKey: ["get iOS keyword rank", searchKeyword, selectedCountry],
    queryFn: () => 
      fetch(`/api/ios-keyword-rank`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          keyword: searchKeyword,
          country: selectedCountry.code,
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
      const prevKeyword = prevSerpSearchRef.current
      if (searchKeyword === prevKeyword) {
        toast.warning("Please enter a new keyword", { autoClose: 2000 })
        return
      }
      prevSerpSearchRef.current = searchKeyword
      setIsProcessing(true)
      if (searchKeyword.length <= 1) {
        setIsProcessing(false)
        serpInputRef.current.focus()
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
                IOS Keyword Search
              </h1>
              <p className="font-md color-grey-500 mb-25">
                Introducing the iOS Keyword Rank tool by NextGrowth Labs, a
                powerful solution designed to help you optimize your app's
                visibility on the App Store. With over 30 apps competing for a
                particular keyword, it can be challenging to stand out and
                attract users. This is where our tool comes in.
              </p>
              <p className="font-md color-grey-500 mb-25">
                Our iOS Keyword Rank tool enables you to track the ranking of
                your app for specific keywords and phrases, giving you valuable
                insights into how your app is performing against its
                competitors. With accurate and up-to-date data, you can make
                informed decisions on which keywords to target and how to
                optimize your app's metadata to improve its visibility and
                increase downloads.
              </p>
              <p className="font-md color-grey-500 mb-25">
                Whether you're a seasoned app developer or just starting, our
                iOS Keyword Rank tool can help you take your app's visibility to
                the next level. Try it out today and see the results for
                yourself!
              </p>

              <div className="aso-input-form mb-25 main-box-holder">
                <div className="search-box-suggestion">
                  <div className="main-search-bar">
                    <input
                      type="text"
                      autoComplete="off"
                      id="search-bar-input1"
                      className="search-input"
                      placeholder="Enter the keyword here"
                      value={searchKeyword}
                      onChange={e => setSearchKeyword(e.target.value)}
                      ref={serpInputRef}
                      
                    />
                  </div>
                </div>
                <div>
                  <Country />
                </div>

                <button
                  type="submit"
                  className="audit-button ptb-15 pl-15 pr-15 mt-20"
                  onClick={handleSubmit}
                  disabled={isProcessing}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* ************************** */}

          {isFetching ? (
            <div className="mb-40 mt-40">
              <Loader />
            </div>
          ) : isFetched && data ? (
            <AppDetails data={data} />
          ) : isError ? (
            <DefaultMessage
              message={
                "We are currently experiencing high traffic. Please try again later!"
              }
            />
          ) : null}
          {/* ************************** */}
          <div className="mb-40 mt-30">
            <h5>
              <Link
                href="https://nextgrowthlabs.com/?utm_source=ios_keyword_search_web"
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
    </>
  )
}

export default IOSKeywordRankTracker
