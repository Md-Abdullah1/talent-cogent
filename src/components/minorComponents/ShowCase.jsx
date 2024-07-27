import React from "react";
import Image from "next/image";
import Airbnb from "../../../public/clients/airbnb.jpg";
import ServiceNow from "../../../public/clients/serviceNow.jpg";
import Google from "../../../public/clients/google.jpg";
import BMS from "../../../public/clients/bms.jpg";
import Strapi from "../../../public/clients/Strapi.jpg";
import Microsoft from "../../../public/clients/microsoft.jpg";
import Fedex from "../../../public/clients/fedex.jpg";
import Hubspot from "../../../public/clients/hubspot.jpg";
import Atlassian from "../../../public/clients/atlassian.jpg";
import OYO from "../../../public/clients/oyo.jpg";
import OLA from "../../../public/clients/ola.jpg";
import Amazon from "../../../public/clients/amazon.jpg";
import Walmart from "../../../public/clients/walmart.jpg";
import GrubHub from "../../../public/clients/grubhub.jpg";
import Gatsby from "../../../public/clients/gatsby.jpg";
import Image1 from "../../../public/capibilities/Image1.jpg";
import Image2 from "../../../public/capibilities/Image2.jpg";
import Image3 from "../../../public/capibilities/Image3.jpg";
import Image4 from "../../../public/capibilities/Image4.jpg";

const ShowCase = () => {
  return (
    <div className={`w-[90%] sm:w-[80%] h-fit flex flex-col items-center gap-8 sm:gap-10  `}>
      <div className=" flex flex-col items-center gap-1">
        <h3 className={`text-lg sm:text-3xl font-semibold`}>
          Joining forces that define excellence
        </h3>
        <p className={`text-gray-400 text-xs sm:text-sm`}>
          Our Alumni Thrive in Top Fortune 500 Companies
        </p>
      </div>{" "}
      <div className="w-full flex justify-center items-center  sm:p-2 ">
        <div className=" w-[90%] sm:p-2 sm:w-[80%] h-fit flex flex-col sm:items-center sm:justify-center sm:flex-row ">
          <div className=" w-full sm:w-[18%] h-fit flex justify-between sm:justify-normal sm:flex-col gap-1 sm:gap-3 items-center">
            <div className=" w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Airbnb}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className=" w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Gatsby}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className=" w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={ServiceNow}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
          </div>
          <div className=" w-full sm:w-[18%] h-fit flex justify-between sm:justify-normal sm:flex-col gap-1 sm:gap-3 items-center">
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Google}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={BMS}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Strapi}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
          </div>
          <div className=" w-full sm:w-[18%] h-fit flex justify-between sm:justify-normal sm:flex-col gap-1 sm:gap-3 items-center">
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Microsoft}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Fedex}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Hubspot}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
          </div>
          <div className=" w-full sm:w-[18%] h-fit flex justify-between sm:justify-normal sm:flex-col gap-1 sm:gap-3 items-center">
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Atlassian}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={OYO}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={OLA}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
          </div>
          <div className=" w-full sm:w-[18%] h-fit flex justify-between sm:justify-normal sm:flex-col gap-1 sm:gap-3 items-center">
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Amazon}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={Walmart}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
            <div className="w-[28%] sm:w-full h-[7vh] sm:h-[9vh] sm:px-3 p-2  shadow-sm">
              <Image
                src={GrubHub}
                height={100}
                width={100}
                alt="client company logo"
                className="h-full w-full "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full  flex flex-col items-center gap-4 sm:gap-8">
        <div className=" flex flex-col items-center  gap-1">
          <h3 className={`text-xl sm:text-3xl font-semibold`}>Our Capabilities</h3>
          <p className={`text-gray-400 text-xs sm:text-sm`}>IT Recruitment & Staffing</p>
        </div>
        <div className="w-[80%] sm:w-[90%]   flex flex-col gap-2  items-center sm:items-start sm:flex-row justify-evenly h-fit p-2">
          <div className=" w-[70%] h-[25vh] sm:w-[28%] sm:h-[45vh] relative">
            <Image src={Image1} className="h-full w-full rounded-lg" />
            <p className="absolute text-white bg-[#375DFB] px-4 py-2 rounded-tl-lg rounded-br-lg top-0 opacity-85">
              Contract Staffing
            </p>
          </div>
          <div className="w-[100%] h-[30vh] sm:w-[28%] sm:h-[60vh] flex flex-row sm:flex-col gap-2 sm:gap-4 items-center ">
            <div className="w-[45%] h-full sm:w-full sm:h-[45%] relative rounded-lg ">
              <Image src={Image4} className="h-full w-full rounded-lg" />
              <p className="absolute text-white bg-[#375DFB] px-4 py-2 rounded-tl-lg rounded-br-lg top-0 opacity-85">
                Permanent Staffing
              </p>
            </div>
            <div className="w-[45%] h-full sm:w-full sm:h-[45%] relative rounded-lg ">
              <Image src={Image3} className="h-full w-full rounded-lg" />
              <p className="absolute text-white bg-[#375DFB] px-4 py-2 rounded-tl-lg rounded-br-lg top-0 opacity-85">
                Offshore
              </p>
            </div>
          </div>
          <div className="w-[70%] h-[25vh] sm:w-[28%] sm:h-[45vh] relative ">
            <Image src={Image2} className="h-full w-full rounded-lg" />
            <p className="absolute text-white bg-[#375DFB] px-4 py-2 rounded-tl-lg rounded-br-lg top-0 opacity-85">
              Onshore
            </p>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default ShowCase;
