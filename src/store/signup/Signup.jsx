import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import Star from '../../../src/assets/dashicons_star-filled.svg'
import HalfStar from '../../../src/assets/Vector (6).svg'
import BiggerCircle from '../../../src/assets/Ellipse 696.svg'
import SmallerCircle from '../../../src/assets/Ellipse 699.svg'
// import PhoneInput from 'react-phone-number-input'
// import Lynlogo from '../../../src/assets/LYN.svg'

function Signup() {
       
        const [code, setCode] = useState("+234");
        const [isClicked, setIsClicked] = useState(false);
        // const [value, setValue] = useState()

        const handleClick = () => {
            setIsClicked(!isClicked);
        };

        const countryCodes = [
        { code: "+234", name: "NGA" },
        { code: "+1", name: "USA" },
        { code: "+44", name: "GBR" },
        { code: "+91", name: "IND" },
        { code: "+27", name: "ZAF" },
        { code: "+254", name: "KEN" },
        { code: "+233", name: "GHA" },
        { code: "+49", name: "DEU" },
        { code: "+33", name: "FRA" },
        { code: "+86", name: "CHN" },
        { code: "+81", name: "JPN" },
        { code: "+61", name: "AUS" },
        { code: "+55", name: "BRA" },
        { code: "+7", name: "RUS" },
        { code: "+52", name: "MEX" },
        { code: "+20", name: "EGY" },
        { code: "+82", name: "KOR" },
        { code: "+90", name: "TUR" },
        { code: "+966", name: "SAU" },
        ];

         

  return (
      
    <div className='md:grid md:grid-cols-3'>

        <div className='md:col-span-2'>

            <div className='flex flex-col items-center justify-center mx-auto md:mt-[200px]'>
                <h1 className='text-[#141B34] font-bold text-[20px] md:text-[40px] mt-4'>LYNAFRICK</h1>
                <h3 className='text-[#00D094] font-semibold pt-6 md:pt-5 md:text-[30px]'>Sign Up</h3>
                <p className='text-[#01282F7A] text-center text-[9px] w-[170px] md:w-[400px] pt-1 md:text-[15px]'>Enter your credentials below to create a free account</p>
            
                <form action="" className='w-full max-w-[300px] p-6 space-y-5 py-7'>
                    
                

                    <div className='flex flex-col space-y-1 md:text-[15px]'>
                        <label htmlFor="Fname"
                        className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>
                        First Name
                        </label>

                        <input 
                        type="text" 
                        name=''
                        className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3' placeholder='@Zeeno'/>
                        
                    </div>
                    

                    <div className='flex flex-col space-y-1 md:text-[15px]'>
                        <label htmlFor="Lname" 
                        className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>
                        Last Name
                        </label>
                        <input 
                        type="text" 
                        name=''
                        className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3' placeholder='@Zeeno'/>
                    </div>
                    
                    <div className='flex flex-col space-y-1 md:text-[15px]'>
                        <label htmlFor="Email"
                        className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>Email</label>
                        <input 
                        type="email" 
                        name=''
                        className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3' placeholder='******@gmail.com'/>
                    </div>


                    <div className='flex flex-col space-y-1 md:text-[15px]'>

                        <label htmlFor="Phone"
                            className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>
                            Phone
                        </label>

                        <div className='relative flex space-x-3 md:text-[15px]'>
                            
                            <div 
                                className='bg-gray-200 outline-1 rounded text-[#00D094] flex items-center px-2 gap-x-1'
                                onClick={handleClick}>
                                
                                <span className='flex flex-col text-[10px] md:text-[12px]'>{code}</span>
                                <IoIosArrowDown className='text-[12px]'/>
                                
                                {isClicked && 
                                (<div 
                                className='absolute left-0 top-full flex flex-col items-center max-h-[40px] md:max-h-[60px] rounded text-black bg-gray-300 overflow-y-auto space-y-1`'>
                                    {countryCodes.map((countryCode) => (
                                    <div key={countryCode.code} 
                                    className='cursor-pointer hover:bg-gray-100 px-2 text-[10px] md:text-[12px]'
                                    onClick={() =>{
                                        setCode(countryCode.code);
                                        setIsClicked(false)}}>
                                        <span className=''>{countryCode.code}</span>
                                    </div>
                                    ))}

                                </div>
                                )}
                                

                            </div> 

                                {/* <PhoneInput
                                    placeholder="91**********"
                                    value={value}
                                    onChange={setValue}
                                    className='size-[40px]'/>
                                ) */}
                            
                            {/* <input  */}
                            {/* type="number"  */}
                            {/* name='' */}
                            {/* className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3 w-12'/> */}
                        
                        <input 
                            type="number" 
                            name=''
                            className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3 flex-1' placeholder='91**********'/>
                        
                        </div>


                    </div>

                    <div className='flex flex-col space-y-1 md:text-[15px]'>
                        <label htmlFor="password"
                        className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>Password</label>
                        <input 
                        type="password" 
                        name=''
                        className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3' placeholder='******'/>
                    </div>

                    <button className='flex ml-[50px] cursor-pointer items-center md:mb-[50px]  bg-[#00D094] px-[50px] py-1 rounded-sm justify-center hover:bg-[#01282F] hover:text-white'>Submit</button>
                    
                    <p className='text-[#5B585866] text-[10px] md:text-[15px] flex text-center justify-center gap-2'>Already have an account?  <span className='text-[#00D094]'><NavLink to='/login'>Log in</NavLink></span></p>
                </form>
            </div>
        </div>

        <div className='hidden md:flex md:flex-col gap-y-5 bg-[#00D094] text-center justify-center items-center text-[white] px-7 py-10'>
            <p className='text-[20px] w-[230px]'>
                “Onyx has made managing my finances simple with its user-friendly interface, 
                fast transactions, and strong security. The multi-currency support and spending insights are a bonus. 
                It’s reliable, but adding more financial tool integrations would make it even better.”
            </p>

            <div className='flex flex-col'>
                <div className='flex space-x-1'>
                    <div><img src={Star} alt="" /></div>
                    <div><img src={Star} alt="" /></div>
                    <div><img src={Star} alt="" /></div>
                    <div><img src={Star} alt="" /></div>
                    <div><img src={HalfStar} alt="" /></div>
                </div>
                
                <div>
                    <p className='text-white font-bold'>Oroshi Esther</p>
                </div>

                <div>
                    <p className='text-[10px] text-white'>USA-Fashion Designer</p>
                </div>

                <div className='flex items-center space-x-1 justify-center'>
                    <div><img src={BiggerCircle} className='size-4' alt="" /></div>
                    <div><img src={SmallerCircle} className='size-3' alt="" /></div>
                    <div><img src={SmallerCircle} className='size-3' alt="" /></div>
                    <div><img src={SmallerCircle} className='size-3' alt="" /></div>
                    <div><img src={SmallerCircle} className='size-3' alt="" /></div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Signup;
 