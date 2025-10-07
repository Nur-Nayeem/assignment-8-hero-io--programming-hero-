import React from "react";
import appstore from "../../assets/app-store.png";
import playstore from "../../assets/play-store.png";
import hero from "../../assets/hero.png";
const Banner = () => {
  return (
    <div className="mt-20 flex flex-col items-center px-2.5">
      <h1 className="text-center max-w-xl mx-auto text-[#001931] text-5xl sm:text-7xl font-bold">
        We Build <span className="gradient-text">Productive</span> Apps
      </h1>
      <p className="max-w-4xl mx-auto text-center mt-4 mb-10 text-[#627382]">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex items-center justify-center space-x-10">
        <a
          href="https://play.google.com/store/games?hl=en&pli=1"
          className="text-lg flex items-center gap-2.5 border-1 border-gray-300 py-3 px-5 rounded-sm"
        >
          <img src={playstore} alt="playstore" />
          <span className="hidden sm:block">Contribute</span>
        </a>

        <a
          href="https://github.com/Nur-Nayeem"
          className="text-lg flex items-center gap-2.5 border-1 border-gray-300 py-3 px-5 rounded-sm"
        >
          <img src={appstore} alt="appstore" />
          <span className="hidden sm:block">Contribute</span>
        </a>
      </div>
      <figure className="mt-10">
        <img src={hero} alt="Hero Image" />
      </figure>
    </div>
  );
};

export default Banner;
