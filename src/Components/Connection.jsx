import axios from "axios";
import { BASE_URL } from "../utlis/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnectionData } from "../utlis/connectionSlice";

import { Link } from "react-router-dom";
import ConnectionBox from "./ConnectionBox";

const Connection = ()=>{
   
    const connectionData = useSelector((store)=>store.connection);
    const dispatch = useDispatch();

    const fetchConnectionData = async()=>{
       try {
        const res = await axios.get(BASE_URL+"/user/connections",{withCredentials:true});

        console.log(res.data);
         
        dispatch(addConnectionData(res.data?.data));
        
       } catch (error) {
          console.log(error.message);
          
       }
    }

    useEffect(()=>{
        fetchConnectionData();
    },[]);

    if(!connectionData) return null;

    if(connectionData.length <=0){
        return <div><h1 className="text-white">No Connection yet</h1></div>
    }

    return (
        <div>
           {connectionData.map((r)=>{
            return <Link to={"/chat/"+r._id} key={r._id} ><ConnectionBox  data={r}/> </Link> 
           })}
        </div>
    );
}

export default Connection;