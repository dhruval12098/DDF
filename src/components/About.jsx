import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="relative w-full py-12 px-10 bg-[var(--color-accent)] rounded-t-xl z-20 max-md:px-4">
      <div className="top ">
        <h1 className="font-display text-5xl max-md:text-3xl">
          We build social-first strategy, content systems, and performance
          creative that{" "}
          <span className="underline underline-offset-5 decoration-2">
            drives demand,
          </span>{" "}
          community, and revenue.
        </h1>
      </div>
      <div className="center mt-[6vw] flex justify-between pt-10 border-t border-black border-b pb-10 max-md:mt-8 max-md:flex-col max-md:gap-6">
        <h3>What you can expect:</h3>
        <div className="w-[25vw] flex flex-col gap-6 max-md:w-full">
          <h3>
            We don&apos;t just post. We build strategy, creative direction, and
            content engines that make audiences stop, follow, and convert.
          </h3>
          <h3>
            We partner with founder-led brands, ecommerce teams, and local
            businesses ready to grow their social presence and sales.
          </h3>
          <h3>
            Since 2023, we&apos;ve helped brands turn attention into customers
            with always-on content and paid social.
          </h3>
          <div>
            <h3>Clear strategy. Consistent content. Measurable growth.</h3>
          </div>
        </div>
      </div>
      <div className="bottom w-full pt-10 flex justify-between max-md:flex-col max-md:gap-8">
        <div className="right w-[40%] h-[27vw] max-md:w-full max-md:h-auto">
          <h3 className="font-grotesk text-8xl mb-5 max-md:text-4xl">
            How we can help
          </h3>
          <a
            href="/about"
            className="group w-1/2 relative overflow-hidden rounded-full bg-black px-3 py-2 text-left flex items-center justify-between gap-3 text-white"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Read More
            </span>
            <span className="relative z-10 border border-white rounded-full p-2 transition-colors duration-300 group-hover:border-black text-white group-hover:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </span>
            <span className="absolute inset-0 rounded-full bg-white translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 group-[&:not(:hover)]:-translate-y-full"></span>
          </a>
        </div>
        <div className="left w-[50%] bg-red-500 h-[32vw] rounded-xl object-cover object-center overflow-hidden max-md:w-full max-md:h-[60vw]">
          <img src="./image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
