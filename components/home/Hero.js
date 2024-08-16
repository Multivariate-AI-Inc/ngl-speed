import Button from "../elements/Button"
import Image from "next/image"
import heroBG from "/public/assets/imgs/page/homepage12/hero-bg.png"

const Hero = () => {
  return (
    <section className="section banner-12 mb-100">
      <Image
        src="https://imagedelivery.net/q3BXzhW6eZtLKizEPWZsTQ/cd3908b7-3a5e-4e39-5461-2b59f1cfa900/public"
        layout="responsive"
        alt="Hero"
        priority
        width={100}
        height={100}
      />
      <div className="asset-1 shape-1"></div>
      <div className="asset-2 shape-2"></div>
      <div className="asset-3 shape-3"></div>
      <div className="asset-4 shape-1"></div>
      <div className="asset-5 shape-2"></div>
      <div className="container text-center">
        <div className="row mt-150">
          <div
            className="col-xl-8 col-lg-10 m-auto text-center "
            style={{ zIndex: 999 }}
          >
            <h1 className="color-brand-1 mb-25 mt-10">
              App Store Optimization
            </h1>
            {/* <p className="font-md color-grey-500 mb-25 max-width-685">
              Since 2016, we are at the forefront of Digital Marketing. We just
              don&apos;t service our clients - we <br />
              reverse engineer search algorithms. We process billions of data
              point every day to drive actionable insights.
            </p> */}
            <p className="font-md color-grey-500 mb-25 max-width-685">
              Since 2016, we have been at the forefront of Digital Marketing. We
              go beyond servicing our clients - we reverse engineer search
              algorithms and process billions of data points every day to drive
              actionable insights.
            </p>
            <div className="d-sm-inline-block">
              <Button
                text={"Contact Us"}
                href={"/contact"}
                showIcon={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
