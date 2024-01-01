// Menus.tsx MdAnalytics
import React from "react";
import { MdDashboard, MdAnalytics, MdHelp } from "react-icons/md";
import { RiAccountCircleFill, RiMoneyDollarBoxFill } from "react-icons/ri";
import { BsBoxFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { FaShopify } from "react-icons/fa";
interface MenusProps {
  open: boolean;
}

const Menus: React.FC<MenusProps> = ({ open }) => {
  return (
    <div className="mt-5">
      <ul className="gap-2">
        {/* ... other menu items hover:bg-light-white */}
        <li className="flex gap-2 hover:bg-light-white items-center text-white font-semibold cursor-pointer hover:text-red-300 hover:duration-300 p-2 rounded-md ">
          <MdDashboard size={20} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Dashboard
          </span>
        </li>
        <li className="gap-2 hover:bg-light-white rounded-md duration-200 flex items-center text-white  font-semibold cursor-pointer hover:text-red-300 hover:duration-300 p-2">
          <FaShopify size={20} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Products
          </span>
        </li>
        {/* ... other menu items */}
        <li className=" gap-2 hover:bg-light-white rounded-md duration-200 flex items-center text-white font-semibold cursor-pointer hover:text-red-300 hover:duration-300 p-2 ">
          <RiAccountCircleFill size={20} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Users
          </span>
        </li>
        <li className=" gap-2 hover:bg-light-white rounded-md duration-200 flex items-center text-white font-semibold cursor-pointer hover:text-red-300 hover:duration-300 p-2 ">
          <BsBoxFill size={20} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Orders
          </span>
        </li>
        <li className=" gap-2 hover:bg-light-white rounded-md duration-200 flex items-center text-white font-semibold cursor-pointer hover:text-red-300 hover:duration-300 p-2 ">
          <RiMoneyDollarBoxFill size={20} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Billings
          </span>
        </li>
        <li className=" gap-2 hover:bg-light-white rounded-md duration-200 flex items-center text-white font-semibold cursor-pointer hover:text-red-300 hover:duration-300 p-2 ">
          <MdAnalytics size={20} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Analytics
          </span>
        </li>
        <li className=" gap-2 hover:bg-light-white rounded-md duration-200 flex items-center text-white font-semibold cursor-pointer hover:text-red-300 hover:duration-300 p-2 ">
          <MdHelp size={20} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Help
          </span>
        </li>
        <li className=" gap-2 hover:bg-light-white rounded-md duration-200 flex items-center text-white font-semibold cursor-pointer hover:text-red-300 hover:duration-300 p-2 ">
          <IoSettingsSharp size={20} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Setting
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Menus;
