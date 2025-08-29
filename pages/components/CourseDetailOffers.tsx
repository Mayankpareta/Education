import Link from 'next/link';
import React from 'react'

interface Card {
    bgimgsrc?: string;
    discount?: string;
    heading?: string;
    description?: string;
}

interface Offer {
    title?: string;
    discountBgcolor?: string;
    card?: Card[]
}

const CourseDetailOffers:React.FC<Offer> = ({ title, discountBgcolor, card=[]}) => {
  return (
    <section>
        <div className='lg:flex flex-col lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-9/12 w-9/10  mx-auto py-10'>
        <div className='w-full'>
            {/* title and all see */}
            <div className=' flex justify-between items-center md:px-10'>
                <h2 className='md:text-xl text-md font-semibold py-10'>{title}</h2>
                <Link href='#' className='text-[13px] text-[#3aabad] w-16 font-bold'>See all</Link>
            </div>
            {/* descount card */}
            <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center gap-3'>
                {card.map((item, idx) => (
                    <div className='lg:w-80 md:w-52 w-64 text-white' key={idx}>
                        {/* bg image */}
                        <div className='bg-cover bg-center h-[270px] rounded-xl px-7 py-7 ' 
                        style={{ backgroundImage : `url(${item.bgimgsrc})`}}
                        >
                            {/* discount */}
                            <div className={`h-12 w-12 md:h-16 md:w-16 ${discountBgcolor} rounded-md flex justify-center items-center  text-md font-bold`}>
                                {item.discount}
                            </div>
                            {/* heading and description */}
                            <h3 className='text-md font-bold py-5'>{item.heading}</h3>
                            <p className='text-sm lg:w-8/10'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </section>
  )
}

export default CourseDetailOffers;