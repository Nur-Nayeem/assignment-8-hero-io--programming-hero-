import React from "react";
import Banner from "../components/banner/Banner";
import State from "../components/state/State";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <Banner />
      </div>
      <State />
    </div>
  );
};

export default Home;
