import React from "react";
import { LandingPage } from "../components/LandingPage";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Eyes from "../components/Eyes";
import FeaturedProjects from "../components/FeaturedProjects";
import Reviews from "../components/Reviews";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import LocomotiveScroll from 'locomotive-scroll';


export default function Home() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <FeaturedProjects />
      <Reviews />
      <Cards />
      
    </>
  );
}
