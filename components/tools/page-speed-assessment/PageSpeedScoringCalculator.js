import { useEffect, useState } from "react";
import PageSpeedChart from "./PageSpeedChart";

const PageSpeedScoringCalculator = ({ response }) => {

  console.log('Response in calc', response);
  
  const [device, setDevice] = useState("mobile");
  const [selectedURL, setSelectedURL] = useState("");
  const [uniqueDomains, setUniqueDomains] = useState([]);
  const [fcp, setFcp] = useState(1800);
  const [si, setSi] = useState(2400);
  const [lcp, setLcp] = useState(3200);
  const [tbt, setTbt] = useState(800);
  const [cls, setCls] = useState(0.08);

  // Function to process response data
  const generateResult = (responses) => {
    return responses.map((items) => {
      const url = items.id;
      const strategy = items.lighthouseResult.configSettings.emulatedFormFactor;
      let fcp, lcp, cls, inp;
      const lighthouseMetrics = {};
      
      if (items.loadingExperience) {
        const metrics = items.loadingExperience.metrics;
        fcp = metrics?.FIRST_CONTENTFUL_PAINT_MS?.percentile || "N/A";
        inp = metrics?.INTERACTION_TO_NEXT_PAINT?.percentile || "N/A";
        lcp = metrics?.LARGEST_CONTENTFUL_PAINT_MS?.percentile || "N/A";
        cls = metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile || "N/A";

        const audits = items.lighthouseResult.audits;
        lighthouseMetrics.FCP = audits["first-contentful-paint"].numericValue.toFixed(0);
        lighthouseMetrics.SI = audits["speed-index"].numericValue.toFixed(0);
        lighthouseMetrics.TBT = audits["total-blocking-time"].numericValue.toFixed(0);
        lighthouseMetrics.LCP = audits["largest-contentful-paint"].numericValue.toFixed(0);
        lighthouseMetrics.CLS = audits["cumulative-layout-shift"].numericValue.toFixed(3);
        lighthouseMetrics.device = strategy;

        if (!window[strategy + "Device"]) {
          window[strategy + "Device"] = true;
          const newSiteData = {};
          console.log('Lighthouse', lighthouseMetrics);
          
          newSiteData[url] = lighthouseMetrics;
          localStorage.setItem(strategy, JSON.stringify([newSiteData]), 100000);
        } else {
          let oldAppData = localStorage.getItem(strategy);
          if (oldAppData) {
            let Array = JSON.parse(oldAppData);
            const newSiteData = {};
            newSiteData[url] = lighthouseMetrics;
            Array.unshift(newSiteData);
            let uniqueArray = Array.filter(
              (item, index) =>
                Array.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(item)) === index
            );
            localStorage.setItem(strategy, JSON.stringify(uniqueArray));
          } else {
            const newSiteData = {};
            newSiteData[url] = lighthouseMetrics;
            localStorage.setItem(strategy, JSON.stringify([newSiteData]), 100000);
          }
        }
      } else {
        fcp = lcp = cls = inp = "N/A";
      }
      
      const webVitalsResult = showVitalsResult(items);
      return {
        url: url,
        strategy: strategy,
        FCP: fcp,
        LCP: lcp,
        CLS: cls,
        INP: inp,
        result: webVitalsResult,
      };
    });
  };
  function showVitalsResult(json) {
    const metrics = json.loadingExperience.metrics
    let desktopVitalResult = "";
    let clsScore = metrics?.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile || 40;
    let lcpScore = metrics?.LARGEST_CONTENTFUL_PAINT_MS?.percentile || 5000;
    let inpScore = metrics?.INTERACTION_TO_NEXT_PAINT?.percentile || 0
    if (lcpScore == 0 && inpScore == 0 && clsScore == 0) {
        desktopVitalResult = "N/A";
    } else if (lcpScore <= 2500 && inpScore <= 200 && clsScore <= 10) {
        desktopVitalResult = "Passed";
    } else {
        desktopVitalResult = "Failed";
    }
    return desktopVitalResult;
}
  // Process response and update state
  useEffect(() => {
    if (response && response.length > 0) {
      const processedResults = generateResult(response);
      const urls = [...new Set(processedResults.map(item => item.url))];
      setUniqueDomains(urls);
      if (selectedURL === "" && urls.length > 0) {
        setSelectedURL(urls[0]);
      }
    }
  }, [response, selectedURL]);

  useEffect(() => {
    if (response && selectedURL) {
      const data = generateResult(response).find(
        item => item.url === selectedURL && item.strategy === device
      );
      if (data) {
        setFcp(data.FCP || fcp);
        setLcp(data.LCP || lcp);
        setCls(data.CLS !== "N/A" ? data.CLS : cls);
      }
    }
  }, [response, selectedURL, device]);

  useEffect(() => {
    updateInputRanges();
  }, [device]);

  const updateInputRanges = () => {
    if (device === "mobile") {
      setFcp(prev => (prev < 1000 ? 1000 : prev > 6000 ? 6000 : prev));
      setSi(prev => (prev < 1000 ? 1000 : prev > 12000 ? 12000 : prev));
      setLcp(prev => (prev < 1000 ? 1000 : prev > 8000 ? 8000 : prev));
      setTbt(prev => (prev > 3000 ? 3000 : prev));
    } else {
      setFcp(prev => (prev > 4000 ? 4000 : prev));
      setSi(prev => (prev > 5800 ? 5800 : prev));
      setLcp(prev => (prev > 6000 ? 6000 : prev));
      setTbt(prev => (prev > 2000 ? 2000 : prev));
    }
  };

  const handleURLChange = (e) => {
    const selectedUrl = e.target.value;
    setSelectedURL(selectedUrl);
    const data = generateResult(response).find(
      item => item.url === selectedUrl && item.strategy === device
    );
    if (data) {
      changeChart(data);
    }
  };

  const changeChart = (cwvData) => {
    setFcp(cwvData.FCP);
    setSi(cwvData.SI);
    setLcp(cwvData.LCP);
    setTbt(cwvData.TBT);
    setCls(cwvData.CLS);
  };

  const metrics = { fcp, si, lcp, tbt, cls };

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
        <div id="custom-select-box">
          {uniqueDomains.length > 0 && (
            <div style={{ display: "inline", marginLeft: "15px" }}>
              Website:&nbsp;
              <select
                name="website"
                value={selectedURL}
                onChange={handleURLChange}
              >
                {uniqueDomains.map(item => (
                  <option key={item} value={item}>
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
            {/* FCP */}
            <tr className="metric--pass">
              <td><span className="metric__score-icon"></span></td>
              <td>FCP (First Contentful Paint)</td>
              <td>
                <input
                  type="range"
                  min={device === "mobile" ? "1000" : "0"}
                  max={device === "mobile" ? "6000" : "4000"}
                  step="10"
                  className="FCP metric-value"
                  value={fcp}
                  onChange={e => setFcp(e.target.value)}
                />
                <output className="FCP value-output mb-20">{fcp} ms</output>
              </td>
            </tr>
            {/* SI */}
            <tr className="metric--pass">
              <td><span className="metric__score-icon"></span></td>
              <td>SI (Speed Index)</td>
              <td>
                <input
                  type="range"
                  min={device === "mobile" ? "1000" : "0"}
                  max={device === "mobile" ? "12000" : "5800"}
                  step="10"
                  className="SI metric-value"
                  value={si}
                  onChange={e => setSi(e.target.value)}
                />
                <output className="SI value-output mb-20">{si} ms</output>
              </td>
            </tr>
            {/* LCP */}
            <tr className="metric--average">
              <td><span className="metric__score-icon"></span></td>
              <td>LCP (Largest Contentful Paint)</td>
              <td>
                <input
                  type="range"
                  min={device === "mobile" ? "1000" : "0"}
                  max={device === "mobile" ? "8000" : "6000"}
                  step="10"
                  className="LCP metric-value"
                  value={lcp}
                  onChange={e => setLcp(e.target.value)}
                />
                <output className="LCP value-output mb-20">{lcp} ms</output>
              </td>
            </tr>
            {/* TBT */}
            <tr className="metric--fail">
              <td><span className="metric__score-icon"></span></td>
              <td>TBT (Total Blocking Time)</td>
              <td>
                <input
                  type="range"
                  min="0"
                  max={device === "mobile" ? "3000" : "2000"}
                  step="10"
                  className="TBT metric-value"
                  value={tbt}
                  onChange={e => setTbt(e.target.value)}
                />
                <output className="TBT value-output mb-20">{tbt} ms</output>
              </td>
            </tr>
            {/* CLS */}
            <tr className="metric--pass">
              <td><span className="metric__score-icon"></span></td>
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
        <PageSpeedChart device={device} metrics={metrics} />
      </div>
      <div>
        <h6 className="font-md" style={{ textAlign: "right" }}>
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
  );
};

export default PageSpeedScoringCalculator;
