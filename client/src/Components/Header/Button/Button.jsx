import React from "react";
import { assets } from "../../../assets/images/assets";

const Button = ({ children }) => {
  return (
    <button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full">
      {children}
      <img className="h-6" src={assets.star_group} alt="Star Group" />
    </button>
  );
};

export default Button;
