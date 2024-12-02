import React from "react";

const LoginButton = ({ children }) => {
  return (
    <button className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full">
      {children}
    </button>
  );
};

export default LoginButton;
