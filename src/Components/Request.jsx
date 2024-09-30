import axios from "axios";
import { BASE_URL } from "../utlis/constant";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequestData } from "../utlis/requestSlice";
import UserContainer from "./UserContainer";

const Request = () => {
  const requestData = useSelector((store) => store.request);
  const dispatch = useDispatch();

  const fetchRequestData = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/request/received", {
        withCredentials: true,
      });

    //   console.log(res.data.data);
      dispatch(addRequestData(res.data?.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchRequestData();
  }, []);

  if (!requestData) return null;

  if (requestData.length <= 0) {
    return <div>No Request</div>;
  }

//   console.log(requestData[0].fromUserId);

const {fromUserId} = requestData[0];
console.log(fromUserId);


  
  return (
    <div>
      <h1 className="font-bold text-2xl">Request Received</h1>

    {  requestData.map((req)=>{
        return  <UserContainer key={req._id} data={req}/>
        
    })
        }
    </div>
  );
};

export default Request;
