import React from 'react'
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

import { HiLocationMarker } from "react-icons/hi";
import { GoClockFill } from "react-icons/go";
import { MdPhoneInTalk } from "react-icons/md";
import Center from '../components/Center';
import Footer from '../components/Footer';


function Contact() {
    return (
   <div className="max-w-screen-xl container mx-auto pb-8 px-4">
 <div className='bg-[#faf4f4]'>
    <Navbar />
   </div>

 
 <div className="relative text-black">
  <Image  src="/shop1.jpeg" 
   alt="Shop Banner" height={400} width={1600}
   className="w-full h-[200px] md:h-auto object-cover"  />
   
     <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold ">
    Contact
 </h1>


 <div className="absolute top-28 left-1/2 transform -translate-x-1/3 -translate-y-1/3 mt-10">
      <p className="text-gray-700 text-xs md:text-xl flex items-center gap-2">
        <Link href="/" className="font-bold hover:underline">Home</Link>
   <Link href="/shop" className=" hover:underline">Contact</Link>
     </p>
  </div>
  </div>



<section className="mt-16 text-center px-4 md:px-32">
    <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
    <p className="mt-4 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora libero aut, reiciendis,voluptate rerum nemo non corporis esse aspernatur?</p>
</section>

<div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16">
  
    <div className="flex flex-col gap-8">
        <div className="flex items-center space-x-4 mx-7">
            <div>
  <span className='flex'>
      <HiLocationMarker size={25} className="text-4xl text-primary"/>
     <h3 className="font-semibold text-xl ml-4">Address</h3>
 </span>
  <p className='ml-10'>
   238 5<sup>th</sup> SE Avenue,
    <br /> New York NY10000,
   <br /> United States
  </p>
  </div>
  </div>
  <div className="flex items-center space-x-4 mx-7">
  <div>
  <span className='flex'>
   <MdPhoneInTalk size={25} className="text-4xl text-primary" />
   <h3 className="font-semibold ml-4 text-lg">Phone</h3>
     </span>
 <p className='ml-10'>Mobile : +(82)123-567-864-1</p>
  <p className='ml-10'>Hotline : +(84)979-823-654</p>
  </div>
 </div>
  <div className="flex items-center space-x-4 mx-7 ">
    <div>
      <span className='flex'>
    <GoClockFill size={25} className="text-4xl text-primary" />
       <h3 className="ml-4 font-semibold text-lg">Working Time</h3>
  </span>
    <p className='ml-10'>Monday-Friday: 9:00 - 
      <br/>22:00</p>
    <p className='ml-10'>Saturday-Sunday: 9:00 - 
     <br/>21:00</p>
            </div>
        </div>
    </div>

 
    <div className="mt-16 bg-white rounded-lg p-8 md:w-1/2">
        <form className="space-y-4">
     <div>
   <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
   <input type="text" id="name" placeholder="your name" className="w-full px-7 py-3  border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" />
   </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email Address</label>
      <input type="email" id="email" placeholder="xyz-@gamil.com" className="w-full px-7 py-4  border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
 <div>
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
  <input type="text" id="subject" placeholder=" optional" className="w-full px-7 py-4 border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" />
  </div>
   <div>
   <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
    <textarea id="message" placeholder="Hello, you would like say or ask something......." rows={3} className="w-full px-7 py-4  border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
  </div>
   </form>
  <button type="submit" className="py-4 px-10 border border-black text-2xl rounded-none mt-8 hover:shadow-slate-600">
    Submit</button>
    </div>
</div>
<Center/>
<Footer/>
 </div>
    )
}

export default Contact;