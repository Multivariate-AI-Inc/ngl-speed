import Image from "next/image";
import Button from "../elements/Button";

const SeoHero = () => {
  return (
    <section
      className="section"
      style={{ position: "relative", zIndex: "999" }}
    >
      {/* Positioning the Next.js Image absolutely within the parent div */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      >
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src="/assets/imgs/page/homepage2/bg-banner.png"
          priority
          alt="Background"
        />
      </div>
      <div className="container">
        <div className="banner-1">
          <div className="row align-items-center banner-content">
            <div className="col-lg-7">
              <h1 className="color-brand-1 mb-20">
                Increase Visibility & Traffic with Our SEO Solutions
              </h1>
              <div className="row">
                <div className="col-lg-9">
                  {/* <p className="font-md color-grey-500">
                    Since 2016, we&apos;ve been at the forefront of SEO. Some of the
                    world&apos;s top brands too read these lines, before
                    contacting and working with us. The next 5 minutes you spend
                    reading about us will give you a glimpse to our approach.
                    Want a customised presentation? Let us know.
                  </p> */}
                  <p className="font-md color-grey-500">
                    With our expert SEO strategies, your site will not only
                    attract more visitors, keeping them engaged and ultimately
                    converting them into engaged customers, leading to increased
                    sales and success. Let us help you unlock your
                    website&apos;s full potential and achieve your desired
                    outcomes, like boosting sales or generating more qualified
                    leads.
                  </p>
                </div>
              </div>
              <div className="mt-30">
                <h5 className="color-brand-1">Connect With Us Today</h5>
              </div>
              <div className="box-button mt-20">
                <Button
                  text={"Book an appointment"}
                  showIcon={true}
                  href={
                    "https://calender.multivariate.ai/team/nextgrowth-labs/marketing-meet"
                  }
                  target="blank"
                />
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <Image
                layout="responsive"
                width={100}
                height={100}
                src="/assets/imgs/page/homepage2/banner.png"
                priority
                alt="iori"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoHero;
