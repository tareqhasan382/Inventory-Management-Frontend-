import { Link } from "react-router-dom";
import { useProfileQuery } from "../redux/api/profileApi";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProviders";

const Profile = () => {
  const authContext = useContext(AuthContext);

  const { data } = useProfileQuery(null);
  // console.log("data:", data);
  // console.log("isLoading:", isLoading);
  // console.log("isSuccess:", isSuccess);
  // console.log("error:", isError);
  if (!authContext) {
    // Handle the case where AuthContext is null
    return <div>Loading...</div>;
  }

  const { user } = authContext;
  return (
    <div className="p-7 text-2xl font-semibold flex-1 h-screen w-full ">
      <div className=" flex flex-col items-center ">
        <div className=" bg-dark-purple text-white w-full rounded ">
          <h1 className=" text-center py-4 ">Profile</h1>
        </div>
        <h1>{user} </h1>

        {data ? (
          <div className=" flex flex-col shadow-2xl hover:bg-slate-100 p-4 rounded-md my-3 ">
            <div className=" flex items-center justify-center ">
              <img
                src={data?.data?.image}
                alt="user-image"
                className=" w-[140px] h-[140px] rounded-full object-fill"
              />
            </div>
            <h3> Name:{data?.data?.name} </h3>
            <h3> Email:{data?.data?.email} </h3>
            {data?.data?.bio && <h3> Bio:{data?.data?.bio} </h3>}
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
    </div>
  );
};

export default Profile;
