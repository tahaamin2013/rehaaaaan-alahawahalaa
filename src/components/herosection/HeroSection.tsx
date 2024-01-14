"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-6 sm:-mt-10 items-center mx-0 sm:mx-20 text-black dark:text-white justify-center gap-64">
        <div className="flex flex-col sm:flex-row justify-between w-full text-5xl sm:text-7xl">
          <div className="flex flex-col justify-center text-center sm:text-left font-extrabold">
          <TypeAnimation
                sequence={["Love Humans", 1000, "Think Positive", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <p className="font-normal text-2xl sm:text-3xl">My Aim is Love, <br className="block sm:hidden" /> No Poverty</p>
          </div>
        
          <div className="w-[512px] h-[661px] relative">
  <div className="w-[278px] h-[280px]  sm:w-[278px] sm:h-[280px] left-[150.05px] top-11 sm:top-[115.76px] absolute origin-top-left rotate-[24.27deg] rounded-[17px] border-4 border-black dark:border-white" />
  <div className="w-[278px] h-[280px] sm:w-[278px] sm:h-[280px] left-[179.44px] top-28 sm:top-[178.23px] absolute origin-top-left rotate-[24.27deg] bg-violet-700 rounded-[17px] border-4 border-black dark:border-white" />
  <Image width={900} height={900} alt="Hero Section Image" draggable="false" className="w-[345px] h-[470px] mt-[3px] sm:mt-[70px] sm:w-[345px] sm:h-[470px] left-[85px] sm:left-[88px] top-0 absolute" src="/Rehan.png" />
</div>
        </div> 
        </div>
    </motion.div>
  );
};

export default HeroSection;
