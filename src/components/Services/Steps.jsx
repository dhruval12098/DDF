import React from "react";

const Steps = () => {
  return (
    <>
    <div className="px-10 py-5 border-t border-zinc-500 max-md:px-4">
        <h1 className="font-grotesk text-6xl uppercase max-md:text-3xl">Holistic Approach</h1>
    </div>
    <div className="w-full mt-10">
      {[
        ["01. Phase", "Audit & Strategy"],
        ["02. Phase", "Content Planning"],
        ["03. Phase", "Production & Publishing"],
        ["04. Phase", "Paid Growth & Optimization"],
        
      ].map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 items-center border-b border-zinc-300 py-4 px-12 max-md:grid-cols-2 max-md:px-4 max-md:gap-2"
        >
          {/* Column 1 */}
          <h3 className="underline cursor-pointer">{item[0]}</h3>

          {/* Column 2 (NOW TRULY CENTERED) */}
          <p className="text-center max-md:text-right">{item[1]}</p>

          {/* Column 3 */}
          <p className="justify-self-end underline cursor-pointer max-md:col-span-2 max-md:justify-self-start">READ</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default Steps;
