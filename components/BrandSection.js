import React from "react";
import Image from "next/image";
import Link from "next/link";

const BrandSection = () => {
  return (
    <section
      className="min-h-screen flex lg:flex-row flex-col"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="lg:w-1/2 lg:h-screen h-96 relative flex justify-center items-center">
        <Image
          src="/abstract.jpg"
          layout="fill"
          priority={true}
          alt="Image of Brand Section. Created by Mirella Bee."
        />
      </div>
      <div className="flex-1 font-cab px-1 py-4 md:py-0 text-gray-darkest">
        <h3 className="font-next text-3xl mb-4 text-blue-600">
          I create modern websites.
        </h3>
        <p className="mb-2">
          I want to help small businesses and individuals get their own website.
          People trust websites more than, let's say, Instagram or Facebook
          profiles. It gives you more control over your image. Think of it as
          building your own tribe.
        </p>
        <p>
          Showing your work, contact information, pricing and more helps users
          understand what your business is all about and connect with it.
        </p>
        <div className="py-5">
          <h4 className="font-next text-2xl mb-4 text-blue-800">
            Building a website NOW can help you LATER.
          </h4>
          <p className="mb-2">
            It's a long term investment. Growing your online traffic will help
            evolve your brand faster. Over time, you'll be getting a huge
            advantage and your future projects/products will reach a wider
            audience.
          </p>
          <p>
            Having the control over what information you would like to share is
            powerful.
          </p>
        </div>
        <div>
          <h5 className="font-next text-2xl mb-2 text-blue-800">
            Online visibility.
          </h5>
          <p className="mb-2">
            People search online for things. Being searchable online is the
            leading factor of building strong brand credibility.
          </p>
          <p>
            Imagine two local coffee selling businesses but only one shows up on
            Google..
          </p>
        </div>
        <p className="mt-10 text-gray-darkest">
          <Link href="/work">
            <span className="cursor-pointer text-yellow-500 text-lg hover:text-yellow-700 transitoin duration-200">
              See my work
            </span>
          </Link>
          . If you like what you see, I'd be happy to work with you.
        </p>
      </div>
    </section>
  );
};

export default BrandSection;
