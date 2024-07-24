import React from "react";
import PageHead from "../components/elements/PageHead";
import Layout from "../components/layout/Layout";
import MetaToolArticle from "../components/tools/title-meta-description/MetaToolArticle";
import TitleMetaDescriptionTool from "../components/tools/title-meta-description/TitleMetaDescriptionTool";
const TitleMetaDescription = () => {
  return (
    <Layout>
      <PageHead
        title={"Title and Meta Description Checker | NextGrowth Labs"}
        ogDescription="This tool allows you to check the title, and meta description and see if it’s suitable for SEO. Learn how to craft compelling titles and meta descriptions to improve SEO rankings."
        ogType="article"
        canonical={"https://nextgrowthlabs.com/title-meta-description/"}
      />
      <TitleMetaDescriptionTool />
      <MetaToolArticle />
    </Layout>
  );
};

export default TitleMetaDescription;
