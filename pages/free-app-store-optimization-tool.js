import Layout from "../components/layout/Layout";
import Trustby from "../components/home/Trustby";
import Contact from "../components/home/Contact";
import PageHead from "../components/elements/PageHead";
import ToolsHeroSection from "../components/tools/NextTools";

import dynamic from "next/dynamic";
const TrackingTools = dynamic( ()=> import("../components/tools/TrackingTools"),{ssr:false})
const SlackTool = dynamic( ()=> import("../components/tools/SlackTool"),{ssr:false})
const OtherTools = dynamic( ()=> import("../components/tools/OtherTools"),{ssr:false})
const ConsoleFeatures = dynamic( ()=> import("../components/tools/ConsoleFeatures"),{ssr:false})
const NextASOTools = dynamic( ()=> import("../components/tools/NextASOTools"),{ssr:false})

const Tools = () => {
  return (
    <>
      <PageHead title={"NEXT ASO Tools"} />
      <Layout>
        <ToolsHeroSection />
        <Trustby heading = {"Brands we’ve helped grow"}/>
        <TrackingTools />
        <SlackTool />
        <OtherTools />
        <ConsoleFeatures />
        <NextASOTools />
        <Contact />
      </Layout>
    </>
  );
};

export default Tools;
