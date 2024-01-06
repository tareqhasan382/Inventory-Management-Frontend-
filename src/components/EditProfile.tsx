/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
export interface Inputs {
  id?: string;
  name: string;
  bio: string;
  image?: string;
}
import { useParams } from "react-router-dom";
import { useProfileQuery } from "../redux/api/profileApi";
import { getFromLocalStorage } from "../utills/local-storage";
import { authKey } from "../constant/storageKey";
const EditProfile: React.FC = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const { data, isLoading: getLoading } = useProfileQuery(null);
  // const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  // console.log("profile:", data);
  const user: Inputs = data?.data;

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
  } = useForm<Inputs>({
    defaultValues: {
      name: user?.name,
      bio: user?.bio,
      image: user?.image,
    },
  });
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    if (selectImage) {
      const formData = new FormData();
      //selectImage || formData.append("file", data.image[0]);
      formData.append("file", selectImage);
      formData.append("upload_preset", "Reservation");
      // Make a request to Cloudinary using axios
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dsybkyula/image/upload",
        formData
      );

      const imageUrl = response.data.secure_url;
      const UserData: Inputs = {
        name: data.name,
        bio: data.bio,
        image: imageUrl,
      };
      console.log("data:", { id, UserData });
      // await updateProfile({ id, UserData });
      await axios.patch(
        `http://localhost:5000/api/v1/editProfile/${id}`,
        UserData,
        {
          headers: {
            Authorization: getFromLocalStorage(authKey),
            "Content-Type": "application/json",
          },
        }
      );

      navigate("/profile");
      toast.success("user update successfully");
      // window.location.reload();
      // console.log("result:", result);
    } else {
      console.log("data:", { id, ...data });
      await axios.patch(
        `http://localhost:5000/api/v1/editProfile/${id}`,
        data,
        {
          headers: {
            Authorization: getFromLocalStorage(authKey),
            "Content-Type": "application/json",
          },
        }
      );
      // await updateProfile({ id, ...data });
      navigate("/profile");
      //console.log("result:", result);
      toast.success("user create successfully");
      // window.location.reload();
    }
  };
  return (
    <div className=" flex items-center justify-center w-full py-14 bg-slate-300 ">
      {getLoading ? (
        <div>Loading</div>
      ) : (
        <div className="  w-full px-4 lg:px-24 flex flex-col lg:flex-row justify-around gap-5 ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" lg:w-1/2 w-full flex flex-col gap-3 "
          >
            <p className=" text-2xl font-bold py-3 ">Edit Profile </p>
            <label>Name</label>
            <input
              {...register("name")}
              type="text"
              placeholder=" Enter name"
              defaultValue={user?.name}
              className=" w-full focus:outline-none h-10 rounded px-2 "
            />
            <p className=" text-red-500 font-bold ">{errors.name?.message}</p>
            <label>Bio</label>
            <input
              {...register("bio")}
              type="text"
              placeholder="Enter your bio"
              defaultValue={user?.bio}
              className=" w-full focus:outline-none h-10 rounded px-2 "
            />
            <p className=" text-red-500 font-bold ">{errors.bio?.message}</p>

            <input
              onChange={handleImageChange}
              // {...register("image", { required: true })}

              type="file"
              placeholder="Upload Food Image"
              className=" focus:outline-none bg-white h-10 rounded px-2 right-0 py-1 items-center "
            />
            <p className=" text-red-500 font-bold ">{errors.image?.message}</p>
            <button
              type="submit"
              //   disabled={isLoading}
              className={`${
                getLoading && " opacity-30 "
              }w-full h-10 rounded font-bold bg-black text-white hover:bg-slate-800 transition ease-in-out duration-1000`}
            >
              Submit
            </button>
          </form>
          <div className=" mt-16  h-[200px] bg-white rounded-md flex items-center justify-center border border-spacing-2 border-black ">
            {selectImage ? (
              <img
                src={URL.createObjectURL(selectImage)}
                alt="img"
                className=" w-[200px] h-[200px] object-contain "
              />
            ) : (
              <p className=" text-center ">
                <img
                  src={user?.image}
                  alt="img"
                  className=" w-[200px] h-[200px] object-contain "
                />
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
