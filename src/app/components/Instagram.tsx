import React from 'react'
import Image from 'next/image'

const Instagram = () => {
  return (
    <div>
<div className="relative md:w-[1600px] md:h-[450px] mb-12">
  
            
   <Image
      src="/Rectangle.png"
   height={450}
   width={1600}
   alt=''
   className="rounded-lg object-cover"
    />
           

  <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
   <h3 className="text-3xl md:text-5xl font-bold mb-4">Our Instagram</h3>
  <h4 className="md:text-xl mb-6">Follow our store on Instagram</h4>
  <button className="rounded-full bg-[#FFFFFF] text-black px-10 py-2 md:px-16 md:py-4 shadow-md hover:shadow-lg">
  Follow Us
  </button>
  </div>
  </div>


    </div>
  )
}

export default Instagram;