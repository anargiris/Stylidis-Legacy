import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

const item = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: { opacity: 0, y: 100 },
};

const MobileNav = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={list}
      className="py-5 relative flex md:hidden z-10"
    >
      <Link href="/ecommerce">
        <motion.div variants={item} className="relative">
          <Image
            src="/icons/eshop.svg"
            height={50}
            width={50}
            alt="Mobile nav ecommerce"
          />
        </motion.div>
      </Link>

      <Link href="/work">
        <motion.div variants={item}>
          <Image
            src="/icons/projects.svg"
            height={50}
            width={50}
            alt="Mobile nav projects"
          />
        </motion.div>
      </Link>

      <Link href="/contact">
        <motion.div variants={item}>
          <Image
            src="/icons/contact.svg"
            height={50}
            width={50}
            alt="mobile nav contact"
          />
        </motion.div>
      </Link>

      <Link href="/devs">
        <motion.div variants={item}>
          <Image
            src="/icons/dev.svg"
            height={50}
            width={50}
            alt="mobile nav devs"
          />
        </motion.div>
      </Link>
    </motion.nav>
  );
};

export default MobileNav;
