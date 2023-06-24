import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Search from "../components/Search";

const Header = () => {
  // Mobile Menu state
  const [open, setOpen] = useState(false);
  const toggleMobileSearch = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="fixed left-0 top-0 right-0 w-full py-4 px-6 z-999 bg-white/50 backdrop-filter backdrop-blur-md flex justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold text-green-600">
          Greendzine
        </h1>
        <div className="hidden md:block">
          <Search /> {/* Search components */}
        </div>
        <div className="search__icon__container md:hidden">
          {!open ? (
            <Bars3Icon
              className="h-6 w-6 cursor-pointer"
              onClick={toggleMobileSearch}
            />
          ) : (
            <XMarkIcon
              className="h-6 w-6 cursor-pointer"
              onClick={toggleMobileSearch}
            />
          )}
        </div>
      </div>
      {/* Mobile Search */}
      <div className="block md:hidden">
        <div
          className={
            open
              ? "bg-white/50 backdrop-filter backdrop-blur-md flex justify-center items-center h-48 fixed top-20 px-4 left-0 ease-out duration-300 right-0 w-full"
              : "flex justify-center items-center h-48 fixed top-20 px-4 left-[-100%] ease-out duration-300 right-0 w-full"
          }
        >
          <Search /> {/* Search components */}
        </div>
      </div>
    </>
  );
};

export default Header;
