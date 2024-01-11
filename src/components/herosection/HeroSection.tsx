import React from "react";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center text-black dark:text-white justify-center gap-40">
      <div className=" w-[500px]">
        <h1 className="font-bold text-2xl">Hello, It's Me</h1>
        <h1 className="font-bold text-2xl">Rehan Allahwala</h1>
        <h1 className="font-bold text-2xl">And I'm</h1>
        <p>
          This is a demo personal portfolio as a part of course-based by
          JavaScript Mastery, built with React & NextJS themed with
          styled-components.
        </p>
        <div className="flex flex-row">
          <div><FaFacebookF /></div>
          <div><FaInstagram /></div>
          <div><FaInstagram /></div>  
        </div>
      </div>
      <div className="w-[400px] mt-4">
        <Image
          src="/Hero.png"
          alt="rehan-image"
          width={1000}
          height={100}
        />
        <div className="hidden">
          <BackgroundAnimation />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
