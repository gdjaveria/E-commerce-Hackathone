import React from "react";
import Image from "next/image";

const TopPicks = () => {
  return (
    <div className=" md:flex-row bg-[#FFFFFF] justify-around mx-auto py-10 px-4">
      <div className="my-10 text-center mx-auto ">
        <h2 className="text-4xl font-semibold text-center">
          Top Picks For You
        </h2>
        <p className="text-gray-500 my-9">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor, and table lights.
        </p>
      </div>

      <div className="flex flex-wrap justify-center md:justify-start gap-6 ">
        {[
          {
            src: "/Mask4.png",
            name: "Trenton modular sofa_3",
            price: "Rs. 25,000.00",
          },
          {
            src: "/Mask2.png",
            name: "Granite dining table with dining chair",
            price: "Rs. 25,000.00",
          },
          {
            src: "/Mask3.png",
            name: "Outdoor bar table and stool",
            price: "Rs. 25,000.00",
          },
          {
            src: "/Mask5.png",
            name: "Plain console with teak",
            price: "Rs. 25,000.00",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-left mx-auto h-[300px] w-[350px] "
          >
            <Image
              src={item.src}
              alt={item.name}
              height={400}
              width={400}
              className="rounded-lg h-[300px] w-[300px] object-cover"
            />
            <p className="text-sm font-medium ">{item.name}</p>
            <h3 className="text-xl font-semibold py-2">{item.price}</h3>
          </div>
        ))}
      </div>

      <div className="items-center flex justify-center mt-10">
        <button className="text-black text-2xl font-medium underline">
          View More
        </button>
      </div>
    </div>
  );
};

export default TopPicks;
