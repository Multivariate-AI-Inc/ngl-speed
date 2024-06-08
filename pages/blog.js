"use client";
import BlogSection1 from "../components/blog/blogSection1";
import BlogSection2 from "../components/blog/blogSection2";
import Layout from "../components/layout/Layout";
import NewsLetter from "../components/elements/Newsletter";
import PageHead from "../components/elements/PageHead";
import { getAllPosts } from "../lib/posts";
import { useEffect, useState } from "react";
import Preloader from "../components/elements/Preloader";

export const runtime = "experimental-edge"; // 'nodejs' (default) | 'edge'
// export async function getServerSideProps() {
//   const allPosts = await getAllPosts();
//   return {
//     props: {
//       allPosts,
//     },
//   };
// }
const Blog = () => {
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
    }
    fetchBlogs();
  }, []);
  return (
    <>
      <PageHead
        title={
          "All the important insights, guidance and news you need to know."
        }
      />
      <Layout>
        <BlogSection1 />
        {isLoading ? <Preloader /> : <BlogSection2 allPosts={postData} />}
        <NewsLetter />
      </Layout>
    </>
  );
};

export default Blog;
