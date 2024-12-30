
import dynamic from 'next/dynamic'
 
const Stories = dynamic(() => import('./Stories'), { ssr: false })

// import Stories from "./Stories";

const LatestStories = ()=>{
    return(
        <section className="section mt-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="color-brand-1 mb-20">Latest Case Studies</h2>
                    <p className="font-lg color-gray-500">What makes us different from others? We give holistic solutions<br className="d-none d-lg-block" />with strategy, design &amp; technology.</p>
                </div>
            </div>
            <div className="mt-50">
                <div className="box-swiper">
                    <div className="swiper-container swiper-group-4">
                        <Stories />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default LatestStories;