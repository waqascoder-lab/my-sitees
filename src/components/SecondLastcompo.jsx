import React from 'react'

const SecondLastcompo = (props) => {
  return (
    <>
      <div className='h-[320px] w-[400px] shadow-xl cursor-pointer rounded object-cover transition-transform duration-300 transform hover:scale-105'>
          <h1 className='text-center pt-[2cm] text-3xl font-bold text-blue-600'>{props.h1}</h1>
          <p className='text-center mt-[1cm] text-[16px] font-medium text-red-500 px-[10px]'>{props.p}</p>
        </div>
    </>
  )
}

export default SecondLastcompo