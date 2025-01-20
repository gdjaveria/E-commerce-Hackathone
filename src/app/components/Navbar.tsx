
import Link from 'next/link';
import { FaRegUser } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { TfiMenuAlt } from "react-icons/tfi";
import ShoppingCart from './Card';


import {
  Sheet,
  SheetContent,
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

            <div className="flex gap-3 md:space-x-12 md:mr-32 items-center">
              <Link href='/myaccount'>
                <FaRegUser aria-label="User Profile"
                  size={20} />
              </Link>
              <FiSearch aria-label="Search"
                size={22} />
              <IoMdHeartEmpty aria-label="Favorites"
                size={25} />
              <div className="flex items-center z-10">
                <ShoppingCart />
              </div>
            </div>

          </li>
        </ul>

        <Sheet>
          <SheetTrigger className='md:hidden'>
            <TfiMenuAlt flex-col size={40} />
          </SheetTrigger>
          <SheetContent>
            <ul className=''>
              <li className='flex flex-col justify-between items-center gap-9 mt-16 px-8 text-md text-black font-bold'>
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