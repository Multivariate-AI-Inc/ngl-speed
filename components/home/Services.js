import Button from "../elements/Button";
import Image from "next/image";
import project1 from "/public/assets/imgs/page/homepage1/project1.png";
import finger from "/public/assets/imgs/page/homepage1/finger.png";
import circle from "/public/assets/imgs/page/homepage1/circle.png";
import project2 from "/public/assets/imgs/page/homepage1/business.png";
import Union from "/public/assets/imgs/page/homepage1/Union.png";
import eye from "/public/assets/imgs/page/homepage1/eye.png";
const Services = () => {
  return (
    <section className="section mt-80 mb-30">
      <div className="container">
        <div className="text-center mb-70">
          <h2 className="color-brand-1 mb-20">Why are we different?</h2>
        </div>
        <div className="row mt-50 mb-100">
          <div className="col-xl-7 col-lg-6">
            <div className="box-images-project">
              <div className="box-images mt-50">
                <Image
                  layout="responsive"
                  className="img-main-2"
                  src={project1}
                  alt="project"
                />
                <div className="image-2 shape-3">
                  <Image src={finger} layout="responsive" alt="finger" />
                </div>
                <div className="image-3 shape-1">
                  <Image src={circle} layout="responsive" alt="circle" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6">
            <span className="btn btn-tag">Business</span>
            <h3 className="color-brand-1 mt-10 mb-15">
              We process billions of data points per day
            </h3>
            <p className="font-md color-grey-400">
              At NextGrowth Labs, we proficiently handle and process over
              billions of data points daily, harnessing the power of advanced
              analytics to drive informed business decisions and strategies.
            </p>
            <div className="mt-20">
              <ul className="list-ticks">
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  1M+ apps/day crawled on Android
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  3M+ apps/day crawled on iOS
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  30K+ top websites in our index
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  300M results/week processed in SERP
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  60M/week app results processed
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  150K+ mobile & web usage data
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mb-100 mt-50 project-revert">
          <div className="col-xl-5 col-lg-6">
            <span className="btn btn-tag">Branding</span>
            <h3 className="color-brand-1 mt-10 mb-15">
              We build numerous tools for the community.
            </h3>
            <p className="font-md color-grey-400">
              At NGL, we prioritize our community by building a range of
              effective tools designed to support their needs. Our tools are
              developed with precision and an understanding of our users’
              objectives. Offering features that streamline processes, boost
              productivity and foster innovation, we encourage you to explore
              these resources on our tool page for optimized navigation and
              usage.
            </p>
            <div className="mt-20">
              <ul className="list-ticks">
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Productivity Tools
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  SEO Tools
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Automation Tools
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Chrome Add-ons
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Slack Tools
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Calculators
                </li>
                <li>
                  <svg
                    className="w-6 h-6 icon-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Marketplace Add-ons
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="box-images-project">
              <div className="box-images mt-50">
                <Image
                  className="img-main-2"
                  src={project2}
                  layout="responsive"
                  alt="Branding"
                />
                <div className="image-2 shape-3">
                  <Image src={Union} layout="responsive" alt="Union" />
                </div>
                <div className="image-3 shape-1">
                  <Image layout="responsive" src={eye} alt="Eye" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom" />
    </section>
  );
};

export default Services;
