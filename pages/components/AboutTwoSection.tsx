import React from 'react'
import Image from 'next/image';

interface sectionProps {
    title : string
    description : string
    imgsrc : string
}

const AboutTwoSection = ({title , description , imgsrc } : sectionProps ) => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center grid-cols-2 gap-16 my-10'>
        <div className='sm:w-[500px]' >
          {/* title description and bitton */}
            <h1 className='text-xl font-semibold px-4'
             dangerouslySetInnerHTML={{ __html: title }}
             />
            <p className='text-gray-500 my-2 px-4 text-sm md:text-base'>{description}</p>
            <button className='underline text-gray-500 px-4'>learn more</button>
        </div>
        {/* image */}
        <div>
            <Image className='w-[400px] px-4' width={400} height={0} src={imgsrc} alt="abouttwo image" />
        </div>
    </div>
  )
}

export default AboutTwoSection