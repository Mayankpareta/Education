import React, { useState } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaBookOpen, FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
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

interface CoinSection {
    coinheading?: string;
    coinsubheading?: string;
    coindescription?: string
    descriptionbgcolor?: string
    socialmedia?: Social[]
}
interface Social {
    tagname?: string;
}

interface Calendar {
  lefttitle: string;
  quiztitle?: string;
  courseindex: CourseIndex[];
  quizindex?: QuizIndex[];
  righttitle?: string;
  righsubttitle?: string;
  righttitleduration?: string;
  rightcontenttitle?: string;
  rightcontentdescription?: string;
  coinsection?: CoinSection[]
}


const CalendarCreate2:React.FC<Calendar> = ({ lefttitle, quiztitle, courseindex=[], quizindex=[], righttitle, righsubttitle, righttitleduration, rightcontenttitle, rightcontentdescription, coinsection = []}) => {

    const [ isActive, setIsActive ] = useState<number | null>(0);
  
    const handleActive = (idx:number) => {
        setIsActive(isActive === idx ? null : idx);
    }


  return (
    <div className='w-full mx-auto '>
        <div className="sm:flex ">
            {/* left section */}
            <div className='lg:w-4/18 sm:w-5/18 lg:px-4 px-2 mt-5 '>
                <div className='flex justify-center items-center h-9 w-9  bg-[#49BBBD] text-white text-3xl'>
                    <IoIosArrowRoundBack />
                </div>
                {/* lesssons */}
                <div className='py-2'>
                    {/* title */}
                    <h2 className='lg:text-xl text-md font-semibold py-3'>{lefttitle}</h2>   
                    {courseindex.map((lesson, idx) => (
                    <div                     
                    onClick={() => handleActive(idx)}
                    className={`lg:py-3 py-2 flex justify-between items-center my-2 lg:px-3 px-1 rounded-md gap-1 lg:gap-2 ${isActive === idx ? 'text-white' : 'text-black'} ${isActive === idx ? 'bg-[#49BBBD]' : lesson.bgColor}`} key={idx}>
                            {/* lesson name */}
                            <div className='flex items-center gap-1 lg:gap-2'>
                                <FaBookOpen className={`text-[9px] lg:text-[11px] ${isActive === idx ? 'text-white' : 'text-black'}`} />
                                <h3 className='lg:text-[11px] text-[9px]'>{lesson.heading}</h3>
                            </div>
                            {/* duration */}
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
                        {/* quiz name */}
                         <div className='flex items-center gap-2'>
                            <FaBookOpen className={`lg:text-[11px] text-[9px] text-black`} />
                            <h3 className='lg:text-[11px] text-[9px]'>{lesson.heading}</h3>
                        </div>
                        {/* duration */}
                        <p className='text-black lg:text-[11px] text-[9px]'>{lesson.duration}</p>
                    </div>    
                   ))}
                </div>
            </div>

            {/* right section */}
            <div className='lg:w-14/18 sm:w-13/18 bg-[#49BBBD]/10'>
                <div className='bg-[#49BBBD] text-white lg:px-10 px-5 py-5'>
                    {/* title */}
                    <h1 className='lg:text-3xl md:text-xl py-2 '>{righttitle}</h1>
                    {/* subtitle and duretion */}
                    <div className='flex items-center lg:text-base text-[13px] justify-between '>
                        <h2 className=''>{righsubttitle}</h2>
                        <div className='flex items-center gap-1'>
                            <LuClock className='' />
                            <p>{righttitleduration}</p>
                        </div>
                    </div>                   
                </div>
                 
                <div className='w-19/20 py-5 mx-auto'>
                   {/* heading and description */}
                    <div className='px-2 sm:px-0'>
                        <h2 className='text-2xl py-2 font-semibold'>{rightcontenttitle}</h2>
                        <p className='sm:text-[13px] text-[10px] text-[#696984]'>{rightcontentdescription}</p>
                    </div> 
                    {/* coin section */}
                   {coinsection.map((coin, idx) => (
                    <div key={idx} className='bg-white p-5 sm:mx-0 mx-2 mt-5 rounded-xl'>
                        <div className='sm:flex justify-between'>
                             {/* coin heading */}
                            <h3 className='text-xl font-semibold'>{coin.coinheading}</h3>
                            {/* all social media */}                            
                            <div className='flex justify-center items-center gap-3 py-2'>
                                <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaTwitter /></div>
                                <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaFacebook /></div>
                                <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaYoutube /></div>
                                <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaInstagram /></div>
                                <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaTelegramPlane /></div>
                                <div className='h-6 w-6 flex justify-center items-center text-[14px] bg-[#49BBBD] rounded-full text-white '><FaWhatsapp /></div>
                            </div>                            
                        </div>
                        {/* sub heading */}
                        <div className='text-[14px] py-2 text-[#696984]'>{coin.coinsubheading}</div>
                        {/* description */}
                        <p className={`sm:text-[14px] text-[12px] p-2.5 ${coin.descriptionbgcolor} text-[#696984]`}>{coin.coindescription}</p>
                    </div>               
                   ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CalendarCreate2