import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const Search = ({ search, setSearch }) => {
  return (
    <label className="input">
      <IoSearchSharp className="text-2xl text-[#627382]" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        placeholder="Search Apps"
        className="text-[#627382] text-lg"
      />
    </label>
  );
};

export default Search;
