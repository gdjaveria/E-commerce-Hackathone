import React from 'react'
import Image from 'next/image'
import { FiCalendar } from "react-icons/fi";
import { IoTimeOutline } from 'react-icons/io5';



const OurBlog = () => {
  return (
   <>
   
   <div className='flex gap-0 mx-10 flex-wrap justify-center'>
    <div className='mx-auto text-center mb-10 sm:mb-5'>
     <Image
     src="/Rectangle1.png"
       height={450}
        width={450}
    alt="A stylish rocket single seater"
      className="rounded-lg" />

 <p className='text-xl font-normal my-3'>Going all-in with millennial design</p>
      <p className="text-xl text-center mx-auto my-3 underline underline-offset-8 text-black-600 font-medium">
        Read More</p>
     <span className='text-center mx-28 flex font-light'>
    <span className='flex mx-auto text-center'>
      <IoTimeOutline size={20} />
     <p className='ml-3'>5 min</p>
 </span>
  <span className='flex  mx-auto text-center'>
     < FiCalendar size={20} />
  <p className='ml-3'>12<sup>th</sup> Oct 2022</p>
  </span>
  </span>
 </div>

   <div className='mx-auto text-center mb-10 sm:mb-5'>
       <Image
   src="/Rectangle2.png" height={450}
    width={450} alt="A stylish rocket single seater" className="rounded-lg" />
      <p className='text-xl font-normal my-3'>Going all-in with millennial design</p>
   <p className="text-xl text-center mx-auto my-3 underline underline-offset-8 text-black-600 font-medium">Read More</p>
  <span className='text-center mx-28 flex font-light'>
  <span className='flex mx-auto text-center'>
 <IoTimeOutline size={20} />
   <p className='ml-3'>5 min</p>
   </span>
  <span className='flex mx-auto text-center'>
    < FiCalendar size={20} />
   <p className='ml-3'>12<sup>th</sup>
    Oct 2022</p> 
   </span>
    </span>
  </div>

  <div className='mx-auto text-center mb-10 sm:mb-5'>
      <Image
      src="/Rectangle3.png"
       height={450} width={450}
       alt="A stylish rocket single seater"
    className="rounded-lg"
   />
   <p className='text-xl font-normal my-4'>Going all-in with millennial design</p>
  <p className="text-xl text-center mx-auto my-3 underline underline-offset-8 text-black-600 font-medium">Read More</p>
 <span className='text-center mx-28 flex font-light'>
   <span className='flex  mx-auto text-center'>
    <IoTimeOutline size={20} />
   <p className='ml-3'>5 min</p>
  </span>
    <span className='flex mx-auto text-center'>
   < FiCalendar size={20} />
     <p className='ml-3'>12<sup>th</sup> Oct 2022</p>
    </span>
  </span>
  </div>
      </div>
            
   
   
   
   
   
   
   
   
   
   </>
    
          



 
   
  )
}

export default OurBlog