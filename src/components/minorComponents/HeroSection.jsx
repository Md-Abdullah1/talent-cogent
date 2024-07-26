import React from "react";
import Hero from "../../../public/Hero.jpg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center my-3 gap-14">
      <div className="flex flex-col gap-5 items-center p-2 w-[50%]">
        <h2
          className={`text-5xl font-semibold  w-[100%] text-center leading-[10vh]`}
        >
          Excellence in
          <span className="text-[#253EA7]"> Recruting </span>& Technology
          Leadership
        </h2>
        <p className={`w-[100%] text-center `}>
          Your Premier IT Service Company, Recruitment Consultancy, and Software
          Training Institute. At Talent Cogent, we're your strategic partner in
          navigating the ever-evolving landscape of technology.
        </p>
        <button className="text-white bg-[#253EA7] w-fit p-2 rounded-md">
          Get Started
        </button>
      </div>

      <div className={`w-[40%]  p-2 h-[60vh]  `}>
        <Image
          src={Hero}
          className="h-full w-full rounded-xl"
          height={70}
          width={50}
          alt="Hero Picture"
        />
      </div>
      <div className={`w-[70%] h-fit flex items-center justify-between border p-3 shadow-lg`}>
        <div className=" p-2 px-4 flex flex-col justify-center items-center ">
          <h5 className="text-[#253EA7] text-3xl font-semibold">1900+</h5>
          <p className="text-sm">Trusted By Students</p>
        </div>
        <div className=" p-2 px-4 flex flex-col justify-center items-center ">
          <h5 className="text-[#253EA7] text-3xl font-semibold">93+</h5>
          <p className="text-sm">Clients</p>
        </div>
        <div className=" p-2 px-4 flex flex-col justify-center items-center ">
          <h5 className="text-[#253EA7] text-3xl font-semibold">136+</h5>
          <p className="text-sm">Success Story</p>
        </div>
        <div className=" p-2 px-4 flex flex-col justify-center items-center ">
          <h5 className="text-[#253EA7] text-3xl font-semibold">7+</h5>
          <p className="text-sm">Courses</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
