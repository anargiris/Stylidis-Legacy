import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Item({ title, paragraph, stack, img, link }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <Head>
        <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"></script>
      </Head>
      <motion.li
        layout={true}
        className="font-cab shadow-xl border-t border-gray-200 overflow-hidden"
      >
        <motion.div
          layout={true}
          className="flex relative "
          style={{ backgroundColor: "#fffffc" }}
        >
          <motion.div layout={true} className="w-1/2 h-40 relative">
            <Image
              src={img}
              layout="fill"
              objectFit="cover"
              className="rounded-t-sm"
              placeholder="blur"
            />
          </motion.div>
          <motion.div layout={true} className="w-1/2 md:p-10 p-4">
            <motion.h4
              layout={true}
              className="md:text-2xl text-indigo-700 font-bold pointer-events-none"
            >
              {title}
            </motion.h4>
            <motion.div layout={true} className="mt-2 text-gray-700">
              <Link href={link}>
                <a rel="noreferrer" target="_blank">
                  {link}
                </a>
              </Link>
            </motion.div>
          </motion.div>
          <motion.span
            layout={true}
            onClick={toggleOpen}
            layout={true}
            className="absolute bottom-0 right-0"
          >
            <lord-icon
              src="https://cdn.lordicon.com/msoeawqm.json"
              trigger="hover"
              colors="primary:#121331,secondary:#08a88a"
              style={{
                width: "50px",
                height: "50px",
                cursor: "pointer",
                margin: "0 10px",
              }}
            ></lord-icon>
          </motion.span>
        </motion.div>
        <AnimatePresence>
          {isOpen && <Content paragraph={paragraph} stack={stack} />}
        </AnimatePresence>
      </motion.li>
    </>
  );
}

function Content({ paragraph, stack }) {
  return (
    <motion.div
      className="bg-gray-darkest rounded-b-md p-5"
      layout={true}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className=" bg-gray-100 text-gray-darkest rounded-lg p-1">
        {paragraph}
      </div>
      <div className=" bg-gray-100 text-gray-darkest rounded-lg mt-1 p-1">
        {stack}
      </div>
    </motion.div>
  );
}
