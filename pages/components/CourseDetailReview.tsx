import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaStar, FaWhatsapp, FaTelegramPlane, FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaCamera } from "react-icons/fa";
import { TbSettingsFilled } from "react-icons/tb";
import { MdRequestPage } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";


interface PersonReview {
    userimgsrc?: string;
    username?: string;
    raiting?: string; 
    time?: string; 
    description?: string; 
}

interface raitingDisplay {
    star?: string;
    raiting?: string;
}

interface Review {
    overviewone?: string;
    overviewtwo?: string;
    overviewthre?: string;
    overviewfor?: string;
    averageRating?: string;
    priceImage?: string;
    mainPrice?: string;
    disPrice?: string;
    discount?: string;
    discountPriceTime?: string;
    buyBtnText?: string;
    courseDetailHeading?: string;
    moneyBack?: string;
    deviceAccess?: string;
    certification?: string;
    moduls?: string;
    trainingHeading?: string;
    trainingDesc?: string;
    shareHeading?: string;
    raitingDisplay?: raitingDisplay[];
    personReviews?: PersonReview[];
}

const CourseDetailReview:React.FC<Review> = ({
    overviewone,
    overviewtwo,
    overviewthre,
    overviewfor,
    averageRating,
     priceImage,
    mainPrice,
    disPrice,
    discount,
    discountPriceTime, 
    buyBtnText,
    courseDetailHeading,
    moneyBack,
    deviceAccess,
    certification,
    moduls,
    trainingHeading,
    trainingDesc,
    shareHeading,
    raitingDisplay=[],
    personReviews=[]
}) => {
    const [userRaiting, setUserRaiting] = useState(0)

    useEffect(() => {
        if (!raitingDisplay || raitingDisplay.length === 0) return

        const total = raitingDisplay.reduce((sum, r) => sum + Number(r?.raiting || 0), 0)
        const avg = total / raitingDisplay.length
        const reviewPercentage = (avg / 5) * 100
        setUserRaiting(reviewPercentage)
    }, [raitingDisplay])

  return (
    <section className='grid [grid-template-areas:"first" "second"] sm:flex sm:flex-row justify-center mb-15 sm:pt-0 pt-16'>
        
        <div className='[grid-area:second] mt-[650px] sm:mt-0 sm:flex flex-col sm:flex-row sm:items-center sm:space-x-10 sm:space-y-0 2xl:w-10/12 w-9/10  mx-auto pt-10'>
            <div className='sm:w-6/10'>
                <div className=' grid md:grid-cols-4 px-2 grid-cols-2 lg:gap-10 gap-4 pb-4'>
                    <button className='bg-black/10 sm:text-[12px] lg:text-[14px] font-bold text-black/50 md:px-3  px-3 lg:px-7 md:py-2 lg:py-3 rounded-lg'>{overviewone}</button>
                    <button  className='bg-black/10 sm:text-[12px] lg:text-[14px] font-bold text-black/50 px-3 lg:px-7 md:py-2 lg:py-3  rounded-lg'>{overviewtwo}</button>
                    <button  className='bg-black/10 sm:text-[12px] lg:text-[14px] font-bold text-black/50 px-3 lg:px-7 md:py-2 lg:py-3  rounded-lg'>{overviewthre}</button>
                    <button className='bg-[#49BBBD] sm:text-[12px] lg:text-[14px] font-bold text-white px-3 lg:px-7 md:py-2 lg:py-3  rounded-lg'>{overviewfor}</button>
                </div>
                <div className='bg-[#81beff4d]  rounded-2xl py-5 lg:px-8 md:px-3 mx-2 px-4 md:mt-4 lg:mt-10'>
                    <div className='sm:flex '>
                        <div className='bg-white text-center sm:px-4 px-1 py-4 mb-3 lg:w-4/12 rounded-xl'>
                            <h3 className='md:text-md lg:text-2xl text-black/60 font-bold'>{averageRating} out of 5 </h3>
                            <div className='text-yellow-400 flex justify-center md:text-base  lg:text-lg py-5 space-x-1.5'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='pt-0 sm:text-base lg:text-lg text-black/60'>
                                Top Raiting
                            </div>
                        </div>
                        <div className='pl-2 lg:pl-5 text-black/60 sm:w-7/10 text-md lg:space-y-1 font-medium'>
                        {raitingDisplay.map((raiting, idx) => (
                            <div key={idx} className='flex items-center w-full'>
                                <h4 className='sm:w-6/20 w-3/10'>{raiting.star}</h4>
                                <div className='h-1.5 w-full bg-gray-300 rounded my-1 lg:my-3'>
                                    <div className='h-full bg-[#49BBBD] rounded'
                                    style={{ width : `${userRaiting}%`}}
                                    >                                    
                                    </div>
                                </div>
                            </div>
                        ))}                       
                        </div>    
                    </div> 

                    {/* user Reviews */}
                    <div className='pt-10'>
                        {personReviews.map((review, idx) => (
                            <div key={idx}>
                                <div className='pt-5 flex'>
                                    <div className='h-12 w-12 rounded-full bg-gray-300 overflow-hidden'>
                                        <Image src={review.userimgsrc || ''} alt='user image' width={50} height={0}/>    
                                    </div>  
                                    <div className='pl-4 py-1 lg:w-9/10'>
                                        <h3 className='font-semibold'>{review.username}</h3>
                                        <div className='flex justify-between '>
                                            <div className='flex space-x-1 text-yellow-400'>
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>  
                                            <h3 className='text-[11px] font-medium text-black/70'>{review.time}</h3>  
                                        </div>
                                    </div>      
                                </div>
                                <div className='py-3 text-black/60 text-base px-2'>
                                    {review.description}
                                </div>
                            </div>
                        ))}
                    </div>               
                </div>
            </div>
        </div>

        {/* Course Card */}
          <div className='relative [grid-area:first]'>
                <div>
                    <div className='bg-white p-4 rounded-t-xl sm:absolute lg:right-24 sm:right-10 sm:-top-52 lg:-top-52'>
                        {/* Course image */}
                        <Image alt='course image' src={priceImage || ''} width={300} height={0}/>
                        <div className='flex justify-between py-2'>
                            <h3 className='md:text-2xl text-lg font-bold lg:py-2 mr-1'>{disPrice}</h3>
                            <h3 className='md:text-lg text-lg text-black/50 line-through font-semibold lg:py-3 mr-1'>{mainPrice}</h3>
                            <h3 className='text-[18px] text-black/50 font-semibold
                             lg:py-3 mr-1'>{discount} OFF</h3>
                        </div>  
                        <div className='text-center lg:py-2 text-base text-[#49BBBD] font-semibold'>{discountPriceTime}</div>
                        <div className='py-3'>
                            <button className='w-full text-center text-white bg-[#49BBBD] rounded-md lg:py-3 py-1 font-semibold'>{buyBtnText}</button>
                        </div> 

                         {/* Course Features       */}
                        <div className='border-b-2 border-black/30 lg:mt-3 rounded'></div>
                        <div className='py-2'>
                            <h3 className='text-xl font-semibold lg:py-2'>{courseDetailHeading}</h3>
                            <p className='text-[10px] py-1 font-bold text-black/40'>
                            <TbSettingsFilled  className='text-[#49BBBD] text-[15px] inline-block mr-1.5'/>
                            {moneyBack}</p>
                            <p className='text-[10px] py-1 flex items-center font-bold text-black/40'>
                             <FaCamera className='text-[#49BBBD] text-[14px] inline-block mr-1.5'/>
                             
                             {deviceAccess}</p>
                            <p className='text-[10px] py-1 font-bold text-black/40'>
                            <MdRequestPage className='text-[#49BBBD] text-[15px] inline-block mr-1.5'/>{certification}</p>
                            <p className='text-[10px] py-1 font-bold text-black/40'>
                            <VscGraph className='text-[#39b4b6] text-[15px] inline-block mr-1.5'/>{moduls}</p>
                        </div>

                        {/* training section */}
                        <div className='border-b-2 border-black/30 lg:mt-5  rounded'></div>
                        <div className='lg:mt-5 mt-2'>
                            <h3 className='text-xl font-semibold lg:py-2'>{trainingHeading}</h3>
                            <p className='lg:w-64 text-[10px] text-black/50 font-medium py-1'>{trainingDesc}</p>
                        </div>
                        <div className='border-b-2 border-black/30 lg:mt-5 mt-1 rounded'></div>

                        {/* Share Section */}
                        <div className='mt-3'>
                            <h3  className='text-xl font-semibold lg:py-4 mb-2'>{shareHeading}</h3>
                            <div className='flex'>
                                <FaTwitter className='bg-black/50 text-white mr-3  h-6 w-6 rounded-full px-1.5' />
                                <FaFacebook className='bg-black/50 text-white mr-3 h-6 w-6 rounded-full px-1.5'/>
                                <FaYoutube  className='bg-red-500 text-white mr-3 h-6 w-6 rounded-full px-1.5'/>
                                <FaInstagram className='bg-black/50 text-white mr-3 h-6 w-6 rounded-full px-1.5'/>
                                <FaTelegramPlane className='bg-black/50 text-white mr-3 h-6 w-6 rounded-full px-1.5'/>
                                <FaWhatsapp  className='bg-black/50 text-white mr-3 h-6 w-6 rounded-full px-1.5'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
    </section>
  )
}

export default CourseDetailReview