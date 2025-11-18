import React, { useState } from 'react'

import { NavLink, Link } from 'react-router-dom';
import { IoIosMenu } from "react-icons/io";
import ProfileIcon from '../assets/Vector (4).svg'
import ShoppingCartIcon from '../assets/Vector (5).svg'
import Layer from '../assets/Layer 1.svg'

function NavBar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const [showCart, setShowCart] = useState(false);  
  const [closeCart, setCloseCart] = useState(false);  

  const cart = () => {
    setShowCart(!showCart);
  }




  


  return (
    <div>

      {/* Hamburger Icon */}
      <div className='flex justify-between items-center px-[16px] md:px-[94.5px] bg-gray-200 md:py-[23px]'>
        <div>
          <img src={Layer} alt="" className='size-[12px] md:size-[30px] text-[#00D094]'/>
        </div>

        <div>
          
          <ul className='hidden md:flex gap-[30px] items-center text-[#01282F]'>
              <li><NavLink to="/home" className='hover:font-semibold'>Home</NavLink></li>
              <li><NavLink to="/product" className='hover:font-semibold'>Product</NavLink></li>
              <li><NavLink to="/about-us" className='hover:font-semibold'>About Us</NavLink></li>
              <li><NavLink to="/contact-us" className='hover:font-semibold'>Contact Us</NavLink></li>
          </ul>
        </div>


        <div className='hidden md:flex md:items-center md:gap-[20px]'>
          {/* <div><NavLink to='/profile'><img src={ProfileIcon} alt="" className='md:w-[25px]'/></NavLink></div> */}
          {/* <div><img src={ShoppingCartIcon} alt=""className='md:w-[25px] cursor-pointer' onClick={cart}/></div> */}
        </div>

        {showCart && (
          <div className='absolute top-16 right-10 bg-white shadow-lg w-[300px] h-[400px] z-50' onClick={() => setCloseCart(!closeCart)}>  
            {/* Cart items will be displayed here */}
            <div className=''  >
              <h2 className='text-center font-semibold'>Shopping Cart</h2>

            </div>
            {/* Add cart items here */}
          </div>
        )}

        {/* Hamburger Icon */}
        <IoIosMenu className='w-[24px] h-[24px] md:hidden cursor-pointer' onClick={handleClick}/>

      </div>
        {/* Mobile Menu */}
        {click && (
        <div className='left-7 bg-gray-200 shadow-lg w-full md:hidden z-50'>
          <ul className='flex flex-col gap-[10px] items-start pl-3 text-[#01282F] py-[20px]'>
            <li><NavLink to="/home" className='hover:font-semibold' onClick={() => setClick(false)}>Home</NavLink></li>
            <li><NavLink to="/product" className='hover:font-semibold' onClick={() => setClick(false)}>Products</NavLink></li>
            <li><NavLink to="/about-us" className='hover:font-semibold' onClick={() => setClick(false)}>About</NavLink></li>
            <li><NavLink to="/contact-us" className='hover:font-semibold' onClick={() => setClick(false)}>Contact</NavLink></li>
            <li><NavLink to="/profile" className='hover:font-semibold' onClick={() => setClick(false)}>Profile</NavLink></li>
            <li><NavLink to="/shopping-cart" className='hover:font-semibold' onClick={() => setClick(false)}>Shopping Cart</NavLink></li>
          </ul>
        </div>
      )}
    </div>
    
  )
}

export default NavBar;
