import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";

interface Description {
    description?: string;
}

interface Card {
    title?: string;
    best?: string;
    price?: string;
    time?: string;
    btnText?: string;
    bgColor?: string
    description?: Description[]
}

interface Member {
    heading?: string;
    card?: Card[];
}

const MemberShipHeroSection:React.FC<Member> = ({ heading, card=[]}) => {

    const [ isActive , setIsActive ] = useState(1)

  return (
    <div className='flex justify-center min-h-[500px] mb-5 items-center '>
        <div>
            <div className='flex justify-center'>
                <h2 className='text-2xl md:text-5xl py-10 font-extrabold text-[#49BBBD]'>{heading}</h2>
            </div> 
            <div className='grid grid-cols-1 md:px-4 md:grid-cols-3 gap-6 sm:gap-10'>
                {card.map((card, index) => (
                <div
                onClick={() => setIsActive(index)}
                key={index} className={`${isActive === index ? 'shadow-2xl border-blue-500 scale-100' : " hover:shadow-lg"} px-4 py-3`}>
                    <div className='flex'>
                        <h3 className='text-[12px] font-semibold text-[#49BBBD]'>{card.title}</h3>
                        {card.best && <p className='w-full text-end'><span className='border px-4 py-0.5 text-[10px] text-[#2D3436] rounded-full'>{card.best}</span></p>}
                    </div>
                    <div className='py-2'>
                        <span className='text-3xl font-bold pr-1'>{card.price}</span>
                        <span className='text-[10px] font-semibold'>{card.time}</span>
                    </div>
                    <div className='min-h-64'>                        
                        {card.description?.map((dec , index) => (
                            <div
                            key={index}
                            className='py-2 flex '>
                                <div className={`h-7 mr-2 w-7 mt-1 flex justify-center items-center bg-[${card.bgColor}] rounded-full`}><FaCheck className={`bg-[${card.bgColor}] text-[12px]`} /></div>
                                <p className='text-[13px]   text-[#2D3436]'>
                                {dec.description}                                
                                </p>
                            </div>
                        ))}                        
                    </div>   
                    <div className='py-2'>
                        <button className={`${isActive === index ? 'bg-[#49BBBD] text-white' : 'border border-[#49BBBD] text-[#49BBBD] font-semibold'} text-[14px] px-5 py-2 rounded-xl w-full `}>{card.btnText}</button>
                    </div> 
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MemberShipHeroSection