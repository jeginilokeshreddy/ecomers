import React from 'react'
import { assets } from '../../assets/assets'
import "./Header.scss"

export default function Header() {
  //link(single value) links(multi value)
  //obj,obj-value,Array,array-value
  //_ for traversing 
  //navobj-img   end is my output on ui
  //nav_val_dot   output data name is key name (3parent travers inside)
  //nav_val-dot
  //container (_) parent wil not hold any value
  //navobj_links
  //navobj_links-home
//for output ddipaly no sectionname
//give proper name dont give common name section products card give penproduct pencil product
  return (
    <div className='header-componet'>
      <nav className="nav-section d-flex justify-content-between">
        <img className="navlog-image" src={assets.logo} alt="image"/>
        <ul className="nav-menu-section d-flex justify-content-between gap-4 align-items-center">
          <li className='home-link'>Home</li>
          <li className='menu-link'>Menu</li>
          <li className='mobile-link'>Mobile-app</li>
          <li className='contact-link'>Contact us</li>
        </ul>
        <div className="nav-icon-section d-flex justify-content-end gap-4">
          <img src={assets.search_icon} alt="" className='searchicon-img' />
          <div className="nav-icon-search-section d-flex">
            <img src={assets.basket_icon} alt="image not found" />
            <p className="dot-text"></p>
          </div> 
          <button className='signin-btn'>Sign in</button>
        </div>
      </nav>
    </div>
  )
} 

//which are goin to hold more elemnets section will not diaply any value 
