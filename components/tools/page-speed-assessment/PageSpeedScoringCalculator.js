import { useEffect, useState } from "react"
import PageSpeedChart from "./PageSpeedChart"

const PageSpeedScoringCalculator = ({ response }) => {
  // State initialization
  const [device, setDevice] = useState("mobile")
  const [selectedURL, setSelectedURL] = useState("") // State for selected URL
  const [uniqueDomains, setUniqueDomains] = useState([])
  const [fcp, setFcp] = useState(1800)
  const [si, setSi] = useState(2400)
  const [lcp, setLcp] = useState(3200)
  const [tbt, setTbt] = useState(800)
  const [cls, setCls] = useState(0.08)

  useEffect(() => {
    if (response && response.length > 0) {
      // Extract unique URLs and set them
      const urls = [...new Set(response.map(item => item.url))]
      setUniqueDomains(urls)

      // Default to the first URL if none is selected
      if (selectedURL === "" && urls.length > 0) {
        setSelectedURL(urls[0])
      }
    }
  }, [response, selectedURL])

  useEffect(() => {
    if (response && selectedURL) {
      // Extract data for the selected URL and device
      const data = response.filter(item => item.url === selectedURL && item.strategy === device)[0]
      if (data) {
        console.log('Data', data);
        
        setFcp(data.FCP || fcp)
        setLcp(data.LCP || lcp)
        setCls(data.CLS !== "N/A" ? data.CLS : cls)
        // Optionally, set SI and TBT if present in your data
        // setSi(data.SI || si)
        // setTbt(data.TBT || tbt)
      }
    }
  }, [response, selectedURL, device])

  // Gather all the metrics in an object to pass as props
  const metrics = { fcp, si, lcp, tbt, cls }
  return (
    <div className="container mt-80">
      <div>
        <h3 className="color-brand-1 mb-20">
          Page Speed Scoring Calculator (Live Data)
        </h3>
      </div>
      <div className="d-flex justify-content-center mb-40 mt-40 gap-10">
        <div>
          Device:
          <select
            name="Device"
            value={device}
            onChange={e => setDevice(e.target.value)}
            className="ml-10"
          >
            <option value="mobile">mobile</option>
            <option value="desktop">desktop</option>
          </select>
        </div>
        {/* Site list */}
        <div id="custom-select-box">
          {uniqueDomains.length > 0 && (
            <div style={{ display: "inline", marginLeft: "15px" }}>
              Website:&nbsp;
              <select
                name="website"
                value={selectedURL}
                onChange={e => setSelectedURL(e.target.value)}
              >
                {uniqueDomains.map(item => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
      <div className="d-flex justify-content-evenly flex-wrap align-items-center">
        <table className="range-picker-table">
          <tbody>
            <tr className="metric--pass">
              <td>
                <span className="metric__score-icon"></span>
              </td>
              <td>FCP (First Contentful Paint)</td>
              <td>
                <input
                  type="range"
                  min="1000"
                  max="6000"
                  step="10"
                  className="FCP metric-value"
                  value={fcp}
                  onChange={e => setFcp(e.target.value)}
                />
                <output className="FCP value-output mb-20">{fcp} ms</output>
              </td>
            </tr>
            <tr className="metric--pass">
              <td>
                <span className="metric__score-icon"></span>
              </td>
              <td>SI (Speed Index)</td>
              <td>
                <input
                  type="range"
                  min="1000"
                  max="12000"
                  step="10"
                  className="SI metric-value"
                  value={si}
                  onChange={e => setSi(e.target.value)}
                />
                <output className="SI value-output mb-20">{si} ms</output>
              </td>
            </tr>
            <tr className="metric--average">
              <td>
                <span className="metric__score-icon"></span>
              </td>
              <td>LCP (Largest Contentful Paint)</td>
              <td>
                <input
                  type="range"
                  min="1000"
                  max="8000"
                  step="10"
                  className="LCP metric-value"
                  value={lcp}
                  onChange={e => setLcp(e.target.value)}
                />
                <output className="LCP value-output mb-20">{lcp} ms</output>
              </td>
            </tr>
            <tr className="metric--fail">
              <td>
                <span className="metric__score-icon"></span>
              </td>
              <td>TBT (Total Blocking Time)</td>
              <td>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="10"
                  className="TBT metric-value"
                  value={tbt}
                  onChange={e => setTbt(e.target.value)}
                />
                <output className="TBT value-output mb-20">{tbt} ms</output>
              </td>
            </tr>
            <tr className="metric--pass">
              <td>
                <span className="metric__score-icon"></span>
              </td>
              <td>CLS (Cumulative Layout Shift)</td>
              <td>
                <input
                  type="range"
                  min="0"
                  max="0.82"
                  step="0.01"
                  className="CLS metric-value"
                  value={cls}
                  onChange={e => setCls(e.target.value)}
                />
                <output className="CLS value-output mb-20">{cls}</output>
              </td>
            </tr>
          </tbody>
        </table>

        <PageSpeedChart
          device={device}
          metrics={metrics}
        />
      </div>
      <div>
        <h6
          className="font-md"
          style={{ textAlign: "right" }}
        >
          <a
            href="https://nextgrowthlabs.com/contact?utm_source=bulk_ios_tracker_web#form"
            target="_blank"
            rel="noopener"
            id="copy-button"
          >
            Fix Your Site Speed
          </a>
        </h6>
      </div>
    </div>
  )
}

export default PageSpeedScoringCalculator
