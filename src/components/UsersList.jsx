import React from "react";
const UsersList = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-md" key={user.id}>
      <div className="overflow-hidden rounded-tl-md rounded-tr-md h-[198px]">
        <img
          src={user.avatar}
          alt={`${user.first_name}_avatar`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 md:px-10 py-6">
        <div className="flex justify-between items-center text-gray-400">
          <span className="font-semibold  inline-block">User Id</span>
          <span className="inline-block">{user.id}</span>
        </div>
        <div className="flex justify-between items-center text-md text-gray-400">
          <span className="font-semibold inline-block">Full Name</span>
          <span className="text-left inline-block">
            {user.first_name} {user.last_name}{" "}
          </span>
        </div>
        <div className="flex justify-between items-center text-gray-400">
          <span className="font-semibold">Email</span>
          <span className="text-md text-gray-400 text-left">{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
