import React from "react";

const Message = () => {
  return (
    <div className="Message flex flex-row gap-4 owner">
      <div className="info flex flex-col gap-1 items-center shrink-0">
        <img
          src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          className="w-[40px] aspect-square rounded-full object-cover shadow-sm"
        />
        <span className="text-xs opacity-60">Just Now</span>
      </div>
      <div className="content bg-[#EAEAEA] p-4 flex flex-col gap-2 rounded-md shadow-sm mt-6">
        <p>Hellooo</p>
        <img
          src="https://images.unsplash.com/photo-1679678691006-0ad24fecb769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Message;
