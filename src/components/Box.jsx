import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Box = (props) => {
  return (
        <>
        <div className='mt-[-.5cm] pt-[.5cm]'>
          
<div className='h-[3cm] w-[3cm] ml-7 mt-8' id='container'>
<div className='h-[1.8cm] w-full bg-blue-600'>
    <h1 className='text-center font-bold text-5xl pt-2 text-white'>{props.h1}</h1>
</div>
<div className='bg-white h-[1.2cm] w-full'>
    <p className='text-center pt-1 text-[18px] font-medium'>{props.p2}</p>
</div>
<div className='h-[3cm] w-[500px] bg-white ml-[4cm] mt-[-3cm]'>
<p className='text-[20px] font-medium pt-2 ml-6'>Web 3 Seminar</p>
<AccessTimeIcon className='ml-6 mt-3'/>
<p className='ml-[1.5cm] mt-[-.6cm]'>{props.p}</p>

<LocationOnIcon className='ml-[4cm] mt-[-1.3cm]'/>
<p className='ml-[5cm] mt-[-1.3cm]'>{props.p1}</p>
<button className='float-right mt-[-.8cm] mr-[1cm] h-[1cm] w-[1cm] border hover:bg-sky-200 bg-gray-100'>
    →
</button>
</div>
</div>

</div>
        </>
  )
}

export default Box



