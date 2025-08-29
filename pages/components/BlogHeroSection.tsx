import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface blog {
    title?: string;
    heading?: string;
    description?: string;
    buttonText?: string;
    imgsrc?: string;
}

const BlogHeroSection:React.FC<blog> = ({ title, description, heading, buttonText, imgsrc}) => {
  return (
    <div className='flex justify-center'>
    <div className='bg-[#9DCCFF]/20 lg:w-[1600px]'>
        <div className=' grid md:grid-cols-2 mt-12 grid-cols-1 gap-10 py-10'>
            <div className='flex justify-center'>
                <div className='max-w-[400px] ml-5'>
                    {/* small title */}
                    <h2 className='py-5' dangerouslySetInnerHTML={{ __html: title || '' }} />
                    {/* main heading */}
                    <div>
                        <h2 className='text-xl md:text-3xl py-3 font-bold text-[#2F327D]'>
                            {heading}
                        </h2>
                    </div>
                    {/* description */}
                    <div className='py-3 text-[#696984] text-sm md:text-base'>
                        <p>{description}</p>
                    </div>
                    {/* start learn button */}
                    <div className='py-3 text-sm md:text-base'>
                        <Link className='bg-[#49BBBD] text-white px-2 md:px-3 py-2 rounded-md' href='/' >{buttonText}</Link>
                    </div>
                </div>
            </div>
            {/* right image */}
            <div className='flex justify-center py-3'>
                <Image className='rounded-xl px-3 object-cover md:px-1' alt='Hero Image' src={imgsrc || '/images/BlogHeroImage.jpg'} width={490} height={0} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default BlogHeroSection
