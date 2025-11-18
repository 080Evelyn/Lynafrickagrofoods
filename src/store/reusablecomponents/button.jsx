import React from 'react'
import Icon from '../../assets/Images/arrowIcon.svg'

function button({onClick, showM}) {
  return (
    <div className='flex justify-end md:pr-20'>
       <button className='flex items-center space-x-2 bg-[#01282F] text-[white] px-2 cursor-pointer'
       onClick={onClick}>
            <div>
                See more
            </div>
            <img src={Icon} alt="button-icon" className='w-[12px]'/>
       </button>
    </div>
  )
}

export default button;
