import React, { useContext } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { GlobalContext } from "../context/Context";
const Pagination = ({ paginationData }) => {
  const { currentPage, setCurrentPage } = useContext(GlobalContext);
  const { total_pages } = paginationData;

  // handle Previous Page
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  // handle Next Page
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <div className="mt-4 flex justify-center items-center">
      {/* <!-- Previous Button --> */}
      <span
        onClick={handlePreviousPage}
        className={
          currentPage === 1
            ? "hidden"
            : "inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        }
      >
        <ArrowLeftIcon className="h-6 w-6" />
        Previous
      </span>
      <span>
        {currentPage} of {total_pages}{" "}
      </span>

      <span
        onClick={handleNextPage}
        className={
          currentPage === total_pages
            ? "hidden"
            : "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
        }
      >
        Next
        <ArrowRightIcon className="h-6 w-6" />
      </span>
    </div>
  );
};

export default Pagination;
