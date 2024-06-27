import Button from "../elements/Button"
import Link from "next/link"
import Image from "next/image"
const CareerOptions = () => {
  return (
    <section className="section mt-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="color-brand-1 mb-20">Career Opportunities</h2>
            <p className="font-lg color-gray-500">
              Explore our open roles for working totally remotely, from the
              <br className="d-none d-lg-block" />
              office or somewhere in between.
            </p>
          </div>
        </div>
        <div className="row mt-50">
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up card-min-height">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer1.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <Link
                href={
                  "https://apply.workable.com/nextgrowth-labs/j/AEA13ADE9B/"
                }
                target = "_blank"
              >
                <div className="card-info">
                  <h4 className="color-brand-1 mb-10 career-card-heading">
                    Outreach & Sales Associate
                  </h4>
                  <p className="font-md color-grey-500 mb-5 career-card-info-paragraph">
                    Building and maintaining client relationships, identifying
                    new sales opportunities, and effectively promoting our
                    products and services.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up card-min-height">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer2.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <Link
                href={
                  "https://apply.workable.com/nextgrowth-labs/j/2207CE0FFF/"
                  
                }
                target = "_blank"
              >
                <div className="card-info">
                  <h4 className="color-brand-1 mb-10">
                    Digital Marketing Executive
                  </h4>
                  <p className="font-md color-grey-500 mb-5 career-card-info-min-height">
                    Developing, implementing, and managing online marketing
                    campaigns that drive traffic, engage customers, and generate
                    leads.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up card-min-height">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer3.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <Link href={"https://apply.workable.com/nextgrowth-labs/j/20D933CB28/"} target = "_blank">
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">
                  Search Engine Optimization Specialist
                </h4>
                <p className="font-md color-grey-500 mb-5 career-card-info-min-height">
                  Develop and implement effective SEO strategies to improve our
                  website&apos;s visibility on search engines, drive organic
                  traffic, and increase overall online presence.
                </p>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up card-min-height">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer4.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <Link href={"https://apply.workable.com/nextgrowth-labs/j/6BD5C4B0DC/"} target = "_blank">
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">
                  Data Center Administrator - Freelancer
                </h4>
                <p className="font-md color-grey-500 mb-5 career-card-info-min-height">
                  Ensuring the availability, performance, and security of our
                  data center infrastructure.
                </p>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up card-min-height">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer5.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <Link href={"https://apply.workable.com/nextgrowth-labs/j/E82298D05D/"} target = "_blank">
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">
                  Junior HR Representative (Intern)
                </h4>
                <p className="font-md color-grey-500 mb-5 career-card-info-min-height">
                  Assist in various HR functions, including recruitment,
                  employee onboarding, record-keeping, and providing support to
                  employees.
                </p>
              </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card-offer card-we-do hover-up card-min-height">
              <div className="card-image">
                <Image
                  width={69}
                  height={75}
                  src="/assets/imgs/page/homepage4/offer6.png"
                  loading="lazy"
                  alt="iori"
                />
              </div>
              <Link href={"https://apply.workable.com/nextgrowth-labs/j/4EC3E3FC2A/"} target = "_blank">
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">
                  Senior Content Associate
                </h4>
                <p className="font-md color-grey-500 mb-5 career-card-info-min-height">
                  Creating, managing, and optimizing high-quality content across
                  various platforms.
                </p>
              </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-40 mb-50 text-center">
          <Button
            text={"View & Apply"}
            href={"https://nextgrowth-labs.workable.com/"}
            target={"_blank"}
          />
        </div>
      </div>
    </section>
  )
}

export default CareerOptions
