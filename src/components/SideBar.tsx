/* eslint-disable @typescript-eslint/no-explicit-any */
// Home.tsx
import { useState } from "react";
import { MdNavigateBefore, MdLogout, MdLogin } from "react-icons/md";
import Menus from "./Menus";
import { FaShopify } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

import { getUserInfo, isLoggedIn, logout } from "../utills/authService";
import { authKey } from "../constant/storageKey";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const SideBar = () => {
  const loggedIn = isLoggedIn();
  const info: any = getUserInfo();

  const [open, setOpen] = useState<boolean>(true);

  const handleLogout = () => {
    logout(authKey);
    toast.success("User log out successfully");
    window.location.reload();
  };

  return (
    <div className="flex h-auto ">
      {/* Added flex-col for column layout on small screens "flex  " */}
      {/* ================= Sidebar ================= md:w-2*/}
      <div
        className={`${
          open ? "w-72" : "w-20"
        } min-h-screen bg-dark-purple relative duration-300 p-5 flex flex-col justify-between h-full `}
      >
        <div>
          <MdNavigateBefore
            onClick={() => setOpen(!open)}
            size={20}
            className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 text-dark-purple bg-white border-dark-purple rounded-full ${
              !open && "rotate-180"
            }`}
          />
          <div className="top-0 flex gap-2 items-center text-white p-2 hover:bg-light-white rounded-md">
            <FaShopify size={20} />
            <h1
              className={`text-white cursor-pointer duration-300 font-semibold text-xl p-2 ${
                !open && "scale-0 hidden"
              }`}
            >
              Inventory
            </h1>
          </div>
          <Menus open={open} />
        </div>
        {loggedIn ? (
          <div
            onClick={handleLogout}
            className="bg-light-white cursor-pointer font-semibold px-4 py-2 rounded-md flex items-center gap-2 text-white mt-10"
          >
            <FaCircleUser size={30} className={`${!open && "hidden"}`} />
            {info && <p className={`${!open && "hidden"}`}>{info?.email} </p>}

            <MdLogout size={30} />
          </div>
        ) : (
          <Link to="/login">
            <div className="bg-light-white cursor-pointer font-semibold px-4 py-2 rounded-md flex items-center gap-2 text-white mt-10">
              <FaCircleUser size={30} className={`${!open && "hidden"}`} />
              <p className={`${!open && "hidden"}`}>Login</p>

              <MdLogin size={30} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
