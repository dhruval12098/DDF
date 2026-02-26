import { motion } from "motion/react";
function Marquee() {
  return (
    <div data-scroll data-scroll-section  className="relative z-10 w-full bg-[var(--color-teal)] font-grotesk py-20 rounded-t-2xl mb-[-10] max-md:py-10">
      
      <div className="w-full border-t border-b border-[var(--color-surface)] overflow-hidden">
        <div className="flex whitespace-nowrap -translate-y-[8%] gap-10">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[26vw] leading-[0.62] text-[var(--color-surface)] max-md:text-[32vw]"
          >
            DYNAMIC DIGITAL FORGE
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[26vw] leading-[0.62] text-[var(--color-surface)] max-md:text-[32vw]"
          >
            DYNAMIC DIGITAL FORGE
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[26vw] leading-[0.62] text-[var(--color-surface)] max-md:text-[32vw]"
          >
            DYNAMIC DIGITAL FORGE
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
