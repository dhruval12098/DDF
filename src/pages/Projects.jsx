import React from "react";
import { useParams } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import projects from "../data/projects.json";

export default function Projects() {
  const locomotiveScroll = new LocomotiveScroll();
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug) || projects[0];

  if (!project) {
    return (
      <div className="pt-28 pb-10 px-10 max-md:px-4">
        <h1 className="text-4xl font-grotesk">Project not found</h1>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-10 relative max-md:pt-16">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative top w-full h-[60vw] rounded-xl z-20 max-md:h-auto"
      >
        <h1 className="px-10 text-9xl uppercase text-[#212121] font-grotesk max-md:px-4 max-md:text-5xl">
          {project.title}
        </h1>
        <div className="border-t border-zinc-600 w-full h-[30vw] flex gap-5 mt-30 pt-10 max-md:h-auto max-md:flex-col max-md:gap-6 max-md:pt-6">
          <div className="px-10 w-1/2 max-md:w-full max-md:px-4">
            <h5>Description</h5>
          </div>
          <div className="px-10 w-1/2 flex gap-5 max-md:w-full max-md:px-4">
            <div className="w-1/2 max-md:w-full">
              <h5>{project.description}</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-screen z-10 max-md:h-[55vh]">
        <img
          className="w-full h-full object-cover"
          src={project.heroImage}
          alt={project.title}
        />
      </div>
      <div className="w-full px-10 mt-10 h-[20vw] max-md:h-auto max-md:px-4">
        <h1 className="text-6xl max-md:text-3xl">{project.company}</h1>
        <p>{project.description}</p>
      </div>
      <div className="px-10 w-full mt-20 overflow-hidden max-md:px-4">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={project.coverImage}
          alt={`${project.title} cover`}
        />
      </div>
      <div className="w-full h-screen flex gap-5 mt-20 px-10 max-md:h-auto max-md:flex-col max-md:px-4">
        <div className="w-1/2 h-full overflow-hidden max-md:w-full max-md:h-[45vh]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={project.gallery[0]}
            alt={`${project.title} gallery 1`}
          />
        </div>
        <div className="w-1/2 h-full overflow-hidden max-md:w-full max-md:h-[45vh]">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={project.gallery[1]}
            alt={`${project.title} gallery 2`}
          />
        </div>
      </div>
      <div className="px-10 w-full mt-20 overflow-hidden max-md:px-4">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={project.gallery[2]}
          alt={`${project.title} gallery 3`}
        />
      </div>
    </div>
  );
}
