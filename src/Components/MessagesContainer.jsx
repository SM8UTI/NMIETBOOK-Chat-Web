import React from "react";
import Message from "./message";

const MessagesContainer = () => {
  return (
    <div className="MessagesContainer p-6 bg-[#F8F9FB] flex-1 shadow-inner max-h-[calc(90vh_-_(60px_+_72px))] overflow-y-scroll flex gap-6 flex-col">
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default MessagesContainer;
