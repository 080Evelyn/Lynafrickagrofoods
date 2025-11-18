import React from "react";
import Image from "../../assets/Images/image.png";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Button from "../ui/button";
import ProfileIcon from "../../assets/Vector (4).svg";
import ShoppingCartIcon from "../../assets/Vector (5).svg";

function contactUs() {
  return (
    <div>
      <div className="md:absolute md:top-[34px] md:right-[60px] md:z-50">
        <div className="flex gap-x-6">
          <div className="relative group">
            <img
              src={ProfileIcon}
              alt="profile"
              className="hidden md:flex size-6"
            />
            <div className="absolute hidden dropdown-menu group-hover:block bg-slate-200 shadow-lg p-4 rounded">
              <ul className="flex flex-col space-y-2 w-[80px]">
                <li className="cursor-pointer hover:font-bold text-[15px]">
                  My Profile
                </li>
                <li className="cursor-pointer hover:font-bold text-[15px]">
                  Orders
                </li>
                <li className="cursor-pointer hover:font-bold text-[15px]">
                  Logout
                </li>
              </ul>
            </div>
          </div>

          <img
            src={ShoppingCartIcon}
            alt="Cart"
            className="hidden md:flex size-6"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-8">
        <div className="relative">
          <img
            src={Image}
            alt=""
            className="w-full h-[100px] md:h-[170px] object-cover brightness-50"
          />

          <div className="absolute inset-0 z-10 left-1/2 right-1/2 transform -translate-x-1/2 pointer-events-none flex justify-center items-center text-[#FFFFFF] font-medium mb-[0px] md:mb-[60px] text-[20px] md:text-[40px]">
            Cart
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none top-[40px] md:top-[90px] md:bottom-[830px] left-2 text-[#FFFFFF] flex items-center justify-center  md:space-x-1 text-[8px]  md:text-[15px]">
            <div className="font-semibold">
              <NavLink to="/home">Home</NavLink>
            </div>
            <div className="text-[15px] md:text-[12px]">
              <FaAngleRight />
            </div>
            <div>
              <NavLink>Products</NavLink>
            </div>
            <div className="text-[15px] md:text-[12px]">
              <FaAngleRight />
            </div>
            <div>
              <NavLink>Cart</NavLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-7 px-6 py-5 md:py-[70px]">
          <div>
            <h1 className="text-[#000000] font-medium md:text-[40px]">
              Get In Touch With Us
            </h1>
          </div>

          <div className="text-[10px] space-y-[8px] md:text-[15px] md:w-[500px] md:py-[30px] md:space-y-[40px]">
            <p className="text-[#9F9F9F] text-center">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>

            <div className="flex flex-col max-w-3xl mx-auto px-4 md:gap-4 text-[12px] md:text-[15px]">
              <label className="text-[#000000] font-medium mb-2">
                Your name
              </label>
              <input
                type="text"
                className="h-10 md:h-14 border-2 rounded-sm px-4"
                placeholder="Abc"
              />
            </div>

            <div className="flex flex-col max-w-3xl mx-auto px-4  md:gap-4 text-[12px] md:text-[15px]">
              <label className="text-[#000000] font-medium mb-2">
                Email address
              </label>
              <input
                type="text"
                className="h-10 md:h-14 border-2 rounded-sm px-4"
                placeholder="Abc@def.com"
              />
            </div>

            <div className="flex flex-col max-w-3xl mx-auto px-4  md:gap-4 text-[12px] md:text-[15px]">
              <label className="text-[#000000] font-medium mb-2">Subject</label>
              <input
                type="text"
                className="h-10 md:h-14 border-2 rounded-sm px-4"
                placeholder="This is an optional"
              />
            </div>

            <div className="flex flex-col max-w-3xl mx-auto px-4  md:gap-4 text-[12px] md:text-[15px]">
              <label className="text-[#000000] font-medium mb-2">Message</label>
              <input
                type="text"
                className="h-16 md:h-24 border-2 rounded-sm px-4"
                placeholder="Hi! i’d like to ask about"
              />
            </div>
          </div>

          <Button className="cursor-pointer px-[40px]">Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default contactUs;
