/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { BASE_URL } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { removeFeed } from "../utlis/feedSlice";

const UserCard = ({user})=>{

     const dispatch = useDispatch();
    const {firstName, lastName,age,photoUrl,gender,About,skills} = user;

    
       
    const sendRequest = async(status,_id)=>{

     try {
      const res = await axios.post(BASE_URL+"/request/send/"+status +"/"+_id,{},{withCredentials:true});
       
      dispatch(removeFeed(_id));
      console.log("Request Send");

     } catch (error) {
      console.log(error.message);
      
     }
      
    }
     
    return (
        <div >
      <div className="card bg-base-300 w-80  shadow-xl ">
        <figure>
          <img className="w-full h-96"
            src={photoUrl}
            alt="img"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName +" " +lastName}</h2>
          <p>{age}</p><p>{gender}</p>
          <p>{About}</p>
          <p>{skills}</p>
          <div className="card-actions justify-end py-2">
            <button  onClick={()=>sendRequest("ignored",user?._id)}
            className="btn btn-secondary">Ignore</button>
            <button   onClick={()=>sendRequest("interested",user?._id)}
            className="btn btn-primary">Interested</button>
          </div>
        </div>
      </div>
      
    </div>
    );
}

export default UserCard;