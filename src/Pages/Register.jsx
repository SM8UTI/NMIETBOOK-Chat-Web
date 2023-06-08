import { useState } from "react";
import logo from "../Assets/LogoName.svg";
import profile from "../Assets/profile.svg";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { auth, db, storage } from "../Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { doc, setDoc } from "firebase/firestore";
import { ThreeDots } from "react-loader-spinner";

const Register = () => {
  const [files, setFiles] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const username = e.target[0].value.trim().toLowerCase();
    const email = e.target[1].value.trim().toLowerCase();
    const password = e.target[2].value.trim();
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const data = new Date().getTime();
      const storageRef = ref(storage, `${username + data}`);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName: username,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: username,
              email: email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});

            navigate("/login");
          } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
            toast.error("Something Went Wrong !!!");
          }
        });
      });
    } catch (error) {
      setError(true);
      setLoading(false);
      toast.error("Something Went Wrong !!!");
    }
  };

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
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="userName" className="text-sm opacity-80">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              placeholder="John123"
              className="border-2 border-slate-500 p-2 rounded-md text-sm text-black  w-full"
              required
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
              required
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
              required
            />
          </div>
          <div className=" flex flex-row items-center justify-between">
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
            {files && <span>✅ Uploaded</span>}
            <input
              type="file"
              id="image"
              className="hidden"
              onChange={(e) => {
                setFiles(e.target.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-white py-3 rounded-md"
            disabled={loading}
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
              "Register"
            )}
          </button>
        </form>
        {loading && (
          <span className="text-sm text-center max-w-[300px] text-green-800">
            Uploading and Compressing the image please wait...
          </span>
        )}
        {error && (
          <span className="text-base text-red-500">Something is Wrong!!!</span>
        )}
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
