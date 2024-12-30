import dynamic from "next/dynamic";
import Banner from "../components/case-study/Banner";
import CaseStudies from "../components/case-study/CaseStudies";
const LatestStories = dynamic(()=> import("../components/case-study/LatestStories"), {ssr:false});
const PageHead = dynamic(() => import("../components/elements/PageHead"));
const Layout = dynamic(() => import("../components/layout/Layout"));
const Contact = dynamic(()=> import("../components/home/Contact"))

const CaseStudy = () => {
    return (
        <>
            <PageHead
                title={"Case Studies"}
                ogDescription="We are Data + Tech SEO specialists, redefining SEO through scalable, data-centric strategies—not conventional methods."
                ogType="article"
                canonical={"https://nextgrowthlabs.com/case-studies"}
            />

            <Layout>
                <Banner />
                <LatestStories />
                <CaseStudies />
                <Contact />
            </Layout>
        </>
    );
};

export default CaseStudy;
