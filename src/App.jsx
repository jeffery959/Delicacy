import { useEffect,memo} from 'react'
import './App.css'
import {lazy,Suspense} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Routes,Route } from 'react-router-dom'
import Layout from './Layout'
import { LogInSuccess, LogOut } from './features/counter/signInSlice'
import axios from 'axios'
import Loading from "./Pages/Loading"
import Login_form from "./Components/Login_form"
import Register_form from "./Components/Register_form"
axios.defaults.baseURL = 'https://delicacy-api.onrender.com/';



const Homepage= lazy(()=>import('./Pages/Homepage'))
const MenuPage= lazy(()=>import('./Pages/MenuPage'))
const OrderPage= lazy(()=>import('./Pages/OrderPage'))
const Location= lazy(()=>import('./Pages/Location'))
const About= lazy(()=>import('./Pages/About'))
const Order_SinglePage= lazy(()=>import('./Pages/Order_SinglePage'))

//Outside Fuction
const extractBearerToken = () => {
  const cookies = document.cookie.split(';');
  let token = null;
  
  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split('=');
    if (name === 'Cookies') {
      token = value;
    }
  });
  return token;
}




const makeAuthenticatedRequest = async (tok,dispatch) => {
  const token = tok
  if(token){
    
    
  
  try {
    const response = await axios.post('router/protected-route',{}, {
      headers: {
        authorization: `Bearer ${token}` // Include the "Bearer" token in the "Authorization" header
      }
    });
    // Handle the response data here
   const data = await response.data
    dispatch(LogInSuccess(data.user))
  } catch (error) {
    // Handle errors here
    dispatch(LogOut("Cookies"))
    console.error("Session expired");
  }}
};

const App= memo(()=> {
  const dispatch = useDispatch()
  const Sign=useSelector((state)=>state.menu)
  
  useEffect(()=>{
   makeAuthenticatedRequest(extractBearerToken(),dispatch)
  },[])
 
 const OpensignIn=useSelector((state)=>state.signIn.OpensignIn)
 const SignModal=useSelector((state)=>state.signIn.SignModal)

 const responseGoogle = (response) => {
  // Handle the response from Google after successful login
  console.log(response);
};

  return (
    <div className='overflow-hidden '> 
      <Suspense fallback={<Loading/>}>
    <Routes  >
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Homepage />} />

      <Route path='/Menu' element={  <MenuPage />
     
    } />
      <Route path='/Menu/items/:id' element={<Order_SinglePage/>}/>
      <Route path='/Order' element={<OrderPage />} />
      <Route path='/About' element={<About/>}/>
      <Route path='/Location' element={<Location/>}/>
      </Route>
    </Routes>
    </Suspense>
    {
OpensignIn&&!SignModal.SignIn&&
      <Register_form/>
    }
     {
OpensignIn&&SignModal.SignIn&&
    <Login_form/>
    }
    </div>
   

    
  )
}
)





export {extractBearerToken,makeAuthenticatedRequest}
export default App
