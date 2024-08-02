import Link from "next/link";
import FeaturedImage from "../elements/FeaturedImage";
import Date from "../elements/Date";

const BlogCard = ({ title, date, readTimeTag, excerpt, tag, slug, post }) => {
  return (
    <>
      <div className={`col-lg-4 col-md-6 mb-30 item-article ${tag}`}>
        <div className="card-blog-grid card-blog-grid-3 hover-up">
          <div className="card-image">
            <Link href={`/blog/${post.slug}`}>
              <FeaturedImage
                post={post}
                styleClasses=""
                priority={false}
                height={250}
              />
            </Link>
            {/* <Link href="blog">
                    <label className="lbl-border">Writing</label>
                  </Link> */}
          </div>
          <div className="card-info">
            <Link href={`/blog/${slug}`}>
              <h4 className="color-brand-1">{title}</h4>
            </Link>
            <div className="mb-25 mt-10">
              <span className="font-xs color-grey-500">
                <Date dateString={date} />
              </span>
              {/* <span className="font-xs color-grey-500 icon-read">
                {/* {readTimeTag}2 min read
              </span> */}
            </div>
            <div className="blog-card-excerpt mt-20">
              {post.excerpt.slice(3, 150)}...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
