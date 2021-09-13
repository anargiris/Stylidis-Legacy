import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../public/lottie/blogging.json";

const Blog = () => {
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
      className="max-w-5xl mx-auto h-full p-4 flex md:flex-row flex-col justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          Create the content your audience needs.
        </h3>
        <p className="w-2/3">
          Having a blog on top of your website can be crucial to your business'
          development. Not only it helps you communicate more efficiently with
          your audience, it also makes your website appear higher on search
          engine results.
        </p>
      </div>
      <div>
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
    </motion.div>
  );
};

export default Blog;
