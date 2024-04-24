import Image from "next/image";

const ToolsHero = () => {
  return (
    <section class="section banner-12">
      <div class="asset-1 shape-1"></div>
      <div class="asset-2 shape-2"></div>
      <div class="asset-3 shape-3"></div>
      <div class="asset-4 shape-1"></div>
      <div class="asset-5 shape-2"></div>
      <div class="container text-center">
        <div class="row mt-150">
          <div class="col-xl-8 col-lg-10 m-auto">
            <h1 class="color-brand-1 mb-25 mt-10">Next ASO Tools</h1>
            <p class="font-md color-grey-500 mb-25">
              Keyword rankings, review monitoring or replies – manage it all
              with our tools portal.
            </p>

            <div class="d-none d-sm-inline-block">
              <a class="btn btn-brand-1 hover-up">
                Contact Us
                <span
                  style={{
                    position: "relative",
                    top: "3px",
                    paddingLeft: "6px",
                  }}
                >
                  <Image
                    src="assets/imgs/template/icons/Frame.svg"
                    alt="Description of the image"
                    width={16}
                    height={16}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsHero;
