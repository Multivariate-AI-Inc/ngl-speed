import React from "react"
import { toast } from "react-toastify"

const WebsiteKeywordsRanks = ({ tableData, onReset }) => {
  
  // Function to reset all
  const resetAll = () => {
    onReset();
  }

  // Function to copy table to clipboard
  const copyTableToClipboard = () => {
    const table = document.querySelector("#suggestions-box table")
    const range = document.createRange()
    range.selectNode(table)
    window.getSelection().removeAllRanges()
    window.getSelection().addRange(range)
    document.execCommand("copy")
    window.getSelection().removeAllRanges() 
    toast.success("Table copied to clipboard.", {autoClose:2000})
  }

  // Function to download the table as a CSV file
  const downloadCsv = () => {
    let csvContent = "S.N.,Keywords,Rank,Website URL\n"
    tableData.forEach((row, index) => {
      csvContent += `${index + 1},${row.key},${row.value},${row.link}\n`
    })

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", "table_data.csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    console.log("CSV file downloaded.")
  }

  return (
    <div>
      <div className="container d-flex justify-content-around mb-40 mt-40 flex-wrap">
        <button
          className="audit-button ptb-10 pr-15 pl-15"
          onClick={resetAll}
        >
          Reset
        </button>
        <button
          className="audit-button ptb-10 pr-15 pl-15"
          onClick={copyTableToClipboard}
        >
          Copy Table
        </button>
        <button
          className="audit-button ptb-10 pr-15 pl-15"
          onClick={downloadCsv}
        >
          Download CSV file
        </button>
      </div>

      <div
        id="suggestions-box"
        className=""
      >
        <div style={{ overflowX: "auto" }}>
          <table>
            <tbody>
              <tr>
                <th>S.N.</th>
                <th>Keywords</th>
                <th>Rank</th>
                <th>Website URL</th>
              </tr>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.key}</td>
                  <td>{row.value}</td>
                  <td>
                    <a
                      href={row.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="color-info"
                    >
                      {row.link}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default WebsiteKeywordsRanks
