import { Link } from "react-router-dom";
import logo from "../Assets/LogoName.svg";

const Login = () => {
  return (
    <div className="login min-h-screen grid content-center p-4">
      <div className="container flex items-center flex-col gap-4 bg-white mx-auto p-8 rounded-lg w-full sm:max-w-[450px]">
        <div className="logo ">
          <img
            src={logo}
            alt="NMIETBOOK"
            className="w-[150px] sm:w-[180px] object-contain"
          />
        </div>
        <div className="text flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold capitalize">
            Let's login to your account
          </h1>
        </div>
        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="userName" className="text-sm opacity-80">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              placeholder="John123"
              className="border-2 border-slate-500 p-2 rounded-md text-sm text-black  w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm opacity-80">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="*****"
              className="border-2 border-slate-500 p-2 rounded-md text-sm text-black w-full "
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-3 rounded-md mt-4"
          >
            Login
          </button>
        </form>
        <div>
          <h4 className="font-normal text-sm">
            Don't have any account?
            <Link
              to={"/register"}
              className="text-primary font-medium underline ml-1"
            >
              Register
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
