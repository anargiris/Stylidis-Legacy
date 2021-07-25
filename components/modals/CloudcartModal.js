import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
        className="bg-pink-400 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Cloudcart
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
                    <h3 className="text-3xl text-pink-400 font-semibold">
                      CloudCart
                      <span className="mt-2">
                        <Link href="https://cloudcart.com">
                          <a rel="noreferrer" target="_blank">
                            <Image
                              src="/icons/goto.svg"
                              width={50}
                              height={50}
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
                      Up and coming ecommerce platform based in Bulgaria
                      offering a generous free tier and providing lots of
                      solutions out of the box.
                    </p>
                    <ul className="mt-5 p-4 border border-gray-300 space-y-1 text-gray-800 shadow-md bg-gray-50 rounded-md">
                      <li>
                        <Image src="/icons/check.svg" width={20} height={15} />
                        Free until you make 1000$ from sales. 30$/month after.
                      </li>
                      <li>
                        <Image src="/icons/check.svg" width={20} height={15} />
                        Easy to use.
                      </li>
                      <li>
                        <Image src="/icons/check.svg" width={20} height={15} />
                        Lots of app integrations helping find more solutions.
                      </li>
                      <li>
                        <Image src="/icons/check.svg" width={20} height={15} />
                        24/7 Customer support.
                      </li>
                      <li>
                        <Image src="/icons/check.svg" width={20} height={15} />
                        Free until you launch your store.
                      </li>
                      <li>
                        <Image src="/icons/check.svg" width={20} height={15} />
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
