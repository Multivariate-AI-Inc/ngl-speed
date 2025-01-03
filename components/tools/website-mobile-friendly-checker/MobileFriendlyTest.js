// components/MobileFriendlyTest.js
import { useState } from "react";
import { formatURL, isValidUrl } from "../../utils";
import Loader from "../../elements/Loader";
const MobileFriendlyTest = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isValidURL, setIsValidURL] = useState(false);

  // handle submit
  const handleSubmit = async () => {
    setLoading(true);
    setResult(null);
    const mainUrl = await formatURL(inputUrl);
    if (!isValidUrl(mainUrl)) {
      setIsValidURL(true);
      setLoading(false);
      return;
    }
    setInputUrl(mainUrl);
    try {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: mainUrl }),
      }
      const response = await fetch("/api/get-page", requestOptions)
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const htmlContent = await response.json()
      const parser = new DOMParser()
      const doc = parser.parseFromString(htmlContent.body, "text/html")
      const viewportMetaTag = doc.querySelector("meta[name='viewport']")
      const stylesheets = doc.querySelectorAll('link[rel*="stylesheet"]')

      const resultData = {
        viewportMetaTag: viewportMetaTag ? viewportMetaTag.outerHTML : null,
        stylesheets: Array.from(stylesheets).map((sheet) => sheet.href),
        mediaQueries: findMediaQueriesInHTML(htmlContent),
      };

      setResult(resultData);
    } catch (error) {
      console.error("Error fetching URL:", error);
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  // find media queries
  const findMediaQueriesInHTML = (htmlContent) => {
    const htmlString = JSON.stringify(htmlContent);
    const mediaQueryRegex = /@media\s*(.*?)\{[^{}]*?\}/g;
    const mediaQueries = htmlString.match(mediaQueryRegex) || [];

    return mediaQueries.filter((query) => {
      const minWidth = extractWidthFromMediaQuery(query, "min-width");
      const maxWidth = extractWidthFromMediaQuery(query, "max-width");
      return minWidth <= 800 && maxWidth >= 450;
    });
  };

  const extractWidthFromMediaQuery = (query, property) => {
    const regex = new RegExp(`${property}:\\s*(\\d+)px`);
    const match = query.match(regex);
    return match ? parseInt(match[1]) : 0;
  };

  const createTableRow = (type, value, isSupported, key) => (
    <tr className="table_row" key={key}>
      <td style={{ textAlign: "center" }}>{type}</td>
      <td>{value}</td>
      <td style={{ textAlign: "center" }}>
        {isSupported ? (
          <span className="success">✔</span>
        ) : (
          <span className="failure">✘</span>
        )}
      </td>
    </tr>
  );

  const checkMobileFriendlyStylesheet = async (stylesheet) => {
    if (!stylesheet) {
      return false;
    }

    try {
      const response = await fetch(stylesheet);
      const cssContent = await response.text();
      return (
        cssContent.includes("max-width: 600px") ||
        cssContent.includes("max-width: 480px") ||
        cssContent.includes("max-width: 320px")
      );
    } catch (error) {
      console.error("Error fetching stylesheet:", error);
      return false;
    }
  };

  return (
    <section className="section" style={{ backgroundColor: "#E0F1F4" }}>
      <div className="container text-center">
        <div className="row mt-50 mb-5">
          <p className="tools_tag">Free SEO Tool</p>
          <h1 className="font-4xl-bold color-brand-1 mb-25 mt-10">
            Free Mobile Friendly Test
          </h1>
          <p className="font-md color-grey-500 mb-25">
            Ensure your website is optimized for mobile users with our powerful
            and intuitive mobile-friendly test tool. Simply enter your
            website&apos;s URL, and let our advanced analysis deliver a
            comprehensive report on its mobile compatibility. Discover
            performance insights and actionable recommendations to enhance the
            mobile experience for your visitors. Transform your website into a
            seamless mobile experience today!
          </p>
          <div className="aso-input-form mb-25 main-box-holder">
            <div className="search-box-suggestion">
              <div className="main-search-bar">
                <input
                  type="text"
                  autoComplete="off"
                  className="search-input"
                  placeholder="Enter Website URL"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="audit-button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          {/* ************************** */}

          {isValidURL && (
            <div className="error-message w-form-fail mb-20">
              <div>Oops! Please enter correct URL</div>
            </div>
          )}
          {error && (
            <div className="error-message w-form-fail mb-20">
              <div>Oops! Something Went Wrong. Please try again !!</div>
            </div>
          )}
          {loading && (
            <div className="mb-40 mt-20">
              {" "}
              <Loader />{" "}
            </div>
          )}
          {result && (
            <div id="result">
              <div className="row" id="mobile_friendliness_status">
                <div>
                  <div
                    className={`${"tick-cell"} ${result.viewportMetaTag &&
                      result.viewportMetaTag.includes("width=device-width")
                      ? "✔"
                      : "✘"
                      }`}
                  >
                    {result.viewportMetaTag &&
                      result.viewportMetaTag.includes("width=device-width")
                      ? "✔"
                      : "✘"}
                  </div>
                  <div className="mt-10">
                    {result.viewportMetaTag &&
                      result.viewportMetaTag.includes("width=device-width")
                      ? "The website supports mobile devices"
                      : "The website does not support mobile devices"}
                  </div>
                </div>
              </div>
              <div className="result-section" id="mobile_support">
                <h4 className="color-brand-1 mb-20">Mobile Support</h4>
                <div id="mobile_supoort_tag">
                  <table
                    className="result-table mobile_support_data"
                    border="1"
                  >
                    <thead>
                      <tr style={{ position: "sticky", top: "-1px" }}>
                        <th>Type</th>
                        <th>Information</th>
                        <th>Mobile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.viewportMetaTag &&
                        createTableRow("Meta", result.viewportMetaTag, true)}
                      {result.stylesheets.map((sheet) =>
                        createTableRow(
                          "Stylesheet",
                          sheet,
                          checkMobileFriendlyStylesheet(sheet)
                        )
                      )}
                      {result.mediaQueries.map((query) =>
                        createTableRow("Media Query", query, true)
                      )}
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
          )}
          {/* ************************** */}
          <div className="mb-40">
            <h5>
              Powered by-{" "}
              <a
                href="https://nextgrowthlabs.com/contact?utm_source=mobile_friendly_test_web"
                target="_blank"
                rel="noopener noreferrer"
                className="utm-link"
              >
                NextGrowth Lab
              </a>
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFriendlyTest;
