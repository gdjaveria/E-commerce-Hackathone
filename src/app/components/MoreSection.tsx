import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MoreSection = () => {
  return (
    
  <>
  
 <div className='flex flex-col md:flex-row bg-[#F4F4F4] justify-around mx-auto p-10'>
 <div>
   <Image
   src='/tabel00.png'
    alt=''
  height={500}
    width={500} />
  <h3 className='text-3xl font-medium'>Side table</h3>
    <Link href='/'>
       <p className="text-xl mt-8 underline underline-offset-8 text-black-600 ">
        View More</p>
  </Link>
   </div>

   
   <div>
     <Image
      src='/Maskgroup.png'
      alt='' height={500}
      width={500} />
     <h3 className='text-3xl font-medium'>Side table</h3>
      <Link href='/'>
   <p className="text-xl mt-8 underline underline-offset-8 text-black-600 ">View More</p>
  </Link>
  </div>
 </div>

  </>

 

        
        
  )
}

export default MoreSection
