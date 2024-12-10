
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoCartOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


import React from 'react'

const Navbar = () => {
  return (
  <nav>
    <div className='flex justify-center max-w-full bg-[#FBEBB5] mx-auto'>

      <ul className='hidden md:block'>
        <li className='flex justify-between items-center gap-9 mt-16 px-10 pl-7 text-md text-black font-bold '>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>


          <FaRegUser size={20}/>
<FiSearch size={22}/>
<IoMdHeartEmpty size={25}/>
<IoCartOutline size={25} />

        </li>
         </ul>

      <Sheet>
  <SheetTrigger className='md:hidden'>
  <TfiMenuAlt  flex-col size={40}/>
</SheetTrigger>
  <SheetContent>
  <ul className=''>
        <li className='flex flex-col justify-between items-center gap-9 mt-16 px-8 text-md text-black font-bold '>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          </li>
          </ul>

  </SheetContent>
</Sheet>


      
    </div>
    </nav>
  )
}

export default Navbar;