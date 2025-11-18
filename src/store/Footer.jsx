import React from 'react'
import { NavLink } from 'react-router-dom'
import FacebookLogo from '../assets/FaceBook.svg';
import Instagram from '../assets/instagram.svg';
import Twitter from '../assets/new-twitter.svg';

function Footer() {
  return (
    <div className='bg-[#00D094] py-6 md:py-14 space-y-7 md:px-2 px-5'>
        <div className='text-center font-semibold text-[#02020280] md:text-[25px]'>LYNAFRICK</div>

        <div className='flex justify-between space-x-7 px-4 md:px-28 '>
            <div className='flex flex-col items-start'>
                <div className='font-semibold md:text-[20px]'>Links</div>
                <ul className='md:space-y-2'>
                    <li className='text-[#02020280] text-[11px] md:text-[15px]'><NavLink to='/home'>Home</NavLink></li>
                    <li className='text-[#02020280] text-[11px] md:text-[15px]'><NavLink to='/about-us'>About Us</NavLink></li>
                    <li className='text-[#02020280] text-[11px] md:text-[15px]'><NavLink to='/contact-us'>Contact</NavLink></li>
                </ul>
            </div>

            <div className=''>
                <div className='font-semibold md:text-[20px]'>Help</div>
                <ul className='md:space-y-2'>
                    <li className='text-[#02020280] text-[11px] md:text-[15px]'><NavLink to=''>Payment Options</NavLink></li>
                    <li className='text-[#02020280] text-[11px] md:text-[15px]'><NavLink to=''>Returns</NavLink></li>
                    <li className='text-[#02020280] text-[11px] md:text-[15px]'><NavLink to=''>Privacy Policies</NavLink></li>
                </ul>
            </div>

            <div className=''>
                <div className='font-semibold md:text-[20px]'>Reach Us</div>
                <ul className='md:space-y-2'>
                    <li className='text-[#02020280] text-[11px] md:text-[15px]'>+2347085301377</li>
                    <li className='text-[#02020280] text-[11px] md:text-[15px]'><NavLink to=''>lynafrickstore@gmail.com</NavLink></li>
                </ul>

                <div className='flex space-x-2 mt-2'>
                    <NavLink><img src={FacebookLogo} alt="" className='md:w-[20px]'/></NavLink>
                    <NavLink><img src={Instagram} alt="" className='md:w-[32px]'/></NavLink>
                    <NavLink><img src={Twitter} alt="" className='md:w-[30px]'/></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;