import React, { useState, useEffect } from "react"
const CalculateRating = ({ ratingsData }) => {
  const [day, setDay] = useState("")
  const [star, setStar] = useState("")
  const [targetRating, setTargetRating] = useState("")
  const [totalRating, setTotalRating] = useState(0)
  const [dailyReviewsNeeded, setDailyReviewsNeeded] = useState("")
  const [currentRating, setCurrentRating] = useState(0)
  const [percentages, setPercentages] = useState({})

  const retention = 50.0 // Retention value

  useEffect(() => {
    if (ratingsData) {
      let total = 0
      let totalStar = 0

      Object.entries(ratingsData).forEach(([key, value]) => {
        // Ensure value is a string and parse it
        const strValue = typeof value === "string" ? value : String(value)
        const numericValue = parseInt(strValue.replace(/\D/g, ""), 10)

        if (!isNaN(numericValue) && key.match(/^\d+$/)) {
          total += numericValue
          totalStar += numericValue * parseInt(key, 10)
        }
      })

      setTotalRating(total)

      // Calculate current rating (weighted average)
      const currentRatingValue = total > 0 ? (totalStar / total).toFixed(2) : 0
      setCurrentRating(currentRatingValue)
    }
  }, [ratingsData])

  const calculateResult = () => {
    if (!day || !star || !targetRating || !totalRating) return

    const parsedDay = parseInt(day, 10)
    const parsedStar = parseInt(star, 10)
    const parsedTargetRating = parseFloat(targetRating)

    let totalStar = 0
    Object.entries(ratingsData).forEach(([key, value]) => {
      // Ensure value is a string and parse it
      const strValue = typeof value === "string" ? value : String(value)
      const numericValue = parseInt(strValue.replace(/\D/g, ""), 10)

      if (!isNaN(numericValue) && key.match(/^\d+$/)) {
        totalStar += numericValue * parseInt(key, 10)
      }
    })

    const data =
      ((parsedTargetRating * totalRating - totalStar) /
        (parsedDay * (parsedStar - parsedTargetRating)) /
        retention) *
      100

    setDailyReviewsNeeded(isNaN(data) ? "0" : data.toFixed(0))
    console.log("Calculation completed")
  }

  useEffect(() => {
    calculateResult()
  }, [day, star, targetRating])

  useEffect(() => {
    const parsedRatings = Object.keys(ratingsData)
      .filter(key => !isNaN(key)) // Filter out non-numeric keys
      .reduce((acc, key) => {
        acc[key] = parseInt(ratingsData[key].replace(/,/g, ""), 10)
        return acc
      }, {})
    const newPercentages = {}
    for (let i = 1; i <= 5; i++) {
      newPercentages[i] = ((parsedRatings[i] / totalRating) * 100).toFixed(2)
    }

    // Step 4: Set the percentages in the state
    setPercentages(newPercentages)
  }, [totalRating, ratingsData])

  return (
    <>
      <div className="app-details ml-20">
        {ratingsData.logoImage && (
          <img
            decoding="async"
            src={ratingsData.logoImage}
            alt="App logo image"
            className="app-logo"
          />
        )}

        <div className="app-info">
          <h5>
            {ratingsData.title}
          </h5>
          <p className="color-grey-400 mt-10">
            {ratingsData.description}
          </p>
        </div>
      </div>

      {/* data component */}
      <div className="rating-calculator d-flex flex-row-reverse align-items-center mtb-40 mr-20 ml-20 gap-10">
        <div
          className="input-boxes"
          style={{ flex: "0 0 55%" }}
        >
          <div
            className="d-flex flex-column ml-10 mb-40"
            style={{ border: "1px solid #cde2e7" }}
          >
            <div className="d-flex justify-content-around align-items-center pr-10 pl-10 mt-20">
              <label htmlFor="day">Day</label>
              <input
                type="text"
                className="form-control"
                style={{ width: "auto" }}
                placeholder="Enter days here: 50"
                value={day}
                onChange={e => setDay(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-around align-items-center mb-5 pr-10 pl-10 mb-5 mt-10">
              <label htmlFor="star">Star</label>
              <input
                type="text"
                className="form-control"
                style={{ width: "auto" }}
                placeholder="Enter stars here: 5/4"
                value={star}
                onChange={e => setStar(e.target.value)}
              />
            </div>
            {/* Current Rating Display */}
            <div className="d-flex justify-content-around align-items-center mb-5 pr-10 pl-10 mb-5 mt-10">
              <label htmlFor="current-rating">Current Rating</label>
              <input
                type="text"
                className="form-control"
                style={{ width: "auto" }}
                value={currentRating}
                disabled
                readOnly
              />
            </div>
            {/* Target Rating Input */}
            <div className="d-flex justify-content-around align-items-center mb-5 pr-10 pl-10 mb-5 mt-10">
              <label htmlFor="target-rating">Target Rating</label>
              <input
                type="text"
                className="form-control"
                style={{ width: "auto" }}
                placeholder="Enter future ratings here"
                value={targetRating}
                onChange={e => setTargetRating(e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-around align-items-center mb-5 pr-10 pl-10 mb-5 mt-10">
              <label htmlFor="retention">Retention</label>
              <input
                type="text"
                className="form-control"
                style={{ width: "auto" }}
                value={`${retention.toFixed(2)}%`}
                readOnly
                disabled
              />
            </div>
            {dailyReviewsNeeded && (
              <div className="d-flex justify-content-around align-items-center ptb-10 pr-10 pl-10  font-md-bold color-success">
                <label htmlFor="daily-reviews-needed">
                  Daily Reviews Needed
                </label>
                <label htmlFor="daily-reviews">{dailyReviewsNeeded}</label>
              </div>
            )}
          </div>
        </div>

        <div style={{ flex: "0 0 45%" }}>
          <table className="show_rating_table">
            <thead>
              <tr className="color-success">
                <th className="firstColumn table_cell">Star Rating</th>
                <th className="secondColumn table_cell">% Share</th>
                <th className="thirdColumn table_cell">Response</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map(rating => (
                <tr
                  className={`row_${rating}`}
                  key={rating}
                >
                  <td className="table_cell index_SN">{rating}</td>
                  <td className="table_cell column_share_per">
                    {percentages[rating] || "0.00"}%
                  </td>
                  <td className="responseStars input_table_cell">
                    {ratingsData[rating] || "0"}
                  </td>
                </tr>
              ))}
              <tr>
                <td
                  colSpan="2"
                  className="table_cell"
                >
                  Total
                </td>
                <td
                  className="totalRating table_cell responseStars"
                  id="totalRatings"
                >
                  {totalRating.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CalculateRating
