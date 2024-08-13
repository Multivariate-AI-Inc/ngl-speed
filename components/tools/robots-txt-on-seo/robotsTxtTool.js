import { useState } from "react";
import Link from "next/link";
import Loader from "../../elements/Loader";

const RobotsTxtTool = () => {
  const [url, setUrl] = useState("");
  const [robotsData, setRobotsData] = useState([]);
  const [sitemapData, setSitemapData] = useState("");
  const [rawText, setRawText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validateUrl = (inputUrl) => {
    try {
      new URL(inputUrl);
      return true;
    } catch {
      return false;
    }
  };

  const submitURL = () => {
    if (!url) {
      setError("Please enter a valid URL");
      return;
    }

    setLoading(true);
    setError("");
    setRobotsData([]);
    setSitemapData("");
    setRawText("");

    let formattedUrl = url;
    if (!formattedUrl.startsWith("http")) {
      formattedUrl = "https://" + formattedUrl;
    }

    if (!validateUrl(formattedUrl)) {
      setError("Please enter a valid URL");
      setLoading(false);
      return;
    }

    if (formattedUrl.endsWith("/robots.txt")) {
      formattedUrl = formattedUrl.slice(0, -11);
    } else if (formattedUrl.endsWith("/")) {
      formattedUrl = formattedUrl.slice(0, -1);
    }

    const apiUser = "https://js-apis.maakeetoo.com/page-seo/get-page?url=";

    // Fetch robots.txt
    fetch(apiUser + formattedUrl + "/robots.txt")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch robots.txt");
        }
        return response.json();
      })
      .then((data) => {
        const parsedData = parseRobotsTxt(data.body);
        setRobotsData(parsedData);
        setRawText(data.body);
      })
      .catch((error) => {
        console.error("Error fetching robots.txt:", error);
        setError(
          "Unable to retrieve robots.txt. Please check the URL and try again."
        );
      })
      .finally(() => {
        setLoading(false);
      });

    // Fetch sitemap.xml
    fetch(apiUser + formattedUrl + "/sitemap.xml")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch sitemap.xml");
        }
        return response.json();
      })
      .then((data) => {
        const formattedSitemap = formatSitemapContent(data.body);
        setSitemapData(formattedSitemap);
      })
      .catch((error) => {
        console.error("Error fetching sitemap.xml:", error);
        setError(
          "Unable to retrieve sitemap.xml. Please check the URL and try again."
        );
      });
  };

  const formatSitemapContent = (sitemapContent) => {
    if (!sitemapContent) {
      return "<p>No sitemap data available.</p>";
    }

    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(sitemapContent, "text/xml");
    let locNodes = xmlDoc.querySelectorAll("loc");

    if (!locNodes || locNodes.length === 0) {
      return "<p>No sitemap data available.</p>";
    }

    let tableHTML = "<table>";
    tableHTML += "<thead><tr><th>No.</th><th>URL</th></tr></thead>";
    tableHTML += "<tbody>";

    for (let i = 0; i < locNodes.length; i++) {
      let url = locNodes[i].textContent.trim();

      // Skip rows with empty or undefined URLs
      if (url && url.trim() !== "") {
        tableHTML += `<tr><td>${
          i + 1
        }</td><td style="padding:20px">${url}</td></tr>`;
      }
    }

    tableHTML += "</tbody></table>";
    return tableHTML;
  };

  const parseRobotsTxt = (robotsTxtContent) => {
    if (!robotsTxtContent) {
      console.error("Empty robots.txt content");
      return [];
    }

    let parsedData = robotsTxtContent
      .split("\n")
      .map((line) => {
        let parts = line.split(/\s+/);
        if (parts.length >= 2) {
          const directive = parts[0].trim();
          const value = parts.slice(1).join(" ").trim();

          if (directive.toLowerCase() !== "sitemap") {
            return { directive, value };
          }
        } else {
          console.error("Invalid line in robots.txt:", line);
        }

        return null;
      })
      .filter((entry) => entry !== null);

    return parsedData.filter((entry) => entry !== null);
  };

  return (
    <>
      <div className="container mt-100">
        <div className="main-head">
          <h1 className="color-brand-1 text-center">
            <b>Robots.txt Tester</b>
          </h1>
        </div>
        <div className="container-form">
          <div className="tool_description">
            <h6 className="font-md color-grey-400 mb-20">
              A robots.txt reader tool interprets the robots.txt file on a
              website, providing insights into directives that guide web
              crawlers. It displays rules controlling crawler access, helping
              users understand and optimize search engine interactions. This
              tool facilitates SEO analysis and website indexing strategies by
              revealing how search engines navigate and index content based on
              specified guidelines. It ensures effective communication between
              website owners and search engines, influencing online visibility
              and accessibility.
            </h6>
          </div>

          <div className="robots-input-section mb-40">
            <input
              type="text"
              id="url"
              placeholder="Enter Your Website"
              className="robots-input"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button onClick={submitURL} className="hover-up btn btn-brand-1">
              Submit
            </button>
          </div>

          {loading && <Loader />}

          {error && <div className="error-message">{error}</div>}

          <div
            id="result"
            style={{
              display:
                robotsData.length || sitemapData || rawText ? "block" : "none",
            }}
          >
            <div className="card-offer mb-30" id="robotsSection">
              <h2 className="color-brand-1 text-center">Robot.txt Rules</h2>
              <div id="robotsContent" className="scroll_content">
                <table>
                  <thead>
                    <tr>
                      <th>Crawler</th>
                      <th>Rules</th>
                    </tr>
                  </thead>
                  <tbody>
                    {robotsData.map((entry, index) => (
                      <tr key={index}>
                        <td>{entry.directive}</td>
                        <td>{entry.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-offer mb-30" id="sitemapSection">
              <h2 className="color-brand-1 text-center">Sitemaps</h2>
              <div
                id="sitemapContent"
                className="scroll_content"
                dangerouslySetInnerHTML={{ __html: sitemapData }}
              />
            </div>
            <div className="card-offer mb-30" id="rawTextSection">
              <h2 className="color-brand-1 text-center">Raw Text</h2>
              <pre id="rawTextContent" className="scroll_content">
                {rawText}
              </pre>
            </div>
          </div>

          <div>
            <h5 className="font-md color-grey-400 mb-20">
              <b>FAQ</b>
            </h5>
            <p className="font-md color-grey-400 mb-20">
              <b>Q1. What is Robots.txt ?</b>
            </p>
            <p className="font-md color-grey-400 mb-20">
              Robots.txt is a text file on websites guiding web robots, such as
              search engine crawlers, on which pages to crawl or avoid. Placed
              at the site&apos;s root, it employs directives like
              &quot;User-agent&quot; to specify agents affected and
              &quot;Disallow&quot; to restrict access to certain sections. For
              instance, &quot;Disallow: /private/&quot; instructs robots to
              avoid crawling the &quot;/private/&quot; directory.
            </p>

            <p className="font-md color-grey-400 mb-20">
              <b> Q2. How to find Robots.txt?</b>
            </p>
            <p className="font-md color-grey-400 mb-20">
              To find the robots.txt file, simply append &quot;/robots.txt&quot;
              to a website&apos;s domain in the browser&apos;s address bar, like
              &quot;www.example.com/robots.txt&quot;. This text file, located at
              the root of the site, provides instructions for web crawlers.
              Alternatively, search engines and online tools can help users to
              search for specific files, such as the robots.txt file, using
              specific search queries.
            </p>

            <p className="font-md color-grey-400 mb-20">
              <b>Q3. What are Sitemap and its benefits ?</b>
            </p>
            <p className="font-md color-grey-400 mb-20">
              A sitemap is a structured file on websites, aiding search engines
              in efficient content discovery and indexing. It encompasses
              essential page information, updating engines on new or altered
              pages. This facilitates accurate indexing, optimizing search
              results. Through sitemaps, websites ensure optimal visibility,
              enhancing search engine rankings and user experience by guiding
              engines to relevant content.
            </p>
          </div>
        </div>{" "}
        <div className="canvas-footer-website">
          <h6>
            Powered by
            <Link
              href="https://nextgrowthlabs.com/?utm_source=html_editor_web#form"
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

export default RobotsTxtTool;
