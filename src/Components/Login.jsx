import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utlis/constant";

const Login = () => {
    
  
  const [firstName,setFirstName ]= useState("");
  const [lastName,setLastName] = useState("");
    const [emailID,seEmailId ]= useState("");
    const [password,setPassword] = useState("");
    const [isLogin,setIsLogin] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSignIn = async()=>{

      try {
        const res = await axios.post(BASE_URL+"/signup",{
          firstName,
          lastName,
          emailID,
          password
        },{withCredentials:true});

        dispatch(addUser(res.data));
        navigate("/profile");
        
      } catch (error) {
        console.log(error.message);
        
      }

    } 

    const handleLogin =async()=>{
       try {
           const res = await axios.post(BASE_URL+"/login",{emailID,password},
            {withCredentials:true}
           );
          //  console.log(res.data);
           dispatch(addUser(res.data));
           
           return navigate("/");

       } catch (error) {
         console.log(error);
         
       }
        
    }

  return (
    <div className="flex justify-center mt-[3%] mb-[4%] ">
      <div className="card bg-base-300 w-96 shadow-xl my-7 ">
        <div className="card-body">
          <h2 className="card-title">{isLogin ?"Login" : "Sign Up"} </h2> 
          <div>
          
           {!isLogin &&(<div>
           <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}
           placeholder="FirstName " className="input input-bordered w-full max-w-xs my-2" />

           <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}
           placeholder="Last Name " className="input input-bordered w-full max-w-xs my-2" />
           </div>)}
          <input type="text" value={emailID} onChange={(e)=>seEmailId(e.target.value)}
           placeholder="Email " className="input input-bordered w-full max-w-xs my-2" />

          <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password" className="input input-bordered w-full max-w-xs my-2" />

          </div>
          <div className=" card-actions flex justify-center  ">
            <button  onClick={isLogin ?handleLogin:handleSignIn}
            className="btn btn-primary ">{isLogin ?"Login" : "Sign Up"}</button>
          </div>
          <div>
            <p  onClick={()=>setIsLogin(!isLogin)}
            className="py-3 text-xl font-normal hover:underline-offset-auto cursor-pointer">{ isLogin ?"New User? Sign Up" : "Already have a Account? Login"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
