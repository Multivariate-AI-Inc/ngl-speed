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
