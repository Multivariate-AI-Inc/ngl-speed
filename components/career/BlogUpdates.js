import Image from "next/image";
import Link from "next/link";
import BlogSuggestCard from "../cards/BlogSuggestCard";
const BlogUpdates = ({ post }) => {
  return (
    <section className="section mt-50">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8 col-md-8">
            <h2 className="color-brand-1 mb-20">From our blog </h2>
            <p className="font-lg color-gray-500">
              Dive into a world of insightful articles, expert opinions, and the
              latest trends.
              <br className="d-none d-lg-block" />
              Explore Our Stories
            </p>
          </div>
          <div className="col-lg-4 col-md-4 text-md-end text-start">
            <Link href="/blog" className="btn btn-default font-sm-bold pl-0">
              View All
              <svg
                className="w-6 h-6 icon-16 ml-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="row mt-55">
          {post?.nodes.slice(6, 10).map((post, index) => (
            <BlogSuggestCard key={index} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogUpdates;

// <div className="col-xl-3 col-lg-6 col-md-6">
//   <div className="card-blog-grid card-blog-grid-2 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/homepage2/news1.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h6 className="color-brand-1">
//           Easy Ways to Make Money While You Sleep
//         </h6>
//       </Link>
//       <p className="font-sm color-grey-500 mt-20">
//         Fusce dictum ullamcorper dui, id dignissim arcu volutpat
//         vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam
//         arcu, blandit at aliquet sit amet, convallis nec risus.
//       </p>
//       <div className="mt-20 d-flex align-items-center border-top pt-20">
//         <Link className="btn btn-border-brand-1 mr-15" href="/blog">
//           Technology
//         </Link>
//         <span className="date-post font-xs color-grey-300 mr-15">
//           <svg
//             className="w-6 h-6 icon-16"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//             />
//           </svg>
//           29 May 2022
//         </span>
//         <span className="time-read font-xs color-grey-300">
//           <svg
//             className="w-6 h-6 icon-16"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           3 mins read
//         </span>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="col-xl-3 col-lg-6 col-md-6">
//   <div className="card-blog-grid card-blog-grid-2 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/homepage2/news2.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h6 className="color-brand-1">
//           Tiktok video size guide: Everything you need to know
//         </h6>
//       </Link>
//       <p className="font-sm color-grey-500 mt-20">
//         Fusce dictum ullamcorper dui, id dignissim arcu volutpat
//         vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam
//         arcu, blandit at aliquet sit amet, convallis nec risus.
//       </p>
//       <div className="mt-20 d-flex align-items-center border-top pt-20">
//         <Link className="btn btn-border-brand-1 mr-15" href="/blog">
//           Marketting
//         </Link>
//         <span className="date-post font-xs color-grey-300 mr-15">
//           <svg
//             className="w-6 h-6 icon-16"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//             />
//           </svg>
//           29 May 2022
//         </span>
//         <span className="time-read font-xs color-grey-300">
//           <svg
//             className="w-6 h-6 icon-16"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           3 mins read
//         </span>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="col-xl-3 col-lg-6 col-md-6">
//   <div className="card-blog-grid card-blog-grid-2 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/homepage1/news2.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h6 className="color-brand-1">
//           How to convert video to MP4 for free online
//         </h6>
//       </Link>
//       <p className="font-sm color-grey-500 mt-20">
//         Fusce dictum ullamcorper dui, id dignissim arcu volutpat
//         vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam
//         arcu, blandit at aliquet sit amet, convallis nec risus.
//       </p>
//       <div className="mt-20 d-flex align-items-center border-top pt-20">
//         <Link className="btn btn-border-brand-1 mr-15" href="/blog">
//           Media
//         </Link>
//         <span className="date-post font-xs color-grey-300 mr-15">
//           <svg
//             className="w-6 h-6 icon-16"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//             />
//           </svg>
//           29 May 2022
//         </span>
//         <span className="time-read font-xs color-grey-300">
//           <svg
//             className="w-6 h-6 icon-16"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           3 mins read
//         </span>
//       </div>
//     </div>
//   </div>
// </div>
// <div className="col-xl-3 col-lg-6 col-md-6">
//   <div className="card-blog-grid card-blog-grid-2 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/homepage2/news3.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h6 className="color-brand-1">
//           5 fastest ways to increase search engine rankings
//         </h6>
//       </Link>
//       <p className="font-sm color-grey-500 mt-20">
//         Fusce dictum ullamcorper dui, id dignissim arcu volutpat
//         vitae. Aenean mattis vestibulum odio eu facilisis. Aenean quam
//         arcu, blandit at aliquet sit amet, convallis nec risus.
//       </p>
//       <div className="mt-20 d-flex align-items-center border-top pt-20">
//         <Link className="btn btn-border-brand-1 mr-15" href="/blog">
//           SEO
//         </Link>
//         <span className="date-post font-xs color-grey-300 mr-15">
//           <svg
//             className="w-6 h-6 icon-16"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//             />
//           </svg>
//           29 May 2022
//         </span>
//         <span className="time-read font-xs color-grey-300">
//           <svg
//             className="w-6 h-6 icon-16"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           3 mins read
//         </span>
//       </div>
//     </div>
//   </div>
// </div>
