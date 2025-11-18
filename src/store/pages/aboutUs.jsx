import React from "react";
import Image from "../../assets/Images/image.png";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Button from "../ui/button";
import ProfileIcon from "../../assets/Vector (4).svg";
import ShoppingCartIcon from "../../assets/Vector (5).svg";

function aboutUs() {
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

        <div className="flex flex-col items-center justify-center gap-7 px-6">
          <div>
            <h1 className="text-[#000000] font-medium md:text-[40px]">
              About LYNAFRICk
            </h1>
          </div>

          <div className="text-[10px] space-y-[8px] md:text-[15px]">
            <p className="text-[#9F9F9F] text-center">
              Here is what you need to know about us
            </p>

            <p className="max-w-3xl mx-auto px-4 md:text-[15px]">
              Welcome to Lynafrick, your one-stop destination for all your
              Nigerian grocery needs. We are passionate about making your
              shopping experience convenient, efficient, and, above all,
              delicious.Our online grocery store was founded to simplify how you
              shop for Nigerian food.We are a reliable online grocery store that
              focuses on Nigerian food items.We pride ourselves in our
              high-quality packages of complete recipes rather than single
              products to make shopping convenient and cheaper.We deliver all
              our packages to your doorstep anywhere in Canada, the USA, the UK,
              and Germany aiming to bring home taste away from home.
            </p>

            <p className="max-w-3xl mx-auto px-4 md:text-[15px]">
              Our vision is to be the leading and trusted African online grocery
              store in the Western world.
            </p>
          </div>

          <Button className="cursor-pointer">Chat with us</Button>

          <div>
            <h1 className="font-medium text-[25px] md:text-[40px]">Why US</h1>
          </div>

          <div>
            <ul className="text-[10px] list-disc pl-8 md:pl-[130px] md:text-[15px]">
              <li>We deliver what we say.</li>
              <li>We provide fast shipping and door delivery</li>
              <li>
                We make shopping very convenient, as we deliver in packages
                rather than a single product.
              </li>
              <li>We always provide excellent customer service.</li>
              <li>We only offer quality products and nothing less.</li>
              <li>
                We strive to keep our prices competitive, so you can enjoy the
                convenience of online shopping without breaking the bank
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-medium text-[25px] md:text-[40px]">FAQ’s</h1>
          </div>

          <div className="text-[10px] md:text-[15px] md:pl-[0px] space-y-[8px] pl-5 mb-[60px]">
            <div>
              <h1 className="font-bold">What countries do you ship to?</h1>
              <p>We only ship to Canada, the USA, the UK, and Germany.</p>
            </div>

            <div>
              <h1 className="font-bold">How long does it take to deliver?</h1>
              <p>Between 5 to 10 working days.</p>
            </div>

            <div>
              <h1 className="font-bold">How do I give feedback?</h1>
              <p>Via the contact form</p>
            </div>

            <div>
              <h1 className="font-bold">Do you accept a refund?</h1>
              <p>
                We ensure quality package and delivery. So a refund is not
                accepted.
              </p>
            </div>

            <div>
              <h1 className="font-bold">
                Do you accept payments through other third-party vendors such as
                Venmo or Cash app etc?N
              </h1>
              <p>No. All payments must be made via the website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutUs;
