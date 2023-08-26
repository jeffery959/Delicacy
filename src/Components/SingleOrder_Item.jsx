import React from 'react'
import "./SingleOrder_Item.css"
import { IconButton } from '@mui/material'
import { RemoveOne } from '../features/counter/menuSlice'
import { useDispatch } from 'react-redux'
const SingleOrder_Item=({Item,Payed})=>{
  
  const dispatch = useDispatch()
  
  
  
  return(
      <div className='SingleOrder_Item '>
  
      <img src={Item.img}alt="" loading="lazy"/>
      <div className='SingleOrder_Item_text'>
        <div className='flex  justify-between items-center w-full'>
      <h3>{Item.name}</h3>
      <IconButton className='Ic' onClick={()=>Payed?null:dispatch(RemoveOne(Item))}>

      <img src="Icons\Close.svg" alt="" />
      </IconButton>
        </div>
       <div className='SingleOrder_Item_text_Unit mt-1'><p >${Item.price}</p> <p>Qty:{Item.count}</p></div>
      </div>
      </div>
    )
  }
export default SingleOrder_Item