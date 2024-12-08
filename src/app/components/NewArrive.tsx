import React from 'react'
import Image from 'next/image'

const NewArrive = () => {
  return (
    <section className='bg-white py-12'>
        <div className='container mx-auto px-4 md:px-16 grid grid-cols md:grid-cols-2 items-center gap-8'>

<div className='flex justify-center'>
    <Image src="/Asgaardsofa.png" alt='Asgaardsofa' 
    width={1600} height={1600}
    className='w-full object-contain'
    />
</div>

<div className='text-center md:text-left space-y-4'>
    <p className='text-lg font-medium text-gray-600'>New Arrivals</p>
    <h2 className='text-4xl font-bold text-gray-800'>Asgaard sofa</h2>
    <a href='#' 
    className='inline-block bg-white border  border-black text-black font-medium 
    px-6 py-3 mt-4 hover:bg-black hover:text-white transition'>
        Order Now</a>
</div>
 </div>
    </section>
  )
}

export default NewArrive