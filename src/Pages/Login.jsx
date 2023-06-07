import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/LogoName.svg";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useDispatch } from "react-redux";
import { updateUser } from "../Store/Slice/MainSlice";
import { toast } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target[0].value.trim();
    const password = e.target[1].value.trim();

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user);
      dispatch(updateUser(res.user));
      toast(`Welcome Back!, ${res.user.displayName}`, {
        icon: "🙏",
      });

      navigate("/");
    } catch (error) {
      setError(true);
      setLoading(false);
      toast.error("Somthing is Wrong!!!");
    }
  };

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
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm opacity-80">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="John123@gmail.com"
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
            {loading ? (
              <div className="grid place-content-center">
                <ThreeDots
                  height="30"
                  width="40"
                  radius="9"
                  color="#fff"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  visible={true}
                />
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
        {error && (
          <span className="text-base text-red-500">Something is Wrong!!!</span>
        )}
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
