import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import PageSpeedArticle from "../components/tools/page-speed-assessment/PageSpeedArticle"
import Index from "../components/tools/page-speed-assessment/Index"
const PageSpeed = () => {
  return (
      <Layout>
        <PageHead
          title="Page Speed Assessment Tool - Next Labs"
          ogDescription="Measure your website's speed and performance with our online speed test tool. Get valuable insights into Page speed. To enhance your website's Core Vitals, Log on to NextGrowthLabs.com."
          ogType="article"
          canonical={"https://nextgrowthlabs.com/page-speed-assessment"}
        />
        <Index />
        <PageSpeedArticle />
      </Layout>
  )
}

export default PageSpeed
