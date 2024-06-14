import Button from "../elements/Button";
import Link from "next/link";
import Image from "next/image";
const CareerSection3 = () => {
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
              <div className="card-info">
                <h4 className="color-brand-1 mb-10 career-card-heading">
                  Outreach & Sales Associate
                </h4>
                <p className="font-md color-grey-500 mb-5 career-card-info-paragraph">
                  Building and maintaining client relationships, identifying new
                  sales opportunities, and effectively promoting our products
                  and services.
                </p>
              </div>
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
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">
                  Data Center Administrator - Freelancer
                </h4>
                <p className="font-md color-grey-500 mb-5 career-card-info-min-height">
                  Ensuring the availability, performance, and security of our
                  data center infrastructure.
                </p>
              </div>
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
              <div className="card-info">
                <h4 className="color-brand-1 mb-10">
                  Senior Content Associate
                </h4>
                <p className="font-md color-grey-500 mb-5 career-card-info-min-height">
                  Creating, managing, and optimizing high-quality content across
                  various platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40 mb-50 text-center">
          <Button
            text={"View & Apply"}
            href={"https://nextgrowth-labs.workable.com/"}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerSection3;
