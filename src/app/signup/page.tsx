import React from "react";
import Common from "../components/Common";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Footer from "../components/Footer";

const SignUpPage = () => {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen bg-gray-100">
        <div className="w-full">
          <Common title="Sign Up Page" subtitle="Sign Up" />
        </div>
        <div className="w-full md:w-[424px] h-[624px] bg-white shadow-sm space-y-4 rounded-lg p-6 my-24">
          <div className="mx-8 shadow-yellow-500 border-[1px]">
            <h2 className="font-bold text-[20px] mt-6 mb-2">Sign Up</h2>
          </div>
          <div className="p-4 gap-4 rounded-md border-[1px] flex items-center">
            <AiOutlineUser size={24} />
            <input type="text" placeholder="Name" className="flex-1 text-[#000000]" />
          </div>
          <div className="p-4 gap-4 rounded-md border-[1px] flex items-center">
            <MdOutlineMailOutline size={24} />
            <input type="text" placeholder="Email" className="flex-1 text-[#000000]" />
          </div>
          <div className="p-4 gap-4 rounded-md border-[1px] flex items-center">
            <CiLock size={24} />
            <input type="password" placeholder="Password" className="flex-1 text-[#000000]" />
          </div>
          <div className="p-4 gap-4 flex items-center">
            <input type="checkbox" className="bg-yellow-500 text-[#ffffff]" />
            <p>Remember Me?</p>
          </div>
          <button className="w-full h-[44px] rounded-md bg-yellow-500 text-[#ffffff] p-3">
            Sign Up
          </button>
          <p className="text-right mt-4">
            Forgot Password
          </p>
          <div className="flex items-center justify-center my-4">
            <hr className="w-1/3 bg-gray-500 border-[1px]" />
            <span className="text-gray-500 px-3">OR</span>
            <hr className="w-1/3 bg-gray-500 border-[1px]" />
          </div>
          <div className="gap-4 flex items-center justify-center p-4 rounded-md border-[1px]">
            <FcGoogle size={24} />
            <p>Sign up with Google</p>
          </div>
          <div className="gap-4 flex items-center justify-center p-4 rounded-md border-[1px]">
            <FaApple size={24} />
            <p>Sign up with Apple</p>
          </div>
        </div>
      </div><br/>
      <Footer />
    </>
  );
};

export default SignUpPage;
