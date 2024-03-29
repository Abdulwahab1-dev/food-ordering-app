import React from "react";
import Image from "next/image";

const Pizza = ({width}) => {
  return (
    <>
      <Image
        src={'/pizza-icon.svg'} // Path to your image in the public directory
        alt="Pizza Logo"
        width={width} // Set the width dynamically using the prop
        height={30} // Set the height of the image
        className="md:w-[3rem] md:h-[3rem]" // Responsive width for desktop view (adjust values accordingly)
        // objectFit={'contain'}   
            />
    {/* </div> */}
    </>
  );
};

export default Pizza;
