import { BsThreeDotsVertical } from "react-icons/bs";
import MessagesContainer from "./MessagesContainer";
import Input from "./input";

const Chat = () => {
  return (
    <div className="Chat flex flex-col ">
      <div className="chatInfo px-4 py-4 flex flex-row items-center justify-between">
        <div className="chatName">
          <h3 className="text-xl font-semibold">Prabin</h3>
        </div>
        <div className="groups text-xl">
          <BsThreeDotsVertical />
        </div>
      </div>
      <MessagesContainer />
      <Input />
    </div>
  );
};

export default Chat;
