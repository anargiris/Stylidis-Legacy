import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../public/lottie/website-animation.json";
import Link from "next/link";

const Website = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto h-full p-4 flex justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <h3 className="text-2xl font-bold text-indigo-700 mb-4">
          Give your business a digital home.
        </h3>
        <p className="w-2/3">
          If you love what you do then you better let the internet know.
          Building a website is essential to today's world.
        </p>
        <p></p>
        <Link href="/contact">
          <button className="bg-gray-darkest text-lg text-indigo-100 px-4 py-2 rounded-sm hover:bg-indigo-200 hover:text-gray-darkest transition duration-200">
            Contact
          </button>
        </Link>
      </div>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </motion.div>
  );
};

export default Website;
