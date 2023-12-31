/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MdNavigateBefore } from "react-icons/md";

const Home = () => {
  const [open, setOpen] = useState<boolean>(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Account", src: "User", gap: "true" },
  ];
  return (
    <div className=" flex ">
      <div
        className={`${
          open ? " w-72  " : " w-20 "
        } w-72 h-screen bg-dark-purple relative  duration-300 p-5 pt-8 `}
      >
        <MdNavigateBefore
          onClick={() => setOpen(!open)}
          size={20}
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-2 text-dark-purple bg-white border-dark-purple rounded-full ${
            !open && " rotate-180 "
          }`}
        />
        <div>
          <h1
            className={`text-white cursor-pointer duration-500 font-semibold text-xl ${
              !open && " scale-0 "
            } `}
          >
            Inventory
          </h1>
        </div>
        <ul className=" mt-8 ">
          {Menus.map((item: any, index: number) => (
            <li
              key={index}
              className=" text-white font-semibold cursor-pointer hover:text-red-300 hover:duration-300 py-2 "
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
      <div className=" p-7 text-2xl font-semibold flex-1 h-screen   ">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
