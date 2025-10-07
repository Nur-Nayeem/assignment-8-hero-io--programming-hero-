import React from "react";
import demoApp from "../../assets/demo-app.webp";
import { HiOutlineDownload } from "react-icons/hi";
import { IoStar } from "react-icons/io5";
const AppCard = () => {
  return (
    <div className="p-4 shadow-sm bg-white">
      <figure className="w-2xs- h-2xs">
        <img className="w-full h-full" src={demoApp} alt="app" />
      </figure>
      <h3 className="my-4 text-[#001931]">Forest: Focus for Productivity</h3>
      <div className="flex justify-between">
        <button className="btn text-lg text-[#00D390] bg-[#F1F5E8]">
          <HiOutlineDownload />
          <span className="hidden sm:block">9M</span>
        </button>
        <button className="btn text-lg text-[#FF8811] bg-[#FFF0E1]">
          <IoStar />
          <span className="hidden sm:block">9M</span>
        </button>
      </div>
    </div>
  );
};

export default AppCard;
