import React, { useState } from "react";
import { assets } from "../assets/images/assets";
import { motion } from "framer-motion";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const Results = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [input, setInput] = useState("");

  const handlesubmit = async (e) => {};
  return (
    <>
      <NavBar />
      <motion.form
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        onSubmit={handlesubmit}
        className="flex flex-col min-h-[90vh] justify-center items-center"
      >
        <div>
          <div className="relative">
            <img src={image} alt="Sample" className="max-w-sm rounded" />
            <span
              className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${
                loading ? "w-full transition-all duration-[10s]" : "w-0"
              }`}
            />
          </div>
          <p className={!loading ? "hidden" : "animate-pulse"}>Loading...</p>
        </div>
        {!isImageLoading && (
          <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Describe what you want to generate"
              className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
            />
            <button
              type="submit"
              className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full disabled:opacity-50"
            >
              Generate
            </button>
          </div>
        )}

        {isImageLoading && (
          <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
            <p
              onClick={() => {
                setIsImageLoading(false);
              }}
              className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
            >
              Generate Another
            </p>
            <a
              href={image}
              download
              className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
            >
              Download
            </a>
          </div>
        )}
      </motion.form>
      <Footer />
    </>
  );
};

export default Results;
