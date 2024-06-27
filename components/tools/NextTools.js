import Button from "../elements/Button";
import Image from "next/image";
import heroBG from "/public/assets/imgs/page/homepage12/hero-bg.png";
const ToolsHero = () => {
  return (
    <section className="section banner-12 mb-100">
      <Image src={heroBG} layout="responsive" alt="Hero" priority={true} />
      <div className="asset-1 shape-1"></div>
      <div className="asset-2 shape-2"></div>
      <div className="asset-3 shape-3"></div>
      <div className="asset-4 shape-1"></div>
      <div className="asset-5 shape-2"></div>
      <div className="container text-center">
        <div className="row mt-150">
          <div className="col-xl-8 col-lg-10 m-auto" style={{ zIndex: 999 }}>
            <h1 className="color-brand-1 mb-25 mt-10">Next ASO Tools</h1>
            <p className="font-md color-grey-500 mb-25">
              Keyword rankings, review monitoring, or replies – manage it all
              with our tools portal.
            </p>

            <div className="d-none d-sm-inline-block">
              <Button text="Contact Us" href={"/contact"} showIcon={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsHero;
