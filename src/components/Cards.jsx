import React from "react";

const Cards = () => {
  return (
    <div className="w-full h-screen bg-[var(--color-surface)] flex gap-5 px-10 py-10 max-md:h-auto max-md:flex-col max-md:gap-6 max-md:px-4">
      <div className="relative container h-[65vh] w-1/2 max-md:w-full max-md:h-[50vh]">
        <div className=" card w-full h-full rounded-xl bg-[var(--color-teal)] flex items-center justify-center ">
          <div>
            <img src="/logo1.svg" alt="Logo" className="h-40 w-auto block " />
          </div>
          <div className="absolute bottom-4 left-4 border rounded-full border-(--color-text)  px-4 py-1">
            <h1 className="text-(--color-text)">@2023 - 26</h1>
          </div>
        </div>
      </div>
      <div className=" container h-[65vh] flex gap-5 w-1/2 max-md:w-full max-md:h-auto max-md:flex-col">
        <div className="relative card w-full h-full bg-[#fd7600] rounded-xl flex items-center justify-center max-md:w-full max-md:h-[32vh]">
          <img src="/instagram.svg" alt="Logo" className="h-40 w-auto block " />

          <div className="absolute bottom-4 left-4 border rounded-full border-(--color-text)  px-4 py-1">
            <h1 className="text-(--color-text)">@2023 - 26</h1>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Cards;
