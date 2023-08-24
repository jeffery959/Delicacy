import {lazy,Suspense} from 'react'
import Navbar from './Components/Navbar'
import Loading from './Pages/Loading'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



const Outlet = lazy(()=>import('react-router-dom').then((module)=>({default:module.Outlet})))
const Layout = () => {
  
  const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
  return (

    <>
      <Navbar/>
      <Suspense fallback={<Loading/>}>
        <Outlet />
      </Suspense>
   
      
    </>
  )
}

export default Layout
