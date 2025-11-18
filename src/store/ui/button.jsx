import React from 'react'

function button({children, className=''}) {
  return (
    <>
    
      <button className={`bg-[#01282F] text-[#FFFFFF] px-6 py-2 ${className}`}>
        {children}
      </button>
    
    </>
  )
}

export default button;
