import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import KeywordGenerator from "../components/tools/keyword-generator-tool/KeywordGenerator"
import KeywordGeneratorArticle from "../components/tools/keyword-generator-tool/KeywordGeneratorArticle"
const KeywordGeneratorTool = () => {
  return (
    <>
      <Layout>
        <PageHead
          title="Keyword generator tool - Next Labs"
          ogDescription="keyword generator to find millions of up-to-date keyword suggestions, and enhance your SEO. Enter a topic and get your filtered list of the best keywords for you"
          ogType="article"
        />
        <KeywordGenerator />
        <KeywordGeneratorArticle />
      </Layout>
    </>
  )
}

export default KeywordGeneratorTool
