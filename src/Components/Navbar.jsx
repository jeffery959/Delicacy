
import {useLocation} from'react-router';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import { useDispatch,useSelector } from 'react-redux';

import { OpenSignmodal } from "../features/counter/signInSlice"
import SignIn from './SignIn';

const Navbar = () => {
      const OpensignIn = useSelector((state)=>state.signIn.SignModal.Sign)
      const dispatch = useDispatch()
   const location = useLocation();
   const [navcolor,setNavColor]=useState("")
   const [navImage,setNavImage]=useState("Logo")

   useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
        const threshold = 100; 
        if(location.pathname==='/'){
              if (currentScrollPos > threshold) {
                    setNavColor('SelectiveNav')
                    setNavImage('logo-white')
                  } else {
                  setNavColor('')
                  setNavImage('Logo')
                  
            }
           }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });

   useEffect(()=>{


     if(location.pathname==='/'){
       setNavColor('')
       setNavImage('Logo')
      }
      else{
        setNavColor('SelectiveNav')
        setNavImage('logo-white')
       
       
     }
   },[location.pathname])
  return (
<nav className={`Navbar ${navcolor}`}>
<img src={`/Icons/${navImage}.svg`}alt="" />

    <ul>
        <li><NavLink to="/"  className={({ isActive }) => isActive ? "Active" : ""
  }>Home</NavLink></li>
        <li><NavLink to="/Menu" className={({ isActive }) => isActive ? "Active" : ""
  }>Menu</NavLink></li>
        <li><NavLink to="/Order" className={({ isActive }) => isActive ? "Active" : ""
  }>Orders</NavLink></li>

        <li><NavLink to="/About" className={({ isActive }) => isActive ? "Active" : ""
  }>About</NavLink></li>
        <li><NavLink to="/Location" className={({ isActive }) => isActive ? "Active" : ""
  }>Location</NavLink></li>
  <IconButton className='Sign' onClick={()=>dispatch(OpenSignmodal("Nothing"))}>
  <img src="./Icons/Icon.svg" alt="" />
  </IconButton>
  {
OpensignIn&&
  <SignIn/>
  }
 
    </ul>
</nav>
  )
}

export default Navbar
