import BlogSection1 from "../components/blog/blogSection1";
import BlogSection2 from "../components/blog/blogSection2";
import Layout from "../components/layout/Layout";
import NewsLetter from "../components/elements/Newsletter";
import PageHead from "../components/elements/PageHead";
import { getAllPosts } from "../lib/posts";
export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
    revalidate: 10,
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
        <NewsLetter />
      </Layout>
    </>
  );
};

export default Blog;
