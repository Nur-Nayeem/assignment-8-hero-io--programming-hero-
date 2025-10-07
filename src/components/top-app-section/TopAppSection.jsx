import React from "react";
import AppCard from "../app-card/AppCard";

const TopAppSection = () => {
  return (
    <div className="my-20">
      <h2 className="text-[#001931] text-5xl font-bold text-center">
        Trending Apps
      </h2>
      <p className="text-[#627382] text-xl text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-4 gap-4 my-10">
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </div>
  );
};

export default TopAppSection;
