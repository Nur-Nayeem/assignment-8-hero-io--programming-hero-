import React from "react";
import logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-3 space-y-4">
      <h1 className="text-4xl font-bold flex items-center animate-pulse text-gray-700">
        <span>L</span>
        <span>
          <figure className="w-14 h-14 animate-spin">
            <img className="w-full h-full" src={logo} alt="logo" />
          </figure>
        </span>
        <span>ADING...</span>
      </h1>
    </div>
  );
};

export default Loader;
