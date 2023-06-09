import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const Message = ({ message }) => {
  const userChats = useSelector((state) => state.chat);
  const user = useSelector((state) => state.Main.user);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      className={`Message flex flex-row gap-4 ${
        message?.senderId === user.localId && "owner"
      }`}
      ref={ref}
    >
      <div className="info flex flex-col gap-1 items-center shrink-0">
        <img
          src={
            message?.senderId === user.localId
              ? user.photoUrl
              : userChats.user.photoURL
          }
          className="w-[40px] aspect-square rounded-full object-cover shadow-sm"
        />
        <span className="text-xs opacity-60">Just Now</span>
      </div>
      <div className="content bg-[#EAEAEA] p-4 flex flex-col gap-2 rounded-md shadow-sm mt-6">
        <p>{message?.text}</p>
        {message.img && <img src={message?.img} alt="img" />}
      </div>
    </div>
  );
};

export default Message;
