import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { db } from "../Firebase";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { useSelector } from "react-redux";

const Search = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();
  const [error, setError] = useState(false);

  const currentUser = useSelector((state) => state.Main.user);

  const handleSearch = async (e) => {
    setUserData(undefined);
    e.preventDefault();

    const q = query(
      collection(db, "users"),
      where("displayName", "==", user.toLowerCase())
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserData(doc?.data());
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleSelect = async () => {
    const combineId =
      currentUser.localId > userData.uid
        ? currentUser.localId + userData.uid
        : userData.uid + currentUser.localId;

    try {
      const res = await getDoc(doc(db, "chats", combineId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combineId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.localId), {
          [combineId + ".userInfo"]: {
            uid: userData.uid,
            displayName: userData.displayName,
            photoURL: userData.photoURL,
          },
          [combineId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", userData.uid), {
          [combineId + ".userInfo"]: {
            uid: currentUser.localId,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoUrl,
          },
          [combineId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error);
      setError(false);
    }

    setUserData(undefined);
    setUser("");
  };

  return (
    <div className="Search mt-4">
      <form className="bg-[#ffffff17] px-2 rounded-md" onSubmit={handleSearch}>
        <div className="flex flex-row gap-2 text-sm items-center w-full">
          <label htmlFor="searchInput">
            <FiSearch />
          </label>
          <input
            type="text"
            placeholder="Search any User...."
            id="searchInput"
            className="bg-transparent text-white w-full placeholder:text-[#ffffffad] border-none outline-none py-3"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            autoComplete="false"
          />
        </div>
      </form>

      <div className="Search-container bg-[#ffffff17] rounded-b-md flex flex-col">
        {((user && userData === undefined) || error) && (
          <span className="text-center text-sm opacity-70 pb-4">
            User Not Found!! or Enter
          </span>
        )}
        {userData !== undefined && (
          <div className="userChat cursor-pointer" onClick={handleSelect}>
            <div className="flex flex-row items-center gap-2 m-2 p-2 hover:bg-[#ffffff17] cursor-pointer transition ease-in-out delay-150 rounded-md">
              <img
                src={userData?.photoURL}
                alt="profile img"
                className="w-[40px] aspect-square rounded-full object-cover shadow-sm"
              />
              <h3 className="text-base capitalize">{userData?.displayName}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
