import logo from "../Assets/LogoName.svg";
import profile from "../Assets/profile.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="Register min-h-screen grid content-center p-4">
      <div className="container flex items-center flex-col gap-4 bg-white mx-auto p-8 rounded-lg w-full sm:max-w-[450px] ">
        <div className="logo ">
          <img
            src={logo}
            alt="NMIETBOOK"
            className="w-[150px] sm:w-[180px] object-contain"
          />
        </div>
        <div className="text flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Create Your Account
          </h1>
          <p className="text-base opacity-75">😃 Sign up and 💬 Chat </p>
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
            <label htmlFor="email" className="text-sm opacity-80">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="John123@gmail.com"
              className="border-2 border-slate-500 p-2 rounded-md text-sm text-black w-full "
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
          <div className="max-w-fit ">
            <label
              htmlFor="image"
              className="flex flex-row items-center gap-2 cursor-pointer"
            >
              <img
                src={profile}
                alt="profile choose"
                className="w-[60px] aspect-square object-contain rounded-full"
              />
              <span className="opacity-80">Add an Avatar</span>
            </label>
            <input type="file" id="image" className="hidden" />
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-3 rounded-md"
          >
            Register
          </button>
        </form>
        <div>
          <h4 className="font-normal text-sm">
            Do have any account?
            <Link
              to={"/login"}
              className="text-primary font-medium underline ml-1"
            >
              Login
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Register;
