/* eslint-disable no-unused-vars */
import React from "react";

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-[#F1F1F1] pt-1">
      <div className="text-structure mt-40 px-12 font-[FoundersGroteskSemiBold]">
        <div className="text-masker text-9xl leading-[6vw]">WE CREATE</div>
        <div className="text-masker text-9xl leading-[6vw]">EYE-OPENING</div>
        <div className="text-masker text-9xl leading-[6vw]">PRESENTATIONS</div>
      </div>
      <div className="border-t-[1px] border-[#B2B2B2] mt-32 flex justify-between items-center px-12 py-4">
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
      </div>
    </div>
  );
};

export default LandingPage;
