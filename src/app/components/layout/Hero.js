import React from "react";
import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="flex justify-center items-center flex-col mt-[4rem] px-[2rem] h-100 md:h-[100vh] md:mt-[0rem] md:px-[0rem] ">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex justify-center items-start flex-col max-w-4xl mx-auto  ">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold py-4">
            Everything is better with a Pizza
          </h1>
          <p className="text-sm lg:text-base text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex justify-center items-center flex-col w-full md:flex md:flex-row md:justify-start md:items-start mt-[2rem] md:mt-[0rem] md:gap-5 md:py-4">
            <button className="bg-primary px-6 md:px-8 py-3 md:py-4 text-white font-semibold rounded-full flex gap-2 mb-[2rem]">
              Order Now
              <Right />
            </button>
            <button className="bg-[#F8F8F8] px-6 md:px-8 py-3 md:py-4 text-black font-semibold rounded-full flex gap-2 border border-gray-700">
              Learn More
              <Right />
            </button>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <div className="max-w-sm lg:max-w-full">
            <Image
              src="/pizza.png"
              alt="pizza"
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

