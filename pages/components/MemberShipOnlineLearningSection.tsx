import React, { useState } from 'react'
import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";

interface Option {
    title?: string;
    description?: string;
}

interface Online {
    heading?: string;
    description?: string;
    btnText?: string;
    headingSec?: string;
    onlineoptions?:string;
    option?: Option[];
}

const OnlineLearningSection:React.FC<Online> = ({ heading, description, btnText, headingSec, onlineoptions, option=[]}) => {

    const [ isOptionOpen , setIsOptionOpen ] = useState<number | null>(0)

    const handleClick = (index: number) => {
        setIsOptionOpen(index === isOptionOpen ? null : index)
    }

  return (
    <div>
    <div className='flex justify-center py-10  text-white'>
        <div className='py-5 lg:w-[1100px] mx-3 px-2 text-center md:w-[600px] bg-[#252641] rounded-2xl'>
            {/* heading */}
            <div className='md:py-8 py-4'>
                <h2 className='text-xl md:text-2xl lg:text-3xl'>{heading}</h2>
            </div>
            {/* description */}
            <div className='flex justify-center'>
                <p className='max-w-[800px] md:text-base text-[12px]'>{description}</p>
            </div>
            {/* start learning button */}
            <div className='mt-8'>
                <button className='px-3 py-2 text-[12px] bg-[#49BBBD] rounded-md'>{btnText}</button>
            </div>
        </div>
    </div>
      {onlineoptions &&  <div className='flex justify-center my-5 '>
            <div className='md:py-10 py-5 w-[300px] px-3 md:w-[600px]  lg:w-[1100px]'>
                <div>
                    <h2 className='text-xl md:text-3xl my-5 font-semibold'>{headingSec}</h2>
                </div>
                {/* option section */}
                <div className=''>
                {option.map((option, index) => (
                    <div className='' key={index}>
                        {/* title */}
                        <div
                        onClick={() => handleClick(index)}
                        className='flex items-center '>
                            <div className=' inline-block mr-2 w-3 h-3 bg-[#a3f7df] px-1.5 rounded-full'></div>
                            <h3 className='text-[#424242] w-72 my-2 text-[11px] sm:text-sm inline'>{option.title} 
                            </h3>
                            <div className='w-full flex justify-end'>
                                {isOptionOpen === index ?  <IoIosArrowUp /> : <IoIosArrowDown className="mt-2"/> }
                            </div>
                            </div>
                            <hr className='py-2  text-gray-300 '/>
                            {/* description */}
                            <div className=''>
                                {isOptionOpen === index && <p className=' text-[#696984] text-[9px] sm:text-[10.5px] py-2'>{option .description}</p>}
                            </div>
                        </div>
                    ))}               
                </div>
            </div>
        </div>}
    </div>
  )
}


export default OnlineLearningSection