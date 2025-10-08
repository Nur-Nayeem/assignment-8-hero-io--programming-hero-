import React from "react";
import logo from "../../assets/logo.png";

const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-3 space-y-4">
      <figure className="w-16 h-16 animate-spin">
        <img className="w-full h-full" src={logo} alt="logo" />
      </figure>
      <h1 className="text-3xl font-semibold animate-pulse text-gray-700">
        Loading...
      </h1>
    </div>
  );
};

export default Loader;
