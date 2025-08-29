import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaAndroid } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";

interface Card {
  imgsrc?: string;
  name?: string;
  review?: string;
}

interface Student {
  title?: string;
  appText?: string;
  androidBtnText?: string;
  iosBtnText?: string;
  card?: Card[];
}

const MemberShipStudentSection:React.FC<Student> = ({ title, appText, androidBtnText, iosBtnText, card=[]}) => {
  return (
    <div>
    <div className='flex justify-center'>
      <div className='flex justify-center pt-5 min-h-[500px] py-4 px-3  bg-[#e8f2fc] lg:w-[1600px]  '>
        <div className='lg-w-[1100px] lg:w-[1100px]  '>
          {/* title */}
          <div className='px-3'>
            <h2 className='text-md md:text-2xl  font-semibold pb-5'>{title}</h2>
          </div>
        
        {/* card */}
          <div className='grid grid-cols-1 px-3 md:px-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-10'>
              {card.map((card, index) => (              
                <div 
                className='bg-white pb-5 rounded-xl'
                key={index}>
                  {/* card image */}
                      <div className='flex justify-center'> 
                        <div className='bg-gray-300 rounded-md my-3 bg-cover h-20 overflow-hidden'>
                            <Image alt='student image' src={card.imgsrc || ''} width={90} height={0} />
                        </div>
                      </div>
                      {/* student name */}
                      <div>
                          <h4 className='font-bold text-center py-2'>{card.name}</h4>
                      </div>
                      {/* student review */}
                      <div>
                          <p className='text-[#696984] text-[12px] text-center px-4 '>{card.review}</p>
                      </div>                
                </div>
              ))}
          </div>          
        </div>
      </div>
    </div>
      <div className='flex justify-center px-5 my-7 lg:-translate-y-20'>
          <div className='bg-[#252641] lg:w-[1100px] md:w-[700px] py-3 lg:flex lg:justify-between text-white rounded-2xl md:px-10 px-3 md:py-7'>
             <div>
                <h3 className='text-md py-3 text-center md:text-2xl'>{appText}</h3>
             </div>
             <div className='flex justify-center gap-2'>
              <Link className='bg-[#29B9E7] flex text-[13px] px-4 h-8 sm:h-10 py-1 items-center rounded' href='#'><FaAndroid className='text-[18px] mr-1'/>{androidBtnText}</Link>
              <Link className='bg-[#49BBBD] flex text-[12px] px-7 h-8 sm:h-10 py-1 items-center rounded-md'  href='#'> <FaAppleAlt className='mr-1 text-[16px]'/>{iosBtnText}</Link>
             </div>
          </div>
      </div>
    </div>
  )
}

export default MemberShipStudentSection