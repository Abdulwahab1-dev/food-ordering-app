import React from 'react'
import SectionHeader from "../layout/SectionHeader";
const Contact = () => {
  return (
    <section>
    <div className="text-center">
      <SectionHeader subHeader={"Don\'t hesitate"} mainHeader={"Contact Us"} />
      <div className="max-w-6xl mx-auto my-[1.4rem] px-[2rem] md:px-[2rem] flex flex-col gap-4">
        <a className='text-2xl font-semibold  md:text-3xl text-gray-600' href='tel:+923412314579'>+92 (341) (231) (4579)</a>
      </div>
    </div>
  </section>
  )
}

export default Contact