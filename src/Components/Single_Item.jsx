import {useRef,useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import {Blurhash} from 'react-blurhash'
import { useSelector,useDispatch } from 'react-redux';
import { Loading } from '../features/counter/menuSlice';
const SingleItem = ({name,price,Description,img,id,item,func})=>{
  
 const [imageLoaded,setImageLoaded]=useState(false)
const [opacity,setOpacity]=useState("opacity-0")
const Load = useSelector((state)=>state.menu.Loaded)
const dispatch = useDispatch()
const itemRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);
const handleDOMContentLoaded =() => {
  const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);




  const  image =  new Image()
  if(!Load){

    dispatch(Loading())
    
    image.onload=()=>{
   
        setImageLoaded(true)
        
   

      if (isMobile) {
      
      setTimeout(()=>{
        
        if(opacity=="opacity-0"){
          setOpacity("opacity-100")
          
        }
        
      },10000)}else{
      setTimeout(()=>{
        
        if(opacity=="opacity-0"){
          setOpacity("opacity-100")
          
        }
        
      },7000)}
      
    }
    
    image.src = img
  }else{

    
    setImageLoaded(true)
    image.onload=()=>{
      if(isMobile){

        setTimeout(()=>{
          
          if(opacity=="opacity-0"){
            setOpacity("opacity-100")
            
          }
          
        },1500)}
        else{
          setTimeout(()=>{
            
            if(opacity=="opacity-0"){
              setOpacity("opacity-100")
              
            }
            
          },500)}
          
      }
    image.src = img
  
  }
  
};
 
const checkVisibility = () => {
  if (itemRef.current) {
    const { top, bottom } = itemRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (top < windowHeight && bottom > 0) {
      setIsVisible(true);
      handleDOMContentLoaded()
      
 

    } else {
      
    }
  }
};
useEffect(() => {
  // Initial visibility check
  checkVisibility();

  // Attach scroll event listener to check visibility when scrolling
  window.addEventListener('scroll', checkVisibility);

  // Cleanup the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', checkVisibility);
  };
}, []);



    return(

        <div  ref={itemRef} className='FoodList_items_item relative flex overflow-hidden ' >



        <Link to={`/Menu/items/${id}` } >
          
              
{true&&(
<Blurhash
hash={item.Blurhash}
width={300}
height={500}
resolutionX={32}
resolutionY={32}
punch={1}/>

)}

      { imageLoaded&&<img src={img} 
        loading='lazy'
        className={`${opacity} duration-1000`}
         srcSet={`      
        
        ${img}?width=100 100w,
        ${img}?width=200 200w,
        ${img}?width=400 400w,
        ${img}?width=800 800w,  
        ${img}?width=1000 1000w,  
        
        `}  sizes='(max-with:80px) 100vw, 50vw' 
        alt='Image'
        fetchpriority="high"
        decoding='sync'
        
       
         
        />}
      
    
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
  
  
  const SingBigItem =({img,id,item})=>{
    const dispatch = useDispatch()
    
const [opacity,setOpacity]=useState("opacity-0")
const Load = useSelector((state)=>state.menu.Loaded)
    const [imageLoaded,setImageLoaded]=useState(false)
    const itemRef = useRef(null);
const [isVisible, setIsVisible] = useState(false);
const handleDOMContentLoaded = () => {
  const isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent);


  const image = new Image()
  if(!Load){

    dispatch(Loading())
    image.onload=()=>{
      setTimeout(()=>{
        setImageLoaded(true)
        
      },4000)

      if (isMobile) {
      
      setTimeout(()=>{
        
        if(opacity=="opacity-0"){
          setOpacity("opacity-100")
          
        }
        
      },9000)}else{
      setTimeout(()=>{
        
        if(opacity=="opacity-0"){
          setOpacity("opacity-100")
          
        }
        
      },4000)}
      
    }
    
    image.src = img
  }else{

    
    setImageLoaded(true)
    image.onload=()=>{
      if(isMobile){

        setTimeout(()=>{
          
          if(opacity=="opacity-0"){
            setOpacity("opacity-100")
            
          }
          
        },1000)}
        else{
          setTimeout(()=>{
            
            if(opacity=="opacity-0"){
              setOpacity("opacity-100")
              
            }
            
          },200)}
          
      }
    image.src = img
  
  }
  
};
 
const checkVisibility = () => {
  if (itemRef.current) {
    const { top, bottom } = itemRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (top < windowHeight && bottom > 0) {
      setIsVisible(true);
      handleDOMContentLoaded()
      
 

    } else {
      
    }
  }
};
useEffect(() => {
  // Initial visibility check
  checkVisibility();

  // Attach scroll event listener to check visibility when scrolling
  window.addEventListener('scroll', checkVisibility);

  // Cleanup the event listener when the component unmounts
  return () => {
    window.removeEventListener('scroll', checkVisibility);
  };
}, []);
  
   
 
    return (



        <Link  to={`/Menu/items/${id}` } ref={itemRef}  className='BigItem p-3 overflow-hidden'>
          {!imageLoaded&&(
<Blurhash
hash={item.Blurhash}
width={"100%"}
height={"100%"}
resolutionX={32}
resolutionY={32}
punch={1}/>

)}{imageLoaded&&(
  <div className='BigItem_img px-14 py-5 ' style={{backgroundImage: `url(${img})`}}>
      
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



)}
      

        

            
    
       
    
       </Link>
    )
  }



  
  export {SingBigItem,SingleItem}