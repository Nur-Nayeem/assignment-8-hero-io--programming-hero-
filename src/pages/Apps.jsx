import React, { useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/app-card/AppCard";
import Search from "../components/search/Search";
import AppNotFound from "../components/app-not-found/AppNotFound";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const clenSearcString = search.trim().toLowerCase();
  const searcedString = clenSearcString
    ? apps.filter((app) => app.title.toLowerCase().includes(clenSearcString))
    : apps;

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
          ({searcedString.length}) Apps Found
        </span>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div>
        {loading ? (
          <h2 className="text-center">Loading...</h2>
        ) : searcedString.length === 0 ? (
          <AppNotFound />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            {searcedString.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
