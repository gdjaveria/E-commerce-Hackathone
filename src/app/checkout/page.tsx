import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Center from '../components/Center'
import Footer from '../components/Footer'



const CheckOut = () => {
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
    Checkout
 </h1>


 <div className="absolute top-28 left-1/2 transform -translate-x-1/3 -translate-y-1/3 mt-10">
      <p className="text-gray-700 text-xs md:text-xl flex items-center gap-2 mt-5">
        <Link href="/" className="font-bold hover:underline text-black">Home</Link>
   <Link href="/checkout" className=" hover:underline">checkout</Link>
     </p>
  </div>
  </div>

<div className='flex flex-col gap-7 mx-10 mt-12 lg:flex-row sm:flex-col'>
    <div className='w-full md:mx-18'>
        <h1 className='text-black font-semibold text-4xl px-9'>Billing details</h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <div>
             <label htmlFor='firstname' className='block my-6 text-gray-900 font-semibold'>First Name</label>  
             <input type='text' id='firstname' className='w-full border rounded border-gray-400'/>
            </div>

            <div>
             <label htmlFor='lastname' className='block my-6 text-gray-900 font-semibold'>Last Name</label>  
             <input type='text' id='lastname' className='w-full border rounded border-gray-400'/>
            </div>
</div>

<div className='mt-4'>
<label htmlFor='companyname' className='block my-6 text-gray-900 font-semibold'>Company Name (Optional)</label>  
<input type='text' id='companyname' className='w-full border rounded border-gray-400'/>
</div>


<div className='mt-4'>
<label htmlFor='country' className='block my-6 text-gray-900 font-semibold'>Country / Reigion</label>  
<input type='text' id='country' placeholder='sri Lanka' className='w-full border text-center 
rounded border-gray-400'/>
</div>

<div className='mt-4'>
<label htmlFor='staddress' className='block my-6 text-gray-900 font-semibold'>Street address</label>  
<input type='text' id='staddress'  className='w-full border text-center rounded border-gray-400'/>
</div>

<div className='mt-4'>
<label htmlFor='town' className='block my-6 text-gray-900 font-semibold'>Town / City</label>  
<input type='text' id='town'  className='w-full border text-center rounded border-gray-400'/>
</div>

<div className='mt-4'>
<label htmlFor='province' className='block my-6 text-gray-900 font-semibold'>Province</label>  
<input type='text' id='provience' placeholder='Western Provience' className='w-full border text-center rounded border-gray-400'/>
</div>

<div className='mt-4'>
<label htmlFor='code' className='block my-6 text-gray-900 font-semibold'>Zip code</label>  
<input type='text' id='code'  className='w-full border text-center rounded border-gray-400'/>
</div>

<div className='mt-4'>
<label htmlFor='phone' className='block my-6 text-gray-900 font-semibold'>Phone</label>  
<input type='text' id='phone'  className='w-full border text-center rounded border-gray-400'/>
</div>

<div className='mt-4'>
<label htmlFor='additonalinfo' className='block my-6 text-gray-900 font-semibold'>Email Address</label>  
<input type='text' id='additonalinfo'  className='w-full border text-center rounded border-gray-400'/>
<input type='text' id='additonalinfo' placeholder='Additional information' className='w-full mt-10 border text-center rounded border-gray-400'/>
</div>
</div>


<div className='w-full mt-4 md:mx-24 lg:w-1/2 lg:mt-0'>
    <div className='mt-6'>
        <table className='w-full table-auto'>
            <thead>
                <tr>
                <th className='text-xl text-gray-900 py-3 text-left'>Product</th>
                <th className='text-xl text-gray-900 py-3 text-right'>Subtotal</th>
                </tr>
            </thead>

            <tbody>
           <tr>
            <td className='text-gray-400 py-3'>Asgarrd sofa <span className='text-black'>x 1</span></td>
            <td className='text-gray-600 py-3 text-right'>Rs. 250,000.00</td>
           </tr>

           <tr>
            <td className='text-gray-800 font-semibold py-3'>Subtotal</td>
            <td className='text-gray-600 py-3 text-right'>Rs. 250,000.00</td>
           </tr>

           <tr className='font-semibold'>
            <td className='text-gray-800 font-semibold py-3'>Total</td>
            <td className='font-bold text-3xl text-yellow-700 py-3 text-right'>Rs.250,000.00</td>
           </tr>
            </tbody>

    </table>
    </div>


<div className='flex items-center mt-10'>
    <input type='radio' id='banktransfer' name='payment' className='mr-4'/>
    <h2 className='text-black text-1xl font-semibold'>Direct Bank Transfer</h2>
</div>

<div className='text-gray-400 mt-6'>
    <p>Make your payment directly into our bank account. please use your ID as <br/>the payment refrence.
    your order will not be shipped until the funds have cleared in our account.</p>

<div className='flex items-center mt-6 text-gray-400'>
<input type='radio' id='banktransfer' name='payment' className='mr-4'/>
<h2 className='text-gray-500'>Direct Bank Transfer</h2>
</div>

<div className='flex items-center mt-6 text-gray-400'>
<input type='radio' id='banktransfer' name='payment' className='mr-4'/>
<h2 className='text-gray-500'>Cash on Delivery</h2>
</div>

<p className='text-gray-600 mt-9'>your personal data will be used to support
     your experience throughts this websites, to manage acess to your account, 
     and for the other purpose described in our 
    <span className='text-black font-semibold mx-1'>privacy policy.</span>
</p>

<div className='flex items-center mt-10'>
    <button className='font-medium text-gray-900 border border-black px-16 py-4 text-xl rounded-xl'>
        Place order</button>
</div>
</div>
</div>
</div>


<Center/>
<Footer/>

</div>




</>
   
  )
}
export default CheckOut;