import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const links = (
    <>
      <Link to="/">Home</Link>
      <Link to="/apps">Apps</Link>
      <Link to="/installed">Installation</Link>
    </>
  );
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white py-20 text-center">
      <Link to="/" className="flex items-center gap-1">
        <figure className="w-7 h-7  md:w-8 md:h-8">
          <img className="w-full h-full" src={logo} alt="logo" />
        </figure>
        <h1 className="text-lg gradient-text font-bold">LOGO.IO</h1>
      </Link>
      <p className="my-5">
        Commodi quasi praesentium a alias porro facere veniam inventore iste,
        corporis labore, similique id, fuga est officiis totam.
      </p>
      <div className="flex items-center justify-center gap-10 mb-5">
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black">
          <FaLinkedinIn />
        </div>
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black">
          <FaFacebookF />
        </div>
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black">
          <FaXTwitter />
        </div>
        <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black">
          <RiInstagramFill />
        </div>
      </div>
      <div className="flex items-center justify-center gap-10">{links}</div>
      <hr className="w-full h-2 text-[#001931] my-4" />
      <p>Copyright © 2025 - All right reserved</p>
    </div>
  );
};

export default Footer;
