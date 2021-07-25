import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const PageNavbar = () => {
  return (
    <nav className="max-w-5xl mx-auto pt-2 border-b border-gray-darkest border-opacity-20">
      <ul className="flex">
        <motion.li
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/">
            <a>
              <Image
                src="/icons/home.svg"
                width={50}
                height={50}
                alt="Home button"
              />
            </a>
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/contact">
            <a className="">
              <Image
                src="/icons/contact.svg"
                width={50}
                height={50}
                alt="Contact page button"
              />
            </a>
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
};

export default PageNavbar;
