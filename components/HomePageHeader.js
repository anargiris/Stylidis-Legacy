import React from "react";
import styles from "../styles/Home.module.scss";
import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const HomePageHeader = () => {
  return (
    <div className="md:h-screen main-header relative pb-10 md:pb-0">
      <Navbar />
      <header>
        <div className={`bg-gray-darkest md:p-6 p-4 z-40 relative`}>
          <div className="flex justify-between">
            <h1 className="text-4xl md:text-5xl 2xl:text-7xl lg:px-20 md:px-10 text-gray-200 font-bold py-2 font-next">
              Anargyros Stylidis
            </h1>
          </div>
        </div>
      </header>
      <main>
        <div className="md:px-40 px-4 py-10 w-full">
          <span className="text-3xl text-gray-darkest font-semibold font-cab 2xl:text-4xl mt-2">
            I'll build your{" "}
            <span className={styles.highlighted}>online presence.</span>
          </span>
          <div className={`pb-1`}>
            <h2 className="md:w-1/2 md:mt-16 mt-8 font-cab leading-relaxed text-lg 2xl:text-2xl text-gray-700">
              I am a web developer from Greece.
              <br /> I help small businesses and individuals by building fast
              and modern websites.
            </h2>
          </div>

          <div className="mt-10 2xl:mt-20">
            <div>
              <span
                className={`${styles.wordCarousel} font-next md:flex hidden text-gray-darkest`}
              >
                <span>Are you </span>
                <div className="italic z-10">
                  <ul className={styles.flip4}>
                    <li>a Lawyer?</li>
                    <li>a Doctor?</li>
                    <li>an Influencer?</li>
                    <li>an Artist?</li>
                  </ul>
                </div>
              </span>
              <p className="text-lg 2xl:text-3xl font-cab md:mb-0 mb-2 text-gray-800">
                Stay ahead with your very own website!
              </p>
              <Link href="/contact">
                <button className="bg-gray-200 border border-gray-600 hover:border-gray-300 font-cab 2xl:py-4 py-2 focus:outline-none mr-2 px-4 shadow-md hover:bg-gray-800 2xl:text-2xl 2xl:px-6 hover:text-gray-200 mt-4 2xl:mt-10 transition duration-200 rounded-sm relative z-10">
                  Get a website.
                </button>
              </Link>
              <Link href="/devs">
                <button className="bg-gray-200 border border-gray-400 font-cab 2xl:py-2 py-1 focus:outline-none px-4 shadow-sm hover:bg-gray-600 2xl:text-2xl 2xl:px-6 hover:text-gray-200 mt-4 2xl:mt-10 transition duration-200 rounded-sm relative z-10">
                  About me
                </button>
              </Link>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>

      {/*
      Header Image responsive
    */}
      <div className="absolute bottom-0 right-0 md:right-48 md:hidden inline-block">
        <Image
          src="/07.png"
          width={150}
          height={150}
          alt="tree of ideas header background photo"
        />
      </div>
      <div className="absolute bottom-0 md:right-48 2xl:hidden md:block hidden ">
        <Image
          src="/07.png"
          width={400}
          height={400}
          alt="tree of ideas header background photo"
        />
      </div>
      <div className="absolute bottom-0 right-48 2xl:block hidden">
        <Image
          src="/07.png"
          width={500}
          height={500}
          alt="tree of ideas header background photo"
        />
      </div>
    </div>
  );
};

export default HomePageHeader;
