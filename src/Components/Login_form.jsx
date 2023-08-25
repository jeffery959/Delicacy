import {useState} from 'react'
import './Register_form.css'
import { useDispatch } from "react-redux"
import { OpenSignmodal } from "../features/counter/signInSlice"
import axios from 'axios'
import {makeAuthenticatedRequest} from '../App'
import { IconButton } from '@mui/material'

const Register_form = () => {
  const setCookie = (name, value) => {
   
    document.cookie = name + "=" + value + ";"
  }

 

  const handleLogin =async()=>{
    if(!user.name||!user.password){
      alert("Please dont leave an input blank")
      return
    }
      await axios.post('router/login',user)
       .then(response => {
         // Handle success
         alert(response.data.message);
         makeAuthenticatedRequest(response.data.token,dispatch)
         dispatch(OpenSignmodal("Close"))
        
       setCookie('Cookies',response.data.token,1)
       
      })
       .catch(error => {
         // Handle error
        alert(error.response.data.error)
       });
  setUser({name:"",email:"",password:""})
    }
    //Input Change
    const handleInputChange = (e) => {
      const {name,value }=e.target
     
       setUser(prevUser => ({
         ...prevUser,
         [name]: value
       }));
       
     };
   
     const  [user,setUser]=useState({name:"",email:"",password:""})
    const dispatch = useDispatch()
    
 const [UserNameSignUp,setUserNameSignUp]=useState(false)
  return (
    <div className='Register_form'>
        
        {UserNameSignUp?<div>

<div className='Cls_Bck_btns'>
  <IconButton className='Icon'  onClick={()=>setUserNameSignUp(false)}>
  <img src="Icons\Back.svg" alt="" />
  </IconButton>
<h3>Log In</h3>
<IconButton className='Icon'  onClick={()=>dispatch(OpenSignmodal("Close"))} >

  <img src="Icons\Close.svg" alt="" />
</IconButton>
</div>


<input type="text" name='name' value={user.name}  onChange={(e)=>handleInputChange(e) } className='border-b outline-none mt-3' placeholder='UserName' />
 <input type="password" name='password' value={user.password}  onChange={(e)=>handleInputChange(e) }  className='border-b outline-none' placeholder='Passwords' />
<button onClick={()=>handleLogin()}>Login</button>

</div>:

<div >
<div className='w-full flex justify-center Cls_Bck_btns'>
<h3 className='w-4/5 flex justify-center '>Sign In</h3>
<IconButton className='Icon'   onClick={()=>dispatch(OpenSignmodal("Close"))}> 
  <img src="Icons\Close.svg" alt="" />
</IconButton>
</div>
<SingleDecks onClick={()=>setUserNameSignUp(true)} img={"Icons/User.svg"}  txt="Use Email or Username"/>
  <SingleDecks img={"Icons/Google.svg"} txt={"Continue with Google"}/>
</div>

}
  <div className='Mng_Acct'>
    
    <p > <span className='Pssword'>Forgot password?</span> </p>
    

    <p>Don't have an account? <span className='SignIN' onClick={()=>dispatch(OpenSignmodal("signUp"))}> Sign Up</span></p>
    
  </div>

    </div>
  )
}

const SingleDecks=({img,txt,onClick})=>{
    return(

    <div className='singleDecks flex ' onClick={onClick}>
 <img src={img} alt="" />
 <p>{txt}</p>

 
    </div>
    )
}

export default Register_form