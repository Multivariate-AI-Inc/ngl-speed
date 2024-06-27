import dynamic from "next/dynamic"
import PageHead from "../components/elements/PageHead"

// Use dynamic imports for each component
const Hero = dynamic(() => import("../components/home/Hero"))
const Marketing = dynamic(() => import("../components/home/Marketing"))
const OurServices = dynamic(() => import("../components/home/OurServices"))
const Services = dynamic(() => import("../components/home/Services"))
const Testimonials = dynamic(() => import("../components/home/Testimonials"))
const Tools = dynamic(() => import("../components/home/Tools"))
const Trustby = dynamic(() => import("../components/home/Trustby"))
const Contact = dynamic(() => import("../components/home/Contact"))
const Layout = dynamic(() => import("../components/layout/Layout"))

export default function Home() {
  return (
    <>
      <PageHead
        title={"NextGrowthLabs - Best App Store Optimization Platform"}
      />
      <Layout>
        <Hero />
        <Trustby heading = {"Brands we’ve helped grow"} />
        <OurServices />
        <Testimonials />
        <Tools />
        <Services />
        <Marketing />
        <Contact />
      </Layout>
    </>
  )
}
