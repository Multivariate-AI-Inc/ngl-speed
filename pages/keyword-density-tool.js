import React from "react";
import Layout from "../components/layout/Layout";
import PageHead from "../components/elements/PageHead";
import KeywordDensityArticle from "../components/tools/keyword-density-tool/KeywordDensityArticle";
import KeywordDensityChecker from "../components/tools/keyword-density-tool/KeywordDensityChecker";
const KeywordDensityTool = () => {
  return (
    <Layout>
      <PageHead
        title={"Online Keyword Density Analysis Tool For ASO & SEO - Next Labs"}
        ogDescription="Maintaining a good keyword density for the most relevant keywords in your app’s description is good ASO practice, especially when optimizing your app to rank in the Google Play Store and Apple Store. Use this free Keyword Density tool to review the density of your top keywords."
        ogType="article"
        canonical={"https://nextgrowthlabs.com/keyword-density-tool/"}
      />
      <KeywordDensityChecker />
      <KeywordDensityArticle />
    </Layout>
  );
};

export default KeywordDensityTool;
