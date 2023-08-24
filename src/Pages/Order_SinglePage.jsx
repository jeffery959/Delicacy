import {useState} from 'react'
import { useParams } from 'react-router-dom';
import StarRating from '../Components/StarRating'
import "./Order_SinglePage.css"
import { SingularityUse } from '../Components/FoodList'
import { Add_Order} from '../features/counter/menuSlice'
import { useSelector, useDispatch } from 'react-redux'
import Footer from '../Components/Footer';
import CheckIcon from '@mui/icons-material/Check';
const Order_SinglePage = () => {
  const { id } = useParams();
  const Menu = useSelector((state) => state.menu.Menu);
  const sub_Menu = useSelector((state) => state.menu.sub_Menu);
  const Item= Menu.find((item)=>item.id===parseInt(id))

 
const dispatch = useDispatch();
const [order,setOrder]=useState('-top-16')
const triggerModdal=()=>{
  setOrder('top-16')
  dispatch(Add_Order(Item))
  setTimeout(()=>{
    setOrder('-top-16')
    
  },1500)
}


  return (
    <div className=' Order_SinglePage flex flex-col'>
      

        <Modal order={order}/>
      
        <div className='Order_SinglePage_Contain '>
            <div className='Order_SinglePage_Contain_Half1'>

             <img src={Item.img} alt=""  />
             <div className='Order_SinglePage_Contain_Half1_txt  '>
              <div className='flex flex-col'>

                <h3>{Item.name}</h3>
                <p>{Item.Description}</p>
                <div>
                
                  <StarRating/>

                  <p>Qty:{Item.count}</p>
                </div>
                <div className=''>
                    <p>30 Mins | 320cal | 1 Serving</p>
                <p>{Item.price}</p>
                </div>
              </div>
                <button onClick={()=>triggerModdal()}>Order</button>
             </div>
            </div>
               <h3 className='Order_SinglePage_Contain_2nd_Title'>Ingredients</h3>
            <div className='Order_SinglePage_Contain_2nd'>
                {
                  Item.ingredients.map((item,Id)=><img src={item.Img} key={Id}></img>)
                }
            </div>



        </div>
        <div className='  Order_extend w-screen  flex flex-col items-center   '>
          <h3 className='  text-center'>Menu</h3>
          <div className='w-full'>

        <SingularityUse Menu={sub_Menu}/>
          </div>
        </div>
        <Footer/>
    </div>
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

export default Order_SinglePage