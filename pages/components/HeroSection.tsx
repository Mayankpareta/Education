'use client'
import React from 'react'
import Image from 'next/image';

function HeroSection(props : { heading: string, subheading?: string, buttonText?: string, iconText?: string }) {
  return (
    <div className='flex justify-center'>
    <div className='bg-[url("/images/Header.png")] top-10 sm:top-0 bg-cover bg-center min-h-[500px] flex justify-center max-w-[1600px] relative rounded-b-[100px] '>
        <div className='grid md:grid-cols-2 sm:pl-20 sm:pr-10 text-white '>
            <div className='lg:py-10 sm:py-10 '>

              {/* Heading */}
              <div>
                <h1 className='md:text-5xl sm:text-3xl text-xl sm:mt-20 mt-16 ml-5 font-bold '><span className='text-[#f48c06]'>Studying </span>{props.heading}</h1>
              </div>   

              {/* Subheading */} 
              <div>
                <p className='text-sm sm:text-base md:text-xl mt-2 max-w-[430px] sm:my-8 ml-5'>{props.subheading}</p>
              </div>

              {/* Button and icon text */}
              <div className='sm:flex items-center mt-2'>
                <button className='bg-[#ffffff]/30 sm:text-base text-xs text-white md:px-3 sm:px-6 sm:py-2 py-2 px-4 font-semibold rounded-full ml-5 transition duration-300'>{props.buttonText}</button>
                <div className='flex' >
                <Image src="/images\playIcon.svg" alt="play icon" width={100} height={50} className='cursor-pointer mt-3' />
                <p className='text-black font-semibold flex  items-center text-sm'>{props.iconText}</p>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div>
                <div className='flex justify-center' >
                  <Image src="/images/image.png" alt="hero image" width={400} height={400} className='md:pt-14 lg:pt-0 object-cover ' />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection