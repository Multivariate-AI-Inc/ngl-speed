import Image from "next/image"
import Button from "../elements/Button"
import Link from "next/link"

const GetInTouch = () => {
  return (
    <section className="section mt-50 pt-50 pb-40">
      <div className="container">
        <div className="box-cover-border">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image
                layout="responsive"
                width={100}
                height={100}
                className="d-block"
                src="/assets/imgs/page/homepage2/img-marketing.png"
                loading="lazy"
                alt="iori"
              />
            </div>
            <div className="col-lg-6">
              <div className="box-info-video">
                <span className="btn btn-tag">Get in touch</span>
                <h2 className="color-brand-1 mt-15 mb-20">
                  Join Our Growing Team!
                </h2>
                <p className="font-md color-grey-500">
                  We're always looking for talented individuals to join the
                  NextGrowth Labs family. Even if you don't see a perfect fit
                  right now, upload your resume and let us know your areas of
                  interest. We might have the perfect opportunity waiting for
                  you!
                </p>
                <div className="box-button text-start mt-65">
                  <Button
                    text={"Drop your resume"}
                    href={"https://nextgrowth-labs.workable.com/"}
                    target={"_blank"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
