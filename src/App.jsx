import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';


export default function App() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className="w-full min-h-screen bg-[var(--color-surface)] text-black">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
