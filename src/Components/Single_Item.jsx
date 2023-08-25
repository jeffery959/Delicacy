import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const SingleItem = ({name,price,Description,img,id,item,func})=>{
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulating loading delay for demonstration
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 5000);
    
        return () => clearTimeout(timer);
      }, []);
 
    return(

        <div  className='FoodList_items_item relative flex  ' >



        <Link to={`/Menu/items/${id}` } >
        <img src={img} loading='lazy'/>
     
        </Link>
    
        
        
        <div className='FoodList_items_item_txt z-10  '>
      <div className='w-full flex items-center justify-between'>
      <h3>{name}</h3>
      <p className='Price'>
      {price}
      </p>
      </div>
      <p>{Description}</p>
      
      </div>
      <button className='order z-10 '  onClick={()=>func(item)}>Order</button>
     

    
      </div>
    );
  }
  
  
  const SingBigItem =({name,price,Description,img,id})=>{
 

    return (

        <Link  to={`/Menu/items/${id}` }  className='BigItem p-3'>
        

            
        <div className='BigItem_img px-14 py-5' style={{backgroundImage: `url(${img})`}}>
      
       <div className='Htitle'>
       <div className='HR-Line'></div>
       <h3>Tonights <span>Special Dish</span></h3>
       </div>
       <div className='Main_special  '>
       <div className='  special'>
       <div className='flex justify-between special-shrt text-white '>
       <h3>Hamburger</h3>
        <p>$34</p>
       </div>
       <p className='text-white special-shrt-txt'>Grilled ribs coated and longed grilled come and get yours now</p>
       </div>
       <button className='bg-white w-full'>Order</button>
       </div>
       </div>
       
    
       </Link>
    )
  }


  export {SingBigItem,SingleItem}