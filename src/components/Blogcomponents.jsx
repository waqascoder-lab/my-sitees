import React from 'react'
import img from '../images/blog.avif'
import jnd from '../images/jon doe.jpg'
import { Link } from 'react-router-dom'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
const Blogcomponents = () => {
  return (
   <>
    <div className='h-[550px] w-[450px] bg-white shadow border rounded' id='sjd'>
        <Link to=''><img src={img} className='h-[300px] w-[400px] rounded ml-6 pt-6 object-cover transition-transform duration-300 transform hover:scale-105'/></Link>
        <button className='text-blue-400 bg-blue-200 ml-6 mt-4'>Engeenring</button>
        <button className='text-blue-400 bg-blue-200 ml-6 mt-4'>Product</button>
        <h1 className='text-2xl font-bold ml-5 mt-4'>Some blog title</h1>
        <p className='ml-5'>Lorem Ipsum is simply dummy text of the printing and<br/>
         typesetting industry.</p>
         <img src={jnd} className='w-[50px] rounded-full ml-5 mt-6'/>
         <p className='ml-[2.6cm] mt-[-1cm] font-medium'>John Doe</p>
         <AccessTimeIcon className='float-right mt-[-.6cm] mr-[5cm]'/>
         <p className='ml-[8cm] mt-[-.7cm]'>10/7/2024</p>
    </div>
   </>
  )
}

export default Blogcomponents