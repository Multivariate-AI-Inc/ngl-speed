import { useState, useEffect } from "react";
import CareerSection1 from "../components/career/careerSection1";
import CareerSection2 from "../components/career/careerSection2";
import CareerSection3 from "../components/career/careerSection3";
import CareerSection4 from "../components/career/careerSection4";
import CareerSection5 from "../components/career/careerSection5";
import CareerSection6 from "../components/career/careerSection6";
import CareerSection7 from "../components/career/careerSection7";
import NewsLetter from "../components/elements/Newsletter";
import Layout from "../components/layout/Layout";
import PageHead from "../components/elements/PageHead";
import Preloader from "../components/elements/Preloader";
// import { getAllPosts, getPostSlug } from "../lib/posts";

export const runtime = "nodejs" | "edge";
// export async function getServerSideProps({ params }) {
//   //getting all posts for suggested posts
//   const suggestedPosts = await getAllPosts();
//   // returning props to access in the component
//   return {
//     props: {
//       suggestedPosts,
//     },
//   };
// }
const Career = () => {
  const [postData, setPostData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    setisLoading(true);
    async function fetchBlogs() {
      try {
        const response = await fetch("/api/blogs/routes");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setPostData(result);
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
      // const response = await fetch("/api/blogs/routes");
      // const data = await response.json();
      // setPostData(data);
    }
    fetchBlogs();

    // return () => {
    //   setisLoading(false);
    // };
  }, []);
  return (
    <>
      <PageHead
        title={"We are Always Searching For Amazing People to Join Our Team."}
      />
      <Layout>
        <CareerSection1 />
        <CareerSection2 />
        <CareerSection3 />
        <CareerSection4 />
        <CareerSection5 />
        <CareerSection6 />
        {isLoading ? <Preloader /> : <CareerSection7 post={postData} />}
        <NewsLetter />
      </Layout>
    </>
  );
};

export default Career;
