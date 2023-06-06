import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavBar = () => {
  const [menuSetting, setMenuSetting] = useState(false);
  return (
    <div className="NavBar flex items-center justify-between">
      <div className="profile flex flex-row gap-2 items-center text-xl ">
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80"
          alt="profile img"
          className="w-[50px] aspect-square rounded-full object-cover shadow-sm"
        />
        <h3>Sakshi</h3>
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
            <li className="px-4 py-1 hover:bg-[#ffffff17] cursor-pointer transition ease-in-out delay-150 rounded-sm ">
              LogOut
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
