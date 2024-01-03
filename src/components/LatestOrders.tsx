import { IoEye } from "react-icons/io5";
const LatestOrders = () => {
  return (
    <div className=" ">
      <div className=" flex gap-3 items-center justify-between px-3 ">
        <h3 className=" text-base font-semibold ">users</h3>
        <p className=" text-sm font-semibold ">user@gmail.com</p>
        <p className=" text-sm font-semibold ">$345</p>
        <p className=" w-[50px] text-sm font-semibold bg-green-200 px-2 rounded-md  ">
          Paid At Today at 10:13 AM
        </p>
        <IoEye size={20} className=" cursor-pointer " />
      </div>
      <hr />
    </div>
  );
};

export default LatestOrders;

/*
import { IoEye } from "react-icons/io5";
const LatestOrders = () => {
  return (
    <div className="">
      <div className=" flex gap-3 items-center justify-between px-3 ">
        <h3 className=" text-base font-semibold ">users</h3>
        <p className=" text-sm font-semibold ">user@gmail.com</p>
        <p className=" text-sm font-semibold ">$345</p>
        <p className=" text-sm font-semibold bg-green-200 px-2 rounded-md  ">
          Paid At Today at 10:13 AM
        </p>
        <IoEye size={20} className=" cursor-pointer " />
      </div>
      <hr />
    </div>
  );
};

export default LatestOrders;
*/
