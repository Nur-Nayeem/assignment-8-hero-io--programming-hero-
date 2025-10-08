import React from "react";
import AppCard from "../app-card/AppCard";
import { Link, useNavigate } from "react-router";

const TopAppSection = ({ apps }) => {
  const featuredApps = apps.slice(0, 8);
  const navigate = useNavigate();

  return (
    <div className="my-20 flex flex-col justify-center">
      <h2 className="text-[#001931] text-5xl font-bold text-center">
        Trending Apps
      </h2>
      <p className="text-[#627382] text-xl text-center mt-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {featuredApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <button
        onClick={() => navigate("/apps")}
        className="cursor-pointer font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-3.5 px-10 text-white rounded-md w-max mx-auto"
      >
        Show All
      </button>
    </div>
  );
};

export default TopAppSection;
