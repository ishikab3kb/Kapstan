import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import kapstan from '../../assets/kapstan.png'
import { RxDashboard } from "react-icons/rx";
import { FaDollarSign } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";
import { IoIosLink } from "react-icons/io";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='app__navbar'>
        <div className='app__navbar-upper'>
            <div className='app__navbar-logo-name'>
                <img src={logo} alt='logo' className='logo'></img>
                <img src={kapstan} alt='Kapstan' className='name'></img>
            </div>
            <div className='app__navbar-applications'>
                <button><RxDashboard fontSize={20} /><p>Applications</p></button>
            </div>
            <ul className='app__navbar-links'>
                <li><IoIosLink fontSize={14}/><p>Connections</p></li>
                <li><FaDollarSign fontSize={14}></FaDollarSign><p>Cost</p></li>
                <li><LuShield fontSize={14}></LuShield><p>Security<span>Beta</span></p></li>
            </ul>
        </div>
        <div className='app__navbar-lower'>
            <div className='app__navbar-lower-links'>
                <p>Admin</p>
                <p>Docs</p>
            </div>
            <div className='app__navbar-minimize'>
                <p><MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft></p>
        </div>
        </div>
    </div>
  )
}

export default Navbar