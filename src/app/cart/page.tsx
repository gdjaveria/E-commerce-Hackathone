import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { RiDeleteBin7Fill } from "react-icons/ri";
import Center from '../components/Center';
import Footer from '../components/Footer';

const Cart = () => {
  return (
    <>
    <div className="max-w-screen-xl container mx-auto pb-8 px-4">
 <div className='bg-[#faf4f4]'>
    <Navbar />
   </div>

    
    <div className="relative text-black">
      <Image  src="/shop1.jpeg" 
       alt="Shop Banner" height={400} width={1600}
       className="w-full h-[200px] md:h-auto object-cover"/>
       
         <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold ">
        Cart
     </h1>
     <div className="absolute top-28 left-1/2 transform -translate-x-1/3 -translate-y-1/3 mt-10">
      <p className="text-gray-700 text-xs md:text-xl flex items-center gap-2 mt-5">
        <Link href="/" className="font-bold hover:underline text-black">Home</Link>
   <Link href="/cart" className=" hover:underline">Cart</Link>
     </p>
  </div>
  </div>

<div className='flex flex-col justify-between mt-10 lg:flex-row md:gap-6'>
    <div className='w-full bg-white rounded-lg p-5 lg:w-3/4 sm:p-7'>
        <table className='w-full text-sm md:text-lg border-collapse'>
            <thead className='bg-[#FFF9E5] text-gray-900 font-semibold'>
                <tr>
                <th className='py-4 text-left'>Product</th>
                <th  className='py-4 text-left'>Price</th>
                <th  className='py-4 text-left'>Quantity</th>
                <th  className='py-4 text-left'>Subtotal</th>
                </tr>
            </thead>
       
         <tbody>
            <tr className='border-t'>
               <td className='flex flex-col items-center pt-8 md:flex-row rounded-lg'>
                <Image src="/Asgaard sofa 2.png" alt='asgaard sofa'
                width={108} height={108}/>

            <h2 className='text-gray-400 ml-6 text-md md:text-md'>Asgaard sofa</h2>
        </td> 

             <td className='text-gray-400 py-5 text-md md:text-lg lg:table-cell sm:text-base'>250,000.00</td>
             <td className='text-gray-400 text-md md:text-lg'>
             <input type='number' value="1" className='w-8 text-xs md:text-lg border border-gray-400 rounded-sm
              text-gray-600 text-center py-1 lg:text-lg'/>
             </td>
            
            <td className='py-5 text-right text-gray-600 md:text-lg sm:text-base'>250,000.00</td>
            <td className='py-5 text-center'>
            <RiDeleteBin7Fill className='hidden lg:table-cell text-yellow-400 ml-5
             cursor-pointer hover:text-red-600' size={22}/>
            </td>
            </tr>
   </tbody>
   </table>
</div>



<div className='w-full bg-[#FFF9E5] lg:w-2/5 rounded-md p-12 mt-10 lg:mt-2'>
    <h2 className='text-black font-semibold text-4xl text-center py-8 mb-5'>Cart Totals</h2>
    <table className='w-full table-auto border-collapse'>
        <thead>
            <tr>
            <th className='text-xl text-gray-800 py-5 text-left'>Subtotal</th>
            <th className='font-medium text-xl text-gray-400 text-right'>Rs.250,000.00</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className='text-left py-5 font-semibold text-xl'>Total</td>
                <td className='font-semibold text-2xl text-yellow-600 text-right'>Rs.250,000.00</td>
            </tr>
        </tbody>
    </table>


    <div className='flex items-center mt-10'>
    <button className='font-medium text-gray-900 border border-black px-16 py-4 mx-12 text-xl rounded-xl'>
        Check Out</button>
</div>
</div>


</div>

<Center/>
<Footer/>
</div>
    
    
    
    
    </>
  )
}

export default Cart;