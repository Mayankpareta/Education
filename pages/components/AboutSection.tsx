import React from 'react'


const aboutData = [
    {
        heading: "15K+",
        description: "Students"
    },
    {
        heading: "75%",
        description: "Total Students",
    },
    {
        heading: "35",
        description: "Main questions",
    },
    {
        heading: "26",
        description: "Chief experts",
    },
    {
        heading: "16",
        description: "Year of experience",
    },
    
]

function AboutSection(props : { heading?: string, description?: string, }) {
  return (
    <div className='flex justify-center '>
        <div className='px-2 py-16 md:py-20 lg:w-[1600px] '>
            {/* Heading and description */}
            <div className='text-center'>
                <h2 className=' text-2xl md:text-4xl text-black font-bold' >{props.heading}</h2>
            </div>
            <div className='text-center mt-5'>
                <p className='text-gray-700 text-sm md:text-lg max-w-[800px] mx-auto'>{props.description}</p>
            </div>  
             
            {/* Number data */}
            <div className='mt-10'>
                <div>
                    <div className='grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2'>
                        {aboutData.map((item, index) => (
                            // card
                            <div
                            className='p-3 md:p-6 rounded-lg  text-center'
                            key={index}>
                                <h3 className='ms:text-5xl text-4xl bg-gradient-to-r from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text'>{item.heading}</h3>
                                <p className='text-black text-md md:text-xl'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default AboutSection