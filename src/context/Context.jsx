import React, { createContext, useState } from "react";
export const GlobalContext = createContext();
const Context = ({ children }) => {
  // Get the search query
  const [searchQuery, setSearchQuery] = useState("");
  // Get the datasets from the api
  const [userData, setUserData] = useState(null);
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <GlobalContext.Provider
      value={{
        userData,
        setUserData,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
