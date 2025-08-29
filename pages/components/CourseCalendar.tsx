import React, { useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

interface CourseIndex {
  heading: string;
  duration: string;
  bgColor: string;
}

interface QuizIndex {
  heading: string;
  duration: string;
  bgColor: string;
}

interface Calendar {
  lefttitle: string;
  quiztitle?: string;
  courseindex: CourseIndex[];
  quizindex?: QuizIndex[];
  righttitle: string;
  righsubttitle: string;
  righttitleduration: string;
  formheading?: string;
  formdescription?: string;
}

const getDayInMonth = (year:number, month:number) => {
    return new Date(year, month + 1, 0).getDate()
}

const CourseCalendar:React.FC<Calendar> = ({ lefttitle, quiztitle, courseindex=[], quizindex=[], righttitle, righsubttitle, righttitleduration, formheading, formdescription }) => {

    const [ isActive, setIsActive ] = useState<number | null>(0);

    const [ month, setMonth ] = useState<number | null>(8);
    const [ year, setYear ] = useState<number | null>(2025);

    const handleActive = (idx:number) => {
        setIsActive(isActive === idx ? null : idx);
    }

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'december'
    ]
    
    const daysInMonth = getDayInMonth(year ?? 2025, month ?? 8)

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

    const handleBack = () => {
        if(month === 11) {
            setMonth(0)
            setYear((prev) => (prev ?? 2025) + 1)
        }
        else {
            setMonth((prev) => (prev ?? 8) + 1)
        }
    }
    const handleNext = () => {
         if(month === 11) {
            setMonth(0)
            setYear((prev) => (prev ?? 2025) - 1)
        }
        else {
            setMonth((prev) => (prev ?? 8) - 1)
        }
    }

    const workingDays = "sep 12, Monday"

  return (
    <div className=' w-full mx-auto '>
        <div className="sm:flex ">
            {/* left section */}
            <div className='lg:w-4/18 sm:w-5/18 lg:px-4 px-2 mt-5 '>
                <div className='flex justify-center items-center h-9 w-9  bg-[#49BBBD] text-white text-3xl'>
                    <IoIosArrowRoundBack />
                </div>
                {/* lesssons */}
                <div className='py-2'>
                    <h2 className='lg:text-xl text-md font-semibold py-3'>{lefttitle}</h2>   
                   {courseindex.map((lesson, idx) => (
                   <div 
                   onClick={() => handleActive(idx)}
                   className={`lg:py-3 py-2 flex justify-between items-center my-2 lg:px-3 px-1 rounded-md gap-1 lg:gap-2 ${isActive === idx ? 'text-white' : 'text-black'} ${isActive === idx ? 'bg-[#49BBBD]' : lesson.bgColor}`} key={idx}>
                         <div className='flex items-center gap-1 lg:gap-2'>
                            <FaBookOpen className={`text-[9px] lg:text-[11px] ${isActive === idx ? 'text-white' : 'text-black'}`} />
                            <h3 className='lg:text-[11px] text-[9px]'>{lesson.heading}</h3>
                        </div>
                        <p className='text-black lg:text-[11px] text-[9px]'>{lesson.duration}</p>
                    </div>    
                   ))}
                </div>    
                {/* quiz section     */}
                 <div className='py-2'>
                    <h2 className='lg:text-xl text-md font-semibold lg:py-3'>{quiztitle}</h2>   
                   {quizindex.map((lesson, idx) => (
                   <div                   
                   className={`lg:py-3 py-2 flex justify-between items-center my-2 lg:px-3 px-1 rounded-md gap-2 'text-black' ${lesson.bgColor}`} key={idx}>
                         <div className='flex items-center gap-2'>
                            <FaBookOpen className={`lg:text-[11px] text-[9px] text-black`} />
                            <h3 className='lg:text-[11px] text-[9px]'>{lesson.heading}</h3>
                        </div>
                        <p className='text-black lg:text-[11px] text-[9px]'>{lesson.duration}</p>
                    </div>    
                   ))}
                </div>
            </div>

            {/* right section */}
            <div className='lg:w-14/18 sm:w-13/18 bg-[#49BBBD]/10'>
               <div className='bg-[#49BBBD] text-white lg:px-10 px-5 py-5'>
                   <h1 className='lg:text-3xl md:text-xl py-2 '>{righttitle}</h1>
                   <div className='flex items-center lg:text-base text-[13px] justify-between '>
                        <h2 className=''>{righsubttitle}</h2>
                        <div className='flex items-center gap-1'>
                            <LuClock className='' />
                            <p>{righttitleduration}</p>
                        </div>
                   </div>                  
               </div>
               <div className=' px-5 py-5'>
                {/* heading and description */}
                   <h2 className='text-xl font-semibold pt-2 '>{formheading}</h2>
                   <p className='lg:text-[13px] text-[11px] lg:py-5 py-2 text-[#696984]'>{formdescription}</p>
                   {/* calendar */}
                   <div className='bg-white sm:flex rounded-xl mt-3 lg:px-5 '>
                        <div className="sm:w-1/2 text-[#252641] p-2 lg:p-4 mt-5">  
                            {/* month and year */}
                            <div className='flex justify-between font-bold sm:border-r sm:border-black/10 py-5 px-5'>
                                <IoIosArrowBack onClick={handleBack}/>
                                {monthNames[month ?? 8] || 'September'} {" "}
                                {year}
                                <IoIosArrowForward  onClick={handleNext}/>
                            </div>  
                            {/* all dates */}
                            <div className="grid grid-cols-7 sm:border-r border-b border-black/10">
                                {days.map((day) => (
                                <div
                                    key={day}
                                    className="w-10 h-10 text-sm flex items-center justify-center  hover:bg-blue-300 rounded-md font-semibold"
                                >
                                    {day}
                                </div>
                                ))}
                            </div>
                        </div>
                        {/* right time section */}
                        <div className='p-4 sm:mt-5 sm:w-1/2'>
                            <h3 className='pt-5 text-center font-semibold'>{workingDays}</h3>
                            <div className='flex pt-4'>
                                <p className='text-[11px] text-[#696984] w-2/10 lg:w-1/10'>2 PM</p>
                                <div className='lg:w-9/10 w-8/10 h-1 pt-2 border-b border-black/10'></div>
                            </div>
                            <div className='lg:w-7/10 w-8/10 bg-[#EE645B4D] ml-10 lg:p-3 p-1 text-[9px] lg:text-[10px] rounded-md text-[#EE645B]'>Adobe XD Live Class</div>
                            <div className='flex pb-2'>
                                <p className='text-[11px] text-[#696984]w-2/10 lg:w-1/10'>3 PM</p>
                                <div className='lg:w-9/10 w-8/10 h-1 pt-2 border-b border-black/10'></div>
                            </div>
                            <div className='flex py-3'>
                                <p className='text-[11px] text-[#696984] w-2/10 lg:w-1/10'>4 PM</p>
                                <div className='lg:w-9/10 w-8/10 h-1 pt-2 border-b border-black/10'></div>
                            </div>
                            <div className='flex py-3'>
                                <p className='text-[11px] text-[#696984] w-2/10 lg:w-1/10'>5 PM</p>
                                <div className='lg:w-9/10 w-8/10 h-1 pt-2 border-b border-black/10'></div>
                            </div>
                            <div className='flex py-3'>
                                <p className='text-[11px] text-[#696984] w-2/10 lg:w-1/10'>6 PM</p>
                                <div className='w-9/10 h-1 pt-2 border-b border-black/10'></div>
                            </div>
                        </div>
                    </div>                   
               </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCalendar