import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import './header.css'

const Header = () => {
  return (
    <div className='app__header'>
        <div className='app__header-application'>
            <p>Applications</p>
            <div className='app__header-application-name'>
                <p>tic-tac-toe</p>
                <IoIosArrowDown></IoIosArrowDown>
            </div>
        </div>
        <div className='app__header-user'>
            <img alt='user'></img>
            <p>John Doe</p>
            <IoIosArrowDown></IoIosArrowDown>
        </div>
    </div>
  )
}

export default Header