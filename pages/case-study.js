import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";
const PageHead = dynamic(() => import("../components/elements/PageHead"));
const Layout = dynamic(() => import("../components/layout/Layout"));
const Contact = dynamic(()=> import("../components/home/Contact"))

const CaseStudy = () => {
    return (
        <>
            <PageHead
                title={"Case Study"}
                ogDescription="Next Tool seamlessly integrates Google Search Console, Analytics, and Ads to provide valuable insights for optimizing website performance and ad effectiveness."
                ogType="article"
                canonical={"https://nextgrowthlabs.com/case-study"}
            />

            <Layout>
            <section className="section banner-service bg-grey-60 position-relative">
                    <div className="box-banner-abs">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xxl-6 col-xl-7 col-lg-12">
                                    <div className="box-banner-service">
                                        <h2 className="color-brand-1 mb-20">All the important insights, guidance and news you need to know.</h2>
                                        <div className="row">
                                            <div className="col-lg-9">
                                                <p className="font-lg color-grey-500">Keep up-to-date with all our latest company news and business content. The latest news, tips and advice to help you run your business with less fuss</p>
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
                <section className="section mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="color-brand-1 mb-20">Lastest Articles</h2>
                            </div>
                        </div>
                        
                        <div className="box-list-blogs">
                            <div className="row mt-55">
                                <div className="col-lg-12 mb-60 item-article featured">
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30 item-article featured">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img1.png" alt="iori" /></Link>
                                            <Link href="#"><label className="lbl-border">Marketing</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">How to save money - 8 simple ways to start saving money every month</h4></Link>
                                            {/* <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div> */}
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30 item-article guides">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img2.png" alt="iori" /></Link>
                                        <Link href="#"><label className="lbl-border">Technology</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">Essential Steps to Building And Refining an Effective UX Portfolio</h4></Link>
                                            {/* <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div> */}
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30 item-article guides">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img3.png" alt="iori" /></Link>
                                        <Link href="#"><label className="lbl-border">Marketing</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">10 Content Proofreading Tips to Catch More Avoidable Goofs</h4></Link>
                                            {/* <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div> */}
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-30 item-article guides">
                                    <div className="card-blog-grid card-blog-grid-3 hover-up">
                                        <div className="card-image"><Link href="/blog-detail"><img src="assets/imgs/page/blog/img4.png" alt="iori" /></Link>
                                        <Link href="#"><label className="lbl-border">Tutorial</label></Link>
                                        </div>
                                        <div className="card-info"><Link href="/blog-detail">
                                            <h4 className="color-brand-1">Everything a Beginner Blogger Needs to Know for 2023</h4></Link>
                                            {/* <div className="mb-25 mt-10"><span className="font-xs color-grey-500">November 17, 2022</span><span className="font-xs color-grey-500 icon-read">2 min read</span></div> */}
                                            <p className="font-sm color-grey-500 mt-20">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla. Interactively transform magnetic growth strategies whereas prospective "outside the box" thinking.</p>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="mt-20 mb-30 text-center"> <Link className="btn btn-brand-1 font-sm-bold" href="#">Load More...</Link></div>
                        </div>
                    </div>
                </section>
                <Contact />
            </Layout>
        </>
    );
};

export default CaseStudy;
