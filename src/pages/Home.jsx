import React from "react";
import Banner from "../components/banner/Banner";
import State from "../components/state/State";
import TopAppSection from "../components/top-app-section/TopAppSection";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <Banner />
      </div>
      <State />
      <div className="max-w-[1440px] mx-auto">
        <TopAppSection />
      </div>
    </div>
  );
};

export default Home;
