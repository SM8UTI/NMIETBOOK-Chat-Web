/* eslint-disable react/prop-types */
import { BsThreeDotsVertical } from "react-icons/bs";
import MessagesContainer from "./MessagesContainer";
import Input from "./Input";
import { MdSwipeLeftAlt } from "react-icons/md";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import logo from "../Assets/LogoName.svg";

const Chat = ({ sideBarModal, setSideBarModal }) => {
  const userChats = useSelector((state) => state.chat);

  const [chatBoth, setChatBoth] = useState(undefined);

  useEffect(() => {
    setChatBoth(userChats.chatId);
  }, [userChats.chatId]);

  return (
    <div
      className={`Chat flex flex-col relative overflow-hidden transition-all duration-600 ease-in-out ${
        sideBarModal ? "w-[30%] sm:w-[60%] md:w-[70%]" : "w-[100%]"
      }`}
    >
      {chatBoth === undefined ? (
        <div
          className={`grid w-full h-full place-content-center text-center gap-4 p-2 ${
            sideBarModal ? "opacity-0 sm:opacity-100" : "opacity-100"
          } transition-all duration-400 ease-in-out`}
        >
          <img
            src={logo}
            alt="NMIETBOOK"
            className="w-[200px] place-self-center"
          />
          <div className="font-semibold flex flex-col gap-2">
            <h2 className="text-base">Chat Web App</h2>
            <p className="text-xs text-slate-600 font-medium max-w-[400px] mx-auto leading-5">
              Send and Recieve messages to a friend 😊 and also search new
              friends and chat 😎.
            </p>
          </div>
        </div>
      ) : (
        <>
          <div
            className={`chatInfo px-4 py-4 flex flex-row items-center justify-between ${
              sideBarModal ? "opacity-0 sm:opacity-100" : "opacity-100"
            } transition-all duration-400 ease-in-out`}
          >
            <div className="chatName">
              <h3 className="text-xl font-semibold">
                {userChats?.user?.displayName}
              </h3>
            </div>
            <div className="groups text-xl">
              <BsThreeDotsVertical />
            </div>
          </div>
          <MessagesContainer />
          <Input />
        </>
      )}
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
