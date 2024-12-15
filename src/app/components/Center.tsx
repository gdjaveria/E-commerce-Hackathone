import React from 'react'

const Center = () => {
  return (
    <>
    <div className='bg-[#FAFAFA] py-12 my-16'>
        <div className='flex flex-wrap justify-between mx-auto max-w-screen-xl'>

         <div className='text-left mb-8 sm:mb-1 w-full sm:w-auto'>
           <h3 className='text-2xl font-semibold'>Free Delivery</h3>
            <p className='text-gray-500 font-medium text-sm py-3'>For all orders over $50, consectetur<br/> 
            adipim scing elit.</p>
            </div>

            <div className='text-left mb-8 sm:mb-1 w-full sm:w-auto'>
             <h3 className='text-2xl font-semibold'> 90 Days Return</h3>
            <p className='text-gray-500 font-medium py-3'>If goods have probelms,consectetur<br/> 
            adipim scing elit.</p>
            </div>

            <div className='text-left mb-8 w-full sm:w-auto'>
             <h3 className='text-2xl font-semibold'>Secure Payment</h3>
            <p className='text-gray-500 font-medium py-3'>100% secure payment,consectetur<br/> 
            adipim scing elit.</p>
            </div>

</div>
   </div>
       
  

    </>
  )
}

export default Center;