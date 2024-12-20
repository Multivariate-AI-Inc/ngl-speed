const Banner = ()=>{
return(
    <section className="section banner-service bg-grey-60 position-relative">
    <div className="box-banner-abs">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xxl-6 col-xl-7 col-lg-12">
                    <div className="box-banner-service">
                        <h2 className="color-brand-1 mb-20">Discover success stories and insights from our impactful work.</h2>
                        <div className="row">
                            <div className="col-lg-9">
                                <p className="font-lg color-grey-500">Explore case studies with successful projects, strategies, and valuable insights to help you achieve your business goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row m-0">
        <div className="col-xxl-6 col-xl-6 col-lg-6" />
        <div className="col-xxl-6 col-xl-6 col-lg-6 pr-0">
            <div className="d-none d-xxl-block pl-70"><img className="w-100 d-block" src="assets/imgs/page/blog/banner.png" alt="iori" /></div>
        </div>
    </div>
</section>
)
}
export default Banner