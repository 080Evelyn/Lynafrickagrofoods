import React, { useState } from "react";
import Image from "../../assets/Images/image.png";
import Arrowicon from "../../assets/circle.svg";
import Arrowicon2 from "../../assets/circleg.svg";
import Frame from "../../assets/Frame.svg";
import image1 from "../../assets/Images/kimage.png";
import imageSt from "../../assets/Images/image (2).png";
import imageSo from "../../assets/Images/Soup1.png";
import imageSo1 from "../../assets/Images/Mask Group.png";
import imageGro from "../../assets/Images/Mask Group (1).png";
import imageSo2 from "../../assets/Images/image (3).png";
import imageSo3 from "../../assets/Images/Mask Group (2).png";
import Button from "../reusablecomponents/button";
import imageB from "../../assets/Images/Images.png";
import Quote from "../../assets/quote.svg";
import Avatar from "../../assets/Avatar.svg";
import LeftAngle from "../../assets/Carousel.svg";
import RightAngle from "../../assets/Carousel (1).svg";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/store/ui/accordion";

function Home() {
  const [showMore, setShowMore] = useState(false);
  const [showM, setShowM] = useState(false);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const handleShowM = () => {
    setShowM((prev) => !prev);
  };

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="hidden md:flex md:absolute md:top-[25px] md:right-[363px] md:z-50">
        <div>
          <h2>
            <NavLink to="/blog" className="hover:font-semibold">
              Blog
            </NavLink>
          </h2>
        </div>
      </div>

      <div className="md:absolute md:top-[27px] md:right-[60px] md:z-50">
        <div className="md:flex md:pace-x-4">
          <div className="hidden md:flex md:items-center md:gap-[4px]">
            <button className="md:flex text-[#01282F] rounded-sm font-semibold hover:bg-[#01282F] hover:text-white py-[6px] px-[20px]">
              <NavLink to="/signup">Sign Up</NavLink>
            </button>
            <button className="md:flex text-[#01282F] rounded-sm hover:bg-[#01282F] hover:text-white font-semibold py-[6px] px-[20px]">
              <NavLink to="/login">Login</NavLink>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="relative w-full h-[310px] md:h-[500px] bg-gray-200">
          <img
            src={Image}
            alt=""
            className="w-full h-[290px] md:h-[445px] object-cover brightness-50"
          />

          <div className="absolute inset-0 flex flex-col text-[#FFFFFF] text-center top-[80px]">
            <h1 className="h-[44px] font-bold text-[20px] md:text-[48px] leading-[22px] md:leading-[50px]">
              <span className="block">Home Meal Away</span>
              <span className="block">From Home</span>
            </h1>

            <p className="text-[10px] tracking-tight md:text-[24px] pt-2 md:pt-16 text-center md:leading-[26px]">
              <span className="">
                "Enjoy the rich taste of Nigerian cuisine with handpicked{" "}
              </span>
              <br />
              <span className="">
                ingredients, ensuring every meal you cook reflects the culture,
              </span>
              <br />
              <span className="">heritage, and flavors of home.</span>
            </p>

            <div className="flex justify-center space-x-4 pt-[10px] text-[10px] md:text-[24px] md:pt-[30px]">
              <button className="flex space-x-4 items-center border-0 p-[5px] bg-[#01282F]">
                <span className="flex items-center space-x-2">
                  <span>Get Started</span>
                  <img
                    src={Arrowicon}
                    alt=""
                    className="w-[10px] md:w-[20px]"
                  />
                </span>
              </button>

              <button className="flex items-center border border-[#00D094] p-[5px]">
                <span className="flex items-center space-x-2">
                  <span className="text-[#00D094]">Learn more</span>
                  <img
                    src={Arrowicon2}
                    alt=""
                    className="w-[10px] md:w-[20px] color-[#00D094]"
                  />
                </span>
              </button>
            </div>

            <div className="flex mx-auto bg-[#FFFFFF] w-[300px] text-[10px] md:text-[20px] h-[41px] mt-3 md:w-[800px] md:h-[50px]">
              <div className="flex space-x-2 p-2 md:space-x-4">
                <button className="">
                  <span className="border border-[#000000] text-[#000000] py-[4px] px-[5px] md:py-[1px] md:px-[7px]">
                    Categories
                  </span>
                </button>

                <div className="border border-[#000000] w-[159px] md:w-[531px]"></div>

                <button className="bg-[#01282F] py-[4px] px-[7px] md:py-[1px] md:px-[10px]">
                  <span className="text-[#FFFFFF]">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 px-3  md:px-6 font-montserrat py-2 bg-[#FFFFFF]">
          <div className="grid gap-y-[6px] md:gap-y-7 md:py-[40px]  leading-[9px] ">
            <span className="text-[#01282F] text-[10px] md:text-[20px]">
              Reason You need Us
            </span>

            <h1 className="font-bold text-[#130F26] leading-[15px] md:leading-[48px] md:text-[50px]">
              One Platform For Nigeria Culture
            </h1>

            <p className="text-[10px] md:text-[17px] lg:text-[20px] leading-[10px] md:leading-[20px] text-[#000000]">
              Nigerian expatriates and food enthusiasts worldwide can reconnect
              with the flavors of home. The platform ensures easy access to
              traditional ingredients
            </p>

            <span className="flex items-center space-x-2">
              <img src={Frame} alt="" className="md:w-[30px]" />
              <p className="font-poppins text-[10px] md:text-[17px] lg:text-[20px]">
                Convenience and Accessibility
              </p>
            </span>

            <span className="flex items-center space-x-2">
              <img src={Frame} alt="" className="md:w-[30px]" />
              <p className="font-poppins text-[10px] md:text-[17px] lg:text-[20px]">
                Support for Cultural Connections
              </p>
            </span>

            <span className="flex items-center space-x-2">
              <img src={Frame} alt="" className="md:w-[30px]" />
              <p className="font-poppins-regular text-[10px] md:text-[17px] lg:text-[20px]">
                Quality Assurance and Trusted Sourcing
              </p>
            </span>
          </div>

          <div className="relative w-fit max-w-md mx-auto mt-10">
            {/* Background square (behind image) */}
            <div className="absolute top-[-12px] right-[-3px] md:right-[-25px] lg:right-[-70px] w-[100px] h-[120px] md:h-[220px] bg-[#01282F] z-0 md:w-[300px]"></div>

            {/* Foreground image */}
            <img
              src={image1}
              alt="Family cooking"
              className="relative brightness-50 z-10 w-[160px] md:w-[400px] h-auto object-cover right-0 md:right-0 lg:right-0"
            />
          </div>
        </div>

        <div className="py-8">
          <div className="flex flex-col items-center justify-center text-center py-4 md:py-10 text-[#01282F]">
            <h3 className="font-bold font-poppins md:text-[24px]">
              Browse from Our Categories
            </h3>
            <p className="text-[10px] font-poppins md:text-[20px]">
              We bring Ingredient from all part of Nigeria
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-3 md:px-20 py-6 gap-y-9 text-center">
            <div>
              <img src={imageSt} alt="" className="rounded-lg" />
              <h3 className="font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]">
                North West Region
              </h3>
              <p className="text-[10px] md:text-[20px] leading-[10px] md:leading-[20px] text-[#02020280]">
                Offering You the best fromKano, Kaduna, Katsina, Sokoto, Jigawa,
                Kebbi, Zamfara
              </p>
            </div>

            <div>
              <img src={imageSo} alt="" className="rounded-lg" />
              <h3 className="font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]">
                South South Region
              </h3>
              <p className="text-[10px] md:text-[17px] leading-[10px] md:leading-[15px] text-[#02020280]">
                Offering You the best from Rivers, Bayelsa, Cross River, Akwa
                Ibom, Edo, Delta
              </p>
            </div>

            {showMore && (
              <>
                <div>
                  <img src={imageSo1} alt="" className="rounded-lg" />
                  <h3 className="font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]">
                    South East Region
                  </h3>
                  <p className="text-[10px] md:text-[17px] leading-[10px] md:leading-[15px] text-[#02020280]">
                    Offering You the best from Anambra, Enugu, Imo, Abia, Ebonyi
                  </p>
                </div>
                <div>
                  <img src={imageGro} alt="" className="rounded-lg" />
                  <h3 className="font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]">
                    South West Region
                  </h3>
                  <p className="text-[10px] md:text-[17px] leading-[10px] md:leading-[15px] text-[#02020280]">
                    Offering You the best from Lagos, Ogun, Oyo, Osun, Ondo,
                    Ekiti
                  </p>
                </div>

                <div>
                  <img src={imageSo2} alt="" className="rounded-lg" />
                  <h3 className="font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]">
                    North Central Region
                  </h3>
                  <p className="text-[10px] md:text-[17px] leading-[10px] md:leading-[15px] text-[#02020280]">
                    Offering You the best from Kogi, Benue, Niger, Kwara,
                    Plateau, Nasarawa, FCT Abuja
                  </p>
                </div>

                <div>
                  <img src={imageSo3} alt="" className="rounded-lg" />
                  <h3 className="font-poppins font-bold text-[#01282F] text-[15px] md:text-[24px]">
                    North East Region
                  </h3>
                  <p className="text-[10px] text-[#02020280] md:text-[17px] leading-[10px] md:leading-[15px]">
                    Offering You the best from Borno, Yobe, Taraba, Adamawa,
                    Gombe, Bauchi
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="justify-end flex pr-3">
            <Button onClick={handleShowMore} />
          </div>
        </div>

        <div className="bg-[#FFFFFF] py-8">
          <div className=" md:leading-8 leading-4">
            <div className="font-bold font-poppins text-center md:text-[24px]">
              Explore Our Latest Products
            </div>
            <div className="text-center text-[#02020280] text-[10px] md:text-[20px]">
              Here are some of our new products
            </div>
          </div>

          <div className="grid grid-cols-2  gap-3 px-3 md:grid-cols-4 md:px-20 font-montserrat pt-3">
            <div className="bg-gray-200 text-[#01282F] font-poppins">
              <img src={imageB} alt="" />

              <div className="px-2">
                <h3 className="font-semibold text-[16px]">Banga Soup</h3>
                <p className="text-[10px] text-[#02020280]">South-South</p>
                <h3 className="font-bold text-[16px]">$56.00</h3>
              </div>
            </div>

            <div className="bg-gray-200 text-[#01282F] font-poppins">
              <img src={imageB} alt="" />

              <div className="px-2">
                <h3 className="font-semibold text-[16px]">Banga Soup</h3>
                <p className="text-[10px] text-[#02020280]">South-South</p>
                <h3 className="font-bold text-[16px]">$56.00</h3>
              </div>
            </div>

            {showM && (
              <>
                <div className="bg-gray-200 text-[#01282F] font-poppins">
                  <img src={imageB} alt="" />

                  <div className="px-2">
                    <h3 className="font-semibold text-[16px]">Banga Soup</h3>
                    <p className="text-[10px] text-[#02020280]">South-South</p>
                    <h3 className="font-bold text-[16px]">$56.00</h3>
                  </div>
                </div>

                <div className="bg-gray-200 text-[#01282F] font-poppins">
                  <img src={imageB} alt="" />

                  <div className="px-2">
                    <h3 className="font-semibold text-[16px]">Banga Soup</h3>
                    <p className="text-[10px] text-[#02020280]">South-South</p>
                    <h3 className="font-bold text-[16px]">$56.00</h3>
                  </div>
                </div>

                <div className="bg-gray-200 text-[#01282F] font-poppins">
                  <img src={imageB} alt="" />

                  <div className="px-2">
                    <h3 className="font-semibold text-[16px]">Banga Soup</h3>
                    <p className="text-[10px] text-[#02020280]">South-South</p>
                    <h3 className="font-bold text-[16px]">$56.00</h3>
                  </div>
                </div>

                <div className="bg-gray-200 text-[#01282F] font-poppins">
                  <img src={imageB} alt="" />

                  <div className="px-2">
                    <h3 className="font-semibold text-[16px]">Banga Soup</h3>
                    <p className="text-[10px] text-[#02020280]">South-South</p>
                    <h3 className="font-bold text-[16px]">$56.00</h3>
                  </div>
                </div>

                <div className="bg-gray-200 text-[#01282F] font-poppins">
                  <img src={imageB} alt="" />

                  <div className="px-2">
                    <h3 className="font-semibold text-[16px]">Banga Soup</h3>
                    <p className="text-[10px] text-[#02020280]">South-South</p>
                    <h3 className="font-bold text-[16px]">$56.00</h3>
                  </div>
                </div>

                <div className="bg-gray-200 text-[#01282F] font-poppins">
                  <img src={imageB} alt="" />

                  <div className="px-2">
                    <h3 className="font-semibold text-[16px]">Banga Soup</h3>
                    <p className="text-[10px] text-[#02020280]">South-South</p>
                    <h3 className="font-bold text-[16px]">$56.00</h3>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="justify-end flex pr-3 mt-4">
            <Button onClick={handleShowM} />
          </div>
        </div>

        <div className="px-6">
          <div className="flex justify-between items-center py-4">
            <div className="font-bold text-[#000000] md:text-[24px]">
              Meet our <span className="text-[#00D094]">Customers</span>
            </div>

            <div className="">
              <Button onClick={handleShowM} />
            </div>
          </div>

          <div className="flex justify-center max-w-full overflow-hidden px-7">
            <Slider {...settings} className="w-full">
              <div className="flex flex-col space-y-3 px-4 bg-[#000000] rounded-lg py-3 leading-5 md:h-[200px]">
                <h3 className="flex justify-center text-[#FFFFFF] md:text-[20px]">
                  Goodm Package and fast delivery will surely shop from you
                  again
                </h3>

                <div className="w-[230px] h-[1px] bg-gray-800 rounded-md mt-7 md:w-[1100px]"></div>

                <div className="flex justify-between items-center pt-4">
                  <div className="flex space-x-2 items-center">
                    <img src={Avatar} alt="" className="md:w-[90px]" />
                    <div>
                      <h3 className="flex justify-center text-[#FFFFFF] md:-[20px]">
                        Benson
                      </h3>
                      <p className="flex text-gray-400 font-extralight">Usa</p>
                    </div>
                  </div>

                  <div>
                    <img src={Quote} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3 px-4 bg-[#000000] rounded-lg py-3 leading-5 md:h-[200px]">
                <h3 className="flex justify-center text-[#FFFFFF] md:text-[20px]">
                  Goodm Package and fast delivery will surely shop from you
                  again
                </h3>

                <div className="w-[230px] h-[1px] bg-gray-800 rounded-md mt-7 md:w-[1100px]"></div>

                <div className="flex justify-between items-center pt-4">
                  <div className="flex space-x-2 items-center">
                    <img src={Avatar} alt="" className="md:w-[90px]" />
                    <div>
                      <h3 className="flex justify-center text-[#FFFFFF] md:text-[20px]">
                        Benson
                      </h3>
                      <p className="flex text-gray-400 font-extralight">Usa</p>
                    </div>
                  </div>

                  <div>
                    <img src={Quote} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3 px-4 bg-[#000000] rounded-lg py-3 leading-5 md:h-[200px]">
                <h3 className="flex justify-center text-[#FFFFFF] md:text-[20px]">
                  Goodm Package and fast delivery will surely shop from you
                  again
                </h3>

                <div className="w-[230px] h-[1px] bg-gray-800 rounded-md mt-7 md:w-[1100px]"></div>

                <div className="flex justify-between items-center pt-4">
                  <div className="flex space-x-2 items-center">
                    <img src={Avatar} alt="" className="md:w-[90px]" />
                    <div>
                      <h3 className="flex justify-center text-[#FFFFFF] md:text-[20px]">
                        Benson
                      </h3>
                      <p className="flex text-gray-400 font-extralight">Usa</p>
                    </div>
                  </div>

                  <div>
                    <img src={Quote} alt="" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>

          <div className="space-y-3 px-1 py-7  max-w-md md:max-w-[1100px] mx-auto">
            <Accordion
              type="single"
              collapsible
              className=" md:grid md:grid-cols-2 md:gap-2 w-full space-y-2 "
            >
              <AccordionItem
                value="item-1"
                className="px-4 py-2 rounded-lg data-[state=open]:bg-[#01282F] data-[state=closed]:bg-[#020202]"
              >
                <AccordionTrigger className="text-[11px] md:text-[20px] data-[state=open]:text-[#00A676] data-[state=closed]:text-[#FFFFFF]">
                  What countries do you ship to?
                </AccordionTrigger>
                <AccordionContent className="text-[11px] text-[#FFFFFF] md:text-[19px]">
                  We only ship to Canada, the USA, the UK, and Germany.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="px-4 py-1 rounded-lg data-[state=open]:bg-[#01282F] data-[state=closed]:bg-[#020202]"
              >
                <AccordionTrigger className="data-[state=open]:text-[#00A676] data-[state=closed]:text-[#FFFFFF] text-[11px] md:text-[20px]">
                  How do I give feedback?
                </AccordionTrigger>
                <AccordionContent className=""></AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="px-4 py-1 rounded-lg data-[state=open]:bg-[#01282F] data-[state=closed]:bg-[#020202]"
              >
                <AccordionTrigger className="text-[11px] md:text-[20px] data-[state=open]:text-[#00A676] data-[state=closed]:text-[#FFFFFF]">
                  Do you accept payments through other third-party vendors such
                  as Venmo or Cash app etc?
                </AccordionTrigger>
                <AccordionContent className=""></AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="px-4 py-2 rounded-lg data-[state=open]:bg-[#01282F] data-[state=closed]:bg-[#020202]"
              >
                <AccordionTrigger className="text-[#00A676] text-[11px] md:text-[20px] data-[state=open]:text-[#00A676] data-[state=closed]:text-[#FFFFFF]">
                  Do you accept a refund?
                </AccordionTrigger>
                <AccordionContent className="text-[#FFFFFF] text-[11px] md:text-[19px]">
                  We ensure quality package and delivery. So a refund is not
                  accepted.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="px-4 py-2 rounded-lg data-[state=open]:bg-[#01282F] data-[state=closed]:bg-[#020202]"
              >
                <AccordionTrigger className="text-[#FFFFFF] text-[11px] md:text-[20px] data-[state=open]:text-[#00A676] data-[state=closed]:text-[#FFFFFF]">
                  Do you deliver to other african country?
                </AccordionTrigger>
                <AccordionContent className=""></AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="px-4 py-2 rounded-lg data-[state=open]:bg-[#01282F] data-[state=closed]:bg-[#020202]"
              >
                <AccordionTrigger className="text-[11px] md:text-[20px] data-[state=open]:text-[#00A676] data-[state=closed]:text-[#FFFFFF]">
                  How long does it take to deliver?
                </AccordionTrigger>
                <AccordionContent></AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
