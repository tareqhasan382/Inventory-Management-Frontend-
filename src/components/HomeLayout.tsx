import { AiFillDollarCircle } from "react-icons/ai";
import { FaShopify } from "react-icons/fa6";
import { HiMiniShoppingBag } from "react-icons/hi2";

const HomeLayout = () => {
  return (
    <div>
      {/* w-[250px] h-[80px] */}
      <div className=" flex lg:flex-row flex-col items-center justify-between gap-2 ">
        <div className=" bg-white flex items-center justify-center gap-2 lg:w-[250px] w-full h-[80px]  rounded-md outline outline-1 outline-white shadow-md ">
          <div className=" bg-blue-200 p-2 rounded-full ">
            <AiFillDollarCircle
              size={20}
              className=" w-6 h-6 rounded-full bg-blue-500 text-white "
            />
          </div>
          <div>
            <h3 className=" text-lg font-semibold ">Total Sales</h3>
            <p className=" text-sm font-bold ">$ 22.67</p>
          </div>
        </div>
        <div className=" bg-white flex items-center justify-center gap-2 lg:w-[250px] w-full h-[80px] rounded-md outline outline-1 outline-white shadow-md ">
          <div className=" bg-blue-200 p-2 rounded-full ">
            <HiMiniShoppingBag
              size={20}
              className=" w-6 h-6 rounded-full bg-blue-500 text-white "
            />
          </div>
          <div>
            <h3 className=" text-lg font-semibold ">Total Orders</h3>
            <p className=" text-sm font-bold ">130</p>
          </div>
          {/* <HiMiniShoppingBag size={20} />
          <h3>Total Orders</h3> */}
        </div>
        <div className=" bg-white flex items-center justify-center gap-2 lg:w-[250px] w-full h-[80px]  rounded-md outline outline-1 outline-white shadow-md ">
          <div className=" bg-blue-200 p-2 rounded-full ">
            <FaShopify
              size={20}
              className=" w-6 h-6 rounded-full bg-blue-500 text-white "
            />
          </div>
          <div>
            <h3 className=" text-lg font-semibold ">Total Products</h3>
            <p className=" text-sm font-bold ">70</p>
          </div>
          {/* <FaShopify size={20} />
          <h3>Total Products</h3> */}
        </div>
      </div>
      {/* statistic graph */}
      <div className=" flex lg:flex-row flex-col w-full items-center  lg:justify-between mt-6 gap-4 ">
        <div className=" lg:w-[50%] w-full bg-white rounded-md p-2 shadow-md">
          <h3 className=" text-lg font-semibold ">Sale Statistics</h3>
          <img
            src="http://clipartmag.com/images/statistics-clipart-1.png"
            alt="salesStatistics"
            className=" w-full h-56 object-contain "
          />
        </div>
        <div className=" lg:w-[50%] w-full bg-white rounded-md p-2 shadow-md">
          <h3 className=" text-lg font-semibold ">Products Statistics</h3>
          <img
            src="https://dr282zn36sxxg.cloudfront.net/datastreams/f-d:0ab8dea454db4b7310c0b18efc8f46b3d193ffca876dae7aff9ec9d2%2BIMAGE_THUMB_POSTCARD_TINY%2BIMAGE_THUMB_POSTCARD_TINY.1"
            alt="ProductsStatistics"
            className="w-full h-56 object-contain "
          />
        </div>
      </div>
      {/* Latest orders */}
      <div className="  my-6 shadow-md p-2 bg-white rounded-md ">
        <h3 className=" text-lg font-semibold ">Latest Orders</h3>
        <div className=" w-full "></div>
      </div>
      <div className=" h-24 w-full "></div>
    </div>
  );
};

export default HomeLayout;
