// Home.tsx
import { useState } from "react";
import { MdNavigateBefore, MdLogout } from "react-icons/md";
import Menus from "./Menus";
import { FaShopify } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const Home = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="flex">
      {/* Added flex-col for column layout on small screens "flex  " */}
      {/* ================= Sidebar ================= md:w-2*/}
      <div
        className={`${
          open ? "w-72" : "w-20"
        } min-h-screen bg-dark-purple relative duration-300 p-5 flex flex-col justify-between`}
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
        <div className="bg-light-white cursor-pointer font-semibold px-4 py-2 rounded-md flex items-center gap-2 text-white mt-10">
          <FaCircleUser size={30} className={`${!open && "hidden"}`} />
          <p className={`${!open && "hidden"}`}>User </p>
          <MdLogout size={30} />
        </div>
      </div>
      {/* ================= main body =================*/}
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
