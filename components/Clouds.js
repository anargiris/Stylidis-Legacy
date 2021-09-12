import React, { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import Link from "next/link";
import * as THREE from "three";

const Clouds = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE: THREE,
          minHeight: 100,
          minWidth: 200.0,
          highlightColor: 0x1a1a1a,
          midtoneColor: 0x362020,
          lowlightColor: 0xf6f6f6,
          baseColor: 0xffffff,
          blurFactor: 0.19,
          speed: 0.8,
          zoom: 2.8,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <div className="min-h-screen w-full" ref={myRef}>
        <div className="font-cab px-1 text-center max-w-3xl mx-auto 2xl:px-4 py-4 text-gray-darkest">
          <h3 className="font-next text-3xl 2xl:text-5xl mb-4 text-blue-600">
            I create modern websites.
          </h3>
          <p className="mb-2 2xl:text-2xl">
            I want to help small businesses and individuals get their own
            websites. People trust websites more than, let's say, Instagram or
            Facebook profiles. It gives you more control over your image. Think
            of it as building your own tribe.
          </p>
          <p className="2xl:text-2xl">
            Showing your work, contact information, pricing and more helps users
            understand what your business is all about and connect with it.
          </p>
          <div className="py-5">
            <h4 className="font-next text-2xl 2xl:text-4xl mb-4 text-blue-800">
              Building a website NOW can help you LATER.
            </h4>
            <p className="mb-2 2xl:text-xl">
              It's a long-term investment. Growing your online traffic will help
              evolve your brand faster. Over time, you'll be getting a huge
              advantage and your future projects/products will reach a wider
              audience.
            </p>
            <p className="2xl:text-xl">
              Having the control over what information you would like to share
              is powerful.
            </p>
          </div>
          <div>
            <h5 className="font-next text-2xl 2xl:text-4xl mb-2 text-blue-800">
              Online visibility.
            </h5>
            <p className="mb-2 2xl:text-xl">
              People search online for things. Being searchable online is the
              leading factor in building strong brand credibility.
            </p>
            <p className="2xl:text-xl">
              Imagine two local coffee selling businesses but only one shows up
              on Google..
            </p>
          </div>
          <p className="mt-10 text-gray-darkest 2xl:text-2xl">
            <Link href="/work">
              <span className="cursor-pointer bg-white bg-opacity-70 font-next px-3 py-2 border border-gray-darkest rounded-md 2xl:text-2xl text-blue-900 text-lg hover:text-gray-100 hover:bg-gray-darkest transition duration-200">
                see my work
              </span>
            </Link>
            <br />
            <br />
            If you like what you see, I'd be happy to work with you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Clouds;
