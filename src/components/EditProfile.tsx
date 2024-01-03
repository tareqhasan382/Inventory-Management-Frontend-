const EditProfile = () => {
  return (
    <div className="p-7 text-2xl font-semibold flex-1 h-screen w-full ">
      <h1 className=" text-center ">Update Profile</h1>
      <div className=" flex flex-col items-center ">
        <img
          src="https://www.svgrepo.com/show/165196/user.svg"
          alt="user-image"
          className=" w-[140px] h-[140px] rounded-full object-fill "
        />
        <input type="text" defaultValue="name" />

        <h3> Name: </h3>
        <h3> Email: </h3>
        <button className=" px-2 py-1 bg-black text-white font-semibold text-sm rounded-md my-2 ">
          submit
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
