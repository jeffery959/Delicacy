
import './Hme_Section.css'
import './Banner.css'

import { FaStar } from 'react-icons/fa'
import Footer from './Footer'


const Hme_Section = () => {

  return (
    <>
    <div className='w-full flex flex-col'>
    <div className='Hme_Section flex flex-col items-center'>
 <div className='Title'>
  <h3>Reviews</h3>
  <div className='Rvline'></div>
 </div>
  <div className='flex justify-between w-full Reviews_container '>
 

      <Reviews/>
      <Reviews/>
      <Reviews/>
  </div>

  <div className='Title ' id="about-section" >
  <h3>Get In Touch</h3>
  <div className='Rvline'></div>
 </div>
<div className='Before_contact' >

 <div className='Contact ' > 
  <input type="text" placeholder='Name' />
  <input type="text" placeholder='Email' />
  <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
  <div className='Contact_Icons flex justify-between items-center'>
    <div>

    <img src="Icons\Call.svg" alt="" />
    <p>Phone:<span>+123 456 789</span> </p>
    </div>
    <div>

    <img src="Icons\Email.svg" alt="" />
    
    <p>Email:<span>someone@gmail.com</span></p>
    </div>
    <div>

    <img src="Icons\Location.svg" alt="" />
    <p>Location:<span>123 South Bronx street,New York NY</span> </p>
    </div>
  </div>
 </div>
</div>
<Footer/>
    </div>

    </div>
    </>
  )
}



const Reviews = () => {
  return (
    <div className='Reviews_Card'>
      <img src="User\Person_1.jpg" alt="" />
      <div className='txt'>

       <div className='flex '>
        

{[...Array(5)].map((star,id)=>
 <FaStar key={id}
 className='smStar'
 color="#ffc107"/>
 )      
 
 
}
</div>
   <h3>John Doe</h3>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit veniam a ea numquam iusto officiis accusantium alias</p>
 </div>
    </div>
  )
}

export default Hme_Section