/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./styles/locomotive-Scroll.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Slider from "./components/Slider";
import LocomotiveScroll from "locomotive-scroll";
import About from "./components/About";

function App() {
  let scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.045,
      multiplier: 0.5,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div id="main" data-scroll-container ref={scrollRef}>
      <div className="w-full min-h-screen bg-[#F1F1F1]">
        <Navbar />
        <LandingPage />
        <Slider />
        <About />
      </div>
    </div>
  );
}

export default App;
