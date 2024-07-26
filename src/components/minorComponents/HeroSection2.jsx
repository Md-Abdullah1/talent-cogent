import Image from "next/image";
import React from "react";
import Hero from "../.../../../../public/Hero.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const HeroSection2 = () => {
  return (
    <div className="w-[80%] my-5 h-fit  flex  justify-between items-center  ">
      <div className={`flex flex-col gap-8 p-2 px-5  w-[45%] `}>
        <div className="bg-[#EFF5FC] text-[#253EA7] w-fit p-1 rounded-3xl px-4">
          courses
        </div>
        <div className="flex flex-col gap-4">
          <h2 className={`text-4xl font-semibold  w-[70%]`}>
            {" "}
            Training the world's{" "}
            <span className="text-[#253EA7]"> Professional </span>
          </h2>
          <p className={`w-[75%] text-start `}>
            Empowering businesses with innovative <strong>AWS</strong> and{" "}
            <strong>Devops</strong> solutions to transform{" "}
            <strong> cloud infrastructure </strong>, streamline development
            processes, and achieve unparalleled efficiency and growth. Join the
            leaders in IT solutions and training to unlock your full potential.
          </p>
        </div>
        <button className="text-white bg-[#253EA7] w-fit p-2 rounded-md">
          Get a Demo
        </button>
      </div>
      <div className=" w-[50%] h-full  flex flex-col gap-2">
        <div className=" w-[100%]  ">
          <Image
            src={Hero}
            className="h-full w-full"
            height={100}
            width={100}
            alt="Hero Picture"
          />
        </div>
        <div className="w-full  flex flex-col justify-start items-center gap-3">
          <div>
            <h4 className="text-lg font-semibold">AWS & DevOps Training</h4>
            <p className="text-gray-500 text-sm">
              Cutting-edge DevOps practices to enhance development cycles
            </p>
          </div>
          <div className=" flex justify-between items-center  w-[80%]">
            <div className="flex gap-2">
              <div className="border-2 w-5 rounded-md"></div>
              <div className="border-2 w-5 rounded-md"></div>
              <div className="border-2 w-5 rounded-md"></div>
            </div>
            <div className="flex gap-3 justify-center">
              <div className=" border p-3 rounded-full ">
                <FaArrowLeft className="text-gray-700" />
              </div>
              <div className=" border p-3 rounded-full ">
                <FaArrowRight className="text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
