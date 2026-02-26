import React from "react";
import MainWorkEyes from "../components/Work/MainWorkEyes";
import Bottomsection from "../components/About/Bottomsection";

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen pt-28 mb-30 ">
      <div className="w-full h-[30vw] border-b border-zinc-500 px-10 pb-10 font-grotesk font-bold max-md:h-auto max-md:px-4 max-md:pb-6">
        <h1 className="text-9xl uppercase leading-none -mb-10 max-md:text-5xl max-md:mb-0">We Are</h1>
        <h1 className="text-9xl uppercase leading-none -mb-10 max-md:text-5xl max-md:mb-0">
          Dynamic Digital Forge
        </h1>
      </div>
      <div className="main w-full h-[30vw] flex gap-5 max-md:h-auto max-md:flex-col max-md:gap-6">
        <div className="w-1/2 h-full px-10 py-10 max-md:w-full max-md:px-4 max-md:py-6">
          <h1 className="text-4xl max-md:text-2xl">About DDF</h1>
        </div>
        <div className="w-1/2 h-full flex gap-3 max-md:w-full max-md:flex-col max-md:px-4">
          <div className="w-1/2 h-full flex flex-col gap-10 p-4 max-md:w-full max-md:gap-6 max-md:p-0">
            <p>
              Dynamic Digital Forge is a social media marketing agency focused
              on growth. We turn brand stories into content systems that drive
              reach, engagement, and sales.
            </p>
            <p>
              We combine strategy, creative direction, and performance insights
              to build consistent, high-performing social presence.
            </p>
          </div>
          <div className="w-1/2 h-full p-4 max-md:w-full max-md:p-0">
            <button className="border border-zinc-600 px-3 py-1 rounded-full">
              Our Work
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vw] px-10 overflow-hidden max-md:px-4">
        <img
          className="w-full h-full object-top object-cover rounded-lg"
          src="../public/maingroup.png"
          alt=""
        />
      </div>
      <div className="pt-10 border-b border-zinc-400 pb-10 px-10 max-md:px-4">
        <h1 className="text-5xl max-md:text-3xl">
          We help brands grow on social through strategy, content, and
          performance.
        </h1>
      </div>
      <div className="w-full h-[30vw] mt-10 flex gap-5 max-md:h-auto max-md:flex-col max-md:gap-6">
        <div className="w-1/2 h-full px-10 py-5 max-md:w-full max-md:px-4">
          <h4>We are Dynamic Digital Forge:</h4>
        </div>
        <div className="w-1/2 h-full px-10 py-5 flex flex-col gap-10 max-md:w-full max-md:px-4 max-md:gap-6">
          <h4 className="w-[25vw] max-md:w-full">
            A tight-knit team of strategists, creatives, and media buyers who
            build social brands that people remember and buy from.
          </h4>
          <h4 className="w-[25vw] max-md:w-full">
            We partner with founders and marketing teams who want better
            content, clearer positioning, and measurable results.
          </h4>
        </div>
      </div>
      <Bottomsection />
    </div>
  );
}
