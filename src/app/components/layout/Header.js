"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Pizza from "../icons/Pizza";
import Mobileicons from "../icons/Mobileicons";
import Close from "../icons/Close";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="shadow-md pb-[1rem] relative md:flex md:items-center md:justify-between px-[0.2rem] md:px-[4rem] md:pb-[1rem] md:py-[1rem] bg-white">
          <div className="flex md:justify-center items-center px-[1rem] pt-[1rem] md:pt-[0rem] ">
            <Pizza width={45} />
            <Link href="/" passHref>
              <h1 className="text-primary text-[1.2rem] lg:text-3xl font-semibold md:text-2xl mt-[0.5rem]">
                ST PIZZA
              </h1>
            </Link>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-8 cursor-pointer md:hidden"
          >
            {open ? <Close /> : <Mobileicons /> }
          </div>
          <nav
            className={`flex flex-col px-[2rem] pt-[0.666rem] pb-[2rem] gap-8 absolute bg-white z-[-1] left-0 w-full 
          md:w-auto transition-all duration-500 ease-in-out md:z-auto md:flex md:items-center md:flex-row md:mt-[1rem] md:static md:gap-8
           text-gray-700 font-semibold  ${
             open ? `top-[5rem]  h-auto` : `top-[-19rem] h-[0px]`
           }`}
          >
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <Link href="/" className="hover:text-primary">
              Menu
            </Link>
            <Link href="/" className="hover:text-primary">
              About
            </Link>
            <Link href="/" className="hover:text-primary">
              Contact
            </Link>
            <Link
              href="/login"
              className="bg-primary text-white text-center px-4 py-2 rounded-full w-[7rem] md:w-full "
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-primary text-white text-center px-4 py-2 rounded-full w-[7rem] md:w-full "
            >
              Register
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
