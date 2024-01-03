import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/authApi";
import { authKey } from "../constant/storageKey";
import { toast } from "react-toastify";
import { setToLocalStorage } from "../utills/local-storage";
import { Link } from "react-router-dom";

interface InputsForm {
  email: string;
  password: string;
}
const LoginModal: React.FC = () => {
  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsForm>();
  const onSubmit: SubmitHandler<InputsForm> = async (data) => {
    const result = await login(data).unwrap();
    if (isSuccess) {
      // console.log("isSuccess:", isSuccess);
      setToLocalStorage(authKey, result?.data.accessToken);
      toast.success("Logged in Successfully.");
    }
  };

  return (
    <div className="p-7 text-2xl font-semibold flex-1 h-screen w-full flex flex-col items-center justify-center ">
      <h1 className=" text-center font-bold py-2 ">Login Page </h1>
      <div className=" bg-white text-black flex flex-col items-center justify-center rounded-md lg:w-[500px] w-full ">
        <form onSubmit={handleSubmit(onSubmit)} className=" w-full px-2 ">
          <div className=" flex flex-col w-full ">
            <label>Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className=" rounded-md px-1 py-2 text-lg outline outline-1 outline-gray-400 "
            />
            {errors.email && (
              <span className=" text-sm font-semibold text-red-500 ">
                Email is required
              </span>
            )}
          </div>
          <div className="flex flex-col  ">
            <label>Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter your password"
              className=" rounded-md px-1 py-2 text-lg outline outline-1 outline-gray-400"
            />
            {errors.password && (
              <span className=" text-sm font-semibold text-red-500 ">
                Password is required
              </span>
            )}
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className=" bg-black text-white my-2 w-full "
          >
            {isLoading ? "Loading" : "Login"}
          </button>
          <p className=" text-xs text-right px-2 ">
            New User ?
            <Link to="/register">
              <span className=" pl-1 text-blue-500 cursor-pointer ">
                please Register
              </span>
            </Link>
          </p>
        </form>
        <div>------------------</div>
        <div className="lg:w-[500px] w-full px-2 py-2 ">
          <button className=" w-full "> Google </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
