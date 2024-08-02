import Link from "next/link";
import FeaturedImage from "../elements/FeaturedImage";
import Date from "../elements/Date";

const BlogSubSection3 = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          className="col-lg-4 col-md-6 mb-30 item-article customer-stories"
        >
          <div className="card-blog-grid card-blog-grid-3 hover-up">
            <div className="card-image">
              <Link href={`/blog/${post.slug}`}>
                <FeaturedImage
                  post={post}
                  styleClasses=""
                  priority={false}
                  height={300}
                />
              </Link>
            </div>
            <div className="card-info">
              <Link href={`/blog/${post.slug}`}>
                <h4 className="color-brand-1">{post.title}</h4>
              </Link>
              <div className="mb-25 mt-10">
                <span className="font-xs color-grey-500">
                  <Date dateString={post.date} />
                </span>
              </div>
              <div className="blog-card-excerpt mt-20">
                {post.excerpt.slice(3, 150)}...
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogSubSection3;
