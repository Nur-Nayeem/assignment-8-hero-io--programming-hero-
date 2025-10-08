import React from "react";
import logo from "../../assets/logo.png";
import "../../App.css";
import { FaGithub } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router";
const NavBar = () => {
  const links = (
    <>
      <NavLink to="/">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#9f62f2] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            Home
          </span>
        )}
      </NavLink>
      <NavLink to="/apps">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#9f62f2] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            Apps
          </span>
        )}
      </NavLink>
      <NavLink to="/installed">
        {({ isActive }) => (
          <span
            className={`nav-link font-medium border-[#9f62f2] hover:border-b-2  hover:${
              isActive ? " active border-b-2" : " "
            }`}
          >
            Installation
          </span>
        )}
      </NavLink>
    </>
  );
  return (
    <div className=" shadow-sm bg-base-100">
      <div className="navbar bg-base-100 max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="mr-2 btn-ghost lg:hidden"
            >
              <FaBars />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center gap-1">
            <figure className="w-7 h-7  md:w-8 md:h-8">
              <img className="w-full h-full" src={logo} alt="logo" />
            </figure>
            <h1 className="text-lg gradient-text font-bold">LOGO.IO</h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-10 menu-horizontal px-1 text-lg">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/Nur-Nayeem"
            className="btn text-lg text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
          >
            <FaGithub />
            <span className="hidden sm:block">Contribute</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
