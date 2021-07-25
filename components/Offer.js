import React from "react";
import Image from "next/image";

const Offer = ({ img, title, desc }) => {
  return (
    <div className="lg:w-1/2 text-gray-300 px-20 md:py-10 py-4 font-cab lg:block flex flex-col">
      <span className="md:float-left  flex justify-center items-center">
        <Image src={img} width={150} height={150} />
      </span>
      <h6 className="text-2xl xl:text-3xl font-bold lg:text-left text-center">
        {title}
      </h6>
      <p className="mt-4 text-lg xl:text-xl text-gray-300 lg:text-left text-center">
        {desc}
      </p>
    </div>
  );
};

export default Offer;
