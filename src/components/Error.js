import React from 'react'
import eror from '../images/error.png'
const Error = () => {
  return (
    <>
      <div className='h-[100vh] w-full bg-white'>
        <h1 className='pt-[6cm] text-center text-5xl font-medium'>
            <span className='font-bold ml-[-13cm]'>Sorry,</span><br/><br/>
            This page Is Not Found Here
        </h1>
        <img src={eror} className='ml-[9.5cm] mt-7'/>
        </div>
    </>
  )
}

export default Error