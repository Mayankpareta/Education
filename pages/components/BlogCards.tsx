import Image from 'next/image';
import React from 'react'
import { FaEye } from "react-icons/fa";
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

interface card {
    imgsrc?: string;
    heading?: string;
    writerImage?: string;
    writerName?: string;
    Description?: string;
    seenCount?: number;
}

interface blogCards {
    title?: string;
    cards?: card[];
}

const BlogCards:React.FC<blogCards> = ({ title , cards=[]}) => {
  return (
    <div className='flex justify-center'>
    <div className='bg-[#e9f5ff] pt-10 lg:w-[1600px]'>
        <div>
            {/* title section */}
            <div className='flex sm:px-14 px-3 my-4'>
                <h2 className='text-start w-40 font-semibold'>{title}</h2>
                <h3 className='w-full text-end font-semibold text-[#49BBBD]'>See all</h3>
            </div>
            {/* card section */}
            <div>
              <div className='flex justify-center px-4'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-9 sm:gap-20'>
                   {cards.map((card, index) => (
                    <div key={index} className='lg:w-[450px] mdw-[300px] px-3 py-8 bg-white rounded-xl'>
                        {/* card main image */}
                        <div className='inline-block '>
                            <Image className='rounded-xl max-h-[150px] lg:min-h-[240px]' src={card.imgsrc || ''} alt='' width={400} height={0}/>
                        </div>
                        {/* card heading */}
                        <div>
                            <h3 className='text-[#252641] font-semibold'>{card.heading}</h3>
                        </div>
                        <div className="flex py-4 px-2">
                            {/* user image */}
                            <div className='rounded-full w-12 h-12 bg-black/20 overflow-hidden'>
                                <Image  alt='image' src={card.writerImage || ''} width={50} height={0} />
                            </div>
                            {/* user name */}
                            <h4 className='flex items-center pl-2'>{card.writerName}</h4>
                        </div>
                        {/* description */}
                        <div>
                            <p className='text-[#696984] text-sm py-2'>{card.Description}</p>
                        </div>
                        <div className='flex pt-5'>
                            <h3 className='w-40 text-[#696984] text-sm'>Read More</h3>
                            {/* views */}
                            <div className='w-full flex justify-end pr-3'>
                                <FaEye className='text-[#49BBBD]' />
                                <h3 className='px-2 text-sm text-[#696984]'>{card.seenCount}</h3>
                            </div>
                        </div>
                    </div> 
                   ))}
                </div>
              </div>                      
            </div>
            {/* right next and previous btn */}
            <div className='py-10 flex justify-end text-white mr-20'>
                <div className='bg-[#49BBBD80]/50 hover:bg-[#49BBBD] px-2 py-2 rounded'>
                    <IoIosArrowBack />
                </div>
                <div className='bg-[#49BBBD] py-2 px-2 ml-3 rounded'>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BlogCards