import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout/Layout";

import Marketing from "../components/home/Marketing";

import CareerSection7 from "../components/career/careerSection7";
const JobDetail = () => {
  return (
    <>
      <Layout>
        <section className="section pt-50 pb-100">
          {/* <div className="container"> */}
          <div className="box-image-detail">
            <Image
              layout="responsive"
              width={100}
              height={100}
              className="bd-rd16 d-block"
              src="/assets/imgs/page/job-detail/img-job.png"
              alt="iori"
              priority={true}
            />
          </div>
          <div className="content-detail">
            <div className="row">
              <div className="col-lg-10 col-11 m-auto">
                <div className="box-detail-content">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12 mb-30">
                      <h3 className="color-brand-1 mb-10 mt-0">
                        Business Development Manager and Financial Services
                      </h3>
                      <span className="date-post font-xs color-grey-300">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        29 May 2022
                      </span>
                      <span className="time-read font-xs color-grey-300">
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
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        3 mins read
                      </span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-start text-md-end mb-30">
                      {" "}
                      <Link className="btn btn-brand-1 btn-apply" href="#">
                        <svg
                          className="w-6 h-6 icon-18 mr-10"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        Appy Now
                      </Link>
                    </div>
                  </div>
                  <div className="border-bottom bd-grey-80 mb-40 pt-0"> </div>
                  <h4 className="color-brand-1 mb-25">Job summary </h4>
                  <div className="box-info-job">
                    <div className="row align-items-start">
                      <div className="col-lg-6 col-md-6">
                        <div className="item-job">
                          <div className="left-title">
                            {" "}
                            <span className="industry">Industry</span>
                          </div>
                          <div className="right-info">Business, Financial</div>
                        </div>
                        <div className="item-job">
                          <div className="left-title">
                            {" "}
                            <span className="salary">Salary</span>
                          </div>
                          <div className="right-info">$800 - $1000</div>
                        </div>
                        <div className="item-job">
                          <div className="left-title">
                            {" "}
                            <span className="jobtype">Job type</span>
                          </div>
                          <div className="right-info">Permanent</div>
                        </div>
                        <div className="item-job">
                          <div className="left-title">
                            {" "}
                            <span className="updated">Updated</span>
                          </div>
                          <div className="right-info">10/07/2022 </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="item-job">
                          <div className="left-title">
                            {" "}
                            <span className="joblevel">Job level</span>
                          </div>
                          <div className="right-info">
                            Experienced (Non - Manager)
                          </div>
                        </div>
                        <div className="item-job">
                          <div className="left-title">
                            {" "}
                            <span className="experience">Experience</span>
                          </div>
                          <div className="right-info">1 - 2 Years</div>
                        </div>
                        <div className="item-job">
                          <div className="left-title">
                            {" "}
                            <span className="deadline">Deadline</span>
                          </div>
                          <div className="right-info">08/08/2022</div>
                        </div>
                        <div className="item-job">
                          <div className="left-title">
                            {" "}
                            <span className="location">Location</span>
                          </div>
                          <div className="right-info">
                            Dallas, Texas. Remote Friendly.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="color-brand-1">Responsibilities</h4>
                  <p>
                    Product knowledge: Deeply understand the technology and
                    features of the product area to which you are assigned.
                  </p>
                  <p>
                    Research: Provide human and business impact and insights for
                    products.
                  </p>
                  <p>
                    Deliverables: Create deliverables for your product area (for
                    example competitive analyses, user flows, low fidelity
                    wireframes, high fidelity mockups, prototypes, etc.) that
                    solve real user problems through the user experience.
                  </p>
                  <p>
                    Communication: Communicate the results of UX activities
                    within your product area to the design team department,
                    cross-functional partners within your product area, and
                    other interested Superformula team members using clear
                    language that simplifies complexity.
                  </p>
                  <h4 className="color-brand-1">Requirements</h4>
                  <ul>
                    <li>
                      A portfolio demonstrating well thought through and
                      polished end to end customer journeys
                    </li>
                    <li>
                      5+ years of industry experience in interactive design and
                      / or visual design
                    </li>
                    <li>Excellent interpersonal skills </li>
                    <li>
                      Aware of trends in mobile, communications, and
                      collaboration
                    </li>
                    <li>
                      Ability to create highly polished design prototypes,
                      mockups, and other communication artifacts
                    </li>
                    <li>
                      The ability to scope and estimate efforts accurately and
                      prioritize tasks and goals independently
                    </li>
                    <li>
                      History of impacting shipping products with your work
                    </li>
                    <li>
                      A Bachelor’s Degree in Design (or related field) or
                      equivalent professional experience
                    </li>
                    <li>
                      Proficiency in a variety of design tools such as Figma,
                      Photoshop, Illustrator, and Sketch
                    </li>
                  </ul>
                  <h4 className="color-brand-1">What&apos;s on Offer </h4>
                  <ul>
                    <li>
                      Annual bonus and holidays, social welfare, and health
                      checks.
                    </li>
                    <li>
                      Training and attachment in Taiwan and other Greater China
                      branches.
                    </li>
                  </ul>
                  <div className="box-info-bottom">
                    <div className="row align-items-center">
                      <div className="col-lg-8 col-md-8 col-sm-12 col-12 mb-30">
                        <h3 className="color-brand-1 mb-10 mt-0">
                          Business Development Manager and Financial Services
                        </h3>
                        <span className="date-post font-xs color-grey-300">
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
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          29 May 2022
                        </span>
                        <span className="time-read font-xs color-grey-300">
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
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          3 mins read
                        </span>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-start text-md-end mb-30">
                        {" "}
                        <Link className="btn btn-brand-1 btn-apply" href="#">
                          <svg
                            className="w-6 h-6 icon-18 mr-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                          Appy Now
                        </Link>
                      </div>
                    </div>
                    <div className="border-bottom bd-grey-80 mb-40 pt-0"> </div>
                    <h4 className="color-brand-1 mb-25">Job summary </h4>
                    <div className="box-info-job">
                      <div className="row align-items-start">
                        <div className="col-lg-6 col-md-6">
                          <div className="item-job">
                            <div className="left-title">
                              {" "}
                              <span className="industry">Industry</span>
                            </div>
                            <div className="right-info">
                              Business, Financial
                            </div>
                          </div>
                          <div className="item-job">
                            <div className="left-title">
                              {" "}
                              <span className="salary">Salary</span>
                            </div>
                            <div className="right-info">$800 - $1000</div>
                          </div>
                          <div className="item-job">
                            <div className="left-title">
                              {" "}
                              <span className="jobtype">Job type</span>
                            </div>
                            <div className="right-info">Permanent</div>
                          </div>
                          <div className="item-job">
                            <div className="left-title">
                              {" "}
                              <span className="updated">Updated</span>
                            </div>
                            <div className="right-info">10/07/2022 </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="item-job">
                            <div className="left-title">
                              {" "}
                              <span className="joblevel">Job level</span>
                            </div>
                            <div className="right-info">
                              Experienced (Non - Manager)
                            </div>
                          </div>
                          <div className="item-job">
                            <div className="left-title">
                              {" "}
                              <span className="experience">Experience</span>
                            </div>
                            <div className="right-info">1 - 2 Years</div>
                          </div>
                          <div className="item-job">
                            <div className="left-title">
                              {" "}
                              <span className="deadline">Deadline</span>
                            </div>
                            <div className="right-info">08/08/2022</div>
                          </div>
                          <div className="item-job">
                            <div className="left-title">
                              {" "}
                              <span className="location">Location</span>
                            </div>
                            <div className="right-info">
                              Dallas, Texas. Remote Friendly.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h4 className="color-brand-1">Responsibilities</h4>
                    <p>
                      Product knowledge: Deeply understand the technology and
                      features of the product area to which you are assigned.
                    </p>
                    <p>
                      Research: Provide human and business impact and insights
                      for products.
                    </p>
                    <p>
                      Deliverables: Create deliverables for your product area
                      (for example competitive analyses, user flows, low
                      fidelity wireframes, high fidelity mockups, prototypes,
                      etc.) that solve real user problems through the user
                      experience.
                    </p>
                    <p>
                      Communication: Communicate the results of UX activities
                      within your product area to the design team department,
                      cross-functional partners within your product area, and
                      other interested Superformula team members using clear
                      language that simplifies complexity.
                    </p>
                    <h4 className="color-brand-1">Requirements</h4>
                    <ul>
                      <li>
                        A portfolio demonstrating well thought through and
                        polished end to end customer journeys
                      </li>
                      <li>
                        5+ years of industry experience in interactive design
                        and / or visual design
                      </li>
                      <li>Excellent interpersonal skills </li>
                      <li>
                        Aware of trends in mobile, communications, and
                        collaboration
                      </li>
                      <li>
                        Ability to create highly polished design prototypes,
                        mockups, and other communication artifacts
                      </li>
                      <li>
                        The ability to scope and estimate efforts accurately and
                        prioritize tasks and goals independently
                      </li>
                      <li>
                        History of impacting shipping products with your work
                      </li>
                      <li>
                        A Bachelor’s Degree in Design (or related field) or
                        equivalent professional experience
                      </li>
                      <li>
                        Proficiency in a variety of design tools such as Figma,
                        Photoshop, Illustrator, and Sketch
                      </li>
                    </ul>
                    <h4 className="color-brand-1">What&apos;s on Offer </h4>
                    <ul>
                      <li>
                        Annual bonus and holidays, social welfare, and health
                        checks.
                      </li>
                      <li>
                        Training and attachment in Taiwan and other Greater
                        China branches.
                      </li>
                    </ul>
                    <div className="box-info-bottom">
                      <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-5 col-12 mb-30">
                          {" "}
                          <Link className="btn btn-brand-1 btn-apply" href="#">
                            <svg
                              className="w-6 h-6 icon-18 mr-10"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                              />
                            </svg>
                            Appy Now
                          </Link>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-7 col-12 text-start text-sm-end mb-30">
                          {" "}
                          <Link className="btn btn-tag mb-10" href="#">
                            App
                          </Link>
                          <Link className="btn btn-tag ml-10 mb-10" href="#">
                            Digital
                          </Link>
                          <Link className="btn btn-tag ml-10 mb-10" href="#">
                            Marketing
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section mt-50">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-8 col-md-8">
                <h2 className="color-brand-1 mb-20">More Job Openings</h2>
                <p className="font-lg color-gray-500">
                  We regularly recruit at many positions.{" "}
                  <br className="d-none d-lg-block" />
                  See related jobs here
                </p>
              </div>
              <div className="col-lg-4 col-md-4 text-md-end text-start">
                <Link href="#" className="btn btn-default font-sm-bold pl-0">
                  View All
                  <svg
                    className="w-6 h-6 icon-16 ml-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="row mt-50">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <Image
                      width={69}
                      height={75}
                      src="/assets/imgs/page/job-detail/ui.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">
                      UI / UX Designer fulltime
                    </h4>
                    <p className="font-md color-grey-500 mb-15">
                      Seamless importing and round-tripping of Microsoft Project
                      plans, Excel files &amp; CSV files.
                    </p>
                    <div className="box-button-offer">
                      <Link
                        href="#"
                        className="btn btn-default font-sm-bold pl-0 color-brand-1"
                      >
                        Learn More
                        <svg
                          className="w-6 h-6 icon-16 ml-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <Image
                      width={69}
                      height={75}
                      src="/assets/imgs/page/job-detail/java.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">
                      Java Software Engineer
                    </h4>
                    <p className="font-md color-grey-500 mb-15">
                      Seamless importing and round-tripping of Microsoft Project
                      plans, Excel files &amp; CSV files.
                    </p>
                    <div className="box-button-offer">
                      <Link
                        href="#"
                        className="btn btn-default font-sm-bold pl-0 color-brand-1"
                      >
                        Learn More
                        <svg
                          className="w-6 h-6 icon-16 ml-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="card-offer hover-up">
                  <div className="card-image">
                    <Image
                      width={69}
                      height={75}
                      src="/assets/imgs/page/job-detail/senior.png"
                      alt="iori"
                    />
                  </div>
                  <div className="card-info">
                    <h4 className="color-brand-1 mb-15">
                      Senior System Engineer
                    </h4>
                    <p className="font-md color-grey-500 mb-15">
                      Seamless importing and round-tripping of Microsoft Project
                      plans, Excel files &amp; CSV files.
                    </p>
                    <div className="box-button-offer">
                      <Link
                        href="#"
                        className="btn btn-default font-sm-bold pl-0 color-brand-1"
                      >
                        Learn More
                        <svg
                          className="w-6 h-6 icon-16 ml-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Marketing />
        <CareerSection7 />
      </Layout>
    </>
  );
};

export default JobDetail;
