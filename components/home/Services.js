import Button from "../elements/Button";
import Image from "next/image";
import project1 from "/public/assets/imgs/page/homepage1/project1.png";
import finger from "/public/assets/imgs/page/homepage1/finger.png";
import circle from "/public/assets/imgs/page/homepage1/circle.png";
import project2 from "/public/assets/imgs/page/homepage1/project2.png";
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
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
              Interactively transform magnetic growth strategies whereas
              prospective &quot;outside the box&quot; thinking.
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
                  Task tracking
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
                  Create task dependencies
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
                  Task visualization
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
                  hare files, discuss
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
                  Meet deadlines faster
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
                  Track time spent on each project
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mb-100 mt-50 project-revert">
          <div className="col-xl-5 col-lg-6">
            <span className="btn btn-tag">Branding</span>
            <h3 className="color-brand-1 mt-10 mb-15">
              We build numerous tools for the community - link that to the tool
              page of NGL.{" "}
            </h3>
            <p className="font-md color-grey-400">
              Sharing content online allows you to craft an online persona that
              reflects your personal values and professional skills. Even if you
              only use social media occasionally, what you create, share or
              react to feeds into this public narrative. How you conduct
              yourself online is now just as important as your behavior offline
              especially when it comes to your digital marketing career.
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
                  Send &amp; Schedule Posts
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
                  Live Chat Request
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
                  Push Notification
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
                  Create fully integrated campaigns
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
                  Online Visitors
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
                  Directly send or schedule posts
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
