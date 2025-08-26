

import { NotificationsNoneOutlined, SearchOutlined, SettingsOutlined } from '@mui/icons-material'
import Image from 'next/image'
import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'> Twisty Hub </div>
        <ul>
            <li> Home </li>
            <li> Messages </li>
            <li> Discover </li>
            <li> Wallet </li>
            <li> Projects </li>
        </ul>
        <div className='end'>
            <div className='input-bar'>
              <input type='text' className='search-input' alt='bio-img' placeholder='Enter your search request' />
              <SearchOutlined className='search-out'/>
            </div>
            <SettingsOutlined className='outer-icons' />
            <NotificationsNoneOutlined className='outer-icons' />
            <div className='bio'>
              <Image width={25} className='bioss' height={25} src={'/women1.jpg'} />
            </div>
        </div>
    </div>
  )
}
export default Navbar