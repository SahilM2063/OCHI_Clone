/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./styles/locomotive-Scroll.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Slider from "./components/Slider";
import About from "./components/About";
import LocomotiveScroll from "locomotive-scroll";
import EyesSection from "./components/EyesSection";
import Projects from "./components/Projects";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.7,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef}>
      <div className="w-full min-h-screen bg-[#F1F1F1]">
        <Navbar />
        <LandingPage />
        <Slider />
        <About />
        <EyesSection />
        <Projects />
      </div>
    </div>
  );
}

export default App;
