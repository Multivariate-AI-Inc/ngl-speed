import Link from "next/link";

const CaseStudies = ()=>{
    return(
        <section className="section mt-80">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="color-brand-1 mb-20">Case Studies</h2>
                    <p className="font-lg color-gray-500"> We are Data + Tech SEO specialists, redefining SEO through scalable, data-centric<br className="d-none d-lg-block" />strategies — not conventional methods.</p>
                </div>
            </div>
            
            <div className="box-list-blogs">
                <div className="row mt-55">
                    <div className="col-lg-12 mb-60 item-article featured">
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30 item-article featured">
                        <div className="card-blog-grid card-blog-grid-3 hover-up">
                            <div className="card-image"><Link href="#"><img src="assets/imgs/page/blog/img1.png" alt="iori" /></Link>
                                {/* <Link href="#"><label className="lbl-border">Marketing</label></Link> */}
                            </div>
                            <div className="card-info"><Link href="#">
                                <h4 className="color-brand-1">Driving 20x Organic Traffic Growth</h4></Link>
                                {/* <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div> */}
                                <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30 item-article guides">
                        <div className="card-blog-grid card-blog-grid-3 hover-up">
                            <div className="card-image"><Link href="#"><img src="assets/imgs/page/blog/img2.png" alt="iori" /></Link>
                            {/* <Link href="#"><label className="lbl-border">Technology</label></Link> */}
                            </div>
                            <div className="card-info"><Link href="#">
                                <h4 className="color-brand-1">DR went up</h4></Link>
                                {/* <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div> */}
                                <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30 item-article guides">
                        <div className="card-blog-grid card-blog-grid-3 hover-up">
                            <div className="card-image"><Link href="#"><img src="assets/imgs/page/blog/img3.png" alt="iori" /></Link>
                            {/* <Link href="#"><label className="lbl-border">Marketing</label></Link> */}
                            </div>
                            <div className="card-info"><Link href="#">
                                <h4 className="color-brand-1">Resolving Manual Action Penalty Through Strategic Data Analysis</h4></Link>
                                {/* <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div> */}
                                <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 mb-30 item-article guides">
                        <div className="card-blog-grid card-blog-grid-3 hover-up">
                            <div className="card-image"><Link href="#"><img src="assets/imgs/page/blog/img4.png" alt="iori" /></Link>
                            {/* <Link href="#"><label className="lbl-border">Tutorial</label></Link> */}
                            </div>
                            <div className="card-info"><Link href="#">
                                <h4 className="color-brand-1">Fixing Manual Action for Spammy Structured Markup</h4></Link>
                                {/* <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div> */}
                                <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* <div className="mt-20 mb-30 text-center"> <Link className="btn btn-brand-1 font-sm-bold" href="#">Load More...</Link></div> */}
            </div>
        </div>
    </section>
    )
}
export default CaseStudies;