import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface footer {
    title: string;
    description: string;
    buttonText: string;
    careers: string;
    privacyPolicy: string;
    conditions: string;
    lowerLine: string;
}

const FooterSection:React.FC<footer> = ({ title, description, buttonText, careers, privacyPolicy, conditions, lowerLine}) => {
  return (
    <div className='flex justify-center  text-white'>
        <div className=' lg:max-w-[1600px] py-10 px-3 md:w-[1400px] flex bg-[#252641] justify-center'>
            <div className=''>
            <div className='grid grid-cols-2 '>
                <div>
                    <Image alt='logo' src='/images/yellowLogo.png' width={90} height={0} />
                </div>
                <div className='flex items-center'>
                    <h2 className='border-l text-base border-gray-700 h-12 font-bold max-w-32 pl-4'>
                    {title}
                    </h2>
                </div>
            </div>
            <div className='pt-5'>
               <p className='text-[#B2B3CF] text-[16px] tracking-wider font-semibold text-center'>{description}</p>
            </div>
            <div className='py-4 max-w-[500px]  mb-8'>
                <input className='rounded-full px-4 py-2 border border-gray-600 text-gray-300 text-sm w-64' placeholder='Your Email' />
                <button className='bg-[#49BBBD] my-2 sm:my-0 rounded-full mx-2 text-[15px] px-5 py-2' >{buttonText}</button> 
            </div>
            <div className='text-[13px] text-[#B2B3CF] py-3'> 
                <Link href='#' className='px-3 '>
                    {careers}
                </Link>
                 <Link href='#'  className='px-3 border-l border-[#B2B3CF]'>
                    {privacyPolicy}
                </Link>
                 <Link href='#'  className='px-3 border-l border-[#9b9cb6]'>
                    {conditions}
                </Link>
            </div>
            <div className='text-center text-[14px] text-[#B2B3CF] tracking-wider'>
                &#64; {lowerLine}
            </div>
            </div>
        </div>
    </div>
  )
}

export default FooterSection