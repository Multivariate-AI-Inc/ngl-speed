import Link from "next/link"
import { useState } from "react"
import { toast } from "react-toastify"
import { getPageSpeedData } from "../../utils"
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
              isError && <DefaultMessage message={"Something went wrong, Please again later"} />
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
