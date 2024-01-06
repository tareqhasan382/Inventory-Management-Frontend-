/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export interface Inputs {
  userId: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
  image: string;
  description: string;
  size: string;
  color: string;
}
// import { useParams } from "react-router-dom";
import { getFromLocalStorage } from "../utills/local-storage";
import { authKey } from "../constant/storageKey";
import { getUserInfo } from "../utills/authService";

// import { JwtPayload } from "jwt-decode";

const AddProduct: React.FC = () => {
  //const { id } = useParams();
  const userInfo = getUserInfo() as any;
  const id = userInfo.userId;
  const navigate = useNavigate();
  const [selectImage, setSelectImage] = useState<File | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectImage(e.target.files[0]);
    }
  };
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    if (selectImage) {
      const formData = new FormData();
      formData.append("file", selectImage);
      formData.append("upload_preset", "Reservation");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dsybkyula/image/upload",
        formData
      );

      const imageUrl = response.data.secure_url;
      const UserData: Inputs = {
        userId: id,
        name: data.name,
        category: data.category,
        price: data.price,
        quantity: data.quantity,
        description: data.description,
        size: data.size,
        color: data.color,
        image: imageUrl,
      };
      console.log("data:", { id, UserData });
      // await updateProfile({ id, UserData });
      await axios.post("http://localhost:5000/api/v1/addProduct", UserData, {
        headers: {
          Authorization: getFromLocalStorage(authKey),
          "Content-Type": "application/json",
        },
      });

      navigate("/");
      toast.success("Product Created successfully");
      // window.location.reload();
      // console.log("result:", result);
    }
  };

  return (
    <div className=" w-full py-8 bg-light-white ">
      <div className="  w-full px-4 lg:px-24 flex flex-col lg:flex-row justify-around gap-5 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" lg:w-1/2 w-full flex flex-col gap-1 outline outline-2 outline-black/5 bg-white  shadow-xl shadow-dark-purple/30 p-4 rounded-md  "
        >
          <p className=" text-2xl font-bold py-3 text-center bg-dark-purple text-white rounded ">
            Create Product{" "}
          </p>
          <label>Product Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder=" Enter Product Name"
            className=" w-full focus:outline-none bg-gray-100 h-10 rounded px-2 focus:outline-2 focus:outline-black "
          />
          <p className=" text-red-500 font-bold ">{errors.name?.message}</p>
          <label>Product Category</label>
          <input
            {...register("category", { required: true })}
            type="text"
            placeholder="Enter Category"
            className=" w-full bg-gray-100 focus:outline-none h-10 rounded px-2 "
          />
          <p className=" text-red-500 font-bold ">{errors.category?.message}</p>
          <label>Product Price</label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Enter Price"
            className=" w-full bg-gray-100 focus:outline-none h-10 rounded px-2 "
          />
          <p className=" text-red-500 font-bold ">{errors.price?.message}</p>
          <label>Product quantity</label>
          <input
            {...register("quantity", { required: true })}
            type="number"
            placeholder="Enter quantity"
            className=" w-full bg-gray-100 focus:outline-none h-10 rounded px-2 "
          />
          <p className=" text-red-500 font-bold ">{errors.quantity?.message}</p>
          <label>Product Description</label>
          <input
            {...register("description", { required: true })}
            type="text"
            placeholder="Enter description"
            className=" w-full bg-gray-100 focus:outline-none h-10 rounded px-2 "
          />
          <p className=" text-red-500 font-bold ">
            {errors.description?.message}
          </p>
          <label>Product Size</label>
          <input
            {...register("size", { required: true })}
            type="text"
            placeholder="Enter size"
            className=" w-full bg-gray-100 focus:outline-none h-10 rounded px-2 "
          />
          <p className=" text-red-500 font-bold ">{errors.size?.message}</p>
          <label>Product Color</label>
          <input
            {...register("color", { required: true })}
            type="text"
            placeholder="Enter color"
            className=" w-full bg-gray-100 focus:outline-none h-10 rounded px-2 "
          />
          <p className=" text-red-500 font-bold ">{errors.color?.message}</p>
          <input
            onChange={handleImageChange}
            // {...register("image", { required: true })}

            type="file"
            placeholder="Upload Food Image"
            className=" focus:outline-none bg-gray-100 h-10 rounded px-2 right-0 py-1 items-center "
          />
          <p className=" text-red-500 font-bold ">{errors.image?.message}</p>
          <button
            type="submit"
            //   disabled={isLoading}
            className={`${
              "" && " opacity-30 "
            }w-full h-10 rounded font-bold bg-black text-white hover:bg-slate-800 transition ease-in-out duration-1000`}
          >
            Submit
          </button>
        </form>
        <div className=" lg:mt-32 mt-3 p-2 text-center h-[200px]  lg:w-[20%] rounded-md flex items-center justify-center border border-spacing-2 border-black bg-dark-purple text-white ">
          <div>
            {selectImage ? (
              <img
                src={URL.createObjectURL(selectImage)}
                alt="img"
                className=" w-[200px] h-[200px] object-contain "
              />
            ) : (
              <p className=" "> image upload preview will appear here! </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
