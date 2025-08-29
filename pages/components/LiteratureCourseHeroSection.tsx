import Image from 'next/image';
import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaRegEye, FaRegPlayCircle, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";


interface literature {
    bgimgsrc?: string;
    userimgsrc?: string;
    username?: string;
    universityposition?: string;
    description?: string;
    enrollbtntext?: string;
    rating?: string;
    viewstudents?: string;
    course?: string;
}

const LiteratureCourseHeroSection:React.FC<literature> = ({ bgimgsrc, userimgsrc, username, universityposition, description, enrollbtntext, rating, viewstudents, course}) => {
  return (
    <div className='mt-32 lg:mt-0'>
        <div className='bg-cover bg-center bg-blend-overlay lg:w-10/12 bg-black/30 sm:flex gap-5 mx-auto p-5 rounded-xl '
        style={{ backgroundImage : `url(${bgimgsrc})`}}
        >
            <div className='mx-auto rounded-full lg:h-60 h-48 w-48 lg:w-60 border-8 border-white bg-white flex justify-center items-center overflow-hidden '>
                <Image className='lg:h-56 h-44' src={userimgsrc || ''} alt='user image' width={270} height={0} />
            </div>
            <div className='bg-white/80 sm:w-8/10 mx-auto mt-3 sm:mt-0 rounded-xl lg:py-5 py-3'>
                <div className='w-9/10 mx-auto'>
                    <div className='flex justify-between lg:mt-2'>
                        <h3 className='lg:text-xl text-md font-semibold'>{username}</h3>
                        <button className='text-white bg-[#49BBBD] rounded-md w-28 lg:py-2 py-1 font-semibold text-sm lg:text-lg'>{enrollbtntext}</button>
                    </div>
                    <p className='text-[13px] text-[#2D3436B2] py-2 sm:py-0'>{universityposition}</p>
                    <p className='lg:text-md text-sm lg:py-5 py-2 text-[#2D3436]'>{description}</p>
                    <div className='sm:flex'>
                        <div className='flex sm:w-7/10 justify-between sm:justify-around'>
                            <div className='flex items-center sm:gap-1 ' >
                                <CiStar  className='text-xl'/>
                                <p className='text-[10px] sm:text-[12px] text-[#2D3436CC]'>{rating}</p>
                            </div>
                            <div className='flex items-center sm:gap-1 ' >
                                <FaRegEye   className='text-md text-[#2D3436CC]'/>
                                <p className='text-[10px] sm:text-[12px] text-[#2D3436CC]'>{viewstudents}</p>
                            </div>
                            <div className='flex items-center sm:gap-1 ' >
                                <FaRegPlayCircle  className='text-sm text-[#2D3436CC]'/>
                                <p className='text-[10px] sm:text-[12px] text-[#2D3436CC]'>{course}</p>
                            </div>
                        </div>
                        <div className='flex justify-center sm:justify-end sm:w-3/10 items-center gap-3 py-2 sm:py-0'>
                            <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaTwitter /></div>
                            <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaYoutube /></div>
                            <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaInstagram /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiteratureCourseHeroSection