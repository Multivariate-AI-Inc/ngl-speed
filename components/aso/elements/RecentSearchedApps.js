import { useEffect } from "react";
import { getRecentAppData } from "../../utils";
import { useAtom } from "jotai";
import {
  recentApps,
  selectedAppCountry,
  showAppSelected,
  showRecentApps,
  userSelectedApp,
  formInputData,
  focusAtom
} from "../../../state/atoms";
const RecentSearchedApps = () => {
  const [recentlySelectedApps, setRecentlySelectedApps] = useAtom(recentApps);
  const [_1, setAppSelect] = useAtom(showAppSelected);
  const [_2, setUserSelectApp] = useAtom(userSelectedApp);
  const [_3, setShowRecentApps] = useAtom(showRecentApps);
  const [country] = useAtom(selectedAppCountry);
  const [formInput, setFormInput] = useAtom(formInputData)
  const [_4, setInputFocused] = useAtom(focusAtom)

  useEffect(() => {
    setRecentlySelectedApps(getRecentAppData());
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const suggestions = document.querySelectorAll('.suggestions.format-suggestions');
      suggestions.forEach((suggestion) => {
        if (!suggestion.contains(event.target)) {
          suggestion.classList.remove('format-suggestions');
          setInputFocused({})
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  return (
    <>
      {recentlySelectedApps?.length > 0 && (
        <ul className="suggestions format-suggestions">
          <p className="info-search">Recently Selected Apps:</p>
          {recentlySelectedApps.map((item) => (
            <li
              key={item.icon_urls}
              className="li-suggestion-item"
              application-url={`${item["data-package-url"]}`}
              application-id={`${item["app-package-id"]}`}
              application-img-logo={`${item.icon_urls}`}
              device={`${item.device}`}
              onClick={(e) => {
                e.stopPropagation();
                setFormInput({ ...formInput, appURL: item.appPackageURL});
                if (item.device === "android") {
                  setUserSelectApp({
                    appPackageURL: item["data-package-url"],
                    applicationId: item["app-package-id"],
                    device: "android",
                    country,
                  });
                //   if (typeof dataLayer !== "undefined" && Array.isArray(dataLayer)) {
                //   dataLayer.push({
                //     event: "play_app_select",
                //     // keyword: keyword,
                //     "gtm.elementId": item["app-package-id"],
                //     "gtm.elementUrl": item["data-package-url"],
                //     "gtm.uniqueAnalyticsReports": "AnalyticsLiveWeb_nl",
                //   })
                // }
                }
                if (item.device === "apple") {
                  setUserSelectApp({
                    appPackageURL: item["data-package-url"],
                    applicationId: item["app-package-id"],
                    device: "apple",
                    country,
                  });

                //   if (typeof dataLayer !== "undefined" && Array.isArray(dataLayer)) {
                //   dataLayer.push({
                //     event: "ios_app_select",
                //     // keyword: keyword,
                //     "gtm.elementId": item["app-package-id"],
                //     "gtm.elementUrl": item["data-package-url"],
                //     "gtm.uniqueAnalyticsReports": "AnalyticsLiveWeb_nl",
                //   })
                // }
                }
                
                setShowRecentApps({});
                setAppSelect(true);

              }}
            >
              <div className="show-device-icon">
                <div className="li-suggestion-item-logo">
                  <img
                    src={item.icon_urls}
                    alt="app_icon"
                    className="app-icon-li-item"
                  />
                </div>
                <div className="li-suggestion-item-info">
                  <strong>{item.packageName}</strong>
                  <span>{item.developer}</span>
                </div>
              </div>
              <div className="device-icon" device="${item.device}">
                <img
                  src={item.deviceIcon}
                  alt="device-logo"
                  className="device-icon-logo"
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RecentSearchedApps;
