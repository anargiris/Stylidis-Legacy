import React from "react";
import PageNavbar from "../components/PageNavbar";
import Footer from "../components/Footer";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Item from "../components/Item";
import Link from "next/link";
import styles from "../styles/Work.module.scss";
import PageHead from "../components/PageHead";

export default function App() {
  return (
    <>
      <PageHead
        title="Anargyros Stylidis - Web developer - Clients"
        description="Some of my clients and work I have done. Contact me for your own website."
      />
      <PageNavbar />
      <h1 className="font-next text-3xl text-center font-bold my-4">Clients</h1>
      <AnimateSharedLayout>
        <motion.ul
          className="flex flex-col gap-5 md:p-5 p-1 mx-auto max-w-5xl overflow-hidden 2xl:min-h-screen"
          layout={true}
        >
          {items.map((item) => (
            <Item
              key={item}
              title={item.title}
              paragraph={item.paragraph}
              stack={item.stack}
              img={item.img}
              link={item.link}
            />
          ))}
        </motion.ul>
        <AnimatePresence>
          <motion.section
            layout
            className="font-cab mt-10 p-5 relative bg-gradient-to-b from-white via-blue-50 to-blue-100"
          >
            <motion.div className="relative z-10">
              <motion.h2
                className={`text-center text-5xl font-bold mb-8 text-indigo-600 ${styles.shadows}`}
              >
                Get your own{" "}
                <span className={styles.highlighted}>website!</span>
              </motion.h2>
              <motion.p className="text-center text-2xl mb-5 text-gray-700">
                Feel free to contact me
              </motion.p>
              <Link href="/contact">
                <motion.div className="cursor-pointer text-center text-xl text-blue-50 bg-indigo-800 border-2 border-gray-300 px-2 py-1 w-24 mx-auto rounded-md font-bold hover:bg-gray-800 transition duration-200">
                  <motion.a>here</motion.a>
                </motion.div>
              </Link>
            </motion.div>
          </motion.section>
        </AnimatePresence>
      </AnimateSharedLayout>
      <Footer />
    </>
  );
}

const items = [
  {
    title: "Home Constructions",
    paragraph:
      "Family business specializing in home constructions in local area. Modern design, high performance and high Google search rank.",
    stack: "NextJS, Tailwind, Vercel",
    img: "/websites/dimitr.png",
    link: "https://dimitrakoudas.gr",
  },
  {
    title: "Chestnut Wood Modifications",
    paragraph:
      "Website for a local chestnut modification bussiness in Greece. High performance and 100% responsive.",
    stack: "NextJS, Tailwind, Vercel",
    img: "/websites/ksilia.png",
    link: "https://ksiliaefthimiou.gr",
  },
];
