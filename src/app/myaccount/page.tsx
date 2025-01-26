import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Center from "../components/Center";
import Footer from "../components/Footer";

function Account() {
  return (
    <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
      <div className="bg-[#faf4f4]">
        <Navbar />
      </div>
      <div className="relative text-black">
        <Image
          src="/shop1.jpeg"
          alt="Shop Banner"
          height={400}
          width={600}
          className="w-full h-[200px] md:h-auto object-cover"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-xl md:text-5xl font-semibold mt-8">My Account</h1>
          <p className="text-gray-700 text-xs md:text-xl flex items-center gap-2">
            <Link href="/" className="font-bold hover:underline">
              Home
            </Link>
            <Link href="/myaccount" className="hover:underline">
              My Account
            </Link>
          </p>
        </div>
      </div>

      <div className="grid gap-9 mx-10 mt-9 lg:mx-30 lg:grid-cols-2">
        <div className="p-4 rounded">
          <h2 className="font-bold text-4xl my-7">Log In</h2>

          <div className="flex flex-col">
            <label
              className="text-gray-900 mt-5 font-semibold"
              htmlFor="username"
            >
              username or email address
            </label>
            <input
              type="text"
              id="username"
              className="w-full my-3 border sm:w-[350px] border-gray-400 rounded p-2 mb-5"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="text-gray-900 mt-5 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="w-full my-3 border sm:w-[350px] border-gray-400 rounded p-2 mb-5"
            />
          </div>

          <div className="flex items-center mb-5">
            <input type="checkbox" id="remember" className="mr-3" />
            <label className="text-gray-900 my-5" htmlFor="remember me">
              Remember me
            </label>
          </div>

          <div className="flex items-center">
            <button className="font-medium text-gray-900 border border-black px-14 py-4 text-xl rounded-xl">
              Log In
            </button>
            <p className="text-gray-600 ml-8 hover:underline cursor-pointer">
              Lost your password?
            </p>
          </div>
        </div>

        <div className="p-4 rounded">
          <h2 className="font-bold text-4xl my-7">Register</h2>
          <div className="flex flex-col">
            <label className="text-gray-900 mt-5 font-semibold" htmlFor="email">
              Email address
            </label>
            <input
              type="text"
              id="address"
              className="w-full my-3 border sm:w-[350px] border-gray-400 rounded p-2 mb-5"
            />

            <p className="text-gray-700 my-7">
              A link to set a new password will be sent to your email address.
            </p>
            <p className="text-gray-700 mb-6">
              Your Personal data will be used to suppport your
              <br />
              experience throughout this website,to manage access
              <br />
              to your account,and for other purpose describe in our
              <br />
              <span className="font-semibold text-black">Privacy policy.</span>
            </p>

            <div className="flex items-center">
              <button className="font-medium text-gray-900 border border-black px-14 py-4 text-xl rounded-xl">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      <Center />
      <Footer />
    </div>
  );
}

export default Account;
