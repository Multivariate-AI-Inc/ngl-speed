import { useState } from "react";
const RatingCalculator = () => {
  const [day, setDay] = useState("");
  const [star, setStar] = useState("");
  const [currentRating, setCurrentRating] = useState("");
  const [targetRating, setTargetRating] = useState("");
  const [retention] = useState("50.00%");
  const [dailyReviewsNeeded, setDailyReviewsNeeded] = useState(null);
  const [totalRatings, setTotalRatings] = useState(null);
  const [shares, setShares] = useState(["", "", "", "", ""]);
  const [ratings, setRatings] = useState(["", "", "", "", ""]);

  const handleInputChange = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value;
    setRatings(newRatings);
  };

  const calculateDailyFeedback = () => {
    const isFilled = day && star && targetRating && ratings.every(r => r);
    const isTargetRatingValid =
      targetRating && parseFloat(targetRating) > 0 && parseFloat(targetRating) <= 5;
    const isStarValid = star && parseFloat(star) > 0 && parseFloat(star) <= 5;
    const isDayValid = day && parseInt(day) > 0 && parseInt(day) < 366;

    if (isFilled && isTargetRatingValid && isStarValid && isDayValid) {
      let totalStar = 0;
      let totalRating = 0;

      ratings.forEach((rating, index) => {
        const rat = parseInt(rating.replace(/\D/g, ""));
        totalStar += rat * (index + 1);
        totalRating += rat;
      });

      setTotalRatings(totalRating);

      const newShares = ratings.map(rating => {
        const rat = parseInt(rating.replace(/\D/g, ""));
        const share = ((rat / totalRating) * 100).toFixed(2);
        return `${share} %`;
      });

      setShares(newShares);

      const averageRating = totalStar / totalRating;
      setCurrentRating(averageRating.toFixed(2));

      const dayValue = parseInt(day);
      const starValue = parseInt(star);
      const targetRatingValue = parseFloat(targetRating);
      const retentionValue = parseFloat(retention);

      const data =
        ((targetRatingValue * totalRating - totalStar) /
          (dayValue * (starValue - targetRatingValue)) /
          retentionValue) *
        100;
      setDailyReviewsNeeded(data.toFixed(0));
    } else {
      window.alert("Please provide the correct values in the input fields.");
    }
  };

  return (
    <div className="rating-calculator d-flex flex-row-reverse align-items-center justify-content-center mtb-40  gap-10">
      <div className="input-boxes" style={{ flex: "0 0 55%"}}>
        <div className="d-flex flex-column ml-10 " style={{ border: "1px solid #cde2e7", paddingBottom:"35px" }}>
          <div className="d-flex justify-content-around align-items-center pr-10 pl-10 mt-20">
            <label htmlFor="day">Day</label>
            <input
              type="text"
              className="form-control"
              style={{ width: "auto" }}
              placeholder="Enter days here: 50"
              value={day}
              onChange={(e) => setDay(e.target.value)}
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
              onChange={(e) => setStar(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-around align-items-center mb-5 pr-10 pl-10 mb-5 mt-10">
            <label htmlFor="current-rating">Current Rating</label>
            <input
              type="text"
              className="form-control"
              style={{ width: "auto" }}
              value={currentRating}
              readOnly
              disabled
            />
          </div>
          <div className="d-flex justify-content-around align-items-center mb-5 pr-10 pl-10 mb-5 mt-10">
            <label htmlFor="target-rating">Target Rating</label>
            <input
              type="text"
              className="form-control"
              style={{ width: "auto" }}
              placeholder="Enter future ratings here"
              value={targetRating}
              onChange={(e) => setTargetRating(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-around align-items-center mb-5 pr-10 pl-10 mb-5 mt-10">
            <label htmlFor="retention">Retention</label>
            <input
              type="text"
              className="form-control"
              style={{ width: "auto" }}
              value={retention}
              readOnly
              disabled
            />
          </div>
          {dailyReviewsNeeded && (
            <div className="d-flex justify-content-around align-items-center ptb-10 pr-10 pl-10  font-md-bold color-success">
              <label htmlFor="daily-reviews-needed">Daily Reviews Needed</label>
              <label htmlFor="daily-reviews">
                {dailyReviewsNeeded}
              </label>
            </div>
          )}
        </div>
        <button type="submit" className="audit-button ptb-10 pr-10 pl-10" onClick={calculateDailyFeedback}>
          Get Daily Feedback
        </button>
      </div>
      <div>
        <table className="show_rating_table">
          <thead>
            <tr className="color-success">
              <th className="firstColumn table_cell">Star Rating</th>
              <th className="secondColumn table_cell">%Share</th>
              <th className="thirdColumn table_cell">Response</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((rating, index) => (
              <tr className={`row_${rating}`} key={rating}>
                <td className="table_cell index_SN">{rating}</td>
                <td className="table_cell column_share_per">{shares[index]}</td>
                <td className="responseStars input_table_cell">
                  <input
                    type="text"
                    name="rating"
                    className="form-control"
                    id={`entered_rating${rating}`}
                    placeholder={`Enter ${rating}-star rating here`}
                    value={ratings[index]}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
            <tr className="font-md-bold color-success">
              <td colSpan="2" className="table_cell">
                Total
              </td>
              <td className="totalRating table_cell responseStars" id="totalRatings">
                {totalRatings}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RatingCalculator;
