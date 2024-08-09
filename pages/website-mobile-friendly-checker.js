import PageHead from "../components/elements/PageHead";
import Layout from "../components/layout/Layout";
import MobileFriendlyTest from "../components/tools/website-mobile-friendly-checker/MobileFriendlyTest";
import ToolArticle from "../components/tools/website-mobile-friendly-checker/ToolArticle";

const WebsiteResponsiveTest = () => {
  return (
    <>
      <Layout>
        <PageHead
          title={"Free Website Mobile Friendly Checker - NextGrowth Labs"}
          ogDescription="A mobile-friendly checker evaluates websites for mobile device compatibility, assessing design, layout, and performance. Get insights to optimize for mobile browsing"
          ogType="article"
          canonical={
            "https://nextgrowthlabs.com/website-mobile-friendly-checker"
          }
        />
        <MobileFriendlyTest />
        <ToolArticle />
      </Layout>
    </>
  );
};

export default WebsiteResponsiveTest;
