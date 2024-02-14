/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Slider = () => {
  return (
    <div
      data-scroll
      className="w-full bg-[#004D43] py-24 rounded-ss-3xl rounded-se-3xl"
    >
      <div className="slider-text border-t-[1px] border-b-[1px] border-[#4D837C] flex items-center whitespace-nowrap text-[#F1F1F1] font-[FoundersGroteskSemiBold] overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
          className="text-[26vw] leading-[14vw] pt-2 pb-14 pr-10 select-none"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
          className="text-[26vw] leading-[14vw] pt-2 pb-14 pr-10 select-none"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
          className="text-[26vw] leading-[14vw] pt-2 pb-14 pr-10 select-none"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Slider;
