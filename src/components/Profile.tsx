import { Link } from "react-router-dom";
import { useProfileQuery } from "../redux/api/profileApi";

const Profile = () => {
  const { data, isLoading, isSuccess, isError } = useProfileQuery(null);
  console.log("data:", data);
  console.log("isLoading:", isLoading);
  console.log("isSuccess:", isSuccess);
  console.log("error:", isError);
  return (
    <div className="p-7 text-2xl font-semibold flex-1 h-screen w-full ">
      <h1 className=" text-center ">Profile</h1>
      {data ? (
        <div className=" flex flex-col items-center ">
          <img
            src="https://www.svgrepo.com/show/165196/user.svg"
            alt="user-image"
            className=" w-[140px] h-[140px] rounded-full object-fill "
          />
          <h3> Name:{data?.data?.name} </h3>
          <h3> Email:{data?.data?.email} </h3>
          <Link to={`/editProfile/${data?.data?._id}`}>
            <button className=" px-2 py-1 bg-black text-white font-semibold text-sm rounded-md my-2 ">
              Edit Profile
            </button>
          </Link>
        </div>
      ) : (
        <p className=" text-center ">You are not authorise. Please login</p>
      )}
    </div>
  );
};

export default Profile;
