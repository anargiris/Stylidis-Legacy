import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShopifyModal() {
  const [showModal, setShowModal] = useState(false);

  if (showModal) {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setShowModal(false);
      }
    });
  }

  return (
    <>
      <button
        className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Shopify
      </button>
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              key="modal"
              initial={{ scale: 0.75 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none font-cab"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex bg-indigo-100 items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                    <h3 className="text-3xl text-green-500 font-semibold">
                      Shopify
                      <span className="mt-2">
                        <Link href="https://shopify.com">
                          <a rel="noreferrer" target="_blank">
                            <Image
                              src="/icons/goto.svg"
                              width={50}
                              height={50}
                              alt="link to Shopify"
                            />
                          </a>
                        </Link>
                      </span>
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-50   float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-gray-darkest opacity-70 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-2 text-gray-900 text-lg leading-relaxed">
                      Powerful ecommerce platform with a lot of features. One of
                      the leading online store builders that currently empowers
                      more than 1 million stores.
                    </p>
                    <ul className="mt-5 p-4 border border-gray-300 space-y-1 text-gray-800 shadow-md bg-gray-50 rounded-md">
                      <li>
                        <Image
                          src="/icons/check.svg"
                          width={20}
                          height={15}
                          alt="Check icon"
                        />
                        $29/Month at Basic plan.
                      </li>
                      <li>
                        <Image
                          src="/icons/check.svg"
                          width={20}
                          height={15}
                          alt="Check icon"
                        />
                        Easy to use and customize.
                      </li>
                      <li>
                        <Image
                          src="/icons/check.svg"
                          width={20}
                          height={15}
                          alt="Check icon"
                        />
                        Huge ecosystem.
                      </li>
                      <li>
                        <Image
                          src="/icons/check.svg"
                          width={20}
                          height={15}
                          alt="Check icon"
                        />
                        24/7 Customer support.
                      </li>
                      <li>
                        <Image
                          src="/icons/check.svg"
                          width={20}
                          height={15}
                          alt="Check icon"
                        />
                        14 days free trial.
                      </li>
                      <li>
                        <Image
                          src="/icons/check.svg"
                          width={20}
                          height={15}
                          alt="Check icon"
                        />
                        Free hosting.
                      </li>
                    </ul>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <Link href="/contact">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Contact
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
