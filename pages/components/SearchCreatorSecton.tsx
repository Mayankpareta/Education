import Image from 'next/image';
import React from 'react'

interface Card {
    imgsrc?: string;
    name?: string;
    description?: string;
}

interface Creator {
    title?: string;
    seeall?: string;
    card?: Card[];
}

const SearchCreatorSecton:React.FC<Creator> = ({title, seeall, card=[] }) => {
  return (
    <div className='flex justify-center mt-10 py-5'>
        <div className='lg:w-9/12 w-11/12'>
            <div className='flex justify-between font-semibold'>
              <h2 className='sm:text-xl text-base'>{title}</h2>
              <button className='text-[#49BBBD] text-[13px] '>{seeall}</button>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-7 '>
               {card.map((cretor, idx) => (
                  <div 
                  className='shadow-md shadow-gray-400 px-3 text-center mt-20 py-3'
                  key={idx}>
                    <div className='flex items-center justify-center h-12'>
                      <Image className=' -mt-[40px] h-34' src={cretor.imgsrc || ''} alt='creator image' width={150} height={0}/>
                    </div>
                      <div className='mt-7'>
                          <h3 className='py-2'>{cretor.name}</h3>
                      </div>
                      <p className='py-2 text-[#696984] text-[12px] w-8/10 mx-auto'>{cretor.description}</p>
                  </div>
               ))}
            </div>
        </div>
    </div>
  )
}

export default SearchCreatorSecton