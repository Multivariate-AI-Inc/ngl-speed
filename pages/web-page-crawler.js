import React from "react"
import Layout from "../components/layout/Layout"
import PageHead from "../components/elements/PageHead"
import CrawlToolArticle from "../components/tools/web-page-crawler/CrawlToolArticle"
import CrawlTest from "../components/tools/web-page-crawler/CrawlTest"
const WebCrawlTest = () => {
  return (
    <Layout>
      <PageHead
        title={"Utilize Web Page Crawler to Elevate Technical SEO - Next Labs"}
        ogDescription="A web crawler online plays a significant role in indexing web pages. This positively boosts your SEO ranking visibility as well as conversions. Let’s understand how this crawler works and its benefits"
        ogType="article"
      />
      <CrawlTest />
      <CrawlToolArticle />
    </Layout>
  )
}

export default WebCrawlTest
