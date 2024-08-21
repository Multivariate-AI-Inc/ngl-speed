import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import KeywordShuffleTool from "../components/tools/keyword-shuffle-tool/KeywordShuffleTool"
import KeywordShuffleArticle from "../components/tools/keyword-shuffle-tool/KeywordShuffleArticle"
const KeywordShuffle = () => {
  return (
      <Layout>
        <PageHead
          title="Keyword shuffle tool - Next Labs"
          ogDescription="👉🏻 Merge and generate keywords using our keyword shuffle tool. ✅ One click copy 📋 & Download as CSV."
          ogType="article"
          canonical={"https://nextgrowthlabs.com/keyword-shuffle-tool"}
        />
        <KeywordShuffleTool />
        <KeywordShuffleArticle />
      </Layout>
  )
}

export default KeywordShuffle
