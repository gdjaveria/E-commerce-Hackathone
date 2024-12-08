import React from 'react'

import Image from 'next/image'


const Hero = () => {
  return (
    
<>
<section className='bg-[#FBEBB5] flex items-center justify-between px-10'>
    <div className='space-y-6'>
   <h1 className='text-7xl font-bold px-10'>Rocket Single <span>Seater</span>
   </h1>
  <h3 className='text-black text-2xl font-medium cursor-pointer py-10 ml-20 hover:text-gray-700 
  underline'>
Shop Now</h3>
    </div>

<div>
    <Image src="/Rocketseater.png" alt='heropic'
    width={700} height={700}/>
</div>



</section>




















</>
  


  )
}

export default Hero