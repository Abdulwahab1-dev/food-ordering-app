import React from "react";
import MenuItem from "../menu/MenuItem";

const HomeMenu = () => {
  return (
    <section className="px-[2rem] md:px-[0rem] py-[2rem]">
      <div className="text-center">
        <h3 className="uppercase text-gray-600 font-semibold text-2xl md:text-4xl">
          Check Out
        </h3>
        <h2 className="text-primary font-bold text-2xl md:text-4xl italic">
          Menu
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3 md:gap-4 py-[2rem]">
        {/* <div className="bg-gray-300 p-4 rounded-md flex flex-col items-center justify-center py-[2rem]">
          <img src="/pizza.png" alt="Pizza" width={300} />
          <h1 className="font-semibold my-2 text-xl md:text-2xl">
            Pepperoni Pizza
          </h1>
          <p className="text-gray-600 text-sm md:text-xl my-[1.5rem] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="bg-primary text-white px-[2rem] py-[0.5rem] rounded-full font-semibold text-[1rem] md:py-[0.5rem] md:text-[1.3rem] ">
            Add To cart $12
          </button>
        </div> */}
        {/* <div className="bg-gray-300 p-4 rounded-md flex flex-col items-center justify-center py-[2rem]">
          <img src="/pizza.png" alt="Pizza" width={300} />
          <h1 className="font-semibold my-2 text-xl md:text-2xl">
            Pepperoni Pizza
          </h1>
          <p className="text-gray-600 text-sm md:text-xl my-[1.5rem] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="bg-primary text-white px-[2rem] py-[0.5rem] rounded-full font-semibold text-[1rem] md:py-[0.5rem] md:text-[1.3rem] ">
            Add To cart $12
          </button>
        </div> */}
        {/* <div className="bg-gray-300 p-4 rounded-md flex flex-col items-center justify-center py-[2rem]">
          <img src="/pizza.png" alt="Pizza" width={300} />
          <h1 className="font-semibold my-2 text-xl md:text-2xl">
            Pepperoni Pizza
          </h1>
          <p className="text-gray-600 text-sm md:text-xl my-[1.5rem] text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <button className="bg-primary text-white px-[2rem] py-[0.5rem] rounded-full font-semibold text-[1rem] md:py-[0.5rem] md:text-[1.3rem] ">
            Add To cart $12
          </button>
        </div> */}
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>

      </div>
    </section>
  );
};

export default HomeMenu;
