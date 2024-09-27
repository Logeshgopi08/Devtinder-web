import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BASE_URL } from "../utlis/constant";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utlis/userSlice";

const Body = () => {

  const user = useSelector((store)=>store?.user);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

   const fetchUser =async()=>{
    try {
      const userData = await  axios.get(BASE_URL +"/profile/view",{withCredentials:true});
       
      dispatch(addUser(userData.data));

      
    } catch (error) {
      if(error.status === 401){
        return navigate("/login");
      }
       console.log(error);
       
    }
   };

   useEffect(()=>{
     !user && fetchUser();
   },[]);


  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
