import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout/Layout";
import PageHead from "../../components/elements/PageHead";
import BlogCard from "../../components/cards/BlogCard";
import { useState, useRef, useEffect, useCallback } from "react";
import { getAllPosts, getPostData, getPostSlug } from "../../lib/posts";
import FeaturedImage from "../../components/elements/FeaturedImage";
import Date from "../../components/elements/Date";
// import { parse } from "node-html-parser";

export const runtime = "experimental-edge"; // 'nodejs' (default) | 'edge'
// generating static props
export async function getServerSideProps({ params }) {
  // getting post data based on slug
  const postData = await getPostData(params.blogDetail);
  if (!postData) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
  //getting all posts for suggested posts
  const suggestedPosts = await getAllPosts();
  // post content
  const postDataContent = await postData.content;
  // returning props to access in the component
  return {
    props: {
      postData,
      suggestedPosts,
      postDataContent,
    },
  };
}
// // generating static paths using slugs from the wp data
// export async function getStaticPaths() {
//   // getting slugs to provide in static props function
//   const postSlugs = await getPostSlug();
//   return {
//     paths: postSlugs.map((s) => {
//       return {
//         params: {
//           blogDetail: s.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
const removeHTMLTags = (htmlString) => {
  const text = htmlString.replace(/<[^>]*>/g, "");
  return text.trim();
};

const calculateReadingTime = (text) => {
  const words = text.split(/\s+/).length;
  const wordsPerMinute = 200;
  const readingTimeMinutes = words / wordsPerMinute;
  return Math.ceil(readingTimeMinutes);
};

