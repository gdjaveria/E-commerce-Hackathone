import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">

        {/* Footer Top Section */}
        <div className="flex flex-col justify-between">
          
 <div className="flex flex-col text-gray-600">
  <p className="text-lg font-semibold">400 University Drive Suite 200</p>
   <p className="text-lg font-semibold">Coral Gables FL 33134 USA</p>
   </div>

<div className="flex space-x-16">
   <div className="flex flex-col space-y-4 text-gray-600">
  <h4 className="text-xl font-semibold text-gray-700">Links</h4>

  <Link href="/" className="hover:text-black">Home</Link>
 <Link href="/shop" className="hover:text-black">Shop</Link>
  < Link href="/about" className="hover:text-black">About</Link>
 <Link href="/contact" className="hover:text-black">Contact</Link>
  </div>

 <div className="flex flex-col space-y-4 text-gray-600">
     <h4 className="text-xl font-semibold text-gray-700">Help</h4>
     <Link href="/payment-options" className="hover:text-black">Payment Options</Link>
     <Link href="/returns" className="hover:text-black">Returns</Link>
    
     <Link href="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
 </div>

   
    
   <div className="flex flex-col space-y-4 text-gray-600">
   <h4 className="text-xl font-semibold text-gray-700">Newsletter</h4>
  <p className="text-gray-600">Enter your email</p>
  <div className="flex space-x-4">
  <input
   type="email"
       placeholder="Email"
  className="px-4 py-2 border border-gray-300 rounded"
     />
   <button className="bg-black text-white px-6 py-2 rounded-full">
   Subscribe
  </button>
    </div>
  </div>
  </div>
 </div>


  <div className="border-t border-gray-300 mt-10 pt-4 text-gray-600">
  <p className="text-sm">2022 Meubel House. All rights reserved</p>
  </div>
  </div>
  </footer>

  )
}

export default Footer;