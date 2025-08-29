import Image from 'next/image';
import React from 'react'

interface About {
    title?: string;
    featureone?: string;
    featuretwo?: string;
    featurethree?: string;
    learnbtntext?: string;
    rightimgsrc?: string
}

const SearchAboutLearning:React.FC<About> = ({ title, featureone, featuretwo, featurethree, learnbtntext, rightimgsrc}) => {
  return (
    <div className='lg:w-8/10 mx-auto my-7'>
        <div className='bg-[#9DCCFF]/30 rounded-xl '>
            <div className='grid md:grid-cols-2 place-items-center grid-cols-1 w-9/10 mx-auto pt-5'>
                <div className='lg:w-11/20 w-12/20'>
                    <h3 className='lg:text-2xl text-lg sm:w-9/10 font-semibold'>{title}</h3>
                    <div className='flex items-center gap-2 pt-3'>
                        <div className='h-3 w-3 rounded-full bg-[#9DCCFF] '></div>
                        <p className='text-[#2D3436] text-[12px] lg:text-[14px]'>{featureone}</p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                        <div className='h-3 w-3 rounded-full bg-[#9DCCFF] '></div>
                        <p className='text-[#2D3436] text-[12px] lg:text-[14px] '>{featuretwo}</p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                        <div className='h-3 w-3 rounded-full bg-[#9DCCFF] '></div>
                        <p className='text-[#2D3436] text-[12px] lg:text-[14px] '>{featurethree}</p>
                    </div>
                    <div className='py-4'>
                        <button className='w-full bg-[#49BBBD] rounded-md text-white font-semibold lg:py-2 py-1'>{learnbtntext}</button>
                    </div>
                </div>
                <div>
                    <Image alt='call image' src={rightimgsrc || ''} width={600} height={0}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchAboutLearning