import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import projects from "../../data/projects.json";

const Portfolio = () => {
  const letterVariants = {
    initial: { y: "100%" },
    hover: { y: "0%" },
  };
  return (
    <div className="w-full mt-10 ">
      <div className="back px-10 max-md:px-4">
        <div className="cards w-full grid grid-cols-2 gap-7 mt-10 max-md:grid-cols-1">
          {projects.map((project, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                className="main w-full relative"
                initial="initial"
                whileHover="hover"
              >
                <div className="header flex gap-2 mb-2 items-center">
                  <div className="w-5 h-5 bg-black rounded-full"></div>
                  <h1 className="text-xl">{project.title}</h1>
                </div>
                <h1
                  className={`absolute flex overflow-hidden top-1/2 -translate-y-1/2 text-[var(--color-text)] z-[9] text-8xl max-md:hidden ${
                    isLeft
                      ? "left-full -translate-x-1/2"
                      : "right-full translate-x-1/2"
                  }`}
                >
                  {project.title.split("").map((item, idx) => (
                    <motion.span
                      key={`${project.id}-hover-${idx}`}
                      variants={letterVariants}
                      transition={{
                        ease: [0.33, 1, 0.68, 1],
                        delay: idx * 0.03,
                      }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>

                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="relative card w-full bg-red-300 h-[90vh] rounded-md overflow-hidden max-md:h-[55vh]">
                    <div className="w-full h-full rounded-md bg-green-400">
                      <img
                        className="object-cover w-full h-full object-center"
                        src={project.heroImage}
                        alt={project.title}
                      />
                    </div>
                  </div>
                </Link>
                <div className="label flex gap-5 mt-2 uppercase max-md:flex-wrap max-md:gap-2">
                  {project.labels.map((label) => (
                    <h1
                      key={`${project.id}-${label}`}
                      className="border border-black rounded-full px-4 py-1 "
                    >
                      {label}
                    </h1>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
