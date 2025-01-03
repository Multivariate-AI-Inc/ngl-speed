import Link from "next/link"
import React, { useEffect, useState } from "react"
import PaymentBreakUpChart from "./PaymentBreakUpChart"
const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000)
  const [loanInterest, setLoanInterest] = useState(14)
  const [loanTenure, setLoanTenure] = useState(180)
  const [loanEMI, setLoanEMI] = useState(0)
  const [totalInterestPayable, setTotalInterestPayable] = useState(0)
  const [totalPayment, setTotalPayment] = useState(0)
  const [displayYears, setDisplayYears] = useState("15 Years 0 Months")
  useEffect(() => {
    calculateResults()
  }, [loanAmount, loanInterest, loanTenure])

  const handleLoanAmountChange = e => {
    setLoanAmount(e.target.value)
  }

  const handleLoanAmountSliderChange = e => {
    setLoanAmount(e.target.value * 100000)
  }

  const handleLoanInterestChange = e => {
    setLoanInterest(e.target.value)
  }

  const handleLoanInterestSliderChange = e => {
    setLoanInterest(e.target.value)
  }

  const handleLoanTenureChange = e => {
    setLoanTenure(e.target.value)
  }

  const handleLoanTenureSliderChange = e => {
    setLoanTenure(e.target.value)
  }

  const calculateResults = () => {
    displayYear()
    let principal = parseInt(loanAmount)
    let calculatedInterest = parseInt(loanInterest) / 100 / 12
    let numInstallments = parseInt(loanTenure)
    const x = Math.pow(1 + calculatedInterest, numInstallments)
    const monthlyEMI = ((principal * x * calculatedInterest) / (x - 1)).toFixed(
      2,
    )
    const totalInterest = (monthlyEMI * numInstallments - principal).toFixed(2)
    const totalPayableAmount = (monthlyEMI * numInstallments).toFixed(2)
    setLoanEMI(monthlyEMI)
    setTotalInterestPayable(totalInterest)
    setTotalPayment(totalPayableAmount)
  }

  const displayYear = () => {
    let months = loanTenure
    setDisplayYears(`${Math.floor(months / 12)} Years ${months % 12} Months`)
  }
  return (
    <section className="position-relative top-3">
      <div className="container text-center">
        <div className="main-head">
          <h1 className="font-3xl-bold color-brand-1 mb-5 mt-5">
            EMI Calculator
          </h1>
        </div>
        <div id="editor">
          <div className="main-side">
            <div className="input-panel">
              <label htmlFor="Loan_amount" className="color-brand-1">Loan Amount</label>
              <div className="emi-input-group">
                <input
                  type="text"
                  name="Loan_amount"
                  id="Loan_amount"
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">₹</span>
                </div>
              </div>
            </div>
            <div className="slider">
              <input
                type="range"
                min="0"
                max="200"
                value={loanAmount / 100000}
                className="range-slider"
                id="amount-slider"
                onChange={handleLoanAmountSliderChange}
              />
            </div>
            <div
              id="loan-amount-steps"
              className="steps"
            >
              {/* Your tick marks here */}
              <span
                className="tick"
                style={{ left: "0%" }}
              >
                |<br />
                <span className="marker">0</span>
              </span>
              <span
                className="tick"
                style={{ left: "12.5%" }}
              >
                |<br />
                <span className="marker">25L</span>
              </span>
              <span
                className="tick"
                style={{ left: "25%" }}
              >
                |<br />
                <span className="marker">50L</span>
              </span>
              <span
                className="tick"
                style={{ left: "37.5%" }}
              >
                |<br />
                <span className="marker">75L</span>
              </span>
              <span
                className="tick"
                style={{ left: "50%" }}
              >
                |<br />
                <span className="marker">100L</span>
              </span>
              <span
                className="tick"
                style={{ left: "62.5%" }}
              >
                |<br />
                <span className="marker">125L</span>
              </span>
              <span
                className="tick"
                style={{ left: "75%" }}
              >
                |<br />
                <span className="marker">150L</span>
              </span>
              <span
                className="tick"
                style={{ left: "87.5%" }}
              >
                |<br />
                <span className="marker">175L</span>
              </span>
              <span
                className="tick"
                style={{ left: "100%" }}
              >
                |<br />
                <span className="marker">200L</span>
              </span>
            </div>
            <div className="input-panel">
              <label htmlFor="interest-rate" className="color-brand-1">Interest Rate</label>
              <div className="emi-input-group">
                <input
                  type="text"
                  name="interest-rate"
                  id="interest-rate"
                  value={loanInterest}
                  onChange={handleLoanInterestChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text">%</span>
                </div>
              </div>
            </div>
            <div className="slider">
              <input
                type="range"
                min="4"
                max="24"
                value={loanInterest}
                className="range-slider"
                id="interest-slider"
                onChange={handleLoanInterestSliderChange}
              />
            </div>
            <div
              id="loan-interest-steps"
              className="steps"
            >
              {/* Your tick marks here */}
              <span
                className="tick"
                style={{ left: "0%" }}
              >
                |<br />
                <span className="marker">4</span>
              </span>
              <span
                className="tick"
                style={{ left: "10%" }}
              >
                |<br />
                <span className="marker">6</span>
              </span>
              <span
                className="tick"
                style={{ left: "20%" }}
              >
                |<br />
                <span className="marker">8</span>
              </span>
              <span
                className="tick"
                style={{ left: "30%" }}
              >
                |<br />
                <span className="marker">10</span>
              </span>
              <span
                className="tick"
                style={{ left: "40%" }}
              >
                |<br />
                <span className="marker">12</span>
              </span>
              <span
                className="tick"
                style={{ left: "50%" }}
              >
                |<br />
                <span className="marker">14</span>
              </span>
              <span
                className="tick"
                style={{ left: "60%" }}
              >
                |<br />
                <span className="marker">16</span>
              </span>
              <span
                className="tick"
                style={{ left: "70%" }}
              >
                |<br />
                <span className="marker">18</span>
              </span>
              <span
                className="tick"
                style={{ left: "80%" }}
              >
                |<br />
                <span className="marker">20</span>
              </span>
              <span
                className="tick"
                style={{ left: "90%" }}
              >
                |<br />
                <span className="marker">22</span>
              </span>
              <span
                className="tick"
                style={{ left: "100%" }}
              >
                |<br />
                <span className="marker">24</span>
              </span>
            </div>
            <div className="input-panel">
              <label htmlFor="loan-tenure" className="color-brand-1">Loan Tenure</label>
              <div className="emi-input-group">
                <input
                  type="text"
                  name="loan-tenure"
                  id="loan-tenure"
                  value={loanTenure}
                  onChange={handleLoanTenureChange}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    id="months"
                  >
                    Mo
                  </span>
                </div>
              </div>
              <div className="total_years color-grey-400">{displayYears}</div>
            </div>
            <div className="select">
              <div className="slider">
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={loanTenure}
                  className="range-slider tenure-slider"
                  id="months-tenure-slider"
                  onChange={handleLoanTenureSliderChange}
                />
              </div>
              <div
                id="loantermsteps"
                className="steps"
              >
                {/* Your tick marks here */}
                <span
                  className="tick"
                  style={{ left: "0%" }}
                >
                  |<br />
                  <span className="marker">0</span>
                </span>
                <span
                  className="tick"
                  style={{ left: "16.67%" }}
                >
                  |<br />
                  <span className="marker">60</span>
                </span>
                <span
                  className="tick"
                  style={{ left: "33.33%" }}
                >
                  |<br />
                  <span className="marker">120</span>
                </span>
                <span
                  className="tick"
                  style={{ left: "50%" }}
                >
                  |<br />
                  <span className="marker">180</span>
                </span>
                <span
                  className="tick"
                  style={{ left: "66.77%" }}
                >
                  |<br />
                  <span className="marker">240</span>
                </span>
                <span
                  className="tick"
                  style={{ left: "83.33%" }}
                >
                  |<br />
                  <span className="marker">300</span>
                </span>
                <span
                  className="tick"
                  style={{ left: "100%" }}
                >
                  |<br />
                  <span className="marker">360</span>
                </span>
              </div>
            </div>
            <div className="result-panel">
              <div
                className="result-calculation borderbottom0"
                style={{ height: "350px" }}
              >
                <div className="display-border">
                  <p className="font-md-bold mb-10 mt-10 color-grey-400">Loan EMI</p>
                  <p className="loan-emi color-grey-400">₹ {loanEMI}</p>
                </div>
                <div className="display-border">
                  <p className="font-md-bold mb-10 mt-10 color-grey-400">Total Interest Payable</p>
                  <p className="total-interest-payable color-grey-400">
                    ₹ {totalInterestPayable}
                  </p>
                </div>
                <div className="display-border borderbottom0">
                  <p className="font-md-bold mb-10 mt-10 color-grey-400">Total Payment (Principal + Interest)</p>
                  <p className="total-payment color-grey-400">₹ {totalPayment}</p>
                </div>
              </div>
              <div className="result-chart borderbottom0">
                <div
                  style={{ width: "99%", height: "350px" }}
                  className="mt-40"
                >
                  <PaymentBreakUpChart principal={loanAmount} totalInterest={totalInterestPayable} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ************************** */}
        <div className="canvas-footer-website ptb-10">
          <h5>
            Powered by{" "}
            <Link
              href="https://nextgrowthlabs.com/?utm_source=emi_calculator_web#form"
              target="_blank"
              rel="noopener noreferrer"
              className="utm-link"
            >
              NextGrowth Labs
            </Link>{" "}
          </h5>
        </div>
      </div>
    </section>
  )
}

export default EmiCalculator
