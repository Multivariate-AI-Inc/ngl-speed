import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import BulkIOSKeywordRankTracker from "../components/tools/bulk-ios-keyword-ranks/BulkIOSKeywordRankTracker"
import BulkIOSKeywordArticle from "../components/tools/bulk-ios-keyword-ranks/BulkIOSKeywordArticle"
const queryClient = new QueryClient()
const IOSKeyword = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <PageHead
          title="Bulk iOS Keyword Rank Tracker - Next Labs"
          ogDescription="Effortlessly organize, analyze, and track keywords for enhanced iOS app visibility and discoverability. Maximize downloads and user engagement with data-driven keyword strategies using this powerful and intuitive tool."
          ogType="article"
          canonical={"https://nextgrowthlabs.com/bulk-ios-keywords-tracker"}
        />
        <BulkIOSKeywordRankTracker />
        <BulkIOSKeywordArticle />
      </Layout>
    </QueryClientProvider>
  )
}

export default IOSKeyword
