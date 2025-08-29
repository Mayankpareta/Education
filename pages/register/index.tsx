import Link from 'next/link'
import React from 'react'

function Index() {
  return (
     <div>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 my-5 mx-2'>
            <div className='flex justify-center items-center'>
                <div className='md:flex hidden justify-start  items-end  bg-[url("/images/registerHeroImage.jpg")] bg-cover bg-center h-[300px] text-white md:h-[560px] rounded-3xl w-full'>
                    <div className='ml-10 mb-10'>
                        <h2 className='text-3xl font-bold'>Lorem Ipsum is simply </h2>
                        <p>Lorem Ipsum is simply </p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <div className='mb-5'>
                        <h2 className='text-center'>Welcome to lorem..!</h2>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='grid grid-cols-2 gap-2 h-[50px] justify-center bg-[#49BBBD99]/70 px-2 py-1.5 rounded-full md:w-72 w-60 '>
                            <Link href='/login' className=' hover:border border-[#49BBBD]  px-7 py-1.5 text-[14px] rounded-full text-center text-white'>Login</Link>
                            <Link href='/register' className='bg-[#49BBBD] px-7 py-1.5 text-[14px] rounded-full text-center text-white'>Register</Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-[#5B5B5B] sm:w-[400px] tracking-wide my-6 md:my-10 text-[12px] md:text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className='sm:w-[400px] text-sm md:text-base'>
                        <h3 className='py-2'>Email Address</h3>
                        <input className='border border-[#49BBBD] w-full px-5 py-2 rounded-full ' placeholder='Enter your user name ' />
                    </div>
                    <div className='sm:w-[400px] mt-4 text-sm md:text-base'>
                        <h3 className='py-2'>User name</h3>
                        <input className='border border-[#49BBBD] w-full px-5 py-2 rounded-full ' placeholder='Enter your password' />
                    </div>
                    <div className='sm:w-[400px] mt-4 text-sm md:text-base'>
                        <h3 className='py-2'>Password</h3>
                        <input className='border border-[#49BBBD] w-full px-5 py-2 rounded-full ' placeholder='Enter your password' />
                    </div>
                    <div className='mt-5 text-end'>
                        <button className='bg-[#49BBBD] px-7 py-1.5 text-[14px] mr-1 rounded-full w-40 text-white'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index