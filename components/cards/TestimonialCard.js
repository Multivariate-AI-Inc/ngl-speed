import React from "react";
import Link from "next/link";
import Image from "next/image";
const TestimonialCard = (props) => {
  return (
    <div className="card-review width-45 mb-40">
      <div className="card-info">
        <div className="rating-review">
          <Image
            src="/assets/imgs/page/homepage7/star.png"
            height={12}
            width={12}
            alt="star"
          />
          <Image
            src="/assets/imgs/page/homepage7/star.png"
            height={12}
            width={12}
            alt="star"
          />
          <Image
            src="/assets/imgs/page/homepage7/star.png"
            height={12}
            width={12}
            alt="star"
          />
          <Image
            src="/assets/imgs/page/homepage7/star.png"
            height={12}
            width={12}
            alt="star"
          />
          <Image
            src="/assets/imgs/page/homepage7/star.png"
            height={12}
            width={12}
            alt="star"
          />
        </div>
        <h5 className="color-grey-800 mb-20 testimonial-min-height">
          {props.review}
        </h5>
        <div className="box-author flex-nowrap justify-content-sm-between">
          <div className="author-info">
            <Link href="#">
              <span className="font-md-bold color-brand-1 author-name">
                {props.author}
              </span>
            </Link>
            <span className="font-xs color-grey-500 department">
              {props.department}
            </span>
          </div>
          <span>{props.img}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
