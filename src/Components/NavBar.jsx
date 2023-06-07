import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Store/Slice/MainSlice";
import { toast } from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

const NavBar = () => {
  const [menuSetting, setMenuSetting] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.Main.user);

  return (
    <div className="NavBar flex items-center justify-between">
      <div className="profile flex flex-row gap-2 items-center text-xl ">
        <img
          src={user.photoURL}
          className="w-[50px] aspect-square rounded-full object-cover shadow-sm border-2 border-white"
        />
        <h3>{user.displayName}</h3>
      </div>
      <div className="relative">
        <button
          className="icons text-xl mr-2 cursor-pointer"
          onClick={() => {
            setMenuSetting(!menuSetting);
          }}
        >
          <BsThreeDotsVertical />
        </button>
        {menuSetting && (
          <ul className="bg-primary p-2 absolute right-4 mt-2 rounded-md text-sm shadow-md">
            <li
              className="px-4 py-1 hover:bg-[#ffffff17] cursor-pointer transition ease-in-out delay-150 rounded-sm "
              onClick={() => {
                signOut(auth);
                dispatch(updateUser(undefined));
                toast("Succesful LogOut!!!", {
                  icon: "😊",
                });
              }}
            >
              LogOut
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
