import React from "react";

const ChatsProfile = () => {
  return (
    <div className="ChatsProfile mt-4">
      <div className="userChat rounded-b-md">
        <div className="flex flex-row items-center gap-2 hover:bg-[#ffffff17] cursor-pointer transition ease-in-out delay-150 p-2 rounded-md">
          <img
            src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
            alt="profile img"
            className="w-[50px] aspect-square rounded-full object-cover shadow-sm border-2 border-white"
          />
          <div className="flex flex-col">
            <h3 className="capitalize">Priya</h3>
            <p className="text-xs text-[#ffffffbd] lowercase">Hey !!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatsProfile;
