import React from "react";
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
import { getAllPosts, getPostSlug } from "../lib/posts";

export async function getStaticProps({ params }) {
  //getting all posts for suggested posts
  const suggestedPosts = await getAllPosts();
  // returning props to access in the component
  return {
    props: {
      suggestedPosts,
    },
    revalidate: 10,
  };
}
const career = ({ suggestedPosts }) => {
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
        <CareerSection7 post={suggestedPosts} />
        <NewsLetter />
      </Layout>
    </>
  );
};

export default career;
