import React from 'react'

interface News {
    title?: string;
    description?: string;
    mainImg?: string;
    heading?: string;
    information?: string;
    cards?: Newscard[]
}

interface Newscard {
    imgsrc?: string;
    heading?: string;
    description?: string;
}

const NewsSection: React.FC<News> = ({ title, description, mainImg , heading, information, cards = []}) => {
  return (
    <div className='flex justify-center mx-5 my-10'>
        <div className='text-center max-w-[1600px'>
            <div className='text-[#2F327D] text-md sm:text-xl  font-bold py-2'>{title}</div>
            <div className='text-black/60 text-[10px] sm:text-[12px] py-1 sm:py-4'>{description}</div>
            <div className='grid md:grid-cols-2 grid-cols-1 py-5 gap-10 sm:gap-14'>
                {/* Left card */}
                <div> 
                    <div 
                    className='bg-cover h-48 max-w-[350px]  bg-center rounded-xl my-3'
                    style={{ backgroundImage: `url(${mainImg})`}} ></div>
                    <div className='text-left'>
                        <button className='bg-[#49BBBD] text-white px-3 rounded-full my-3 text-[13px]'>NEWS</button>
                        <div className='max-w-[350px] font-bold '>
                            {heading}
                        </div>
                        <div className='max-w-[350px] text-[12px] py-4 text-black/60'>
                            {information}
                        </div>
                        <button className='text-[12px] hover:border-b border-[#696984] inline text-[#696984]'>
                            Read More
                        </button>
                    </div>
                </div>
                {/* Right card */}
                <div>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <div className='flex my-3'>
                                <div className='bg-cover bg-center w-40 h-24 rounded-xl '
                                 style={{ backgroundImage: `url(${card.imgsrc})`}}
                                ></div>
                                <div className='px-2 w-64 text-left '>
                                    <div className='font-bold text-[10px] sm:text-[12px] text-left pb-1 sm:pb-3'>
                                        {card.heading}
                                    </div>
                                     <div className='text-[9px] sm:text-[11px] text-black/60'>
                                        {card.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsSection