import Image from 'next/image';
import React from 'react'

interface BlogTach {
    id?: number;
    imgsrc?: string;
    alt?: string;
}

interface techStack {
    title?: string;
    techStack?: BlogTach[]
}

const BlogTachStack:React.FC<techStack> = ({ title, techStack=[] }) => {
  return (
    <div className='py-10 flex justify-center'>
        <div className='px-3'>
            {/* title */}
            <div>
                <h3 className='font-bold py-5 text-start'>
                    {title}
                </h3>
            </div>
            {/* tach card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>               
                {techStack.map((item, index) => (
                    <div className='flex' key={index}>
                        <Image alt={item.alt || ''} src={item.imgsrc || ''} width={220} height={0} />
                    </div>
                ))}                
            </div>
        </div>
    </div>
  )
}

export default BlogTachStack