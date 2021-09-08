import React from "react";
import Image from "next/image";
import Link from "next/link";
import Clouds from "./Clouds";

const BrandSection = () => {
  return (
    <section
      className="min-h-screen flex lg:flex-row flex-col"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="flex-1">
        <Clouds />
        {/* <div className="lg:hidden h-96 relative">
          <Image
            src="/abstract.jpg"
            layout="fill"
            priority={true}
            alt="Image of Brand Section. Created by Mirella Bee."
          />
        </div> */}
      </div>
    </section>
  );
};

export default BrandSection;
