import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import ShopLine from '@/app/components/Shop'
import Center from '../components/Center'
import Footer from '../components/Footer'




const item =
    [
        { id: 1, src: '/Mask4.png',
           name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/hero/3' },
        { id: 2, src: '/Mask2.png',
           name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/hero/4' },
        { id: 3, src: '/Mask3.png', 
          name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/hero/5' },
        { id: 4, src: '/Mask5.png',
           name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/hero/6' },
        { id: 5, src: '/Graintable.png',
           name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/5' },
        { id: 6, src: '/Kenttable.png', 
          name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/6' },
        { id: 7, src: '/Roundtabel.png',
           name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/7' },
        { id: 8, src: '/Reclaimed.png', 
          name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/8' },
        { id: 9, src: '/Plaintabel.png',
           name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/9' },
        { id: 10, src: '/Reclaimedslide.png', 
          name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/10' },
        { id: 11, src: '/SJP.png', 
          name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/11' },
        { id: 12, src: '/Bella.png',
           name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/12' },
        { id: 13, src: '/table1.jpeg',
           name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/13' },
        { id: 14, src: '/Asgaardsofa.png', 
          name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/14' },
        { id: 15, src: '/Sofaseater.png', 
          name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/15' },
        { id: 16, src: '/Outdoorsofa.png',
           name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/16' },
    ]



function Shop() {
    return (

 <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
  <div className='bg-[#faf4f4]'>
  <Navbar />
  </div>

  <div className="relative text-black">
  <Image src="/shop1.jpeg" 
     alt="Banner shop"
    height={400}
   width={1600}
   className="w-full h-40 md:h-auto object-cover"/>
    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    text-xl md:text-5xl font-semibold ">
   Shop
  </h1>

  <div className="absolute top-28 left-1/2 mt-10 transform -translate-x-1/3 -translate-y-1/3">
  <p className="text-gray-700 text-xs md:text-xl flex items-center">
    <Link href="/" className="font-bold hover:underline">Home</Link>
     <span className="font-bold mx-2"></span>
     <Link href="/shop" className=" hover:underline">Shop</Link></p>
  </div>
 </div>

 <div className='my-6'><ShopLine />
  </div>
<div>
 
 <div className="flex flex-wrap justify-center md:justify-start  gap-6 ">
    {item.map((item) => (
       <div key={item.id} className="flex flex-col text-left mx-auto h-[300px] w-[350px]">
        <Image  src={item.src}  alt={item.name}
 height={300}
 width={350}
    className="rounded-lg h-[300px] w-[300px] object-cover" />
<p className="text-sm font-medium">{item.name}</p>
 <h3 className="text-xl font-semibold">{item.price}</h3>
</div>

 ))}

<div className='justify-center text-center mx-auto'>

<div className="flex gap-4 mx-auto my-12">

  
   <div className="bg-[#c9ba8b] px-4 py-2 font-semibold rounded-none">1</div>
   
     <div className="bg-[#c9ba8b] px-4 py-2 font-semibold rounded-none">2</div>

         
  <div className="bg-[#c9ba8b] px-4 py-2 font-semibold rounded-none">3</div>


  <div className="bg-[#c9ba8b] px-4 py-2  font-semibold text-center rounded-lg cursor-pointer hover:bg-[#c4bca3]">
     Next
   </div>
   </div>
</div>

 </div>
 <Center/>
 <Footer/>

  </div>

  </div>
)
}

export default Shop