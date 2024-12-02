import React from "react";
import Button from "./Button/Button";
import { assets } from "../../assets/images/assets";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500 cursor-pointer">
        <p>Best text to image Generator</p>
        <img src={assets.star_icon} alt="Star Icon" className="w-4 h-4" />
      </div>
      <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center">
        Turn text to <span className="text-blue-600">image</span> in Seconds.
      </h1>
      <p className="text-center max-w-xl mx-auto mt-5">
        Unleash your creativity with AI.Turn your imagination into Visual art in
        Seconds -just type,and watch the magic happen
      </p>
      <Button>Generate images</Button>
      <div className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6)
          .fill("")
          .map((items, index) => (
            <img
              className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
              src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
              key={index}
              width={70}
            />
          ))}
      </div>
      <p className="mt-2 text-neutral-600">Generate images from imagify</p>
    </div>
  );
};

export default Header;
