import Image from 'next/image';
import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface BookCard {
  imgsrc?: string;
  bookname?: string;
  bookprice?: string;
}

interface Book {
    aboutbtntext?: string;
    coursebtntext?: string;
    notesbtntext?: string;
    projectbtntext?: string;
    podcastbtntext?: string;
    bookbtntext?: string;
    reviewbtntext?: string;
    coursetitle?: string;
    bookcard?: BookCard[];
}

const LiteratureBookSection:React.FC<Book> = ({aboutbtntext, coursebtntext, notesbtntext, projectbtntext, podcastbtntext, bookbtntext, reviewbtntext, coursetitle, bookcard=[]}) => {

  const [ isActive  , setIsActive ] = useState<number | null>(5)

  const handleActive = (index: number) => {
    setIsActive(index === isActive ? null : index)
  }

  const backArrowBtn = () => {
     if(isActive === 1) return
     setIsActive((prev) => (prev !== null ? prev - 1 : 0))
  }

  const nextArrowBtn = () => {
     if(isActive === 5) return
     setIsActive((prev) => (prev !== null ? prev + 1 : 0))
  }

  return (
    <div className='w-9/11 mx-auto mt-10'>
        <div>
            <div className='grid grid-cols-3 gap-2 sm:grid-cols-7 lg:w-8/10 justify-between'>
                <button onClick={() => handleActive(0)} className={`font-semibold text-[#696969] ${isActive === 0 ? 'bg-[#49BBBD] text-white' : 'bg-[#bbbbbb] hover:bg-gray-300  text-[#696969]'} w-20 lg:w-24 py-1.5 rounded`}>{aboutbtntext}</button>
                <button onClick={() => handleActive(1)} className={` font-semibold text-[#696969] ${isActive === 1 ? 'bg-[#49BBBD] text-white' :' bg-[#bbbbbb] hover:bg-gray-300  text-[#696969]'} w-20 lg:w-24 py-1.5 rounded`}>{coursebtntext}</button>
                <button onClick={() => handleActive(2)} className={` font-semibold text-[#696969] ${isActive === 2 ? 'bg-[#49BBBD] text-white' :' bg-[#bbbbbb] hover:bg-gray-300  text-[#696969]'} w-20 lg:w-24 py-1.5 rounded`}>{notesbtntext}</button>
                <button onClick={() => handleActive(3)} className={` font-semibold  ${isActive === 3 ? 'bg-[#49BBBD] text-white'  : 'bg-[#bbbbbb] hover:bg-gray-300  text-[#696969]'} w-20 lg:w-24 py-1.5 rounded`}>{projectbtntext}</button>
                <button onClick={() => handleActive(4)} className={`font-semibold text-[#696969] ${isActive === 4 ? 'bg-[#49BBBD] text-white' : 'bg-[#bbbbbb] hover:bg-gray-300  text-[#696969]'} w-20 lg:w-24 py-1.5 rounded`}>{podcastbtntext}</button>
                <button onClick={() => handleActive(5)} className={` font-semibold text-[#696969] ${isActive === 5 ? 'bg-[#49BBBD] text-white' : 'bg-[#bbbbbb] hover:bg-gray-300  text-[#696969]'} w-20 lg:w-24 py-1.5 rounded`}>{bookbtntext}</button>
                <button onClick={() => handleActive(6)} className={`font-semibold text-[#696969] ${isActive === 6 ? 'bg-[#49BBBD] text-white' : 'bg-[#bbbbbb] hover:bg-gray-300  text-[#696969]'} w-20 lg:w-24 py-1.5 rounded`}>{reviewbtntext}</button>
            </div>
            <div className='mt-10'>
                <h3 className='text-2xl font-semibold'>{coursetitle}</h3>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-3 lg:gap-5 mt-5'>
                  {bookcard.map((book, idx) => (
                    <div className='shadow-xl rounded-xl ' key={idx}>
                        <div className='p-4'>
                          <div className='lg:max-h-72 sm:h-72 h-60 overflow-hidden'>
                             <Image className='w-full sm:h-72 h-60 rounded-xl' alt='book image' src={book.imgsrc || ''} width={200} height={0} />
                          </div>
                          <div className='flex justify-between  py-5'>
                              <h3 className='text-lg'>{book.bookname}</h3>
                              <p className='text-[#49BBBD] text-xl font-extrabold'>{book.bookprice}</p>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-center gap-2 py-10 items-center'>
                   <div onClick={() => backArrowBtn()} className='bg-[#49BBBD]/30 text-[#49BBBD] text-xl lg:p-3 p-2 font-bold hover:bg-[#49BBBD] hover:text-white'><IoIosArrowBack /></div>
                   <div onClick={() => handleActive(1)} className={`text-xl  px-2.5 lg:px-4 py-1 lg:py-2 ${isActive === 1 ?'bg-[#49BBBD] text-white' : 'hover:bg-[#49BBBD]/30'}`}>1</div>
                   <div onClick={() => handleActive(2)} className={`text-xl px-2.5 lg:px-4 py-1 lg:py-2 ${isActive === 2 ?'bg-[#49BBBD] text-white' : 'hover:bg-[#49BBBD]/30'}`}>2</div>
                   <div onClick={() => handleActive(3)} className={`text-xl px-2.5 lg:px-4 py-1 lg:py-2 ${isActive === 3 ?'bg-[#49BBBD] text-white' : 'hover:bg-[#49BBBD]/30'}`}>3</div>
                   <div onClick={() => handleActive(4)} className={`text-xl px-2.5 lg:px-4 py-1 lg:py-2 ${isActive === 4 ?'bg-[#49BBBD] text-white' : 'hover:bg-[#49BBBD]/30'}`}>4</div>
                   <div onClick={() => handleActive(5)} className={`text-xl  px-2.5 lg:px-4 py-1 lg:py-2 ${isActive === 5 ?'bg-[#49BBBD] text-white' : 'hover:bg-[#49BBBD]/30'}`}>5</div>
                   <div onClick={() => nextArrowBtn()} className='bg-[#49BBBD]/30 text-[#49BBBD] text-xl lg:p-3 p-2 font-bold hover:bg-[#49BBBD] hover:text-white'><IoIosArrowForward /></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiteratureBookSection