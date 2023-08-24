import React,{ Suspense, lazy, memo,useState}from 'react'

import { Add_Order} from '../features/counter/menuSlice'
import "./FoodList.css"
import CheckIcon from '@mui/icons-material/Check';
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../Pages/Loading';


const SingleItem = lazy(() =>
import('./Single_Item').then(module => ({ default: module.SingleItem }))
);

const SingBigItem = lazy(() =>
import('./Single_Item').then(module => ({ default: module.SingBigItem }))
);


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
         <Suspense fallback={<Loading/>}>
       {item.special?
       <SingBigItem {...item} />
       
       :
       <SingleItem {...item} item={item} func={func}/>
      }
      </Suspense>
       </React.Fragment>
       
       )
      })}
   
   </section>
  )
}



export default FoodList
