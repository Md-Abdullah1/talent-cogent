import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../../public/logoFooter2.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full h-fit bg-[#162664] py-10 flex justify-center items-center text-white ">
      <footer className="w-[84%] flex items-start justify-evenly  ">
        <div className="w-[25%] flex flex-col gap-4">
          <Link href={`/`} className=" w-[70%] h-fit">
            <Image
              src={Logo}
              alt="logo"
              height={100}
              width={100}
              
              className="h-full w-full text-black "
            />
          </Link>
          <div>
            <p className="text-xl">
              Built with love in San Francisco,California, USA.
            </p>
          </div>
        </div>
        <div className="flex gap-10   ">
          <div className="p-1  flex flex-col gap-5 items-start">
            <h2 className="text-lg font-semibold">USA</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <h3>Call Us</h3>
              </li>
              <li>+1510-400-4470</li>
              <li>+1510-371-3088</li>
              <li>+1510-203-9247</li>
              <li>+1510-240-1100</li>
            </ul>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font">Email Us</h3>
              <a href="mailto:hr@talentcogent.com">hr@talentcogent.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font">Address</h3>
              <p className=" leading-7">
                4140 Irvington Ave
                <br />
                Fremont CA 94538
              </p>
            </div>
          </div>
          <div className="p-1  flex flex-col gap-5 items-start">
            <h2 className="text-lg font-semibold">India</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <h3>Call Us</h3>
              </li>
              <li>+91 90596 66582</li>
              <li>+91 95155 67159</li>
              <li>+91 83283 48856</li>
            </ul>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font">Email Us</h3>
              <a href="mailto:hr@talentcogent.com">hr@talentcogent.com</a>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font">Address</h3>
              <p className=" leading-7">
                10-3-14/B/8 Humayun <br /> Nagar Mehdipatnam <br />
                Hyd-28 Landmark: Opp
                <br /> Humayun police station
              </p>
            </div>
          </div>
          <div className="p-1  flex flex-col gap-5 items-start">
            <h2 className="text-lg font-semibold">Quick Links</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={`/`}>Home</Link>
              </li>
              <li>
                <Link href={`/`}>Courses</Link>
              </li>
              <li>
                <Link href={`/`}>Placements</Link>
              </li>
              <li>
                <Link href={`/`}>Recruiting & Staffing</Link>
              </li>
              <li>
                <Link href={`/`}>Company</Link>
              </li>
              <li>
                <Link href={`/`}>Careers</Link>
              </li>
            </ul>
          </div>
          <div className="p-1  flex flex-col gap-5 items-start">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href={`/`} className="flex items-center    gap-3">
                  <FaFacebook className="text-xl" />

                  <p>Facebook</p>
                </Link>
              </li>
              <li>
                <Link href={`/`} className="flex items-center    gap-3">
                  <FaInstagram className="text-xl" />

                  <p>Instagram</p>
                </Link>
              </li>
              <li>
                <Link href={`/`} className="flex items-center    gap-3">
                  <FaXTwitter className="text-xl" />

                  <p>X</p>
                </Link>
              </li>
              <li>
                <Link href={`/`} className="flex items-center    gap-3">
                  <FaLinkedin className="text-xl" />

                  <p>LinkedIn</p>
                </Link>
              </li>
              <li>
                <Link href={`/`} className="flex items-center    gap-3">
                  <FaYoutube className="text-xl" />

                  <p>YouTube</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
