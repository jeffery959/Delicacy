
import './Banner.css'
import { FaStar } from 'react-icons/fa'
const Banner = () => {
  return (
    <section className='Banner'>
       <img src="Images\BackgroundPhoto.jpg" alt=""/>
       <p>Pass by lunch and have your munch</p>

  <div >
  <Ratings/>
  <Ratings/>
  <Ratings/>
  <Ratings/>
  <Ratings/>
  </div>
  
    </section>
  )
}


const Ratings= () => {
  return (
    <>
    <div className='Ratings '>
    <img src="Images\Burger.jpg" alt="" className='' />
     <div className='px-2 w-full'>
  
      <p className='text-gray-400'>$15</p>
     <div className='flex'>

    {[...Array(5)].map((star,id)=>
     <FaStar key={id}
     className='smStar '
     color="#ffc107"/>
     )      
     
     
    }
    </div>
    <p>Huge burger sandwich</p>
   </div>
   
   </div>
    </>
  )
}


export default Banner
