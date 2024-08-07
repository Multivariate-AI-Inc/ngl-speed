import React from "react";
import CurrentOpenings from "../components/career/CurrentOpenings";
import CareerOptions from "../components/career/CareerOptions";
import GetInTouch from "../components/career/GetInTouch";
import Layout from "../components/layout/Layout";
import PageHead from "../components/elements/PageHead";
import Brands from "../components/career/Brands";
// import JoinUsWhy from "../components/career/JoinUsWhy";
// import CoreValues from "../components/career/CoreValues";
// import BlogUpdates from "../components/career/BlogUpdates";
const career = () => {
  return (
    <>
      <PageHead
        title={"We are Always Searching For Amazing People to Join Our Team."}
        canonical={"https://nextgrowthlabs.com/career"}
        ogDescription={
          "Learn about NextGrowthLabs careers in tech and engineering product, design, sales, brand & marketing, and more, and apply today!"
        }
      />
      <Layout>
        <CurrentOpenings />
        <CareerOptions />
        <Brands />
        <GetInTouch />
      </Layout>
    </>
  );
};

export default career;
