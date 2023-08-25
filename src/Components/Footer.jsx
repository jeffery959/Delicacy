
import "./Footer.css"
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate();
    const NavAbout=()=>{
        navigate('/')
        setTimeout(() => {
                  
            const aboutSection = document.getElementById('about-section');

      // Calculate the offset to center the about-section vertically
      const navbarHeight = document.querySelector('nav').offsetHeight; // Assuming you have a navigation bar
      const offset = aboutSection.offsetHeight / 2 + navbarHeight;
      
      // Scroll to the element with ID "about-section" and center it
      window.scrollTo({
        top: aboutSection.offsetTop + offset+670,
        behavior: 'smooth',
      })
               
              }, 5);
            
      }
  return (
  
        <footer className='Footer'>
  <div>
    <p>© 2023 Copyright</p>
    <p>Privacy policy</p>
  </div>
  <div>
    <p>Terms&Conditions</p>
    <p>Delicacy is a food odering webiste for you sit home and start ordering</p>
  </div>
  <div className='Last'>
    <button onClick={NavAbout}>Contact</button>
    <div>
      <img src="\Icons\Instagram.svg" alt="" />
      <img src="\Icons\Facebook.svg" alt="" />
      <img src="\Icons\Twitter.svg" alt="" />
    </div>
  </div>
        </footer>
   
  )
}

export default Footer