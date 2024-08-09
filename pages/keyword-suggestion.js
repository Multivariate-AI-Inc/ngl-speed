import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import KeywordSuggestion from "../components/tools/keyword-suggestion/KeywordSuggestion"
import KeywordSuggestionArticle from "../components/tools/keyword-suggestion/KeywordSuggestionArticle"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()
const KeywordGeneratorTool = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <PageHead
          title="Keyword generator tool - Next Labs"
          ogDescription="keyword generator to find millions of up-to-date keyword suggestions, and enhance your SEO. Enter a topic and get your filtered list of the best keywords for you"
          ogType="article"
          canonical={"https://nextgrowthlabs.com/keyword-suggestion"}
        />
        <KeywordSuggestion />
        <KeywordSuggestionArticle />
      </Layout>
    </QueryClientProvider>
  )
}

export default KeywordGeneratorTool
