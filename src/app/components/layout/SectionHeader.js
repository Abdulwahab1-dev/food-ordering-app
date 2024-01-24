import React from "react";

const SectionHeader = ({subHeader,mainHeader}) => {
  return (
    <>
      <h3 className="uppercase text-gray-600 font-semibold text-2xl md:text-4xl">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-2xl md:text-4xl italic">
        {mainHeader}
      </h2>
    </>
  );
};

export default SectionHeader;
