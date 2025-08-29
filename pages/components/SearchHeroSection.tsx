import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

interface search {
    heroimgsrc?:string;
    searchbtntext?: string;
    subjectbtntext?: string;
    partnerbtntext?: string;
    programbtntext?: string;
    languagebtntext?: string;
    Abaliabilitybtntext?: string;
    learningtypebtntext?: string;
}

const SearchHeroSection:React.FC<search> = ({heroimgsrc, searchbtntext, subjectbtntext, partnerbtntext, programbtntext, languagebtntext, Abaliabilitybtntext, learningtypebtntext}) => {
  return (
    <div>
        <div className='bg-cover bg-center bg-blend-overlay w-full mt-30 lg:mt-0 flex justify-center items-center bg-[#49BBBD]/30 lg:h-58 h-[400px]'
        style={{backgroundImage : `url(${heroimgsrc})`}}>
            <div className='lg:w-7/10 w-9/10 pt-3'>
                <div className='bg-white flex gap-2 p-1 rounded-md'>
                    <input className='w-full px-3' placeholder='Search your favourite course' />
                    <button className='bg-[#49BBBD] w-28 text-white rounded-md py-1.5 font-semibold'>{searchbtntext}</button>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-around pt-4 gap-5'>
                    <div className=' bg-white flex lg:py-2 py-1 lg:px-4 px-2 gap-2 justify-center items-center rounded-md font-semibold lg:text-lg text-base'>
                        <h4>{subjectbtntext}</h4>
                        <IoIosArrowDown />                        
                    </div>
                    <div className=' bg-white flex lg:py-2 py-1 justify-center lg:px-4 px-2 gap-2 items-center rounded-md font-semibold lg:text-lg text-base'>
                        <h4>{partnerbtntext}</h4>
                        <IoIosArrowDown />                        
                    </div>
                    <div className=' bg-white flex lg:py-2 py-1 justify-center lg:px-4 px-2 gap-2 items-center rounded-md font-semibold lg:text-lg text-base'>
                        <h4>{programbtntext}</h4>
                        <IoIosArrowDown />                        
                    </div>
                    <div className=' bg-white flex lg:py-2 py-1 justify-center lg:px-4 px-2  gap-2 items-center rounded-md font-semibold  lg:text-lg text-base'>
                        <h4>{languagebtntext}</h4>
                        <IoIosArrowDown />                        
                    </div>
                    <div className=' bg-white flex py-2 px-4 gap-2 justify-center items-center rounded-md font-semibold  lg:text-lg text-base'>
                        <h4>{Abaliabilitybtntext}</h4>
                        <IoIosArrowDown />                        
                    </div>
                    <div className=' bg-white flex lg:py-2 py-1 w-34 px-1 justify-center sm:gap-2 items-center rounded-md font-semibold  lg:text-base text-sm'>
                        <h4>{learningtypebtntext}</h4>
                        <IoIosArrowDown />                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchHeroSection