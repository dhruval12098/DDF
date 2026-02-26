import React from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import Portfolio from "../components/Work/Portfolio";
import MainWorkEyes from "../components/Work/MainWorkEyes";


export default function Work() {
  return (
    <div className="pb-20">
      <MainWorkEyes />
      <div className="relative main w-full h-screen bg-[var(--color-accent)] px-10 pt-20 flex flex-col justify-between overflow-hidden max-md:h-[70vh] max-md:px-4 max-md:pt-16">
        <h1 className="font-grotesk uppercase text-9xl max-md:text-5xl">WORK</h1>
        <div className="relative flex flex-col items-center justify-center">
          <div className="w-[80vw] h-[5vw] rounded-md translate-y-2 bg-[#fffac1] z-40 max-md:w-[85vw] max-md:h-[8vw]"></div>
          <div className="absolute w-[60vw] h-[15vw] rounded-md translate-y-2 bg-[#ffe357] z-30 max-md:w-[75vw] max-md:h-[24vw] "></div>

        </div>
      </div>
      <div className="px-10 w-full h-[15vw] max-md:h-auto max-md:px-4 max-md:py-6">
        <h1 className="text-5xl max-md:text-3xl">
          Social-first campaigns and content systems built to drive growth.
        </h1>
      </div>
      <Portfolio />
    </div>
  );
}
