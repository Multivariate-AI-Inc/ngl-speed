import RobotsTxtTool from "../components/tools/robots-txt-on-seo/robotsTxtTool";
import RobotsTxtToolArticle from "../components/tools/robots-txt-on-seo/robotsTxtToolArticle";
import PageHead from "../components/elements/PageHead";
import Layout from "../components/layout/Layout";

const RobotsTxtOnSeo = () => {
  return (
    <>
      <PageHead
        title={"The Impact of Robots.txt on SEO - Next Labs"}
        canonical={"https://nextgrowthlabs.com/robots-txt-on-seo"}
        ogDescription={
          "Use NextGrowthLabs' Robots.txt Tester Tool to validate and optimize your website's indexing. Improve SEO and fix errors for better search visibility."
        }
      />
      <Layout>
        <RobotsTxtTool />
        <RobotsTxtToolArticle />
      </Layout>
    </>
  );
};
export default RobotsTxtOnSeo;
