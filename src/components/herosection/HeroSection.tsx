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
      <div className="flex flex-col md:flex-row items-center mx-16 text-black dark:text-white justify-center gap-64">
        <div className="flex flex-row justify-between w-full text-7xl">
          <div className="flex flex-col justify-center font-extrabold">
          <TypeAnimation
                sequence={["Love Humans", 1000, "Think Positive", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <p className="font-normal text-3xl">My Aim is Love, No Poverty</p>
          </div>
        
        <div className="w-[512.17px] h-[661px] relative">
  <div className="w-[364.99px] h-[364.99px] left-[150.05px] top-[115.76px] absolute origin-top-left rotate-[24.27deg] rounded-[17px] border-4 border-black dark:border-white" />
  <div className="w-[364.99px] h-[364.99px] left-[179.44px] top-[178.23px] absolute origin-top-left rotate-[24.27deg] bg-violet-700 rounded-[17px] border-4 border-black dark:border-white" />
  <Image width={900} height={900} alt="Hero Section Image" className="w-[453.84px] h-[651.87px] left-[55.12px] top-0 absolute" src="/Rehan.png" />
</div>
        </div> 
        </div>
    </motion.div>
  );
};

export default HeroSection;
