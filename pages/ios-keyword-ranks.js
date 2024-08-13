import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import IOSKeywordRankTracker from "../components/tools/ios-keyword-rank/IOSKeywordRankTracker"
import IOSKeywordArticle from "../components/tools/ios-keyword-rank/IOSKeywordArticle"
const queryClient = new QueryClient()
const IOSKeyword = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <PageHead
          title="iOS Keyword Rank Tracker | Search iTunes Store - Any Country - Next Labs"
          ogDescription="iOS Keyword Ranks tool allows you to check your app's keyword rankings in the App Store. Improve your ASO strategy and increase your app's visibility with this easy-to-use tool."
          ogType="article"
          canonical={"https://nextgrowthlabs.com/ios-keyword-ranks"}
        />
        <IOSKeywordRankTracker />
        <IOSKeywordArticle />
      </Layout>
    </QueryClientProvider>
  )
}

export default IOSKeyword
