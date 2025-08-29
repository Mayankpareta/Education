import Image from 'next/image';
import React from 'react'

interface Checkout {
    heading?: string;
    subHeading?: string;
    paypalsrc?: string;
    americanExpressSrc?: string;
    visaSrc?: string;
    mastercardSrc?: string;
    cardName?: string;
    cardNumber?: string;
    expiration?: string;
    cvc?: string;
    save?: string;
    confirmBtnText?: string;
    summaryCard?: {
        imgsrc?: string;
        heading?: string;
        description?: string;
        price?: number;
    }[];
    SubtotalText?: string;
    CouponText?: string;
    taxText?: string;
    TotalText?: string;
}

const CheckOutHeroSection:React.FC<Checkout> = ({ 
    heading, subHeading, paypalsrc, americanExpressSrc, visaSrc,
    mastercardSrc, cardName, cardNumber, expiration, cvc, save, confirmBtnText,
    summaryCard = [],  SubtotalText, CouponText, TotalText, taxText,
    }) => {

    const subtotal = summaryCard.reduce((total, item) => total + (item.price || 0), 0) + 2;
    const couponDiscount = 0;
    const tax = 5 
    const total = Number(subtotal - couponDiscount + (10 * subtotal / 100)).toFixed(2); ; 

  return (
    <section className='lg:flex flex-col lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0 2xl:w-9/12 mx-auto py-5 justify-center'>
        <div className='lg:w-10/12 w-full px-4'>
            <div className='lg:mt-0 mt-18 md:flex gap-10'>

                {/* left form */}
                <div className='shadow-lg px-5 py-5 rounded-xl lg:w-6/10'>
                    <h3 className='text-2xl font-semibold'>{heading}</h3>
                    <p className='text-[11px] font-medium text-black/60 py-2'>{subHeading}</p>

                    {/* pay icons */}
                    <div className='grid grid-cols-2 lg:w-[400px] md:grid-cols-4 gap-4 py-2'>
                        <div className='flex justify-center items-center border border-gray-200 rounded-md py-1 h-14 overflow-hidden'>
                            <Image alt='paypal' src={paypalsrc || ''} width={50} height={0} />
                        </div>
                        <div className='flex justify-center items-center  h-14 overflow-hidden'>
                            <Image className='rounded-md' alt='americanExpress' src={americanExpressSrc || ''} width={80} height={0} />
                        </div>
                        <div className='flex justify-center items-center border border-gray-200 rounded-md h-14 overflow-hidden'>
                            <Image alt='visa' src={visaSrc || ''} width={90} height={0} />
                        </div>
                        <div className='flex justify-center items-center border border-gray-200 rounded-md h-14 overflow-hidden'>
                            <Image alt='mastercard' src={mastercardSrc || ''} width={40} height={0} />
                        </div>
                    </div>
                    {/* Form */}
                    <div>
                        {/* name input */}
                        <div className='py-3'>
                            <h4 className='text-[13px] font-bold text-black/60 pb-2'>{cardName}</h4>
                            <input
                            className='w-full border border-gray-200 rounded-md px-3 py-2 text-[13px]' 
                            type='text' 
                            placeholder='Enter name on card'
                            />
                        </div> 
                        {/* card number */}
                        <div className='py-2'>
                            <h4 className='text-[13px] font-bold text-black/60 pb-2'>{cardNumber}</h4>
                            <input
                            className='w-full border border-gray-200 rounded-md px-3 py-2 text-[13px]' 
                            type='text' 
                            placeholder='Enter Card Number'
                            />
                        </div> 
                        {/* expiration and cvc */}
                        <div className='pt-3 md:flex '>
                            <div className='w-full pr-2'>
                                <h4 className='text-[13px] font-bold text-black/60 pb-2'>{expiration}</h4>
                                <input
                                className='w-full border border-gray-200 rounded-md px-3 py-2 text-[13px]' 
                                type='text' 
                                placeholder='Enter Card Number'
                                />
                            </div>
                            <div className='w-full pt-2 md:pt-0'>
                                <h4 className='text-[13px] font-bold text-black/60 pb-2'>{cvc}</h4>
                                <input
                                className='w-full border border-gray-200 rounded-md px-3 py-2 text-[13px]' 
                                type='text' 
                                placeholder='Enter CVC'
                                />
                            </div>
                        </div>
                        {/* save checkbox  */}
                        <div className='flex items-center pt-2'>
                            <input type='checkbox' className='mr-2 h-2.5' />
                            <span className='text-[13px]  text-black/50'>{save}</span>
                        </div>
                        {/* payment button */}
                        <div className='pt-4'>
                            <button className='bg-[#49BBBD] text-white font-semibold text-[13px] px-5 py-2 rounded-md mt-3 w-full'>
                                {confirmBtnText}
                            </button>
                        </div>
                    </div>
                </div>

                {/* right summary */}
                <div className='md:w-4/10 md:mt-0 mt-5 bg-[#e5f1ff] px-5 py-2 rounded-xl  lg:h-[400px]'>
                    <div>
                        <h3 className='text-lg text-black/60 font-medium py-2'>Summary</h3>     
                    </div>

                    {/* Course card */}
                    <div>
                        {summaryCard.map((item, index) => (
                            <div key={index}>
                        <div  className='flex items-center gap-3 py-1'>
                            {/* image */}
                            <Image className='rounded-md' alt='summary image' src={item.imgsrc || ''} width={100} height={0} />
                            {/* heading, description, price */}
                            <div>
                                <h4 className='text-[13px]'>{item.heading}</h4>
                                <p className='text-[13px] text-black/50 py-1'>{item.description}</p>
                                <h4 className='text-[16px] font-medium'>${item.price}</h4>
                            </div>                            
                        </div>
                        <div className='border-b border-gray-300 my-1 w-full'></div>
                        </div>
                        ))}
                    </div>
                    {/* subtotal */}
                    <div className='flex justify-between items-center text-[13px] text-black/60 font-medium py-1'>
                        <h3>{SubtotalText}</h3>
                        <h3>${subtotal || '0'}</h3>
                    </div>
                    <div className='border-b border-gray-300 my-1 w-full'></div>
                    {/* coupon descount */}
                    <div  className='flex justify-between items-center text-[13px] text-black/60 font-medium py-1'>
                        <h3>{CouponText}</h3>
                        <h3>{couponDiscount || '0'} %</h3>
                    </div>
                    <div className='border-b border-gray-300 my-1 w-full'></div>
                    {/* tax */}
                    <div  className='flex justify-between items-center text-[13px] text-black/60 font-medium py-1'>
                        <h3>{taxText}</h3>
                        <h3>{tax || '0'}</h3>
                    </div>
                    <div className='border-b border-gray-300 my-1 w-full'></div>
                    {/* total price*/}
                    <div className='flex justify-between items-center text-[15px font-semibold py-1'>
                        <h3>{TotalText}</h3>
                        <h3>${total || '0'}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CheckOutHeroSection