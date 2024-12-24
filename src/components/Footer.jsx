import React from 'react'
import phon from '../images/phone.png'
import { Link } from 'react-router-dom'
import cloud from '../images/cloud.webp'
const Footer = () => {
  function contct() {
    alert("Contact Us For Build Your Project's!")
  }
  return (
    <div className='h-[25vh] w-full bg-gray-900 flex space-x-[7cm]'>
      <div>
        <h3 className='pt-[2.3cm] ml-[2cm] text-white'>© Copyrighted and Designed by</h3>
       <Link to='https://github.com/waqascoder-lab'><p className='ml-[3cm] font-bold text-blue-600 hover:underline'>Muhammad Waqas</p></Link>
      </div>
      <div>
        <img src={phon} className='w-[90px] pt-[1.2cm]'/>
        <p className='ml-[2.7cm] mt-[-1.3cm] text-white'>Have a question? Call us 24/6</p>
        <Link><h3 className='ml-[2.7cm] font-bold text-2xl text-white' onClick={contct}>+923325498508</h3></Link>
      </div>
      <div>
        <p className='text-white pt-[1.6cm] ml-5 cursor-pointer hover:underline'>powerd by</p>
        <img src={cloud} className='w-[130px]'/>
      </div>
    </div>
  )
}

export default Footer