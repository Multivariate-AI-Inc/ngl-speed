import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"
import PageSpeedTable from "./PageSpeedTable"
import Loader from "../../elements/Loader"
import PageSpeedScoringCalculator from "./PageSpeedScoringCalculator"
import DefaultMessage from "../elements/DefaultMessage"



function Home() {
  const [urlsInput, setUrlsInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [mainData, setMainData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()

    if (urlsInput.trim() === "") {
      alert("Please enter at least one URL.")
      toast.warning("Please enter at least one URL.", { autoClose: 2000 })
      return
    }
    setIsLoading(true)
    setIsError(false)
    setIsProcessing(true)
    setMainData([])
    let urlArray = urlsInput.split("\n").map(str => str.trim())
    let listURLs = urlArray.filter(str => str.trim() !== "")
    const sendToPageSpeed = listURLs.slice(0, 7)
    try {
      const mainData = await getPageSpeedData(sendToPageSpeed)
      // console.log("Main data", mainData)
      setMainData(mainData)
      setIsLoading(false)
      setIsProcessing(false)
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
      setIsProcessing(false)
      console.log("Error", error)
    }
  }


// ************** utility functions for page speed assessment tool ***************
async function getPageSpeedData(urls) {
  window["desktopDevice"] = false
  window["mobileDevice"] = false

  const getModifiedURLs = (urls, strategy) => {
    return urls.map(url => {
      const httpUrl = addHttpPrefix(url)
      return `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
        httpUrl,
      )}&strategy=${strategy}`
    })
  }

  const urlsDesktop = getModifiedURLs(urls, "DESKTOP")
  const urlsMobile = getModifiedURLs(urls, "MOBILE")
  const allURLsArray = [...urlsDesktop, ...urlsMobile]
  // console.log("all urls", allURLsArray)

  // Return a Promise from the getPageSpeedData function
  return Promise.all(
    allURLsArray.map(url => fetch(url).then(response => response.json())),
  )
    .then(responses => {
      const myCWVData = generateResult(responses)
      // console.log("MyCWVData", myCWVData)
      return myCWVData // Returning the result so that the calling function can use it
    })
    .catch(error => {
      console.error("Error fetching PageSpeed data:", error)
      throw error
    })
}
const generateResult = responses => {
  const responseResults = responses.map(items => {
    const url = items.id
    const strategy = items.lighthouseResult.configSettings.emulatedFormFactor
    let fcp, lcp, cls, inp
    const lighthouseMetrics = {}
    if (items.loadingExperience) {
      const metrics = items.loadingExperience.metrics
      fcp = metrics?.FIRST_CONTENTFUL_PAINT_MS?.percentile || "N/A"
      inp = metrics?.INTERACTION_TO_NEXT_PAINT?.percentile || "N/A"
      lcp = metrics?.LARGEST_CONTENTFUL_PAINT_MS?.percentile || "N/A"
      cls = metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile || "N/A"

      const audits = items.lighthouseResult.audits
      lighthouseMetrics.FCP =
        audits["first-contentful-paint"].numericValue.toFixed(0)
      lighthouseMetrics.SI = audits["speed-index"].numericValue.toFixed(0)
      lighthouseMetrics.TBT =
        audits["total-blocking-time"].numericValue.toFixed(0)
      lighthouseMetrics.LCP =
        audits["largest-contentful-paint"].numericValue.toFixed(0)
      lighthouseMetrics.CLS =
        audits["cumulative-layout-shift"].numericValue.toFixed(3)
      lighthouseMetrics.device = strategy
      // const domain = url.split('//')[1].split('/')[0];
      if (!window[strategy + "Device"]) {
        window[strategy + "Device"] = true
        // showLighthouseContent(lighthouseMetrics, url)
        
        const newSiteData = {}
        newSiteData[url] = lighthouseMetrics
        localStorage.setItem(strategy, JSON.stringify([newSiteData]), 100000)
      } else {
        let oldAppData = localStorage.getItem(strategy)
        if (oldAppData) {
          let Array = JSON.parse(oldAppData)
          const newSiteData = {}
          newSiteData[url] = lighthouseMetrics
          Array.unshift(newSiteData)
          let uniqueArray = Array.filter(
            (item, index) =>
              Array.findIndex(
                obj => JSON.stringify(obj) === JSON.stringify(item),
              ) === index,
          )
          localStorage.setItem(strategy, JSON.stringify(uniqueArray))
        } else {
          const newSiteData = {}
          newSiteData[url] = lighthouseMetrics
          localStorage.setItem(strategy, JSON.stringify([newSiteData]), 100000)
        }
      }
    } else {
      fcp = lcp = cls = fid = "N/A"
    }
    let webVitalsResult = showVitalsResult(items)
    const responseData = {
      url: url,
      strategy: strategy,
      FCP: fcp,
      LCP: lcp,
      CLS: cls,
      INP: inp,
      result: webVitalsResult,
    }
    return responseData
  })
  // createSiteSelectBoxOptions(responses)
  return responseResults
}

function addHttpPrefix(url) {
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "http://" + url
  }
  return url
}
function showLighthouseContent(cwvData, domain) {
  const DefaultDevice = document.querySelector("select#device").value
  if (DefaultDevice == cwvData.device) {
    changeChart(cwvData)
  }
}

function showVitalsResult(json) {
  const metrics = json.loadingExperience.metrics
  let desktopVitalResult = ""
  let clsScore = metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile || 40
  let lcpScore = metrics?.LARGEST_CONTENTFUL_PAINT_MS?.percentile || 5000
  let inpScore = metrics?.INTERACTION_TO_NEXT_PAINT?.percentile || 0
  if (lcpScore == 0 && inpScore == 0 && clsScore == 0) {
    desktopVitalResult = "N/A"
  } else if (lcpScore <= 2500 && inpScore <= 200 && clsScore <= 10) {
    desktopVitalResult = "Passed"
  } else {
    desktopVitalResult = "Failed"
  }
  return desktopVitalResult
}


  return (
    <>
      <section className="position-relative top-3">
        <div className="container text-center">
          <div className="main-head">
            <h1 className="font-3xl-bold color-brand-1 mb-5 mt-5">
              Page Speed Assessment
            </h1>
          </div>
          <div id="editor">
            <div
              id="bulk-ios-search-box"
              className="aso-input-form mb-25 main-box-holder"
            ></div>
            <div className="ios-rank-textarea">
              <textarea
                name="keywords"
                id="keywords-textbox"
                cols="30"
                rows="6"
                placeholder="Enter website urls here"
                value={urlsInput}
                onChange={e => setUrlsInput(e.target.value)}
              ></textarea>

              <div className="text-center color-grey-400">
                <small>Note: The URL should be listed one by one</small>
              </div>
              <div className="d-flex justify-content-end">
                <button
                  type="submit"
                  className="audit-button ptb-15 pl-15 pr-15 mt-20"
                  onClick={handleSubmit}
                  disabled={isProcessing}
                >
                  Analyze
                </button>
              </div>
            </div>
            {/* render main data */}
            {isLoading && (
              <div className="mtb-40">
                <Loader />
              </div>
            )}
            {
              isError && <DefaultMessage message={"Something went wrong, Please again later"} customClass={"color-danger"} />
            }
            {mainData.length !== 0 && <PageSpeedTable objectData={mainData} />}
          </div>
          {/* ************************** */}
          <div className="canvas-footer-website ptb-10 justify-content-start">
            <h5>
              <Link
                href="https://nextgrowthlabs.com/contact?utm_source=bulk_ios_tracker_web#form"
                target="_blank"
                rel="noopener noreferrer"
                className="utm-link"
              >
                Contact Us
              </Link>{" "}
              to Fix Your Site Speed
            </h5>
          </div>
        </div>
      </section>
      <PageSpeedScoringCalculator response={mainData} />
    </>
  )
}

export default Home
