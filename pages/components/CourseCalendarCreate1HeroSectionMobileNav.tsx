import React, { useState } from 'react'
import { FaBookOpen } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { Menu, X } from 'lucide-react'; // Icons

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


const CourseCalendarCreate1HeroSectionMobileNav:React.FC<CalendarCreate1> = ({ lefttitle, quiztitle, courseindex=[], quizindex=[], righttitle, righsubttitle, righttitleduration, formheading, formdescription, formeventname, formstartdate, formenddate, formlocation, formnotification, formemail, formeventdescription, formeventdescriptionPlaceholder, frombtntext  }) => {

    const [ isActive, setIsActive ] = useState<number | null>(0);
    const [ sideBarOpen , setSidebarOpen ] = useState<boolean | null>(false)

    const handleActive = (idx:number) => {
        setIsActive(isActive === idx ? null : idx);
    }



  return (
    <div className='w-full shadow-md  top-0 left-0 sticky z-50'>
        <div className="flex ">
            {/* left section */}
            {sideBarOpen && 
                 <div
                    className="fixed inset-0 bg-black/30 bg-opacity-20  z-40"
                    onClick={() => setSidebarOpen(false)}
                ></div>}
            {sideBarOpen && 
            (
                <div className='fixed bg-white top-0 left-0 h-screen overflow-y-auto w-64 z-50'>
               

                <div className=' px-2 h-full'>
                  <div className='flex justify-end pt-1' onClick={() => setSidebarOpen(false)}>
                     <X className="w-6 h-6" />
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
            </div>)}

            {/* right section */}
            <div className='sm:w-14/18 bg-[#49BBBD]/10'>
                {/* header */}
                <div className='flex items-center gap-2 bg-[#49BBBD] text-white lg:px-10 px-2 py-4'>
                    {/* navbar open button */}
                    <div>
                        <button
                        className='mt-2'
                        onClick={() => setSidebarOpen(true)}>
                            <Menu className="w-8 h-8" />
                        </button>
                    </div>
                    <div>
                        <h1 className='text-sm py-2 '>{righttitle}</h1>
                        <div className='flex items-center lg:text-base text-[13px] justify-between '>
                                <h2 className=''>{righsubttitle}</h2>
                                <div className='flex items-center gap-1'>
                                    <LuClock className='' />
                                    <p>{righttitleduration}</p>
                                </div>
                        </div>
                   </div>
               </div>
               <div className=' px-5 py-5'>
                   <h2 className='text-xl font-semibold py-3 '>{formheading}</h2>
                   <p className='sm:text-[13px] text- text-[#696984]'>{formdescription}</p>
                   {/* form */}
                   <div className='bg-white rounded-xl sm:p-5 p-2 gap-4 mt-5'>
                        {/* event name */}
                        <div>
                            <label className='text-[13px] font-semibold py-1'>{formeventname}</label>
                            <input type="text" className='w-full sm:px-3 px-1 sm:py-2 py-1 mt-1 border border-[#D9D9D9] sm:text-[13px] text-[10px] rounded-md' placeholder='Adobe XD Auto - Animate : Your Guide to Creating' />
                        </div>
                        {/* start and end date */}
                        <div className='flex py-2 gap-4'>
                            <div className='w-1/2'>
                                <label className='text-[13px] font-semibold py-1'>{formstartdate}</label>
                                <input type="text" className='w-full sm:px-3 px-1 sm:py-2 py-1 mt-1 border border-[#D9D9D9] sm:text-[13px] text-[10px] rounded-md' placeholder='September 24, 2017 07:59 am' />
                            </div>
                            <div className='w-1/2'>
                                <label className='text-[13px] font-semibold py-1'>{formenddate}</label>
                                <input type="text" className='w-full sm:px-3 px-1 sm:py-2 py-1 mt-1 border border-[#D9D9D9] sm:text-[13px] text-[10px] rounded-md' placeholder='September 24, 2017 07:59 am' />
                            </div>
                        </div>
                        {/* location */}
                        <div>
                            <label className='text-[13px] font-semibold py-1'>{formlocation}</label>
                            <input type="text" className='w-full sm:px-3 px-1 sm:py-2 py-1 mt-1 border border-[#D9D9D9] sm:text-[13px] text-[10px] rounded-md' placeholder='2118 Thornridge Cir, Syracuse, Connecticut 35624' />
                        </div>
                        {/* notification and email */}
                        <div className='flex py-2 gap-4'>
                            <div className='w-1/2'>
                                <label className='text-[13px] font-semibold py-1'>{formnotification}</label>
                                <input type="text" className='w-full sm:px-3 px-1 sm:py-2 py-1 mt-1 border border-[#D9D9D9] sm:text-[13px] text-[10px] rounded-md' placeholder='30 mins' />
                            </div>
                            <div className='w-1/2'>
                                <label className='text-[13px] font-semibold py-1'>{formemail}</label>
                                <input type="text" className='w-full sm:px-3 px-1 sm:py-2 py-1 mt-1 border border-[#D9D9D9] sm:text-[13px] text-[10px] rounded-md' placeholder='jessica.hansome@example.com' />
                            </div>
                        </div>
                        {/* description */}
                        <div>
                            <label className='text-[13px] font-semibold py-1'>{formeventdescription}</label>
                            <input type='text' className='w-full sm:h-40 h-10 sm:px-3 px-1 sm:py-2 py-1 mt-1 border border-[#D9D9D9] sm:text-[13px] text-[10px] rounded-md' placeholder={formeventdescriptionPlaceholder}></input>
                        </div>
                        <div className='flex justify-end py-4'>
                            <button className='bg-[#49BBBD] text-white w-52 font-bold py-2 rounded-md mt-3'>{frombtntext}</button>
                        </div>
                   </div>
               </div>
            </div>           
        </div>
    </div>
  )
}

export default CourseCalendarCreate1HeroSectionMobileNav