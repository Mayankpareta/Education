// import React from "react";

// function CreativeSection({
//   heading,
//   description,
// }: {
//   heading?: string;
//   description?: string;
// }) {
//   return (
//     <div className=" flex justify-center px-2  mt-4 sm:mt-20 py-5">
//       <div className="lg:w-[1600px]">
//         {/* heading */}
//         <div className="flex justify-center text-2xl md:text-4xl font-bold ">
//           <h2 className="text-center">{heading}</h2>
//         </div>

//         {/* description */}
//         <div className="text-center lg:w-full md:w-[800px] lg:px-20 text-base text-[#696984] mt-5">
//           <p className="text-center">{description}</p>
//         </div>

//         {/* images */}
//         <div className="flex flex-col sm:flex-row sm:justify-center " >
//           <div className="grid sm:gap-10 grid-cols-1 md:grid-cols-2 ">
//             <div className='relative bg-[url("/images/Rectangle19.png")]  sm:bg-center bg-contain bg-no-repeat  flex flex-col justify-center gap-4 items-center mt-4'>
//               <h2 className=" text-white font-semibold md:text-xl text-base">
//                 FOR INSTRUCTORS
//               </h2>
//               <button className=" px-4 py-2 bg-transparent border-2 font-semibold text-white rounded-3xl ">
//                 Start a class today
//               </button>
//             </div>
//             <div className='relative mt-6 bg-[url("/images/what2.png")] w-[150px]  sm:w-[400px] sm:bg-center bg-contain bg-no-repeat min-h-[203px]   flex flex-col justify-center gap-4 items-center'>
//               <h2 className=" text-white text-xl font-medium sm:font-semibold sm:text-2xl">
//                 FOR INSTRUCTORS
//               </h2>
//               <button className=" px-4 py-2 bg-[#23BDEE]/60  font-semibold text-white rounded-3xl ">
//                 Start a class today
//               </button>
//             </div>  
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CreativeSection;

import React from "react";
 
function CreativeSection({
  heading,
  description,
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <div className="px-2 lg:px-40 mt-4 sm:mt-20 py-5 max-w-9xl">
      <div>
        {/* heading */}
        <div className="flex justify-center text-2xl md:text-4xl font-bold w-full">
          <h2 className="text-center">{heading}</h2>
        </div>
 
        {/* description */}
        <div className=" w-full text-center lg:px-20 text-base text-[#696984] mt-5">
          <p className="">{description}</p>
        </div>
 
        {/* images */}
        <div className="flex flex-col sm:flex-row sm:justify-center " >
          <div className="flex flex-col sm:flex-row sm:gap-10 grid-cols-1 sm:grid-cols-2 ">
            <div className='relative bg-[url("/images/Rectangle19.png")] min-w-[200px]  sm:w-[300px] md:w-[330px] lg:w-[400px] bg-center bg-contain bg-no-repeat min-h-[203px] sm:h-[300px] flex flex-col justify-center gap-4 items-center mt-4'>
              <h2 className=" text-white font-semibold text-xl sm:text-2xl">
                FOR INSTRUCTORS
              </h2>
              <button className=" px-4 py-2 bg-transparent border-2 font-semibold text-white rounded-3xl ">
                Start a class today
              </button>
            </div>
            <div className='relative mt-6 bg-[url("/images/what2.png")] min-w-[200px]  sm:w-[300px] md:w-[330px] lg:w-[400px] bg-center bg-contain bg-no-repeat min-h-[203px]   flex flex-col justify-center gap-4 items-center'>
              <h2 className=" text-white text-xl font-medium sm:font-semibold sm:text-2xl">
                FOR INSTRUCTORS
              </h2>
              <button className=" px-4 py-2 bg-[#23BDEE]/60  font-semibold text-white rounded-3xl ">
                Start a class today
              </button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CreativeSection;