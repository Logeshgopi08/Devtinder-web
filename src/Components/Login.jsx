import axios from "axios";
import { useState } from "react";

const Login = () => {

    const [emailID,seEmailId ]= useState("janani@gmail.com");
    const [password,setPassword] = useState("Janani@003");

    const handleLogin =async()=>{
       try {
           const res = await axios.post("http://localhost:3500/login",{emailID,password},
            {withCredentials:true}
           )
       } catch (error) {
         console.log(error);
         
       }
        
    }

  return (
    <div className="flex justify-center mt-[3%]">
      <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login </h2> 
          <div>
          <input type="text" value={emailID} onChange={(e)=>seEmailId(e.target.value)}
           placeholder="Email " className="input input-bordered w-full max-w-xs my-2" />

          <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password" className="input input-bordered w-full max-w-xs my-2" />

          </div>
          <div className=" card-actions flex justify-center  ">
            <button  onClick={handleLogin}
            className="btn btn-primary ">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
