import React, { useState } from "react";
import { assets } from "../../assets/assets";

const Login = ({ setshowlogin }) => {
  const [currState, setcurrState] = useState("Login");

  return (
    <div className="absolute z-10 inset-0 bg-black bg-opacity-60 grid">
      {/* Login Popup Container */}
      <form className="place-self-center w-[max(23vw,330px)] bg-white text-gray-600 p-6 rounded-lg flex flex-col gap-6 animate-fadeIn">
        {/* Title Section */}
        <div className="flex justify-between items-center text-black">
          <h1 className="text-xl font-bold">{currState}</h1>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-4 cursor-pointer"
          />
        </div>

        {/* Input Fields */}
        <div className="flex flex-col gap-5">
          {currState === "sign up" && (
            <input
              type="text"
              placeholder="Username"
              required
              className="outline-none border border-gray-300 p-2 rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            required
            className="outline-none border border-gray-300 p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none border border-gray-300 p-2 rounded"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="bg-orange-600 text-white p-2 rounded text-lg hover:bg-orange-500 transition duration-300"
        >
          {currState === "sign up" ? "Create Account" : "Login"}
        </button>

        {/* Terms and Conditions */}
        <div className="flex items-start gap-2 -mt-4">
          <input type="checkbox" required className="mt-1" />
          <p className="text-sm">
            By continuing, I agree to the{" "}
            <span className="text-orange-600 font-medium cursor-pointer">
              Terms of Use
            </span>{" "}
            and{" "}
            <span className="text-orange-600 font-medium cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>
        </div>

        {/* Toggle between Login and Sign Up */}
        {currState === "Login" ? (
          <p className="text-sm">
            Create a new account?{" "}
            <span
              onClick={() => setcurrState("sign up")}
              className="text-orange-600 font-medium cursor-pointer"
            >
              Click Here
            </span>
          </p>
        ) : (
          <p className="text-sm">
            Already have an account?{" "}
            <span
              onClick={() => setcurrState("Login")}
              className="text-orange-600 font-medium cursor-pointer"
            >
              Login Here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
