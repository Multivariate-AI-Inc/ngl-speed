import React, { useState, useRef } from "react"
import {
  syllablesTotal,
  keywordChanges,
  generateMaxScore,
  findMatchedValues,
  includedToString,
  notIncludedToString,
} from "../../utils"
import TableComponent from "./TableComponent"
import Loader from "../../elements/Loader"
import { toast } from "react-toastify"

const ContentAssistTool = () => {
  const [readingTime, setReadingTime] = useState("")
  const [readabilityScore, setReadabilityScore] = useState("")
  const [charCount, setCharCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [recommendationsScore, setRecommendationsScore] = useState(0)
  const [keywords, setKeywords] = useState("")
  const [notIncluded, setNotIncluded] = useState("")
  const [included, setIncluded] = useState("")
  const timeoutID = useRef(null)
  const userInputRef = useRef(null)
  const [tableData, setTableData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleTextAreaChange = e => {
    // setUserContent(e.target.value)
    const text = e.target.value
    setCharCount(text.length)
    let wordCount = text.split(/\s+/).filter(Boolean).length
    const sentenceCount = text.trim().split(/[\.!\?]+\s/).length
    const syllableCount = syllablesTotal(text)
    const avgSyllablesPerWord = syllableCount / wordCount
    const avgWordsPerSentence = wordCount / sentenceCount
    let readabilityScore =
      206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord
    readabilityScore = Math.max(0, Math.min(100, readabilityScore))
    const reading = Math.ceil(wordCount / 3.3)
    let min = Math.ceil(reading / 60)
    let sec = Math.ceil(reading % 60)
    if (wordCount > 100) setReadingTime(min + "min" + " " + sec + "sec")
    else if (wordCount > 25) setReadingTime("30 Sec")
    else setReadingTime("0")
    if (text.trim() == "") {
      readabilityScore = 0.0
      wordCount = 0
    }
    setReadabilityScore(readabilityScore.toFixed(2))
    setWordCount(wordCount)
    colorCode(readabilityScore)
    // Update reading time, readability score, etc.
  }

  const handleKeywordsSubmit = () => {
    let values = keywords
    let keyword = keywordChanges(values)
    clearInterval(timeoutID.current)
    poll(2000, keyword)
  }

  function poll(interval, keyword) {
    interval = interval || 2000
    timeoutID.current = setInterval(async () => {
      let content = await domChanges(keyword)
      setIncluded(content[0])
      setNotIncluded(content[1])
      let score = generateMaxScore(keyword)
      generateIncludedScoreAndStore(content[0], score)
    }, interval)
  }

  // dom changes
  async function domChanges(keyword) {
    let userInput = ""
    if (userInputRef.current) {
      userInput = userInputRef.current.value
    }
    let findValues = await findMatchedValues(keyword, userInput)
    let includedContent = includedToString(findValues)
    let notIncludedContent = notIncludedToString(findValues)
    return [includedContent, notIncludedContent]
  }

  // clear box
  const handleClearBox = () => {
    clearInterval(timeoutID.current)
    setKeywords("")
    setNotIncluded("")
    setIncluded("")
  }

  // color codes
  function colorCode(percentage) {
    let value = Math.ceil(percentage / 10)
    if (value == 0) value = 1
    let color_code_range = {
      1: "#FF0000",
      2: "#E55451",
      3: "#F67280",
      4: "#FFFFE0",
      5: "#FFE87C",
      6: "#FFDB58",
      7: "#F6BE00",
      8: "#08A04B",
      9: "#4E9258",
      10: "#3A5F0B",
    }
    return color_code_range[value]
  }

  const parseCSV = (csvString) => {
    const [headerLine, ...lines] = csvString.split("\n");
    const headers = headerLine.split(",");

    return lines
      .filter(line => line.trim() !== "") // Filter out empty lines
      .map(line => {
        const values = line.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/); // Handles commas inside quotes

        // Create an object for each row and match values to headers
        return headers.reduce((obj, header, index) => {
          const value = values[index] !== undefined ? values[index].replace(/(^"|"$)/g, "").trim() : ""; // Default to empty string if undefined
          obj[header.trim()] = value;
          return obj;
        }, {});
      })
      .filter(row => Object.values(row).some(value => value !== "")); // Filter out rows with only empty values
  };

  // generate included score and store
  function generateIncludedScoreAndStore(data, scores) {
    let score = 0
    const keywordsObj = scores.keywordScore
    for (const key in keywordsObj) {
      if (data.includes(" " + key + " (")) {
        score += keywordsObj[key]
      }
    }
    const finalScore = ((score / scores.maxPowerScore) * 100).toFixed(2)
    setRecommendationsScore(finalScore + "%")
  }

  const handlePlagiarismCheck = async () => {
    let confirmation = confirm(
      "Are you sure you want to check whether similar text appears elsewhere on the web?",
    )
    if (confirmation) {
      setLoading(true)
      setError(null)
      try {
        // Hide previous table if exists
        setTableData(null)

        let userContent = ""
        if (userInputRef.current) {
          userContent = userInputRef.current.value
        }
        let words = userContent.split(" ")
        let firstPart = words.slice(0, 100).join(" ")
        let input = firstPart
        let data = { input: input }
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
        const response = await fetch("/api/plagiarism-detector", requestOptions)
        const result = await response.json()
        const jsonData = await parseCSV(result)
        setTableData(jsonData)
      } catch (error) {
        console.error(error)
        // alert("Something went Wrong!")
        setError("Something went Wrong! Please try again")
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <>
      <div
        className="container"
        style={{ padding: "54px 20px" }}
      >
        <div className="mt-20 content-header">
          <h1 className="font-2xl-bold  color-brand-1 text-center">
            SEO and ASO Keyword Content Writing Assistant
          </h1>
        </div>
        <div className="tool-row">
          <div className="content-left-side-main">
            <h5 className="mb-10 color-brand-1">Enter content below</h5>
            <div className="d-flex mb-20 content-subtitiles">
              <p className="read">
                Reading Time:{" "}
                <span className="font-sm-bold color-brand-1">{readingTime}</span>
              </p>
              <p className="read">
                Readability Score:{" "}
                <span className="font-sm-bold color-brand-1">{readabilityScore}</span>
                <span
                  className="square"
                  style={{ backgroundColor: colorCode(readabilityScore) }}
                ></span>
              </p>
              <p className="read">
                Implementation Score:{" "}
                <span className="font-sm-bold color-brand-1">
                  {recommendationsScore}
                </span>
              </p>
            </div>
            <textarea
              className="textAreaFontSize SB-textarea"
              id="text-box"
              rows="15"
              style={{ height: "70%" }}
              onChange={e => {
                handleTextAreaChange(e)
              }}
              ref={userInputRef}
              aria-label="Write your content here...">
            </textarea>
            <div className="main-sub-options">
              <p className="font-sm-bold color-brand-1">
                Characters: <span className="font-lg-bold">{charCount}</span>
              </p>
              <p className="font-sm-bold color-brand-1">
                Words: <span className="font-lg-bold">{wordCount}</span>
              </p>
            </div>
          </div>
          <div className="content-right-side">
            <div>
              <label
                htmlFor="keywords"
                className="textbox-title"
              >
                Keywords
              </label>
              <textarea
                className="textAreaFontSize"
                id="text-keywords"
                rows="4"
                value={keywords}
                onChange={e => setKeywords(e.target.value)}
                spellCheck={false}
                aria-label="Enter keywords..."
              ></textarea>
              <input
                type="button"
                className="textAreaFontSize sub-button font-lg-bold"
                value="Submit"
                onClick={handleKeywordsSubmit}
              />
            </div>
            <div>
              <label
                htmlFor="not-included"
                className="textbox-title"
              >
                Not Included
              </label>
              <textarea
                className="textAreaFontSize"
                disabled
                id="not-included"
                rows="4"
                value={notIncluded}
                aria-label="Not included keywords"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="included"
                className="textbox-title"
              >
                Included
              </label>
              <textarea
                className="textAreaFontSize"
                disabled
                id="included"
                rows="4"
                value={included}
                aria-label="Included Keywords"
              ></textarea>
              <input
                type="button"
                className="textAreaFontSize sub-button font-lg-bold"
                value="Clear"
                onClick={handleClearBox}
              />
            </div>
          </div>
        </div>
        <div className="d-flex mb-10 content-footer">
          <h6>
            Powered by{" "}
            <a
              href="https://nextgrowthlabs.com/?utm_source=content_assist_web#form"
              target="_blank"
              rel="noopener noreferrer"
              className="utm-link"
            >
              NextGrowth Labs
            </a>
          </h6>
          <button
            className="audit-button"
            style={{ padding: "10px 20px", borderRadius: "4px" }}
            onClick={handlePlagiarismCheck}
          >
            Plagiarism Detector
          </button>
        </div>
      </div>
      {loading && (
        <div className="mt-40 mb-40">
          <Loader />{" "}
        </div>
      )}
      {
        error && (
          <p className="font-2xl-bold color-grey-400 text-center">
            Something went wrong!! Please try again....
          </p>
        )
      }
      <div
        id="table-container"
        className={tableData || error ? "" : "hidden"}
      >
        {error && (
          <div className="high-demand">
            <p className="high-demand">{error}</p>
          </div>
        )}
        {tableData && <TableComponent tableData={tableData} />}
      </div>
    </>
  )
}
export default ContentAssistTool
