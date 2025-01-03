import Link from "next/link";
import Country from "../../aso/elements/Country";
// import ReCaptcha from "../elements/Recaptcha"
import PlateFormTabs from "../elements/PlateFormTabs";
import DefaultMessage from "../elements/DefaultMessage";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { selectedCountryAtom } from "../../../state/atoms";
import Loader from "../../elements/Loader";
import { useAtom } from "jotai";
import DisplaySuggestion from "./DisplaySuggestion";
import { toast } from "react-toastify";

const KeywordSuggestion = () => {
  const [selectedCountry] = useAtom(selectedCountryAtom)
  const [searchKeyword, setSearchKeyword] = useState("")
  const [selectedSource, setSelectedSource] = useState("play")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  
// google recatcha 
async function handleCaptchaSubmission(token) {
  try {
    if (token) {
      const response = await fetch("/api/verify-recaptcha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })

      const result = await response.json()
      if (result.success) {
        setIsVerified(true)
      } else {
        setIsVerified(false)
      }
    }
  } catch (error) {
    console.error("Captcha verification failed:", error)
    setIsVerified(false)
  }
}


  const handleChange = (token) => {
    handleCaptchaSubmission(token);
  };
  function handleExpired() {
    setIsVerified(false);
  }

  // query for the keywords data
  const { data, isFetching, isFetched, refetch, isError } = useQuery({
    queryKey: [
      "get keyword suggestion",
      searchKeyword,
      selectedSource,
      selectedCountry,
    ],
    queryFn: () =>
      fetch(`/api/get-keyword-suggestion`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          term: searchKeyword,
          country: selectedCountry.code,
          selectedSource: selectedSource,
          lang: "en",
        }),
      }).then((res) => {
        if (!res.ok) {
          // Throw an error if the response status is not successful
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      }),
    staleTime: Infinity,
    cacheTime: 10 * 60 * 1000,
    enabled: false,
    retry: 0,
  });

  const getSuggestion = async () => {
    // Check if the reCAPTCHA token is available
    // if (!isVerified) {
    //   toast.warning("Please complete the reCAPTCHA", { autoClose: 2000 })
    //   return
    // }

    try {
      setIsProcessing(true);
      // Check if searchKeyword is valid
      if (searchKeyword.length <= 1) {
        toast.warning("Please enter a keyword", { autoClose: 2000 });
        return;
      }

      await refetch();
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      toast.error("An error occurred while fetching suggestions", {
        autoClose: 2000,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <section className="section" style={{ backgroundColor: "#E0F1F4" }}>
        <div className="container text-center">
          <div className="row mt-50">
            <div className="col-xl-8 col-lg-10 m-auto">
              <p className="tools_tag mb-10">Free SEO Tool</p>
              <h1 className="font-4xl-bold color-brand-1 mb-25">
                Keyword Suggestion Tool
              </h1>
              <p className="font-md color-grey-500 mb-25">
                The keyword suggestion tool enables users to enter a single
                keyword. Users have the option to select their desired source
                for suggestions, including Google, YouTube, Play Store, Apple
                Store, and Bing. After completing the reCAPTCHA verification,
                users can click the &quot;Get Suggestions&quot; button to
                receive the most relevant keywords as suggestions.
              </p>
              <div className="aso-input-form mb-25 main-box-holder">
                <div className="search-box-suggestion">
                  <div className="main-search-bar">
                    <input
                      type="text"
                      autoComplete="off"
                      id="search-bar-input1"
                      className="search-input"
                      placeholder="Enter the keyword"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Country />
                </div>
              </div>
              {/* ******** suggestion tabs *********** */}
              <PlateFormTabs setSelectedSource={setSelectedSource} />
              {/* *********************************** */}
              {/* ReCaptcha */}
              {/* <div className="d-flex justify-content-center mt-20">
                <ReCaptcha
                  onChange={handleChange}
                  onExpired={handleExpired}
                />
              </div> */}

              {/* **************************** */}
              <button
                type="submit"
                className="audit-button ptb-15 pl-15 pr-15 mt-20"
                onClick={getSuggestion}
                disabled={isProcessing}
              >
                Get Suggestions
              </button>
            </div>
          </div>

          {/* ************************** */}
          {isFetching ? (
            <div className="mb-40 mt-40">
              <Loader />
            </div>
          ) : isFetched && data ? (
            <DisplaySuggestion
              suggestions={data.data}
              selectedSource={selectedSource}
            />
          ) : isError ? (
            <DefaultMessage
              message={
                "We are currently experiencing high traffic. Please try again later!"
              }
            />
          ) : null}

          {/* ************************** */}
          <div className="mb-40 mt-30">
            <h5>
              Powered by-
              <Link
                href="https://nextgrowthlabs.com/?utm_source=multi_tool_web"
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
    </>
  );
};

export default KeywordSuggestion;
