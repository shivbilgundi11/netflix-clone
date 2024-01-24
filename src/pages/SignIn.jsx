import { useEffect, useState } from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../app/features/userSlice";

const SignIn = () => {
  useEffect(() => {
    window.document.title = "Netflix";
  });

  const emailFromUser = useSelector((state) => state.user.emailPlaceholder);

  const [email, setEmail] = useState(emailFromUser ? emailFromUser : "");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(
          login({
            uid: userCredential.uid,
            email: userCredential.email,
          })
        );
        navigate("/browse");
        setIsLoading(false);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        setIsLoading(false);
      });
  };

  return (
    <section className=" border-b-4 border-dark-gray sm:border-none py-5 sm:py-6 bg-black sm:bg-transparent flex items-center justify-center">
      <div className="h-full w-[450px] bg-black sm:bg-[#000000aa] p-5 sm:my-10 sm:p-[60px] mx-auto rounded-md">
        <h2 className="text-3xl sm:text-[32px] mb-5 sm:mb-7">Login</h2>

        <p className={`my-6 text-red-700 ${errorMsg ? "block" : "hidden"}`}>
          {errorMsg}
        </p>

        <div className="">
          <form
            onSubmit={(e) => handleLogin(e)}
            className="flex flex-col items-center justify-between gap-y-5 sm:gap-y-4"
          >
            <input
              type="email"
              className="form-input bg-[#333333] placeholder:text-sm"
              placeholder="Email or phone number"
              autoComplete="false"
              id="emailPhone"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="form-input bg-[#333333] placeholder:text-sm"
              autoComplete="false"
              placeholder="Password"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className={`w-full h-12 rounded mt-5 ${
                isLoading ? "bg-red-900" : "bg-primary"
              }`}
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="text-sm font-sans text-white-400 flex justify-between my-2 mb-14">
            <label
              htmlFor="rememberCheckbox"
              className="inline-flex items-center gap-x-1 cursor-not-allowed"
            >
              <input
                type="checkbox"
                name="remember"
                id="rememberCheckbox"
                className="cursor-not-allowed"
              />
              Remember me
            </label>

            <Link to="#" className="hover:underline">
              Need help?
            </Link>
          </div>
        </div>

        <div className="text-[15px] font-sans font-thin mb-5 sm:mb-6">
          <p className="text-white-400 mb-3">
            New to Netflix?.
            <Link to="/register" className="text-white hover:underline">
              Sign up now.
            </Link>
          </p>

          <p className="text-[14px] text-white-400">
            Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
            <Link to="#" className="text-md text-blue-600">
              Learn more.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
