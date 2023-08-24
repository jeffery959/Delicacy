
import Navbar from './Components/Navbar'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



const Layout = () => {
  
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
  return (

    <>
      <Navbar/>
      
        <Outlet />
   
      
    </>
  )
}

export default Layout
