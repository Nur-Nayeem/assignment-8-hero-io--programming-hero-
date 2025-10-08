import React, { useEffect, useState } from "react";
import useApps from "../hooks/useApps";
import AppCard from "../components/app-card/AppCard";
import Search from "../components/search/Search";
import Loader from "../components/loader/Loader";
import { Link } from "react-router";
import NotFoundBySearch from "../components/app-not-found-by-search/NotFoundBySearch";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [loadingApp, setLoadingApp] = useState(loading);
  const cleanSearcString = search.trim().toLowerCase();

  const [filteredApps, setFilteredApps] = useState(apps);

  useEffect(() => {
    setLoadingApp(true);
    setFilteredApps(apps);
    const matchedApps = cleanSearcString
      ? apps.filter((app) => app.title.toLowerCase().includes(cleanSearcString))
      : apps;

    setFilteredApps(matchedApps);
    if (search.length) {
      const timer = setTimeout(() => {
        setLoadingApp(false);
      }, 200);
      return () => clearTimeout(timer);
    }
    if (apps.length) {
      setLoadingApp(false);
    }
  }, [search, apps]);

  const handleShowApps = () => {
    setFilteredApps(apps);
    setSearch("");
  };

  if (loading) {
    return (
      <div className="relative h-96 flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto my-20 px-2.5">
      <h2 className="text-[#001931] text-5xl font-bold text-center">
        Our All Applications
      </h2>
      <p className="text-[#627382] text-xl text-center mt-4">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center mt-10">
        <span className="text-lg sm:text-2xl font-semibold text-[#001931]">
          ({filteredApps.length}) Apps Found
        </span>
        <Search search={search} setSearch={setSearch} />
      </div>
      <div>
        {loadingApp ? (
          <Loader />
        ) : filteredApps.length === 0 ? (
          <NotFoundBySearch handleShowApps={handleShowApps} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Apps;
