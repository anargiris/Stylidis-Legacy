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
      className="max-w-5xl 2xl:max-w-6xl text-center md:text-left  mx-auto h-full p-4 flex md:flex-row flex-col justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <h3 className="text-2xl 2xl:text-3xl font-bold text-indigo-700 mb-4">
          Give your business a digital home.
        </h3>
        <p className="md:w-2/3 mb-10 2xl:text-xl">
          If you love what you do then you better let the internet know.
          Building a website is essential to today's world.
          <br />
          <br /> Let's have a conversation and discuss your goals. Then we can
          give you a website that represents your vision.
        </p>
        <Link href="/contact">
          <button className="bg-gray-darkest 2xl:text-xl text-lg text-indigo-100 px-4 py-2 rounded-sm hover:bg-indigo-200 hover:text-gray-darkest transition duration-200">
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
