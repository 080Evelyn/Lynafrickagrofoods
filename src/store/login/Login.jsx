import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Star from '../../../src/assets/dashicons_star-filled.svg'
import HalfStar from '../../../src/assets/Vector (6).svg'
import BiggerCircle from '../../../src/assets/Ellipse 696.svg'
import SmallerCircle from '../../../src/assets/Ellipse 699.svg'

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleLogin = (e) => {
    e.preventDefault();
    // Add validation or login API here if needed

    // Then navigate to confirm code
    navigate('/confirm-code');
  };
  return (

    <div className='md:grid md:grid-cols-3'>
   
        <div className='md:col-span-2'>
            <div className='flex flex-col items-center justify-center mx-auto md:mt-[200px]'>
                <h1 className='text-[#141B34] font-bold text-[20px] md:text-[40px] mt-7'>LYNAFRICK</h1>
                <h3 className='text-[#00D094] font-semibold pt-6 md:pt-5 md:text-[30px]'>Login</h3>
                <p className='text-[#01282F7A] text-center text-[9px] w-[170px] md:w-[400px] pt-1 md:text-[15px]'>Enter your email and password</p>
            
                <form action="" className='w-full max-w-[300px] p-6 space-y-5 py-7'>
                    
                    <div className='flex flex-col space-y-1 md:text-[15px]'>
                        <label htmlFor="Fname"
                        className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>
                        Email
                        </label>

                        <input 
                        type="text" 
                        name=''
                        onChange={(e) => setEmail(e.target.value)}
                        className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3' placeholder='********@gmail,com'/>
                        
                    </div>
                    

                    <div className='flex flex-col space-y-1 md:text-[15px]'>
                        <label htmlFor="password"
                        className='font-semibold text-[12px] text-[#00D094] md:text-[15px]'>Password</label>
                        <input 
                        type="password" 
                        name=''
                        onChange={(e) => setPassword(e.target.value)}
                        className='py-2 bg-gray-200 outline-1 rounded text-gray-500 placeholder:text-[12px] placeholder:pl-3' placeholder='******'/>
                    </div>

                    <button className='flex ml-[50px] cursor-pointer items-center md:mb-[50px]  bg-[#00D094] px-[50px] py-1 rounded-sm justify-center hover:bg-[#01282F] hover:text-white'>Submit</button>
                    
                    <p className='text-[#5B585866] text-[10px] md:text-[15px] flex text-center justify-center gap-2'>Already have an account?  <span className='text-[#00D094]'><NavLink to='/login'>Log in</NavLink></span></p>
                    
                    <p className='text-[#00D094] text-[12px] text-center'><NavLink to='/confirm-code'>Confirm-code</NavLink></p>
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

export default Login;
