import { BsThreeDotsVertical } from "react-icons/bs";
import MessagesContainer from "./MessagesContainer";
import Input from "./Input";
import { MdSwipeLeftAlt } from "react-icons/md";

const Chat = ({ sideBarModal, setSideBarModal }) => {
  return (
    <div
      className={`Chat flex flex-col relative overflow-hidden transition-all duration-600 ease-in-out ${
        sideBarModal ? "w-[30%] sm:w-[70%]" : "w-[100%]"
      }`}
    >
      <div
        className={`chatInfo px-4 py-4 flex flex-row items-center justify-between ${
          sideBarModal ? "opacity-0" : "opacity-100"
        } transition-all duration-400 ease-in-out`}
      >
        <div className="chatName">
          <h3 className="text-xl font-semibold">Prabin</h3>
        </div>
        <div className="groups text-xl">
          <BsThreeDotsVertical />
        </div>
      </div>
      <MessagesContainer />
      <Input />
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-primary text-3xl text-white p-2 cursor-pointer rounded-r-full shadow-md z-[999]"
        onClick={() => {
          setSideBarModal(!sideBarModal);
        }}
      >
        <MdSwipeLeftAlt
          className={`${
            sideBarModal ? "rotate-0" : "rotate-180"
          } transition-all duration-400 ease-linear`}
        />
      </div>
    </div>
  );
};

export default Chat;