const getReadingTimeFromHTML = (htmlString) => {
  const text = removeHTMLTags(htmlString);
  const readingTime = calculateReadingTime(text);
  return readingTime;
};
const BlogDetails = ({ postData, suggestedPosts, postDataContent }) => {
  const [scroll, setScroll] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [headingData, setHeadingData] = useState([]);
  const readingTime = getReadingTimeFromHTML(postDataContent);
  // const sections = extractNodeList(postDataContent);
  const [sections, setSections] = useState([]);
  const tocRef = useRef();
  const blogDetailRef = useRef();
  const tocScrollControl = useCallback(() => {
    let tocHeight = tocRef.current?.offsetHeight;
    let blogDetailHeight = blogDetailRef.current?.offsetHeight;

    const scrollPosition = window.scrollY;
    if (
      scrollPosition > tocRef.current?.offsetTop &&
      scrollPosition < blogDetailHeight - tocHeight
    ) {
      setScroll(true);
    } else {
      setScroll(false);
    }
    // setting state for active class
    if (sections?.length > 0) {
      sections?.forEach((section) => {
        const sectionId = section.id;
        const sectionInDom = document.getElementById(sectionId);

        const sectionTop = sectionInDom?.offsetTop;
        const sectionBottom = sectionTop + sectionInDom?.offsetHeight;
        if (
          scrollPosition + 100 > sectionTop &&
          scrollPosition < sectionBottom
        ) {
          setActiveSection(sectionId);
        }
      });
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", tocScrollControl);
    return () => {
      window.removeEventListener("scroll", tocScrollControl);
    };
  }, [scroll, tocScrollControl]);

  useEffect(() => {
    const data = extractHeadings(postData.content);
    extractNodeList(postData.content);
    setHeadingData(data);
  }, [postData.content]);
  function extractHeadings(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    // const doc = parse(htmlString);
    const headings = doc.querySelectorAll("h2");
    // const headingElementsArray = Array.from(headings);
    // setSections((prev) => headingElementsArray);
    const headingArray = [];

    headings.forEach((heading) => {
      const id = heading.id;
      const text = heading.textContent;

      if (id) {
        headingArray.push({ [id]: text });
      }
    });

    return headingArray;
  }
  async function extractNodeList(htmlString) {
    const { parse } = await import("node-html-parser");
    const doc = parse(htmlString);
    const headings = doc.querySelectorAll("h2");
    setSections(headings);
    return headings;
  }
  return (
    <>
      <PageHead title={postData.title} />
      <Layout>
        <div className="section mt-35">
          <div className="container">
            <div className="breadcrumbs">
              <ul>
                <li>
                  <Link href="/">
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  {" "}
                  <Link href={postData.slug}>{postData.title}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section mt-40" ref={blogDetailRef}>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 overflow-hidden">
                <div className="content-single" id="content">
                  <h2 className="color-brand-1 mb-50" id="section1">
                    {postData.title}
                  </h2>
                  <div className="mb-40">
                    <FeaturedImage
                      post={postData}
                      styleClasses="bd-rd8"
                      priority={true}
                      height={500}
                      width={1000}
                    />
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: postData.content }}
                  ></div>
                  {/* <p className="color-grey-900 font-lg-bold mb-25">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ornare pellentesque sollicitudin. Suspendisse
                    potenti. Fusce ex risus, iaculis sit amet sapien nec,
                    finibus malesuada mi. Proin at turpis eget sapien pulvinar
                    luctus. Vestibulum bibendum pharetra lorem eu aliquam. In
                    feugiat placerat risus, sed rutrum neque mattis sit amet.
                    Nullam vestibulum ante ac quam tempor, id venenatis velit
                    eleifend. Duis id iaculis risus, quis ullamcorper augue.
                    Nunc tristique venenatis ipsum at euismod. Pellentesque id
                    arcu est.{" "}
                  </p>
                  <p className="font-md color-grey-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque ornare pellentesque sollicitudin. Suspendisse
                    potenti. Fusce ex risus, iaculis sit amet sapien nec,
                    finibus malesuada mi. Proin at turpis eget sapien pulvinar
                    luctus. Vestibulum bibendum pharetra lorem eu aliquam. In
                    feugiat placerat risus, sed rutrum neque mattis sit amet.
                    Nullam vestibulum ante ac quam tempor, id venenatis velit
                    eleifend. Duis id iaculis risus, quis ullamcorper augue.
                    Nunc tristique venenatis ipsum at euismod. Pellentesque id
                    arcu est.{" "}
                  </p>
                  <h4 className="color-brand-1 00" id="section2">
                    Freelance invoices: your legal requirements
                  </h4>
                  <ul>
                    <li>
                      A portfolio demonstrating well thought through and
                      polished end to end customer journeys
                    </li>
                    <li>
                      5+ years of industry experience in interactive design and
                      / or visual design
                    </li>
                    <li>Excellent interpersonal skills </li>
                    <li>
                      Aware of trends in mobile, communications, and
                      collaboration
                    </li>
                    <li>
                      Ability to create highly polished design prototypes,
                      mockups, and other communication artifacts
                    </li>
                    <li>
                      The ability to scope and estimate efforts accurately and
                      prioritize tasks and goals independently
                    </li>
                    <li>
                      History of impacting shipping products with your work
                    </li>
                    <li>
                      A Bachelor’s Degree in Design (or related field) or
                      equivalent professional experience
                    </li>
                    <li>
                      Proficiency in a variety of design tools such as Figma,
                      Photoshop, Illustrator, and Sketch
                    </li>
                  </ul>
                  <p>
                    Phasellus enim magna, varius et commodo ut, ultricies vitae
                    velit. Ut nulla tellus, eleifend euismod pellentesque vel,
                    sagittis vel justo. In libero urna, venenatis sit amet
                    ornare non, suscipit nec risus. Sed consequat justo non
                    mauris pretium at tempor justo sodales. Quisque tincidunt
                    laoreet malesuada. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus. Integer vitae
                    ante enim. Fusce sed elit est. Suspendisse sit amet mauris
                    in quam pretium faucibus et aliquam odio.{" "}
                  </p>
                  <h4 id="section3">
                    {" "}
                    Different ways to issue your invoices as a freelancer
                  </h4>
                  <div className="row align-items-start">
                    <div className="col-xl-4 col-lg-12 col-md-5">
                      <p>
                        <Image
                          layout="responsive"
                          width={100}
                          height={100}
                          src="/assets/imgs/page/blog-detail/img2.png"
                          alt="iori"
                        />
                      </p>
                    </div>
                    <div className="col-xl-8 col-lg-12 col-md-7">
                      <p>
                        Qui laboriosam ipsa non similique omnis id officia
                        assumenda. Aut perspiciatis accusamus et dolores
                        exercitationem ut ipsam velit. Ut nihil dolorem eos nemo
                        temporibus ut sunt aspernatur! Est voluptatem officiis
                        id harum facere aut minus mollitia in commodi sint sed
                        placeat quia cum ipsum quis. Et quia reiciendis in
                        ducimus fugit qui dolores aspernatur aut quis error et
                        aspernatur pariatur? Ut dolor quas cum beatae explicabo
                        ex velit voluptatum ut temporibus illum. Vel voluptate
                        galisum qui cupiditate nobis a perferendis sunt ut
                        deserunt omnis eum dolor aperiam? Et voluptatem velit et
                        voluptatem cumque vel voluptatem nemo ex ipsum
                        voluptatem non distinctio rerum ut neque ipsum non
                        aspernatur corporis. Et perspiciatis laboriosam a sint
                        iste et quis minus aut aspernatur voluptatibus aut velit
                        omnis aut excepturi sunt ut sapiente optio! Non nihil
                        facilis ut molestiae rerum aut aliquam aperiam et atque
                        Quis qui delectus illum cum atque officiis 33 cumque
                        error. Ut vero provident eum minus pariatur ab
                        consequuntur galisum rem internos ipsum. Qui labore
                        libero qui vero ipsum ut voluptas consequatur in nihil
                        similique aut exercitationem adipisci sed totam quia.
                        Est cumque galisum ut nihil eveniet et consequatur quae
                        qui enim earum ad voluptatem modi in explicabo
                        recusandae. Et autem sint est placeat veritatis et animi
                        facilis est beatae assumenda non recusandae fugiat.
                      </p>
                    </div>
                  </div>
                  <h4 id="section4">Invoicing as a freelancer</h4>
                  <p className="column-2">
                    Lorem ipsum dolor sit amet. Sit veniam dolorum est minus
                    nisi et adipisci sequi. Non velit quia non nisi esse non
                    rerum voluptate. Et doloribus atque qui corporis aliquam et
                    quia harum. Sit voluptas illo quo tenetur dolore ut ipsum
                    eaque et autem tenetur sit debitis nisi et quae dolorem et
                    quos vero?
                    <br />
                    <br />
                    Et dolorem aliquid non rerum culpa sit quia pariatur quo
                    unde ratione vel quia ipsa et corrupti rerum. Et optio
                    officia aut explicabo odio ea ratione voluptatem eos aliquam
                    tempora qui impedit ipsam. Sit officia eius ut quas adipisci
                    aut laudantium quia.
                    <br />
                    <br />
                    Et temporibus fuga aut perferendis assumenda ex odit vero ad
                    rerum numquam. Qui dolorum delectus aut maiores molestiae
                    aut odio ratione ut itaque illum et Quis facilis aut galisum
                    tenetur est rerum recusandae. Eum sint illum eum cupiditate
                    repellat ea culpa quaerat aut asperiores facere! <br />
                    Qui laboriosam ipsa non similique omnis id officia
                    assumenda. Aut perspiciatis accusamus et dolores
                    exercitationem ut ipsam velit. Ut nihil dolorem eos nemo
                    temporibus ut sunt aspernatur! Est voluptatem officiis id
                    harum facere aut minus mollitia in commodi sint sed placeat
                    quia cum ipsum quis. Et quia reiciendis in ducimus fugit qui
                    dolores aspernatur aut quis error et aspernatur pariatur? Ut
                    dolor quas cum beatae explicabo ex velit voluptatum ut
                    temporibus illum. Vel voluptate galisum qui cupiditate nobis
                    a perferendis sunt ut deserunt omnis eum dolor aperiam? Et
                    voluptatem velit et voluptatem cumque vel voluptatem nemo ex
                    ipsum voluptatem non distinctio rerum ut neque ipsum non
                    aspernatur corporis. Et perspiciatis laboriosam a sint iste
                    et quis minus aut aspernatur voluptatibus aut velit omnis
                    aut excepturi sunt ut sapiente optio! Non nihil facilis ut
                    molestiae rerum aut aliquam aperiam et atque Quis qui
                    delectus illum cum
                  </p>
                  <p>
                    <Image
                      layout="responsive"
                      width={100}
                      height={100}
                      src="/assets/imgs/page/blog-detail/img3.png"
                      alt="iori"
                    />
                  </p>
                  <h4 id="section5">Different ways</h4>
                  <p>
                    Est amet nostrum non harum sunt eum quos dolorem aut esse
                    odio. Aut similique sint est nihil quod aut provident
                    laborum aut placeat voluptates ea omnis omnis et iure
                    voluptas qui molestiae adipisci. Et quia mollitia vel optio
                    eaque sit impedit facere et libero sapiente.Et neque dicta
                    ea dignissimos voluptatem id fugit laboriosam sed inventore
                    explicabo et voluptatibus assumenda ut accusantium nulla in
                    dolorem magni. Et ratione dolores et adipisci similique sed
                    culpa similique. Et iste corrupti id commodi omnis aut dolor
                    voluptas et laboriosam aspernatur vel odit officia. Est
                    distinctio eaque rem nihil voluptatem est aspernatur rerum
                    aut quisquam obcaecati est voluptas deserunt qui voluptatem
                    facilis.
                  </p>
                  <p>
                    At quisquam dolorem et nobis culpa ut laudantium quae id
                    velit inventore! Eos omnis temporibus cum exercitationem
                    iusto eos quia quod! Hic inventore voluptas hic asperiores
                    facere cum necessitatibus aliquam qui omnis officia. Eos
                    voluptatibus iste eum iusto nobis sit aspernatur iusto ab
                    atque animi ut voluptas dolorem.
                  </p>
                  <p>
                    At quisquam dolorem et nobis culpa ut laudantium quae id
                    velit inventore! Eos omnis temporibus cum exercitationem
                    iusto eos quia quod! Hic inventore voluptas hic asperiores
                    facere cum necessitatibus aliquam qui omnis officia. Eos
                    voluptatibus iste eum iusto nobis sit aspernatur iusto ab
                    atque animi ut voluptas dolorem.
                  </p>
                  <p>
                    At quisquam dolorem et nobis culpa ut laudantium quae id
                    velit inventore! Eos omnis temporibus cum exercitationem
                    iusto eos quia quod! Hic inventore voluptas hic asperiores
                    facere cum necessitatibus aliquam qui omnis officia. Eos
                    voluptatibus iste eum iusto nobis sit aspernatur iusto ab
                    atque animi ut voluptas dolorem.
                  </p> */}
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <div
                  className={
                    !scroll ? "sidebar-author" : "sticky-bar-blog stick-blog"
                  }
                  ref={tocRef}
                >
                  <div className="box-author">
                    <Link href="#">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/assets/imgs/page/homepage1/author.png"
                        alt="iori"
                      />
                    </Link>
                    <div className="author-info">
                      <Link href="#">
                        <span className="font-md-bold color-brand-1 author-name">
                          {postData.author.node.name}
                        </span>
                      </Link>
                      <span className="font-xs color-grey-500 department">
                        <Date dateString={postData.date} />
                      </span>
                      <span className="font-xs color-grey-500 icon-read">
                        {readingTime} min read
                      </span>
                    </div>
                  </div>
                  <div className="mt-50">
                    <h6 className="color-brand-1 mb-15">Table of contents</h6>
                    <ul className="list-number">
                      {headingData.length > 0 &&
                        headingData.map((item, index) => {
                          return (
                            <li key={index}>
                              <Link
                                href={`#${Object.keys(item)[0]}`}
                                style={
                                  activeSection === `${Object.keys(item)[0]}`
                                    ? { color: "#06d6a0" }
                                    : { color: "#3d565f" }
                                }
                              >
                                {Object.values(item)[0]}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  <div className="mt-50 d-flex align-item-center">
                    {" "}
                    <strong className="font-xs-bold color-brand-1 mr-20">
                      Share
                    </strong>
                    <div className="list-socials mt-0 d-inline-block">
                      {" "}
                      <Link className="icon-socials icon-facebook" href="#" />
                      <Link className="icon-socials icon-instagram" href="#" />
                      <Link className="icon-socials icon-twitter" href="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="border-bottom bd-grey-80 mt-30"
            id="blogDetailBorderBottom"
          />
        </div>
        <div className="section mt-50">
          <div className="container">
            <h3 className="color-brand-1">Recommended articles</h3>
            <div className="row mt-50">
              {suggestedPosts.nodes.slice(6, 9).map((item, index) => (
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
              ))}
              {/* <div className="col-lg-4 col-md-6 mb-30 item-article featured">
                <div className="card-blog-grid card-blog-grid-3 hover-up">
                  <div className="card-image">
                    <Link href="/blog-detail">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/assets/imgs/page/blog/img6.png"
                        alt="iori"
                      />
                    </Link>
                    <label className="lbl-border">Writing</label>
                  </div>
                  <div className="card-info">
                    <Link href="/blog-detail">
                      <h4 className="color-brand-1">
                        7 Copywriting Strategies the Great Copywriters Wish You
                        Knew
                      </h4>
                    </Link>
                    <div className="mb-25 mt-10">
                      <span className="font-xs color-grey-500">
                        November 17, 2022
                      </span>
                      <span className="font-xs color-grey-500 icon-read">
                        2 min read
                      </span>
                    </div>
                    <p className="font-sm color-grey-500 mt-20">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla. Interactively transform magnetic growth
                      strategies whereas prospective "outside the box" thinking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30 item-article featured">
                <div className="card-blog-grid card-blog-grid-3 hover-up">
                  <div className="card-image">
                    <Link href="/blog-detail">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/assets/imgs/page/blog/img7.png"
                        alt="iori"
                      />
                    </Link>
                    <label className="lbl-border">Blogging</label>
                  </div>
                  <div className="card-info">
                    <Link href="/blog-detail">
                      <h4 className="color-brand-1">
                        What Is the Main Action a Writer Takes When
                        Proofreading?
                      </h4>
                    </Link>
                    <div className="mb-25 mt-10">
                      <span className="font-xs color-grey-500">
                        November 17, 2022
                      </span>
                      <span className="font-xs color-grey-500 icon-read">
                        2 min read
                      </span>
                    </div>
                    <p className="font-sm color-grey-500 mt-20">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla. Interactively transform magnetic growth
                      strategies whereas prospective "outside the box" thinking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-30 item-article other">
                <div className="card-blog-grid card-blog-grid-3 hover-up">
                  <div className="card-image">
                    <Link href="/blog-detail">
                      <Image
                        layout="responsive"
                        width={100}
                        height={100}
                        src="/assets/imgs/page/blog/img8.png"
                        alt="iori"
                      />
                    </Link>
                    <label className="lbl-border">Marketting</label>
                  </div>
                  <div className="card-info">
                    <Link href="/blog-detail">
                      <h4 className="color-brand-1">
                        The Betty Crocker Secret to an Email Marketing Strategy
                        People Enjoy
                      </h4>
                    </Link>
                    <div className="mb-25 mt-10">
                      <span className="font-xs color-grey-500">
                        November 17, 2022
                      </span>
                      <span className="font-xs color-grey-500 icon-read">
                        2 min read
                      </span>
                    </div>
                    <p className="font-sm color-grey-500 mt-20">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit laborum — semper quis
                      lectus nulla. Interactively transform magnetic growth
                      strategies whereas prospective "outside the box" thinking.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BlogDetails;
