import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import ShopLine from '@/app/components/Shop'
import Field from '@/app/components/Feildtype'
import Page from '@/app/components/Pages'



const item =
    [
        { id: 1, src: '/Mask4.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/hero/3' },
        { id: 1, src: '/Mask2.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/hero/4' },
        { id: 1, src: '/Mask3.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/hero/5' },
        { id: 1, src: '/Mask5.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/hero/6' },
        { id: 1, src: '/Graintable.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/5' },
        { id: 1, src: '/Kenttable.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/6' },
        { id: 1, src: '/Roundtabel.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/7' },
        { id: 1, src: '/Reclaimed.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/8' },
        { id: 1, src: '/Plaintabel.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/9' },
        { id: 1, src: '/Reclaimedslide.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/10' },
        { id: 1, src: '/SJP.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/11' },
        { id: 1, src: '/Bella.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/12' },
        { id: 1, src: '/table1.jpeg', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00', href: '/shop/13' },
        { id: 1, src: '/Asgaardsofa.png', name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', href: '/shop/14' },
        { id: 1, src: '/Sofaseater.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', href: '/shop/15' },
        { id: 1, src: '/Outdoorsofa.png', name: 'Plain console with teak', price: 'Rs. 25,000.00', href: '/shop/16' },
    ]



function Shop() {
    return (

 <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
  <div className='bg-[#faf4f4]'>
  <Navbar />
  </div>

            
 {/* Banner Section */}
  <div className="relative text-black">
  <Image src="/shop1.jpeg" 
     alt="Shop Banner"
    height={400}
   width={1600}
   className="w-full h-40 md:h-auto object-cover"/>
    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    text-xl md:text-5xl font-semibold ">
   Shop
  </h1>

            
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
  <p className="text-gray-700 text-xs md:text-xl flex items-center">
    <Link href="/" className="font-bold hover:underline">Home</Link>
     <span className="font-bold mx-2">{'>'}</span>
     <Link href="/shop" className=" hover:underline">Shop</Link></p>
  </div>
 </div>

 <div className='my-6'>
   <ShopLine />
  </div>

   <div>
       {/* Product List */}
                
   <div className="flex flex-wrap justify-center md:justify-start  gap-6 ">
    {item.map((item) => (
       <div key={item.id} className="flex flex-col text-left mx-auto h-[300px] w-[350px]">

      {/* <Link href={item.href} passHref> */}
      
  <Image  src={item.src}  alt={item.name}
 height={300}
 width={350}
    className="rounded-lg h-[300px] w-[300px] object-cover" />

    {/* </Link> */}
    <p className="text-sm font-medium">{item.name}</p>
 <h3 className="text-xl font-semibold">{item.price}</h3>
</div>

 ))}










<div className='justify-center mx-auto'>

<Page/>
</div>

                </div>
            </div>

            <Field/>

        </div>
    )
}

export default Shop