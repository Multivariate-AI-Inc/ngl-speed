import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import DisplayGeneratedKeyword from "./DisplayGeneratedKeyword";
import Loader from "../../elements/Loader";

function KeywordGenerator() {
  const [inputKeyword, setInputKeyword] = useState("");
  const [generatedKeywords, setGeneratedKeywords] = useState({});
  const [keyValue, setKeyValue] = useState("");
  const [isLoading, setLoading] = useState();

  async function generateKeywords() {
    if (inputKeyword === "") {
      toast.warning("Please enter keyword first !", { autoClose: 2000 });
      return;
    }
    if (inputKeyword === keyValue) {
      toast.warning("Please enter new keyword", { autoClose: 2000 });
      return;
    }

    setGeneratedKeywords([]);
    setKeyValue("");
    setLoading(true);

    let resultsKeywordObj;
    // Create an async function to use await inside the loop
    async function fetchSuggestions() {
      try {
        const response = await getKeywordResults({ keyword: inputKeyword });
        console.log("response data", response);
        resultsKeywordObj = response;
      } catch (err) {
        setLoading(false);
      }
    }

    await fetchSuggestions().then(() => {
      setKeyValue(inputKeyword);
      setGeneratedKeywords(resultsKeywordObj);
      setLoading(false);
    });
  }

  async function getKeywordResults(data) {
    const apiURL = "/api/keyword-generator";
    console.log(data);
    let keywords;
    await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          toast.error(
            "We are currently experiencing high traffic, Please try again later!",
            { autoClose: 2000 }
          );
          setLoading(false);
          throw new Error("Network response was not ok");
        }
        return response;
      })
      .then(async (data) => {
        let k = await data.json();
        keywords = k;
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
    return keywords;
  }

  // *******************************
  return (
    <section className="section" style={{ backgroundColor: "#E0F1F4" }}>
      <div className="container text-center">
        <div className="row mt-50 mb-5">
          <p className="tools_tag">Free SEO Tool</p>
          <h1 className="font-4xl-bold color-brand-1 mb-25 mt-10">
            Keyword Generator Tool
          </h1>
          <p className="font-md color-grey-500 mb-25">
            A free keyword generator tool is a valuable digital marketing and
            SEO (Search Engine Optimization) tool designed to assist content
            creators, website owners, and digital marketers in generating a
            comprehensive list of relevant keywords or key phrases related to a
            particular topic, niche, or industry. The primary purpose of a
            keyword generator tool is to help users discover and identify
            high-potential keywords that can improve their content&apos;s
            visibility and search engine rankings.
          </p>
          <div className="aso-input-form mb-25 main-box-holder">
            <div className="search-box-suggestion">
              <div className="main-search-bar">
                <input
                  type="text"
                  autoComplete="off"
                  className="search-input"
                  placeholder="Enter Any Keyword"
                  value={inputKeyword}
                  onChange={(e) => setInputKeyword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="audit-button"
              onClick={generateKeywords}
            >
              Get Keywords
            </button>
          </div>
        </div>
        {/* ************************** */}
        {isLoading && <Loader />}
        {generatedKeywords && Object.keys(generatedKeywords).length > 0 && (
          <DisplayGeneratedKeyword
            data={generatedKeywords}
            keyword={keyValue}
          />
        )}
        {/* ************************** */}
        <div className="mb-40 mt-30">
          <h5>
            Powered by-
            <Link
              href="https://nextgrowthlabs.com/?utm_source=keyword_generator_web"
              target="_blank"
              rel="noopener noreferrer"
              className="utm-link"
            >
              NextGrowth Lab
            </Link>
          </h5>
        </div>
      </div>
    </section>
  );
}

export default KeywordGenerator;
