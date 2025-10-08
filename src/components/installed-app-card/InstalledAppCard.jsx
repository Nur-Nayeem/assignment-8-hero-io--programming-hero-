import React from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { IoStar } from "react-icons/io5";

const InstalledAppCard = ({ app, hanldeRemoveApp }) => {
  console.log(app);

  const { id, image, title, downloads, ratingAvg } = app;
  return (
    <div className="flex justify-between items-center">
      <div className="flex  gap-4">
        <figure className="w-20 h-20 rounded-sm">
          <img className="w-full h-full rounded-sm" src={image} alt="App" />
        </figure>
        <div className="flex flex-col justify-around">
          <h4>{title}</h4>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[#00D390]">
              <HiOutlineDownload />
              <span className="hidden sm:block">{downloads / 100000}M</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#FF8811]">
              <IoStar />
              <span className="hidden sm:block">{ratingAvg}</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => hanldeRemoveApp(id)}
        className="cursor-pointer bg-[#00D390] text-lg font-medium py-2.5 px-4 rounded-lg text-white"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledAppCard;
