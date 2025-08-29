import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Card {
    imgsrc?: string;
    title?: string;
    description?: string;
    btnText?: string;
}

type Teacher = {
    card: Card[]
}

const MemberShipTeacherSection:React.FC<Teacher> = ({ card=[] }) => {
  return (
    <div className='flex justify-center mb-10 md:mb-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:w-[1100px] sm:px-4 px-2 gap-10 lg:gap-15 '>
            {card.map((card, index) => (
                <div key={index} className=' shadow-2xl px-5 py-8 bg-white rounded-xl'>
                    {/* card image */}
                    <div className='inline-block '>
                        <Image className='rounded-xl max-h-[150px] lg:min-h-[280px]' src={card.imgsrc || ''} alt='' width={500} height={0}/>
                    </div>
                    {/* card title */}
                    <div>
                        <h3 className='text-[#252641] text-xl py-2 font-semibold'>{card.title}</h3>
                    </div>                   
                    <div>
                        <p className='text-[#696984] text-base py-2'>{card.description}</p>
                    </div>
                    <div className='flex pt-5'>                       
                        <div className='w-full flex justify-end pr-3'>                             
                            <Link className='bg-[#49BBBD] text-white px-5 py-2 rounded-md text-[15px]' href='#'>{card.btnText}</Link>
                        </div>
                    </div>
                </div> 
            ))}            
        </div>
    </div>
  )
}

export default MemberShipTeacherSection