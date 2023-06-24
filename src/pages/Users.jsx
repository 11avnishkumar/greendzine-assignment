import React, { useContext } from "react";
import UsersList from "../components/UsersList";
import { GlobalContext } from "../context/Context";
import Pagination from "../components/Pagination";
const Users = ({ userData }) => {
  const { data } = userData;
  const { searchQuery } = useContext(GlobalContext);

  // search method
  const SearchQueryLogic = (users) => {
    return searchQuery === ""
      ? users
      : users.first_name.toLowerCase().includes(searchQuery.toLowerCase());
  };
  return (
    <>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {data.filter(SearchQueryLogic).map((userInfo) => (
          <UsersList user={userInfo} key={userInfo.id} />
        ))}
      </div>
      {/* Pagination  */}
      <Pagination paginationData={userData} />
    </>
  );
};

export default Users;
