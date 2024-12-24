import React from 'react'

const Quartersxtsth = (props) => {
  return (
    <>
    <div className='cursor-pointer h-[200px] w-[600px] bg-green-900 mt-7 rounded transition-transform duration-300 transform hover:scale-105'>
       <h1 className='text-center text-3xl font-bold pt-[1cm] text-white'>{props.h1}</h1>
       <p className='text-center mt-4 text-white'>{props.p}</p>
      </div>
 </>
  )
}

export default Quartersxtsth