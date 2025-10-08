import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <label className="input">
      <IoSearchSharp className="text-2xl text-[#627382]" />
      <input
        type="search"
        placeholder="Search Apps"
        className="text-[#627382] text-lg"
      />
    </label>
  );
};

export default Search;
