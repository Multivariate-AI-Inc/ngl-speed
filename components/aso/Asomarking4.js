import Link from "next/link";
import Image from "next/image";
const Asomarketing4 = () => {
  return (
    <section className="section mt-50">
      <div className="container">
        <div className="row mt-50">
          <div className="col-xl-6 col-lg-5">
            <div className="box-images-project">
              <div className="title-line mb-10">Why we do it better</div>
              <h2 className="color-brand-1 mb-25">
                Reduce Cost on UAC Campaigns
              </h2>
              <p className="color-grey-500 mb-15">
                It's often assumed that UAC campaign cost is fixed. However,
                it's not. Ratings of your app and that of your competitors, Most
                Helpful Review Section, number of companies that are bidding and
                engagement/retention influences the overall cost. <b>You pay only
                if we reduce the cost</b>. So, if the cost reduction is <b>x</b>, then you
                pay a fee that is much lower than <b>x</b>.
              </p>
              <div className="box-button text-start mt-40">
                {" "}
                <Link className="btn btn-brand-1 hover-up" href="#">
                  Find Out How
                </Link>
              </div>
            </div>
          </div>
          

          <div className="col-xl-6 col-lg-7">
            <div className="row pt-40">
              <Image
                src="assets/imgs/template/Marketing-dashboard 1.svg"
                width={690}
                height={420}
                alt="Marketing-dashboard"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Asomarketing4;
