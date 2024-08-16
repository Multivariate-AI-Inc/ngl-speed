import dynamic from "next/dynamic";
import PageHead from "../components/elements/PageHead";
import Layout from "../components/layout/Layout";
import ContentAssistTool from "../components/tools/content-assist/ContentAssistTool";
const ContentAssistArticle = dynamic(() =>
  import("../components/tools/content-assist/ContentAssistArticle")
);
const ContentAssistVideo = dynamic(() =>
  import("../components/tools/content-assist/ContentAssistVideo")
);
const ContentAssist = () => {
  return (
    <Layout>
      <PageHead
        title={"SEO and ASO Keyword Content Writing Assistant - Next Labs"}
        ogDescription="SEO and ASO Keyword Content Writing Assistant is a great SEO keyword extractor tool. You can create, edit and optimize your work directly with the tool."
        ogType="article"
        canonical={
          "https://nextgrowthlabs.com/seo-and-aso-keyword-content-writing-assistant"
        }
      />
      <ContentAssistTool />
      <ContentAssistVideo />
      <ContentAssistArticle />
    </Layout>
  );
};

export default ContentAssist;
