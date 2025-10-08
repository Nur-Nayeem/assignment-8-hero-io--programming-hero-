import React from "react";
import appNotFound from "../../assets/App-Error.png";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 text-center px-2.5">
      <figure>
        <img src={appNotFound} alt="Not Found" />
      </figure>
      <h2 className="text-5xl font-bold text-[#001931] mt-4">
        OPPS!! APP NOT FOUND
      </h2>
      <p className="my-4 text-xl text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link to={-1} className="w-max mx-auto ">
        <button className="cursor-pointer font-semibold bg-gradient-to-r from-[#632ee3] to-[#9f62f2] py-3.5 px-10 text-white rounded-md">
          Go Back!
        </button>
      </Link>
    </div>
  );
};

export default AppNotFound;
