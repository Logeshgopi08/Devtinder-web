/* eslint-disable no-unused-vars */

import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utlis/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utlis/userSlice";

/* eslint-disable react/prop-types */
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState("age");
  const [gender, setGender] = useState("gender");
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [About, setAbout] = useState(user.About);
  const [skills, setSkills] = useState("Skills");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handleSaveProfile = async () => {
    try {
      const updateData = await axios.put(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          age,
          gender,
          photoUrl,
          About,
          skills,
        },
        { withCredentials: true }
      );

      dispatch(addUser(updateData?.data?.data));
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-52">
      <div className="flex justify-center my-6  pb-10">
        <div className="card bg-base-300 w-80 py-0 mx-5 shadow-xl">
          <div className="card-body py-7">
            <h2 className="card-title">Edit Profile</h2>
            <input
              type="text"
              placeholder={user.firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder={user.lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder={age}
              onChange={(e) => setAge(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder={gender}
              onChange={(e) => setGender(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder={user.photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder={user.About}
              onChange={(e) => setAbout(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="Skills"
              onChange={(e) => setSkills(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="card-actions justify-center">
              <button onClick={handleSaveProfile} className="btn btn-primary">
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, age, gender, photoUrl, About, skills }}
        />
      </div>
      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
