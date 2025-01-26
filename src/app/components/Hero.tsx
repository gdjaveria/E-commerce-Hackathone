import React from "react";

import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="bg-[#FBEBB5] flex items-center justify-between px-10">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold px-10 py-5 sm:text-sm md:text-6xl">
            Rocket Single
            <span className="text-3xl sm:text-4xl md:text-6xl font-semibold block mb-6">
              Seater
            </span>
          </h1>
          <h3
            className="text-black text-2xl font-medium cursor-pointer py-10 ml-20 hover:text-gray-800 
  underline"
          >
            Shop Now
          </h3>
        </div>

        <div className="mt-6 md:mt-0">
          <Image
            src="/Rocketseater.png"
            alt="heropic"
            width={700}
            height={700}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
