import { useQuery } from "@tanstack/react-query"
import AppBasicInfo from "./AppBasicInfo"
import SEOData from "./SeoData"
import { userSelectedApp } from "../../../state/atoms"
import { useAtom } from "jotai"
import Loader from "../../elements/Loader"
import { fetchAndStoreAppDataToBox } from "../../utils"

const AppAnalysis = () => {
  const [userSelectedAppObject] = useAtom(userSelectedApp)
  const { appPackageURL, applicationId, device, country } =
    userSelectedAppObject
  const { data, isFetched } = useQuery({
    queryKey: ["get single app data", userSelectedAppObject],
    queryFn: () =>
      fetchAndStoreAppDataToBox(appPackageURL, applicationId, device, country),
    enabled: appPackageURL !== undefined,
    staleTime: 5 * 60 * 1000, 
    cacheTime: 10 * 60 * 1000,
  })

  const loaderBG = userSelectedAppObject ? { backgroundColor: "#E0F1F4" } : ""
  return (
    <>
      {!isFetched && <Loader style={loaderBG} />}
      {isFetched && data !== undefined && (
        <div
          id="play-info-outer-box"
          className="app-info-outer-box"
        >
          <AppBasicInfo userAppData={data} />
          <div className="right-seo-table-div">
            <SEOData userAppData={data} />
          </div>
        </div>
      )}
    </>
  )
}

export default AppAnalysis
