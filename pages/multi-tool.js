import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RankTracker from "../components/tools/multi-tool/RankTracker"
import MultiToolArticle from "../components/tools/multi-tool/MultiToolArticle"
const queryClient = new QueryClient()
const MultiTool = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <PageHead
          title="Your Ultimate Search Results Aggregator - Next Labs"
          ogDescription="Introducing the 'Search & App Rank Tracker' tool, Stay on top of your online presence and app rankings effortlessly with our comprehensive platform."
          ogType="article"
          canonical={"https://nextgrowthlabs.com/multi-tool"}
        />
        <RankTracker />
        <MultiToolArticle />
      </Layout>
    </QueryClientProvider>
  )
}

export default MultiTool
