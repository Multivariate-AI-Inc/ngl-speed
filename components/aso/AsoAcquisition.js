import Button from "../elements/Button";
import AsoFunnel from "./AsoFunnel";

const AsoAcquisition = () => {
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row mt-50">
          <div className="col-xl-6 col-lg-7">
            <div className="row">
              <AsoFunnel />
            </div>
          </div>
          <div className="col-xl-6 col-lg-5">
            <div className="box-images-project">
              <h2 className="color-brand-1 mb-25">
                A 360 Degree Focus on Your Acquisition Funnel
              </h2>
              <ul className="color-grey-500 aso-list">
                <li>
                  We work on all 7 areas of acquisition (If you are on Desktop,
                  You can click the chart to dive in).
                </li>
                <li>
                  There are well over 20 sub-properties that influences
                  acquisition - eg: logo, brand name, ratings, etc.
                </li>
                <li>
                  There are at least 50 other properties that are generally not
                  covered, we work majority of them, behind the doors.
                </li>
                <li>
                  Our proprietary technology .enables you to rank on any
                  keyword, or get into similar app section.
                </li>
                <li>
                  Our app store optimization service stands out in a crowded
                  market by delivering guaranteed results.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsoAcquisition;
