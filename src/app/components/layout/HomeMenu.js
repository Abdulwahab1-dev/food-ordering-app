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
