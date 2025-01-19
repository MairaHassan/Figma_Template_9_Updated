import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import About1 from "/public/images/About1.png";
import About2 from "/public/images/About2.png";
import About3 from "/public/images/About3.png";

function AboutUs() {
  return (
    <section className="bg-black px-6 md:px-16 lg:px-24 py-12">
      {/* Heading and Images Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
        {/* Text Section */}
        <div className="text-white w-full lg:w-1/2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#FF9F0D] font-greatVibes">
            About us
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2">
            <span className="text-[#FF9F0D]">We</span> Create the best foody
            product
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-normal mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="text-sm md:text-base lg:text-lg flex items-center">
              <FaCheck className="mr-2 text-[#FF9F0D]" /> Lacus nisi, et ac
              dapibus sit eu velit in consequat.
            </li>
            <li className="text-sm md:text-base lg:text-lg flex items-center">
              <FaCheck className="mr-2 text-[#FF9F0D]" /> Quisque diam
              pellentesque bibendum non dui volutpat fringilla.
            </li>
            <li className="text-sm md:text-base lg:text-lg flex items-center">
              <FaCheck className="mr-2 text-[#FF9F0D]" /> Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.
            </li>
          </ul>

          <button className="bg-[#FF9F0D] text-white mt-8 px-6 py-3 text-sm md:text-lg rounded-full hover:bg-yellow-800 transition-all duration-300">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center w-full lg:w-1/2 gap-6">
          {/* First Image */}
          <div className="relative w-full max-w-[450px] h-auto">
            <Image
              src={About1}
              alt="About Image 1"
              className="rounded-lg object-cover"
              layout="responsive"
              width={450}
              height={250}
            />
          </div>

          {/* Two Images in Row */}
          <div className="flex flex-col md:flex-row gap-6 w-full justify-between">
            <div className="relative w-full max-w-[350px] h-auto">
              <Image
                src={About2}
                alt="About Image 2"
                className="rounded-lg object-cover"
                layout="responsive"
                width={350}
                height={200}
              />
            </div>
            <div className="relative w-full max-w-[350px] h-auto">
              <Image
                src={About3}
                alt="About Image 3"
                className="rounded-lg object-cover"
                layout="responsive"
                width={350}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
