import Image from 'next/image';
import React from 'react'
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

interface Card {
    imgsrc?: string;
    design?: string;
    duretion?: string;
    heading?: string;
    description?: string;
    userimgsrc?: string;
    username?: string;
    previousprice?: string;
    newprice?: string;
}

interface Recommended {
    title?: string;
    bgcolor?: string;
    slidebtn?: string;
    seeall?: string;
    card?: Card[];
}

const CourseRecommendedCardSection:React.FC<Recommended> = ({ 
    title, 
    bgcolor, 
    slidebtn, 
    seeall,
    card=[],
    }) => {

  return (
    <div className='flex justify-center space-y-10'>
    <div className={`flex justify-center ${bgcolor} md:w-[900px] lg:w-[1600px] py-10`}>
        <div className='lg:max-w-[1100px]  sm:px-7 px-4 '>
            <div className='py-5 flex justify-between items-center font-semibold text-xl'>
                <h2 className=''>{title}</h2>
                <h4 className='text-[13px] text-[#49BBBD] w-20'>{seeall}</h4>
            </div>
            {/* card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
            {card.map((card, index) => (             
                <div 
                className='bg-white rounded-xl py-3 px-3 shadow-xl md:w-60 '
                key={index}>
                    {/* card image */}
                    <div className='flex justify-center'> 
                        <div className=''>
                            <Image className='h-36 rounded-xl' alt='student image' src={card.imgsrc || ''} width={250} height={0} />
                        </div>
                    </div>
                    <div className='flex justify-between text-[#696984] text-[10px] py-2'>
                        <h4>{card.design}</h4>
                        <h3>{card.duretion}</h3>
                    </div>
                    {/* course heading */}
                    <div>
                        <h4 className='font-medium  py-1'>{card.heading}</h4>
                    </div>
                    <div className='text-[#696984] text-[13px]'>
                        <p>{card.description}</p>
                    </div>
                    {/* course user */}
                    <div className='flex gap-3 pt-3'>
                        <div className=' h-8 w-8 bg-gray-300 overflow-hidden rounded-full'>
                            <Image src={card.userimgsrc || ''} alt='user image' width={40} height={0} />
                        </div>
                        <h3 className='text-[14px] mt-1 font-medium'>{card.username}</h3>
                        <div className='flex text-[12px] items-center gap-2 justify-end w-32'>
                            <h4 className='italic text-black/50 line-through'>{card.previousprice}</h4>
                            <h4 className='text-[#49BBBD] text-sm font-bold'>{card.newprice}</h4>
                        </div>    
                    </div>          
                </div>
            ))}
         </div>   
         {/* next and privious button */}
            <div>
                {slidebtn && 
                <div className='py-9 flex justify-end  text-white '>
                    <div className='bg-[#49BBBD80]/50 hover:bg-[#49BBBD] px-2 py-2 rounded'>
                        <IoIosArrowBack />
                    </div>
                    <div className='bg-[#49BBBD] py-2 px-2 ml-3 rounded'>
                        <IoIosArrowForward />
                    </div>
                </div> }
            </div>         
        </div>
    </div>
    </div>
  )
}

export default CourseRecommendedCardSection