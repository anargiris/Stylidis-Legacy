import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../public/lottie/marketing.json";

const Marketing = () => {
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
      className="max-w-5xl 2xl:max-w-6xl mx-auto h-full p-4 flex md:flex-row flex-col justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>
        <h3 className="text-2xl 2xl:text-3xl font-bold text-blue-700 mb-4">
          Build your online presence.
        </h3>
        <p className="md:w-2/3 2xl:text-xl">
          Make the best of the available tools on the internet to make sure you
          reach as many people as possible. Optimised content are loved by
          search engines.
          <br />
          <br />
          Make use of tools like Google My Business to make sure that local
          searches always include your business.
        </p>
      </div>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </motion.div>
  );
};

export default Marketing;
