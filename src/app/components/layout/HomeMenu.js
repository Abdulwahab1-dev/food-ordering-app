import React from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";

const HomeMenu = () => {
  return (
    <section className="px-[2rem] md:px-[0rem] py-[2rem]">
      <div className="text-center">
       <SectionHeader 
       subHeader={'Check Out'} 
        mainHeader={'Menu'}
       />
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
