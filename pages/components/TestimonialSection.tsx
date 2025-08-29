import React from 'react'
import { Star } from 'lucide-react';


interface Testimonial {
    title: string;
    heading: string;
    description1: string;
    description2: string
    description3: string
    buttonText: string;
    imgSrc: string;
    imgText: string;
    imgName: string;
}

const TestimonialSection: React.FC<Testimonial> = ({ title, heading, description1, description2,description3, buttonText, imgSrc, imgText, imgName }) => {
  return (
    <div className='flex justify-center mx-4 my-20 w-8xl'>
        <div className='grid grid-cols-1 max-w-[1600px] sm:grid-cols-2 gap-10 md:gap-24'>
            {/* left items */}
            <div>
                {/* main title */}
                <div className='flex justify-start items-center w-32 gap-3'>
                    <h4 className='h-[1px] bg-gray-400 w-10 flex-1/6'></h4>  <h2 className='text-[11px] tracking-wider text-black/70'>{title}</h2>
                </div>
                {/* All descriptions */}
                <div className='py-4'>
                    <h2 className='text-[#2F327D] font-bold sm:text-3xl'>{heading}</h2>
                    <p className='max-w-80 text-black/60 text-[14px] py-2'>{description1}</p>
                    <p className='max-w-80 text-black/60 text-[14px] py-2'>{description2}</p>
                    <p className='max-w-80 text-black/60 text-[14px] py-2'>{description3}</p>
                </div>
                <div><button className='border border-[#49BBBD] text-[#49BBBD] text-[11px] px-3 h-9 rounded-full'>{buttonText}</button></div>
            </div>
            <div>
                {/* right image */}
                <div className='flex  items-end h-[300px] mx-2 sm:w-[300px] bg-center bg-cover rounded-xl'
                style={{ backgroundImage: `url(${imgSrc})` }}>
                    {/* image bottum items */}
                    <div className='w-auto rounded-xl bg-white h-32 text-[11px] text-black/60 p-3 transform translate-x-5 translate-y-5'>{imgText}
                    <div className='flex'>
                        <h3 className='font-bold w-full pt-2'>{imgName}</h3>
                        {/* 5 start rating */}
                        <div className='flex w-full justify-end'>
                            <Star className='h-4' fill={'#facc15'} stroke="#facc15" />
                            <Star className='h-4' fill={'#facc15'} stroke="#facc15" />
                            <Star className='h-4' fill={'#facc15'} stroke="#facc15" />
                            <Star className='h-4' fill={'#facc15'} stroke="#facc15" />    
                            <Star className='h-4' fill={'#facc15'} stroke="#facc15" />
                        </div>
                    </div>
                    <div className='text-end'>12 review at Yelp</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialSection