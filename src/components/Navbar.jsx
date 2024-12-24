import React from 'react'
import logo from '../images/logo.webp'
import { NavLink, Link } from 'react-router-dom'
import LaunchIcon from '@mui/icons-material/Launch';
const Navbar = () => {
    return (
        <>
            <nav className='h-[2.6cm] w-full bg-white flex fixed top-0 z-20'>
                <Link to='/'>
                    <div>
                        <img src={logo} className='w-[3.4cm] ml-[.7cm] mt-3'/>
                    </div>
                </Link>
                <div className='ml-[2cm] mt-9'>
                    <ul>
                        <li className='text-[18px] space-x-7'>
                            <NavLink to='/about'>About</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                            <NavLink to='/community'>Community</NavLink>
                            <NavLink to='/web'>Web3.0</NavLink>
                            <NavLink to='/more'>More</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='ml-[16cm] flex'>
                    <Link className='mt-[1.1cm] ml-[-2.4cm] text-[18px] hover' to='https://github.com/panaverse'>Github</Link>
                    <LaunchIcon className='mt-[1.1cm] ml-2 w-4 h-4' />
                    <Link to='https://portal.piaic.org/signup'><button className='ml-[.6cm] h-[1.5cm] w-[3.7cm] bg-blue-700 hover:bg-red-600 text-white mt-[.6cm] text-[19px] font-medium rounded'>Apply</button></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar