import React from "react";
import Offer from "./Offer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OfferSection = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="min-h-screen xl:min-h-full  bg-gray-darkest">
      <h3 className="text-5xl font-cab text-gray-200 text-center pt-4 mb-8 2xl:pt-10">
        My Offer:
      </h3>

      {inView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4, stiffness: 100 }}
          className="flex lg:flex-row flex-col flex-wrap max-w-6xl mx-auto 2xl:py-10"
        >
          <Offer
            title="Speed"
            img="/icons/lightning.svg"
            desc="Your website is going to be lightning fast, utilizing cutting edge web technologies."
          />
          <Offer
            title="Responsiveness"
            desc="No matter the device people use to reach your website, they'll have a clean and good looking result."
            img="/icons/responsive.svg"
          />
          <Offer
            title="SEO"
            img="/icons/search.svg"
            desc="Search engines are going to love indexing your website!"
          />
          <Offer
            title="Support"
            img="/icons/support.svg"
            desc="I'll help you decide what's the best approach based on your needs and answer all your questions."
          />
        </motion.div>
      )}
    </section>
  );
};

export default OfferSection;
