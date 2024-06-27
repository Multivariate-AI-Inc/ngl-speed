import dynamic from "next/dynamic";
import PageHead from "../components/elements/PageHead";

// Use dynamic imports for each component
const Layout = dynamic(() => import("../components/layout/Layout"));
const Hero = dynamic(() => import("../components/aso/Hero"));
const Testimonials = dynamic(() => import("../components/home/Testimonials"));
const Tools = dynamic(() => import("../components/home/Tools"));
const WebVisibility = dynamic(() => import("../components/home/WebVisibility"));
const TrustBy = dynamic(() => import("../components/home/Trustby"));
const AsoInnovation = dynamic(() => import("../components/aso/AsoInnovation"));
const AsoCampaigns = dynamic(() => import("../components/aso/AsoCampaigns"));
const AsoAcquisition = dynamic(() => import("../components/aso/AsoAcquisition"));
const DynamicAsoMarketing = dynamic(() => import("../components/aso/AppMarketing"));
const AsoContact = dynamic(() => import("../components/aso/BoostRankings"));
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()

const ASO = () => {
  return (  
    <>
    <QueryClientProvider client={queryClient}>
      <PageHead title={"Get Free ASO Analysis - NextGrowthLabs"} />
      <Layout>
        <Hero />
        <TrustBy />
        <WebVisibility category={"App's"} />
        <Testimonials />
        <AsoCampaigns />
        <AsoAcquisition />
        <Tools length={6} />
        <AsoInnovation />
        <DynamicAsoMarketing />
        <AsoContact />
      </Layout>
      </QueryClientProvider>
    </>
  );
};

export default ASO;
