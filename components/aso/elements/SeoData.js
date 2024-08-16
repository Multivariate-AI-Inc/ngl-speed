import { generateKeywordTable } from "../../utils"

const SEOData = ({ userAppData }) => {
  const keywords = generateKeywordTable(userAppData.appDescription)

  return (
        <>
      <div className="seo-data">
        <h5 className="seo-title">SEO Data</h5>
        <table className="seo-info-table">
          <tbody>
            <tr>
              <td>Title Length :</td>
              <td style={{ width: "40%" }}>{userAppData.appName.length}</td>
            </tr>
            <tr>
              <td>Description Length:</td>
              <td style={{ width: "40%" }}>
                {userAppData.appDescription.length}
              </td>
            </tr>
            <tr>
              <td>Image Count :</td>
              <td style={{ width: "40%" }}>{userAppData.screenshotCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="tableDiv">
        <table>
          <caption>
            <b>
              Powered by{" "}
              <a href="https://stagingngls.wpengine.com/?utm_source=search_extension">
                NextGrowth Labs
              </a>
            </b>
          </caption>
          <thead>
            <tr>
              <th>Keyword</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {keywords.map((item, index) => (
              <tr key={index}>
                <td>{item.keyword}</td>
                <td>{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </>
  )
}

export default SEOData
