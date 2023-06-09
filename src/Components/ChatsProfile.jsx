import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { updateChatId, updateChatUser } from "../Store/Slice/ChatSlice";

const ChatsProfile = () => {
  const [chatsList, setChatsList] = useState([]);
  const currentUser = useSelector((state) => state.Main.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", currentUser.localId),
        (doc) => {
          setChatsList(Object.entries(doc?.data()));
        }
      );

      return () => {
        unsub();
      };
    };

    currentUser.localId && getChats();
  }, [currentUser.localId]);

  const handleSelect = (user) => {
    dispatch(
      updateChatId(
        currentUser.localId > user.uid
          ? currentUser.localId + user.uid
          : user.uid + currentUser.localId
      )
    );

    dispatch(updateChatUser(user));
  };

  return (
    <div className="ChatsProfile mt-4 max-h-[calc(100vh_-_226px)] overflow-y-scroll">
      {chatsList &&
        chatsList
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((elem) => (
            <div
              className="userChat rounded-b-md"
              onClick={() => handleSelect(elem[1].userInfo)}
              key={elem[0]}
            >
              <div className="flex flex-row items-center gap-2 hover:bg-[#ffffff17] cursor-pointer transition ease-in-out delay-150 p-2 rounded-md">
                <img
                  src={elem[1].userInfo?.photoURL}
                  alt="profile img"
                  className="w-[50px] aspect-square rounded-full object-cover shadow-sm border-2 border-white"
                />
                <div className="flex flex-col">
                  <h3 className="capitalize">
                    {elem[1]?.userInfo.displayName}
                  </h3>
                  <p className="text-xs text-[#ffffffbd] lowercase">
                    {elem[1]?.lastMessage?.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ChatsProfile;
