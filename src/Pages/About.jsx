import React from 'react'
import "./About.css"
import Footer from '../Components/Footer'
const About = () => {
  return (
    <>
    <div className='About'>
      <div className='About_Container flex '>
        <div>
        <img src="Images\Pizza_2.jpg" alt="" />
        <div className='About_Container_Icons'>
          <img src="Images\Facebook.svg" alt="" />
          <img src="Images\Twitter.svg" alt="" />
          <img src="Images\Instagram.svg" alt="" />
        </div>
        </div>
        <div className='About_Container_txt '>
        <div>

       <h3>About Us</h3>
       <div className='hrLine'></div>
       
               </div>
       <div>

       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
       <p className='mt-4'>
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>
       </div>
        </div>

      </div>
    </div>
      <Footer/>
    </>
  )
}

export default About