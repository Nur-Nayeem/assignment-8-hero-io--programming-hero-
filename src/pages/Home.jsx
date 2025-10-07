import React from "react";
import Banner from "../components/banner/Banner";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto">
        <Banner />
      </div>
      <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] py-20 text-white">
        <h2 className="text-center mb-10 text-4xl sm:text-5xl font-bold">
          Trusted by Millions, Built for You
        </h2>
        <div className="flex flex-col md:flex-row gap-16 justify-around">
          <div className="text-center space-y-5 ">
            <p>Total Downloads</p>
            <h1 className="text-5xl sm:text-[64px] font-extrabold">29.6M</h1>
            <p>21% more than last month</p>
          </div>
          <div className="text-center space-y-5 ">
            <p>Total Reviews</p>
            <h1 className="text-5xl sm:text-[64px] font-extrabold">906K</h1>
            <p>46% more than last month</p>
          </div>
          <div className="text-center space-y-5">
            <p>Active Apps</p>
            <h1 className="text-5xl sm:text-[64px] font-extrabold">132+</h1>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
