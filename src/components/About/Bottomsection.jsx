import React from "react";

const Bottomsection = () => {
  return (
    <div className="w-full px-10 max-md:px-4">

      {/* Heading */}
      <div className="pb-5">
        <h1 className="text-5xl max-md:text-3xl">
          A world-class creative duo, backed by a team without borders.
        </h1>
      </div>

      {/* Images Section */}
      <div className="w-full flex gap-5 mb-30 max-md:flex-col max-md:gap-6">

        {/* Left Box */}
        <div className="w-1/2 max-md:w-full">
          <div className="w-full h-[50vw] max-md:h-[80vw] overflow-hidden rounded-lg">
            
            <img
              className="w-full h-full object-cover 
                         object-top 
                         md:object-center"
              src="/image.png"
              alt="Dhruv Bhalani"
            />

          </div>

          <h4 className="pt-2 text-lg">
            Dhruv Bhalani - Founder & CEO DDF
          </h4>
        </div>


        {/* Right Box */}
        <div className="w-1/2 max-md:w-full">
          <div className="w-full h-[50vw] max-md:h-[80vw] overflow-hidden rounded-lg">
            
            <img
              className="w-full h-full object-cover 
                         object-top 
                         md:object-center"
              src="/imagenew.png"
              alt="Ronak"
            />

          </div>

          <h4 className="pt-2 text-lg">
            Ronak - Manager at DDF
          </h4>
        </div>

      </div>

    </div>
  );
};

export default Bottomsection;