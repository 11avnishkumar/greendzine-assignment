import React, { useContext, useRef, useState } from "react";
import { GlobalContext } from "../context/Context";
const Search = () => {
  // get the global context data
  const { setSearchQuery } = useContext(GlobalContext);
  // Search Method
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="md:max-w-lg md:mx-auto">
      <form className="flex justify-center items-center gap-4 w-full">
        <input
          type="text"
          onChange={handleSearch}
          className="bg-gray-50 text-md block w-full p-3 rounded-md border-none focus:ring-0"
          placeholder="Search user..."
        />
        {/* <input
          type="button"
          value="search"
          onClick={handleSearch}
          className="bg-black block text-md p-3 text-white cursor-pointer rounded-md"
        /> */}
      </form>
    </div>
  );
};

export default Search;
