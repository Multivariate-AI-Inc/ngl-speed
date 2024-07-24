import React from "react";
import Layout from "../components/layout/Layout";
import PageHead from "../components/elements/PageHead";
import LinkToolArticle from "../components/tools/internal-links-checker/LinkToolArticle";
import CheckInternalLinks from "../components/tools/internal-links-checker/CheckInternalLinks";

const InternalLinksChecker = () => {
  return (
    <Layout>
      <PageHead
        title={"Advantages of Using Site Link Checker - Next Labs"}
        ogDescription="Effortlessly analyze your website's internal links with our user-friendly checker tool, providing insights on total, external, and internal links for enhanced SEO and site optimization"
        ogType="article"
        canonical={"https://nextgrowthlabs.com/internal-links-checker/"}
      />
      <CheckInternalLinks />
      <LinkToolArticle />
    </Layout>
  );
};

export default InternalLinksChecker;
