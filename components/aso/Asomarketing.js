import Link from "next/link";
import Button from "../elements/Button";
import Chart from './Chart'


const Asomarketing = () => {
  return (
    <section className="section mt-50">
      <div className="container">
        <div className="row mt-50">
          <div className="col-xl-6 col-lg-5">
            <div className="box-images-project">
              <div className="title-line mb-10">
                Best App Marketing Agency for a Reason
              </div>
              <h2 className="color-brand-1 mb-25">
                Engagement & Retention Insights
              </h2>
              <p className="color-grey-500 mb-15">
                We unlock deep insights on traffic and engagement, surpassing
                standard analytics, by engaging the right users at the right
                time.
              </p>
              <ul className="color-grey-500 aso-list">
                <li>Deep Insights on the traffic and engagement .</li>
                <li>Go beyond your standard analytics.</li>
                <li>Engage the right set of users at the right time.</li>
                <li>Integrate that into your overall ASO SWOT analysis .</li>
                </ul>
              <div className="box-button text-start mt-40">
                {" "}
                <Button text="Find Out How" href={"#"} />
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="row pt-20">
              <Chart />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Asomarketing;
