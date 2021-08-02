import React from "react";
import PageNavbar from "../components/PageNavbar";
import Link from "next/link";
import TimelineGrid from "../components/Timeline";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import PageHead from "../components/PageHead";

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
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
    transition: {
      type: "spring",
    },
  },
  hidden: { opacity: 0, y: 50 },
};

const devs = () => {
  return (
    <>
      <PageHead
        title="Anargyros Stylidis - Development Information"
        description="Information that other web developers might find useful or inspiring."
      />
      <PageNavbar />
      <div className="max-w-5xl mx-auto font-cab min-h-screen">
        <header>
          <h1 className="font-next text-4xl md:text-left text-center">
            Development related information.
          </h1>
        </header>
        <main className="md:flex-row flex flex-col justify-between mt-5 ">
          <motion.div
            variants={list}
            className="md:w-2/3"
            initial="hidden"
            animate="visible"
          >
            <motion.p className="mt-2 md:text-left text-center" variants={item}>
              I am a self taught web developer. I used every resource I could
              find to help me study web technologies. Started from freeCodeCamp
              and YouTube then bought 2 Udemy courses to study full stack
              development.
            </motion.p>
            <motion.div
              className="border-l-2 border-blue-300 pl-2 text-center md:text-left "
              variants={item}
            >
              <h3 className="font-bold mt-4">My main stack:</h3>
              <ul className="mt-1">
                <li>NextJS/React</li>
                <li>Tailwind</li>
                <li>NodeJS</li>
                <li>Strapi</li>
                <li>MongoDB</li>
              </ul>
            </motion.div>
            <motion.p className="mt-4 md:text-left text-center" variants={item}>
              Reach out to me{" "}
              <Link href="/contact">
                <span className="text-blue-500 cursor-pointer">here</span>
              </Link>
              , I'll be happy to answer and connect with any developers.
            </motion.p>
            <motion.div variants={item} className="mt-4">
              <motion.a href="/StylidisAnargyros.docx">
                <motion.span className="text-yellow-600 cursor-pointer">
                  Download my resume.
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
          <TimelineGrid />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default devs;
