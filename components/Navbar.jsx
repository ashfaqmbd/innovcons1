"use client";

import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import Logo from "../images/Innovate-Logo-png.png"
import Link from "next/link";
import { GiWorld } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white sticky top-0 z-10 shadow-lg">
      <div className="h-4 md:h-20 flex justify-between items-center ">
        {/* <div className="w-35 h-35 p-7 ">
          <Image src={Logo} alt="logo" />
        </div> */}

        
          <div className="text-red-600 my-auto pt-1 font-bold text-[1.75rem] mx-auto md:mx-3 leading-5 tracking-tight">
            INN<span><GiWorld className="inline pb-1 text-[#122344]"/></span>VATE{" "}
            <span className="block text-[1rem] text-center tracking-widest text-[#122344] ">
              CONSULTING
            </span>          
        </div>
        <div className="hidden sm:block">
          <a
            href="#about"
            className="text-gray-600 text-[1rem] px-4 hover:text-red-500"
          >
            About US
          </a>
          <a
            href="#destinations"
            className="text-gray-600 text-[1rem] px-4 hover:text-red-500"
          >
            Destinations
          </a>
          <a
            href="#ielts"
            className="text-gray-600 text-[1rem] px-4 hover:text-red-500"
          >
            IELTS
          </a>
          <a
            href="#services"
            className="text-gray-600 text-[1rem] px-4 hover:text-red-500"
          >
            Services
          </a>
          <a
            href="#faq"
            className="text-gray-600 text-[1rem] px-4 hover:text-red-500"
          >
            FAQs
          </a>
          <Link
            className="text-[1rem] font-semibold p-3 rounded-lg text-white bg-blue-950 mx-4"
            href="/forms"
          >
            Virtual Consultation
          </Link>
        </div>
      </div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="block sm:hidden px-4  text-[2rem] text-gray-950"
      >
        <CiMenuBurger />
      </button>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } sm:hidden bg-[#122344] space-y-2 pb-3`}
      >
        <a
          href="#about"
          className="text-white  text-[1rem] pt-4 px-4 block hover:text-red-500 "
        >
          About US
        </a>
        <a
          href="#dest"
          className="text-white  text-[1rem] px-4 block hover:text-red-500"
        >
          Destinations
        </a>
        <a
          href="#ielts"
          className="text-white  text-[1rem] px-4 block hover:text-red-500 "
        >
          IELTS
        </a>
        <a
          href="#services"
          className="text-white  text-[1rem] px-4 block hover:text-red-500 "
        >
          Services
        </a>
        <a
          href="#faq"
          className="text-white  text-[1rem] px-4 block hover:text-red-500"
        >
          FAQs
        </a>
        <div className="text-center">
          <Link href="/forms">
            <button className="text-[1rem] font-semibold p-3 rounded-lg text-white bg-red-500 w-full mx-2 cursor-pointer">
              Virtual Consultation
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
