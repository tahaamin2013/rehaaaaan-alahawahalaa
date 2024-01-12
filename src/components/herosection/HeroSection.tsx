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
      <div className="mt-6 md:-mt-10 items-center mx-16 text-black dark:text-white justify-center gap-64">
        <div className="flex flex-col md:flex-row justify-between w-full text-5xl md:text-7xl">
          <div className="flex flex-col justify-center text-center md:text-left font-extrabold">
          <TypeAnimation
                sequence={["Love Humans", 1000, "Think Positive", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <p className="font-normal text-2xl md:text-3xl">My Aim is Love, <br className="block md:hidden" /> No Poverty</p>
          </div>
        
        <div className="w-[512px] h-[661px] relative">
  <div className="w-[360px] h-[360px] left-[150.05px] top-[115.76px] absolute origin-top-left rotate-[24.27deg] rounded-[17px] border-4 border-black dark:border-white" />
  <div className="w-[360px] h-[360px] left-[179.44px] top-[178.23px] absolute origin-top-left rotate-[24.27deg] bg-violet-700 rounded-[17px] border-4 border-black dark:border-white" />
  <Image width={900} height={900} alt="Hero Section Image" draggable="false" className="w-[450px] h-[645px] left-[55.12px] top-0 absolute" src="/Rehan.png" />
</div>
        </div> 
        </div>
    </motion.div>
  );
};

export default HeroSection;
