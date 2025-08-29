import React from 'react'
import { Star } from 'lucide-react';


interface Card {
  id?: number;
  title?: string;
  SeeAll?: string;
  innerCard: InnerCard[];
}

interface InnerCard {
  imgsrc?: string;
  heading?: string;
  description?: string;
  price?: string;
  buttonText?: string;
}

interface Category {  
  title?: string;
  description?: string;
  cards?: Card[];
}

const CourseSection: React.FC<Category> = ({ title,description, cards =[]  }) => {
  return (
    <section className='bg-[#effdfa]'>
    <div className='flex justify-center  flex-col lg:flex-row lg:space-x-10 lg:space-y-0 2xl:w-10/12 w-10/12 lg:w-11/12 mx-auto'>
      <div className='lg:w-[1100px] 2xl:py-16  py-10'>

        {/* Title and description */}
        <div className='text-black font-bold text-xl md:pl-5 sm:text-2xl pt-10'>{title}</div>
        <div className='text-[13px] text-black/54 md:pl-5 sm:pb-10 pb-5'>{description}</div>
        <div>

        {/* Cards */}
        <div className=''>
        {cards.map((card, index) => (
          <div key={index}>
           <div className='flex justify-between sm:py-10 py-5'>
            <h3 className='font-bold md:pl-5'>{card.title}</h3>
            <p className='text-[#00BCD4] md:pr-5 text-[14px]'>{card.SeeAll}</p>
           </div>
           <div className='md:flex justify-evenly gap-5 lg:gap-20'>
           {card.innerCard.map((card, index) => (
            <div key={index} className='flex border-2  md:w-[300px] lg:min-w-[400px] border-[#91c0fd] bg-white md:px-4 px-1 py-3 min-h-52 rounded-3xl md:mb-0 mb-5'>
              <div className='bg-cover bg-center rounded-xl w-20 md:w-72 h-40 lg:h-52 ' style={{ backgroundImage: `url(${card.imgsrc})` }}></div>

              <div className='lg:px-4 px-2 pt-5 w-40 sm:w-auto'>
                <h2 className='sm:text-xl lg:py-2 sm:text-[13px] lg:text-[15px] font-bold'>{card.heading}</h2>
                <p className='lg:text-[13px] text-[11px] text-black/52'>{card.description}</p>
                {/* 5 start rating */}
              <div className="flex my-2">
                <Star fill={'#facc15'} stroke="#facc15" />
                <Star fill={'#facc15'} stroke="#facc15" />
                <Star fill={'#facc15'} stroke="#facc15" />
                <Star fill={'#facc15'} stroke="#facc15" />
                <Star fill={'#facc15'} stroke="#facc15" />
                <div className='w-full text-right pr-5 font-bold'>{card.price}</div>
              </div>
              <div className='border lg:text-[13px] text-[12px] rounded-md text-center font-bold text-[#49BBBD]'><button>{card.buttonText}</button></div>
              </div>
            </div>   
           ))}
           </div>             
          </div>
        ))}
        </div>   
        </div>
      </div>
    </div>
    </section>
  )
}

export default CourseSection