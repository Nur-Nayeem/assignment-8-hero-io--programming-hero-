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
      <Link to="#">About Us</Link>
      <Link to="#">Contact</Link>
      <Link to="#">FAQs</Link>
      <Link to="#">Privacy Policy</Link>
    </>
  );
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white pt-20 pb-10 text-center px-2.5">
      <Link to="/" className="flex items-center gap-1">
        <figure className="w-7 h-7  md:w-8 md:h-8">
          <img className="w-full h-full" src={logo} alt="logo" />
        </figure>
        <h1 className="text-lg gradient-text font-bold">APEX.IO</h1>
      </Link>
      <p className="my-5 max-w-3xl">
        Enjoy the full power of our platform in your pocket. Our mobile app
        offers a smoother, faster, and more personalized experience, helping you
        get more done on the go.
      </p>
      <div className="flex items-center justify-center gap-10 flex-wrap mb-5">
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <FaXTwitter />
        </a>
        <a
          href="#"
          className="bg-white w-8 h-8 rounded-full flex items-center justify-center text-black"
        >
          <RiInstagramFill />
        </a>
      </div>
      <div className="flex items-center justify-center gap-10 flex-wrap">
        {links}
      </div>
      <hr className="w-full h-2 text-[#001931] mt-8 mb-2" />
      <p>Copyright © 2025 - All right reserved</p>
    </div>
  );
};

export default Footer;
