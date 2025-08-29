import Image from 'next/image';
import React from 'react'
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

interface Card {
    imgsrc?: string;
    heading?: string;
    userImageSrc?: string;
    userName?: string;
    rating?: number;
    maxRating?: number;
    lesson?: string;
}

interface Course {
    title?: string;
    maxRating?: number;
    rating?: number;
    card?: Card[]
}

const CourseHeroSection:React.FC<Course > = ({ 
    title, 
    rating = 3.8,
    maxRating = 5, 
    card=[]
    }) => {

    const percentage = ( rating / maxRating ) * 100;

  return (
    <div className='flex justify-center'>
    <div className='flex justify-center pb-5 bg-[#e0edfc] lg:w-[1600px]'>
        <div className='lg:w-[1100px] px-5 sm:px-1'>
           <div className='pt-22 lg:pt-2 sm:px-3'>
           <div >
                <h2 className='md:text-xl text-md py-5 font-bold'>{title}</h2>
           </div>
           <div>
            {/* course card */}
         <div className='grid grid-cols-1  md:grid-cols-3 gap-10 '>
            {card.map((card, index) => (             
                <div 
                className='bg-white rounded-xl py-3 px-3 shadow-xl'
                key={index}>
                {/* card image */}
                    <div className='flex justify-center'> 
                        <div className='h-36 lg:h-44'>
                            <Image className='h-full rounded-xl' alt='student image' src={card.imgsrc || ''} width={320} height={0} />
                        </div>
                    </div>
                    {/* course heading */}
                    <div>
                        <h4 className='font-medium  py-2'>{card.heading}</h4>
                    </div>
                    {/* course user */}
                    <div className='flex gap-3'>
                        <div className=' h-7 w-7 bg-gray-300 overflow-hidden rounded-full'>
                            <Image src={card.userImageSrc || ''} alt='user image' width={40} height={0} />
                        </div>
                        <h3 className='text-[13px] font-medium'>{card.userName}</h3>
                    </div> 
                    {/* complete course line  */}
                    <div className='pt-3'>
                       <div className='bg-gray-300 w-full h-1 rounded '>
                            <div className='h-full rounded bg-[#49BBBD]' 
                            style={{ width: `${percentage}%`}}
                            ></div>
                       </div>   
                    </div>               
                    <div className='flex justify-end pt-1'>
                      <h3 className='text-[11px] text-black/50'>{card.lesson}</h3>
                    </div>               
                </div>
            ))}
         </div>
            {/* next and privious button */}
            <div className='py-10 flex justify-end  text-white '>
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
    </div>  
    </div> 
  )
}

export default CourseHeroSection