import { useEffect,memo} from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Layout from './Layout'
import MenuPage from './Pages/MenuPage'
import OrderPage from './Pages/OrderPage'
import Order_SinglePage from './Pages/Order_SinglePage'
import Location from './Pages/Location'
import { useDispatch,useSelector } from 'react-redux'
import About from './Pages/About'
import Login_form from './Components/Login_form'
import Register_form from './Components/Register_form'
import { LogInSuccess, LogOut } from './features/counter/signInSlice'
import axios from 'axios'


axios.defaults.baseURL = 'https://delicacy-api.onrender.com/';

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
  const test =()=>{
   console.log(Sign)
  }
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
