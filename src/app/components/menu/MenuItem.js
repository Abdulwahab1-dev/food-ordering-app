import React from 'react';
import Image from 'next/image';

const MenuItem = () => {
  return (
    <div className="p-4 rounded-md flex flex-col items-center justify-center py-[2rem] shadow-lg hover:shadow-md hover:shadow-slate-500">
      <Image src="/pizza.png" alt="Delicious Pepperoni Pizza" width={300} height={200} objectFit="contain" />
      <h1 className="font-semibold my-2 text-xl md:text-2xl">
        Pepperoni Pizza
      </h1>
      <p className="text-gray-600 text-sm md:text-xl my-[1.5rem] text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <button className="bg-primary text-white px-[2rem] py-[0.5rem] rounded-full font-semibold text-[1rem] md:py-[0.5rem] md:text-[1.3rem]">
        Add To Cart $12
      </button>
    </div>
  );
};

export default MenuItem;
