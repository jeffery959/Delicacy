import React,{ memo,useState}from 'react'
import { Link } from 'react-router-dom'
import { Add_Order} from '../features/counter/menuSlice'
import "./FoodList.css"
import CheckIcon from '@mui/icons-material/Check';
import { useSelector, useDispatch } from 'react-redux'



const FoodList = ({Menu}) => {
  const dispatch = useDispatch();
  const Filter_tag= useSelector((state) => state.menu.Filter_tag);

  const [order,setOrder]=useState('-top-16')
const triggerModdal=(item)=>{
  setOrder('top-16')
  dispatch(Add_Order(item))
  setTimeout(()=>{
    setOrder('-top-16')
    
  },1500)
}

  return (
    <main className='FoodList'>
   <section className='FoodListNav'>
   <div className='Line'></div>
   <p>{Filter_tag}</p>
   <div className='Line'></div>
   </section>
   <SingularityUse Menu={Menu} func={triggerModdal}/>


     <Modal order={order}/>
   
    </main>
  )
}


const Modal = ({order}) => {
  return (
    <div className={`Modal bg-white fixed duration-1000 ${order} text-black    text-xl rounded-full border border-slate-200 opacity-100 items-center flex justify-around px-6  left-1/2 transform -translate-x-1/2 z-50`}>
    <div className='bg-green-400 flex rounded-full text-white'><CheckIcon fontSize='small'/></div>
      <p >
      Order Added

      </p>
    </div>
  )
}



export const SingularityUse = ({Menu,func}) => {
  return (
    <section className='FoodList_items flex justify-between mb-10'>
   {
     Menu.map (( item)=>{
       return (
       <React.Fragment key={item.id} > 
       {item.special?
       <SingBigItem  {...item} />
       
       :
       <SingleItem {...item} item={item} func={func}/>
      }
       </React.Fragment>
       
       )
      })}
   
   </section>
  )
}


const SingleItem = memo(({name,price,Description,img,id,item,func})=>{
 
  return(
    <div  className='FoodList_items_item relative flex  ' >
<Link to={`/Menu/items/${id}` } >
  <div style={{backgroundImage: `url(${img})`}}></div>
   
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
})
const SingBigItem =memo(({name,price,Description,img,id})=>{
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
})
export default FoodList
