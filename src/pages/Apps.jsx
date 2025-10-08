import React from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/app-card/AppCard";
import Search from "../components/search/Search";

const Apps = () => {
  const { apps, loading } = useApps();
  return (
    <div className="max-w-[1440px] mx-auto my-20">
      <h2 className="text-[#001931] text-5xl font-bold text-center">
        Our All Applications
      </h2>
      <p className="text-[#627382] text-xl text-center mt-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center mt-10">
        <span className="text-2xl font-semibold text-[#001931]">
          ({apps.length}) Apps Found
        </span>
        <Search />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          apps.map((app) => <AppCard key={app.id} app={app} />)
        )}
      </div>
    </div>
  );
};

export default Apps;
