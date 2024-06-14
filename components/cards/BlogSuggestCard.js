import React from "react";
import FeaturedImage from "../elements/FeaturedImage";
import Date from "../elements/Date";
import Link from "next/link";
const BlogSuggestCard = ({ post }) => {
  return (
    <div className="col-xl-3 col-lg-6 col-md-6">
      <div className="card-blog-grid card-blog-grid-2 hover-up min-height-360">
        <div className="card-image">
          <Link href={`https://blogsngl.wpenginepowered.com/${post.slug}`}>
            <FeaturedImage
              post={post}
              styleClasses=""
              priority={false}
              height={240}
            />
          </Link>
        </div>
        <div className="card-info">
          <Link href={`https://blogsngl.wpenginepowered.com/${post.slug}`}>
            <h6 className="color-brand-1" style={{ minHeight: "3rem" }}>
              {post.title}
            </h6>
          </Link>
          <div className="blog-card-excerpt mt-20">
            {post.excerpt.slice(3, 150)}...
          </div>
          <div className="mt-20 d-flex align-items-center border-top pt-20">
            <span className="date-post font-xs color-grey-300 mr-15">
              <svg
                className="w-6 h-6 icon-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <Date dateString={post.date} />
            </span>
            {/* <span className="time-read font-xs color-grey-300">
              <svg
                className="w-6 h-6 icon-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              3 mins read
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSuggestCard;
