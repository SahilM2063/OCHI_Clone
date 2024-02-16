/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
const EyesSection = () => {
  const [dotRotateValue, setDotRotateValue] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setDotRotateValue(angle + 180);
    });
  });

  return (
    <div
      data-scroll
      data-scroll-speed="0"
      className="w-full min-h-screen bg-[url('src/assets/images/eye-sec-bg.jpg')] bg-cover overflow-hidden flex justify-center items-center "
    >
      <div className="flex gap-10 cursor-pointer">
        <div className="eye w-[14vw] h-[14vw] rounded-full bg-white flex justify-center items-center">
          <div className="eye-black w-[58%] h-[58%] rounded-full bg-black relative flex justify-center items-center">
            <span className="z-10 font-[NeueMontrealRegular] text-xl text-white">
              PLAY
            </span>
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${dotRotateValue}deg)`,
              }}
              className="line px-1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
            >
              <div className="eye-dot w-5 h-full rounded-full bg-white"></div>
            </div>
          </div>
        </div>
        <div className="eye w-[14vw] h-[14vw] rounded-full bg-white flex justify-center items-center">
          <div className="eye-black w-[58%] h-[58%] rounded-full bg-black relative flex justify-center items-center">
            <span className="z-10 font-[NeueMontrealRegular] text-xl text-white">
              PLAY
            </span>
            <div
              style={{
                transform: `translate(-50%,-50%) rotate(${dotRotateValue}deg)`,
              }}
              className="line px-1 rotate-0 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5"
            >
              <div className="eye-dot w-5 h-full rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyesSection;
