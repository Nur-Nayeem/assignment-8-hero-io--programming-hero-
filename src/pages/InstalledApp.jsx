import React, { useState } from "react";
import {
  getAppsFromLocalStorage,
  removeAppFromStorage,
} from "../utility/localDB";
import InstalledAppCard from "../components/installed-app-card/InstalledAppCard";
import SortFilter from "../components/sortfilter/SortFilter";
import useApps from "../hooks/useApps";
import Loader from "../components/loader/Loader";
const InstalledApp = () => {
  const { loading } = useApps();
  const installedApps = getAppsFromLocalStorage();

  const [apps, setApps] = useState(installedApps);

  const [sortOrder, setSortOrder] = useState("none");

  const hanldeRemoveApp = (id) => {
    removeAppFromStorage(id);
    const filterApps = apps.filter((app) => app.id !== id);
    setApps(filterApps);
  };

  const sortedApps = (() => {
    if (sortOrder === "asc") {
      return [...apps].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "desc") {
      return [...apps].sort((a, b) => b.downloads - a.downloads);
    } else {
      return apps;
    }
  })();

  if (loading) {
    return (
      <div className="relative h-[calc(100vh-452px)] flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (sortedApps.length === 0) {
    return (
      <div className="max-w-[1440px] mx-auto my-20 px-2.5">
        <h1 className="text-center bg-gray-200 py-4 text-4xl font-bold gray rounded-sm">
          No App installed yet
        </h1>
      </div>
    );
  }
  return (
    <div className="max-w-[1440px] mx-auto my-20 px-2.5">
      <h2 className="dark text-5xl font-bold text-center">
        Your Installed Apps
      </h2>
      <p className="gray text-xl text-center mt-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center mt-10 mb-4">
        <span className="text-2xl font-semibold text-[#001931]">
          {sortedApps.length} Apps Found
        </span>
        <SortFilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>

      {/* installed apps */}

      <div className="space-y-4">
        {sortedApps.map((app) => (
          <InstalledAppCard
            key={app.id}
            app={app}
            hanldeRemoveApp={hanldeRemoveApp}
          />
        ))}
      </div>
    </div>
  );
};

export default InstalledApp;
