import React from "react"
import Layout from "../components/layout/Layout"
import PageHead from "../components/elements/PageHead"
import TechCheckerArticle from "../components/tools/website-technology-checker/TechCheckerArticle"
import TechChecker from "../components/tools/website-technology-checker/TechChecker"
const TechnologyChecker = () => {
  return (
    <Layout>
      <PageHead
        title={"How to Check the Technology of Websites? - Next Labs"}
        ogDescription="Unlock insights into any website's technology stack with our Website Technology Checker Tool! Analyze CMS, web servers, JavaScript libraries, and more with just a click."
        ogType="article"
      />
      <TechChecker />
      <TechCheckerArticle />
    </Layout>
  )
}
export default TechnologyChecker