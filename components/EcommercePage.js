import Image from "next/image";
import React from "react";
import PageNavbar from "./PageNavbar";
import Footer from "./Footer";
import ShopifyModal from "./modals/ShopifyModal";
import CloudcartModal from "./modals/CloudcartModal";
import Link from "next/link";

const EcommercePage = () => {
  return (
    <>
      <div
        className="min-h-screen"
        style={{ backgroundImage: "url(/gradient.svg)" }}
      >
        <PageNavbar />
        <header className="max-w-5xl mx-auto text-center md:text-left">
          <div className="pt-6">
            <h1 className="text-4xl font-bold font-next">
              Start selling online!
            </h1>
            <p className="mt-4 text-xl md:w-2/3 font-cab text-gray-darkest">
              The pandemic had a serious impact on the rise of ecommerce,
              raising the needs of business owners to go online. A lot of
              businesses turn to ecommerce and for good reason, as they see
              their sales increase.
            </p>
            <p className="mt-4 text-lg md:w-2/3 font-cab text-gray-800">
              Choosing one of the following platforms I can help you start
              selling online!
            </p>
          </div>
          <div>
            <p className="mt-8 font-cab text-xl text-blue-500 font-bold">
              Click for info:
            </p>
          </div>
          <div className="absolute md:block hidden bottom-0 right-0 mr-20">
            <Image width={400} height={400} src="/eshops.svg" />
          </div>
        </header>
        <div className="flex max-w-5xl mx-auto pt-10 md:justify-start justify-center">
          <ShopifyModal />
          <CloudcartModal />
        </div>
        <div className="max-w-5xl mx-auto mb-10 md:mb-0 md:block flex justify-center">
          <Link href="/contact">
            <button className="bg-gray-900 text-lg mt-14 rounded-sm text-gray-100 p-3 hover:bg-gray-800 outline-none focus:outline-none hover:text-gray-200 transition duration-200 ease-linear shadow hover:shadow-lg">
              Contact me for an online store
            </button>
          </Link>
        </div>
        <div className=" md:hidden flex items-center justify-center mr-10">
          <Image
            width={250}
            height={250}
            src="/eshops.svg"
            alt="Anargyros Stylidis - Ecommerce Illustration"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EcommercePage;
