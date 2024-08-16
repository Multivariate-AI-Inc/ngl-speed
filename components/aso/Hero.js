import React, { useRef } from "react";
import Country from "./elements/Country";
import { useAtom } from "jotai";
import {
  searchKeyword,
  showRecentApps,
  showSearchApps,
  showAppSelected,
  focusAtom,
  startButton,
} from "../../state/atoms";
import RecentSearchedApps from "./elements/RecentSearchedApps";
import SearchResults from "./elements/SearchResult";
import AppAnalysis from "./elements/AppAnalysis";

const Hero = () => {
  const [recentAppsVisible, setRecentAppsVisible] = useAtom(showRecentApps);
  const [searchAppKeyword, setSearchAppKeyword] = useAtom(searchKeyword);
  const [searchAppVisible, setSearchAppVisible] = useAtom(showSearchApps);
  const [appSelected] = useAtom(showAppSelected);
  const [isClickStart, setClickStart] = useAtom(startButton);
  const [inputFocused, setInputFocused] = useAtom(focusAtom);
  const inputRef = useRef();
  const clearInput = () => {
    setSearchAppKeyword("");
  };

  return (
    <>
      <section className="section" style={{ backgroundColor: "#E0F1F4" }}>
        <div className="container text-center">
          <div className="row mt-100 mb-100">
            <div className="col-xl-8 col-lg-10 m-auto">
              <h1 className="color-brand-1 mb-25 mt-10">
                {/* App Store Optimization */}
                Get Free ASO Analysis
              </h1>
              <p className="font-md color-grey-500 mb-25">
                With our expert ASO strategies, your app will not only engage
                more users but also hook them, leading to increased engagement
                and profitability. Let us help you maximize your app&apos;s
                potential and achieve your desired results, like boosting
                revenue or building brand awareness.
              </p>
              <div
                id="search-box1"
                className="aso-input-form mb-25 main-box-holder"
              >
                <div className="search-box-suggestion">
                  <div className="main-search-bar">
                    <input
                      type="text"
                      autoComplete="off"
                      id="search-bar-input1"
                      className="search-input"
                      placeholder="Enter an app name to get [quick insights, data, information]"
                      value={
                        searchAppKeyword === "Top apps" ? "" : searchAppKeyword
                      }
                      ref={inputRef}
                      onFocus={() => {
                        {
                          isClickStart
                            ? setRecentAppsVisible((prev) => {
                                return {
                                  ...prev,
                                  ["suggestions-box1"]: true,
                                };
                              })
                            : "";
                        }
                        setInputFocused((prev) => {
                          return {
                            ...prev,
                            ["search-box1"]: true,
                          };
                        });
                      }}
                      onChange={(e) => {
                        if (e.target.value.trim().length === 0) {
                          setRecentAppsVisible({});
                          setSearchAppVisible({});
                        }
                        setRecentAppsVisible({});
                        setSearchAppKeyword(e.target.value);
                        setSearchAppVisible((prev) => {
                          return {
                            ...prev,
                            ["search-box1"]: true,
                          };
                        });
                      }}
                    />
                    {inputFocused["search-box1"] && (
                      <button
                        id="close-search-form1"
                        className="close-search-form"
                        onClick={() => {
                          setRecentAppsVisible({});
                          setSearchAppVisible({});
                          setInputFocused({});
                          clearInput();
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="16px"
                          height="16px"
                          viewBox="0 0 16 16"
                          version="1.1"
                        >
                          <g id="surface1">
                            <path
                              style={{
                                fill: "#5a5a5c",
                                fillRule: "nonzero",
                                fillOpacity: 1,
                                stroke: "none",
                              }}
                              d="M 0.332031 0.332031 C 0.546875 0.121094 0.839844 -0.00390625 1.144531 -0.00390625 C 1.445312 -0.00390625 1.738281 0.121094 1.953125 0.332031 L 8 6.382812 L 14.046875 0.332031 C 14.496094 -0.113281 15.21875 -0.113281 15.667969 0.332031 C 16.113281 0.78125 16.113281 1.503906 15.667969 1.953125 L 9.617188 8 L 15.667969 14.046875 C 16.113281 14.496094 16.113281 15.21875 15.667969 15.667969 C 15.21875 16.113281 14.496094 16.113281 14.046875 15.667969 L 8 9.617188 L 1.953125 15.667969 C 1.503906 16.113281 0.78125 16.113281 0.332031 15.667969 C -0.113281 15.21875 -0.113281 14.496094 0.332031 14.046875 L 6.382812 8 L 0.332031 1.953125 C 0.121094 1.738281 -0.00390625 1.445312 -0.00390625 1.144531 C -0.00390625 0.839844 0.121094 0.546875 0.332031 0.332031 Z M 0.332031 0.332031 "
                            ></path>
                          </g>
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className="app-output-box">
                    {recentAppsVisible["suggestions-box1"] && (
                      <RecentSearchedApps />
                    )}
                    {searchAppVisible["search-box1"] && <SearchResults />}
                  </div>
                </div>
                <div>
                  <Country />
                </div>
                <button
                  type="submit"
                  className="audit-button"
                  id="Audit-App-button"
                  onClick={() => {
                    if (appSelected) {
                      console.log("appSelected");
                      inputRef.current.focus();
                    } else {
                      inputRef.current.focus();
                      setSearchAppKeyword("Top apps");
                      setClickStart(true);
                      setSearchAppVisible((prev) => {
                        return {
                          ...prev,
                          ["search-box1"]: true,
                        };
                      });
                    }
                  }}
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {appSelected && <AppAnalysis />}
    </>
  );
};

export default Hero;
