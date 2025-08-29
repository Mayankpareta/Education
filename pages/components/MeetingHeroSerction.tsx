import React, { useState } from 'react'
import Image from 'next/image';
import { IoIosArrowRoundBack, IoIosArrowDown , IoIosArrowUp} from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTv } from "react-icons/fa";
import { FaRegCalendarMinus, FaRegCalendar, FaRegClock, FaMicrophone, FaVideo } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";


interface Card {
    getstart?: string;
    gethour?: string;
    getlesson?: string;
    lesson?: {
        title?: string;
        duration?: string;
    }[]
}

interface Meeting {
    title?: string;
    headinglesson?: string;
    headingduration?: string;
    meetingimgsrc?: string;
    persononeimgsrc?: string;
    persontwoimgsrc?: string;
    personthreeimgsrc?: string;
    contenttitle?: string;
    coursecompletion?: string;
    card?: Card[];
    booktitle?: string;
    bookcard?: {
        imgsrc?: string;
        heading?: string;
        price?: string;
    }[]
}

const MeetingHeroSerction:React.FC<Meeting> = ({ title, headinglesson, headingduration, meetingimgsrc, persononeimgsrc, persontwoimgsrc, personthreeimgsrc, contenttitle, coursecompletion, card=[], booktitle, bookcard=[] }) => {

    const [ isActive, setIsActive ] = useState<number | null>(1);

    const handleShowContent = (index: number) => {
        setIsActive(index === isActive ? null : index);
    }

  return (
    <div  className='lg:flex flex-col lg:flex-row lg:max-w-[1600px] bg-[#e9f1fa] lg:space-x-10 lg:space-y-0 mx-auto py-5'>
        <div className='lg:flex justify-between gap-6 w-9/10 md:p-4 mx-auto'>
            {/* left section */}
            <div className='w-full lg:w-7/10'>
            <div  className='flex items-center'>
                <div className='flex justify-center  items-center h-9 w-9  bg-[#49BBBD] text-white text-3xl'>
                    <IoIosArrowRoundBack />
                </div>
                <div className='md:px-5 p-2 md:py-5 bg-white rounded-xl  ml-5 w-full'>
                    <div className='flex justify-between items-center'>
                        <h3 className='font-semibold text-sm md:text-xl'>{title}</h3>
                        <CiSettings className='md:text-3xl text-base text-black/60'/>
                    </div>
                    <div className='flex gap-3 items-center text-[10px] md:text-[12px] text-[#252641] mt-1'>
                        <p>{headinglesson}</p>
                        <p>{headingduration}</p>
                    </div>
                </div>
                </div>
                    {/* meeting image */}
                    <div>
                        <div 
                        className='bg-cover bg-center h-[400px] md:h-[600px] rounded-xl mt-5'
                        style={{ backgroundImage: `url(${meetingimgsrc})` }}
                        >
                            <div className='flex justify-end flex-col  items-end p-4 gap-2'>
                                <div className='bg-white p-1 md:h-22 h-14  inline-block rounded-xl'>
                                    <Image src={persononeimgsrc || ''} alt='meeting image' width={100} height={0} className=' rounded-xl  md:w-24 w-16 md:h-22 h-14' />
                                </div>
                                <div className='bg-white p-1 inline-block md:h-22 h-14 overflow-hidden rounded-xl'>
                                    <Image src={persontwoimgsrc || ''} alt='meeting image' width={100} height={0} className=' rounded-xl md:w-24 w-16 md:h-22 h-14' />
                                </div>
                                <div className='bg-white p-1 inline-block md:h-22 h-14  overflow-hidden rounded-xl '>
                                    <Image src={personthreeimgsrc || ''} alt='meeting image' width={100} height={0} className=' rounded-xl  md:w-24 w-16 md:h-22 h-14' />
                                </div>
                            </div>   
                            <div className='md:px-7 px-2 flex items-end md:h-68 h-44'>
                                <div className='bg-[#e9f1fa] md:py-5 py-2 flex md:gap-5 gap-2 justify-center items-center w-full rounded-2xl'>
                                    <div className='flex justify-between items-center text-red-500 bg-white md:px-4 px-2 md:py-2.5 py-1 rounded-lg'>
                                        <FaVideo className='md:text-2xl text-md'/>                                    
                                    </div>
                                    <div className='flex justify-between items-center text-[#29B9E7] bg-white md:px-4 px-2 md:py-2.5 py-1 rounded-lg'>
                                        <FaMicrophone  className='md:text-2xl text-md'/>                                    
                                    </div>
                                    <div className='flex justify-between items-center text-red-500 bg-white md:px-4 px-2 md:py-2.5 py-1 rounded-lg'>
                                        <BsFillTelephoneFill   className='md:text-2xl text-md  rotate-[135.5deg]'/>                                    
                                    </div>
                                    <div className='flex justify-between items-center text-[#29B9E7] bg-white md:px-4 px-2 md:py-2.5 py-1 rounded-lg'>
                                        <FaTv  className='md:text-2xl text-md'/>                                    
                                    </div>
                                    <div className='flex justify-between items-center text-[#29B9E7] bg-white md:px-4 px-1 md:py-2.5 py-1 rounded-lg'>
                                        <Image  src='/images/meetingExitBtn.png' alt='share icon' width={25} height={0} className='md:text-2xl text-md h-4 w-5 md:h-6 md:w-8'/>                                    
                                    </div>
                                </div>
                            </div>                         
                        </div>
                    </div>
            </div>

            {/* right section */}
            <div className='w-full lg:w-3/10 lg:mt-0 mt-5 space-y-3'>
                {/* uper right section */}
                <div className='bg-white  rounded-2xl pb-1 pt-2 px-5'>
                    <h3 className='font-semibold text-base md:text-xl'>{contenttitle}</h3>
                    <div className='flex justify-between items-center text-[11px] text-[#49BBBD] mt-1'>
                        <p>{coursecompletion}</p>
                        <FaRegCalendarMinus className='text-xl'/>
                    </div>
                    {/* course completion bar */}
                    <div className='flex gap-1 py-3'>
                        <div className='h-1 w-2/10 bg-[#49BBBD]/30 '>
                            <div className='bg-[#49BBBD] h-1 ' style={{ width: '100%' }}></div>
                        </div>
                        <div className='h-1 w-2/10 bg-[#49BBBD]/30 '>
                            <div className='bg-[#49BBBD] h-1 ' style={{ width: '100%' }}></div>
                        </div>
                        <div className='h-1 w-2/10 bg-[#49BBBD]/30 '>
                            <div className='bg-[#49BBBD] h-1 ' style={{ width: '0%' }}></div>
                        </div>
                        <div className='h-1 w-2/10 bg-[#49BBBD]/30 '>
                            <div className='bg-[#49BBBD] h-1 ' style={{ width: '0%' }}></div>
                        </div>
                        <div className='h-1 w-2/10 bg-[#49BBBD]/30 '>
                            <div className='bg-[#49BBBD] h-1 ' style={{ width: '0%' }}></div>
                        </div>
                    </div>

                    {/* course content */}
                    {card.map((item, idx) => (
                        <div 
                        onClick={() => handleShowContent(idx)}
                        key={idx} 
                        className='px-2 py-1 my-2 border border-black/20 rounded-xl'>
                            <div className={`px-1 flex justify-between text-[13px] font-semibold ${isActive === idx ? 'text-[#49BBBD]' : 'text-[#252641]'}`}>{item.getstart} {isActive === idx ? <IoIosArrowUp className='text-lg'/> : <IoIosArrowDown className='text-lg'/>}</div>
                            <div className='flex justify-between text-[12px] items-center text-[#252641] px-3'>
                                <div className='flex items-center gap-1'><FaRegClock />{item.gethour} </div>
                                <div className='flex items-center gap-1'> <BiBookOpen />{item.getlesson}</div>
                            </div>
                            
                            {item.lesson?.map((lesson, lessonidx) => (
                                <div key={lessonidx}>
                                    {isActive === idx && <div className='h-1 border-b border-black/10 py-0.5 w-full'></div>} 
                                    {isActive === idx && <div key={lessonidx} className='flex justify-between text-[10px] items-center font-semibold text-[#252641] px-2 py-0.5'>
                                        <div className='flex items-center gap-1'>{lesson.title} </div>
                                        <div className='flex items-center gap-1'> {lesson.duration}</div>
                                    </div>}
                                </div>
                            ))}
                           
                        </div> 
                    ))}
                </div> 
                {/* lower right section */}
                <div className='bg-white rounded-2xl mt-3 p-5 '>
                    <div className='flex w-full justify-between items-center text-xl font-semibold pb-2'>
                        {booktitle} <FaRegCalendar className='text-[#49BBBD] text-base'/>
                    </div>
                    <div className='flex justify-center gap-2 lg:gap-5'>
                        {bookcard.map((item, idx) => (
                            <div key={idx} className=' shadow-md shadow-black/50 rounded-md py-2 px-2'>
                                <div className='rounded-md h-22 w-32  overflow-hidden mb-1'>
                                   <Image className='rounded-md' src={item.imgsrc || ''} alt='course img' width={130} height={0} />
                                </div>
                                <div className='text-center'>
                                    <h4 className='text-md font-semibold'>{item.heading}</h4>
                                    <p className='text-md font-semibold text-[#49BBBD]'>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetingHeroSerction