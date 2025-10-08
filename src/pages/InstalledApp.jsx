import React from "react";
const InstalledApp = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-20">
      <h2 className="dark text-5xl font-bold text-center">
        Your Installed Apps
      </h2>
      <p className="gray text-xl text-center mt-4">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex justify-between items-center mt-10">
        <span className="text-2xl font-semibold text-[#001931]">
          1 Apps Found
        </span>
        <button>Sort By Size</button>
      </div>

      {/* installed apps */}

      <div>{/* installed app cards */}</div>
    </div>
  );
};

export default InstalledApp;
