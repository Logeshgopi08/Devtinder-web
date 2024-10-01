import axios from "axios";
import { BASE_URL } from "../utlis/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnectionData } from "../utlis/connectionSlice";
import UserContainer from "./UserContainer";

const Connection = ()=>{
   
    const connectionData = useSelector((store)=>store.connection);
    const dispatch = useDispatch();

    const fetchConnectionData = async()=>{
       try {
        const res = await axios.get(BASE_URL+"/user/connections",{withCredentials:true});

        console.log(res.data);
         
        dispatch(addConnectionData(res.data?.connectionRequest));
        
       } catch (error) {
          console.log(error.message);
          
       }
    }

    useEffect(()=>{
        fetchConnectionData();
    },[]);

    if(!connectionData) return null;

    if(connectionData.length <=0){
        return <div>No Connection yet</div>
    }

    return (
        <div>
           {connectionData.map((r)=>{
            return <UserContainer key={r._id} data={r}/>
           })}
        </div>
    );
}

export default Connection;