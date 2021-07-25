import React from "react";
import styles from "../styles/Navbar.module.scss";
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

const Navbar = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={list}
      className="absolute md:right-0 gap-2 bottom-0 md:bottom-auto hidden md:block md:pr-10 md:mr-10 md:mt-40 "
    >
      <motion.div variants={item} className={styles.logo}>
        <Link href="/ecommerce">
          <span className={styles.button}>Ecommerce</span>
        </Link>
        <span className={styles.list}>
          <span className="2xl:hidden">
            <Image src="/icons/eshop.svg" height={50} width={50} />
          </span>
          <span className="hidden 2xl:inline-block">
            <Image src="/icons/eshop.svg" height={80} width={80} />
          </span>
        </span>
      </motion.div>
      <motion.div variants={item} className={styles.logo}>
        <Link href="/work">
          <span className={styles.button}>Projects</span>
        </Link>
        <span className={styles.list}>
          <span className="2xl:hidden">
            <Image src="/icons/projects.svg" height={50} width={50} />
          </span>
          <span className="hidden 2xl:inline-block">
            <Image src="/icons/projects.svg" height={80} width={80} />
          </span>
        </span>
      </motion.div>
      <motion.div variants={item} className={styles.logo}>
        <Link href="/contact">
          <span className={styles.button}>Contact</span>
        </Link>
        <span className={styles.list}>
          <span className="2xl:hidden">
            <Image src="/icons/contact.svg" height={50} width={50} />
          </span>
          <span className="hidden 2xl:inline-block">
            <Image src="/icons/contact.svg" height={80} width={80} />
          </span>
        </span>
      </motion.div>
      <motion.div variants={item} className={styles.logo}>
        <Link href="/devs">
          <span className={styles.button}>For devs</span>
        </Link>
        <span className={styles.list}>
          <span className="2xl:hidden">
            <Image src="/icons/dev.svg" height={50} width={50} />
          </span>
          <span className="hidden 2xl:inline-block">
            <Image src="/icons/dev.svg" height={80} width={80} />
          </span>
        </span>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
