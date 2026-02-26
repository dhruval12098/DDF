import React from "react";

export const ServiceCard = () => {
  return (
    <div className="w-full h-screen flex gap-5 py-3 pt-10 px-2 max-md:h-auto max-md:flex-col max-md:px-4">
      <div className="w-1/2 h-full max-md:w-full">
        <h1 className="text-3xl max-md:text-2xl">Our Services</h1>
      </div>
      <div className="w-1/2 h-full grid grid-cols-2 grid-rows-2 gap-5 max-md:w-full max-md:grid-cols-1 max-md:grid-rows-none max-md:gap-4">
        <div className=" rounded-md bg-[#E1E1E1] h-full p-5 flex flex-col justify-between">
          <h1 className="font-grotesk text-5xl uppercase bold">Marketing</h1>
          <h4>3.2x avg ROAS</h4>
        </div>
        <div className=" rounded-md bg-[#E1E1E1] h-full p-5 flex flex-col justify-between">
          <h1 className="font-grotesk text-5xl uppercase bold">Branding</h1>
          <h4>15+ brand launches</h4>
        </div>
        <div className=" rounded-md bg-[#E1E1E1] h-full p-5 flex flex-col justify-between">
          <h1 className="font-grotesk text-5xl uppercase bold">Web Design</h1>
          <h4>40% faster load times</h4>
        </div>
        <div className=" rounded-md bg-[#E1E1E1] h-full p-5 flex flex-col justify-between">
          <h1 className="font-grotesk text-5xl uppercase bold">SEO</h1>
          <h4>2x organic growth</h4>
        </div>
      </div>
    </div>
  );
};
