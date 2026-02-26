import React from "react";
import { motion } from "framer-motion";

export const LandingPage = () => {
  const container = {
    initial: {},
    hover: {},
  };
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className="relative z-0 font-grotesk w-full h-screen pt-1 bg-[var(--color-surface)] max-md:h-auto max-md:pt-16 max-md:pb-10"
    >
      {" "}
      <div className="textstructur mt-37 px-10 max-md:mt-10 max-md:px-4">
        {["We Grow", "Social Media", "Brands"].map((item, index) => {
          return (
            <div className="masker flex gap-3">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="w-[9vw] h-[5.7vw] rounded-md relative top-[1.3vw] bg overflow-hidden object-cover object-center max-md:w-[18vw] max-md:h-[11vw] max-md:top-[2vw]"
                >
                  <img
                    src="https://images.unsplash.com/photo-1771681744660-d3ff70bc24a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    srcset=""
                  />
                </motion.div>
              )}
              <motion.h1
                initial={{ x: index === 1 ? 0 : 0 }}
                animate={{ x: index === 1 ? 0 : 0 }}
                className="text-[10vw] text-[#212121] uppercase leading-[7.2vw] max-md:text-[12vw] max-md:leading-[9vw]"
              >
                {item}
              </motion.h1>
            </div>
          );
        })}
      </div>
      <div className="border-t border-[#212121] mt-24 flex justify-between items-center p-3 font-display max-md:mt-10 max-md:flex-col max-md:items-start max-md:gap-4 max-md:px-4">
        {[
          "Social media marketing and content studio",
          "For founders, creators, and growth teams",
        ].map((item, index) => (
          <p className="text   ">{item}</p>
        ))}
        <motion.div
          className="start flex gap-1 items-center justify-between"
          whileHover="hover"
          variants={container}
          initial="initial"
        >
          <motion.div
            className="btn border-[1px] rounded-full px-4 py-1 "
            variants={{
              initial: { backgroundColor: "var(--color-accent)", color: "#000" },
              hover: { backgroundColor: "#000", color: "#fff" },
            }}
            transition={{ duration: 0.3 }}
          >
            Start Your Growth
          </motion.div>
          <motion.div
            className="border rounded-full p-2"
            variants={{
              initial: { backgroundColor: "var(--color-accent)", color: "#000" },
              hover: { backgroundColor: "#000", color: "#fff" },
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              variants={{
                initial: { fill: "#000" },
                hover: { fill: "#fff" },
              }}
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
