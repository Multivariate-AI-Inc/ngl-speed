import Link from "next/link"
import React, { useEffect, useState, useRef } from "react"

const KeywordShuffleTool = () => {
  const [bottomRowVisible, setBottomRowVisible] = useState(false)
  const [inputValues, setInputValues] = useState(["", "", "", ""])
  const [keywordsData, setKeywordsData] = useState([
    { heading: "One word", keywords: [] },
    { heading: "Two words", keywords: [] },
    { heading: "Three words", keywords: [] },
    { heading: "Four words", keywords: [] },
  ])

  const timeoutRef = useRef(null)
  const inputRefs = useRef([])

  useEffect(() => {
    const handleInputChange = () => {
      
      const data = inputRefs.current.map(input => input.value).filter(value => value !== "")
      clearTimeout(timeoutRef.current)

      timeoutRef.current = setTimeout(() => {
        const allKeyword = allCombinations(data)
        updateKeywordsData(allKeyword)
      }, 2000)
    }

    // Attach input event listeners
    inputRefs.current.forEach(input => {
      input.addEventListener("input", handleInputChange)
    })

    // Cleanup on unmount
    return () => {
      inputRefs.current.forEach(input => {
        input.removeEventListener("input", handleInputChange)
      })
    }
  }, [])


  const allCombinations = words => {
    const singleWords = words.map(word => [word])
    const twoWords = []
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        if (i !== j) {
          twoWords.push([words[i] + " " + words[j]])
        }
      }
    }
    const threeWords = []
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        for (let k = 0; k < words.length; k++) {
          if (i !== j && i !== k && j !== k) {
            threeWords.push([words[i] + " " + words[j] + " " + words[k]])
          }
        }
      }
    }
    const fourWords = []
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        for (let k = 0; k < words.length; k++) {
          for (let l = 0; l < words.length; l++) {
            if (
              i !== j &&
              i !== k &&
              i !== l &&
              j !== k &&
              j !== l &&
              k !== l
            ) {
              fourWords.push([
                words[i] + " " + words[j] + " " + words[k] + " " + words[l],
              ])
            }
          }
        }
      }
    }
    return [singleWords, twoWords, threeWords, fourWords]
  }

  const updateKeywordsData = allKeyword => {
    setKeywordsData(prevData =>
      prevData.map((item, index) => ({
        ...item,
        keywords: allKeyword[index]
          ? allKeyword[index].map(value => ({ value, checked: false }))
          : [],
      })),
    )
  }

  const handleCheckboxChange = (headingIndex, keywordIndex) => {
    setKeywordsData(prevData =>
      prevData.map((group, gIndex) => {
        if (gIndex === headingIndex) {
          return {
            ...group,
            keywords: group.keywords.map((keyword, kIndex) =>
              kIndex === keywordIndex
                ? { ...keyword, checked: !keyword.checked }
                : keyword,
            ),
          }
        }
        return group
      }),
    )
  }

  const handleSelectAll = () => {
    setKeywordsData(prevData =>
      prevData.map(group => ({
        ...group,
        keywords: group.keywords.map(keyword => ({
          ...keyword,
          checked: true,
        })),
      })),
    )
  }

  const handleClearSelected = () => {
    setKeywordsData(prevData =>
      prevData.map(group => ({
        ...group,
        keywords: group.keywords.map(keyword => ({
          ...keyword,
          checked: false,
        })),
      })),
    )
  }

  const handleCopyToClipboard = () => {
    const selectedKeywords = keywordsData
      .flatMap(group =>
        group.keywords
          .filter(keyword => keyword.checked)
          .map(keyword => keyword.value),
      )
      .join(", ")

    if (selectedKeywords) {
      navigator.clipboard
        .writeText(selectedKeywords)
        .then(() => alert("Keywords copied to clipboard"))
        .catch(err => console.error("Failed to copy text: ", err))
    } else {
      alert("Please check at least one keyword")
    }
  }

  const handleDownloadToCSV = () => {
    const selectedKeywords = keywordsData.flatMap(group =>
      group.keywords
        .filter(keyword => keyword.checked)
        .map(keyword => keyword.value),
    )

    if (selectedKeywords.length > 0) {
      const csvData = selectedKeywords.join("\n")
      const blob = new Blob([csvData], { type: "text/csv" })
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = "keywords.csv"
      link.click()
      URL.revokeObjectURL(url) // Clean up after download
    } else {
      alert("Please check at least one keyword")
    }
  }

  // ******* dropdown *************
  const handleToggleClick = () => {
    setBottomRowVisible(prev => !prev)
  }

  return (
    <>
      <section
        className="section"
        style={{ backgroundColor: "#E0F1F4" }}
      >
        <div className="container ">
          <div className="row mt-50 mb-5 text-center">
            <p className="tools_tag">Free SEO Tool</p>
            <h1 className="font-4xl-bold color-brand-1 mb-25 mt-20">
              Keyword Shuffle Tool
            </h1>
            <p className="font-md color-grey-500 mb-20">
              Merge and combine keywords to find new long-tail keywords.
            </p>
            <p className="font-md color-grey-500 mb-25">
              Many powerful apps dominate the search results making it hard for
              smaller apps & games to rank for these search terms. However,
              lesser known apps can increase their visibility by ranking on long
              tail keywords. Enter up to 4 words and find new long tail keywords
              that you can target your metadata.
            </p>
            <div className="row m-auto">
              {inputValues.map((value, index) => (
                <div
                  className="col-lg-3 col-sm-6 mb-5"
                  key={index}
                >
                  <input
                    type="text"
                    className="form-control"
                    name={`element${index + 1}`}
                    placeholder={`keyword${index + 1}`}
                    value={value}
                    onChange={e => {
                      const newValues = [...inputValues]
                      newValues[index] = e.target.value
                      setInputValues(newValues)
                    }}
                    ref={el => (inputRefs.current[index] = el)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* ************************** */}
          <div className="content">
            <div id="main-output-box">
              <div className="keyword-display-box text_boxes_input">
                {keywordsData.map((group, index) => (
                  <ul
                    key={index}
                    className="keyword_un_ordered_list"
                  >
                    <li className="font-lg-bold mt-10 mb-10 color-grey-400">
                      {group.heading}
                    </li>
                    {group.keywords.map((keyword, idx) => (
                      <li
                        key={idx}
                        className="font-md mt-5 mb-5"
                      >
                        <label>
                          <input
                            type="checkbox"
                            className="mr-10"
                            checked={keyword.checked}
                            onChange={() => handleCheckboxChange(index, idx)}
                          />
                          {keyword.value}
                        </label>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
          {/* ************************** */}
          <div style={{ borderTop: "2px solid #06d6a0" }}>
            <div className="mt-10">
              <p className="font-md color-grey-400 mb-10">
                How to use the Keyword Shuffle Tool?
              </p>
              <ol
                className="font-sm color-grey-400 ml-20"
                style={{ listStyleType: "decimal" }}
              >
                <li className="mb-5">
                  Type up to 4 words, and we'll generate all possible keyword
                  combinations.
                </li>
                <li>
                  Select the keywords that are the most relevant to your app and
                  export them into a CSV.
                </li>
              </ol>
            </div>
            <div className="mb-50 mt-30">
              <h5>
                Powered by-
                <Link
                  href="https://nextgrowthlabs.com/?utm_source=shuffle_tool_web#form"
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
      <section className="helpful-button">
        <div className="bottom-first-row d-flex gap-5 align-items-center">
          <h6 className="helpful-button-heading">Action</h6>
          <button
            className="dropdown-toggle help-button"
            style={{ width: "40px" }}
            onClick={handleToggleClick}
          />
        </div>
        <div className={`bottom-row ${bottomRowVisible ? "" : "hidden"}`}>
          <button
            className="help-button select_all"
            onClick={handleSelectAll}
          >
            Select All
          </button>
          <button
            className="help-button clear_selected"
            onClick={handleClearSelected}
          >
            Clear Selected
          </button>
          <button
            className="help-button copy_to_clipboard"
            onClick={handleCopyToClipboard}
          >
            Copy to Clipboard
          </button>
          <button
            className="help-button download_csv"
            onClick={handleDownloadToCSV}
          >
            Download As CSV
          </button>
        </div>
      </section>
    </>
  )
}

export default KeywordShuffleTool
