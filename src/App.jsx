/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./styles/locomotive-Scroll.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Slider from "./components/Slider";
import About from "./components/About";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import EyesSection from "./components/EyesSection";
import Projects from "./components/Projects";

function App() {
  const scrollRef = useRef(null);

  const options = {
    smooth: true,
  };

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     lerp: 0.045,
  //     multiplier: 0.5,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <LocomotiveScrollProvider options={options} containerRef={scrollRef}>
      <main data-scroll-container ref={scrollRef}>
        <div className="w-full min-h-screen bg-[#F1F1F1]">
          <Navbar />
          <LandingPage />
          <Slider />
          <About />
          <EyesSection />
          <Projects />
        </div>
      </main>
    </LocomotiveScrollProvider>
  );
}

export default App;
