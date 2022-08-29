import React from 'react'
import './Mybody.css'
import myhero from '../images/myhero.jpg'
import heromobile from '../images/heromobile.jpg'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'


function Mybody() {
  return (
    <div>
      <div className='first-div'>
        <div className='div1'>
            <img src={logo} alt="logo" />
            <img id='mobile' src={heromobile} alt="heromobile" />

            <h1><span className='we'>WE'RE <br /></span><b>COMING <br />SOON</b></h1>
            <p className='para'>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
            
            <div className="inpbutt">
              <input type="text" placeholder='email...' required  />
            {/* <img id='im' src={myicon} alt="icon" /> */}
            <Link to='/about'>
            <button>{">"}</button>
            </Link>           
            </div>           
        </div>
        <div>
            <img id='desk' src={myhero} alt="..lady" />
        </div>
      </div>        
        <footer>
          &copy; Copyright Gabbie A. Online Services 2022 | Developed by <span>Alexander Gabrielle</span>
        </footer>
    </div>
  )
}

export default Mybody