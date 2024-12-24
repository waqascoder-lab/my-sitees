import React from 'react'
import Blogcomponents from './Blogcomponents'

const Blog = () => {
  return (
    <>
       <div className='h-[220vh] w-full'>
        <div className='pt-[5cm] justify-center flex space-x-[2cm] ml-[2cm] flex-wrap mr-[2cm]'>
        <Blogcomponents/>
        <Blogcomponents/>
        <div className='mt-[2cm]'>
        <Blogcomponents/>
        </div>
        </div>
       </div>
       <div className='h-[95vh] w-full bg-white'>
         <h1 className='ml-[5cm] text-4xl font-bold pt-8'>What we write about</h1>
         <p className='ml-[5cm] mt-8 text-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at.<br/>
          Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, <br/>
          commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus<br/>
           non, placerat congue elit.</p>

           <p className='ml-[5cm] mt-8 text-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at.<br/>
          Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, <br/>
          commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus<br/>
           non, placerat congue elit.</p>

           <p className='ml-[5cm] mt-8 text-[21px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum quam arcu, eu tempus tortor molestie at.<br/>
          Vestibulum pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed imperdiet. Mauris quis erat consequat, <br/>
          commodo massa quis, feugiat sapien. Suspendisse placerat vulputate posuere. Curabitur neque tortor, mattis nec lacus<br/>
           non, placerat congue elit.</p>
       </div>
    </>
  )
}

export default Blog