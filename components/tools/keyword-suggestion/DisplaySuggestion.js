import React from "react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "react-toastify"

const DisplaySuggestion = ({ suggestions, selectedSource }) => {
  const downloadCsv = () => {
    const suggestionsDiv = document.getElementById(
      `suggestions-box-${selectedSource}`,
    )
    const table = suggestionsDiv.querySelector("table")
    const keywordCheckboxes = table.querySelectorAll(
      'input[type="checkbox"]:not(#selectAllCheckbox)',
    )
    const selectedSuggestions = []
    keywordCheckboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        selectedSuggestions.push(suggestions[index])
      }
    })
    if (selectedSuggestions.length > 0) {
      downloadCsvFile(selectedSuggestions)
    } else {
      // console.log("No suggestions selected for download.")
      toast.error("Please select keywords first!", { autoClose: 2000 })
    }
  }

  // Helper function to create and download the CSV file
  const downloadCsvFile = data => {
    const csvContent =
      "data:text/csv;charset=utf-8," + data.map(e => e).join("\n")
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", "suggestions.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Function to handle "Select All" checkbox
  const handleSelectAll = e => {
    const checkboxes = document.querySelectorAll(".suggestion-checkbox")
    checkboxes.forEach(checkbox => {
      checkbox.checked = e.target.checked
    })
  }
  // get Image Src
  const getImageSrc = () => {
    switch (selectedSource) {
      case "play":
        return "https://tools.nextgrowthlabs.com/wp-includes/images/Local-img/google-play-store.svg"
      case "apple":
        return "https://tools.nextgrowthlabs.com/wp-includes/images/Local-img/app-store.svg"
      case "bing":
        return "https://tools.nextgrowthlabs.com/wp-includes/images/Local-img/bing-50.svg"
      case "google":
        return "https://tools.nextgrowthlabs.com/wp-includes/images/Local-img/google-50.svg"
      case "youtube":
        return "https://tools.nextgrowthlabs.com/wp-includes/images/Local-img/youtube.svg"
      case "amazon":
        return "https://tools.nextgrowthlabs.com/wp-includes/images/Local-img/Amazon_icon.png"
      case "yandex":
        return "https://tools.nextgrowthlabs.com/wp-includes/images/Local-img/Yandex.png"
    }
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <button
          className="ptb-10 pl-15 pr-15"
          onClick={downloadCsv}
          style={{ display: "block" }}
          id="copy-button"
        >
          Download CSV file
        </button>
      </div>
      <div id={`suggestions-box-${selectedSource}`}>
        <table>
          <thead>
            <tr>
              <th style={{ width: "25px" }}>
                <input
                  type="checkbox"
                  id="selectAllCheckbox"
                  onChange={handleSelectAll}
                />
              </th>
              <th className="d-flex justify-content-center gap-10">
                <span>Suggestions</span>
                <Image
                  src={getImageSrc()}
                  alt={`${selectedSource} Icon`}
                  width={20}
                  height={20}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {suggestions.map((suggestion, index) => (
              <tr key={index}>
                <td style={{ width: "25px" }}>
                  <input
                    type="checkbox"
                    className="suggestion-checkbox"
                  />
                </td>
                <td>{suggestion}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="last-li-element mt-40">
          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="audit-button ptb-10 pl-15 pr-15"
            style={{ borderRadius: "8px" }}
          >
            Get Demo
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DisplaySuggestion
