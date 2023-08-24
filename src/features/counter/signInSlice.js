import { createSlice } from '@reduxjs/toolkit'



const initialState = {
 OpensignIn:false,
 SignModal:{Sign:false,SignIn:false},
 LogedIn:false,
 UserData:{}

}

const signInSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  OpenSignmodal:(state,action)=>{
    if(action.payload==="Nothing"){
  state.SignModal.Sign=!state.SignModal.Sign
  
}
if(action.payload==="signIn"){
  state.OpensignIn=true
  state.SignModal.SignIn=true
  
}
if(action.payload==="signUp"){
  state.OpensignIn=true
  state.SignModal.SignIn=false  

}
if(action.payload==="Close"){
  state.OpensignIn=false

}

  },

LogInSuccess:(state,action)=>{
 
    state.LogedIn=true
    
    state.UserData={...action.payload}
    


 
},
LogOut:(state,action)=>{
  document.cookie = `${action.payload}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    state.LogedIn=false


 
},


 
  },
})

// Action creators are generated for each case reducer function
export const {OpenSignmodal,LogInSuccess,Check,LogOut} = signInSlice.actions

export default signInSlice.reducer