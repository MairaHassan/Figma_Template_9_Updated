"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg:max-w-[1920px] h-[90px] w-full bg-[#000000]">
      <div className="lg:max-w-[1320px] w-full h-[32px] justify-between p-8 flex flex-col lg:flex-row items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="font-bold text-[24px] text-white">Food</h1>
          <span className="font-bold text-[24px] text-[#FF9F0D]">tuck</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden lg:flex w-auto h-[24px] gap-4 items-center">
          <li className="text-[16px] font-bold text-yellow-500">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[16px] font-bold text-white">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="text-[16px] font-bold text-white">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="text-[16px] font-bold text-white">
            <Link href="/pages">Pages</Link>
          </li>
          <li className="text-[16px] font-bold text-white">
            <Link href="/chefs">Chef</Link>
          </li>
          <li className="text-[16px] font-bold text-white">
            <Link href="/about">About</Link>
          </li>
          <li className="text-[16px] font-bold text-white">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="text-[16px] font-bold text-white">
            <Link href="/contact">Contact</Link>
          </li>
        <li className="text-[16px] font-bold text-white">
            <Link href="/faq">FAQ</Link>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-gray-800 px-3 py-2 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
            />
            <IoSearch className="text-yellow-500 ml-2" />
          </div>

          {/* Shopping Bag Icon */}
          <Link href="/shoppingcart">
            <RiShoppingBag4Line className="text-white text-2xl hover:text-yellow-500 transition" />
          </Link>

          {/* User Icon */}
          <Link href="/signin">
            <FaUserCircle className="text-white text-2xl hover:text-yellow-500 transition" />
          </Link>
        </div>

        {/* Hamburger Icon (Small Screens) */}
        <div className="lg:hidden text-2xl text-white cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "≡"}
        </div>
      </div>

      {/* Collapsible Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-black text-white mt-4 space-y-4 px-6`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <Link href="/" className="hover:text-yellow-500 transition">
            Home
          </Link>
          <Link href="/menu" className="hover:text-yellow-500 transition">
            Menu
          </Link>
          <Link href="/blog" className="hover:text-yellow-500 transition">
            Blog
          </Link>
          <Link href="/pages" className="hover:text-yellow-500 transition">
            Pages
          </Link>
          <Link href="/pages" className="hover:text-yellow-500 transition">
            Chef
          </Link>
          <Link href="/about" className="hover:text-yellow-500 transition">
            About
          </Link>
          <Link href="/shop" className="hover:text-yellow-500 transition">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-yellow-500 transition">
            Contact
          </Link>
          <Link href="/faq" className="hover:text-yellow-500 transition">
            FAQ
          </Link>
        </div>

        {/* Search Bar and Shopping Bag for Small Screens */}
        <div className="flex items-center space-x-4 mt-4">
          <div className="flex items-center bg-gray-800 px-3 py-2 rounded-full w-full">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
            />
            <IoSearch className="text-yellow-500 ml-2" />
          </div>
          <Link href="/shoppingcart">
            <RiShoppingBag4Line className="text-white text-2xl hover:text-yellow-500 transition" />
          </Link>
        </div>

        {/* User Icon for Small Screens */}
        <div className="mt-4">
          <Link href="/signin">
            <FaUserCircle className="text-white text-2xl hover:text-yellow-500 transition" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
