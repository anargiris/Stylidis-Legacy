import React from "react";
import PageNavbar from "../components/PageNavbar";
import Image from "next/image";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Head from "../components/PageHead";

const contact = () => {
  return (
    <>
      <Head
        title="Anargyros Stylidis - Contact"
        description="Contact me and we can start working on your website."
      />
      <div className="min-h-screen mb-10">
        <PageNavbar />
        <div className="max-w-5xl mx-auto">
          <header className="text-center py-2 md:mb-4 mb-2">
            <h1 className="text-4xl font-bold font-next text-gray-800">
              Contact me
            </h1>
            <h2 className="mt-2 text-xl font-cab text-gray-700">
              I create modern, elegant, responsive websites. Check my{" "}
              <Link href="/work">
                <span className="cursor-pointer">
                  <span className="text-blue-700">work.</span>
                  <Image src="/icons/arrow.svg" width={15} height={15} />
                </span>
              </Link>
            </h2>
          </header>
          <main className="flex md:flex-row flex-col justify-between ">
            <ContactForm />
            <div className="md:w-1/2 mt-10 md:mt-0 rounded-lg flex md:flex-col flex-row gap-4 justify-center items-center relative pt-2">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="https://twitter.com/AStylidis">
                  <a target="_blank" rel="noreferrer">
                    <Image src="/icons/twitter.svg" width={50} height={50} />
                  </a>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link href="https://www.linkedin.com/in/astylidis/">
                  <a target="_blank" rel="noreferrer">
                    <Image src="/icons/linkedin.svg" width={50} height={50} />
                  </a>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <a href="mailto:anargiriss@hotmail.com">
                  <Image src="/icons/mail.svg" width={70} height={70} />
                </a>
              </motion.div>
            </div>
            <div className="md:absolute relative bottom-0 right-0 items-center justify-center flex mt-5 md:mt-0">
              <Image src="/01.png" width={200} height={200} />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
