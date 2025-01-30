import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import Footer from "../components/Footer";
import Center from "../components/Center";

const Asgaardsofa = () => {
  const images = [
    "/Group94.png",
    "/Group98.png",
    "/Group97.png",
    "/Group96.png",
  ];

  return (
    <>
      <div className="max-w-screen-xl container mx-auto pb-8 px-4">
        <div className="bg-[#faf4f4]">
          <Navbar />
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-10 pb-10">
        <div className="text-gray-400 text-md flex items-center space-x-3 mt-5">
          <Link href="/" className="font-semibold hover:underline px-2">
            Home
          </Link>
          <IoIosArrowForward size={18} className="text-gray-800" />
          <Link href="/shop" className="font-semibold hover:underline px-2">
            Shop
          </Link>
          <IoIosArrowForward size={18} className="text-gray-800" />
          <span className="text-gray-800 text-md px-6">Asgaard Sofa</span>
        </div>

        <div className="flex flex-col gap-10 mt-10 lg:flex-row">
          <div className="flex flex-row gap-6 w-full md:w-[250px] lg:w-[250px]">
            <div className="flex flex-row lg:flex-col gap-4 w-full lg:w-[200px] md:w-[200px]">
              {images.map((img, idx) => (
                <Image
                  key={idx}
                  src={img}
                  alt={`Sofa Image ${idx + 1}`}
                  height={120}
                  width={120}
                  className="rounded-lg object-cover cursor-pointer hover:scale-105 transition-transform bg-yellow-100 lg:w-[200px] lg:h-[180px]"
                />
              ))}
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/Asgaardsofa.png"
              alt="sofa pic"
              height={500}
              width={500}
              className="w-full h-[300px] sm:h-[350px] bg-[#FBEBB5] rounded-lg objective-cover"
            />
          </div>

          <div className="flex-1 space-y-5">
            <h3 className="text-5xl font-semibold text-black sm:text-2xl md:text-4xl">
              Asgaard Sofa
            </h3>
            <p className="text-gray-500 text-2xl">Rs. 250,000.00</p>
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-700 text-sm sm:text-base ">
                5 Customer Reviews
              </span>
            </div>

            <p className="text-gray-600 mb-6 mt-6 sm:text-base">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            <div className="mb-4">
              <h3 className="text-gray-600 font-semibold mb-2">Size</h3>
              <div className="flex space-x-2 mt-5">
                <button className="px-4 py-2 border rounded-lg bg-yellow-200">
                  L
                </button>
                <button className="px-4 py-2 border rounded-lg bg-gray-100">
                  XL
                </button>
                <button className="px-4 py-2 border rounded-lg bg-gray-100">
                  XS
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-gray-400 font-semibold mb-2">Color</h3>
              <div className="flex space-x-4">
                <button className="w-8 h-8 rounded-full bg-purple-500 border"></button>
                <button className="w-8 h-8 rounded-full bg-black border"></button>
                <button className="w-8 h-8 rounded-full bg-yellow-600 border"></button>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-5">
              <button className="px-4 py-2 border rounded-lg">-</button>
              <span className="text-lg font-semibold">1</span>
              <button className="px-4 py-2 border rounded-lg">+</button>
              <button
                className="font-medium text-gray-900 border border-black px-14
       py-4 text-xl rounded-xl"
              >
                Add To Cart
              </button>
            </div>

            <hr className="scroll-my-6" />
            <div className="space-y-4">
              <div className="flex justify-between">
                <h3 className="text-gray-500 ">SKU</h3>
                <span className="pl-4 text-gray-500">: SS001</span>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-500 ">Category</h3>
                <span className="pl-4 text-gray-500">: Sofas</span>
              </div>
              <div className="flex justify-between">
                <h3 className="text-gray-500 ">Tags</h3>
                <span className="pl-4 text-gray-500">
                  : Sofa,Chair,Home,Shop
                </span>
              </div>

              <div className="flex justify-between items-center mt-5 ">
                <h3 className="text-gray-500 ">Share</h3>
                <span className="pl-8 text-gray-500">:</span>
                <div className="flex space-x-4">
                  <FaFacebook
                    size={28}
                    className="cursor:pointer hover:text-gray-400"
                  />
                  <FaLinkedin
                    size={28}
                    className="cursor:pointer hover:text-gray-400"
                  />
                  <FaTwitterSquare
                    size={28}
                    className="cursor:pointer hover:text-gray-400"
                  />
                  <IoIosHeartEmpty
                    size={32}
                    className="cursor:pointer text-red-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <hr className="mt-10" />
      <>
        <h2 className="font-medium flex justify-center space-x-8 mt-9 sm:text-sm">
          <h3 className="text-black text-2xl">Description</h3>
          <h3 className="text-gray-600 text-2xl">Additional Information</h3>
          <h3 className="text-gray-600 text-2xl">Reviews [5]</h3>
        </h2>
        <p className="text-sm leading-7 text-gray-400 text-center mt-5">
          Embodying the raw, wayward spirit of rock n roll, the Kilburn portable
          active stereo speaker takes the unmistakable look and
          <br /> sound of Marshall,unplugs the chords, and takes the show on the
          road.
        </p>
        <p className="text-sm leading-7 text-gray-400 text-center mt-8">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          <br /> speakers in its class, the Kilburn is a compact, stout-hearted
          hero with a well-balanced audio which boasts a clear midrange
          <br /> and extended highs for a sound that is both articulate and
          pronounced. The analogue knobs allow you to fine tune the controls
          <br /> to your personal preferences while the guitar-influenced
          leather strap enables easy and stylish travel.
        </p>

        {/* Product Images */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Image
            src="/Group106.png"
            alt="Product Image 1"
            width={300}
            height={300}
            className="rounded-md shadow-md"
          />
          <Image
            src="/Group106.png"
            alt="Product Image 2"
            width={300}
            height={300}
            className="rounded-md shadow-md"
          />
        </div>
      </>

      {/*RELATED PRODUCT*/}
      <hr className="mt-10" />
      <div className="flex justify-center space-x-8 mt-9 sm:text-sm">
        <h2 className="text-black text-3xl font-semibold sm:text-sm lg:text-4xl ">
          Related Products
        </h2>
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

      <div className="items-center flex justify-center mt-10 ">
        <button className="text-black text-2xl font-medium underline">
          View More
        </button>
      </div>

      <Center />
      <Footer />
    </>
  );
};

export default Asgaardsofa;
