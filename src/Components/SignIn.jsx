import "./SignIn.css"
import { useDispatch ,useSelector} from "react-redux"
import { OpenSignmodal, LogOut } from "../features/counter/signInSlice"

const SignIn = () => {
  const dispatch = useDispatch()
  const LogedIn = useSelector((state)=>state.signIn.LogedIn)
  const UserData = useSelector((state)=>state.signIn.UserData)
  const handleLogin=(e)=>{
    dispatch(OpenSignmodal(e))
    dispatch(OpenSignmodal("Nothing"))
  }
  return (
    <div className="SignIn">
      {LogedIn?
      <>
        <p className="w-4/5">{UserData.name}</p>
         <div className="border-b-2 w-4/5" ></div>
        <button className="w-4/5" onClick={()=>dispatch(LogOut("Cookies"))}>Logout</button>
      </>:<>

        <button className="w-4/5" onClick={()=>handleLogin("signUp")}>SignUp</button>
         <div className="border-b-2 w-4/5" ></div>
        <button className="w-4/5" onClick={()=>handleLogin("signIn")}> SignIn</button>
      </>
      }
    </div>
  )
}

export default SignIn