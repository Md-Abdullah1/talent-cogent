import React from "react";
import Hero from "../../../public/Hero.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-3  gap-5 sm:gap-14">
      <div className="w-[80%] flex flex-col gap-5 items-center p-1 sm:p-2 sm:w-[50%]">
        <h2
          className={`w-full text-xl sm:text-5xl font-semibold  text-center sm:leading-[10vh]`}
        >
          Excellence in
          <span className="text-[#253EA7]"> Recruting </span>& Technology
          Leadership
        </h2>
        <p className={`w-[100%] text-center text-sm sm:text-base`}>
          Your Premier IT Service Company, Recruitment Consultancy, and Software
          Training Institute. At Talent Cogent, we &apos; re your strategic partner in
          navigating the ever-evolving landscape of technology.
        </p>
        <button className="text-white bg-[#253EA7] w-fit text-sm sm:text-base p-2 rounded-md">
          Get Started
        </button>
      </div>

      <div className={`w-[90%] sm:w-[40%]  p-2 h-[60vh]  `}>
        <Image
          src={Hero}
          className="h-full w-full rounded-xl"
          height={70}
          width={50}
          alt="Hero Picture"
        />
      </div>
      <div className={`w-[90%] gap-1 sm:w-[70%] h-fit flex items-center justify-between border rounded-md p-1 sm:p-3 shadow-lg`}>
        <div className="  sm:p-2 sm:px-4 flex flex-col gap-1 justify-center items-center ">
          <h5 className="text-[#253EA7] text-lg sm:text-3xl font-bold">1900+</h5>
          <p className="text-xs sm:text-sm text-center">Trusted By Students</p>
        </div>
        <div className="  sm:p-2 sm:px-4 flex flex-col gap-1 justify-center items-center ">
          <h5 className="text-[#253EA7] text-lg sm:text-3xl font-semibold">93+</h5>
          <p className="text-xs sm:text-sm text-center">Clients</p>
        </div>
        <div className="  sm:p-2 sm:px-4 flex flex-col gap-1 justify-center items-center ">
          <h5 className="text-[#253EA7] text-lg sm:text-3xl font-semibold">136+</h5>
          <p className="text-xs sm:text-sm text-center">Success Story</p>
        </div>
        <div className="  sm:p-2 sm:px-4 flex flex-col gap-1 justify-center items-center ">
          <h5 className="text-[#253EA7] text-lg sm:text-3xl font-semibold">7+</h5>
          <p className="text-xs sm:text-sm text-center">Courses</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
