import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { differenceInSeconds, format, formatDistanceToNow } from "date-fns";

const Message = ({ message }) => {
  const userChats = useSelector((state) => state.chat);
  const user = useSelector((state) => state.Main.user);

  const ref = useRef();

  const formatTime = (m) => {
    const currentTimestamp = new Date();
    const messageTimestamp = new Date(m.date.toDate());
    const timeDifference = differenceInSeconds(
      currentTimestamp,
      messageTimestamp
    );

    let formattedTimestamp;
    if (timeDifference <= 1) {
      formattedTimestamp = "Just now";
    } else if (timeDifference <= 2) {
      formattedTimestamp = "1 Min ago";
    } else if (timeDifference < 30) {
      formattedTimestamp = formatDistanceToNow(messageTimestamp, {
        addSuffix: true,
      });
    } else {
      formattedTimestamp = format(messageTimestamp, "p");
    }

    return formattedTimestamp;
  };

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
        <span className="text-xs opacity-60">
          {formatTime(message) === "less than a minute ago"
            ? "1 min"
            : formatTime(message)}
        </span>
      </div>
      <div className="content bg-[#EAEAEA] p-4 flex flex-col gap-2 rounded-md shadow-sm mt-6">
        <p>{message?.text}</p>
        {message.img && <img src={message?.img} alt="img" />}
      </div>
    </div>
  );
};

export default Message;
