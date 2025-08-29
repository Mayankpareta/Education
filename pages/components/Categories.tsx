"use client";
import Image from "next/image";
import React from "react";

interface Card {
  imgsrc: string;
  heading: string;
  bgcolor: string; 
  description: string;
}

interface Category {
  title?: string;
  cards?: Card[];
}

const Categories: React.FC<Category> = ({ title, cards = [] }) => {
  return (
    <div className="flex justify-center">
    <div className="flex justify-center lg:max-w-[1600px] py-10">
    <div className="px-7 md:px-3 mt-10 lg:w-[1100px]"> {/* Added top margin to prevent overlap */}
      <div className="mb-6  max-w-5xl">
        <h2 className="text-left text-xl font-bold">{title}</h2> 
      </div>

      {/* Card grid */}
      <div className="min-h-72 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-15 gap-7 justify-center flex-wrap ">
        {cards.map((card, index) => (
          <div
            key={index}
            className="sm:w-56 w-64 h-full border border-gray-100 rounded-xl shadow-xl flex flex-col items-center justify-start text-center"
          >
            {/* image */}
            <div
              className={`h-20 w-20 flex justify-center items-center m-4 ${card.bgcolor}`}
            >
              <Image alt="svg" height={30} width={30} src={card.imgsrc} />
            </div>
            {/* heading & description */}
            <h1 className="font-bold">{card.heading}</h1>
            <h3 className="text-sm p-4 text-gray-700">{card.description}</h3>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Categories;
