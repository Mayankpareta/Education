import Image from 'next/image';
import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

interface Student {
    title?: string;
    leftimgsrc?: string;
    studentname?: string;
    studentemailid?: string;
    studentreviewone?: string;
    studentreviewtwo?: string;
    studentreviewthree?: string;
    creatorimgone?: string;
    creatorimgtwo?: string;
    creatorimgthree?: string;
    creatorimgfor?: string;
}

const SearchStudentSection:React.FC<Student> = ({ title, leftimgsrc, studentname, studentemailid, studentreviewone, studentreviewtwo, studentreviewthree, creatorimgone, creatorimgthree, creatorimgtwo, creatorimgfor}) => {
  return (
 <div className='my-7 bg-[#9DCCFF]/30 py-5'>
        <div className=' rounded-xl lg:w-9/12 w-10/12 mx-auto'>
            <h3 className='sm:text-2xl text-base font-semibold sm:py-10 py-5'>{title}</h3>
            <div className=' bg-white rounded-2xl sm:flex items-center py-5'>
            {/* left image */}
                <div>
                    <Image alt='call image' src={leftimgsrc || ''} width={350} height={0}/>
                </div>
                {/* right items */}
                <div className='lg:w-4/12 sm:w-4/12 w-9/10 mx-auto'>                   
                    <div className='flex items-center gap-2 pt-3'>
                       <h3 className='lg:text-xl text-base font-bold'>{studentname}</h3>                       
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                        <h3 className='text-[13px]'>{studentemailid}</h3>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                        <p className='text-[#696984] text-[11px] lg:text-[14px] '>{studentreviewone}</p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                        <p className='text-[#696984] text-[11px] lg:text-[14px] '>{studentreviewtwo}</p>
                    </div>
                    <div className='flex items-center gap-2 pt-2'>
                        <p className='text-[#696984] text-[11px] lg:text-[14px] '>{studentreviewthree}</p>
                    </div>
                    <div className='flex py-4 items-center gap-3'>
                        <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaTwitter /></div>
                        <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaFacebook /></div>
                        <div className='h-6 w-6 flex justify-center items-center text-[13px] bg-[#49BBBD] rounded-full text-white '><FaInstagram /></div>
                    </div>
                </div>  
                <div className='flex items-center gap-2 mx-auto sm:inline w-9/10 sm:w-1/10'>
                    <div className='h-14 w-14 bg-gry-400 mt-2 rounded-full flex justify-center overflow-hidden items-center'>
                        <Image src={creatorimgone || ''} className='h-14 ' alt='creator image' width={150} height={0} /> 
                    </div>
                    <div className='h-14 w-14 bg-gry-300 mt-3 rounded-full flex justify-center overflow-hidden items-center'>
                        <Image src={creatorimgtwo || ''} className='h-16' alt='creator image' width={170} height={0} /> 
                    </div>
                    <div className='h-14 w-14 bg-gry-300 mt-3 rounded-full flex justify-center overflow-hidden items-center'>
                        <Image src={creatorimgthree || ''} className='h-14' alt='creator image' width={180} height={0} /> 
                    </div>
                    <div className='h-14 w-14 bg-gry-300 mt-3 rounded-full flex justify-center overflow-hidden items-center'>
                        <Image src={creatorimgfor || ''} className='h-14 ' alt='creator image' width={120} height={0} /> 
                    </div>
                </div>              
            </div>
        </div>
    </div>    
  )
}

export default SearchStudentSection