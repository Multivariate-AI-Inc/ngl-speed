import Layout from "../components/layout/Layout";
import Contact from "../components/home/Contact";
import WebVisibility from "../components/home/WebVisibility";
import PageHead from "../components/elements/PageHead";
import dynamic from "next/dynamic";

const DynamicTrustBy = dynamic(()=>import("../components/home/Trustby",{ssr:false}))
const DynamicSeoHero = dynamic( ()=> import("../components/seo/SeoSolutions"),{ssr:false})
const DynamicTestimonials = dynamic( ()=> import("../components/home/Testimonials"),{ssr:false})
const BetterResults = dynamic( ()=> import("../components/seo/BetterResults"),{ssr:false})
const MetaAnalyzer = dynamic( ()=> import("../components/seo/MetaAnalyzer"),{ssr:false})
const FirstLanding = dynamic( ()=> import("../components/seo/FirstLanding"),{ssr:false})
const OurTools = dynamic( ()=> import("../components/seo/OurTools"),{ssr:false})

const SEO = () => {
  return (
    <>
      <PageHead
        title={"Increase Visibility & Traffic with Our SEO Solutions"}
      />
      <Layout>
        <DynamicSeoHero />
        <DynamicTrustBy heading = {"Brands we’ve helped grow"}/>
        <WebVisibility category={"Website's"} />
        <DynamicTestimonials />
        <BetterResults />
        <MetaAnalyzer />
        <FirstLanding />
        <OurTools />
        <Contact />
      </Layout>
    </>
  );
};

export default SEO;
