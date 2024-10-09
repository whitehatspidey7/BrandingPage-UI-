import React from 'react'
import './Nav.css'
import brand_logo from '../../../assets/brand_logo.png'

const Nav = () => {
  return (
    <div className='Nav-bar'>
      
      <div className='Nav-left'>
      <img src={brand_logo}/>
      </div>

      <div className='Nav-middle'>
        <ul>
          <li >MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li> 
        </ul>
      </div>

      <div className='Nav-right'>
      <button type='submit'>Login</button>
      
      </div>
      
    </div>
  )
}

export default Nav
