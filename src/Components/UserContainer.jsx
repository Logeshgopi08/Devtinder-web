/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import axios from "axios";
import { BASE_URL } from "../utlis/constant";
import { removeRequestData } from "../utlis/requestSlice";
import { useDispatch } from "react-redux";

const UserContainer = ({ data }) => {
  const { fromUserId } = data;
  const { firstName, lastName, age, gender, About, skills, photoUrl } =
    fromUserId;

    const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequestData(_id));
      console.log("Request Reviewed");
      
    } catch (error) {
      console.log( "Error :" +error);
    }
  };
  return (
    <div className="flex justify-between w-1/2 mx-auto bg-base-300 px-5 py-5 rounded-lg my-4 mt-8">
      <div className="">
        <img
          className="w-28 h-28 rounded-full object-fill"
          alt="user-image"
          src={photoUrl}
        />
      </div>
      <div>
        <h2>
          {" "}
          {firstName} {lastName}
        </h2>
        <h3>
          {age}
          {gender}
        </h3>
        <p>{About}</p>
        <p>{skills}</p>
      </div>
      <div className="flex flex-col">
        <button  onClick={()=>reviewRequest("accepted",data._id)}
        className="btn btn-active btn-primary my-2 px-5">Accept</button>

        <button  onClick={()=>reviewRequest("rejected",data._id)}
        className="btn btn-active btn-secondary my-2 px-5">
          Reject
        </button>
      </div>
    </div>
  );
};

export default UserContainer;
