/* eslint-disable no-unused-vars */
import React from "react";
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.jpg";
import Project3 from "../assets/images/project3.jpg";
import Project4 from "../assets/images/project4.png";

const Projects = () => {
  return (
    <div className="w-full min-h-screen bg-zinc-200 py-20">
      <div className="project-title w-full px-20 border-b-[1px] border-[#B2B2B2] pb-10">
        <h1 className="font-[NeueMontrealRegular] text-5xl tracking-wide">
          Featured projects
        </h1>
      </div>
      <div className="cards w-full px-20 mt-10 grid grid-cols-2 gap-x-8 gap-y-16">
        <div className="cardContainer w-full flex flex-col justify-between items-start">
          <div className="card-head w-full flex gap-1 items-center">
            <svg
              className="w-6 h-6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>circle</title>
                <circle
                  cx="512"
                  cy="512"
                  r="256"
                  fill="#000000"
                  fillRule="evenodd"
                ></circle>
              </g>
            </svg>
            <span className="font-[NeueMontrealRegular] text-[16px] tracking-wide ">
              FYDE
            </span>
          </div>
          <div className="card w-full h-[88%] overflow-hidden group hover:scale-95 transition ease-in-out duration-500 rounded-lg cursor-pointer">
            <img
              src={Project1}
              alt="project1"
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition ease-in-out duration-700"
            />
          </div>
          <div className="tags w-full flex gap-1">
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              AUDIT
            </span>
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              COPYWRITING
            </span>
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              SALES DECK
            </span>
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              SLIDE DESIGN
            </span>
          </div>
        </div>
        <div className="cardContainer w-full flex flex-col justify-between items-start">
          <div className="card-head w-full flex gap-1 items-center">
            <svg
              className="w-6 h-6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>circle</title>
                <circle
                  cx="512"
                  cy="512"
                  r="256"
                  fill="#000000"
                  fillRule="evenodd"
                ></circle>
              </g>
            </svg>
            <span className="font-[NeueMontrealRegular] text-[16px] tracking-wide ">
              VISE
            </span>
          </div>
          <div className="card w-full h-[88%] overflow-hidden group hover:scale-95 transition ease-in-out duration-500 rounded-lg cursor-pointer">
            <img
              src={Project2}
              alt="project2"
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition ease-in-out duration-700"
            />
          </div>
          <div className="tags w-full flex gap-1">
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              AGENCY
            </span>
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              COMPANY PRESENTATION
            </span>
          </div>
        </div>
        <div className="cardContainer w-full flex flex-col justify-between items-start">
          <div className="card-head w-full flex gap-1 items-center">
            <svg
              className="w-6 h-6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>circle</title>
                <circle
                  cx="512"
                  cy="512"
                  r="256"
                  fill="#000000"
                  fillRule="evenodd"
                ></circle>
              </g>
            </svg>
            <span className="font-[NeueMontrealRegular] text-[16px] tracking-wide ">
              TRAWA
            </span>
          </div>
          <div className="card w-full h-[88%] overflow-hidden group hover:scale-95 transition ease-in-out duration-500 rounded-lg cursor-pointer">
            <img
              src={Project3}
              alt="project3"
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition ease-in-out duration-700"
            />
          </div>
          <div className="tags w-full flex gap-1">
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              BRAND IDENTITY
            </span>
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              DESIGN RESEARCH
            </span>
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              INVESTOR DECK
            </span>
          </div>
        </div>
        <div className="cardContainer w-full flex flex-col justify-between items-start">
          <div className="card-head w-full flex gap-1 items-center">
            <svg
              className="w-6 h-6"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>circle</title>
                <circle
                  cx="512"
                  cy="512"
                  r="256"
                  fill="#000000"
                  fillRule="evenodd"
                ></circle>
              </g>
            </svg>
            <span className="font-[NeueMontrealRegular] text-[16px] tracking-wide ">
              PREMIUM BLEND
            </span>
          </div>
          <div className="card w-full h-[88%] overflow-hidden group hover:scale-95 transition ease-in-out duration-500 rounded-lg cursor-pointer">
            <img
              src={Project4}
              alt="project4"
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition ease-in-out duration-700"
            />
          </div>
          <div className="tags w-full flex gap-1">
            <span className="p-1 px-4 text-sm tracking-wide font-[NeueMontrealRegular] border-[#212121] border rounded-3xl cursor-pointer">
              BRANDED TEMPLATE
            </span>
          </div>
        </div>
      </div>
      <div className="hover-btn w-[18%] m-auto mt-14 group p-2 bg-[#212121] hover:bg-black rounded-full text-white flex justify-between items-center gap-7 cursor-pointer">
        <span className="font-[NeueMontrealRegular] tracking-wide pl-3 text-sm">
          VIEW ALL CASE STUDIES
        </span>
        <div className="hover-btn-icon w-10 h-10 bg-white rounded-full scale-[0.23] group-hover:scale-[1] flex justify-center items-center transition ease-in-out duration-[0.4s]">
          <svg
            className=" hidden group-hover:block"
            viewBox="0 0 24 24"
            fill="none"
            width={22}
            height={22}
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
                d="M12 20L12 4M12 4L18 10M12 4L6 10"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Projects;
