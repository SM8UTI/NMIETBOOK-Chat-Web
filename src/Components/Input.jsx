import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { MdOutlineAttachFile } from "react-icons/md";
import { RiSendPlane2Fill } from "react-icons/ri";
import { db, storage } from "../Firebase";
import { useSelector } from "react-redux";

import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const userChats = useSelector((state) => state.chat);
  const currentUser = useSelector((state) => state.Main.user);

  const handleSend = async (e) => {
    e.preventDefault();
    if (img) {
      const storageRef = ref(storage, uuid());

      await uploadBytesResumable(storageRef, img).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateDoc(doc(db, "chats", userChats.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.localId,
              date: Timestamp.now(),
              img: downloadURL,
            }),
          });
        });
      });
    } else {
      await updateDoc(doc(db, "chats", userChats.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.localId,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.localId), {
      [userChats.chatId + ".lastMessage"]: {
        text,
      },
      [userChats.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", userChats.user.uid), {
      [userChats.chatId + ".lastMessage"]: {
        text,
      },
      [userChats.chatId + ".date"]: serverTimestamp(),
    });

    setImg(null);
    setText("");
  };
  return (
    <div className="Input p-4 w-full shadow-[0px_-1px_3px_0px_#00000024]">
      <form
        className="w-full flex flex-row items-center gap-2"
        onSubmit={handleSend}
      >
        <div className="w-full flex text-base items-center gap-2">
          <AiOutlineMessage className="text-xl text-[#06100bc2] shrink-0" />
          <input
            type="text"
            placeholder="Message..."
            className="w-full outline-none border-none text-black placeholder:text-[#06100bc2]"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </div>
        <div>
          <label
            htmlFor="file"
            className="text-xl cursor-pointer  text-[#06100bc2]"
          >
            <MdOutlineAttachFile />
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-md transition-all ml-2"
        >
          <RiSendPlane2Fill />
        </button>
      </form>
    </div>
  );
};

export default Input;
