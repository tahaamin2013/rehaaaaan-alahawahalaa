"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mt-16 sm:-mt-10 items-center mx-0 sm:mx-20 text-black dark:text-white justify-center">
        <div className="flex flex-col sm:flex-row justify-between w-full text-5xl sm:text-7xl">
          <div className="flex flex-col justify-center text-center items-center sm:items-start sm:text-left font-extrabold">
          <TypeAnimation
                sequence={["Love Humans", 1000, "Think Positive", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
              <p className="font-normal text-2xl sm:text-3xl">My Aim is Love, No Poverty</p>
              <Button className="w-fit mt-2 bg-primary text-white"><Link href="about-me" className="w-full h-full text-center flex items-center">About Me</Link></Button>
          </div>
        
          <div className="w-[300px] h-[436px] sm:w-[512px] sm:h-[661px] relative">
  <div className="w-[214px] h-[240px]  sm:w-[278px] sm:h-[280px] left-[150.05px] top-11 sm:top-[115.76px] absolute origin-top-left rotate-[24.27deg] rounded-[17px] border-4 border-black dark:border-white" />
  <div className="w-[198px] h-[240px] sm:w-[278px] sm:h-[280px] left-[179.44px] top-28 sm:top-[178.23px] absolute origin-top-left rotate-[24.27deg] bg-primary rounded-[17px] border-4 border-black dark:border-white" />
  <Image width={900} height={900} alt="Hero Section Image" draggable="false" className="w-[280px] h-[384px] mt-[22px] sm:mt-[70px] sm:w-[345px] sm:h-[470px] left-[76px] sm:left-[88px] top-0 absolute" src="/Rehan.png" />
</div>
        </div> 
        </div>
    </motion.div>
  );
};

export default HeroSection;
