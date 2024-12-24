import React from 'react'
import log from '../images/logo.webp'
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
const FooterSecond = () => {
  return (
    <div>
        <>
          <div className='h-[60vh] w-full bg-black flex space-x-[2.5cm]'>
           <div>
               <img src={log} className='w-[180px] pt-[1cm] ml-[1.3cm]'/>
               <p className='text-white ml-[3cm] mt-[-1.2cm] text-3xl'><i><b>Panaverse<br/> DAO</b></i></p>
               <p className='ml-[1.3cm] mt-[1.1cm] leading-7 text-white'>The Future of the Web is Web 3.0, Metaverse, and Edge Computing.<br/>
                Panaverse DAO is a movement to spread these technolgies globally.<br/>
                 It is community of Web 3 and Metaverse developers, designers, <br/>
                 trainers, startup founders and service providers.</p>
                 <div className='ml-[1.3cm] space-x-5 mt-7'>
                   <Link o='https://x.com/i/flow/login?redirect_after_login=%2Ft_twiter'><TwitterIcon className='hover:text-blue-400 text-white'/></Link>
                   <Link to='https://www.youtube.com/@codewithwaqas123'><YouTubeIcon className='hover:text-red-600 text-white'/></Link>
                   <Link><InstagramIcon className='hover:text-red-500 text-white'/></Link>
                    <Link to='https://github.com/panaverse'><GitHubIcon className='hover:text-gray-400 text-white'/></Link>
                 </div>
           </div>
           <div id='dvv'>
            <h2 className='text-[22px] font-bold pt-[1.5cm] text-white'>Company</h2>
            <ul>
                <li>
                    <Link to='/about'>About Us</Link>
                    <Link to='/blog'>Blog</Link>
                    <Link>instructors</Link>
                    <Link>Testimoniols</Link>
                    <Link>Build Career</Link>
                    <Link>Become instructor</Link>
                </li>
            </ul>
           </div>
           <div id='dvv'>

           <h2 className='text-[22px] font-bold pt-[1.5cm] text-white'>Support</h2>
            <ul>
                <li>
                    <Link>Help Center</Link>
                    <Link>Terms of Service</Link>
                    <Link>Legal</Link>
                    <Link>Privacy Policy</Link>
                    <Link>Satus</Link>
                </li>
            </ul>
           </div>
           <div>
           <h2 className='text-[22px] font-bold pt-[1.5cm] text-white'>Stay up to date</h2>
            <input type='email' placeholder='Enter email' className='mt-[1.1cm] h-[1.3cm] text-[19px] px-3'/>
            <button className='h-[1.4cm] w-[1.6cm] bg-red-600 ml-3 text-white font-bold hover:bg-red-400'>Email</button>
           </div>
          </div>
        </>
    </div>
  )
}

export default FooterSecond