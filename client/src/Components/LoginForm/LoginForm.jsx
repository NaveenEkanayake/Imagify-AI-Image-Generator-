import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import Usericon from "../../assets/images/user.webp";
import { assets } from "../../assets/images/assets";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, setShowForgotPassword } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-white p-10 rounded-xl text-slate-500 w-96"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state === "Login" ? "Login" : "Signup"}
        </h1>
        <p className="text-sm text-center">
          {state === "Login"
            ? "Welcome back! Please login to continue."
            : "Welcome! Please sign up to get started."}
        </p>
        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
            <img src={Usericon} className="w-6 h-6" alt="User Icon" />
            <input
              type="text"
              placeholder="Fullname"
              required
              className="outline-none text-sm flex-grow"
            />
          </div>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} className="w-6 h-6" alt="Email Icon" />
          <input
            type="email"
            placeholder="Email"
            required
            className="outline-none text-sm flex-grow"
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} className="w-6 h-6" alt="Lock Icon" />
          <input
            type="password"
            placeholder="Password"
            required
            className="outline-none text-sm flex-grow"
          />
        </div>
        {state === "Login" && (
          <p
            onClick={() => {
              setShowForgotPassword(true);
              setShowLogin(false);
            }}
            className="text-sm text-blue-600 my-4 cursor-pointer text-center"
          >
            Forgot Password?
          </p>
        )}
        <button className="bg-blue-600 w-full text-white py-2 rounded-full mt-4">
          {state === "Login" ? "Login" : "Create Account"}
        </button>
        <p className="mt-5 text-center">
          {state === "Login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => setState(state === "Login" ? "Signup" : "Login")}
          >
            {state === "Login" ? "Sign Up" : "Login"}
          </span>
        </p>
        <img
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt="Close"
          onClick={() => setShowLogin(false)}
        />
      </motion.form>
    </div>
  );
};

export default LoginForm;
