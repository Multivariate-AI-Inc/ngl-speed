import Link from "next/link";
import FeaturedImage from "../elements/FeaturedImage";
import Date from "../elements/Date";
const BlogSubSection1 = ({ latestPost }) => {
  return (
    <>
      <div className="col-lg-12 mb-60 item-article featured">
        <div className="item-1">
          <div className="box-cover-border">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <FeaturedImage
                  post={latestPost}
                  styleClasses="d-block"
                  priority={true}
                  height={400}
                />
              </div>
              <div className="col-lg-6">
                <div className="box-info-video">
                  {/* <span className="btn btn-tag">Featured</span> */}
                  <Link href={`/blog/${latestPost.slug}`}>
                    <h3 className="color-brand-1 mt-15 mb-20">
                      {latestPost.title}
                    </h3>
                  </Link>
                  <div className="mb-25 mt-10">
                    <span className="font-xs-color-grey-500">
                      <Date dateString={latestPost.date} />
                    </span>
                  </div>
                  <div className="excerptWordpress">
                    {latestPost.excerpt.slice(3, 150)}...
                  </div>
                  <div className="box-button text-start mt-45">
                    <Link
                      className="btn btn-default font-sm-bold pl-0 hover-up"
                      href={`/blog/${latestPost.slug}`}
                    >
                      Read more
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSubSection1;
