import React from 'react'
const Datas = (props) => {

  return (
    <>
     <div className='h-[270px] w-[300px] bg-red-600 rounded object-cover transition-transform duration-300 transform hover:scale-105'>
        <img src={props.img} className='ml-[2.7cm] pt-[1cm] w-[2.4cm]'/>
        <h1 className='text-center text-3xl font-bold text-white mr-1'>{props.h1}</h1>
        <p className='text-center text-1xl mr-1 text-white pt-4 font-medium'>{props.p}</p>
     </div>
     
    </>
  )
}

export default Datas