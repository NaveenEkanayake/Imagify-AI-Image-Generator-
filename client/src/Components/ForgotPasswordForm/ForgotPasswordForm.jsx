import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { assets } from "../../assets/images/assets";
import { motion } from "framer-motion";

const ForgotPasswordForm = () => {
  const { setShowForgotPassword } = useContext(AppContext);

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
        className="relative bg-white p-10 rounded-xl text-slate-500 w-96"
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Forgot Password
        </h1>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} className="w-6 h-6" alt="Email Icon" />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="outline-none text-sm flex-grow"
          />
        </div>
        <button
          type="button"
          className="bg-blue-600 w-full text-white py-2 rounded-full mt-4"
        >
          Send
        </button>
        <img
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt="Close"
          onClick={() => setShowForgotPassword(false)}
        />
      </motion.form>
    </div>
  );
};

export default ForgotPasswordForm;
