/* eslint-disable no-unused-vars */
import React from "react";
import contentImage from "../assets/images/content.jpg";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-5"
      className="w-full h-screen bg-[#F1F1F1] pt-1 overflow-hidden"
    >
      <div className="text-structure mt-40 px-12 font-[FoundersGroteskSemiBold]">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div
              key={index}
              className="text-masker text-9xl leading-[6vw] h-[6vw] flex items-end gap-3"
            >
              {index === 1 && (
                <div className="w-[8vw] h-[5.3vw] bg-red-300 rounded-lg overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={contentImage}
                    alt="content_image"
                  />
                </div>
              )}
              {item}
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] relative border-[#B2B2B2] mt-32 flex justify-between items-center px-12 py-4">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <span
              key={index}
              className="font-[NeueMontrealRegular] text-[#212121] tracking-wide"
            >
              {item}
            </span>
          );
        })}
        <div className="buttons flex gap-1 items-center">
          <span className="btn px-3 py-1 rounded-3xl text-[#212121] border-[1px] border-[#212121] font-[NeueMontrealRegular] text-sm cursor-pointer tracking-wide">
            START THE PROJECT
          </span>
          <span className="arrow p-1 rounded-full border-[1px] border-[#212121] flex justify-center items-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#212121"
              width={20}
              height={20}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </span>
        </div>
        <span className="scroll-down-btn absolute left-[50%] -translate-x-[50] mt-44 font-[NeueMontrealRegular] tracking-wide opacity-35 animate-bounce">
          Scroll down
        </span>
      </div>
    </div>
  );
};

export default LandingPage;
