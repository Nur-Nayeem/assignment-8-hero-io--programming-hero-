import React from "react";
import AppCard from "../app-card/AppCard";
import useApps from "../../hooks/useApps";

const TopAppSection = () => {
  const { apps, loading } = useApps();
  console.log(apps);

  return (
    <div className="my-20">
      <h2 className="text-[#001931] text-5xl font-bold text-center">
        Trending Apps
      </h2>
      <p className="text-[#627382] text-xl text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          apps.map((app) => <AppCard key={app.id} app={app} />)
        )}
      </div>
    </div>
  );
};

export default TopAppSection;
