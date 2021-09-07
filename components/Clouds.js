import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";

const Clouds = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.skypack.dev/three";
    script.async = true;

    document.body.appendChild(script);
    console.log(window.THREE);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //   useEffect(() => {
  //     if (!vantaEffect) {
  //       setVantaEffect(
  //         BIRDS({
  //           el: myRef.current,
  //         })
  //       );
  //     }

  //     return () => {
  //       if (vantaEffect) vantaEffect.destroy();
  //     };
  //   }, [vantaEffect]);

  return (
    <>
      <div ref={myRef}>Foreground content goes here</div>
    </>
  );
};

export default Clouds;
