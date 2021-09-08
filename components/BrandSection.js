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
      <Clouds />
    </section>
  );
};

export default BrandSection;
