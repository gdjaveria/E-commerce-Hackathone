import React from 'react'
import Image from 'next/image'
import { Link } from 'lucide-react'

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

        <div className='text-center md:text-left space-y-4 mr-40'>
          <p className='text-xl font-bold text-gray-600'>New Arrivals</p>
          <h2 className='text-4xl font-bold text-gray-800 sm:text-3xl my-8'>Asgaard sofa</h2>
          <Link href="/asgaard">
            <button className='bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800'>
              Order Now

            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewArrive;