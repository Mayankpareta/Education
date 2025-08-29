import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { LuClock } from "react-icons/lu";

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

interface CalendarCreate1 {
  lefttitle: string;
  quiztitle?: string;
  courseindex: CourseIndex[];
  quizindex?: QuizIndex[];
  righttitle: string;
  righsubttitle: string;
  righttitleduration: string;
  formheading: string;
  formdescription: string;
  formeventname?: string;
  formstartdate?: string;
  formenddate?: string;
  formlocation?: string;
  formnotification?: string;
  formemail?: string;
  formeventdescription?: string;
  formeventdescriptionPlaceholder?: string;
  frombtntext?: string;
}

const CourseCalendarCreate1HeroSection:React.FC<CalendarCreate1> = ({ lefttitle, quiztitle, courseindex=[], quizindex=[], righttitle, righsubttitle, righttitleduration, formheading, formdescription, formeventname, formstartdate, formenddate, formlocation, formnotification, formemail, formeventdescription, formeventdescriptionPlaceholder, frombtntext }) => {

    const [ isActive, setIsActive ] = React.useState<number | null>(0);

    const handleActive = (idx:number) => {
        setIsActive(isActive === idx ? null : idx);
    }

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
            <div className='sm:w-13/18 lg:w-14/18 bg-[#49BBBD]/10'>
               <div className='bg-[#49BBBD] text-white px-10 py-5'>
                   <h1 className='sm:text-3xl text-lg py-2 '>{righttitle}</h1>
                   <div className='flex items-center justify-between '>
                        <h2 className='sm:text-base text-sm'>{righsubttitle}</h2>
                        <div className='flex items-center gap-1'>
                            <LuClock className='sm:text-[17px] text-[13px]' />
                            <p>{righttitleduration}</p>
                        </div>
                   </div>
                   
               </div>
               <div className=' px-5 py-5'>
                   <h2 className='text-xl font-semibold py-3 '>{formheading}</h2>
                   <p className='text-[13px] text-[#696984]'>{formdescription}</p>
                   {/* form */}
                   <div className='bg-white rounded-xl sm:p-5 px-2 gap-4 mt-5'>
                        {/* event name */}
                        <div>
                            <label className='text-[13px] font-semibold py-1'>{formeventname}</label>
                            <input type="text" className='w-full px-3 py-2 mt-1 border border-[#D9D9D9] text-[13px] rounded-md' placeholder='Adobe XD Auto - Animate : Your Guide to Creating' />
                        </div>
                        {/* start and end date */}
                        <div className='flex py-2 gap-4'>
                            <div className='w-1/2'>
                                <label className='text-[13px] font-semibold py-1'>{formstartdate}</label>
                                <input type="text" className='w-full px-3 py-2 mt-1 border border-[#D9D9D9] text-[13px] rounded-md' placeholder='September 24, 2017 07:59 am' />
                            </div>
                            <div className='w-1/2'>
                                <label className='text-[13px] font-semibold py-1'>{formenddate}</label>
                                <input type="text" className='w-full px-3 py-2 mt-1 border border-[#D9D9D9] text-[13px] rounded-md' placeholder='September 24, 2017 07:59 am' />
                            </div>
                        </div>
                        {/* location */}
                        <div>
                            <label className='text-[13px] font-semibold py-1'>{formlocation}</label>
                            <input type="text" className='w-full px-3 py-2 mt-1 border border-[#D9D9D9] text-[13px] rounded-md' placeholder='2118 Thornridge Cir, Syracuse, Connecticut 35624' />
                        </div>
                        {/* notification and email */}
                        <div className='flex py-2 gap-4'>
                            <div className='w-1/2'>
                                <label className='text-[13px] font-semibold py-1'>{formnotification}</label>
                                <input type="text" className='w-full px-3 py-2 mt-1 border border-[#D9D9D9] text-[13px] rounded-md' placeholder='30 mins' />
                            </div>
                            <div className='w-1/2'>
                                <label className='text-[13px] font-semibold py-1'>{formemail}</label>
                                <input type="text" className='w-full px-3 py-2 mt-1 border border-[#D9D9D9] text-[13px] rounded-md' placeholder='jessica.hansome@example.com' />
                            </div>
                        </div>
                        {/* description */}
                        <div>
                            <label className='text-[13px] font-semibold py-1'>{formeventdescription}</label>
                            <input type='text' className='w-full h-40 px-3 py-2 mt-1 border border-[#D9D9D9] text-[13px] rounded-md' placeholder={formeventdescriptionPlaceholder}></input>
                        </div>
                        <div className='flex justify-center sm:justify-end py-4'>
                            <button className='bg-[#49BBBD] text-white w-52 font-bold py-2 rounded-md mt-3'>{frombtntext}</button>
                        </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCalendarCreate1HeroSection