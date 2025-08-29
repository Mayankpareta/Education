import Image from 'next/image';
import React from 'react'

interface card {
    imgsrc?: string;
    duretion?: string;
    heading?: string;
    Description?: string;
    writerImage?: string;
    writerName?: string;
    price?: string;
    priviousPrice?: string
}

interface marketing {
    title?: string;
    cards?: card[];
}


const BlogMarketingSection:React.FC<marketing> = ({ title, cards=[]}) => {
  return (
    <div className='flex justify-center py-10 mb-5'>
    <div className=' lg:max-w-[1600px]'>
        <div className='  md:mx-10'>
            {/* title */}
            <div>
                <h3 className='font-semibold py-3 ml-5'>{title}</h3>
            </div>
            {/* card */}
             <div>
               <div className='flex justify-center px-4'>
                 <div className='grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5'>
                    {cards.map((card, index) => (
                     <div key={index} className='shadow shadow-gray-200 px-2 py-5 bg-white rounded-xl'>
                        {/* card image */}
                         <div className='inline-block '>
                             <Image className=' rounded-xl min-h-[200px] w-full object-cover' src={card.imgsrc || ''} alt='' width={380} height={0}/>
                         </div>
                         {/* design and duretion */}
                         <div className='flex py-2'>
                             <h3 className=' text-[#696984] text-[10px]'>Design</h3>
                             <div className='w-full flex justify-end pr-3'>
                                 
                                 <h3 className='px-2 text-[10px] text-[#696984]'>{card.duretion}</h3>
                             </div>
                         </div>
                         {/* heading */}
                         <div>
                             <h3 className='text-[#252641] font-semibold'>{card.heading}</h3>
                         </div>
                         {/* description */}
                         <div>
                             <p className='text-[#696984] text-sm py-2'>{card.Description}</p>
                         </div>
                         <div className="flex py-4 px-2">
                            {/* user image */}
                             <div className='rounded-full w-7 h-7 bg-black/20 overflow-hidden'>
                                 <Image  alt='image' src={card.writerImage || ''} width={30} height={0} />
                             </div>
                             {/* user name */}
                             <h4 className='flex items-center pl-2'>{card.writerName}</h4>
                             <div className='flex justify-end items-center gap-3 text-[12px] w-full'>
                                {/* cut price */}
                                <h4 className='text-black/50 line-through'>{card.priviousPrice}</h4>
                                {/* discount price */}
                                <h4 className='text-[#49BBBD] text-[14px] font-bold'>{card.price}</h4>
                             </div>
                         </div>
                     </div> 
                    ))}
                 </div>
               </div>                      
             </div>           
        </div>
    </div>
    </div>
  )
}

export default BlogMarketingSection