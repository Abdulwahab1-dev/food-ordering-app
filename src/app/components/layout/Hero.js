// import React from "react";
// import Image from "next/image";
// import Right from "../icons/Right";

// const Hero = () => {
//   return (
//     <section className="flex justify-center items-center flex-col h-100 ">
//       <div className="grid grid-cols-2">
//         <div className="flex justify-center items-start flex-col h-100">
//           <h1 className="text-3xl font-semibold py-4">
//             Everythig is better with a Pizza
//           </h1>
//           <p>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book.
//           </p>
//           <div className="flex gap-5 py-4">
//             <button className="bg-primary px-8 py-4 text-white font-semibold rounded-full flex gap-4 ">
//               Order Now
//               <Right />
//             </button>
//             <button className="bg-[#F8F8F8] px-8 py-4 text-black font-semibold rounded-full flex gap-4 border border-gray-700">
//               Leran More
//               <Right />
//             </button>
//           </div>
//         </div>
//         <div>
//           {/* <Image src={`/pizza.png`}  alt={'pizza'} layout={'fill'} objectFit={'contain'} /> */}
//           {/* <Image src={`/pizza.png`}alt={'pizza'} /> */}
//           <div className="flex justify-end items-center">
//             <Image
//               src={`/pizza.png`}
//               alt={"pizza"}
//               width={500}
//               height={500}
//               objectFit={"cover"}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="flex justify-center items-center flex-col h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex justify-center items-start flex-col max-w-lg mx-auto lg:mx-0">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold py-4">
            Everything is better with a Pizza
          </h1>
          <p className="text-sm lg:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex gap-5 py-4">
            <button className="bg-primary px-6 lg:px-8 py-3 lg:py-4 text-white font-semibold rounded-full flex gap-2">
              Order Now
              <Right />
            </button>
            <button className="bg-[#F8F8F8] px-6 lg:px-8 py-3 lg:py-4 text-black font-semibold rounded-full flex gap-2 border border-gray-700">
              Learn More
              <Right />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
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

