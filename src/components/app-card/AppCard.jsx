import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { IoStar } from "react-icons/io5";
const AppCard = ({ app }) => {
  console.log(app);

  const { image, title, downloads, ratingAvg } = app;

  return (
    <div className="p-4 shadow-sm bg-white rounded-lg">
      <figure className="w-2xs- h-2xs">
        <img className="w-full h-full rounded-lg" src={image} alt="app" />
      </figure>
      <h3 className="my-4 text-[#001931]">{title}</h3>
      <div className="flex justify-between">
        <button className="btn text-lg text-[#00D390] bg-[#F1F5E8]">
          <HiOutlineDownload />
          <span className="hidden sm:block">{downloads / 100000}M</span>
        </button>
        <button className="btn text-lg text-[#FF8811] bg-[#FFF0E1]">
          <IoStar />
          <span className="hidden sm:block">{ratingAvg}</span>
        </button>
      </div>
    </div>
  );
};

export default AppCard;
