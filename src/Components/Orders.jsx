import React,{useState,useEffect,memo} from 'react'
import "./Order.css"
import { useSelector,useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import SingleOrder_Item from './SingleOrder_Item'
import {  Payment} from '../features/counter/menuSlice'
import CheckIcon from '@mui/icons-material/Check';
import { IconButton } from '@mui/material';


//onClick={()=>dispatch(Payment(List.id))}
const Modal = ({order,triggerModdal}) => {
  return (
    <div className={`Modal bg-white fixed duration-1000 ${order} text-black    text-xl rounded-full border border-slate-200 opacity-100 items-center flex justify-around px-6  left-1/2 transform -translate-x-1/2 z-50`}>
      <IconButton onClick={()=>triggerModdal("green")}>

    <div className='bg-green-400 flex rounded-full text-white'><CheckIcon fontSize='small'/></div>
      </IconButton>
      <IconButton onClick={()=>triggerModdal("red")}>

    <div className='bg-red-500 flex rounded-full text-white '><CloseIcon fontSize='small'/></div>
      </IconButton>
      <p >
      Confirm

      </p>
    </div>
  )
}



const Orders = () => 
{


  const dispatch = useDispatch();
  const [order,setOrder]=useState('-top-28')
  const triggerModdal=(payload)=>{
    setOrder('top-16')
    setTimeout(()=>{
      setOrder('-top-28')
      
    },800)
    if(payload==='green'){
      dispatch(Payment())
    }
  }
  
  const OrderList= useSelector((state) => state.menu.OrderList);
  
  
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{setLoading(false)},1000)
  },[]) 
  
  return (
    <div className='Order'>
     
     <h3>Orders</h3>
     <div >
     <Modal order={order} triggerModdal={triggerModdal}/>
  { 
  OrderList.length?
  
  
  
   OrderList.map((item)=>{
      
     
      if(item.Total==='0.00'&&item.id===0){
        return <div className=' w-full   flex justify-center items-center' style={{height:"80vh"}}>

        <p className='text-gray-500'>You have zero Orders</p>
            </div>
      }else if(item.Total==='0.00'){
        return
      }
      else{
        return <SingleOrder key={item.id} List={item} setOrder={setOrder}/>

      }

    }
    ):<div className=' w-full   flex justify-center items-center' style={{height:"80vh"}}>

<p className='text-gray-500'>You have zero Orders</p>
    </div>

  }
      </div>
    
    </div>
  )
}




const SingleOrder=memo(({List,setOrder})=>{
  const dispatch =useDispatch()

  
 
  return(
    <>
    <div className='Order_Container '>
      <div className='pb-2 flex justify-between items-center Order_Container_flex'>
           <div className='Order_Container_flex_txt'>
             <h3>Order #212</h3>            
          <p>6/16/23-10:23</p>
           </div>
     <img src="Images\Batman.jfif" alt="" className=' rounded-full' />
    </div>
  <div className='Order_Div'>
    {

      List.SmallList.map((item,key)=>   {
        
       
      return  <SingleOrder_Item key={item.id} Item={item} Payed={List.Payed} />  
      } 
      
      )
      
      
    }

    
  </div>
    
    <div className='Order_Container_foot flex flex-col'>

    <p>X{List.SmallList.length} Items</p>
    <div className='Order_Container_foot_text '><p className='text-gray-500'>${List.Total}

      
    </p>
    
    
    {List.Payed? <p className='Payed'>Payed</p>:
      
     <button onClick={()=>setOrder("top-16")} >Pay</button>
    }
     </div>
    </div>
      </div>
    </>
    )
})


export default Orders