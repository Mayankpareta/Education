import React, { useState } from 'react'
import { IoIosArrowRoundBack, IoIosStar } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import Image from 'next/image';
import CourseRecommendedCardSection from './CourseRecommendedCardSection';
 

interface CourseIndex {
  heading: string;
  duration: string;
  bgColor: string;
}

interface QuizIndexOne {
  heading: string;
  duration: string;
  bgColor: string;
}

interface QuizIndexTwo {
  heading: string;
  duration: string;
  bgColor: string;
}

interface Calendar {
  lefttitle: string;
  quiztitle?: string;
  courseindex: CourseIndex[];
  quizindexone?: QuizIndexOne[];
  quizindextwo?: QuizIndexTwo[];
  righttitle?: string;
  righsubttitle?: string;
  righttitleduration?: string;
  rightcontenttitle?: string;
  rightcontentdescription?: string;
  coinheading?: string;
  coindescription?: string;
  aboutcourseheading?: string;
  aboutcoursedescription?: string;
  achievableheading?: string;
  achievabledescrription?: string;
  userimgsrc?: string;
  usernametext?: string;
  userreview?: string;
}


const CourseFullView:React.FC<Calendar> = ({ lefttitle, quiztitle, courseindex=[], quizindexone=[],quizindextwo=[], righttitle, righsubttitle, righttitleduration, coinheading, coindescription, aboutcourseheading, aboutcoursedescription, achievableheading, achievabledescrription, userimgsrc, usernametext, userreview}) => {

    const [ isActive, setIsActive ] = useState<number | null>(0);
  
    const handleActive = (idx:number) => {
        setIsActive(isActive === idx ? null : idx);
    }

     const recommendedCard = [
        {
            imgsrc: '/images/courseRecomFirst.png',
            design : 'Design',
            duretion : '3 Month',
            heading : 'AWS Certified solutions Architect',
            description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            userimgsrc : '/images/blogerImage.png',
            username : 'Lina',
            previousprice : '$100',
            newprice : '$80'
        },
        {
            imgsrc: '/images/blogMarketingThird.png',
            design : 'Design',
            duretion : '3 Month',
            heading : 'AWS Certified solutions Architect',
            description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            userimgsrc : '/images/blogerImage.png',
            username : 'Lina',
            previousprice : '$100',
            newprice : '$80'
        },
        {
            imgsrc: '/images/courseRecomFirst.png',
            design : 'Design',
            duretion : '3 Month',
            heading : 'AWS Certified solutions Architect',
            description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            userimgsrc : '/images/blogerImage.png',
            username : 'Lina',
            previousprice : '$100',
            newprice : '$80'
        },
        {
            imgsrc: '/images/blogMarketingThird.png',
            design : 'Design',
            duretion : '3 Month',
            heading : 'AWS Certified solutions Architect',
            description : 'Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor',
            userimgsrc : '/images/blogerImage.png',
            username : 'Lina',
            previousprice : '$100',
            newprice : '$80'
        },
    ]


  return (
    <div className='w-full mx-auto '>
        <div className="grid grid-rows-2 sm:flex [grid-template-areas:'first''second']">
            {/* left section */}
            <div className='[grid-area:second] lg:w-4/18 sm:w-5/18 lg:px-4 px-2 mt-5 '>
                <div className='sm:flex hidden justify-center items-center h-9 w-9  bg-[#49BBBD] text-white text-3xl'>
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
                   {quizindexone.map((lesson, idx) => (
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

                 <div className='py-2'>
                    <h2 className='lg:text-xl text-md font-semibold lg:py-3'>{quiztitle}</h2>   
                   {quizindextwo.map((lesson, idx) => (
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
            <div className='[grid-area:first] lg:w-14/18 sm:w-13/18 bg-[#49BBBD]/10'>
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
                {/* video section */}
                <div className='lg:w-19/20 mx-auto mt-5 px-3'>
                    <video 
                    controls
                    className='w-full rounded-xl bg-white'                    
                    />
                </div>
                {/* coins paragraph */}
                <div className='lg:w-19/20 mx-auto mt-10 px-3'>
                   <h3 className='py-3 text-xl font-semibold text-[#252641]'>{coinheading}</h3>
                   <p className='text-[#696984] text-[13px]'>{coindescription}</p>
                </div>
                {/* about section */}
                <div className='lg:w-19/20 mx-auto mt-10 px-3'>
                   <h3 className='py-3 text-xl font-semibold text-[#252641]'>{aboutcourseheading}</h3>
                   <p className='text-[#696984] text-[13px]'>{aboutcoursedescription}</p>
                </div>
                {/* achievable paragraph */}
                <div className='lg:w-19/20 mx-auto mt-10 px-3'>
                   <h3 className='py-3 text-xl font-semibold text-[#252641]'>{achievableheading}</h3>
                   <p className='text-[#696984] text-[13px]'>{achievabledescrription}</p>
                </div>
                {/* user review  */}
                <div className='w-19/20 mx-auto mt-10 p-5 rounded-lg bg-[#F48C064D]'>
                   <div className='flex gap-3'>
                        <div className='bg-gray-300 rounded h-12 overflow-hidden w-12'>
                            <Image src={userimgsrc || ''} alt='user image' width={100} height={0} />
                        </div>
                        <div>
                            <h4 className='font-semibold '>{usernametext}</h4>
                            <div className='flex gap-0.5 text-[#FDB022] text-[14px]'>
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                        </div>
                   </div>
                   <p className='text-[#696984] text-[12px] py-2'>{userreview}</p>
                </div>
                {/* recommended component */}
                <CourseRecommendedCardSection 
                title='Student also bought'
                slidebtn = 'true'
                bgcolor='bg-[#e8f2fc]'
                card= {recommendedCard}
                /> 
            </div>
        </div>
    </div>
  )
}

export default CourseFullView