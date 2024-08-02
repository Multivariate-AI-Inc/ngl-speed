import BlogSection1 from "../../components/blog/blogSection1";
import BlogSection2 from "../../components/blog/blogSection2";
import Layout from "../../components/layout/Layout";

import PageHead from "../../components/elements/PageHead";
import { getAllPosts } from "../../lib/posts";

export const runtime = "experimental-edge"; // 'nodejs' (default) | 'edge'
export async function getServerSideProps() {
  const allPosts = await getAllPosts();
  if (!allPosts) {
    return {
      redirect: {
        destination: "/500",
        premanent: false,
      },
    };
  }
  return {
    props: {
      allPosts,
    },
  };
}
const Blog = ({ allPosts }) => {
  return (
    <>
      <PageHead
        title={
          "All the important insights, guidance and news you need to know."
        }
      />
      <Layout>
        <BlogSection1 />
        <BlogSection2 allPosts={allPosts} />
      </Layout>
    </>
  );
};

export default Blog;
