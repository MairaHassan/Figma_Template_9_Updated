import React from "react";
import { IoIosStar } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

// Define the Data type
interface Data {
  id: number;
  img: string;
  title: string;
  review: string;
}

const data: Data[] = [
  {
    id: 1,
    img: "/images/chicken fry.png",
    title: "Chicken Fry",
    review: "26",
  },
  {
    id: 2,
    img: "/images/noodles.png",
    title: "Noodles",
    review: "46",
  },
  {
    id: 3,
    img: "/images/cake.png",
    title: "Cake",
    review: "16",
  },
  {
    id: 4,
    img: "/images/burger2.png",
    title: "Burger",
    review: "36",
  },
  {
    id: 5,
    img: "/images/About3.png",
    title: "Sandwich",
    review: "16",
  },
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="md:max-w-lg w-full mx-auto">
        {/* Search Bar */}
        <div className="flex items-center mt-12 gap-2 w-full h-15 border border-gray-500 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search Your Keyword..."
            className="flex-1 bg-transparent outline-none text-gray-800 px-2 text-sm placeholder-gray-500"
          />
          <IoSearch className="text-white bg-yellow-500 w-12 h-12 p-1 cursor-pointer" />
        </div>

        {/* Blogger Section */}
        <section className="mt-8 border w-full border-gray-400 rounded-md p-4">
          <div className="text-center">
            <Image
              src="/images/cl1.png"
              alt="client"
              width={80}
              height={80}
              className="mx-auto w-20 h-20 rounded-full mb-4"
            />
            <h2 className="text-gray-900 text-lg font-medium">Prince Miyako</h2>
            <p className="text-gray-600 hidden md:block text-sm">
              Blogger/Photographer
            </p>
            <div className="flex justify-center gap-1 mt-2">
              {[...Array(5)].map((_, index) => (
                <IoIosStar key={index} className="text-yellow-500" />
              ))}
              <span className="text-gray-500 text-sm">(1 Review)</span>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug VHS try-hard.
            </p>
            <div className="flex justify-center gap-4 text-xl text-gray-800 mt-4">
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoGithub />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </Link>
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <div className="mt-8 border border-gray-400 rounded-md p-4">
          <h1 className="text-lg font-bold border-b pb-2 mb-4">Recent Posts</h1>
          {[
            "/images/sh1.png",
            "/images/sh2.png",
            "/images/img6.png",
            "/images/coffee1.png",
          ].map((image, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 mb-4 items-start sm:items-center"
            >
              <Image
                src={image}
                alt="Post Image"
                width={96}
                height={96}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <p className="text-sm text-gray-500">June 22, 2020</p>
                <h2 className="md:text-base text-[14px] text-gray-800 font-medium hover:text-yellow-500 cursor-pointer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Filter by Menu */}
        <div className="md:max-w-[423px] mt-4 w-full border-2 border-gray-300">
          <h2 className="text-[20px] font-bold mx-8 mt-6">Filter By Menu</h2>
          {data.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mt-2 flex-col mx-4 md:flex-row gap-4 p-4"
            >
              <div className="flex gap-2">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={99}
                  height={92}
                  className="rounded-md"
                />
                <h2 className="font-bold text-[16px] mt-8">{item.title}</h2>
              </div>
              <p className="mt-8 font-semibold">{item.review}</p>
            </div>
          ))}
        </div>

        {/* Tags Section */}
        <div className="mt-8 border border-gray-400 rounded-md p-4">
          <h1 className="text-lg font-bold mb-4">Popular Tags</h1>
          <div className="flex flex-wrap gap-4">
            {[
              "Sandwich",
              "Tikka",
              "BBQ",
              "Restaurant",
              "Chicken Sharma",
              "Health",
              "FastFood",
              "Food",
              "Pizza",
              "Burger",
              "Chicken"
              
            ].map((tag, index) => (
              <span
                key={index}
                className="border border-gray-400 text-gray-800 py-1 px-3 text-sm rounded-md cursor-pointer hover:bg-gray-100"
              >
                {tag}
              </span>
            ))}

            {/* Photo Gallery */}
            <div className="mt-8 border border-gray-400 rounded-md p-4">
              <h2 className="text-lg font-bold mb-4">Photo Gallery</h2>
              <div className="grid grid-cols-3 gap-5">
                {[
                  "blog2.png",
                  "About1.png",
                  "pg1.png",
                  "pg2.png",
                  "pg3.png",
                  "pg4.png",
                ].map((photo, index) => (
                  <Image
                    key={index}
                    src={`/images/${photo}`}
                    alt="Gallery"
                    className="w-full h-16 object-cover rounded-lg cursor-pointer"
                  />
                ))}
              </div>
            </div>

            
        {/* Follow Us */}
        <div className="flex mt-8  border border-gray-400 rounded-md p-4 text-center gap-2">
          <h1 className="text-lg font-bold mb-4">Follow Us</h1>
          <div className="flex justify-center gap-4 text-xl text-gray-800">
            <Link href="www.linkedin.com/in/maira-hassan-334259209"><FaLinkedin /></Link>
            <Link href="https://github.com/MairaHassan"><IoLogoGithub /></Link>
            <Link href=""><FaInstagram /></Link>
            <Link href=""><FaFacebook /></Link>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
