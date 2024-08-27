import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import WordToHtml from "../components/tools/word-to-html converter/WordToHtml"
import WordToHtmlArticle from "../components/tools/word-to-html converter/WordToHtmlArticle"
const HtmlEditor = () => {
  return (
    <>
      <Layout>
        <PageHead
          title={"Word to html converter - Next Labs"}
          ogDescription="The NextGrowth Labs - Word to HTML Editor is a versatile and user-friendly online tool that caters to a wide range of users, from beginners to experienced developers and designers."
          ogType="article"
          canonical={"https://nextgrowthlabs.com/word-to-html"}
        />
        <WordToHtml />
        <WordToHtmlArticle />
      </Layout>
    </>
  )
}

export default HtmlEditor
