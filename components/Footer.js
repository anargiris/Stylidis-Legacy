import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-gray-darkest text-gray-100 flex md:flex-row flex-col-reverse">
      <div className="font-cab flex flex-col gap-1 mt-4 md:mt-0">
        <span className="">&copy; Anargyros Stylidis 2021</span>
        <span className="text-xs">Web Developer, Greece.</span>
      </div>
      <ul className="flex gap-5 md:ml-10 font-cab flex-wrap">
        <motion.li
          whileHover={{ color: "#ffe169", transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ color: "#ffe169", transition: { duration: 0.4 } }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/contact">
            <a className="">Contact</a>
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ color: "#ffe169", transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/ecommerce">
            <a className="">Ecommerce</a>
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ color: "#ffe169", transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/work">
            <a className="">Clients</a>
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ color: "#ffe169", transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/devs">
            <a className="">Devs</a>
          </Link>
        </motion.li>
      </ul>
    </footer>
  );
};

export default Footer;
