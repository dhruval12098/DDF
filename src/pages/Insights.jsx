import React from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Insights() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="pt-28 pb-10 relative max-md:pt-16">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative top w-full h-[60vw] rounded-xl z-20 max-md:h-auto"
      >
        <h1 className="px-10 text-9xl uppercase text-[#212121] font-grotesk max-md:px-4 max-md:text-5xl">
          Project Name
        </h1>
        <div className="border-t border-zinc-600 w-full h-[30vw] flex gap-5 mt-30 pt-10 max-md:h-auto max-md:flex-col max-md:gap-6 max-md:pt-6">
          <div className="px-10 w-1/2 max-md:w-full max-md:px-4">
            <h5>Description</h5>
          </div>
          <div className="px-10 w-1/2 flex gap-5 max-md:w-full max-md:px-4">
            <div className="w-1/2 max-md:w-full">
              <h5>
                Full presentation ecosystem and product launch keynotes for
                Medallia Experience 2024, the flagship event of a global
                customer and employee experience leader.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-screen z-10 max-md:h-[55vh]">
        <img
          className="w-full h-full object-cover"
          src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_1-scaled.png"
          alt=""
        />
      </div>
      <div className="w-full px-10 mt-10 h-[20vw] max-md:h-auto max-md:px-4">
        <h1 className="text-6xl max-md:text-3xl">Comapny</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          quibusdam architecto ex quos debitis labore, beatae expedita deleniti
          dolore ea molestias ipsa ab vel amet dolorum dicta, tempore officiis
          voluptatum.
        </p>
      </div>
      <div className="px-10 w-full mt-20 overflow-hidden max-md:px-4">
        <img
          className="object-cover w-full h-full rounded-xl"
          src="https://ochi.design/wp-content/uploads/2025/08/medallia_35_11-1.png"
          alt=""
        />
      </div>
      <div className="w-full h-screen flex gap-5 mt-20 px-10 max-md:h-auto max-md:flex-col max-md:px-4">
        <div className="w-1/2 h-full overflow-hidden max-md:w-full max-md:h-[45vh]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
            alt=""
          />
        </div>
        <div className="w-1/2 h-full overflow-hidden max-md:w-full max-md:h-[45vh]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_2-scaled.png"
            alt=""
          />
        </div>
      </div>
       <div className="px-10 w-full mt-20 overflow-hidden max-md:px-4">
          <img
            className="object-cover w-full h-full rounded-xl"
            src="https://ochi.design/wp-content/uploads/2025/08/medallia_35_11-1.png"
            alt=""
          />
        </div>
    </div>
  );
}
