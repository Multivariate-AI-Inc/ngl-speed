import Link from "next/link";
import { useState, useEffect } from "react";

const CloudDataCostCalculator = () => {
  // -----------STATE FOR INPUT FIELDS----------------
  const [monthlyData, setMonthlyData] = useState(384);
  const [queryMultiplier, setQueryMultiplier] = useState(10);
  const [numberOfUsers, setNumberOfUsers] = useState(5);
  const [numberOfRows, setNumberOfRows] = useState(50);

  // -----------STATE FOR DATA SHOWN----------------
  const [totalData, setTotalData] = useState(3840);
  const [totalDataQueried, setTotalDataQueried] = useState(150.0);
  const [costOfQueryingInBQ, setCostOfQueryingInBQ] = useState(19200.0);
  const [costAt12_5, setCostAt12_5] = useState(625);
  const [grandTotal, setGrandTotal] = useState(775.0);

  // -----------UPDATING VALUES WHENEVERS STATE CHANGES----------------
  useEffect(() => {
    const totalData = monthlyData;
    const totalDataQueried = totalData * queryMultiplier * numberOfUsers;
    const costOfQueryingInBQ = (totalDataQueried / 1024) * 8;
    const costAt12_5 = numberOfRows * 12.5;
    const grandTotal = costOfQueryingInBQ + costAt12_5;

    setTotalData(totalData);
    setTotalDataQueried(totalDataQueried);
    setCostOfQueryingInBQ(costOfQueryingInBQ);
    setCostAt12_5(costAt12_5);
    setGrandTotal(grandTotal);
  }, [monthlyData, queryMultiplier, numberOfUsers, numberOfRows]);

  return (
    <>
      <div className="container mt-100">
        <div className="main-head">
          <h1 className="color-brand-1 text-center font-4xl-bold">
            Cloud Data Warehouse Setup Cost Calculator
          </h1>
        </div>
        <div className="container-form">
          <div className="input-grid">
            <div className="input-container" id="middle-input">
              <div className="input-group">
                <label for="monthlyData">Monthly Data in GB:</label>
                <input
                  type="number"
                  id="monthlyData"
                  min="100"
                  max="4000"
                  value={monthlyData}
                  onChange={(e) => setMonthlyData(parseInt(e.target.value))}
                />
              </div>
              <div className="input-group">
                <input
                  type="range"
                  className="range-slider"
                  id="monthlyDataSlider"
                  min="100"
                  max="4000"
                  value={monthlyData}
                  onChange={(e) => setMonthlyData(parseInt(e.target.value))}
                />
              </div>
            </div>

            <div className="input-container">
              <div className="input-group">
                <label for="queryMultiplier">Query Multiplier:</label>
                <input
                  type="number"
                  id="queryMultiplier"
                  min="1"
                  max="200"
                  value={queryMultiplier}
                  onChange={(e) => setQueryMultiplier(parseInt(e.target.value))}
                />
              </div>
              <div className="input-group">
                <input
                  type="range"
                  className="range-slider"
                  id="queryMultiplierSlider"
                  min="1"
                  max="200"
                  value={queryMultiplier}
                  onChange={(e) => setQueryMultiplier(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="input-group">
                <label for="numberOfUsers">Number of Users:</label>
                <input
                  type="number"
                  id="numberOfUsers"
                  min="1  "
                  max="100"
                  value={numberOfUsers}
                  onChange={(e) => setNumberOfUsers(parseInt(e.target.value))}
                />
              </div>
              <div className="input-group">
                <input
                  type="range"
                  className="range-slider"
                  id="numberOfUsersSlider"
                  min="1"
                  max="100"
                  value={numberOfUsers}
                  onChange={(e) => setNumberOfUsers(parseInt(e.target.value))}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="input-group">
                <label for="numberOfRows">Number of rows in Million:</label>
                <input
                  type="number"
                  id="numberOfRows"
                  min="10"
                  max="300"
                  value={numberOfRows}
                  onChange={(e) => setNumberOfRows(parseInt(e.target.value))}
                />
              </div>
              <div className="input-group">
                <input
                  type="range"
                  className="range-slider"
                  id="numberOfRowsSlider"
                  min="10"
                  max="300"
                  value={numberOfRows}
                  onChange={(e) => setNumberOfRows(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
          <div className="output-grid">
            <div className="output-group">
              <div className="output-container">
                <label>Total Data:</label>
                <span id="totalData">{totalData.toLocaleString()} GB</span>
              </div>
              <div className="output-container">
                <label>Total Data Queried:</label>
                <span id="totalDataQueried">
                  {totalDataQueried.toFixed(2).toLocaleString()}
                </span>
              </div>
            </div>
            <div className="output-group">
              <div className="output-container">
                <label>Cost of Querying in BQ:</label>
                <span id="costOfQueryingInBQ">
                  {costOfQueryingInBQ.toFixed(2).toLocaleString()}
                </span>
              </div>
              <div className="output-container">
                <label>Cost @ 12.5 USD/Million:</label>
                <span id="costAt12_5">{costAt12_5.toLocaleString()} USD</span>
              </div>
            </div>
          </div>
          <div className="output-container grand-total">
            <label>Grand Total: </label>
            <span id="grandTotal">
              {grandTotal.toFixed(2).toLocaleString()} USD
            </span>
          </div>
        </div>
        <div className="canvas-footer-website">
          <h6>
            Powered by&nbsp;
            <Link
              href="https://nextgrowthlabs.com/?utm_source=cloud_data_warehouse_setup_cost_calculator#footer"
              target="_blank"
              rel="noopener noreferrer"
              className="utm-link"
            >
              NextGrowth Labs
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
};

export default CloudDataCostCalculator;
