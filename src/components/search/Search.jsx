import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = ({ search, setSearch }) => {
  return (
    <label className="input w-40 sm:w-64">
      <IoSearchSharp className="text-xl sm:text-2xl text-[#627382]" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search Apps"
        className="text-[#627382] text-sm sm:text-lg"
      />
    </label>
  );
};

export default Search;
