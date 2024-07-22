import Image from "next/image";
const getLargestResolutionImage = (imageData) => {
  if (!imageData?.featuredImage?.node?.mediaDetails?.sizes) {
    return null;
  }

  const sizes = imageData.featuredImage.node.mediaDetails.sizes;
  let largestImage = sizes[0];

  for (let i = 1; i < sizes.length; i++) {
    if (parseInt(sizes[i].width, 10) > parseInt(largestImage.width, 10)) {
      largestImage = sizes[i];
    }
  }

  return largestImage;
};
const FeaturedImage = ({ post, styleClasses, priority, height, width }) => {
  let img = "";
  const defaultFeaturedImage =
    "https://asokeywordtool.com/wp-content/uploads/2024/05/img-marketing-1.png";
  const defaultWidth = "720";
  const defaultHeight = "520";
  if (post.featuredImage) {
    let size = getLargestResolutionImage(post);
    // post.featuredImage.node.mediaDetails.sizes.length - 4
    img = {
      src: size.sourceUrl,
      height: size.height,
      width: size.width,
    };
  } else {
    img = {
      src: defaultFeaturedImage,
      height: defaultHeight,
      width: defaultWidth,
    };
  }
  if (width) {
    img.width = width;
  }

  return (
    <>
      <Image
        src={img.src}
        // layout="responsive"
        // height={img.height}
        height={height}
        width={img.width}
        className={styleClasses}
        alt={post.title}
        priority={priority}
      />
    </>
  );
};

export default FeaturedImage;
