import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { collection, where } from "firebase/firestore";
import { app, auth, db } from "../Firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-hot-toast";

const PasswordReset = () => {
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);
  const [errorData, setErrorData] = useState(undefined);

  const [emailSent, setEmailSent] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const errorHandling = (e) => {
    if (e === "Firebase: Error (auth/email-already-in-use).") {
      return "email already in use";
    } else if (e === "Firebase: Error (auth/user-not-found).") {
      return "Email not Found !!!";
    } else if (e === "Firebase: Error (auth/wrong-password).") {
      return `Wrong Password !!!`;
    } else if (e === "Firebase: Error (auth/missing-email).") {
      return `Enter Your Email !!!`;
    } else if (e === "Firebase: Error (auth/missing-password).") {
      return "Missing Password";
    }
    return e;
  };

  const handleSubmit = async (e) => {
    setEmailSent(true);
    setError(false);
    setLoading(true);
    setErrorData(undefined);
    e.preventDefault();

    const email = e.target[0].value.trim().trim().toLowerCase();

    if (email) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setLoading(false);
          toast("Email Sent!!!", {
            icon: "✉️",
          });
          setEmailSent(true);
        })
        .catch((error) => {
          setEmailSent(false);
          setError(true);
          setErrorData(errorHandling(error.message));
          setLoading(false);
        });
    } else {
      setLoading(false);
      setButtonDisabled(true);
    }
  };

  return (
    <div className="PasswordReset min-h-screen grid content-center p-4">
      <div className="container flex items-center flex-col gap-4 bg-white mx-auto p-8 rounded-lg w-full sm:max-w-[450px]">
        <div className="text text-center flex flex-col gap-2">
          <h1 className="text-2xl sm:text-2xl font-semibold capitalize">
            Forgot password?
          </h1>
          <p className="text-base opacity-75">
            No worries, we'll send you reset instructions.
          </p>
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
              onChange={(e) => {
                if (e.target.value) {
                  setButtonDisabled(false);
                }
              }}
            />
          </div>
          <div
            className={`text-sm text-center opacity-80 ${
              error ? "text-red-500" : "text-primary"
            }`}
          >
            {error && errorData}
            {emailSent && "Check your Email !!!"}
          </div>
          <button
            type="submit"
            className={`bg-primary ${
              buttonDisabled ? "opacity-50 cursor-not-allowed " : "opacity-100"
            } text-white py-3 rounded-md`}
            disabled={buttonDisabled}
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
              "Reset Password"
            )}
          </button>
        </form>
        <div>
          <Link
            to={"/login"}
            className="flex flex-row items-center gap-2 text-base opacity-80"
          >
            <BsArrowLeft />
            <span>Back to Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
