import React, { useState } from "react";
import Image from "../../assets/Images/image.png";
import Image1 from "../../assets/Images/Rectangle 69.png";
import Image2 from "../../assets/Images/Rectangle 69 (1).png";
import Image3 from "../../assets/Images/Rectangle 69 (2).png";
import Image4 from "../../assets/Images/Rectangle 69 (3).png";
import Image5 from "../../assets/Images/Rectangle 69 (4).png";
import ImageF from "../../assets/Images/image (4).png";
import { FaAngleRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Button from "../ui/button";
import ProfileIcon from "../../assets/Vector (4).svg";
import Profile from "../../assets/dashicons_admin-users.svg";
import DateIcon from "../../assets/uis_calender.svg";
import ShoppingCartIcon from "../../assets/Vector (5).svg";
import Filter2 from "../../assets/Vector (3).svg";

function blog() {
  const [isShowMore, setIsShowMore] = useState(false);
  const [topTenShowMore, setTopTenShowMore] = useState(false);

  const showMore = () => {
    setIsShowMore(!isShowMore);
  };

  const topTenShowClick = (index) => {
    setTopTenShowMore((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const recentPostData = [
    { id: 1, image: Image1, title: "Jollof or Fried", date: "03 Aug 2022" },
    {
      id: 2,
      image: Image2,
      title: "What’s really special about Amala",
      date: "03 Aug 2022",
    },
    {
      id: 3,
      image: Image3,
      title: "Foreign Salad or Abacha",
      date: "03 Aug 2022",
    },
    {
      id: 4,
      image: Image4,
      title: "Why do Igbo not like Banga soup",
      date: "03 Aug 2022",
    },
    {
      id: 5,
      image: Image5,
      title: "Moi Moi or Fried Plantain",
      date: "03 Aug 2022",
    },
  ];

  const topTen = [
    {
      image: ImageF,
      title: "What are the top 10 Nigeria festivals in 2024",
      admin: "Admin",
      date: "14 Oct 2022",
    },
    {
      image: ImageF,
      title: "What are the top 10 Nigeria festivals in 2024",
      admin: "Admin",
      date: "14 Oct 2022",
    },
    {
      image: ImageF,
      title: "What are the top 10 Nigeria festivals in 2024",
      admin: "Admin",
      date: "14 Oct 2022",
    },
    {
      image: ImageF,
      title: "What are the top 10 Nigeria festivals in 2024",
      admin: "Admin",
      date: "14 Oct 2022",
    },
    {
      image: ImageF,
      title: "What are the top 10 Nigeria festivals in 2024",
      admin: "Admin",
      date: "14 Oct 2022",
    },
    {
      image: ImageF,
      title: "What are the top 10 Nigeria festivals in 2024",
      admin: "Admin",
      date: "14 Oct 2022",
    },
  ];

  return (
    <div>
      <div className="md:absolute md:top-[28px] md:right-[60px] md:z-50">
        <div className="flex gap-x-6">
          <div className="relative group">
            <img src={ProfileIcon} alt="profile" className="hidden " />
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

      <div className="flex flex-col gap-y-2 pb-14">
        <div className="relative">
          <img
            src={Image}
            alt=""
            className="w-full h-[100px] md:h-[170px] object-cover brightness-50"
          />

          <div className="absolute inset-0 z-10 left-1/2 right-1/2 transform -translate-x-1/2 pointer-events-none flex justify-center items-center text-[#FFFFFF] font-medium mb-[0px] md:mb-[60px] text-[20px] md:text-[40px]">
            Blog
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none top-[40px] md:top-[90px] md:bottom-[830px] left-2 text-[#FFFFFF] flex items-center justify-center  md:space-x-1 text-[8px]  md:text-[15px]">
            <div className="font-semibold">
              <NavLink to="/home">Home</NavLink>
            </div>
            <div className="text-[15px] md:text-[12px]">
              <FaAngleRight />
            </div>
            <div>
              <NavLink>Blog</NavLink>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-7 md:gap-15 px-6 md:px-16 py-5 md:py-20">
          <div className="md:order-2 space-y-2 md:space-y-5">
            <div className="flex items-center px-2 md:px-4 space-x-2 py-2 md:py-2 border border-gray-400 rounded-sm w-full md:w-[300px]">
              <input
                type="text"
                className="flex-1 outline-0  placeholder:text-[12px] md:placeholder:text-[17px]"
              />
              <img src={Filter2} alt="" className="w-5 md:w-[15px]" />
            </div>

            <div className="flex flex-col gap-3 md:gap-10">
              <h1 className="flex  font-medium text-black text-[25px] md:text-[30px] items-center">
                Recent Posts
              </h1>

              <div className="md:flex md:flex-col md:gap-[20px]">
                <div>
                  <h1 className="hidden md:flex md:text-black md:text-[20px] md:font-semibold">
                    Categories
                  </h1>
                </div>

                <div className="md:flex md:space-x-[70px]">
                  <div className="md:text-[#9F9F9F] md:text-[15px] md:space-y-[15px]">
                    <p className="hidden md:flex">Crafts</p>
                    <p className="hidden md:flex">Design</p>
                    <p className="hidden md:flex">Handmade</p>
                    <p className="hidden md:flex">Interior</p>
                    <p className="hidden md:flex">Wood</p>
                  </div>

                  <div className="md:text-[#9F9F9F] md:text-[15px] md:space-y-[15px]">
                    <p className="hidden md:flex">2</p>
                    <p className="hidden md:flex">8</p>
                    <p className="hidden md:flex">7</p>
                    <p className="hidden md:flex">1</p>
                    <p className="hidden md:flex">6</p>
                  </div>
                </div>
              </div>

              <div className="flex overflow-x-auto space-x-[30px] md:flex-col md:space-y-6">
                {recentPostData.map((item, index) => (
                  <div className="flex space-x-3" key={index}>
                    <img src={item.image} alt="" />
                    <div className="flex flex-col w-[160px] gap-y-5 justify-center">
                      <div className="text-[12px] md:text-[15px] font-bold leading-3 md:leading-5">
                        {item.title}
                      </div>
                      <div className="text-[10px] md:text-[15px] md:text-[#9F9F9F] ">
                        {item.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:order-1 md:space-y-7">
            <div>
              <h1 className="flex  font-medium text-black text-[20px] md:text-[30px] items-center">
                Nigeria Rich In Culture
              </h1>

              <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                Nigeria has always been a nation rich in splendid culture, vast
                land, hassling spirit, natural resources, vibrant music and art
                scenes, and a very yummy and nutritious meal that can never be
                forgotten once tasted. Exploring Nigeria is not just an
                adventure; it's a journey through a land of boundless
                possibilities and unending discovery. With over 250 tribes,
                diverse delicacies are served and best enjoyed with friends and
                family.
              </p>
            </div>

            <div>
              <h1 className="flex  font-medium text-black text-[20px] md:text-[30px] items-center">
                Bringing the Taste of Home to your doorstep.
              </h1>

              <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                In a world that's more connected than ever, it's no surprise
                that many of us find ourselves living far from the places we
                call home. For diasporas around the world, the yearning for the
                tastes and flavours of their native land can be a constant
                companion. Fortunately, the digital age has brought a solution
                to this homesickness. Online grocery stores catering to
                diasporas have become the bridge that connects these far-flung
                communities with their culinary heritage. Making a difference in
                convenience, delivery to your doorstep, community engagement,
                diverse selection and cultural connection. So wherever you are
                embrace your roots, savour the flavours, and make every meal a
                celebration of the diverse and vibrant cultures that make up our
                global community. These online grocery stores for diasporas are
                more than just shopping destinations; they are a testament to
                the power of food to unite, heal, and connect us with our
                heritage, no matter where we are.
              </p>
            </div>

            <div>
              <h1 className="flex  font-medium text-black text-[20px] md:text-[30px] items-center">
                Nigerian Dish and their Recipes
              </h1>

              <div>
                <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                  Egusi Soup
                </h1>

                <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                  Melon seed(Egusi), palm oil, crayfish, castor seed (okpei),
                  pepper, stockfish, dry fish, seasoning, pumpkin leaves (ugu),
                  salt, and meat.
                </p>

                <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                  Ogbono Soup
                </h1>

                <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                  Ogbono, palm oil, crayfish, castor seed (okpei), pepper,
                  stockfish, dry fish, seasoning, pumpkin leaves (ugu), salt,
                  and meat
                </p>

                <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                  Ofada Rice & Stew
                </h1>

                <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                  Ofada rice, fresh pepper, palm oil, onions, locust beans,
                  seasoning, salt, dry fish, and meat
                </p>

                <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                  Afang Soup
                </h1>

                <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                  Waterleaf, palm oil, crayfish, dry fish, stock fish, pepper,
                  seasoning, salt, okazi leaf (wild spinach), meat
                </p>

                <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                  Edikang Ikong Soup
                </h1>

                <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                  Pumpkin leaf (ugu), water leaf, palm oil, crayfish, pepper,
                  seasoning, salt, stockfish, dry fish, and meat.  
                </p>

                <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                  Ewedu Soup
                </h1>

                <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                  Jute (ewedu leaf), locust beans, potash, salt.
                </p>

                <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                  Jollof Rice
                </h1>

                <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                  Rice, groundnut oil, tomatoes, pepper, spices, seasoning, bay
                  leaf, salt, ginger & garlic.
                </p>

                <div>
                  <h1
                    className="flex  font-medium text-black text-[13px] md:text-[12px] items-center cursor-pointer pt-4"
                    onClick={showMore}
                  >
                    {isShowMore ? "Show less" : "Read more"}
                  </h1>

                  <div className="w-[60px] h-[2px] bg-gray-400"></div>
                </div>

                {isShowMore && (
                  <div className="pt-3">
                    <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                      Jollof Rice
                    </h1>

                    <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                      Rice, groundnut oil, tomatoes, pepper, spices, seasoning,
                      bay leaf, salt, ginger & garlic.
                    </p>

                    <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                      Jollof Rice
                    </h1>

                    <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                      Rice, groundnut oil, tomatoes, pepper, spices, seasoning,
                      bay leaf, salt, ginger & garlic.
                    </p>

                    <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                      Jollof Rice
                    </h1>

                    <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                      Rice, groundnut oil, tomatoes, pepper, spices, seasoning,
                      bay leaf, salt, ginger & garlic.
                    </p>

                    <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                      Jollof Rice
                    </h1>

                    <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                      Rice, groundnut oil, tomatoes, pepper, spices, seasoning,
                      bay leaf, salt, ginger & garlic.
                    </p>

                    <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                      Jollof Rice
                    </h1>

                    <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                      Rice, groundnut oil, tomatoes, pepper, spices, seasoning,
                      bay leaf, salt, ginger & garlic.
                    </p>

                    <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                      Jollof Rice
                    </h1>

                    <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                      Rice, groundnut oil, tomatoes, pepper, spices, seasoning,
                      bay leaf, salt, ginger & garlic.
                    </p>
                  </div>
                )}

                <div className="pt-4">
                  {topTen.map((item, index) => (
                    <div className="space-y-3" key={index}>
                      <img src={item.image} alt="" />

                      <div className="flex space-x-4">
                        <div className="flex items-center gap-x-2 text-[#9F9F9F] text-[13px]">
                          <img src={Profile} alt="" />
                          {item.admin}
                        </div>
                        <div className="flex items-center gap-x-2 text-[#9F9F9F] text-[13px]">
                          <img src={DateIcon} alt="" />
                          {item.date}
                        </div>
                      </div>

                      <div>
                        <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                          What are the top 10 Nigeria festivals in 2024
                        </h1>
                      </div>

                      <div>
                        <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                          Nigeria is a country known for its vibrant culture,
                          rich history, and diverse traditions. One of the best
                          ways to experience this fascinating country is through
                          its festivals, which showcase the unique and colourful
                          aspects of Nigerian life. 
                        </p>
                      </div>

                      <div className="pb-3">
                        <h1
                          className="flex  font-medium text-black text-[13px] md:text-[12px] items-center cursor-pointer pt-4"
                          onClick={() => topTenShowClick(index)}
                          key={index}
                        >
                          {topTenShowMore[index] ? "Show less" : "Read More"}
                        </h1>

                        <div className="w-[60px] h-[2px] bg-gray-400"></div>
                      </div>

                      {topTenShowMore[index] && (
                        <div className="pt-3">
                          <div></div>

                          <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                            Jollof Rice
                          </h1>

                          <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                            Rice, groundnut oil, tomatoes, pepper, spices,
                            seasoning, bay leaf, salt, ginger & garlic.
                          </p>

                          <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                            Jollof Rice
                          </h1>

                          <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                            Rice, groundnut oil, tomatoes, pepper, spices,
                            seasoning, bay leaf, salt, ginger & garlic.
                          </p>

                          <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                            Jollof Rice
                          </h1>

                          <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                            Rice, groundnut oil, tomatoes, pepper, spices,
                            seasoning, bay leaf, salt, ginger & garlic.
                          </p>

                          <h1 className="flex  font-medium text-black text-[13px] md:text-[30px] items-center">
                            Jollof Rice
                          </h1>

                          <p className="max-w-3xl text-[10px] text-[#9F9F9F] md:text-[15px]">
                            Rice, groundnut oil, tomatoes, pepper, spices,
                            seasoning, bay leaf, salt, ginger & garlic.
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Button className="cursor-pointer font-extrabold">See More</Button>
        </div>
      </div>
    </div>
  );
}

export default blog;
