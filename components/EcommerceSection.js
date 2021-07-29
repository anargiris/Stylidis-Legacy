import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import styles from "../styles/EcommerceSection.module.scss";

const EcommerceSection = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen relative w-full overflow-hidden"
      style={{ backgroundImage: "url(/gradient.svg)" }}
    >
      <h4 className="font-next text-gray-800 text-center pt-4 2xl:text-5xl text-4xl font-bold">
        Do you need an online store?
      </h4>
      {inView && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          className="font-cab p-6 z-10 relative"
        >
          <motion.p
            className={`md:mt-10 mt-5 2xl:text-5xl text-3xl md:w-1/2 text-gray-900`}
          >
            <span className="underline font-bold text-gray-darkest">
              I'll help you start selling online
            </span>{" "}
            and provide guidance on the usability of your store's admin section.
          </motion.p>
          <motion.p className="my-10 2xl:text-4xl text-2xl text-gray-900">
            ...using{" "}
            <Link href="https://www.shopify.com/">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-green-500 font-bold"
              >
                Shopify
              </a>
            </Link>{" "}
            or{" "}
            <Link href="https://cloudcart.com/">
              <a
                target="_blank"
                rel="noreferrer"
                className="text-pink-300 font-bold"
              >
                Cloudcart
              </a>
            </Link>
            .
          </motion.p>

          <motion.p className="md:mt-20 mt-14 2xl:text-3xl text-xl text-gray-900">
            <Link href="/ecommerce">
              <span
                className={`font-black cursor-pointer ${styles.underlineMagical}`}
              >
                Click here
              </span>
            </Link>{" "}
            to learn more and decide which solution works best for you.
          </motion.p>
          <Link href="/contact">
            <button className="bg-gray-darkest 2xl:text-3xl text-lg mt-14 2xl:mt-20 rounded-sm text-gray-100 p-3 2xl:p-5 hover:bg-gray-800 outline-none focus:outline-none hover:text-gray-200 transition duration-200 ease-linear">
              Contact me for an online store
            </button>
          </Link>
        </motion.div>
      )}
      <div className="absolute bottom-0 right-0 mt-20 overflow-hidden z-0">
        <Image src="/bg.svg" width={650} height={650} />
      </div>
      <div className="absolute md:block hidden bottom-0 -right-10 z-10">
        <Image src="/11.png" width={450} height={450} />
      </div>
      <div className="absolute md:hidden block bottom-0 -right-10 z-10">
        <Image src="/11.png" width={150} height={150} />
      </div>
    </section>
  );
};

export default EcommerceSection;
