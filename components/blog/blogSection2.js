import BlogSubSection1 from "./blogSubSection1";
import BlogSubSection2 from "./blogSubSection2";
import BlogSubSection3 from "./blogSubSection3";
import BlogSubSection4 from "./blogSubSection4";
import BlogCard from "../cards/BlogCard";
import { useEffect, useState } from "react";
import LoadMoreButton from "../elements/LoadMoreButton";

export default function BlogSection2({ allPosts }) {
  const [post, setPost] = useState(allPosts);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   try {
  //     fetch("/api/routes")
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
  // if (loading) return <p>Blogs are loading</p>;
  // if (!post) return <p>blogs not found</p>;
  return (
    <section className="section mt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="color-brand-1 mb-20">Lastest Articles</h2>
          </div>
        </div>
        {/* <div className="mt-30 mb-60">
          <ul className="list-buttons">
            <li>
              {" "}
              <Link className="button-click active" href="#" data-type="all">
                All articles
              </Link>
            </li>
            <li>
              {" "}
              <Link className="button-click" href="#" data-type="featured">
                Featured
              </Link>
            </li>
            <li>
              {" "}
              <Link className="button-click" href="#" data-type="company">
                Company
              </Link>
            </li>
            <li>
              {" "}
              <Link className="button-click" href="#" data-type="product-news">
                Product News
              </Link>
            </li>
            <li>
              {" "}
              <Link
                className="button-click"
                href="#"
                data-type="customer-stories"
              >
                Customer Stories
              </Link>
            </li>
            <li>
              {" "}
              <Link className="button-click" href="#" data-type="guides">
                Guides
              </Link>
            </li>
            <li>
              {" "}
              <Link className="button-click" href="#" data-type="other">
                Other
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="box-list-blogs">
          <div className="row mt-55">
            <BlogSubSection1 latestPost={allPosts.nodes[0]} />
            {allPosts.nodes.length >= 3 && (
              <BlogSubSection2 posts={allPosts.nodes.slice(1, 3)} />
            )}
            {allPosts.nodes.length >= 4 && (
              <BlogSubSection3 posts={allPosts.nodes.slice(3, 6)} />
            )}

            {/* <BlogSubSection4 /> */}
            {post.nodes.slice(6).map((item, index) => {
              return (
                <BlogCard
                  key={index}
                  title={item.title}
                  date={item.date}
                  readTimeTag={item.readTime}
                  excerpt={item.excerpt}
                  tag={item.tag}
                  post={item}
                  slug={item.slug}
                />
              );
            })}
          </div>
          <div className="mt-20 mb-30 text-center">
            {" "}
            <LoadMoreButton
              posts={post}
              setPosts={setPost}
              setLoading={setLoading}
              loading={loading}
            />
            {/* <Button text="Load More..." href={"#"} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className="col-lg-4 col-md-6 mb-30 item-article featured">
//   <div className="card-blog-grid card-blog-grid-3 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/blog/img6.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//       <Link href="blog">
//         <label className="lbl-border">Writing</label>
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h4 className="color-brand-1">
//           7 Copywriting Strategies the Great Copywriters Wish You
//           Knew
//         </h4>
//       </Link>
//       <div className="mb-25 mt-10">
//         <span className="font-xs color-grey-500">
//           November 17, 2022
//         </span>
//         <span className="font-xs color-grey-500 icon-read">
//           2 min read
//         </span>
//       </div>
//       <p className="font-sm color-grey-500 mt-20">
//         Excepteur sint occaecat cupidatat non proident, sunt in
//         culpa qui officia deserunt mollit laborum — semper quis
//         lectus nulla. Interactively transform magnetic growth
//         strategies whereas prospective "outside the box" thinking.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="col-lg-4 col-md-6 mb-30 item-article featured">
//   <div className="card-blog-grid card-blog-grid-3 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/blog/img7.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//       <Link href="blog">
//         <label className="lbl-border">Blogging</label>
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h4 className="color-brand-1">
//           What Is the Main Action a Writer Takes When Proofreading?
//         </h4>
//       </Link>
//       <div className="mb-25 mt-10">
//         <span className="font-xs color-grey-500">
//           November 17, 2022
//         </span>
//         <span className="font-xs color-grey-500 icon-read">
//           2 min read
//         </span>
//       </div>
//       <p className="font-sm color-grey-500 mt-20">
//         Excepteur sint occaecat cupidatat non proident, sunt in
//         culpa qui officia deserunt mollit laborum — semper quis
//         lectus nulla. Interactively transform magnetic growth
//         strategies whereas prospective "outside the box" thinking.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="col-lg-4 col-md-6 mb-30 item-article other">
//   <div className="card-blog-grid card-blog-grid-3 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/blog/img8.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//       <Link href="blog">
//         <label className="lbl-border">Marketting</label>
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h4 className="color-brand-1">
//           The Betty Crocker Secret to an Email Marketing Strategy
//           People Enjoy
//         </h4>
//       </Link>
//       <div className="mb-25 mt-10">
//         <span className="font-xs color-grey-500">
//           November 17, 2022
//         </span>
//         <span className="font-xs color-grey-500 icon-read">
//           2 min read
//         </span>
//       </div>
//       <p className="font-sm color-grey-500 mt-20">
//         Excepteur sint occaecat cupidatat non proident, sunt in
//         culpa qui officia deserunt mollit laborum — semper quis
//         lectus nulla. Interactively transform magnetic growth
//         strategies whereas prospective "outside the box" thinking.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="col-lg-4 col-md-6 mb-30 item-article other">
//   <div className="card-blog-grid card-blog-grid-3 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/blog/img9.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//       <Link href="blog">
//         <label className="lbl-border">Business</label>
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h4 className="color-brand-1">
//           Email Autoresponders: Meet the Lazy Marketer’s Best Friend
//         </h4>
//       </Link>
//       <div className="mb-25 mt-10">
//         <span className="font-xs color-grey-500">
//           November 17, 2022
//         </span>
//         <span className="font-xs color-grey-500 icon-read">
//           2 min read
//         </span>
//       </div>
//       <p className="font-sm color-grey-500 mt-20">
//         Excepteur sint occaecat cupidatat non proident, sunt in
//         culpa qui officia deserunt mollit laborum — semper quis
//         lectus nulla. Interactively transform magnetic growth
//         strategies whereas prospective "outside the box" thinking.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="col-lg-4 col-md-6 mb-30 item-article other">
//   <div className="card-blog-grid card-blog-grid-3 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/blog/img10.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//       <Link href="blog">
//         <label className="lbl-border">Marketting</label>
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h4 className="color-brand-1">
//           Stop Wondering About How to Respond to Criticism
//         </h4>
//       </Link>
//       <div className="mb-25 mt-10">
//         <span className="font-xs color-grey-500">
//           November 17, 2022
//         </span>
//         <span className="font-xs color-grey-500 icon-read">
//           2 min read
//         </span>
//       </div>
//       <p className="font-sm color-grey-500 mt-20">
//         Excepteur sint occaecat cupidatat non proident, sunt in
//         culpa qui officia deserunt mollit laborum — semper quis
//         lectus nulla. Interactively transform magnetic growth
//         strategies whereas prospective "outside the box" thinking.
//       </p>
//     </div>
//   </div>
// </div>
// <div className="col-lg-4 col-md-6 mb-30 item-article other">
//   <div className="card-blog-grid card-blog-grid-3 hover-up">
//     <div className="card-image">
//       <Link href="/blog-detail">
//         <Image
//           layout="responsive"
//           width={100}
//           height={100}
//           src="/assets/imgs/page/blog/img11.png"
//           loading="lazy"
//           alt="iori"
//         />
//       </Link>
//       <Link href="blog">
//         {" "}
//         <label className="lbl-border">Blogging</label>
//       </Link>
//     </div>
//     <div className="card-info">
//       <Link href="/blog-detail">
//         <h4 className="color-brand-1">
//           Top 5 Content Marketing Mistakes You’ll Wish You Fixed
//           Sooner
//         </h4>
//       </Link>
//       <div className="mb-25 mt-10">
//         <span className="font-xs color-grey-500">
//           November 17, 2022
//         </span>
//         <span className="font-xs color-grey-500 icon-read">
//           2 min read
//         </span>
//       </div>
//       <p className="font-sm color-grey-500 mt-20">
//         Excepteur sint occaecat cupidatat non proident, sunt in
//         culpa qui officia deserunt mollit laborum — semper quis
//         lectus nulla. Interactively transform magnetic growth
//         strategies whereas prospective "outside the box" thinking.
//       </p>
//     </div>
//   </div>
// </div>
