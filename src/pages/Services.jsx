import React from "react";
import Steps from "../components/Services/Steps";

import Reviews from "../components/Reviews";
import Info from "../components/Services/Info";
import { ServiceCard } from "../components/Services/ServiceCard";

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--color-surface)] pt-15">
      <div className="topsection py-10 ">
        <div className="head w-full h-[25vw] border-b border-zinc-600 px-10 flex items-center justify-start max-md:h-auto max-md:px-4 max-md:py-8">
          <h1 className="font-grotesk text-9xl text-[#212121] max-md:text-5xl">SERVICES</h1>
        </div>
        <div className="central px-10 flex items-center border-b border-zinc-600 py-10 max-md:px-4">
          <p className="text-[4vw] leading-none mb-10 max-md:text-2xl max-md:leading-snug max-md:mb-0">
            We plan, create, and optimize social-first marketing that drives
            leads, sales, and retention across channels.
          </p>
        </div>
        <div className="bottom w-full h-[30vw] flex gap-10 max-md:h-auto max-md:flex-col max-md:gap-6">
          <div className="w-1/2 h-full px-10 py-5 max-md:w-full max-md:px-4">
            <h1>We’re best positioned for 3 types of clients:</h1>
          </div>
          <div className="w-1/2 h-full flex gap-2 max-md:w-full max-md:flex-col max-md:px-4">
            <div className="w-1/2 h-full py-5 flex flex-col gap-10 max-md:w-full max-md:gap-6">
              <div className="w-[20vw] max-md:w-full">
                <h4 className="mb-3 underline">Founder-led brands</h4>
                <p>
                  D2C, local, and creator-led businesses ready to scale their
                  social presence and sales.
                </p>
              </div>
              <div className="w-[20vw] max-md:w-full">
                <h4 className="mb-3 underline">Ecommerce & retail</h4>
                <p>
                  Product-driven teams looking for consistent content, CRO
                  improvements, and paid social performance.
                </p>
              </div>
            </div>
            <div className="w-[20vw] h-full py-5 max-md:w-full">
              <h4 className="mb-3 underline">Service businesses</h4>
              <p>
                Clinics, gyms, agencies, and local services that want
                predictable leads and local visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Steps />
      <Reviews />
      <Info />
      <ServiceCard />
    </div>
  );
};

export default Services;
