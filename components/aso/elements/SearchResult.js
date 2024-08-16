import { useAtom } from "jotai";
import {
  searchedApps,
  searchKeyword,
  selectedAppCountry,
  showAppSelected,
  showSearchApps,
  userSelectedApp,
  pricingWrapper,
  formInputData,
  focusAtom,
  startButton
} from "../../../state/atoms";
import { prepareDataForRequests } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import useDebounce from "../elements/useDebounce";
const searchShimmerArray = [0, 1, 2, 3, 4, 5];
const SearchResults = () => {
  const [countryCode, _1] = useAtom(selectedAppCountry);
  const [searchResults, setSearchResult] = useAtom(searchedApps);
  const [searchAppKeyword, _2] = useAtom(searchKeyword);
  const [searchAppVisible, setSearchAppVisible] = useAtom(showSearchApps);
  const [_4, setAppSelect] = useAtom(showAppSelected);
  const [_5, setUserSelectedApp] = useAtom(userSelectedApp);
  const [country] = useAtom(selectedAppCountry);
  const [isHidden, setIsHidden] = useAtom(pricingWrapper);
  const [formInput, setFormInput] = useAtom(formInputData);
  const [_8, setInputFocused] = useAtom(focusAtom);
  const [isClickStart, setClickStart] = useAtom(startButton)
  const debouncedKeyword = useDebounce(searchAppKeyword, 500);

  // ******************debouncing*******************
  const { data, isFetched, isPending, isError } = useQuery({
    queryKey: ["searchResults", debouncedKeyword, countryCode],
    queryFn: () => prepareDataForRequests(debouncedKeyword, countryCode),
    enabled: debouncedKeyword.length > 0,
    staleTime: Infinity,
  });
  if (isFetched) {
    setSearchResult(data);
  }

  function recentAppDataFromLocalStorage(appData) {
    let oldAppData = localStorage.getItem("Recent Selected App");
    if (oldAppData) {
      let Array = JSON.parse(oldAppData);
      Array.unshift(appData);
      let uniqueArray = Array.filter(
        (item, index) =>
          Array.findIndex(
            (obj) => JSON.stringify(obj) === JSON.stringify(item)
          ) === index
      );
      localStorage.setItem("Recent Selected App", JSON.stringify(uniqueArray));
    } else {
      localStorage.setItem("Recent Selected App", JSON.stringify([appData]));
    }
  }

  function handleSelectedApp(data) {
    recentAppDataFromLocalStorage(data);
  }
  // handle audit app
  const handleSelectedAppForAudit = (data) => {
    // console.log("selected app data", data)
    if (searchAppVisible["search-box1"]) {
      setFormInput({ ...formInput, appURL: data["data-package-url"] });
    }
  };
  // ******** close suggestion list whenever click outside
  const appSuggestionRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const suggestion = appSuggestionRef.current;
      if (suggestion && !suggestion.contains(event.target)) {
        suggestion.classList.remove("format-suggestions");
        setClickStart(false)
        setSearchAppVisible({})
        setInputFocused({});
        if (isHidden) {
          setIsHidden(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [appSuggestionRef]);

  return (
    <>
      {debouncedKeyword.length > 0 && isPending && (
        <div id="searching-shimmer1" className="searching-shimmer">
          <ul className="o-vertical-spacing o-vertical-spacing--l">
            {searchShimmerArray.map((item) => (
              <li key={item} className="blog-post o-media">
                <div className="o-media__figure">
                  <span className="skeleton-box"></span>
                </div>
                <div className="o-media__body">
                  <div className="o-vertical-spacing">
                    <h3 className="blog-post__headline">
                      <span
                        className="skeleton-box"
                        style={{ width: "55%" }}
                      ></span>
                    </h3>
                    <p>
                      <span
                        className="skeleton-box"
                        style={{ width: "80%" }}
                      ></span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isError && (
        <ul className="suggestions format-suggestions">
          <p className="info-search">App Not Found</p>
          <li className="li-suggestion-item">Could not find your app</li>
        </ul>
      )}
      {!isPending && isFetched && searchResults.length > 0 && (
        <ul ref={appSuggestionRef} className="suggestions format-suggestions">
          {isClickStart ? <p className="info-search">Popular Apps:</p> : <p className="info-search">Search Results:</p>}
          {searchResults.map((item) => (
            <li
              className="li-suggestion-item"
              application-url={item.dataPackageUrl}
              application-id={item.appPackageId}
              application-img-logo={item.app_icon}
              device={item.device}
              key={item.app_icon}
              onClick={(e) => {
                e.stopPropagation();
                const data = {
                  packageName: item.appName,
                  developer: item.developer,
                  icon_urls: item.app_icon,
                  device: item.device,
                  "data-package-url": item.dataPackageUrl,
                  "app-package-id": item.appPackageId,
                };
                handleSelectedAppForAudit(data);
                handleSelectedApp(data);
                if (item.device === "android") {
                  setUserSelectedApp({
                    appPackageURL: item.dataPackageUrl,
                    applicationId: item.appPackageId,
                    device: "android",
                    country,
                  });
                  //   if (typeof dataLayer !== "undefined" && Array.isArray(dataLayer)) {
                  //     dataLayer.push({
                  //       event: "play_app_select",
                  //       keyword: searchAppKeyword,
                  //       "gtm.elementId": item.appPackageId,
                  //       "gtm.elementUrl": item.dataPackageUrl,
                  //       "gtm.uniqueAnalyticsReports": "AnalyticsLiveWeb_nl",
                  //     })
                  //   }
                }
                if (item.device === "apple") {
                  setUserSelectedApp({
                    appPackageURL: item.dataPackageUrl,
                    applicationId: item.appPackageId,
                    device: "apple",
                    country,
                  });
                  //   if (typeof dataLayer !== "undefined" && Array.isArray(dataLayer)) {
                  //     dataLayer.push({
                  //       event: "ios_app_select",
                  //       keyword: searchAppKeyword,
                  //       "gtm.elementId": item.appPackageId,
                  //       "gtm.elementUrl":  item.dataPackageUrl,
                  //       "gtm.uniqueAnalyticsReports": "AnalyticsLiveWeb_nl",
                  //     })
                  //   }
                }

                setAppSelect(true);
                setSearchAppVisible({});
              }}
            >
              <div className="show-device-icon">
                <div className="li-suggestion-item-logo">
                  <img
                    src={item.app_icon}
                    alt="app_icon"
                    className="app-icon-li-item"
                  />
                </div>
                <div className="li-suggestion-item-info">
                  <strong>{item.appName}</strong>
                  <span>{item.developer}</span>
                </div>
              </div>
              <div className="device-icon" device={item.device}>
                <img
                  src={item.deviceIcon}
                  alt="device-logo"
                  className="device-icon-logo"
                />
              </div>
            </li>
          ))}
          <p className="info-search">
            Couldn&apos;t find your app try with <strong>App ID</strong> or{" "}
            <strong>App URL</strong>
            {/* <button className="audit-button"> */}
            {/* </button> or{" "} */}
            {/* <button className="audit-button"> */}
            {/* </button> */}
          </p>
        </ul>
      )}
    </>
  );
};

export default SearchResults;
