import PageHead from "../components/elements/PageHead"
import Layout from "../components/layout/Layout"
import ContentAssistArticle from "../components/tools/content-assist/ContentAssistArticle"
import ContentAssistTool from "../components/tools/content-assist/ContentAssistTool"
import ContentAssistVideo from "../components/tools/content-assist/ContentAssistVideo"
const ContentAssist = () => {
  return (
    <Layout>
      <PageHead
        title={"SEO and ASO Keyword Content Writing Assistant - Next Labs"}
        ogDescription="SEO and ASO Keyword Content Writing Assistant is a great SEO keyword extractor tool. You can create, edit and optimize your work directly with the tool."
        ogType="article"
      />
      <ContentAssistTool />
      <ContentAssistVideo />
      <ContentAssistArticle />
    </Layout>
  ) 
}

export default ContentAssist
