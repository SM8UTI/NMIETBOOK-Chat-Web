import { useState } from "react";
import { FiSearch } from "react-icons/fi";

import { db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Search = () => {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState();
  const [error, setError] = useState(false);

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
        console.log(userData);
      });
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const handleSelect = () => {};

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
