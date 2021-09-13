import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import Blog from "./services/Blog";
import Website from "./services/Website";
import DigitalMarketing from "./services/DigitalMarketing";
import Eshop from "./services/Eshop";

import { useInView } from "react-intersection-observer";

const EcommerceSection = () => {
  const [section, setSection] = useState("website");

  return (
    <section
      className="h-90 relative w-full overflow-hidden border-b-2 border-gray-darkest"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="h-1/4">
        <h4 className="font-next text-gray-800 text-center pt-2 2xl:text-6xl text-4xl font-bold">
          Services
        </h4>
        <div className="w-full font-next border-b border-gray-darkest mt-2">
          <ul className="w-full flex justify-around">
            <li className="w-full">
              <button
                className="text-lg w-full uppercase text-gray-darkest cursor-pointer focus:text-gray-100 focus:bg-gray-darkest transition duration-100"
                onClick={() => setSection("website")}
              >
                Website
              </button>
            </li>
            <li className="w-full">
              <button
                className="text-lg w-full uppercase text-gray-darkest cursor-pointer focus:text-gray-100 focus:bg-gray-darkest transition duration-100"
                onClick={() => setSection("blog")}
              >
                Blog
              </button>
            </li>
            <li className="w-full">
              <button
                className="text-lg w-full uppercase text-gray-darkest cursor-pointer focus:text-gray-100 focus:bg-gray-darkest transition duration-100"
                onClick={() => setSection("eshop")}
              >
                Online Store
              </button>
            </li>
            <li className="w-full">
              <button
                className="text-lg w-full uppercase text-gray-darkest cursor-pointer focus:text-gray-100 focus:bg-gray-darkest transition duration-100"
                onClick={() => setSection("marketing")}
              >
                Digital Marketing
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="h-3/4 font-cab">
        <AnimateSharedLayout>
          {section === "website" && <Website />}
          {section === "eshop" && <Eshop />}
          {section === "marketing" && <DigitalMarketing />}
          {section === "blog" && <Blog />}
        </AnimateSharedLayout>
      </div>
    </section>
  );
};

export default EcommerceSection;
