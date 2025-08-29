import React from "react";
import Image from "next/image";

interface featureData {
  imgsrc: string;
  heading : string;
  p?: string;
  p1?: string;
  p2?: string;
  icon?: string;
  isImageRight?: boolean;
}

interface feature {
  title: string;
  description: string;
  features: featureData[];
}

const FeatureSection: React.FC<feature> = ({
  title,
  description,
  features = [],
}) => {
  return (
    <div className="flex justify-center">
    <div className="mt-9 md:mt-16 py-7 ">
      <div className="text-center">
        <h1 className="text-3xl font-semibold" 
        dangerouslySetInnerHTML={{ __html: title }}/>
        <p className="text-lg text-gray-500 my-4">{description}</p>
      </div>

      {/* images card */}
      <div className=" mt-16">
        {features.map((feature, index) => (
          < React.Fragment key={index} >
            <div className={`md:py-7 py-3 sm:flex justify-center ${feature.isImageRight ? 'flex-row-reverse' : ''}`}>
            <div>
              <Image
                src={feature.imgsrc}
                alt="image"
                width={500}
                height={300}
                className="object-contain"
              />
            </div>
            <div className="flex items-center">
            <div className="ps-10">
              <h1 className="text-3xl max-w-lg font-semibold"
                dangerouslySetInnerHTML={{ __html: feature.heading }}
              ></h1>
              <div className="py-5 flex max-w-2xl">
                {feature.icon && <Image src="/images/1.svg" className="mr-10" alt="icon" width={20} height={20} />}
                 <p className="max-w-md  text-gray-500" 
                dangerouslySetInnerHTML={{ __html: feature.p || "" }} />
              </div>
              <div className="py-5 flex max-w-2xl">
               {feature.icon && <Image src="/images/2.svg" alt="icon" width={20} height={20} />}
                {feature.icon && <p className="max-w-md ps-10 text-gray-500" 
                dangerouslySetInnerHTML={{ __html: feature.p1 || "" }} />}
              </div>
              <div className="py-5 flex max-w-2xl">
                {feature.icon && <Image src="/images/3.svg" alt="icon" width={20} height={20} />}
                {feature.icon && <p className="max-w-md ps-10 text-gray-500" 
                dangerouslySetInnerHTML={{ __html: feature.p2 || "" }} />}
              </div>
            </div>
            </div>
            </div>
          </React.Fragment>
        ))}
            <div className="text-center">
                <button className="border border-[#49BBBD]/60 text-[#49BBBD] px-5 py-2 rounded-full text-[13px]" >See more features</button>
            </div>
      </div>
    </div>
    </div>
  );
};

export default FeatureSection;
