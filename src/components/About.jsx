/* eslint-disable no-unused-vars */
import React from "react";
import aboutImage from "../assets/images/about-section.jpg";

const animateImagContainer = () => {
  let container = document.getElementById("img-container");
  let containerImg = document.querySelector("#img-container img");
  container.style.transform = "scale(0.97)";
  containerImg.style.transform = "scale(1.06)";
};

const removeAnimation = () => {
  let container = document.getElementById("img-container");
  let containerImg = document.querySelector("#img-container img");
  container.style.transform = "scale(1)";
  containerImg.style.transform = "scale(1)";
};

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-1.5"
      className="w-full py-20 bg-[#CDEA68] rounded-ss-3xl rounded-se-3xl"
    >
      <h1 className="w-full px-20 pb-14 text-[3.5vw] font-[NeueMontrealRegular] leading-[3.7vw]">
        Ochi is a strategic partner for fast-growing tech <br />
        businesses that need to{" "}
        <span className="abt-text relative cursor-pointer">
          raise funds
        </span>,{" "}
        <span className="abt-text relative cursor-pointer">sell products</span>,{" "}
        <br />
        <span className="abt-text relative cursor-pointer">
          explain complex ideas
        </span>
        , and{" "}
        <span className="abt-text relative cursor-pointer">
          hire great people
        </span>
        .
      </h1>

      <div className="w-full h-[1px] bg-[#99AD53]"></div>

      <div className="info w-full px-24 pb-28 pt-6 font-[NeueMontrealRegular] flex justify-start">
        <span className="info-title w-[50%] tracking-wide text-lg">
          What you can expect:
        </span>
        <div className="info-right flex flex-1 justify-start items-center gap-48">
          <div className="info-right-text flex flex-col items-start gap-8">
            <p className="leading-7 text-[16px] tracking-wide">
              We create tailored presentations to help <br />
              you persuade your colleagues, clients, or <br />
              investors. Whether it’s live or digital, <br />
              delivered for one or a hundred people.
            </p>
            <p className="leading-7 text-[16px] tracking-wide">
              We believe the mix of strategy and <br />
              design (with a bit of coffee) is what <br />
              makes your message clear, convincing, <br />
              and captivating.
            </p>
          </div>
          <div className="info-right-links flex flex-col items-start self-end">
            <h6 className="links-title mb-4 text-lg tracking-wide">S:</h6>
            <span className="text-link relative leading-5 mb-2 tracking-wide cursor-pointer">
              Instagram
            </span>
            <span className="text-link relative leading-5 mb-2 tracking-wide cursor-pointer">
              Behance
            </span>
            <span className="text-link relative leading-5 mb-2 tracking-wide cursor-pointer">
              Facebook
            </span>
            <span className="text-link relative leading-5 mb-2 tracking-wide cursor-pointer">
              Linkedin
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] mt-1 bg-[#99AD53]"></div>

      <div className="w-full pt-6 px-20 flex justify-between">
        <div className="title-box flex flex-col items-start gap-4">
          <span className="text-5xl font-[NeueMontrealRegular] ">
            Our approach :
          </span>
          <div
            onMouseEnter={animateImagContainer}
            onMouseLeave={removeAnimation}
            className="hover-btn group p-2 bg-[#212121] hover:bg-black rounded-full text-white flex justify-between items-center gap-7 cursor-pointer"
          >
            <span className="font-[NeueMontrealRegular] tracking-wide pl-3 text-sm">
              READ MORE
            </span>
            <div className="hover-btn-icon w-10 h-10 bg-white rounded-full scale-[0.23] group-hover:scale-[1] flex justify-center items-center transition ease-in-out duration-[0.4s]">
              <svg
                className=" hidden group-hover:block"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#212121"
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
                    d="M7 17L17 7M17 7H8M17 7V16"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div
          id="img-container"
          className="image-container w-[50%] rounded-[10px] overflow-hidden transition-all ease-in-out duration-1000"
        >
          <img
            src={aboutImage}
            alt="aboutImage"
            className="w-full h-full object-cover transition-all ease-in-out duration-1000"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
