"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/Logo.jpg";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="relative bg-[#FFFFFF] shadow-md sm:shadow-2xl  w-[90%] sm:w-[80%] h-fit  flex justify-between items-center py-1 px-3 sm:px-[2%] sm:py-2 rounded-md sm:rounded-lg my-3">
      <Link
        href={`/`}
        className=" w-[25%] h-[5vh] sm:h-fit sm:w-[10%]   flex justify-center items-center "
      >
        <Image
          src={Logo}
          width={100}
          height={10}
          alt="Logo "
          className="w-full h-full"
        />
      </Link>
      <nav className="hidden sm:flex">
        <ul className="flex gap-3">
          <li className="p-1 text-sm  font-semibold">
            {" "}
            <Link href={`/`}>Home</Link>
          </li>
          <li className="p-1 text-sm  font-semibold">
            {" "}
            <Link href={`/`}>Company</Link>
          </li>
          <li className="p-1 text-sm  font-semibold">
            {" "}
            <Link href={`/`}>Placements</Link>
          </li>
          <li className="p-1 text-sm  font-semibold">
            {" "}
            <Link href={`/`}>Courses</Link>
          </li>
          <li className="p-1 text-sm  font-semibold">
            {" "}
            <Link href={`/`}>Career</Link>
          </li>
          <li className="p-1 text-sm  font-semibold">
            {" "}
            <Link href={`/`}>Recruiting & Staffing</Link>
          </li>
        </ul>
      </nav>

      <div className="hidden sm:block">
        <button className=" bg-[#253EA7] text-white px-2 py-2 rounded-md border-none text-base">
          Book a consultation
        </button>
      </div>
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-black">
          {menuOpen ? <FaPlus className="rotate-45 text-lg  font-bold"/> : <RxHamburgerMenu className="text-lg font-bold"/>}
        </button> 
      </div>
      {menuOpen && (
        <nav className="absolute top-10 right-0 w-[60%] bg-white shadow-lg sm:hidden">
          <ul className="flex flex-col gap-3 p-4">
            <li className="p-1 text-sm font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="p-1 text-sm font-semibold">
              <Link href="/">Company</Link>
            </li>
            <li className="p-1 text-sm font-semibold">
              <Link href="/">Placements</Link>
            </li>
            <li className="p-1 text-sm font-semibold">
              <Link href="/">Courses</Link>
            </li>
            <li className="p-1 text-sm font-semibold">
              <Link href="/">Career</Link>
            </li>
            <li className="p-1 text-sm font-semibold">
              <Link href="/">Recruiting & Staffing</Link>
            </li>
            <li className="p-1 text-sm  ">
              <button className="bg-[#253EA7] text-white px-1 py-1 rounded-md border-none font-light text-sm w-full">
                Book a consultation
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
