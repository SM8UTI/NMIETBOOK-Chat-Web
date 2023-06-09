import { useEffect, useState } from "react";
import Message from "./Message";
import { useSelector } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";

const MessagesContainer = () => {
  const [messages, setMessages] = useState();
  const userChats = useSelector((state) => state.chat);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", userChats.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unsub();
    };
  }, [userChats.chatId]);

  return (
    <div className="MessagesContainer p-6 bg-[#F8F9FB] flex-1 shadow-inner max-h-[calc(90vh_-_(60px_+_72px))] overflow-y-scroll flex gap-6 flex-col">
      {messages?.map((elem) => (
        <Message message={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default MessagesContainer;
