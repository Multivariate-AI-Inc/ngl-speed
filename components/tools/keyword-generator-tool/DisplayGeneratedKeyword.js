import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ReactEcharts from "echarts-for-react"
import { RxCross2 } from "react-icons/rx"
const DisplayGeneratedKeyword = ({ data, keyword }) => {
  const [chartData, setChartData] = useState(null)
  useEffect(() => {
    const copyButtonCode = () => {
      let copyButtons = document.querySelectorAll(".copy-table-btn")
      copyButtons.forEach(button => {
        const handleClick = () => {
          const clipboardText = button.getAttribute("data-clipboard")
          if (!clipboardText) {
            toast.success("No data to copy!", { autoClose: 2000 })
            return
          }
          let listData = JSON.parse(clipboardText)
          listData = listData.join("\n")
          navigator.clipboard
            .writeText(listData)
            .then(() => {
              toast.success("Table copied to clipboard!", { autoClose: 2000 })
            })
            .catch(err => {
              toast.error("Failed to copy to clipboard!", { autoClose: 2000 })
            })
        }

        button.addEventListener("click", handleClick)
        button.handleClick = handleClick
      })

      let graphButtons = document.querySelectorAll("#copy-button")
      graphButtons.forEach(button => {
        const handleClick = () => {
          const chartJsonData = button.getAttribute("data-clipboard")
          handleShowChart(chartJsonData)
        }

        button.addEventListener("click", handleClick)
        button.handleClick = handleClick
      })
    }

    copyButtonCode()
    return () => {
      let copyButtons = document.querySelectorAll(".copy-table-btn")
      copyButtons.forEach(button => {
        if (button.handleClick) {
          button.removeEventListener("click", button.handleClick)
        }
      })

      let graphButtons = document.querySelectorAll("#copy-button")
      graphButtons.forEach(button => {
        if (button.handleClick) {
          button.removeEventListener("click", button.handleClick)
        }
      })
    }
  }, [data])

  const generateContent = () => {
    let mainDiv = ""

    for (const category in data) {
      if (data.hasOwnProperty(category)) {
        const jsonData = JSON.stringify(data[category])
        const chartJsonData = JSON.stringify({ [category]: data[category] })
        let div = `
          <div class='obj-heading d-flex justify-content-between font-md-bold align-items-center pl-10 pr-10 bg-4'>  
           <p>${keyword} ${category}</p>
            <div class="d-flex gap-10">
              <button type='button' data-clipboard='${jsonData}' class="copy-clipboard copy-table-btn">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 32 32" version="1.1">
                  <g id="surface1">
                    <path style="stroke:none;fill-rule:nonzero;fill:rgb(14.901961%,100%,0%);fill-opacity:1;" d="M 7 4 C 6.449219 4 6 4.449219 6 5 L 6 29 C 6 29.550781 6.449219 30 7 30 L 25 30 C 25.550781 30 26 29.550781 26 29 L 26 5 C 26 4.449219 25.550781 4 25 4 L 24 4 C 23.449219 4 23 3.550781 23 3 C 23 2.449219 23.449219 2 24 2 L 25 2 C 26.65625 2 28 3.34375 28 5 L 28 29 C 28 30.65625 26.65625 32 25 32 L 7 32 C 5.34375 32 4 30.65625 4 29 L 4 5 C 4 3.34375 5.34375 2 7 2 L 8 2 C 8.550781 2 9 2.449219 9 3 C 9 3.550781 8.550781 4 8 4 Z M 7 4 "></path>
                    <path style="stroke:none;fill-rule:nonzero;fill:rgb(14.901961%,100%,0%);fill-opacity:1;" d="M 20 1 C 20 0.449219 19.550781 0 19 0 L 13 0 C 12.449219 0 12 0.449219 12 1 C 12 1.550781 11.550781 2 11 2 C 10.449219 2 10 2.449219 10 3 L 10 4 C 10 4.550781 10.449219 5 11 5 L 21 5 C 21.550781 5 22 4.550781 22 4 L 22 3 C 22 2.449219 21.550781 2 21 2 C 20.449219 2 20 1.550781 20 1 Z M 20 1 "></path>
                  </g>
                </svg>
              </button>
              <button type='button' data-clipboard='${chartJsonData}' id="copy-button" class="mtb-20">Show Graph</button>
            </div>
          </div>`

        for (let i = 0; i < data[category].length; i++) {
          div += `<p>${data[category][i]}</p>`
        }

        mainDiv += `<div id='${keyword}-${category}' class='single-object-div'>${div}</div>`
      }
    }

    return { __html: mainDiv }
  }

  // ***************************
  const handleShowChart = renderData => {
    let initialData = JSON.parse(renderData)
    let jsonData = {
      name: keyword,
      children: [],
    }
    for (let key in initialData) {
      let childrenArray = initialData[key].map(item => {
        return {
          name: item,
        }
      })

      jsonData.children.push({
        name: key,
        children: childrenArray,
      })
    }
    setChartData(jsonData)
  }

  const getChartOption = data => ({
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "tree",
        data: [data],
        top: "15%",
        bottom: "15%",
        right: "15%",
        left: "15%",
        layout: "radial",
        symbol: "emptyCircle",
        symbolSize: 7,
        initialTreeDepth: 3,
        animationDurationUpdate: 750,
        emphasis: {
          focus: "descendant",
        },
        label: {
          show: true,
        },
      },
    ],
  })
  // ***************************

  return (
    <div id="suggestions-box">
      <div className="text-center mtb-20">
        <button
          data-clipboard={JSON.stringify(data)}
          className="audit-button ptb-10 pl-10 pr-10"
          onClick={() => handleShowChart(JSON.stringify(data))}
        >
          Display All Keywords Chart
        </button>
      </div>
      <div
        className="d-flex justify-content-between gap-50 flex-wrap"
        dangerouslySetInnerHTML={generateContent()}
      ></div>
      {chartData && (
        <div className="black-background">
          <div className="chart-container">
            <ReactEcharts
              option={getChartOption(chartData)}
              style={{ height: "80vh", width: "80vw", margin: "auto" }}
            />
            <button
              className="close-button"
              onClick={() => setChartData(null)}
            >
              <RxCross2
                style={{ color: "black" }}
                className="font-4xl-bold"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DisplayGeneratedKeyword
