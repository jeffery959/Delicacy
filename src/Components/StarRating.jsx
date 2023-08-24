import React,{useState}from 'react'
import {FaStar} from "react-icons/fa"
const StarRating = () => {
    const [rating,setRating]=useState(null)
    const [hover,setHover]=useState(null)
   
  return (
    <div className='flex'>

        {[...Array(5)].map((star,i)=>{
            const ratingValue = i+1;

return(

    <label key={i}>
        <input 
        type="radio" 
        name="rating"
         className='hidden' 
        value={ratingValue}
         onClick={()=>setRating(ratingValue)} 
         
         />

        <FaStar
         className='Star'
         onMouseEnter={()=>setHover(ratingValue)}
         onMouseLeave={()=>setHover(null)}
         color={ratingValue<=(hover||rating)?"#ffc107":"#DCDCDC"}/>
        </label>
                )
        }
        
        )
        }
    </div>
  )
}

export default StarRating