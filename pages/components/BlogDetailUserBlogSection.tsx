import Image from 'next/image';
import React from 'react'

interface Detail {
  title: string;
  descriptionFirst: string;
  descriptionSec: string;
  descriptionThird: string;
  affordableBtnText?: string;
  StunningBtnText?: string;
  makingBtnText?: string;
  madbrawnsBtnText?: string;
  userImageSrc?: string;
  userName?: string;
  followBtnText?: string;
}

const BlogDetailUserBlogSection:React.FC<Detail> = ({ title, descriptionFirst, descriptionSec, descriptionThird, affordableBtnText, StunningBtnText, makingBtnText, madbrawnsBtnText, userImageSrc, userName, followBtnText }) => {
  return (
    <section className='lg:flex flex-col lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-9/12 mx-auto py-5 mt-20 md:mt-3 justify-center '>
        <div className='lg:w-10/12 w-full px-4'>
            {/* title */}
            <div>
                <h2 className='text-md md:text-2xl text-[#1f2270] font-bold'>{title}</h2>
            </div>
            {/* all description */}
            <div className='mt-3'>
                <p className='text-[12px] md:text-[15px] font-medium text-[#696984] py-2'>{descriptionFirst}</p>
                <p className='text-[12px] md:text-[15px] font-medium text-[#696984] py-2'>{descriptionSec}</p>
                <p className='text-[12px] md:text-[15px] font-medium text-[#696984] py-2'>{descriptionThird}</p>
            </div>
            {/* buttons */}
            <div className='flex flex-wrap md:flex-row flex-col gap-2  mt-3'>
                <button className='text-[13px] py-1.5 mr-3 px-4 rounded-3xl text-[#696984] bg-[#49BBBD1A]'>{affordableBtnText}</button>
                <button className='text-[13px] py-1.5 mr-3 px-4 rounded-3xl text-[#696984] bg-[#49BBBD1A]'>{StunningBtnText}</button>
                <button className='text-[13px] py-1.5 mr-3 px-4 rounded-3xl text-[#696984] bg-[#49BBBD1A]'>{makingBtnText}</button>
                <button className='text-[13px] py-1.5 mr-3 px-4 rounded-3xl text-[#696984] bg-[#49BBBD1A]'>{madbrawnsBtnText}</button>
            </div>
            <div className='w-full border-b border-[#aaacb1] my-5'></div>
            {/* user profile */}
            <div className='flex'>
                <div className='lg:w-1/3 flex'>
                    {/* image */}
                    <div className='w-14 h-14 rounded-md bg-gray-300 overflow-hidden mr-3'>
                        <Image alt='user image' src={userImageSrc || ''} width={100} height={0}  />
                    </div>
                    {/* name  */}
                    <div>
                        <p className='text-[13px] w-20 text-[#696984]'>Written by</p>
                        <p className='text-[15px] font-medium  py-2'>{userName}</p>
                    </div>
                </div>
                {/* follow button */}
                <div className='w-full text-end'>
                  <button className='text-[13px] md:py-1.5 py-1 md:w-40 w-20 font-bold rounded-lg text-[#49BBBD] border border-[#49BBBD] mt-2 hover:bg-[#49BBBD] hover:text-white'>{followBtnText}</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogDetailUserBlogSection


