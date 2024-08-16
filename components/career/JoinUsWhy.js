import Image from "next/image";
import Link from "next/link";
const JoinUsWhy = () => {
  return (
    <section className="section mt-200">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="color-brand-1 mb-20">
              Why You Should Consider Applying
            </h2>
            <p className="font-lg color-gray-500">
              Join NextGrowth Labs - a place where data-driven excellence is
              valued, hard work acknowledged,{" "}
              <br className="d-none d-lg-block" />
              skills are nurtured and contributions impact success. Make a
              real-time difference with us.
            </p>
          </div>
        </div>
        <div className="row mt-65">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card-small card-small-2">
              <div className="card-image">
                <Link href="#">
                  <div className="box-image">
                    <Image
                      width={32}
                      height={32}
                      src="/assets/imgs/page/homepage1/free.svg"
                      alt="iori"
                    />
                  </div>
                </Link>
              </div>
              <div className="card-info">
                <h6 className="color-brand-1 mb-10">Connected</h6>

                <p className="font-xs color-grey-500">
                  We come together wherever we are – across time zones, regions,
                  offices and screens. You will receive support from your
                  teammates anytime and anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card-small card-small-2">
              <div className="card-image">
                <div className="box-image">
                  <Image
                    width={32}
                    height={32}
                    src="/assets/imgs/page/homepage1/cross.png"
                    loading="lazy"
                    alt="iori"
                  />
                </div>
              </div>
              <div className="card-info">
                <h6 className="color-brand-1 mb-10">Inclusive</h6>

                <p className="font-xs color-grey-500">
                  Our teams reflect the rich diversity of our world, with
                  equitable access to opportunity for everyone. No matter where
                  you come from
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card-small card-small-2">
              <div className="card-image">
                <div className="box-image">
                  <Image
                    width={32}
                    height={32}
                    src="/assets/imgs/page/homepage2/identity.png"
                    loading="lazy"
                    alt="iori"
                  />
                </div>
              </div>
              <div className="card-info">
                <h6 className="color-brand-1 mb-10">Flexible</h6>

                <p className="font-xs color-grey-500">
                  We believe in your freedom to work when and how you work best,
                  to help us all thrive. Only freedom and independent work can
                  bring out the best in you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card-small card-small-2">
              <div className="card-image">
                <div className="box-image">
                  <Image
                    width={32}
                    height={32}
                    src="/assets/imgs/page/career/persuasion.png"
                    loading="lazy"
                    alt="iori"
                  />
                </div>
              </div>
              <div className="card-info">
                <h6 className="color-brand-1 mb-10">Persuasion</h6>

                <p className="font-xs color-grey-500">
                  Knowing that there is real value to be gained from helping
                  people to simplify whatever it is that they do and bring.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsWhy;
