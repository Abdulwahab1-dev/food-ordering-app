import React from "react";
import SectionHeader from "../layout/SectionHeader";

const About = () => {
  return (
    <section>
      <div className="text-center">
        <SectionHeader subHeader={"Our Story"} mainHeader={"About"} />
        <div className="max-w-6xl mx-auto my-[1.4rem] px-[2rem] md:px-[2rem] flex flex-col gap-4">
        <p className="text-gray-600 font-semibold  text-[1rem] text-justify md:text-center md:text-[1.2rem]" >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="text-gray-600 font-semibold  text-[1rem] text-justify md:text-center md:text-[1.2rem]" >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        </div>
      </div>
    </section>
  );
};

export default About;
