import React from 'react'
import img from '../images/side.webp'
import arr from '../images/arrow.webp'
import angl from '../images/angle.webp'
import { Link } from 'react-router-dom'
import ig from '../images/hero-1-dot-2.png'
import Datas from './Datas'
import bar from '../images/barr.webp'
import stu from '../images/student.webp'
import tec from '../images/teacher.webp'
import tech from '../images/teacher.webp'
import zig from '../images/zigzag.webp'
import i1 from '../images/education-shape-05.png'
import i2 from '../images/globel.webp'
import dev from '../images/devloper.webp'
import scren from '../images/screen.webp'
import deo from '../images/deo.webp'
import Box from './Box'
import cma from '../images/comma.png'
import selff from '../images/self.jpg'
import FooterSecond from './FooterSecond'
const Home = () => {
    return (
        <>
            <div className='h-[115vh] w-full bg-gray-100'>
                <p className='pt-[5cm] ml-[2.3cm] text-blue-600 font-bold text-[18px] tracking-wide'>Discover your journey</p>
                <div>
                    <img src={img} className='mt-4 h-[230px] ' />
                    <h1 className='ml-[2.3cm] mt-[-5.2cm] text-[50px] font-bold leading-[1.4cm] tracking-wider'>Launch Your Dev<br /> Career With Web 3<br /> and Metaverse</h1>
                    <img src={arr} className='mt-[-.8cm] w-[240px]' />
                    <p className='mt-[-3.8cm] ml-[2.3cm] leading-7'>Certified Web 3.0 and Metaverse Developer. A One and Quarter Years<br />
                        Panaverse DAO Earn as you Learn Program Getting Ready for the Next<br />
                        Generation of the Internet.</p>
                    <Link to='/web'><button className='h-[1.5cm] w-[5.8cm] bg-blue-600 text-white ml-[2.3cm] mt-5 rounded font-medium text-[20px] hover:bg-red-600'>Explore Courses</button></Link>
                </div>
                <div className='float-right'>
                    <img src={angl} className='w-[570px] mt-[-11cm] rounded-l-[1.8cm] pr-5' />
                    <img src={ig} className='float-right mt-[-8cm] w-[1.5cm]' />
                </div>
            </div>
            <div className='h-[90vh] w-full'>
                <h1 className='text-center pt-[2cm] text-5xl font-bold'>We Are <span className='text-blue-600'>Proud</span></h1>
                <p className='text-center mt-5 text-[20px]'>You don't have to struggle alone, you've got our assistance and help.</p>
                <div

                    className='flex justify-center gap-11 mt-11'>
                    <Datas img={stu} p="Students Enrolled" h1="5,000" />
                    <Datas img={bar} p="class compeleted" h1="1,000" />
                    <Datas img={tec} p="skilled instructor" h1="100+" />
                    <Datas img={tech} p="Student Enrolled" h1="1,000" />
                </div>
                <img src={zig} className='float-right w-[2cm]' />
            </div>

            <div className='w-full h-[80vh]'>
                <div>
                    <img src={i1} />
                    <img src={i2} className='w-[560px] mt-[-15cm] ml-[1cm]' />
                </div>

                <h1 className='float-right mr-[9.9cm] text-4xl font-bold mt-[-13cm]'>What is Web <span className='text-blue-600'>3.0</span></h1>
                <p className='float-right mt-[-11cm] mr-3 leading-7 text-[16px]'>
                    Web 3.0 has the potential to change the internet as we know it forever. You're still<br />
                    early in catching the trend and building your first blockchain application, acquiring<br />
                    the skills to get a high- paying job, or creating your own web 3.0 projects that can<br />
                    make you money. In Web 2.0 all the data is controlled by the Big Tech companies, such<br />
                    as Google, Apple, etc. In the decentralized web, no single person/ company owns any data<br />
                    or information about anyone, and everything is visible to the public. Web3, also known<br />
                    as the decentralized web, is the third and latest" phase” of the internet. Web3 is built<br />
                    on peer-to-peer networks of computers that talk to each other without middlemen.
                </p>
                <Link to='/web'><button className='h-[1.6cm] w-[5cm] bg-blue-700 float-right mt-[-4cm] mr-[12cm] rounded text-white font-medium text-[19px] hover:bg-red-600'>Read More</button></Link>
            </div>

            <div className='w-full h-[145vh]'>
                <h1 className='text-center pt-[2cm] text-5xl font-bold'>The Program in a Nutshell</h1>
                <h3 className='text-center mt-7 text-3xl font-bold text-red-500'>Earn While You Learn</h3>
                <p className='text-center mt-7 text-[21px]'>In this brand-new type of curriculum, students will learn how to make money and boost exports in the <br />
                    classroom and will begin doing so within six months of the program's beginning. It resembles a cross <br />
                    between a corporate venture and an educational project.</p>
                <img src={zig} className='float-right w-[2cm]' />
                <img src={i1} className='mt-[1.4cm]' />
                <h1 className='mt-[-11cm] ml-[.3cm] text-[40px] font-medium'>Achieve Your<span className='text-blue-600'> Goals</span></h1>
                <p className='ml-[.3cm] text-[17px] leading-7 mt-5'>This curriculum is intended for beginners who want to learn software development<br />
                    from the ground up. The first two quarters are shared by all specialties and are <br />
                    dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web<br />
                    2.0 development. It is going to be a fifteen-month-long hybrid program that includes<br />
                    both onsite and online classes and is divided into five quarters of 13 weeks each.<br />
                    The emphasis will be on hands-on learning by educating students to produce projects.<br />
                    To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m.<br />
                    (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes<br />
                    complemented by online Zoom laboratories and recorded videos.</p>
                <img src={dev} className='w-[640px] float-right mt-[-9.5cm]' />
                <Link to='https://portal.piaic.org/signup'><button className='h-[1.6cm] w-[5cm] bg-blue-700 mt-[1cm] ml-3 rounded text-white font-medium text-[19px] hover:bg-red-600'>Apply Now</button></Link>
            </div>
            <hr className='w-[600px] ml-[10cm]' />
            <div className='h-[90vh] w-[full]'>
                <img src={i1} className='w-[450px] ml-[3cm] pt-11' />
                <img src={scren} className='pt-7 mt-[-9.4cm] ml-[3.4cm]' />
                <img src={deo} className='mt-[-9.9cm] ml-[3cm] relative' />
                <h1 className='float-right mt-[-3cm] mr-[10cm] text-[36px] font-bold'>Live Class From<br />
                    Anywhere Via <span className='text-blue-600'>Zoom</span></h1>
                <p className='ml-[18cm] mt-7 text-[18px]'>Helping employees gain skills and providing career development <br />
                    often take a back seat to business priorities but workplace. It <br />
                    employs a hybrid teaching format, with core onsite classes <br />
                    complemented by online Zoom laboratories and recorded videos.</p>
                <Link to='https://zoom.us/'><button className='h-[1.6cm] w-[5cm] bg-blue-700 mt-[1cm] ml-[18cm] rounded text-white font-medium text-[19px] hover:bg-red-600'>Learn More</button></Link>
            </div>


            {/* last part */}

            <div className='h-[100vh] w-full bg-slate-200'>
                <div>
                    <h1 className='text-[45px] font-bold ml-7 pt-[1cm]'>Upcoming Events</h1>
                    <div>
                        <Box p='9:30 AM' p1='Lahore' h1="29" p2="jan 23" />
                        <Box p='11:30 AM' p1='Karachi' h1="9" p2="march 23" />
                        <Box p='2:30 PM' p1='Lahore' h1="16" p2="jun 23" />
                    </div>
                    <div>
                        <h1 className='float-right text-[45px] font-bold mt-[-13.3cm] mr-[6cm]'>Student's Feedback</h1>
                        <div className='h-[405px] w-[630px] bg-white float-right mt-[-10.7cm] mr-7'>
                            <img src={cma} className='w-[100px] ml-[7cm] pt-[1.2cm]' />
                            <p className='text-center text-[16px]'>“Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
                                Nemo expedita voluptas culpa <br />
                                sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                            <img src={selff} className='w-[70px] ml-[7.5cm] mt-6 rounded-full' />
                            <p className='text-center mt-2 ml-2 font-medium'>Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* end */}
            <FooterSecond />

        </>
    )
}

export default Home