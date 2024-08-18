import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import BulkWebsiteArticle from "../components/tools/bulk-website-rank-checker/BulkWebsiteArticle"
import BulkWebsiteKeywordRank from "../components/tools/bulk-website-rank-checker/BulkWebsiteKeywordRank"
const IOSKeyword = () => {
  return (
    <Layout>
      <PageHead
        title="Free Bulk Website Rank Checker & SEO Keyword Tracker - Next Labs"
        ogDescription="This tool provides insights and metrics related to a website's Google search engine ranking. use this free tool to check the position of any website against a list of keywords"
        ogType="article"
        canonical={"https://nextgrowthlabs.com/bulk-website-rank-checker"}
      />
      <BulkWebsiteKeywordRank />
      <BulkWebsiteArticle />
    </Layout>
  )
}

export default IOSKeyword
