import React from "react";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import animationData from "../../public/lottie/eshop.json";
import Link from "next/link";

const OnlineStore = () => {
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
        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          Start selling online.
        </h3>
        <p className="w-2/3">
          Ecommerce is one of the fastest growing businesses and with no sign to
          stop. There's a lot of factors that led to this, with the profits of
          going online being huge.
        </p>
        <p className="w-2/3">
          <Link href="/ecommerce">Click here</Link> to learn more about
          ecommerce and the platforms that help you reach new heights.
        </p>
      </div>
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </motion.div>
  );
};

export default OnlineStore;
