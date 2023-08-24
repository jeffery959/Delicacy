import React,{useState} from 'react'
import './Register_form.css'
import { useDispatch } from "react-redux"
import { OpenSignmodal } from "../features/counter/signInSlice"
import { IconButton } from '@mui/material'
import axios from 'axios'
const Register_form = () => {
  const dispatch = useDispatch()
 const [UserNameSignUp,setUserNameSignUp]=useState(false)
 const  [user,setUser]=useState({name:"",email:"",password:""})
 const handleRegistration =async()=>{
  if(!user.name||!user.email||!user.password){
    alert("Please dont leave an input blank")
    return
  }
    await axios.post('router/Register',user)
     .then(response => {
       // Handle success
     alert(response.data.message);
     
    dispatch(OpenSignmodal("signIn"))
     })
     .catch(error => {
       // Handle error
       alert( 'Email or User has been taken try again');
     });
setUser({name:"",email:"",password:""})
  }

  const handleInputChange = (e) => {
   const {name,value }=e.target
  
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div className='Register_form'>
        
        {UserNameSignUp?<div>

          <div className='Cls_Bck_btns'>
            <IconButton className='Icon' onClick={()=>setUserNameSignUp(false)}>

            <img src="Icons\Back.svg" alt="" />
            </IconButton>
        <h3 >Sign Up</h3>
        <IconButton className='Icon' onClick={()=>dispatch(OpenSignmodal("Close"))}>

            <img src="Icons\Close.svg" alt=""  />
        </IconButton>
          </div>
       
          <input type="email" name='email' value={user.email} onChange={(e)=>handleInputChange(e) } className='border-b outline-none' placeholder='EmailAddress' />
          <input type="text" name='name' value={user.name}  onChange={(e)=>handleInputChange(e) } className='border-b outline-none' placeholder='UserName' />
          <input type="password" name='password' value={user.password}  onChange={(e)=>handleInputChange(e) }  className='border-b outline-none' placeholder='Passwords' />
          <button onClick={()=>handleRegistration()}>Submit</button>

        </div>:
          
          <div >
  <div className='w-full flex justify-center Cls_Bck_btns'>
  <h3 className='w-4/5 flex justify-center '>Sign Up</h3>
          <IconButton className='Icon' onClick={()=>dispatch(OpenSignmodal("Close"))} >

            <img src="Icons\Close.svg" alt=""/>
          </IconButton>
          </div>
          <SingleDecks onClick={()=>setUserNameSignUp(true)} img={"Icons/User.svg"}  txt="Use Email or Username"/>
            <SingleDecks img={"Icons/Google.svg"} txt={"Continue with Google"}/>
        </div>

          }
  <div className='Mng_Acct'>
    
    <p > <span className='Pssword'>Forgot password?</span> </p>
    

    <p>Already have an account? <span className='SignIN' onClick={()=>dispatch(OpenSignmodal("signIn"))}> Sign In</span></p>
    
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